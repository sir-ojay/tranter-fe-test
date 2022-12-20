import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from "../../assets/dropdown";
import image from "../../assets/iot";

const header = () => {
  return (
    <div className="flex justify-between py-5 pl-24 pr-28 border-solid border-b font-[Inter] min-[350px]:max-[650px]:pl-5 min-[350px]:max-[650px]:w-full min-[350px]:max-[650px]:pr-5">
      <div className=" min-[350px]:max-[650px]:w-20 :mt-2">
        <Image src={image.logo} width={154.37} height={48} alt="logo" />
      </div>
      <ul className="flex justify-between w-2/5 pt-2 text-sm min-[350px]:max-[650px]:w-3/5 min-[350px]:max-[650px]:text-xs">
        <Link href={"/transaction-dashboard"} className="no-underline">
          <li>Buy Meter</li>
        </Link>
        <Link href={"/transaction-history"} className="no-underline">
          <li>Transaction History</li>
        </Link>
        <Link href={"/transaction-history"} className="no-underline">
          <li className="min-[350px]:max-[650px]:hidden">Contact</li>
        </Link>
        <Link
          href={"/transaction-history"}
          className="no-underline border-solid border-r"
        >
          <li className="mr-5 min-[350px]:max-[650px]:hidden">FAQ</li>
        </Link>

        <li>
          <Image
            src={img.arrow}
            width={10}
            height={5}
            alt="dropdown"
            className="mt-2"
          />
        </li>
      </ul>
    </div>
  );
}

export default header