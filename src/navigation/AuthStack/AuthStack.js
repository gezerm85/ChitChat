import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPages from "../../pages/Login/LoginPages";
import SignUpPages from "../../pages/SignUp/SignUpPages";
import HomePages from "../../pages/Home/HomePages";
import { bgColor } from "../../utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator(); 

const AuthStack = () => {

 const [hasVisited, setHasVisited] = useState(null)


 const checkVisited = async () =>{
   const visited = await AsyncStorage.getItem('hasVisited')
   setHasVisited(visited === "true");
}

  useEffect(()=>{
    checkVisited() 
  })

  if (hasVisited === null) {
    return null;
  }



  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: bgColor },
      }}
      initialRouteName={hasVisited == true ? "Login" : "Home"}
    >
      <Stack.Screen  name="Home" component={HomePages} />
      <Stack.Screen name="Login" component={LoginPages} />
      <Stack.Screen name="SignUp" component={SignUpPages} />
    </Stack.Navigator>
  );
};

export default AuthStack;
