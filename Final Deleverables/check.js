import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View,
  Image,
  TouchableOpacity 
} from 'react-native';
import React, { useState } from 'react';

export default function Check({ navigation }) {
  let arr = ['cbe,chennai']
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("./assets/favicon.png")} />

      <Text style={styles.font}>location</Text>
      <TextInput style={styles.name} placeholder='Enter Location:' onChangeText={newText => setText(newText)}
        defaultValue={text}></TextInput>
 
        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Check</Text>
          
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.loginBtn} onPress={
          ()=>navigation.navigate("Error",{text})
        }>
          <Text style={styles.loginText}>Check</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    font:{
      margin:18,
      fontSize:20,
    },
    container: {
      flex: 1,
      backgroundColor: '#e2e2e2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    name:{
      fontSize:16,
      marginBottom:16,
      padding:8,
      paddingLeft:20,
      borderWidth:1,
      borderColor:"gray",
      width:"80%",
      borderRadius:20,
    },
    
    forgot_button:{
      marginTop:10,
      fontSize:16,
      borderBottomWidth:2,
      borderColor:"green",
    },
    loginBtn:{
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "green",
    },
    loginText:{
      color:"white",
    },
  });
  
