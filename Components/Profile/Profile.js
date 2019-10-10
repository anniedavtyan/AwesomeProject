import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component{
    constructor(props){
        super(props)
        console.log(props.history.location.state)
    }
    render(){
        return(
            <View>
              <Text style={{textAlign:'center',color:'red',fontSize:20}}>Welcome
                <Text> {this.props.history.location.state}</Text>
              </Text>
            </View>
        )
    }
}