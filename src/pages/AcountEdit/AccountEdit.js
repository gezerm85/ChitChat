import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign,} from '@expo/vector-icons';
import InputCard from '../../components/cards/InputCard/InputCard';
import { getAuth, updateProfile, updateEmail, updatePhoneNumber } from 'firebase/auth';



const AccountEdit = () => {
  const auth = getAuth();

const user = auth.currentUser;

const [name, setName] = useState('')




const nav = useNavigation()

const handleSave =  async() => {
  try {
    await updateProfile(user, {
      displayName: name,
    });
    nav.navigate('Profile')
  } catch (error) {
    console.log(error);
  }

};

useLayoutEffect(() => {
  nav.setOptions({
    headerRight: ()=> (
      <TouchableOpacity onPress={handleSave}>
        <AntDesign  name="check" size={24} color="#fff" />
      </TouchableOpacity>
    )
  
  });
}, [nav]);



  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
      <InputCard
       handleChangeText={(name)=>setName(name)}
       handleValue={name}
       placeholderText={user.displayName}
       inputIcon={<AntDesign onPress={()=>setName('')} name="close" size={20} color="#fff" />}
       />
      </View>
    </View>
  )
}

export default AccountEdit



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  bodyContainer:{
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  title:{
    color: '#fff'
  }
})

