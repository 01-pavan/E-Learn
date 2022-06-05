import React, { useState } from "react";

const Header = () => {
  const [btn, setbtn] = useState(false);
  return (
    <header className="z-[51] relative cd-morph-dropdown  text-gray-100 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="relative py-4 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
        <a className="jsx-b35e882c88056c79 flex flex-grow lg:flex-grow-0 sm:space-x-2 items-center font-semibold text-xl">
          E-LEARN
        </a>
        <div>
          <a
            onClick={() => {
              setbtn((prev) => !prev);
            }}
            class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white  text-center cursor-pointer"
          >
            Sign in
          </a>
          <a
            onClick={() => {
              setbtn((prev) => !prev);
            }}
            class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-cyan-600 hover:bg-gradient-to-l text-center cursor-pointer"
          >
            Create Free Account
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
