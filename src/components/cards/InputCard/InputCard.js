import {  View, TextInput } from "react-native";
import React from "react";
import styles from "./InputCard.style";


const InputCard = ({
  placeholderText,
  inputIcon,
  secureText,
  handleChangeText,
  handleValue,
  handleBlur,
}) => {


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#fff"}
        placeholder={placeholderText}
        secureTextEntry={secureText}
        onChangeText={handleChangeText}
        value={handleValue}
        textAlign="left"
        onBlur={handleBlur}
        autoCapitalize="none"
      />
      {
        handleValue
        ? inputIcon
        : null
      }
    </View>
  );
};

export default InputCard;
