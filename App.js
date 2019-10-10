import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import { NativeRouter, Route, Link } from "react-router-native"

export default class App extends React.Component{
  render(){
    return(
      <NativeRouter>
        <Route 
          path="/" exact 
          component={Home} />
        <Route 
          path="/login" exact 
          component={Login} />
        <Route 
          path="/profile" exact 
          component={Profile} />
      </NativeRouter>
    )
  }
}