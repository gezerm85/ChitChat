import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import mainReducer from './mainSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    main : mainReducer
  },
})