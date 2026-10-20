import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface CounterState {
   daybefore: number | null
 prvevalue: number | null
  currentvalue: number | null
}

// Define the initial state using that type
const initialState: CounterState = {
  daybefore:null,
  prvevalue: null,
  currentvalue:null
}

export const breadcumSlice = createSlice({
  name: 'bread',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    activebutton: (state ,action) => {
      // console.log(state.value);
      // console.log(action.payload);
        state.daybefore=state.prvevalue
     state.prvevalue = state.currentvalue 
 state.currentvalue = action.payload
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { activebutton } = breadcumSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.bread.currentvalue
export const selectPrevValue = (state: RootState) => state.bread.prvevalue
export const selectDayBefore = (state: RootState) => state.bread.daybefore

export default breadcumSlice.reducer