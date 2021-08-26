import React from "react";
import { View, Text, TouchableNativeFeedback, FlatList } from "react-native";
import styles from "./MealsPage.Style";
import { Ionicons } from "@expo/vector-icons";
import { useFecth } from "../../../useHooks/useFetch";
import SplashScreen from "../SplashScreen";
import MealFeed from "../component/MealFeed";

const MealsPage = ({ navigation, route }) => {
  const fetchData = useFecth("filter.php?c=" + route.params.categoryName);
  const meals = fetchData.data.meals;

  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerColumn}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.backView}>
              <Ionicons name={"chevron-back"} size={24} color={"#FFA500"} />
              <Text style={styles.headerText}>Categories</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Meals</Text>
        </View>
        <View style={styles.headerColumn}></View>
      </View>
    );
  };

  return fetchData.loading ? (
    <SplashScreen />
  ) : (
    <View style={styles.main}>
      <FlatList
        data={meals}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MealFeed meal={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default MealsPage;
