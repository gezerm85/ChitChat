import React, { useState } from "react";
import { Dimensions, TouchableOpacity, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStack from "../UserStack/UserStack";
import ProfilePages from "../../pages/Profile/ProfilePages";
import {
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { bgColor, color, color2 } from "../../utils/Colors";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const { width , height } = Dimensions.get('window')

const UserTabs = () => {
  const nav = useNavigation()
  const goToAccountEdit = () => {
    nav.navigate('AccountEdit');
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#252525",
          height: height * 0.1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarActiveTintColor: bgColor,
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerTintColor: bgColor,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        options={{
          
          title: "Odalar",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
        name="MessagesPages"
        component={UserStack}
      />
      <Tab.Screen
        options={{
          title: "btn",
          tabBarIcon: () => <HeaderButton />,
        }}
        name="btn"
        component={UserStack}
      />
      <Tab.Screen
        options={{
          title: "Profil",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            paddingLeft: 16
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
          headerShown: true,
/*           headerRight: ()=> (
            <TouchableOpacity onPress={goToAccountEdit}>
              <Feather name="edit" size={18} color="#fff" />
            </TouchableOpacity>
          ), */
          headerRightContainerStyle: {
            paddingRight: 16
            
          }
        }}
        name="Profile"
        component={ProfilePages}
      />
    </Tab.Navigator>
  );
};

export default UserTabs;
