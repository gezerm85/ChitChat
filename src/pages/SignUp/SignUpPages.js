import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import InputCard from "../../components/cards/InputCard/InputCard";
import { Formik } from "formik";
import styles from "./SignUpPages.style";
import { useDispatch } from "react-redux";
import { signup, setEmail, setPassword } from "../../redux/userSlice";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ValidationSchema } from "../../validation/ValidationSchema";
import avatar from '../../assets/images/avatar.png'

const SignUpPages = ({ navigation }) => {
  const [openEye, setOpenEye] = useState(false);

  const dispatch = useDispatch();

  const handleSignUp = async (values, { resetForm }) => {
    const { email, password, displayName } = values;

    const photoURL = Image.resolveAssetSource(avatar).uri;

    dispatch(setEmail(email));
    dispatch(setPassword(password));
    dispatch(signup({ email, password, displayName, photoURL }));
    resetForm()
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.imageBox}
          source={require("../../assets/images/logo.png")}
        />
      </View>

      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSignUp}
        validationSchema={ValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          resetForm,
          errors,
          touched,
        }) => (
          <View style={styles.formikContainer}>
            <View style={styles.InputContainer}>
              <InputCard
                placeholderText={"Kullanıcı Adı Giriniz"}
                handleChangeText={handleChange("displayName")}
                handleValue={values.displayName}
                secureText={false}
                handleBlur={handleBlur("displayName")}
                inputIcon={
                  <AntDesign
                    onPress={() => resetForm(values.displayName)}
                    name="close"
                    size={18}
                    color="#fff"
                  />
                }
              />
              {touched.displayName && errors.displayName && (
                <Text style={styles.errorText}>{errors.displayName}</Text>
              )}
              <InputCard
                placeholderText={"E-Posta Giriniz"}
                handleChangeText={handleChange("email")}
                handleValue={values.email}
                secureText={false}
                handleBlur={handleBlur("email")}
                inputIcon={
                  <AntDesign
                    onPress={() => resetForm(values.email)}
                    name="close"
                    size={18}
                    color="#fff"
                  />
                }
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <InputCard
                placeholderText={"Şifre"}
                handleChangeText={handleChange("password")}
                handleValue={values.password}
                handleBlur={handleBlur("password")}
                secureText={!openEye}
                inputIcon={
                  openEye == false ? (
                    <Ionicons
                      onPress={() => setOpenEye(!openEye)}
                      name="eye"
                      size={18}
                      color="#fff"
                    />
                  ) : (
                    <Ionicons
                      onPress={() => setOpenEye(!openEye)}
                      name="eye-off"
                      size={18}
                      color="#fff"
                    />
                  )
                }
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <InputCard
                placeholderText={"Şifre Onayla"}
                handleChangeText={handleChange("confirmPassword")}
                handleValue={values.confirmPassword}
                handleBlur={handleBlur("confirmPassword")}
                secureText={!openEye}
                inputIcon={
                  openEye == false ? (
                    <Ionicons
                      onPress={() => setOpenEye(!openEye)}
                      name="eye"
                      size={18}
                      color="#fff"
                    />
                  ) : (
                    <Ionicons
                      onPress={() => setOpenEye(!openEye)}
                      name="eye-off"
                      size={18}
                      color="#fff"
                    />
                  )
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>

            <View style={styles.ButtonContainer}>
              <CustomButton
                btnColor={"#FFC805"}
                btnPressColor={"#CCA004"}
                title={"Kayıt Ol"}
                setWidth={"100%"}
                setColor={"#000"}
                onPress={handleSubmit}
              />
              <CustomButton
                title={"Giriş Yap"}
                btnPressColor={"#FFC805"}
                setWidth={"100%"}
                setColor={"#fff"}
                setPressColor={"#FFF"}
                setBorder={1}
                setBorderColor={"#FFF"}
                onPress={() => navigation.navigate("Login")}
                setTextColor={"#fff"}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPages;
