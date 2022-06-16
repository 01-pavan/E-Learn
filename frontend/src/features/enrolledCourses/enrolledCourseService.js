import axios from "axios";

const API_URL = "http://localhost:5000/api/enrolledCourses/";

//create new enrolled course

const createEnrolledCourse = async (enrolledCourseData) => {
  const response = await axios.post(API_URL, enrolledCourseData);

  return response.data;
};

//get enrolled course

const getEnrolledCourses = async (userId) => {
  console.log(userId, "from ehwrwe");
  let config = {
    method: "get",
    url: API_URL,
    headers: { "Content-Type": "application/json" },
    params: {
      user_id: userId,
    },
  };
  const response = await axios.get(API_URL, config);
  console.log(response.data, "from enrolled service");
  return response.data;
};
const enrolledCourseService = {
  createEnrolledCourse,
  getEnrolledCourses,
};

export default enrolledCourseService;
