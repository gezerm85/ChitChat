import { FlatList, View, Alert, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import RoomsCard from "../../components/cards/RoomsCard/RoomsCard";
import { getDatabase, ref, onValue, remove, set } from "firebase/database";
import { db } from "../../../firebaseConfig";
import styles from "./RoomsPages.style";
import Animated, {
  BounceInRight,
  BounceOutLeft,
} from "react-native-reanimated";
import { getAuth } from "firebase/auth";

const RoomsPages = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);



  useEffect(() => {
    getRooms();
  }, []);

  function getRooms() {
    const db = getDatabase();
    const starCountRef = ref(db, "Rooms/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const roomNames = Object.values(data);
        setRooms(roomNames);
      } else {
        setRooms([]);
      }
    });
  }

  const handleRemove = (id) => {
    const roomRef = ref(db, `Rooms/${id}`);

    remove(roomRef)
      .then(() => {
        console.log("Veri başarıyla silindi.");
      })
      .catch((error) => {
        console.error("Veri silinirken bir hata oluştu:", error);
      });
  };

  const handleRoomsDetail = (item) => {
    navigation.navigate("Messages", { item });
  };

  const handleOnLongPress = (index) => {
    Alert.alert(
      `${rooms[index].roomName}`,
      "Odayı silmek istediğinize emin misiniz?",
      [
        {
          text: "sil",
          onPress: () => handleRemove(rooms[index].id),
        },
        {
          text: "İptal",
          style: "cancel",
        },
      ]
    );
  };

  const renderRooms = ({ item, index }) => {
    return (
      <Animated.View
        entering={BounceInRight.delay(100 * index)}
        exiting={BounceOutLeft.delay(100 * index)}
        key={item.id}
      >
        <RoomsCard
          title={item}
          onPressRemove={() => handleOnLongPress(index)}
          handleOnPress={() => handleRoomsDetail(item)}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms}
        renderItem={renderRooms}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

export default RoomsPages;
