import React from 'react'
import { TouchableOpacity, Text,View ,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Search";
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

