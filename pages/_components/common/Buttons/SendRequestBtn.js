import React from "react";
import styles from '../../../../styles/styles.module.css'
import Image from "next/image";


function SendRequestBtn({ Requeststatus, RequestId, HandleRequestModal }) {

  const BoldText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };
  return (
    <>

      {Requeststatus?.status === "accepted" ? <>
        <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
          <ul className='flex space-x-[10px]'>
            <li><h1 className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}>Accepted</h1></li>
            <li><Image loading='lazy' alt="accepted" width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
          </ul>

        </div>
      </> : <>
        <div className="flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]">
          <h1
            className="text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]"
            style={BoldText}
          >
            {RequestId || Requeststatus?.status == "requested" ? "Wait for his response" : "Are you impressed?"}
          </h1>
          <button
            id={RequestId || Requeststatus?.status == "requested" ? "req-sent" : "grad-btn"}
            className={`hover:opacity-90 w-[134px] h-[40px] rounded-[22px] ${RequestId || Requeststatus?.status == "requested" ? "bg-[#EDEDED] text-[black]" : " text-[white]"}  text-[#FFF]`}
            onClick={HandleRequestModal}

          >

            {RequestId || Requeststatus?.status == "requested" ? "Sent" : "Send Request"}{" "}
          </button>
        </div>
      </>}
    </>
  );
}

export default SendRequestBtn;
