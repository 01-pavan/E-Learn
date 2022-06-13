import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/comments/";

const LearningPage = () => {
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.auth);
  const [videoUrl, setVideoUrl] = useState("");
  const [hide, sethide] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const videoLink = course.courseContent[0].sectionInfo[0].videoLink;
  let avatar = user.displayName[0].toUpperCase();
  let num = 0;
  const getSerialNo = () => {
    num++;
    return num;
  };

  const postComment = async () => {
    const commentData = {
      courseId: course._id,
      userName: user.displayName,
      comment,
    };

    const response = await axios.post(API_URL, commentData);
    console.log(response);
  };

  useEffect(() => {
    let config = {
      method: "get",
      url: API_URL,
      headers: { "Content-Type": "application/json" },
      params: {
        course_id: course._id,
      },
    };

    const fetchComments = async () => {
      const res = await axios.get(API_URL, config);

      setComments(res.data);
    };
    fetchComments();
  }, [course._id, postComment]);

  console.log("comments", comments);

  return (
    <>
      <Header title={course.title} />
      <div className="w-full flex flex-col overflow-hidden lg:flex-row">
        <div className="grow flex flex-col">
          <div className="px-20 bg-zinc-900	relative">
            <iframe
              className="w-full h-[450px]"
              src={
                videoUrl
                  ? videoUrl
                  : `${course?.courseContent[0].sectionInfo[0].videoLink}`
              }
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
            {hide && (
              <div
                className="absolute top-4 right-[-125px] hover:right-0 px-4 py-2 border bg-zinc-900 text-white flex justify-center space-x-2 transition-all duration-700 cursor-pointer"
                onClick={() => {
                  sethide(false);
                }}
              >
                <ArrowBackIcon className="" />
                <span>Course content</span>
              </div>
            )}
          </div>
          <div className="m-8 border-b border-gray-700 pb-4">
            <h1 className="text-2xl font-bold">About this course</h1>
            <p className="mt-4 font-normal text-lg">{course.description}</p>
            <h1 className="mt-4 font-normal text-lg">
              Instructor :{" "}
              <span className="text-lg font-semibold">{course.author}</span>
            </h1>
          </div>
          <div className=" mx-8 my-4 flex flex-col ">
            <div className="flex w-full">
              <div className="w-12 h-12 bg-zinc-600 rounded-full flex justify-center items-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <h1 className="text-white text-2xl font-semibold">
                    {avatar}
                  </h1>
                )}
              </div>
              <input
                type="text"
                placeholder={`Commenting as ${user.displayName}`}
                className="outline-none border-b-2  border-zinc-600 ml-4 text-xl w-full"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="rounded border-2 border-gray-500 shadow-sm py-2 px-4 font-semibold  disabled:opacity-50"
                onClick={postComment}
              >
                Comment
              </button>
            </div>
          </div>
          <div className=" mx-8 space-y-6 mb-8">
            {[...comments].reverse().map((comment, index) => (
              <div className="flex">
                <div className="w-12 h-12 bg-zinc-600 rounded-full flex justify-center items-center"></div>
                <div className="flex flex-col ml-2">
                  <h2 className="text-md font-bold">{comment.userName}</h2>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-white max-w-[400px] ${
            hide ? "max-w-[0px]" : "max-w-[400px"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl text-black font-bold ">Course Content</h1>
            <CloseIcon
              onClick={() => {
                sethide(true);
              }}
            />
          </div>

          {course?.courseContent?.map((section, index) => (
            <div key={index} className="relative w-[400px] overflow-hidden ">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="bg-gray-100 border border-gray-300 w-full pl-5 py-2 flex flex-col justify-center ">
                <h1 className="text-lg font-semibold text-black ">
                  Section {index + 1}: {section?.sectionName}
                </h1>
                <p className="text-xs tracking-wide">
                  0/{section.sectionInfo.length}
                </p>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 text-black">
                <KeyboardArrowDownIcon />
              </div>
              <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="border border-gray-300">
                  <ol className="">
                    {section?.sectionInfo?.map((info, index) => (
                      <li
                        onClick={() => {
                          setVideoUrl(info.videoLink);
                        }}
                        key={index}
                        className=" text-md font-normal pl-4 py-2 cursor-pointer hover:bg-gray-300"
                      >
                        {getSerialNo()}. {info.videoName}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LearningPage;
