import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "./pages/CategoryPage";
import MealsPage from "./pages/MealsPage";
import DetailPage from "./pages/DetailPage";

const MainStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Category"}
      >
        <MainStack.Screen name={"Category"} component={CategoryPage} />
        <MainStack.Screen name={"Meals"} component={MealsPage} />
        <MainStack.Screen name={"Detail"} component={DetailPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
