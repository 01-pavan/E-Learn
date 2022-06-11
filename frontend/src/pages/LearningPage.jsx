import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LearningPage = () => {
  const { course } = useSelector((state) => state.course);
  return <div>{course.title}</div>;
};

export default LearningPage;
