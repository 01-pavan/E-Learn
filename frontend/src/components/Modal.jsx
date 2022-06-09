import React, { useEffect, useState } from "react";

const Modal = ({ modalFn, modalFn2, showModal, arrFn, index }) => {
  let sectionObj = {
    sectionName: "",
    sectionInfo: [],
  };
  let videoDetails = {
    videoName: "",
    videoLink: "",
  };

  const [sectionInput, setSectionInput] = useState("");
  const [videoNameInput, setVideoNameInput] = useState("");
  const [videoLinkInput, setVideoLinkInput] = useState("");
  const handleClick = (e) => {
    sectionObj.sectionName = sectionInput;

    if (e.keyCode === 13) {
      if (sectionInput) {
        arrFn((prev) => [...prev, sectionObj]);
      }
      modalFn((prev) => {
        return !prev;
      });
      console.log("clickcick");
    }
  };
  const handleClick2 = () => {
    console.log("index from modal", index);
    videoDetails.videoName = videoNameInput;
    videoDetails.videoLink = videoLinkInput;
    arrFn((prev) => {
      prev.forEach((item, idx) => {
        if (idx === index) {
          item.sectionInfo.push(videoDetails);
        }

        console.log(item.sectionInfo, idx);
      });
      return prev;
    });
    modalFn2((prev) => {
      return !prev;
    });
  };
  console.log("modal1", showModal);

  if (!showModal) {
    return (
      <div className="bg-black bg-opacity-60 absolute inset-0 flex justify-center items-center">
        <div className="bg-gray-50 py-12 px-6 flex flex-col">
          <input
            onChange={(e) => {
              setVideoNameInput(e.target.value);
            }}
            type="text"
            placeholder="Enter Video Name"
            className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl mb-4"
          />
          <input
            onChange={(e) => {
              setVideoLinkInput(e.target.value);
            }}
            type="text"
            placeholder="Enter Video Link"
            className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
          />
          <button
            onClick={handleClick2}
            className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white text-md  my-4"
          >
            Done
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onKeyDown={handleClick}
        className="bg-black bg-opacity-60 absolute inset-0 flex justify-center items-center"
      >
        <div className="bg-gray-50 py-12 px-6">
          <input
            onChange={(e) => {
              setSectionInput(e.target.value);
            }}
            type="text"
            placeholder="Enter Section Name"
            className="outline-none border-b-2 bg-gray-50 border-indigo-600 text-xl"
          />
        </div>
      </div>
    );
  }
};

export default Modal;
