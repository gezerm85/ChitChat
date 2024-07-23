import { StyleSheet } from "react-native";
import { bgColor, color } from "../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    paddingTop: 24,
  },
  flatListContainer: {
    height: "90%",
  },
  messageInputContainer: {
    height: "10%",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 8,
    gap: 8,
  },
  title: {
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: bgColor,
    borderStyle: "dashed",
    padding: 20,
    margin: 20,
  },
  messageInput: {
    backgroundColor: "#444343",
    flex: 5,
    borderRadius: 8,
    paddingLeft: 8,
    color: "#fff",
  },
  messageBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    borderRadius: 8,
  },
});
