import { StyleSheet } from "react-native";
import { color } from "../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  imageBox: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  textBox: {
    color: "#FFF",
    fontSize: 15,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  footerContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  bottomText: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "left",
    width: "100%",
  },
});
