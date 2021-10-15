import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,Image ,ScrollView,AsyncStorage,ImageBackground,Modal,TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import { connect } from "react-redux";

class Inputs extends Component {
   state={
      item:{},
    userId: '',
    trollyId: '',
    qty: '',
    modalVisible: false,

   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   componentDidMount() {
      AsyncStorage.getItem('userId').then((value) => this.setState({ 'userId': value }))
      AsyncStorage.getItem('trollyId').then((value) => this.setState({ 'trollyId': value }))
      
      this.getItem();
    }
    buyProduct=()=>{
     
      Actions.checkout()
    }
    handleQty = (text) => {
      this.setState({ qty: text })
   }
   
    addToCart=()=>{
      
      axios.post('http://192.168.8.101:3000/order', {
         user: this.state.userId,
         item: this.props.item,   
         qty: this.state.qty,       
       })
       .then(function (response) {
         console.log(response.data.success);
         if(response.data.success){
            alert("Added To Cart");
            // Actions.login()
         }
         else alert("Something Went Wrong")
       })
       .catch(function (error) {
         console.log(error);
       });
       this.toggleModal(!this.state.modalVisible);
    }
     getItem = () => {

      console.log(this.props.item);
       
         axios
             .get("http://192.168.8.101:3000/item/"+this.props.item)
             .then(data => {
               console.log(data.data.length);
               //this.setState(item,data.data)
               this.setState({ item: data.data[0] })
               console.log(this.state.item);
          })
             .catch(err => {
                 console.log(err);
                 return null;
             });
  
      };

   
   render() {
      return (
         <ImageBackground  source={{ uri: "http://critssl.com/img/bgImg.jpg" }} style={{height: '100%',width: '100%',resizeMode: "cover",justifyContent: "center",}}>

         <View style = {styles.container}>
            <ScrollView>
            {/* <Text  style={styles.titleText}>{this.props.item}</Text> */}
            <Image source = {{uri:'http://192.168.8.101/Food/img/'+this.state.item.id+'.jpg'}} style = {styles.img} />
            <Text  style={styles.titleText}>{this.state.item.name}</Text>
            <Text  style={styles.priceText}><Image source = {{uri:'http://critssl.com/marketEka/image/money-icon.png'}}
                  style = {styles.icon}
                  /> LKR {this.state.item.price} </Text>
            <Text  style={styles.priceText}></Text>
            <View style = {styles.orderContainer}>
                  <TouchableOpacity onPress ={()=>this.buyProduct()}>
                     <Image source = {{uri:'http://critssl.com/marketEka/image/buy-btn.png'}}
                        style = {styles.buyBtnImg}
                        /> 
                  </TouchableOpacity>

                  <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                  <Image source = {{uri:'http://critssl.com/marketEka/image/add-to-cart-btn.png'}}
                        style = {styles.buyBtnImg}
                        /> 
            </TouchableHighlight>
                 
            </View>
            <Text  style={styles.titleText}> <Image source = {{uri:'http://critssl.com/marketEka/image/description-icon.png'}}
                  style = {styles.icon}
                  />  Description :</Text> 
                  <Text  style={styles.descriptionText}>                  
                  {this.state.item.description}</Text>


               <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                   <Text style = {styles.text}>Enter Quantity </Text>
                     <TextInput style = {styles.input}
                     placeholder = "QTY"
                     keyboardType={'numeric'}
                     placeholderTextColor = "#000"
                     autoCapitalize = "none"
                     onChangeText = {this.handleQty}/>
                   <TouchableOpacity onPress ={()=>this.addToCart()}>
                     <Image source = {{uri:'http://critssl.com/marketEka/image/add-to-cart-btn.png'}}
                        style = {styles.buyBtnImg}
                        /> 
                  </TouchableOpacity>
                  <Text></Text>
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close </Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            
            </ScrollView>
         </View>
         </ImageBackground>
      )
   }
} 

function mapStateToProps(state){
   return {
      item:state.item
   }
} 
function mapDispatchToProps(dispatch){
   return {
      increseCounter:()=>{dispatch({type:'INCRESE'})},
      
   }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Inputs)

const styles = StyleSheet.create({
   
   container: {
      paddingBottom:300
    },
   titleText: {
      color:'blue',
      fontSize: 30,
      fontWeight: "bold",
      padding:10,
      
    },
    descriptionText: {
      color:'black',
      fontSize: 30,
      fontWeight: "bold",
      padding:10,
      
    },
    priceText: {
      color:'red',
      fontSize: 20,
      fontWeight: "bold",
      paddingLeft:10
    },
    
    icon:{
      width: 20,
      margin:10,
       height: 20 
    },

    
    img:{
      width: 370,
      margin:10,
       height: 370 
    },
    buyBtn: {
       borderWidth: 1,
       paddingBottom: 0,
       paddingTop: 0,
       borderColor: 'black',
     
    }
    ,
    buyBtnImg: {
      width: 200,
      
       height: 40 
    }
    ,orderContainer: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'flex-end',
      // backgroundColor: 'black',
      // position: 'absolute',
    
   },
   modal: {
     
      alignItems: 'center',
      backgroundColor: '#f7f5ed',
      padding: 10,
      marginLeft:'10%',
      marginTop:'25%',
      height:200,
      width:'80%'
   },
   input: {
      margin: '55%',
  
      width: 15,
    
      color: 'black'
   },
})