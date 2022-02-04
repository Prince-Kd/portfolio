import Link from 'next/link';
import {
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare,
  } from "react-icons/fa";

export default function SocialRoutes(){
    return(
        <div className="flex flex-row h-10 justify-around items-center">
            <Link href={"/"}>
            <FaFacebookSquare
              size={30}
              color="gray"
              className=" cursor-pointer"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mawuli-kwadzofio-477b67199/"}
          >
            <FaLinkedin size={30} color="gray" className=" cursor-pointer" />
          </Link>
          <Link href={"https://github.com/Prince-Kd"}>
            <FaGithubSquare
              size={30}
              color="gray"
              className=" cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <FaTwitterSquare
              size={30}
              color="gray"
              className=" cursor-pointer"
            />
          </Link>
        </div>
    )
}