import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

const initialState = {
  courses: [],
  course: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create course

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData, thunkAPI) => {
    try {
      return await courseService.createCourse(courseData);
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get courses

export const getCourses = createAsyncThunk(
  "courses/getAll",
  async (_, thunkAPI) => {
    try {
      return await courseService.getCourses();
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get courses

export const getCourse = createAsyncThunk(
  "courses/get",
  async (courseId, thunkAPI) => {
    try {
      return await courseService.getCourse(courseId);
    } catch (error) {
      console.log("error in authslice");
      const message = error.response;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.course = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
