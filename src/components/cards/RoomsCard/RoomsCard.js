import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./RoomsCard.style";
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";

const RoomsCard = ({ title, handleOnPress, onPressRemove,  }) => {
  

  const auth = getAuth().currentUser
  const userName = auth.displayName

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>        
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleOnPress}
          >
            <Text style={styles.title_box}>{title.roomName}</Text>
          </TouchableOpacity>
          { userName === title.userName
         ? (
          <TouchableOpacity style={styles.btnRemove} onPress={onPressRemove}>
          <MaterialIcons name="delete-forever" size={24} color="#fff" />
          </TouchableOpacity>
         )
         : null
          
        }
        </View>
    </View>
  );
};

export default RoomsCard;
