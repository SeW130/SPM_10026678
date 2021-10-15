import React,{ Component } from 'react'
import { TouchableOpacity, Text,View ,ScrollView ,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScreenContent from "../ScreenContents/Home";
import NavigationBar from "../components/commen/navigationBar";

const Home = () => {
  

   const goToRegister = () => {
      Actions.register()
   }
 
   return (
     
       <View  >
           <View>
             <ScreenContent/>
           </View>
             <NavigationBar/>
       </View>
      
   )
   
}
export default Home

