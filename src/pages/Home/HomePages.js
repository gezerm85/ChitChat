import { Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./HomePages.style";
import { bgColor } from "../../utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const HomePages = ({ navigation }) => {

  const nav = useNavigation()

  const handleLoginOnPress = async ()=> {
    await AsyncStorage.setItem('hasVisited', 'true')
    nav.navigate("Login")
  }
  const handleSignUpOnPress = async ()=> {
    await AsyncStorage.setItem('hasVisited', 'true')
    nav.navigate("SignUp")
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageBox}
          source={require("../../assets/images/logo.png")}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Chit
          <Text style={{ color: bgColor, fontSize: 40, fontWeight: "bold" }}>
            Chat
          </Text>
          ’e
          <Text style={styles.subText}>{"\n"}Hoş Geldiniz</Text>
        </Text>
        <Text style={styles.textBox}>
          Maksimum geyik minumum yaşlılık! ChitChat ‘de dilediğin gibi mesajlaş.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          btnColor={"#FFC805"}
          btnPressColor={"#CCA004"}
          setWidth={"100%"}
          onPress={handleLoginOnPress}
          title={"Giriş Yap"}
        />
        <CustomButton
          btnColor={null}
          btnPressColor={"#FFC805"}
          setWidth={"100%"}
          onPress={handleSignUpOnPress}
          title={"Kayıt Ol"}
          setBorder={1}
          setBorderColor={"#fff"}
          setTextColor={"#fff"}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.bottomText}>
          By continuing, you agree to the ChitChatApp Terms &
          <Text>{"\n"}Conditions</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePages;
