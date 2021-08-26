import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    width: width,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: width - 20,
    height: 100,
  },
  buttonView: {
    width: width - 20,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECEFF1",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  image: { height: 80, width: 80, borderRadius: 80, marginHorizontal: 5 },
  text: {
    fontSize: 24,
  },
});

export default styles;
