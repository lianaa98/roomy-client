"use client";

import { loggingIn } from "@/lib/auth";
import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { useCookies } from "react-cookie";
import { verifyAuth } from "@/lib/auth";

interface loginProps {}

const login: FC<loginProps> = ({}) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInput((prevState) => ({ ...prevState, [id]: value }));

    console.log(input);
  };

  async function handleLoginButton(username: string, password: string) {
    console.log("Clicked login");
    console.log(username, password);

    // clear cookie
    removeCookie("user-token", { path: "/" });
    const res = await loggingIn(username, password);

    console.log(res);

    if (res) {
      setCookie("user-token", res, { path: "/" });
    }

    return res;
  }

  useEffect(() => {
    if (cookies["user-token"]) {
      verifyAuth(cookies["user-token"]).then((res) => {
        if (res === 200) {
          window.location.href = "/dashboard";
        }
      });
    }
  }, [cookies]);

  return (
    <div className="">
      <div className="w-full max-w-xs container mx-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={input.password}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleLoginButton(input.username, input.password)}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Create Account
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 lianaa98 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default login;
