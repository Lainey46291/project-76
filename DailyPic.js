import React,{Component} from "react";
import {Text, View} from "react-native";

export default class DailyPic extends Component{
  render(){
    return(
      <View
      style = {{
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text>Daily Pictures</Text>
      </View>
    )
  }
}