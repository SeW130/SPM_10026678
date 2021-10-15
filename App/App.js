import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'
import { createStore } from "redux";
import { Provider } from "react-redux";

 const initialState={
   count:10,
   item:0,
   isloged:true,
   searchKey:'',
   user:{id:18,name:'User 1'},
   store:{id:3,name:'Seller1 1'}
}
const reducer=(state=initialState,action)=>{
     
      switch (action.type) {
        case 'ITEM':
          return {...initialState,item:action.value};
            break;
        case 'SEARCH_KEY':
              return {...initialState,searchKey:action.value};
                break;
    
        case 'USER_LOGED_IN':
              return {...initialState,user:action.value};
              break;
        
        case 'USER_STORE':
              return {...initialState,store:action.value};
              break;
        default:
          
          return state;
          break;
      }
      
}

const store=createStore(reducer)
class reactTutorialApp extends Component {
 
   render() {
      return (
        <Provider store={store}>  
        
          <Routes />
        </Provider>
           
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
