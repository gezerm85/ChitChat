import { StyleSheet } from "react-native";
import { color, bgColor3 } from "../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 24,
  },

  floatingContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  list: {
    width: "100%",
    height: "100%",
  },
});
