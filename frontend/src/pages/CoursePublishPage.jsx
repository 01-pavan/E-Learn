import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Image } from "cloudinary-react";
import Modal from "../components/Modal";

const CoursePublishPage = () => {
  const [imgSelected, setImgSelected] = useState("");
  const [imgId, setImgId] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [sectionArr, setSectionArr] = useState([]);
  const [showSelected, setShowSelected] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [index, setIndex] = useState(null);
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

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
        console.log(res.data.public_id);
      });
  };
  const handleSelected = (e, index) => {
    setIndex(index);
    setShowSelected(true);
    setSelectedSection(e.target.innerText);
    console.log(e.target.innerText);
  };

  console.log("section array", sectionArr);
  console.log("index", index);
  return (
    <>
      {modal && (
        <Modal
          modalFn={setModal}
          showModal={modal}
          index={index}
          arrFn={setSectionArr}
        />
      )}
      {modal2 && (
        <Modal modalFn2={setModal2} index={index} arrFn={setSectionArr} />
      )}
      <header className=" text-gray-900 bg-white shadow border-b-4 border-grey-500">
        <div className=" py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
          <h1 className="font-bold text-2xl mr-1">E-Learn</h1>
          <div className="w-12 h-12 bg-zinc-600 rounded-full flex justify-center items-center"></div>
        </div>
      </header>
      <div className="bg-gray-50 mt-4">
        <main className=" max-w-7xl mx-auto ">
          <div className="flex justify-between ">
            <h1 className="text-2xl p-4 font-semibold">Course Details</h1>
            <button className="px-8  bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-xl font-semibold my-2 ">
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
                    <Image cloudName="pavan01" publicId={imgId} />
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
                />
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
                />
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
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
                      Total Videos : {sectionArr[index].sectionInfo.length}{" "}
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
                    {sectionArr[index].sectionInfo.map((info, index) => (
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
                {sectionArr.map((section, index) => (
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
                {/* <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-200 border-2 border-indigo-600 rounded-md hover:bg-indigo-400 text-indigo-600 text-lg font-semibold mt-4 hover:text-white"
                >
                  section 1
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-200 border-2 border-indigo-600 rounded-md hover:bg-indigo-400 text-indigo-600 text-lg font-semibold mt-4 hover:text-white"
                >
                  section 2
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-200 border-2 border-indigo-600 rounded-md hover:bg-indigo-400 text-indigo-600 text-lg font-semibold mt-4 hover:text-white"
                >
                  section 3
                </button> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoursePublishPage;
