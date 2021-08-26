import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("screen").height - statusBarHeight;
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    marginTop: statusBarHeight,
    height: height,
    paddingBottom: 45,
    backgroundColor: "#FFA500",
  },
  backView: { flexDirection: "row", alignSelf: "flex-start", alignItems:"center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    height: 60,
    alignItems: "center",
  },
  headerColumn: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#FFA500",
    fontWeight: "bold",
  },
});

export default styles;
