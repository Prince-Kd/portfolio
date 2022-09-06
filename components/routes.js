import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Routes() {
  var router = useRouter();
  return (
    <div className="flex flex-col items-stretch justify-start">
      <Link href={"#about"}>
        <a className={`py-2 px-1 my-1 text-left text-gray-500 cursor-pointer active:bg-gray-100 focus:outline-none focus:bg-gray-800 focus:pl-2 focus:text-white `}>
          About
        </a>
      </Link>
      <Link href={"#work"}>
        <a className={`py-2 px-1 my-1 text-left text-gray-500 cursor-pointer active:bg-gray-100 focus:outline-none focus:bg-gray-800 focus:pl-2 focus:text-white `}>Recent work</a>
      </Link>
      {/* <Link href={"#about"}><li>About</li></Link> */}
    </div>
  );
}
