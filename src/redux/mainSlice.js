import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";
import { showMessage } from "react-native-flash-message";

export const getData = createAsyncThunk("userData/getData", async () => {
  try {
    const db = getDatabase();
    const auth = getAuth()
    const userId = auth.currentUser.uid

    const starCountRef = ref(db, `Rooms/${userId}/Messages/${userId}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const massageData = Object.values(data);
        const messageKeys = Object.keys(data);
        setKeys(messageKeys);

        setMessageContent(massageData);
        setText("");
      } else {
        setMessageContent([]);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  profileImage: null,
  userName: "",
  roomsName: [],
  messages: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
