import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  main: {
    width: width - 20,
    marginHorizontal: 10,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 220,
    width: width - 20,
    borderRadius: 20,
  },
  absoluteView: {
    position: "absolute",
    width: width - 20,
    height: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 10,
  },
  titleView: {
    width: width - 20,
    paddingHorizontal: 15,
    height: 40,
    alignItems: "flex-end",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
