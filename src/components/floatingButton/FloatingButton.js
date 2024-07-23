import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./FloatingButton.style";

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="add-outline" size={40} color="#1C1C1C" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
