import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enrolledCourseService from "./enrolledCourseService";

const initialState = {
  enrolledCourses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create enrolled course

export const createEnrolledCourse = createAsyncThunk(
  "enrolledCourses/createEnrolledCourse",
  async (enrolledCourseData, thunkAPI) => {
    try {
      return await enrolledCourseService.createEnrolledCourse(
        enrolledCourseData
      );
    } catch (error) {
      console.log("error in enrolled slice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//create enrolled course

export const getEnrolledCourses = createAsyncThunk(
  "enrolledCourses/getEnrolledCourses",
  async (userId, thunkAPI) => {
    try {
      return await enrolledCourseService.getEnrolledCourses(userId);
    } catch (error) {
      console.log("error in enrolled slice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const enrolledCourseSlice = createSlice({
  name: "enrolledCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnrolledCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnrolledCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enrolledCourses = action.payload;
      })
      .addCase(getEnrolledCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default enrolledCourseSlice.reducer;
