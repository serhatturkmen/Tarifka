import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("screen").height - statusBarHeight;
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    height: height,
    width: width,
    marginTop: statusBarHeight,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    width: 200,
    textAlign: "center",
  },
});

export default styles;
