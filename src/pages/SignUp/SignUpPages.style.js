import { StyleSheet } from "react-native";
import { color } from "../../utils/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
  },
  ImageContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formikContainer: {
    flex: 6,
    width: "100%",
    height: "100%",
  },
  InputContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 100,
  },
  ButtonContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 65,
  },
  imageBox: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
    paddingLeft: 12
  }
});
