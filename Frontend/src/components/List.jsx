import React from "react";
import ChatCard from "../cards/ChatCard";
import orange from "../assets/orange.png";
import cucum from "../assets/cucum.png";
import sorange from "../assets/sorange.png";
import { Link, useNavigate } from "react-router-dom";
import IndivCard from "../cards/IndivCard";

const List = () => {

  return (
    <div className="bg-[#303030] flex flex-col items-center gap-y-10">
      <div className="text-[3rem] md:flex-row flex-col flex font-bold">
      </div>
        <ChatCard fimage={orange} fname={"Orange"} money={`$3.00`} />
        <ChatCard fimage={cucum} fname={"Cucumber"} money={`$5.00`} />
        <ChatCard fimage={sorange} fname={"Tangerine"} money={`$8.00`} />
    </div>
  );
};

export default List;
