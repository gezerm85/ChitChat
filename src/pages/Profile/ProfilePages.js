import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProfilePages.style";
import { bgColor } from "../../utils/Colors";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { FontAwesome, Zocial, MaterialIcons } from "@expo/vector-icons";

const ProfilePages = () => {
  const dispatch = useDispatch();



  const auth = getAuth();

  const {email, displayName, phoneNumber} = auth.currentUser;

  useEffect(()=>{},[ displayName])

  const nav = useNavigation();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  const handleOnPress = () => {
    Alert.alert("Çıkış", "Çıkış yapmak istediğinizden emin misiniz?", [
      {
        text: "Çıkış",
        onPress: () => handleSignOut(),
      },
      {
        text: "İptal",
        style: "cancel",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ImagePicker />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleBox}>
            <FontAwesome name="user" size={18} color="#fff" />
            <Text style={styles.title}>{displayName}</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.titleBox}>
            <Zocial name="email" size={18} color="#fff" />
            <Text style={styles.title}>{email}</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.titleBox}>
            <MaterialIcons name="phone" size={18} color="#fff" />
            <Text style={styles.title}>
              {phoneNumber ? phoneNumber : "05000000000"}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleOnPress} style={styles.signOut}>
          <Text style={styles.text}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePages;
