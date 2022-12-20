import React from 'react';
import avatar from "../../assets/avatar";
import key from "../../assets/key";
import list from "../../assets/list";
import Image from "next/image";
import Link from "next/link";

const sidebar = () => {
  return (
    <>
      <ul className="w-80 pt-10 px-10 text-xs pb-12 font-[Inter]    min-[350px]:max-[650px]:hidden">
        <Link href={"/transaction-dashboard"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg ">
            <Image
              src={avatar.avatar}
              width={13.33}
              height={17.5}
              alt="logo"
              className="mr-2 ml-4"
            />{" "}
            <span className="pt-3">Quick Purchase</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={key.key} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">Transactions</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">Contact Us</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">My Meters</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">Virtual Accounts</span>
          </li>
        </Link>

        <Link href={"/transaction-dashboard"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">My Cards</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none hover:bg-[#DFE9F4] flex mt-3 h-11 rounded-lg">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">Request Utility Bill</span>
          </li>
        </Link>

        <Link href={"/transaction-history"} className="no-underline">
          <li className="list-none  flex mt-3 hover:bg-[#DFE9F4] h-11 rounded-lg ">
            <Image src={list.list} alt="logo" className="mr-2 ml-4" />
            <span className="pt-3.5">View Profile</span>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default sidebar