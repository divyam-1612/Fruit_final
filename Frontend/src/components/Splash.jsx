import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import chat from "../assets/Vector_1).png";

const Splash = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      const fadeTimer = setTimeout(() => {
          setFadeOut(true)
      }, 2500)
      const timer = setTimeout(() => {
        navigate("/chat");
      }, 2800);
      return () => {
          clearTimeout(timer)
          clearTimeout(fadeTimer)
      };
    }, [navigate]);

  return (
    <div
      className={`w-screen h-screen flex flex-col md:items-center justify-center pl-10 bg-[#303030] font-sakal
        ${fadeOut ? "animate-fade-out" : "animate-fade-in"}`}
    >
      <div>
        <img src={chat} className="w-5 h-5" />
            <div className="text-[4rem] md:flex-row flex-col flex font-bold">
            <div className="text-[#9F9F9F] pr-3">Hello</div>
            <div className="text-[#C571F8]">Chat</div>
            </div>
        <div className="text-[#9F9F9F] ">The last chat app you'll ever need.</div>
      </div>
    </div>
  );
};

export default Splash;
