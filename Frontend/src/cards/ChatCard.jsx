import React, { useState } from "react";
import orange from "../assets/orange.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import { useNavigate } from "react-router-dom";

const ChatCard = ({ fimage, fname, money }) => {

    const navigate = useNavigate();
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(money);

  function add() {
    setNumber((prev) => prev + 1);
    console.log(number);
    mulprice(number);
  }

  function sub() {
    setNumber((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function mulprice(number) {
    const actualnumber = money.replace("$", "");
    const div = actualnumber * (number + 1);
    setPrice(`$${div.toFixed(2)}`);
  }

  function linking(fimage, fname, money){
    navigate("/indiv", { state: { fimage, fname, money } });
  }

  return (
    <>
      <div className="text-[#EE0A22] font-bold font-sakal">
        <div className="rounded-[3rem] bg-white w-[25rem] h-[5rem] flex items-center justify-between p-4">
          <button onClick={() => linking(fimage, fname, money)}>
            <img src={fimage} className="w-16 h-16 rounded-lg" />
          </button>
          <button onClick={() => linking(fimage, fname, money)} className="flex flex-col font-bold pr-28 text-2xl">
            <div>{fname}</div>
            <div>{price}</div>
          </button>
          <div className="flex flex-row pr-6">
            <div className="flex">
              <button onClick={add}>
                <img src={plus} className="h-5 w-5" />
              </button>
              <div className="p-1">{number}</div>
              <button onClick={sub}>
                <img src={minus} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
