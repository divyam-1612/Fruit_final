import React from "react";
import vector from "../assets/Vector.png"
import { CiMail } from "react-icons/ci";

const MyAbout = () => {
  return (
    <div className="bg-custom-gradient h-screen items-center font-sakal flex flex-col text-[#FFFFFF] md:p-16 pt-32 md:justify-normal justify-center">
        <div className="flex pt-20 gap-20 md:pb-20 pb-40">
            <img src={vector} className="md:w-[100px] md:h-[150px] w-[65px] h-[98px]"/>
            <img src={vector} className="md:w-[100px] md:h-[150px] w-[65px] h-[98px]"/>
            <img src={vector} className="md:w-[100px] md:h-[150px] w-[65px] h-[98px]"/>
        </div>
        <div className="rounded-t-[5rem] md:rounded-full md:w-screen md:h-full h-[150rem] bg-white flex flex-col justify-center items-center">
            <div className="text-[#000000] text-[6rem]">
            Divyam Jain
            </div>
            <div className="text-[#000000] flex items-center pb-5">
            <CiMail className="p-1 h-9 w-9"/> <span className="text-10">divyam0462.be21@chitkara.edu.in</span>
            </div>
            <div className="text-[#8E9399] text-[20px] w-screen md:max-w-2xl md:pr-0 md:pl-0 pr-5 pl-5"> I am a Computer Science Engineering student specializing in software development. I have experience in full-stack development and have worked on various projects involving technologies such as React, Node.js, MongoDB, and more. My passion lies in building efficient, user-friendly applications and continuously learning new technologies to improve my skill set.</div>
            {/* <div>
                <button className="bg-[#000000] text-[#FFFFFF] h-[3rem] w-[13rem] rounded-lg text-[2rem] mt-7">About</button>
            </div> */}
        </div>
    </div>
  );
};

export default MyAbout;
