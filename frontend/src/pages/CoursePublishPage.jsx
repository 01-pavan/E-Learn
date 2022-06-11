import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Image } from "cloudinary-react";
import Modal from "../components/Modal";
import { reset, createCourse } from "../features/courses/courseSlice";
import { useNavigate } from "react-router-dom";

const CoursePublishPage = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.auth);
  let avatar = user.displayName[0].toUpperCase();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("issuccess from publish", isSuccess);
    if (isSuccess === true) {
      dispatch(reset());
      navigate("/dashboard");
    }
  }, [dispatch, isError, isSuccess, message, navigate]);

  const [imgSelected, setImgSelected] = useState("");
  const [imgId, setImgId] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [courseContent, setCourseContent] = useState([]);
  const [showSelected, setShowSelected] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [index, setIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbNailUrl, setThumbNailUrl] = useState("");
  // const { user, isLoading, isSuccess, isError, message } = useSelector(
  //   (state) => state.auth
  // );

  //   let avatar = user.displayName[0].toUpperCase();
  //   useEffect(() => {
  //     const profilePic = user.photoURL;
  //   }, []);

  const uploadImg = () => {
    const formData = new FormData();
    formData.append("file", imgSelected);
    formData.append("upload_preset", "tcgmecag");

    axios
      .post("https://api.cloudinary.com/v1_1/pavan01/image/upload", formData)
      .then((res) => {
        setImgId(res.data.public_id);
        console.log(res.data.url);
        setThumbNailUrl(res.data.url);
      });
  };
  const handleSelected = (e, index) => {
    setIndex(index);
    setShowSelected(true);
    setSelectedSection(e.target.innerText);
    console.log(e.target.innerText);
  };

  console.log("section array", courseContent);
  console.log("index", index);

  const onSubmit = () => {
    dispatch(
      createCourse({
        title,
        description,
        price,
        thumbNailUrl,
        author,
        courseContent,
      })
    );

    console.log("submit clicked");
  };
  console.log(thumbNailUrl, "phoyoyoyo");

  return (
    <>
      {modal && (
        <Modal
          modalFn={setModal}
          showModal={modal}
          index={index}
          arrFn={setCourseContent}
        />
      )}
      {modal2 && (
        <Modal modalFn2={setModal2} index={index} arrFn={setCourseContent} />
      )}
      <header className=" text-gray-900 bg-white shadow border-b-4 border-grey-500">
        <div className=" py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
          <h1 className="font-bold text-2xl mr-1">E-Learn</h1>
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
        </div>
      </header>
      <div className="bg-gray-50 mt-4">
        <main className=" max-w-7xl mx-auto ">
          <div className="flex justify-between ">
            <h1 className="text-2xl p-4 font-semibold">Course Details</h1>
            <button
              onClick={onSubmit}
              className="px-8  bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-xl font-semibold my-2 "
            >
              publish
            </button>
          </div>
          <div className="flex flex-wrap">
            <div className="basis-2/6 p-8">
              <div className="flex flex-col items-center">
                <div className="w-full h-60 bg-slate-700 ">
                  {!imgId ? (
                    <input
                      type="file"
                      onChange={(e) => {
                        setImgSelected(e.target.files[0]);
                      }}
                    />
                  ) : (
                    <Image
                      className="h-full"
                      cloudName="pavan01"
                      publicId={imgId}
                    />
                  )}
                </div>
                <button
                  type="submit"
                  onClick={uploadImg}
                  className="w-full px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-lg font-semibold mt-4 mx-6"
                >
                  Upload Thumbnail
                </button>
              </div>
              <div className="flex flex-col space-y-8 mt-6">
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bg-sky-100 basis-2/6">
              {showSelected ? (
                <div className="flex justify-center flex-col">
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg font-semibold">
                      Selected Section : {selectedSection}
                    </h1>
                    <h2 className="text-lg font-semibold">
                      Total Videos : {courseContent[index].sectionInfo.length}{" "}
                    </h2>
                    <button
                      onClick={() => {
                        setModal2(true);
                      }}
                      className="px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-md  m-2"
                    >
                      Add More Videos
                    </button>
                  </div>
                  <div className="w-full px-4">
                    {courseContent[index].sectionInfo.map((info, index) => (
                      <div className="w-full flex justify-between items-center">
                        <div>
                          <h2>{info.videoName}</h2>
                          <h2>{info.videoLink}</h2>
                        </div>
                        <button>delete</button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full ">
                  <h1 className="text-gray text-2xl font-semibold">
                    Select a section to add videos!
                  </h1>
                </div>
              )}
            </div>
            <div
              className=" basis-2/6 p-6 flex flex-col
            justify-center items-center"
            >
              <div className="flex flex-col align-center">
                <h2 className="text-2xl p-4 font-semibold ">Sections Info</h2>
                <div className=" flex space-x-8  mt-4 ">
                  <button
                    onClick={() => {
                      setModal(true);
                    }}
                    className="px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-md  my-2 "
                  >
                    Create Section
                  </button>
                  <button className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white text-md  m-2">
                    Delete Section
                  </button>
                </div>
              </div>
              <div className="w-full px-4">
                {courseContent.map((section, index) => (
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSelected(e, index);
                    }}
                    className="w-full px-4 py-2 bg-indigo-200 border-2 border-indigo-600 rounded-md hover:bg-indigo-400 text-indigo-600 text-lg font-semibold mt-4 hover:text-white"
                  >
                    {section.sectionName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoursePublishPage;
