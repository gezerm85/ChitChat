import { StyleSheet } from "react-native";
import { bgColor2, color } from "../../utils/Colors";

export default styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: 'center'
  },
  container: {
    gap: 6,
  },
  body_container: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    flexDirection: "row",
  },

  input_container: {
    flex: 1,
    textAlign: "center",
  },
  inputbox: {
    flex: 1,
    
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: bgColor2,
    borderRadius: 8,
    justifyContent: "center",
  },
  btn_text: {
    color: color,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
