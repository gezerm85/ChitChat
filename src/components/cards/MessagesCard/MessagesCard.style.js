import { StyleSheet } from "react-native";
import { color } from "../../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderBottomEndRadius: 18,
    borderBottomLeftRadius: 18,
    marginVertical: 12,
    alignSelf: "flex-end",
    padding: 10,
    gap: 6,
    maxWidth: "90%",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  messageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,

  },
  content_user: {
    color: color,
    fontWeight: "bold",
  },
  content_date: {
    color: color,
    fontSize: 12,
    textAlign: "right",
  },
  content_message: {
    color: color,
    fontWeight: "bold",
  },
  image:{
    width: 30,
    height: 30,
    borderRadius: 15,
  }
});
