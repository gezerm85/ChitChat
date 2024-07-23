import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile   } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { getDatabase, set, ref, push, get } from 'firebase/database';
import { db } from '../../firebaseConfig';

export const login = createAsyncThunk('user/login', async({email, password, })=>{
   
        
            try {
              const auth = getAuth();
             const userCredential = await signInWithEmailAndPassword(auth, email, password);

             const user = userCredential.user
             const token = user.stsTokenManager.accessToken;
             const userData = {
                token,
                user: {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid
                  }
            }

             
              await AsyncStorage.setItem(
                "userToken",
                JSON.stringify({ email, password })
              );
              showMessage({
                message: "Login",
                description: "Giriş Başarılı :)",
                type: "success",
              });

              return userData


            } catch (error) {
              showMessage({
                message: "Hatalı Giriş",
                description: "Bir şeyler ters gitti :(",
                type: "danger",
              });
            } finally {
              if (resetForm) {
                resetForm();
              }
            }
          
        
  
})

export const signup = createAsyncThunk('user/signup', async ({ email, password, displayName, photoURL }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;

    await updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    });

    const userData = {
      token,
      user: {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
      },
    };

    await AsyncStorage.setItem('userToken', JSON.stringify({ email, password }));

    showMessage({
      message: "SignUp",
      description: "Kayıt Oldun :)",
      type: "success",
    });

    return userData;
  } catch (error) {
    showMessage({
      message: "SignUp",
      description: "Bir şeyler ters gitti :(",
      type: "danger",
    });
    throw error;
  }
});

export const autoLogin = createAsyncThunk('user/autoLogin', async ()=>{
    try {
        const  userToken = await AsyncStorage.getItem('userToken')
        if(userToken){
            return userToken
        }
    } catch (error) {
        console.log(error);
    }
})

export const logOut = createAsyncThunk('user/logOut', async ()=>{
   try {
    const auth = getAuth()
    const  userSignOut =  signOut(auth)
    await AsyncStorage.removeItem('userToken')

    showMessage({
        message: "Login",
        description: "Çıkış Başarılı ",
        type: "success",
      });



    return userSignOut
   } catch (error) {
    showMessage({
        message: "Login",
        description: "Çıkış Başarısız ",
        type: "danger",
      });
   }
})









const initialState = {
    email: null,
    password: null,
    isloading: false,
    isAuth: false,
    token: null,
    user: null,
    error: null,
    userName: []
}




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail:(state, action)=>{
        const loverCaseEmail = action.payload.toLowerCase()
        state.email = loverCaseEmail
    },
    setUserName: (state, action)=>{
        state.userName = action.payload
        try {
            const db = getDatabase();
            const userRef = ref(db, "User");
            const newUserRef = push(userRef);
            set(newUserRef, {
              userName: state.userName,
              email: state.email,
              id: newUserRef.key,
             
            }) 
        } catch (error) {
            console.log("err", error)
        }
    },
    setPassword: (state, action)=>{
        state.password = action.payload
    },
    setIsLoading: (state, action)=>{
        state.isloading = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder
            // LOGİN

            .addCase(login.pending, (state)=>{
                state.isloading = true,
                state.isAuth = false
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.isloading = false,
                state.isAuth = true
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(login.rejected, (state, action)=>{
                state.isloading = false,
                state.isAuth = false
                state.error = action.error.message
            })

            // SİGNUP

            .addCase(signup.pending, (state)=>{
                state.isloading = true,
                state.isAuth = false
            })
            .addCase(signup.fulfilled, (state, action)=>{
                state.isloading = false,
                state.isAuth = true
                state.token = action.payload
            })
            .addCase(signup.rejected, (state, action)=>{
                state.isloading = false,
                state.isAuth = false
                state.error = action.error.message
            })

            // AUTOLOGİN

            .addCase(autoLogin.pending, (state)=>{
                state.isloading = true,
                state.isAuth = false
            })
            .addCase(autoLogin.fulfilled, (state, action)=>{
                state.isloading = false,
                state.isAuth = true
                state.token = action.payload
            })
            .addCase(autoLogin.rejected, (state, action)=>{
                state.isloading = false,
                state.isAuth = false
                state.error = action.error.message
            })

            // LOGOUT 
            
            .addCase(logOut.pending, (state)=>{
                state.isloading = true
            })
            .addCase(logOut.fulfilled, (state, action)=>{
                state.isloading = false
                state.isAuth = false
                state.token = null
                state.user = null
            })
            .addCase(logOut.rejected, (state, action)=>{
                state.isloading = false
                state.isAuth = false
                state.error = action.error.message
            })
            
            

  }
})

export const { setEmail, setIsLoading, setPassword,setUserName, } = userSlice.actions

export default userSlice.reducer

