import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

export default styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: height * 0.07,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
    borderColor: "#000",
  },
  title_box: {
    fontWeight: "bold",
    color: "#fff",
  },
});
