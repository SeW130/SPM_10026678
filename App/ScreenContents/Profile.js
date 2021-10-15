import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,Image ,AsyncStorage, ImageBackground} from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import Tile from '../components/profile/Tile'
import { connect } from "react-redux";
import { FlatGrid } from 'react-native-super-grid';
class Inputs extends Component {
   
state={
   tiles:[
      { name: 'Orders',image:'http://critssl.com/marketEka/image/cart-icon.png',action:'orders'},
      { name: 'Pending Payments', image:'http://critssl.com/marketEka/image/pay-icon.png',action:'userPendingPayments'},
      { name: 'Wishlist', image:'http://critssl.com/img/phone.png',action:'wishlist'},
      { name: 'Shipped', image:'http://critssl.com/marketEka/image/rider-icon.png',action:'orders' }
    ],
    'userId': '',
    'userName': '',

}
componentDidMount = () => {
   AsyncStorage.getItem('userId').then((value) => this.setState({ 'userId': value }))
   AsyncStorage.getItem('userName').then((value) => this.setState({ 'userName': value }))
}
logOut = (props) => {
   AsyncStorage.setItem('userId', '0');
   Actions.login();
}
   sellerAccount = (props) => {
      axios
           .post('http://192.168.8.101:3000/user/store', {
            user: this.state.userId
               })
           .then(data => {
             console.log(data.data.success);
             props.hasStore(data.data.dataset[0])
             Actions.sellerDashboard();
        })
           .catch(err => {
               console.log(err);
               return null;
           });
     // 
   }
   render() {
      return (
         <ImageBackground  source={{ uri: "http://critssl.com/img/bgImg.jpg" }} style={{height: '100%',width: '100%',resizeMode: "cover",justifyContent: "center",}}>

         <View style = {styles.container}>
            <View style = {styles.profileContainer}>
                     <View style = {styles.redbox}>
                     <Image source = {{uri:'http://critssl.com/marketEka/image/profile-icon.png'}}
                  style = {styles.imgHome}
                  />
                     </View>
                     <View style = {styles.bluebox}>
                     {/* <Text  style={styles.titleText}>{this.props.user.name}</Text> */}
                      
                      {/* <Text  style={styles.titleText}>{this.state.userName}</Text>
                      */}
                      <Text  style={styles.titleText}> TS </Text>
                     
                    
                     <TouchableOpacity onPress ={()=>this.logOut(this.props)}>
                        <Text  style= {styles.button} > Log Out</Text>
                     </TouchableOpacity>
                     
                     </View>
                       
                  </View>
            
         
         
            <FlatGrid
               itemDimension={130}
               data={this.state.tiles}
               style={styles.gridView}
               // staticDimension={300}
               // fixed
               spacing={10}
               renderItem={({ item }) => (
               <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Tile text = {item.name} image={item.image} action={item.action}/>
                  
               </View>
               )}
            />
         
         </View>
         </ImageBackground>
      )
   }
} 

function mapStateToProps(state){
   return {
      count:state.count,
      user:state.user
   }
} 
function mapDispatchToProps(dispatch){
   return {
      hasStore:(data)=>{dispatch({type:'USER_STORE',value:data})},
      
   }
} 


export default connect(mapStateToProps,mapDispatchToProps)(Inputs)

const styles = StyleSheet.create({
   titleText: {
      color:'gray',
      fontSize: 30,
      fontWeight: "bold",
      paddingTop:30,
      paddingLeft:10
    }, 
    button: {
      color:'gray',
      fontSize: 30,
      fontWeight: "bold",
      paddingTop:30,
      paddingLeft:10
    }, 
    gridView: {
      marginTop: 40,
      flex: 1,
      marginBottom:110
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
    },
    itemName: {
      fontSize: 6,
      color: '#000',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
   },
   redbox: {
      width: 100,
      height: 100,
   },
   bluebox: {
      width: 300,
      height: 100,
      marginBottom:50
    },
  
   imgHome:{
      width: 90, 
      marginLeft:10,
      height: 90 ,
      resizeMode:"stretch"
   },
})