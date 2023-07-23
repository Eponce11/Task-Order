import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface workspace {
  id: string;
  title: string;
  description: string;
  user_id: string;
}

interface workspaceState {
  workspaces: Array<workspace>;
  isFetched: boolean;
}

const initialState: workspaceState = {
  workspaces: [],
  isFetched: false,
};

export const workspaceSlice = createSlice({
  name: "workspaceSlice",
  initialState,
  reducers: {
    setWorkspaces: (state, action: PayloadAction<workspaceState>) => {
      state.workspaces = action.payload.workspaces;
      state.isFetched = action.payload.isFetched;
    },
    addWorkspace: (state, action: PayloadAction<workspace>) => {
      state.workspaces.push(action.payload);
    },
  },
});

export const { setWorkspaces, addWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
