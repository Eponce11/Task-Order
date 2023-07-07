
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface signedInUserState {
  id: number | undefined
}

const initialState: signedInUserState = {
  id: undefined
}

export const signedInUserSlice = createSlice({
  name: 'signedInUserSlice',
  initialState,
  reducers: {
    
  }
})


export const {} = signedInUserSlice.actions

export default signedInUserSlice.reducer