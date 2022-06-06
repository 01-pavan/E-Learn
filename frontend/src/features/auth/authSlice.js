import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createAccount = createAsyncThunk(
  "auth/createAccount",
  async (user, thunkAPI) => {
    // console.log("slice", user);
    try {
      return await authService.createAccount(user);
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, thunkAPI) => {
    // console.log("slice", user);
    try {
      return authService.signInWithGoogle();
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        console.log("actionnnn", action.payload);
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
