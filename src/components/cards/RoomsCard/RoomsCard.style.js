import { StyleSheet } from "react-native";
import { color, bgColor3 } from "../../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: bgColor3,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    height: 68,
  },
  scroll_container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 5,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "flex-start",
    height: 68,
  },
  innerContainer: {
    flex: 1,
   flexDirection: 'row'
  },
  title_box: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnRemove:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
