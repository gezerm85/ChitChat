import { Dimensions , Text, TouchableOpacity} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomsPages from "../../pages/Rooms/RoomsPages";
import MessagesPages from "../../pages/Messages/MessagesPages";
import AcountEdit from "../../pages/AcountEdit/AccountEdit";
import { bgColor } from "../../utils/Colors";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserStack = () => {
  const nav = useNavigation()
  const goToAccountEdit = () => {
    nav.navigate('Profile');
    handleOnPress()
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: bgColor,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerShown: true,
      }}
    >
      <Stack.Screen
        options={{
          title: "Odalar",
        }}
        name="Rooms"
        component={RoomsPages}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.item.roomName,
          headerShown: true,
        })}
        name="Messages"
        component={MessagesPages}
      />
{/*       <Stack.Screen
        options={() => ({
          title: "Profil Düzenle",
          headerShown: true,
          headerLeft: ()=> <Text></Text>
        })}
        name="AccountEdit"
        component={AcountEdit}
      /> */}
    </Stack.Navigator>
  );
};

export default UserStack;
