import React from "react";
import { useState, useEffect } from "react";
import formValidate from "../hooks/formValidation";
import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from "../features/auth/authSlice";
import { createAccount } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const CreateAccount = ({ toggleFn }) => {
  const loginSuccess = () => {
    dispatch(createAccount(formData));
    console.log("success");
  };
  const { handleChange, errors, formData, handleSubmit } =
    formValidate(loginSuccess);
  console.log(formData);

  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(signInWithGoogle());
  };
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    //redirct when logged in
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    // dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const handleClick = () => {
    toggleFn((prev) => !prev);
  };

  return (
    <div className="flex flex-col mx-20 p-4 text-white rounded border border-gray-700 my-20">
      <div className="">
        <p className="text-sm font-medium text-gray-200 mb-2">Sign up with</p>
        <button
          onClick={signIn}
          className="disabled:opacity-50 flex-1 disabled:cursor-wait w-full cursor-pointer inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-zinc-900 border-gray-700 text-gray-300 hover:bg-gray-700 text-sm font-medium"
        >
          <GoogleIcon />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-200 mb-2">
          Or continue with
        </p>
        <form action="" className="text-gray-200" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="Name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              onChange={handleChange}
              className="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
            {errors.name && <h3 className="text-rose-800">{errors.name}</h3>}
          </div>
          <div className="mt-4">
            <label htmlFor="Name" className="block mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={handleChange}
              class="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
            {errors.username && (
              <h3 className="text-rose-800">{errors.username}</h3>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="Name" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              autoComplete="off"
              onChange={handleChange}
              class="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
            {errors.email && <h3 className="text-rose-800">{errors.email}</h3>}
          </div>
          <div className="mt-4">
            <label htmlFor="Name" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter a new password"
              autoComplete="off"
              onChange={handleChange}
              class="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
            {errors.password && (
              <h3 className="text-rose-800">{errors.password}</h3>
            )}
          </div>
          <div className="my-6">
            <button
              type="submit"
              // disabled
              className="w-full px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Lets go
            </button>
          </div>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={handleClick}
          className="cursor-pointer hover:text-indigo-600 underline"
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default CreateAccount;
