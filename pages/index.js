import Image from "next/image";
import Link from "next/link";
import Main from "../components/main";
import Routes from "../components/routes";
import SocialRoutes from "../components/social_routes";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col col-span-1 border-r-2 border-r-gray-400 p-6 relative h-screen overflow-hidden">
        <div className="h-52 w-52 mx-auto rounded-full shadow-md flex justify-center items-center relative mb-4 border-2 border-white">
          <Image
            src={"/me1.jpeg"}
            layout="fill"
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className=" flex flex-col items-center">
          <h1 className="text-3xl ">Mawuli Prince Kwadzofio</h1>
          <h2 className="text-xl text-center text-gray-500">
            Software Engineer | Mobile and Web App Developer
          </h2>
        </div>
        <div className="my-10 items-start justify-start">
          <Routes />
        </div>
        <div className="absolute w-2/3 bottom-20">
          <SocialRoutes />
        </div>
      </div>
      <div className="col-span-2 h-screen overflow-scroll">
        <Main />
      </div>
    </div>
  );
}
