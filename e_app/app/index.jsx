import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import flower from '../';

export default function Index() {
  return (
      <View style={styles.container}>
          <ImageBackground 
          source={flower}
          resizeMode="cover"
          style={styles.image}
          >
        <Text style={styles.text}>Hello World</Text>
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

});
