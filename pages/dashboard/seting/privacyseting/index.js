import Image from "next/image";
import React from "react";

function PrivacySeting() {
  return (
    <>

      <div className="mb-[80px]">
        <div className="flex mt-[-17px]">
          <Image width={14} height={14} src='/assests/dashboard/seting/email-alert.svg' />

          <h1 className="text-[15px] xl:text-[16px] font-medium ml-[15px]">
            Privacy Setting
          </h1>
        </div>
        <h1 className="w-[580px] lg:w-[650px] xl:w-[700px] text-[11px] xl:text-[12px] text-[#484848] font-medium mt-[20px]">
          See information about your account, download an archive of your data,
          or learn about your account deactivation options
        </h1>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Select Display Name
          </h1>
          <div className="flex mt-[20px]">
            <div className=" flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="Rihan Gajjar"
                name="os"
              ></input>
              <label
                for="Rihan Gajjar"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Rihan Gajjar
              </label>
            </div>
            <div className="ml-[200px]  flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="Rihan G"
                name="os"
              ></input>
              <label
                for="Rihan G"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                R Gajjar
              </label>
            </div>
          </div>
          <div className="flex mt-[10px]">
            <div className=" flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="R Gajjar"
                name="os"
              ></input>
              <label
                for="R Gajjar"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Rihan G
              </label>
            </div>
            <div className="ml-[229px] xl:ml-[227px]  flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="Profile ID"
                name="os"
              ></input>
              <label
                for="Profile ID"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Profile ID: SH00289943
              </label>
            </div>
          </div>

        </div>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>

        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Who can see your mobile Number?
          </h1>
          <div className="mt-[20px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="mobile1"
                name="mobile number"
              ></input>
              <label
                for="Profile"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Visible to all

              </label>
            </div>
          </div>
          <div className="mt-[10px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id=" mobile2"
                name="mobile number"
              ></input>
              <label
                for=" Privacy"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Only visible to registered Members
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>

        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Who can see your email address?
          </h1>
          <div className="mt-[20px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="email1"
                name="email address"
              ></input>
              <label
                for="Profile"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Visible to all

              </label>
            </div>
          </div>
          <div className="mt-[10px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id=" email2"
                name="email address"
              ></input>
              <label
                for=" Privacy"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Only visible to registered Members
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>

        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Profile Privacy
          </h1>
          <div className="mt-[10px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id="Profile"
                name="profile privacy"
              ></input>
              <label
                for="Profile"
                className="ml-[10px] text-[13px] xl:text-[14px] mt-[12px] "
              >
                Visible to all, including unregistered visitors{" "}
                <p className="text-[10px]">
                  (Photo and Name will not be visible on Profile)
                </p>
              </label>
            </div>
          </div>
          <div className="mt-[10px] flex">
            <div className="flex justify-center items-center">
              <input
                className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                type="radio"
                id=" Privacy"
                name="profile privacy"
              ></input>
              <label
                for=" Privacy"
                className="ml-[10px] text-[13px] xl:text-[14px]  "
              >
                Only visible to registered Members
              </label>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default PrivacySeting;
