import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface signedInUserState {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

const initialState: signedInUserState = {
  id: undefined,
  firstName: undefined,
  lastName: undefined,
};

export const signedInUserSlice = createSlice({
  name: "signedInUserSlice",
  initialState,
  reducers: {
    setSignedInUser: (state, action: PayloadAction<signedInUserState>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setSignedInUser } = signedInUserSlice.actions;

export default signedInUserSlice.reducer;
