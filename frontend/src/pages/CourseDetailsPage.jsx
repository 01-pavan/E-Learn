import React from "react";
import Header from "../components/Header";

const CourseDetailsPage = () => {
  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="flex max-w-6xl px-5 w-full mx-auto pt-6">
            <div className="flex-grow text-white">
              <div>
                <h1 className="text-4xl font-bold">Advanced Node.js Course</h1>
                <h2 className="py-4 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, corporis.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsPage;
