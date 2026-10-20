import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../features/counter/counterSlice'
import  breadcumSlice  from '../features/breadcum/breadcumSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    bread:breadcumSlice
  }
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store