import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         
         <TouchableOpacity>
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
  