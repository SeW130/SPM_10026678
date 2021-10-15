import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';

const goToView=(action)=>{
    switch (action) {
        case 'items':
            
            Actions.sellerItems();
            break;
    
        default:
            break;
    }
}
const PresentationalComponent = (props) => {
   return (
      <View>
        <Image source = {{uri:props.image}}style = {{ width: 150, height: 150 }}/>
         <TouchableOpacity onPress={()=>goToView(props.action)}>
            <Text style = {styles.button}>
            {props.text}
            </Text>
         </TouchableOpacity>
      </View>
   )
}
export default PresentationalComponent


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  