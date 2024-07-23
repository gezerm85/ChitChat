import { StyleSheet } from "react-native";
import { bgColor } from "../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  title: {
    color: "#fff",
    paddingVertical: 16,
  },
  titleContainer: {
    marginTop: 12,
    flex: 1,
    gap: 16,
  },
  bodyContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signOut: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 16,
    backgroundColor: bgColor,
  },
  text: {
    color: "#000",
    padding: 16,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});
