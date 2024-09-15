import React from "react";
import mail from "../assets/mail.png";
import pass from "../assets/lock.png";
import frame from "../assets/frame.png";
import finger from "../assets/Frame_450.png";
import eye from "../assets/eye.png";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="font-sakal bg-white flex flex-col text-center font-normal justify-center pt-14">
        <div className="text-[#000000] text-[40px] font-normal">Login</div>
        <div className="text-[#747070] font-normal text-[25px]">
          By signing in you are agreeing <br /> our{" "}
          <span className="text-[#036BB9]">Term and privacy policy</span>
        </div>
        <div className="flex flex-row font-normal text-[25px] cursor-pointer justify-center gap-[30px] pt-5 pb-5">
          <div className="hover:text-[#036BB9] hover:underline">Login</div>
          <div className="hover:text-[#036BB9] hover:underline">Register</div>
        </div>
        <div className="flex flex-col justify-items-center justify-center top-[292px]">
          <div className="text-[#747070] flex items-center justify-center gap-3 font-normal pb-5">
            <div className="border-b-2 flex items-center gap-3">
              <img src={mail} alt="Mail Icon" className="w-6 h-6" />
              <input
                className="outline-none placeholder-sakal border-none text-[25px] w-[317px]"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="text-[#747070] flex items-center justify-center gap-3 pb-5">
            <div className="border-b-2 flex items-center gap-3">
              <img src={pass} alt="Password Icon" className="w-6 h-6" />
              <input
                className="outline-none placeholder-sakal border-none text-[25px] w-[272px]"
                placeholder="Password"
                type="password"
              />
              <img
                src={eye}
                className="w-[33px] h-[18px] top-[383px] left-[326px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 pt-3 pb-7">
          <div className="flex items-center justify-center gap-2 cursor-pointer ">
            <input
              type="checkbox"
              class="checked:bg-[#650909] border-[1px] r-[2px]"
            />
            <div className="text-[21px]">Remember Password</div>
          </div>
          <div className="text-[#036BB9] text-[21px] hover:underline cursor-pointer">
            Forgot Password
          </div>
        </div>
        <div className="flex justify-center pb-3">
        <Link to="/home"><button className="bg-[#036BB9] text-white py-2 px-4 rounded-lg w-[318px] h-[45px] flex items-center justify-center">
            <div className="text-[30px]">Login</div>
          </button></Link>
        </div>
        <div className="text-[30px] top-[35px] left-[145px]">
          or connect with
        </div>
        <div className="justify-center flex pb-5">
          <img
            src={frame}
            alt="Mail Icon"
            className="w-[232px] h-[71px] top-[614px] left-[92px] p-[11px] gap-[18px]"
          />
        </div>
        <div className="justify-center flex">
          <img
            src={finger}
            alt="Mail Icon"
            className="w-[69px] h-[72px] top-[744px] left-[168px]"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
