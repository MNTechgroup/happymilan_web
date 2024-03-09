import Image from "next/image";
import React from "react";

function EmailAlert() {
  return (
    <>
      <div className="mb-[80px]">
        <div className="flex mt-[-17px]">
        <Image width={11} height={14} src='/assests/dashboard/seting/privacy-icon.svg' />
          <h1 className="text-[15px] xl:text-[16px] font-medium ml-[15px]">
            Email/SMS Alert Setting
          </h1>
        </div>
        <h1 className="w-[580px] lg:w-[650px] xl:w-[700px] text-[11px] xl:text-[12px] text-[#484848] font-medium mt-[20px]">
          See information about your account, download an archive of your data,
          or learn about your account deactivation options
        </h1>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div className=" mt-[25px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium ">My Alerts Manager</h1>
        </div>
        <h1 className="w-[580px] lg:w-[640px] xl:w-[700px] text-[11px] xl:text-[12px]  font-medium mt-[10px]">
        Manage your subscriptions to HappyMilan.com alerts on email listed below. 
        </h1>
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
          <label for="send" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium  ">
            Send me Broader Matches if there are no new Preferred Matches
          </label>
          </div>
        </div>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div className=" mt-[25px]">
          <h1 className="text-[16px] font-medium ">Email Alert</h1>
        </div>
        <div className="mt-[20px] flex ">
          <div className=" flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Daily"
              name="hello"
            ></input>
            <label for="Daily" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium ">
              Daily
            </label>
          </div>
          <div className="ml-[200px]  flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Tri-Weekly"
              name="hello"
            ></input>
            <label for="Tri-Weekly" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
            Tri-Weekly
            </label>
          </div>
          </div>
          <div className="mt-[20px] flex ">
          <div className=" flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
              type="radio"
              id="Weekly"
              name="hello"
            ></input>
            <label for="Weekly" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
            Weekly
            </label>
          </div>
          
          <div className="ml-[189px] xl:ml-[188px] flex justify-center items-center">
            <input
              className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] rounded-none "
              type="radio"
              id="Unsubscribe"
              name="hello"
            ></input>
            <label for="Unsubscribe" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
            Unsubscribe
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailAlert;
