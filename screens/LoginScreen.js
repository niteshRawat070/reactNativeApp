import React, { useState } from 'react';
import { Button, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Constants from "expo-constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup'

export default function LoginScreen({ navigation }) {
    const formSchema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required().min(3).max(50)
    })
    return (
        <View style={styles.container}>
      
          <Formik initialValues={{
              email:'',
              password:''
          }}
          onSubmit={(values)=>{
              navigation.navigate('Lists')
          }}
          validationSchema={formSchema}
          >
{(props)=>(
    <ImageBackground source={require('../images/background.png')} style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}  resizeMode='stretch'>
    <View style={styles.inputContainer}>
    <MaterialCommunityIcons name="email" size={24} color="black" />
    <View style={{flexDirection:'column',width:'100%'}}>
      <TextInput style={styles.input}
          placeholder="Email"
          onChangeText={props.handleChange('email')}
          value={props.values.email}
          onBlur={props.handleBlur('email')}
        />
    <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
    </View>
    </View>
    <View style={styles.inputContainer}>
    <MaterialCommunityIcons name="onepassword" size={24} color="black" />
    <View style={{flexDirection:'column',width:'100%'}}>
      <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={props.handleChange('password')}
          value={props.values.password}
          onBlur={props.handleBlur('password')}
      />
      <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>
      </View>
    </View>
    <View style={{width:'75%',marginTop:30}}>
    <Button title='Login' onPress={props.handleSubmit} color="#326da8"/>
    </View>
    </ImageBackground>
)}
          </Formik>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%'
    },
    input:{
      borderBottomWidth:1,
      borderBottomColor:'gray',
      width:"90%",
      color:'#1e1e1e',
      backgroundColor:'white',
      borderRadius:50,
      paddingHorizontal:10,
      marginLeft:5
    },
    inputContainer:{
      height:50,
      width:'80%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      margin:5,
      alignItems:'flex-start'
    },
    error:{
        color:'red'
    }
  });
  