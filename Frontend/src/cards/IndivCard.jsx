import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import back from "../assets/Back.png"
import { RxCross2 } from "react-icons/rx";

const IndivCard = ({fimagee, fnamee, moneye}) => {
  const location = useLocation();
  const { fimage, fname, money } = location.state;

  return (
    <div className="bg-[#303030] text-[#EE0A22] font-bold font-sakal text-2xl h-screen flex flex-col gap-y-32 justify-center items-center"> 
    <div className="text-[4rem] uppercase md:flex-row flex font-bold">
        <div className="text-[#9F9F9F] pr-3">Hello</div>
        <div className="text-[#C571F8]">Chat</div>
      </div>
      <div className="rounded-lg bg-white w-[25rem] h-[5rem] flex items-center">
        <div>
          <img src={fimage} className="w-14 h-14 rounded-lg ml-[2rem]" />
        </div>
        <div className="flex flex-col p-5">
          <div>{fname}</div>
          <div>{money}</div>
        </div>
        <Link to="/chat" className='text-black font-bold pl-32'><button><RxCross2 /></button></Link>
      </div>
    </div>
  );
}

export default IndivCard;
