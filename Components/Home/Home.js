import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import axios from 'axios'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      password:'',
      message:''
    }
  }

  changeName=(e)=>{
    this.setState({name:e,message:''})
  }

  changePassword=(e)=>{
    this.setState({password:e,message:''})
  }

  _onPressButton=()=>{
    let name = this.state.name
    let password = this.state.password
    axios.post("http://10.0.2.2:4000/users/signup",{name,password})
    .then(res=>{
      // console.log(res.data)
      if (res.data.errors) {
        if(res.data.errors.name){
          this.setState({name:'',password:'',message:res.data.errors.name.message})
        }
        else if (res.data.errors.password) {
          this.setState({name:'',password:'',message:res.data.errors.password.message})
        }
      }
      else if (res.data.errmsg) {
        this.setState({name:'',password:'',message:"Already exist"})
      }
      else {
        this.setState({name:'',password:'',message:"SAVED"})
      }
    })
  }

  render() {
    return (
      <View>
        <View style={styles.textInputs}>
        <TextInput
          style={styles.input}
          placeholder="NAME"
          onChangeText={this.changeName}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={this.changePassword}
          value={this.state.password}
        />
      </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sign In"
            color='#7760a4'
          />
          <Text style={{textAlign:'center',color:'red',fontSize:18}}>{this.state.message}</Text>
          <Link to="/login">
            <Text style={{textAlign:'center',fontSize:25,color:'black'}}>Log In</Text>
          </Link>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    fontSize:20,
    textAlign:'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#7760a4',
    marginTop:10
  },
  buttonContainer:{
    alignItems:'center',
  },
  textInputs:{
    padding: 10,
    marginTop:150,
  },
});

export default Home