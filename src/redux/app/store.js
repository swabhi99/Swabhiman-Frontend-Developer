import { configureStore } from '@reduxjs/toolkit'
import capsuleReducer from '../slice/capsuleSlice'

export const store = configureStore({
  reducer:{
    capsule: capsuleReducer,
  }
})