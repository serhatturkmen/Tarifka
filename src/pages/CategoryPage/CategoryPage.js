import React from "react";
import { View, FlatList, Text } from "react-native";
import { useFecth } from "../../../useHooks/useFetch";
import CategoryFeed from "../component/CategoryFeed/CategoryFeed";
import SplashScreen from "../SplashScreen/SplashScreen";
import styles from "./CategoryPage.Style";

const HomePage = (props) => {
  const fetchData = useFecth("categories.php");

  return fetchData.loading ? (
    <SplashScreen />
  ) : (
    <View style={styles.main}>
      <View style={styles.categoriesView}>
        <FlatList
          data={fetchData.data.categories}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerText}>Category</Text>
            </View>
          )}
          stickyHeaderIndices={[0]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CategoryFeed item={item} navigation={props.navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default HomePage;
