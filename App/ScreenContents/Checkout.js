import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import { connect } from "react-redux";
import { WebView } from 'react-native-webview';

class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
             <WebView source={{ uri: 'http://192.168.8.101/Food/APP/checkout.php'}} />
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
      transform: [{ rotate: '90deg'}],
      height: 500,
   }
 })