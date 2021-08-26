import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("screen").height - statusBarHeight;
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    marginTop: statusBarHeight,
    height: height,
    backgroundColor: "#FFA500",
  },
  header: {
    width: width,
    backgroundColor: "#FFFFFF",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#FFA500",
    fontWeight: "bold",
  },
  categoriesView: {
    height: height - 60,
    width: width,
  },
});

export default styles;
