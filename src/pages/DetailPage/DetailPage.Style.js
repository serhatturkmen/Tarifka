import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();
const height = Dimensions.get("screen").height - statusBarHeight;
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    marginTop: statusBarHeight,
    height: height,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingHorizontal: 5,
    backgroundColor: "#FFFFFF",
    height: 60,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#FFA500",
    fontWeight: "bold",
  },
  headerColumn: {
    flex: 1,
    alignItems: "center",
  },
  backView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: width,
  },
  mealTitle: {
    color: "#A52A2A",
    fontSize: 30,
    fontWeight: "bold",
  },
  mealArea: {
    color: "#A52A2A",
    fontSize: 24,
    fontWeight: "bold",
  },
  scroll: { marginBottom: 50 },
  line: { width: width, height: 1, backgroundColor: "#CDCDCD" },
  contentView: {
    marginHorizontal: 10,
  },
  buttonView: {
    backgroundColor: "red",
    width: width - 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 20,
  },
  buttonText: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
});

export default styles;
