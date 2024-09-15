import React from "react";
import group from "../assets/Group.png";
import google from "../assets/g_translate.png";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div className="bg-custom-gradient h-screen items-center font-sakal flex flex-col text-[#FFFFFF] md:p-16 md:justify-normal justify-center">
      <div className="md:text-[50px] text-[60px]">Fruit.Ai</div>
      <div className="md:text-[30px] text-[30px]">“Be Healthy!”</div>
      <div className="grid grid-rows-3 grid-flow-col gap-2 gap-y-5 gap-x-5 pt-5 cursor pointer">
        <Link to="/splash">
          <button className=" bg-[#FFE5C2] border- shadow-[10px_-5px_50px_-5px] shadow-[#FFE5C2] backdrop-blur-lg border-opacity-30 inset-0 text-[#C84AD3] w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center text-[48px] font-extrabold">
            Chat
          </button>
        </Link>
        <div
          className="bg-[#EFFFC2] shadow-[10px_-5px_50px_-5px] shadow-[#EFFFC2]  w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center backdrop:blur-3xl"
          style={{
            background:
              "linear-gradient(179deg, rgba(0,0,0,1) 0%, rgba(255,255,128,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
        <Link to="/faq"><button className="bg-[#E4CAFF] shadow-[10px_-5px_50px_-5px] shadow-[#E4CAFF] text-[#3B5998] w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center text-[48px] font-extrabold">
          FAQs
        </button></Link>
        <div className="bg-[#C2FFD0] shadow-[10px_-5px_50px_-5px] shadow-[#C2FFD0] w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center"
        style={{
            background:
              "linear-gradient(179deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(166,245,166,1) 0%, rgba(222,255,213,1) 100%, rgba(255,255,255,1) 100%)",
          }}></div>
        <Link to="/translator"><button className="bg-[#C2F0FF] shadow-[10px_-5px_50px_-5px] shadow-[#C2F0FF] w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center">
          <img src={google} className="w-[70px] h-[70px]" />
        </button></Link>
        <Link to="/myabout">
          <button className="bg-[#FFC2F2] shadow-[10px_-5px_50px_-5px] shadow-[#FFC2F2] text-[#C84AD3] w-[137px] h-[139px] top-[157px] left-[197px] rounded-[20px] flex items-center justify-center text-[48px] font-extrabold">
            About
          </button>
        </Link>
      </div>
      <div className="pt-5">
        <img
          src={group}
          className="w-[50px] h-[15px] top-[640px] left-[170px]"
        />
      </div>
    </div>
  );
};

export default Home;
