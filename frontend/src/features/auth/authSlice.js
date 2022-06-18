import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//get user from local storage

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
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

export const signInWithEmailandPassword = createAsyncThunk(
  "auth/signInWithEmailandPassword",
  async (user, thunkAPI) => {
    try {
      return await authService.signInWithEmailandPassword(user);
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//logout user

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
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
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(signInWithEmailandPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailandPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signInWithEmailandPassword.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
