import React from "react";

function SendRequestBtn({ RequestId, HandleRequestModal }) {
  const BoldText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };
  return (
    <>
      <div className="flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]">
        <h1
          className="text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]"
          style={BoldText}
        >
          {RequestId ? "Wait for his response" : "Are you impressed?"}
        </h1>
        <button
          id={!RequestId ? "grad-btn" : "req-sent"}
          className={`hover:opacity-90 w-[134px] h-[40px] rounded-[22px] ${RequestId ? "bg-[#EDEDED] text-[black]" : " text-[white]"}  text-[#FFF]`}
          onClick={HandleRequestModal}
        >
          {RequestId ? "Sent" : "Send Request"}{" "}
        </button>
      </div>
    </>
  );
}

export default SendRequestBtn;
