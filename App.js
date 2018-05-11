/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    TextInput,
  Image,
AppRegistry,
  View
} from 'react-native';


import Button from 'apsl-react-native-button'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'FUCK,\n' +
    'DDDDDD',
});
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
type Props = {};

export default class App extends Component<Props> {
  render() {
    return (

      <View style={styles.container}>
      
 <View style={styles.containerTIME}>
             <Text style={styles.welcome}>
10:10
        </Text>
        </View>

 <View style={styles.containerTOP}>
            <Text style={styles.welcome}>
              Welcome to React Native! Welcome to React Native! Welcome to React Native!
            </Text>
        </View>
 <View style={styles.containerB}>
 <View style={styles.containerBL}>
        
<View style={ {width:40,backgroundColor:"darkcyan",margin:5}}>
    <Text style={ {fontSize:16}}>F</Text>

<Button style={styles.button12} textStyle={{fontSize: 20}} title="關燈">
開燈

</Button>

  </View>
        </View>

<View style={styles.containerBB}>
        <Image
          source={
            require('./giphy.gif')
          }
          style={ {height:500}}
        />
        </View>

 <View style={styles.containerBR}>
           
     <View style={ {width:40,backgroundColor:"darkcyan",margin:5}}>
    <Text style={ {fontSize:16}}>R</Text>


<Button style={styles.button12} textStyle={{fontSize: 20}} title="開燈">
開燈

</Button>


  </View>
        </View>




 
        </View>
        <View style={styles.containerC}>
          
        <TextInput  placeholder="手机号/魅族账号"
                            underlineColorAndroid={'transparent'}//去掉下划线
                            style={styles.InputText}>
手机号/魅族账号
                  </TextInput>
   </View>
   <View style={styles.containerSTART}>
<Button style={{borderWidth: 1, 
            padding: 10,
            borderColor: 'blue',
            borderRadius: 5,
    margin: 10}} textStyle={{fontSize: 28}} title="Learn More"    onPress={onButtonPress}>
START

</Button>



        </View>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor: '#D5E0CA'
  },
 containerTIME: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 backgroundColor: '#92AB87'
  },
  containerTOP: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor: '#536A56'
  },
  containerB: {
    flex: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
backgroundColor: '#D3C3BE'
  },
containerBL: {

    alignSelf:'flex-start',
    backgroundColor: '#CCFCFF',
  },
containerBB: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
containerBR: {
    alignSelf:'flex-end',

    backgroundColor: '#F5FCCC',
  },
  containerC: {
    flex: 1,
alignSelf:'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5BAFF',
  },
containerSTART: {
alignSelf:'stretch',
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button12: {
     borderWidth: 1, 
     borderColor: 'blue',
     backgroundColor:"#841584",
     borderRadius: 5},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
InputText: {
        alignSelf:'stretch',
        borderRadius: 20,//输入框边界圆角度数
        borderColor: 'skyblue',//输入框边界颜色
        marginBottom:5,
        paddingLeft:10,//这里是为了在圆角之后输入
        padding:0,//去掉Android默认的padding
        borderWidth: 1,
    margin: 10,

  },
});
