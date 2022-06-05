import React from "react";
import { signInWithGoogle } from "../Firebase";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    signInWithGoogle();
  };
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
              name="name"
              placeholder="Enter your email address"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
          </div>
          <div className="mt-4">
            <label for="Name" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter a new password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="block w-full px-3 box-border py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2  sm:text-sm bg-zinc-900 border-gray-700 text-gray-100"
            />
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
