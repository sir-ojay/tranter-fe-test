import React from 'react';
import Image from "next/image";
import image from "../assets/iot";
import Link from "next/link";
import {useRouter} from  "next/router"

const index = () => {
  const router = useRouter();
  const subminHandle = (e) => {
    e.preventDefault();

router.push("./transaction-history");
  };

  return (
    <>
      {" "}
      <div className="my-5 sm:mx-auto sm:w-full sm:max-w-md font-[Inter] ">
        <div className="mt-2 py-8 px-6 text-center">
          <div className="flex justify-center">
            <Image src={image.logo} width={154.37} height={48} alt="logo" />
          </div>
          <p className="text-slate-500">
            Please enter the required credentials.
          </p>
        </div>
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div>
            <form className="mb-0 space-y-6" onSubmit={subminHandle}>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  NAME
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="on"
                    type="text"
                    id="name"
                    cursor-pointer
                    placeholder="Sample Name"
                    required
                    class="w-full border  bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  EMAIL
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="on"
                    type="email"
                    id="email"
                    cursor-pointer
                    placeholder="samplemail@mail.com"
                    required
                    class="w-full border bg-[#ECF7FD] px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="meter"
                  className="block text-sm font-medium text-gray-700"
                >
                  METER NUMBER
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="off"
                    type="number"
                    id="meter"
                    cursor-pointer
                    placeholder="samplemail@mail.com"
                    required
                    className="w-full border bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="phone number"
                  className="block text-sm font-medium text-gray-700"
                >
                  PHONE NUMBER
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="on"
                    type="tel"
                    cursor-pointer
                    id="phone"
                    placeholder="234-012-345-6789"
                    required
                    class="w-full border bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="password"
                  className="flex text-sm font-medium text-gray-700"
                >
                  PASSWORD
                </label>

                <div className="mt-1">
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    cursor-pointer
                    required
                    class="w-full border bg-[#ECF7FD]  border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex bg-[#054C73] bg-sky-900 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>
            <div className="mb-1">
              <p className="mt-1 text-slate-400 w-full text-center py-2 px-4 ">
                Already have an account?
                <span className="text-[#054C73] hover:text-blue-600 ml-2">
                  <Link href={"/"}>Login</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index