import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import courseReducer from "../features/courses/courseSlice";
import enrolledCourseReducer from "../features/enrolledCourses/enrolledCourseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    enrolledCourse: enrolledCourseReducer,
  },
});
