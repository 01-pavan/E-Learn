import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getCourse, reset } from "../features/courses/courseSlice";
import { useParams, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createEnrolledCourse } from "../features/enrolledCourses/enrolledCourseSlice";

const CourseDetailsPage = () => {
  const { course, isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.auth);

  const { enrolledCourses } = useSelector((state) => state.enrolledCourse);

  console.log(enrolledCourses, "enrolled courses");

  const params = useParams();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useeffect from course detai;s");
    dispatch(getCourse(courseId));
  }, [courseId]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  console.log(courseId);
  const postEnrolledCourse = () => {
    console.log("clicked");
    const enrolledCourseData = {
      userId: user.uid,
      course: course,
      progress: 0,
    };
    dispatch(createEnrolledCourse(enrolledCourseData));
  };

  return (
    <>
      <Header />
      <div className="w-full mx-auto scrollbar-hide">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="flex max-w-6xl px-5 w-full mx-auto pt-4">
            <div className="flex-grow text-white relative">
              <div className="max-w-xl py-6">
                <h1 className="text-4xl font-bold">{course?.title}</h1>
                <h2 className="py-4 text-base font-semibold">
                  {course?.description}
                </h2>
                <p>
                  Created by{" "}
                  <span className="text-indigo-500 underline underline-offset-1">
                    {course?.author}
                  </span>
                </p>
              </div>
              <div className="absolute top-0 right-0 w-96  shadow-2xl	">
                <div className="w-full">
                  <img
                    className="h-[260px]"
                    src={course?.thumbNailUrl}
                    alt=""
                  />
                </div>
                <div className="p-6 text-black">
                  <h1 className="text-3xl font-bold">
                    ₹{course.price}{" "}
                    <span className="text-base font-normal line-through	">
                      3999
                    </span>
                  </h1>
                  <button
                    onClick={() => {
                      postEnrolledCourse();
                      // navigate("/learn");
                    }}
                    type="submit"
                    // disabled
                    className="w-full px-4 py-2 my-4 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
          <div className="mx-40 py-4">
            <h1 className="text-2xl text-black font-bold mb-4">
              Course Content
            </h1>
            {course?.courseContent?.map((section, index) => (
              <div key={index} className="relative w-[400px] overflow-hidden ">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-gray-100 border border-gray-300 h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg font-semibold text-black">
                    {section?.sectionName}
                  </h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 text-black">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-2 border border-gray-300">
                    <ol className="">
                      {section?.sectionInfo?.map((info, index) => (
                        <li key={index} className="pb-2 text-lg">
                          {index + 1}. {info.videoName}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsPage;
