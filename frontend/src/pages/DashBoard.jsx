import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses, reset } from "../features/courses/courseSlice";
import { useNavigate, Link } from "react-router-dom";
import { getEnrolledCourses } from "../features/enrolledCourses/enrolledCourseSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout, reset as rst } from "../features/auth/authSlice";

const DashBoard = () => {
  const { courses, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.auth);

  const { enrolledCourses } = useSelector((state) => state.enrolledCourse);

  let avatar = user.displayName[0].toUpperCase();
  // useEffect(() => {
  //   const profilePic = user.photoURL;
  // }, []);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return () => {
  //     if (isSuccess) {
  //       dispatch(reset());
  //     }
  //   };
  // }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEnrolledCourses(user.uid));
  }, []);

  const navigate = useNavigate();

  const handleRoute = () => {
    dispatch(reset());
    navigate("/publish");
    console.log("publish clicked");
  };

  if (isLoading) {
    return <h1>loadinggggg</h1>;
  }
  const onLogout = () => {
    dispatch(logout());
    dispatch(rst());
    window.location.href = "/";
  };

  const greet = () => {
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
      return "Good morning,";
    }
    if (time >= 12) {
      return "Good afternoon,";
    }
    return "Welcome,";
  };

  return (
    <>
      <header className="z-[51] relative cd-morph-dropdown  text-gray-900 !fixed left-0 right-0 bg-white shadow">
        <div className="relative py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
          <h1 className="font-bold text-2xl mr-1">E-Learn</h1>
          <div className="flex space-x-4 items-center">
            <button
              onClick={handleRoute}
              className="px-2  bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-lg"
            >
              Teach with us
            </button>
            <div className="w-12 h-12 bg-zinc-600 rounded-full flex justify-center items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <h1 className="text-white text-2xl font-semibold">{avatar}</h1>
              )}
            </div>
            <LogoutIcon style={{ fontSize: 35 }} onClick={onLogout} />
          </div>
        </div>
      </header>
      <div className="flex-grow bg-gray-50 pt-12 text-zinc-500">
        <div className="relative items-start justify-start flex-grow px-5 py-5 space-x-2">
          <main className="w-full mt-4  px-22">
            <div className="bg-gradient-to-l from-gray-900 via-white to-white rounded-lg shadow rounded-lg p-6">
              <h1 className="text-4xl font-bold text-zinc-600">
                {greet()} {user.displayName}.
              </h1>
            </div>
            <div className="rounded-lg shadow-xl rounded-lg p-4 my-6">
              <h1 className="text-2xl font-semibold text-black mb-4">
                Enrolled courses
              </h1>
              <div className="flex flex-wrap gap-4">
                {enrolledCourses.map((item, index) => (
                  <Link to={`/course/${item.course._id}`}>
                    <div
                      key={index}
                      className=" w-72 h-74 hover:shadow-2xl p-2 cursor-pointer"
                    >
                      <div className=" h-34">
                        <img src={item.course.thumbNailUrl} alt="thumb" />
                      </div>
                      <div className="text-black pt-2">
                        <h1 className="text-lg font-bold">
                          {item.course.title}
                        </h1>
                        <h2 className="text-md ">{item.course.author}</h2>
                      </div>
                      <div className="w-full bg-gray-200 h-1  my-2">
                        <div
                          className={`bg-blue-400 h-1 w-[${item.progress}%] ${
                            item.progress === 0 ? "hidden" : "block"
                          }`}
                        ></div>
                      </div>
                      <div className="text-black">
                        {item.progress === 0 ? (
                          <span>Start Course</span>
                        ) : (
                          <span>{item.progress}% Complete</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg shadow-xl rounded-lg p-4 my-6">
              <h1 className="text-2xl font-semibold text-black mb-4">
                Latest Courses
              </h1>
              <div className="flex flex-wrap gap-4">
                {courses.map((item, index) => (
                  <Link to={`/course/${item._id}`}>
                    <div
                      key={index}
                      className=" w-72 h-74 hover:shadow-2xl p-2 cursor-pointer"
                    >
                      <div className=" h-34">
                        <img src={item.thumbNailUrl} alt="thumb" />
                      </div>
                      <div className="text-black pt-2">
                        <h1 className="text-lg font-bold">{item.title}</h1>
                        <h2 className="text-md ">{item.author}</h2>
                        <h2 className="font-bold">₹{item.price}</h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
