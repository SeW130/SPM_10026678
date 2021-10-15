import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import { connect } from "react-redux";
import { WebView } from 'react-native-webview';





class App extends React.Component {
   state={
      
       'userId': '',
       'userName': '',
       screensize:750
   
   }
   componentDidMount = () => {
      AsyncStorage.getItem('userId').then((value) => this.setState({ 'userId': value }))
      AsyncStorage.getItem('userName').then((value) => this.setState({ 'userName': value }))
   }

   render() {
      return (
         <View style = {styles.container}>
             <WebView 
             source={{ uri: 'http://192.168.8.101/Food/APP/orders.php?id='+this.state.userId}} 
             automaticallyAdjustContentInsets={true}
             startInLoadingState={true}
            scalesPageToFit={true}/>
         </View>
      );
   }
}

function mapStateToProps(state){
   return {
      count:state.count
   }
} 
function mapDispatchToProps(dispatch){
   return {
      increseCounter:()=>{dispatch({type:'INCRESE'})},
      
   }
} 

export default connect(mapStateToProps,mapDispatchToProps)(App)


const styles = StyleSheet.create({
   container: {
      // transform: [{ rotate: '90deg'}],
      height: 720,
   }
 })
 