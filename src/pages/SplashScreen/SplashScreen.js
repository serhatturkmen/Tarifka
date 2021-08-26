import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreen.Style";
//import { styles } from "./SplashScreen.Style";

const SplashScreen = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require("../../../assets/loading.gif")} />
      <Text style={styles.text}>Veriler çekiliyor...</Text>
    </View>
  );
};

export default SplashScreen;
