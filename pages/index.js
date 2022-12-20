import React, {useState} from "react";
import Image from "next/image";
import image from "../assets/iot";
import Link from "next/link";
import {useRouter} from  "next/router"

const register = () => {
  const router = useRouter();
  

  const subminHandle = (e) => {
    e.preventDefault();

router.push("./transaction-history");
  };


  return (
    <>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-5 py-2 font-[Inter]">
        <div className="mt-4 py-8 px-6 text-center">
          <div className="flex justify-center mx-20">
            <Image
              src={image.logo}
              width={154.73}
              height={48}
              alt="IoT-Africa"
            />
          </div>
          <p className="text-slate-500">
            Please enter your credentials to login.
          </p>
        </div>
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div>
            <form class="mb-0 space-y-6" onSubmit={subminHandle}>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  USERNAME
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    autofocus
                    cursor-pointer
                    placeholder="samplemail@mail.com"
                    required
                    class="w-full border  bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="password"
                  className="flex items-center justify-between text-sm font-medium text-gray-700"
                >
                  PASSWORD
                  <span className="inline-block align-baseline text-slate-400">
                    Forgot password?
                  </span>
                </label>

                <div className="mt-1">
                  <input
                    type="password"
                    id="password"
                    autofocus
                    cursor-pointer
                    placeholder="••••••••••"
                    required
                    class="w-full border  bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex bg-[#054C73] justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </form>
            <div>
              <p className="mt-1 w-full text-slate-400 text-center py-2 ">
                Don't have an account?
                <span class="text-[#054C73] hover:text-blue-600 ml-2">
                  <Link href={"./register"}>Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default register