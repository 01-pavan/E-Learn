import React from "react";

const DashBoard = () => {
  return (
    <>
      <header className="z-[51] relative cd-morph-dropdown  text-gray-900 !fixed left-0 right-0 bg-white shadow">
        <div className="relative py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
          <h1 className="font-semibold text-xl mr-1">E-Learn</h1>
          <img
            src=""
            alt="avatar"
            className="w-12 h-12 bg-red-600 rounded-full"
          />
        </div>
      </header>
      <div className="flex-grow bg-gray-50 pt-12 text-zinc-500">
        <div className="relative items-start justify-start flex-grow px-5 py-5 space-x-2">
          <main className="w-full mt-4 space-y-4 px-24">
            <div className="bg-gradient-to-l from-gray-900 via-white to-white rounded-lg shadow rounded-lg p-4">
              <h1 className="text-4xl font-bold text-zinc-600">Good Evening</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
