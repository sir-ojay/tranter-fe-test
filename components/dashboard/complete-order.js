import React from 'react'
import Image from "next/image";
import image from "../../assets/completed";

const completed = ({ setCurrenScreen }) => {
   const submitForm = () => {
     // move to the next screen
     setCurrenScreen(4);
   };
  return (
    <>
      <div className="flex justify-center">
        <Image src={image.completed} w-screen height={48} alt="logo" />
      </div>
      <div className="my-5 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h5 className="text-base font-semibold">Transaction Summary</h5>
          <div>
            <form className="mb-0 space-y-6">
              <div>
                <p className="text-base font-medium text-center text-blue-800 mt-1">
                  You’ve Purchased Water!
                </p>
              </div>

              <div className="text-center h-24 w-full border-solid border-[#ECF7FD] bg-[#ECF7FD]">
                <p className="text-xl font-normal">Token</p>
                <p className="text-2xl font-medium">3665-2265-5167-1516-0164</p>
              </div>
              <div>
                <label
                  for="name"
                  className="flex text-sm font-medium text-gray-700"
                >
                  Number of Units
                </label>

                <div className="mt-1">
                  <p className="font-medium text-2xl">36.12</p>
                </div>
              </div>

              <div>
                <label
                  for="text"
                  class="block text-sm font-medium text-gray-700 mt-1"
                >
                  Meter Number
                </label>
                <div className="mt-1">
                  <p className="font-medium text-2xl">04171254347</p>
                </div>
              </div>

              <div>
                <label
                  for="bill"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Issue
                </label>
                <div className="mt-1">
                  <p className="font-medium text-2xl">20/08/2022</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex bg-[#054C73] justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Return Home
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default completed