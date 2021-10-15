import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import { connect } from "react-redux";

class Inputs extends Component {
   

   
   render() {
      return (
         <View style = {styles.container}>
            <Text onPress ={()=>this.props.increseCounter()} style={styles.titleText}>{this.props.count}</Text>
            <Button 
             text = {"Button Text"} />
         </View>
      )
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

export default connect(mapStateToProps,mapDispatchToProps)(Inputs)

const styles = StyleSheet.create({
   titleText: {
      color:'white',
      fontSize: 240,
      fontWeight: "bold"
    }
})