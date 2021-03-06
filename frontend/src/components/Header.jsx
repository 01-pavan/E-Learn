import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  let avatar = user.displayName[0].toUpperCase();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    // navigate("/");
    window.location.href = "/";
  };
  return (
    <header className="z-[51] relative cd-morph-dropdown  text-gray-100 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-gray-700">
      <div className="relative py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
        <div className="flex items-center">
          <a className="jsx-b35e882c88056c79 flex flex-grow lg:flex-grow-0 sm:space-x-2 items-center font-semibold text-2xl">
            E-LEARN
          </a>
          {title && (
            <h1 className="px-6 mx-6 border-l	text-xl font-semibold">{title}</h1>
          )}
        </div>

        {user ? (
          <div className="space-x-4 flex items-center">
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
        ) : (
          <div>
            <a class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white  text-center cursor-pointer">
              Sign in
            </a>
            <a class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-cyan-600 hover:bg-gradient-to-l text-center cursor-pointer">
              Create Free Account
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
