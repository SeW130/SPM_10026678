import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Screens/Login.js'
import Register from './Screens/Register.js'
import Home from './Screens/Home.js'
import Profile from './Screens/Profile.js'
import UserOrders from './Screens/UserOrders.js'
import Item from './Screens/Item.js'
import Search from './Screens/Search.js'
import SearchResult from './Screens/SearchResult.js'
import Wishlist from './Screens/WishList.js' 

 import Checkout from './Screens/Checkout.js'
 import UserPendingPayments from './Screens/UserPendingPayments.js'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} initial = {true}   backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' /> 
         <Scene key = "register" component = {Register} title = "Register" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#000000'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' /> 
         <Scene key = "home" component = {Home}    title = "Home" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#000'/>
         <Scene key = "profile" component = {Profile}     title = "Profile" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' /> 
         <Scene key = "orders" component = {UserOrders}  title = "Orders" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' />  
          <Scene key = "item" component = {Item}   title = "Item" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' />                                                                      
         <Scene key = "search" component = {Search}   title = "Search" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#fff' /> 
         <Scene key = "searchResult" component = {SearchResult}   title = "SearchResult" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#000'/>
         <Scene key = "wishlist" component = {Wishlist}   title = "Wishlist" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#000'/>
         
      
         <Scene key = "checkout" component = {Checkout}   title = "SellerDashboard" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#000'/>
         <Scene key = "userPendingPayments" component = {UserPendingPayments}    title = "UserPendingPayments" backButtonTextStyle = {{color:'#000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000' }}
                                                                                titleStyle = {{color : '#fff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#000'}}
                                                                                backButtonTintColor = '#000'/>
       


      </Scene>
   </Router>
)
export default Routes