import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import List from "../components/List";
import { IoMdSend } from "react-icons/io";

const ChatUI = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [place, setPlace] = useState(`TYPE   "FRUITS"`);
  const [showList, setShowList] = useState(false);

  function changeInput(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function sendInput() {
    if (input.toLowerCase() === "fruits") {
      setPlace("SELECT ANY ONE CARD");
      setInput("");
      setShowList(true);
    }
  }

  return (
    <div className="bg-[#303030] flex items-center flex-col">
      <div className="text-[4rem] uppercase md:flex-row flex font-sakal pt-10 font-bold">
        <div className="text-[#9F9F9F] pr-3">Hello</div>
        <div className="text-[#C571F8]">Chat</div>
      </div>
      {showList && <List />}
      <div
        className={`bg-[#303030] ${
          showList ? "h-[420px]" : "h-screen"
        } flex justify-center items-end pb-20 font-sakal`}
      >
        <div className="flex flex-col justify-center">
          <div className=""></div>
          <div className="flex pb-32">
            <input
              onChange={changeInput}
              value={input}
              type="text"
              placeholder={place}
              className="text-black p-2 w-[20rem] text-xl"
            />
            <button
              onClick={sendInput}
              className="bg-[#C571F8] text-white px-5 py-2 ml-2 rounded"
            >
              <IoMdSend className="text-black w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
