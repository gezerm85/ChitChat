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
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formikContainer: {
    flex: 3,
    width: "100%",
    height: "100%",
    marginBottom: 50,
  },
  InputContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 70,
  },
  ButtonContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
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
  },
});
