import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const DashBoard = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  let avatar = user.displayName[0].toUpperCase();
  useEffect(() => {
    const profilePic = user.photoURL;
  }, []);

  return (
    <>
      <header className="z-[51] relative cd-morph-dropdown  text-gray-900 !fixed left-0 right-0 bg-white shadow">
        <div className="relative py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
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
      <div className="flex-grow bg-gray-50 pt-12 text-zinc-500">
        <div className="relative items-start justify-start flex-grow px-5 py-5 space-x-2">
          <main className="w-full mt-4  px-22">
            <div className="bg-gradient-to-l from-gray-900 via-white to-white rounded-lg shadow rounded-lg p-6">
              <h1 className="text-4xl font-bold text-zinc-600">
                Good Evening, {user.displayName}
              </h1>
            </div>
            <div className="rounded-lg shadow-xl rounded-lg p-4 my-6">
              <h1 className="text-2xl font-semibold text-zinc-600 mb-4">
                Enrolled courses
              </h1>
              <div className=" flex flex-wrap gap-4">
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-xl rounded-lg p-4 my-6">
              <h1 className="text-2xl font-semibold text-zinc-600 mb-4">
                Latest Courses
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
                <div className="bg-zinc-500 w-60 h-72">
                  <div className="bg-yellow-500 h-36"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
