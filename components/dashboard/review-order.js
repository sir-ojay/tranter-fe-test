import React from "react";
import Image from "next/image";
import image from "../../assets/review";

const review = ({ setCurrenScreen }) => {
  const submitForm = () => {
    // move to the next screen
    setCurrenScreen(2);
  };
  return (
    <>
      <div className="flex justify-center">
        <Image src={image.review} w-screen height={48} alt="logo" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md my-5">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h5 className="text-base font-semibold mb-6">Review Your Order</h5>
          <div>
            <form onSubmit={submitForm} className="mb-0 space-y-6">
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
                  for="name"
                  className="flex text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <div className="mt-1">
                  <p className="font-medium text-2xl">DEPT. FORESTRY FED</p>
                </div>
              </div>

              <div>
                <label
                  for="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <p className="font-medium text-2xl">080484849486</p>
                </div>
              </div>
              <div>
                <label
                  for="bill"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <div className="mt-1">
                  <p className="font-medium text-2xl">#600</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex bg-[#054C73] justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Pay #700
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default review;
