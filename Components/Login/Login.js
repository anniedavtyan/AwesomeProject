import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { withRouter } from 'react-router-native'

class Login extends Component {
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
    axios.post("http://10.0.2.2:4000/users/login",{name,password})
    .then(res=>{
      console.log(res.data)
      if(res.data=='ERROR'){
          this.setState({message:'Wrong password...'})
        }
        else{
            this.props.history.push('/profile',res.data.name)
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
            title="Log In"
            color='#7760a4'
          />
          <Text style={{textAlign:'center',color:'red',fontSize:18}}>{this.state.message}</Text>
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

export default withRouter(Login)