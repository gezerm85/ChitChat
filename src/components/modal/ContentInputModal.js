import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import styles from "./ContentInputModal.style";

const ContentInputModal = ({ visible, onClose, onSend }) => {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (text.trim() === "") {
      Alert.alert("Uyarı", "Bir Oda İsmi Giriniz");
      return;
    }
    onSend(text);
    setText("");
    onClose();
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={"right"}
    >
      <View style={styles.container}>
        <View style={styles.body_container}>
          <View style={styles.input_container}>
            <TextInput
              onChangeText={setText}
              value={text}
              placeholder="Oda İsmini Yazınız"
              style={styles.inputbox}
              autoCapitalize="sentences"
            />
          </View>
        </View>
        <View>
        <TouchableOpacity style={styles.btn} onPress={handleSend}>
          <Text style={styles.btn_text}>Ekle</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
