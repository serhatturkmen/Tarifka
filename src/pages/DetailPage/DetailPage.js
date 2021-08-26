import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView,
} from "react-native";
import styles from "./DetailPage.Style";
import { useFecth } from "../../../useHooks/useFetch";
import SplashScreen from "../SplashScreen";

import * as Linking from "expo-linking";

const DetailPage = ({ navigation, route }) => {
  const fetchData = useFecth("lookup.php?i=" + route.params.mealid);
  let data;
  if (!fetchData.loading) {
    data = Object.assign({}, fetchData.data.meals)["0"];
  }
  return fetchData.loading || !data ? (
    <SplashScreen />
  ) : (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerColumn}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.backView}>
              <Ionicons name={"chevron-back"} size={24} color={"#FFA500"} />
              <Text style={styles.headerText}>Meals</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Detail</Text>
        </View>
        <View style={styles.headerColumn}></View>
      </View>
      {/* Content */}
      <ScrollView style={styles.scroll}>
        <Image source={{ uri: data.strMealThumb }} style={styles.image} />
        <View style={styles.contentView}>
          <Text style={styles.mealTitle}>{data.strMeal}</Text>
          <Text style={styles.mealArea}>{data.strArea}</Text>
          <View style={styles.line} />
          <Text>{data.strInstructions}</Text>
        </View>
        <TouchableNativeFeedback
          onPress={() => Linking.openURL(data.strYoutube)}
        >
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Watch on Youtube</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
    </View>
  );
};

export default DetailPage;
