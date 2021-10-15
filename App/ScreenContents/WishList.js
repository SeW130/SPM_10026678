import React, { Component } from 'react'
import { View, Text, ScrollView,  StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
import Button from '../components/commen/Button'
import Tile from '../components/home/Tile'
import { connect } from "react-redux";
import { FlatGrid } from 'react-native-super-grid';
class Inputs extends Component {
   
state={
   items:[
  
   ],
   data:1
}
   goToRegister = () => {
   Actions.register()
   }
   componentDidMount() {
     
    this.getItem();
  }
   getItem = () => {
      var letters = '0123456789ABCDEF';
       axios
           .get("http://192.168.8.101:3000/user/wishlist")
           .then(data => {
             console.log(data.data.length);
             for (var i = 0; i < data.data.length; i++) {
                 this.state.items.push({ name: data.data[i].name,description: data.data[i].description,qty: data.data[i].qty,price: data.data[i].sellingPrice, code: '#dce3e3' ,image:'http://192.168.8.101/marketEka/images/Products/'+data.data[i].id+'.jpg',id:data.data[i].id});
             }
             this.setState({data:0});
            //  console.log(this.state.items);
        })
           .catch(err => {
               console.log(err);
               return null;
           });

    };
   render() {
     
      return (
         <View style = {styles.container}>


            {this.state.data == 0 ? (
               <View style = {styles.container}>
               
        </View>
                  
               ) : (
                 <View><Image source = {{uri:'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'}}
                  style = {styles.img}
                  />
                  
                  </View>
                        
               )}
            
            {/* <Text onPress ={()=>this.props.increseCounter()} style={styles.titleText}>{this.props.user.name}</Text>
            <Button text = {"Seller Area"} /> */}
            <ScrollView>
            <FlatGrid
               itemDimension={130}
               data={this.state.items}
               style={styles.gridView}
               // staticDimension={300}
               // fixed
               spacing={10}
               renderItem={({ item }) => (
               <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Tile text = {item.name} image={item.image} id={item.id} price={item.price} qty={item.qty} description={item.description}/>
                  
               </View>
               )}
            />
         </ScrollView>
         </View>
         
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
      increseCounter:()=>{dispatch({type:'INCRESE'})},
      
   }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Inputs)

const styles = StyleSheet.create({
   titleText: {
      color:'black',
      fontSize: 70,
      fontWeight: "bold"
    }, 
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
   
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    img: {
      width: 200,
      
       height: 40 
    }
})