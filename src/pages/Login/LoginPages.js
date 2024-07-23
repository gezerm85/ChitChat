import { View, Image, SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import InputCard from "../../components/cards/InputCard/InputCard";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import styles from "./LoginPages.style";
import { autoLogin, login } from "../../redux/userSlice";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ValidationSchemaLogin } from "../../validation/ValidationSchema";

const LoginPages = ({ navigation }) => {
  const [openEye, setOpenEye] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(login({ email, password }));
    resetForm();
  };

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

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
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchemaLogin}
        onSubmit={handleLogin}
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
                placeholderText={"E-posta Giriniz"}
                handleChangeText={handleChange("email")}
                handleValue={values.email}
                secureText={false}
                handleBlur={handleBlur("email")}
                inputIcon={
                  <AntDesign
                    onPress={() => resetForm(values.email)}
                    name="close"
                    size={20}
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
                      size={20}
                      color="#fff"
                    />
                  ) : (
                    <Ionicons
                      onPress={() => setOpenEye(!openEye)}
                      name="eye-off"
                      size={20}
                      color="#fff"
                    />
                  )
                }
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.ButtonContainer}>
              <CustomButton
                btnColor={"#FFC805"}
                btnPressColor={"#CCA004"}
                setWidth={"100%"}
                onPress={handleSubmit}
                title={"Giriş Yap"}
              />
              <CustomButton
                btnPressColor={"#FFC805"}
                setWidth={"100%"}
                onPress={() => navigation.navigate("SignUp")}
                title={"Kayıt Ol"}
                setBorder={1}
                setBorderColor={"#fff"}
                setTextColor={"#fff"}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginPages;
