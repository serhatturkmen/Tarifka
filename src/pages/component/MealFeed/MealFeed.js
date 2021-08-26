import React from "react";
import { View, Image, TouchableNativeFeedback, Text } from "react-native";
import styles from "./MealFeed.Style";

const MealFeed = (props) => {
  const meal = props.meal;
  return (
    <View style={styles.main}>
      <TouchableNativeFeedback
        onPress={() => {
          props.navigation.navigate("Detail", { mealid: meal.idMeal });
        }}
      >
        <Image
          source={{ uri: meal.strMealThumb }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </TouchableNativeFeedback>
      <View style={styles.absoluteView}>
        <View style={styles.titleView}>
          <Text numberOfLines={1} style={styles.text}>
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MealFeed;
