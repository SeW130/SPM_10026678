import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
const goToView=(props,id)=>{
   
                props.setItem(id);
            Actions.item();
            
}
function mapStateToProps(state){
    return {
        count:state.count,
       item:state.item
    }
 } 
 function mapDispatchToProps(dispatch){
    return {
       setItem:(data)=>{dispatch({type:'ITEM',value:data})},
       
    }
 } 
const PresentationalComponent = (props) => {
   return (
      <View style = {styles.item}>
        <TouchableOpacity onPress={()=>goToView(props,props.id)}>
            <Image source = {{uri:props.image}}style = {{ width: 250, height:250 }}/>
            <Text style = {styles.titleText}>{props.text}</Text>
            <Text style = {styles.priceTxt}> LKR {props.price}</Text>
            
           
         </TouchableOpacity>
      </View>
   )
}
export default  connect(mapStateToProps,mapDispatchToProps)(PresentationalComponent) 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    titleText: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      paddingLeft: '10%',
      paddingRight: '10%',
      fontSize: 20,
      fontWeight: "bold",
      color:'blue'
    },
    priceTxt: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      paddingLeft: '20%',
      paddingRight: '20%',
      fontSize: 20,
      fontWeight: "bold",
      color:'red'
    },
    item: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
     
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  