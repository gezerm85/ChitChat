import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue, update } from "firebase/database";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";
import MessagesCard from "../../components/cards/MessagesCard/MessagesCard";
import { Ionicons } from "@expo/vector-icons";
import styles from "./MessagesPages.style";
import Animated, { FlipInEasyX, LightSpeedInRight,RotateInDownLeft } from 'react-native-reanimated'



const MessagesPages = ({ route }) => {


  const { item } = route.params;

  const auth = getAuth().currentUser;




  const [messageContent, setMessageContent] = useState([]);
  const [text, setText] = useState("");






  useEffect(() => {
    getMessages()
  }, []);
  
  function getMessages() {
    const db = getDatabase();
    const starCountRef = ref(db, `Rooms/${item.id}/Messages`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const massageData = Object.values(data);

        setMessageContent(massageData);
        setText("");
      } else {
        setMessageContent([]);
      }
    });
  }

  function writeUserData() {
    if (!text.trim()) {
      return;
    }
    const userName = auth.displayName
    const userId = auth.uid

    const messageRef = ref(db, `Rooms/${item.id}/Messages/`);
    const massageData = push(messageRef)
    set(massageData, {
      roomsName: item.roomName,
      userId: userId,
      Message: text,
      userName: userName,
      date: new Date().toISOString(),
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }





  


  const renderContent = ({ item }) => {
    return (
      <Animated.View
        entering={RotateInDownLeft}
      >
        <MessagesCard message={item}  />
      </Animated.View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatListContainer}
          data={messageContent}
          renderItem={renderContent}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Mesaj"
            placeholderTextColor={"#fff"}
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity onPress={writeUserData} style={styles.messageBtn}>
            <Ionicons name="send-sharp" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default MessagesPages;
