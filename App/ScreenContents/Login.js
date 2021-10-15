import React, { Component } from 'react'
import { ImageBackground,  View, Text, TouchableOpacity,  StyleSheet,Image,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import { connect } from "react-redux";

import Card from '../components/Card';


const image = { uri: "http://critssl.com/img/bgImg.jpg" };
class Login extends Component {
   
   state = {
      email: 'rushanthasindu10@gmail.com',
      password: 'rushan'
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   componentDidMount = () => {
      // AsyncStorage.getItem('userId').then((value) => {if(value!='0')  Actions.home()})
      
   }
   login = (email, pass,props) => {
      
    axios.post('http://192.168.8.101:3000/user/auth', {
            email: email,
            password: pass
      })
      .then(function (response) {
       
        console.log(response.data.dataset[0].id);
        if(response.data.success){
           console.log(response.data.dataset[0]);
         AsyncStorage.setItem('userId', ''+response.data.dataset[0].id);
         AsyncStorage.setItem('trollyId', ''+response.data.dataset[0].trollyId);
         AsyncStorage.setItem('userName', response.data.dataset[0].name);
            props.isLogedIn(response.data.dataset[0])
               Actions.home()
        }
        else 
        alert(" Please Try Again")
      })
      .catch(function (error) {
        console.log(error);
      });
      
   }
   render() {
      return (
         <ImageBackground  source={image} style={styles.image}>
         <View style = {styles.container}>
         
         <Card>
         <Image source = {{uri:'http://critssl.com/img/food.png'}}style = {{ width: 300, height: 150, marginBottom:0 , marginLeft:20}}/>
         <Text style={styles.header}>Login</Text>
        <View>
         <Text style={styles.text}>Email</Text>
         <View style={styles.inputView} >
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            </View>
            
            <Text style={styles.text}>Password</Text>
            <View style={styles.inputView} >
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password,this.props)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.registerButton}
               onPress = {
                  () => Actions.register()
               }>
               <Text style = {styles.registerButtonText}>  New User?  </Text>
            </TouchableOpacity>
            
           </View>
           </Card>
           </View>
         </ImageBackground>
      )
   }
} 

function mapStateToProps(state){
   return {
      count:state.count,
      user:state.user
   }
} 
function mapDispatchToProps(dispatch){
   return {
      isLogedIn:(data)=>{dispatch({type:'USER_LOGED_IN',value:data})},
      
   }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Login)

const styles = StyleSheet.create({
   container: {
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.3)',
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      height: '100%',
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center",

        },
   header: {
      
      fontSize: 40,
      color: '#000',
      marginBottom: 20,
      marginLeft: 80,
    },
    text: {
      fontSize: 20,
      alignItems: 'center',
      marginBottom: 10,
      color: '#000'
  },
   input: {
      margin: 15,
      height: 40,
      width: '60%',
      borderRadius: 30,
      color: 'white'
   },
   submitButton: {
      // backgroundColor: '#e91e63',
      // padding: 10,
      // width: '30%',
      // marginTop: 10,
       marginLeft: 30,
      // marginBottom: 20,
      // borderRadius: 30,
      // height: 40,
      // color: 'white'
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20,
   },
   registerButton: {
      // backgroundColor: '#9c27b0',
      // padding: 10,
      // marginLeft: 80,
      // width: '40%',
      // borderRadius: 30,
      // height: 40,
      // color: 'white'
      marginLeft: 30,
      width:"80%",
      backgroundColor:"#9c27b0",
      borderRadius:25,
      height:30,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
   },
   image: {
      height: '100%',
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center",

        },
   registerButtonText: {
      color: 'white',
      fontSize: 20,
   }
   // ,
   // inputView:{
   //    width:"80%",
   //    backgroundColor:"#465881",
   //    borderRadius:25,
   //    height:50,
   //    marginBottom:20,
   //    justifyContent:"center",
   //    padding:20
   //  }
})