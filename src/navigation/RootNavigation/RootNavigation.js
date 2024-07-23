import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../AuthStack/AuthStack";
import UserStack from "../UserStack/UserStack";
import UserTabs from "../UserTabs/UserTabs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../firebaseConfig";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import {store} from '../../redux/store'

const RootNavigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(user);
    });
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isAuth ? <AuthStack /> : <UserTabs />}
        <FlashMessage position="top" />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
