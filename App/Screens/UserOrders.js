import React,{ Component } from 'react'
import { TouchableOpacity, Text,View ,ScrollView ,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/UserOrders";
import NavigationBar from "../components/commen/navigationBar";
const Home = () => {
  

   const goToRegister = () => {
      Actions.register()
   }
   
   return (
       <View  style={{backgroundColor:'#000'}}>
           <ScrollView>
             <ScreenContent/>
             </ScrollView>
             <NavigationBar/>
       </View>
       
   )
   
}
export default Home


const styles = StyleSheet.create ({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      backgroundColor: 'white',
      height: 600
   },
   redbox: {
      width: 100,
      height: 50,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 50,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 50,
      backgroundColor: 'black'
   },
})