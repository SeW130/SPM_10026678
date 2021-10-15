import React,{ Component } from 'react'
import { TouchableOpacity, Text,View ,ScrollView ,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Checkout";
import NavigationBar from "../components/commen/navigationBar";
const Home = () => {
  

   const goToRegister = () => {
      Actions.register()
   }
   
   return (
       <View  style={{backgroundColor:'#f78da7'}}>
           <View>
             <ScreenContent/>
           </View>
             <NavigationBar/>
       </View>
       
   )
   
}
export default Home

