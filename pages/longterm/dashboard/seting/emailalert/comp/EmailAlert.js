import Image from "next/image";
import React from "react";

function EmailAlert() {
  
  const TextHeading = {
    color: "#6A6A6A",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }
  return (
    <>
      <div className="mb-[80px]">
        <div className="flex mt-[-17px]">
          <h1 id="setting-text-grad" className="text-[15px] xl:text-[16px]  ml-[0px]">Notifications</h1>
        </div>
        <div className="w-[500px] lg:w-[640px] xl:w-[700px]">
          <h1 style={TextHeading} className=" mt-[20px]">
            This menu enables users to conceal or delete their profile from public visibility
          </h1>
        </div>

        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div className=" mt-[25px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium ">
            Match Mail & Photo Match Mail
          </h1>
        </div>
        <div className="mt-[20px] flex ">
          <div className="flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="checkbox"
              id="send"
              name="mail"
            ></input>
            <label for="send" className="ml-[15px] xl:ml-[20px] text-[13px] xl:text-[14px] font-medium  ">
              Send me Broader Matches if there are no new Preferred Matches
            </label>
          </div>
        </div>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div className=" mt-[25px]">
          <h1 className="text-[16px] font-medium ">Email Alert</h1>
        </div>
        <div className="mt-[20px] flex gap-x-[10%] ">
          <div className=" flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Daily"
              name="hello"
            ></input>
            <label for="Daily" className="ml-[15px] xl:ml-[20px] text-[13px] xl:text-[14px] font-medium ">
              Daily
            </label>
          </div>
          <div className="  flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Tri-Weekly"
              name="hello"
            ></input>
            <label for="Tri-Weekly" className="ml-[15px] xl:ml-[20px] text-[13px] xl:text-[14px]  font-medium ">
              Tri-Weekly
            </label>
          </div>


          <div className=" flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Weekly"
              name="hello"
            ></input>
            <label for="Weekly" className="ml-[15px] xl:ml-[20px] text-[13px] xl:text-[14px]  font-medium ">
              Weekly
            </label>
          </div>

          <div className=" flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] rounded-none "
              type="radio"
              id="Unsubscribe"
              name="hello"
            ></input>
            <label for="Unsubscribe" className="ml-[15px] xl:ml-[20px] text-[13px] xl:text-[14px]  font-medium ">
              Unsubscribe
            </label>
          </div>
        </div>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
      </div>
    </>
  );
}

export default EmailAlert;
