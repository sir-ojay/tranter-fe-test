import React from 'react';
import Image from "next/image";
import image from "../../assets/search";

const transactions = () => {
  return (
    <div className="border-solid border-l h-screen pt-14 pl-9 pr-14 w-4/5">
      <div className="flex justify-between">
        <h4 className="text-2xl font-semibold">Transactions</h4>

        <div className="flex justify-between w-2/5">
          <input
            type="text"
            placeholder="Search Transactions"
            id=""
            class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div className=" flex bg-blue-800 w-32 rounded ml-1  px-2 ">
            <Image
              src={image.search}
              width={14.37}
              height={48}
              alt="logo"
              className="ml-1 mt-1"
            />
            <p className="text-base text-white pl-1 pt-3">Search</p>{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12 bg-slate-100 h-14 px-6 pt-3 text-base text-blue-900">
        <div>
          <p>Date</p>
        </div>

        <div className="flex justify-between w-2/5">
          <p>Order No.</p>
          <p>Customer ID</p>
          <p>Amount</p>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-semibold pl-6">NO TRANSACTIONS</h2>
    </div>
  );
}

export default transactions