import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<string>
    ) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, removeToken } =
  authSlice.actions;

export default authSlice.reducer;
