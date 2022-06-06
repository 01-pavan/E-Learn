import React from "react";

import { useState, useEffect } from "react";
import formValidate from "../hooks/formValidation";
import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const loginSuccess = () => {};
  const { handleChange, errors, formData } = formValidate(loginSuccess);
  const signIn = () => {
    dispatch(signInWithGoogle());
  };

  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col mx-20 p-4 text-white rounded border border-gray-700 my-20">
      <div className="mt-4">
        <form action="" className="text-gray-200">
          <div className="mt-4">
            <label for="Name" className="block mb-2 text-sm font-medium">
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
            {errors.email && <h3 className="text-rose-600">{errors.email}</h3>}
          </div>
          <div className="mt-4">
            <label for="Name" className="block mb-2 text-sm font-medium">
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
              <h3 className="text-rose-600">{errors.password}</h3>
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
      <div className="">
        <p className="text-sm font-medium text-gray-200 mb-2">
          Or continue with
        </p>
        <button
          onClick={signIn}
          className="disabled:opacity-50 flex-1 disabled:cursor-wait w-full cursor-pointer inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-zinc-900 border-gray-700 text-gray-300 hover:bg-gray-700 text-sm font-medium"
        >
          google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
