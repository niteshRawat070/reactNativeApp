import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Modal, FlatList, Image, ScrollView, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


export default function ListItems() {
    const [data,setData]=useState([{
        id:1,
        title:'Delhi',
        description:"Delhi, city and national capital territory",
        image:'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg'
    },{
        id:2,
        title:"Nainital",
        description:"Nainital is located in the Kumaon foothills of the outer Himalayas",
        image:'https://www.transindiatravels.com/wp-content/uploads/nainital-lake.jpg'
    },{
        id:3,
        title:"Tamil Nadu",
        description:"Tamil Nadu, or land of the Tamils, is the fourth largest state of India",
        image:'https://img.traveltriangle.com/blog/wp-content/uploads/2017/07/Kodaikanal1.jpg'
    },{
        id:4,
        title:"Amritsar",
        description:"Amritsar is the largest and most important city in Punjab",
        image:'https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-golden-temple.jpg'
    },{
        id:5,
        title:"Shimla",
        description:"Simla, is the capital and the largest city of the Indian state of Himachal Pradesh",
        image:'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2021/04/Best-Places-to-Visit-in-Shimla.jpg'
    },{
        id:6,
        title:"Goa",
        description:"Goa is a small state situated on the western coast of India",
        image:'https://img.traveltriangle.com/blog/wp-content/uploads/2019/09/Goa.jpg'
    },{
        id:7,
        title:"Jaipur",
        description:"Jaipur is also known as the Pink City",
        image:'https://www.planetware.com/wpimages/2019/09/india-jaipur-top-attractions-city-palace.jpg'
    },{
        id:8,
        title:"Gurugram",
        description:"Gurugram, formerly known as Gurgaon, is a city located in the northern Indian state",
        image:'https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-Gurgaon-things-to-do_27th-nov.jpg'
    }
])
const [edit,setEdit]=useState(data);
const [isRender,setIsRender]=useState(false);
const [modalVisible, setModalVisible] = useState(false)
const [inputText,setInputText]=useState()
const [editItem,setEditItem]=useState()
const handleDelete=(id)=>{
    let filterArray=data.filter((val,i)=>{
        if(val.id!==id){
            return val
        }
    })
    setData(filterArray)
}
const handleEditItem=(editItem)=>{
    const newData=data.map(item=>{
        if(item.id==editItem){
            item.title=inputText;
            return item
        }
        return item
    })
    setData(newData)
    setIsRender(!isRender)
}
const onPressSaveEdit=()=>{
    handleEditItem(editItem);
    setModalVisible(false);
}
const onPressItem=(item)=>{
    setModalVisible(true);
    setInputText(item.title);
    setEditItem(item.id);
}
const renderItem=({item})=>{
    return(
        <TouchableOpacity style={{width:'100%',height:100}} onPress={()=>Alert.alert("What you want to do?","click to perform action",[
            {text:'Back'},
            {text:'Edit',onPress:()=>onPressItem(item)},
            {text:'Delete',onPress:()=>handleDelete(item.id)}
        ])}>
            <View style={{flex:1,width:'100%',height:'100%',flexDirection:'row'}}>
                <View style={{width:'40%'}}>
                <Image source={{uri:item.image}} resizeMode='stretch' style={{height:100,width:'100%'}} />
                </View>
                <View style={{width:'60%'}}>
                <Text style={{fontWeight:'bold',letterSpacing:2}}>{item.title}</Text>
                <Text style={{color:'gray'}}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
    return (
        <ScrollView>

        <View style={styles.container}>
            <FlatList 
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            extraData={isRender}
            />
        <Modal 
        animationType='fade'
        visible={modalVisible}
        onRequestClose={()=>setModalVisible(false)}
        >
            <View style={styles.modalView}>
                <Text style={{letterSpacing:3,fontSize:20,marginVertical:10}}>Change The Title</Text>
                <TextInput 
                style={styles.textInput}
                onChangeText={(text)=>setInputText(text)}
                defaultValue={inputText}
                editable={true}
                multiline={false}
                maxLength={20}
                />
                <TouchableOpacity onPress={()=>onPressSaveEdit()}
                style={styles.touchableSaveEdit}
                >
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            </View>
        </Modal>
        </View>
        </ScrollView>

    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%'
    },
    textInput:{
        width:'90%',
        height:70,
        borderColor:'grey',
        borderWidth:1,
        fontSize:25
    },
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    touchableSaveEdit:{
        backgroundColor:'orange',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20,
        padding:10
    }
})
