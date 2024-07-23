import { Image, Text, View,  } from "react-native";
import React, {useEffect, useState} from "react";
import { parseISO, format } from "date-fns";
import { tr } from "date-fns/locale";
import styles from "./MessagesCard.style";
import { getAuth } from "firebase/auth";
import { color3, color } from "../../../utils/Colors";



const MessagesCard = ({ message }) => {

  const formatDate = format(parseISO(message.date), "HH:mm'", {
    locale: tr,
  });

  const user = getAuth().currentUser;
  const userName = user.displayName;




  return ( 
    <View
      style={[
        styles.container,
        {
          alignSelf: userName == message.userName ? "flex-end" : "flex-start",
          borderTopRightRadius: userName == message.userName ? 0 : 18,
          borderTopStartRadius: userName == message.userName ? 18 : 0,
          backgroundColor: userName == message.userName ? "#fad873" : "#3d3d3d",
        },
      ]}
    >
        <View style={styles.innerContainer}>
        <Text
          style={[
            styles.content_user,
            {
              color: userName == message.userName ? color : "#fff",
            },
          ]}
        >
          {message.userName}
        </Text>
        
      </View>
 {userName == message.userName 
 ? (
  <View
  style={[
    styles.messageContainer,
    {
      color: userName == message.userName ? color : "#fff",
    },
  ]}
>
  <Text
    style={[
      styles.content_message,
      {
        color: userName == message.userName ? color : "#fff",
      },
    ]}
  >
    {message.Message}
  </Text>
  <Text
    style={[
      styles.content_date,
      {
        color: userName == message.userName ? color : "#fff",
      },
    ]}
  >
    {formatDate}
  </Text>
</View>
 )
 :(
  <View
  style={[
    styles.messageContainer,
    {
      color: userName == message.userName ? color : "#fff",
    },
  ]}
>
<Text
    style={[
      styles.content_date,
      {
        color: userName == message.userName ? color : "#fff",
      },
    ]}
  >
    {formatDate}
  </Text>
  <Text
    style={[
      styles.content_message,
      {
        color: userName == message.userName ? color : "#fff",
      },
    ]}
  >
    {message.Message}
  </Text>

</View>
 )

 }
    </View>
  );
};

export default MessagesCard;
