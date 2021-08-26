import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryFeed.Style";

const CategoryFeed = (props) => {
  return (
    <View style={styles.main}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.navigate("Meals", {
            categoryName: props.item.strCategory,
          });
        }}
        style={styles.button}
      >
        <View style={styles.buttonView}>
          <Image
            resizeMode={"contain"}
            style={styles.image}
            source={{ uri: props.item.strCategoryThumb }}
          />
          <Text style={styles.text}>{props.item.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CategoryFeed;
