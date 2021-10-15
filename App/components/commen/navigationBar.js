import React,{ Component } from 'react'
import { TouchableOpacity, Text,View  ,StyleSheet,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';


const Home = () => {
   const goToRegister = () => {
      Actions.register()
   }

  
   
   return (
       
             <View style = {styles.container}>
         <TouchableOpacity style = {styles.box} onPress={Actions.home} >
         <Image source = {{uri:'http://critssl.com/marketEka/image/home-icon.png'}}
                  style = {styles.imgHome}
                  />
         </TouchableOpacity>
         <TouchableOpacity style = {styles.box} onPress={Actions.search} >
         <Image source = {{uri:'http://critssl.com/marketEka/image/search-icon.png'}}
                  style = {styles.imgSearch}
                  />
         </TouchableOpacity>
         
         <TouchableOpacity style = {styles.box} onPress={Actions.profile} >
         <Image source = {{uri:'http://critssl.com/marketEka/image/profile-icon.png'}}
                  style = {styles.imgProfile}
                  />
         </TouchableOpacity>
       
      </View>
       
   )
   
}
export default Home


const styles = StyleSheet.create ({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      
      position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop:5,
    backgroundColor: 'white'
   },
   box: {
      width: 100,
      height: 50,
      backgroundColor: 'white'
     
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
   imgHome:{
      width: 50, 
      marginLeft:10,
      height: 50 ,
      resizeMode:"stretch"
   },
   imgSearch:{
      marginTop:5,
      width: 40, 
      marginLeft:10,
      height: 40,
      resizeMode:"stretch"
   },
   imgWishlist:{
      width: 50, 
      marginLeft:10,
      height: 50 ,
      resizeMode:"stretch"
   },
   imgProfile:{
      width: 50, 
      marginLeft:10,
      height: 50 ,
      resizeMode:"stretch"
   },
})