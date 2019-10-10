import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export default class Profile extends Component{
    constructor(props){
        super(props)
        console.log(props.history.location.state)
    }
    render(){
        return(
            <View>
              <ScrollView>
              <Text style={{textAlign:'center',color:'red',fontSize:20}}>Welcome
                <Text> {this.props.history.location.state}</Text>
              </Text>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap:'wrap'}}>
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              <Image style={{ width: 100, height: 100, marginHorizontal: 5, marginVertical: 5 }}
                     source={require('../public/images.jpg')} />
              </View>
              </ScrollView>
            </View>
        )
    }
}