import axios from "axios";

const API_URL = "http://localhost:5000/api/courses/";

//create new course

const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

//get  courses

const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//get  course
const getCourse = async (courseId) => {
  const response = await axios.get(API_URL + courseId);
  if (response.data) {
    localStorage.setItem("course", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};
const courseService = {
  createCourse,
  getCourses,
  getCourse,
};

export default courseService;
