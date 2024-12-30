import React from "react";
import { Text, View, StyleSheet, ImageBackground ,Pressable} from "react-native";
import flower from './assets/image/coffee.jpg';
import { Link } from "expo-router";

export default function Index() {
  return (
      <View style={styles.container}>
          <ImageBackground 
          source={flower}
          resizeMode="cover"
          style={styles.image}
          >
        <Text style={styles.text}>Hello World</Text>
        <Link href="/keerthu" style={{marginHorizontal:'auto'}}
        asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
          Click here
          </Text>
        </Pressable>
        </Link>
        </ImageBackground>
      </View>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
         width:'100%',
         height:'100%',
         flex:1,
         resizeMode:'cover',
         justifyContent:'center',
  },
  text: {
    color: "black", // Adjust text color for better contrast
    fontSize: 43,
    fontWeight:"bold",
    textAlign:'center',
  },
  Link: {
    color: "black", // Adjust text color for better contrast
    fontSize: 43,
    fontWeight:"bold",
    textAlign:'center',
    textDecorationLine:'underline',
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4,
  },
  button:{
  height:60,
  borderRadius:20,
  justifyContent:'center',
  backgroundColor:'rgba(0,0,0,0.75)',
  padding:6,
  },

  buttonText: {
    color: "white", // Adjust text color for better contrast
    fontSize: 35,
    fontWeight:"bold",
    textAlign:'center',
    padding:4,
  },
  

});
