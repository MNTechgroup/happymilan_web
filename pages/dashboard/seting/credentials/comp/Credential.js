import React from "react";
import { Input } from "@material-tailwind/react";
import Image from "next/image";

function Credentials() {
  return (
    <>
      <div className="">
        <div className="flex mt-[-17px]">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M7.09638 5.82178C6.30995 5.82178 5.64996 5.5471 5.11641 4.99772C4.58286 4.44835 4.31608 3.75274 4.31608 2.91089C4.31608 2.08752 4.58286 1.39653 5.11641 0.83792C5.64996 0.279306 6.30995 0 7.09638 0C7.8828 0 8.54279 0.279306 9.07634 0.83792C9.6099 1.39653 9.87667 2.08752 9.87667 2.91089C9.87667 3.75274 9.6099 4.44835 9.07634 4.99772C8.54279 5.5471 7.8828 5.82178 7.09638 5.82178ZM0 13.6119V12.3089C0 11.8284 0.114742 11.431 0.344227 11.1168C0.573712 10.8026 0.909113 10.5347 1.35043 10.3129C2.32133 9.85083 3.22161 9.49967 4.05129 9.25941C4.88097 9.01914 5.89599 8.89901 7.09638 8.89901H7.29497C7.35675 8.89901 7.42295 8.88977 7.49356 8.87129C7.45826 9.00066 7.43178 9.11155 7.41412 9.20396C7.39647 9.29637 7.37882 9.39802 7.36117 9.50891H7.09638C5.98426 9.50891 5.01336 9.60594 4.18368 9.8C3.35401 9.99406 2.50668 10.3406 1.6417 10.8396C1.21803 11.0614 0.935592 11.2878 0.79437 11.5188C0.653149 11.7498 0.582538 12.0132 0.582538 12.3089V13.002H7.38765C7.4053 13.0944 7.43178 13.196 7.46708 13.3069C7.50239 13.4178 7.53769 13.5195 7.573 13.6119H0ZM13.9544 14L13.875 12.7802C13.522 12.7248 13.1865 12.6046 12.8688 12.4198C12.5511 12.235 12.2863 12.004 12.0744 11.7267L11.0682 12.1426L10.9094 11.8931L11.8096 11.1723C11.6861 10.8766 11.6243 10.5347 11.6243 10.1465C11.6243 9.75842 11.6861 9.40726 11.8096 9.09307L10.9358 8.34455L11.0947 8.09505L12.0744 8.53861C12.2686 8.2429 12.529 8.00726 12.8556 7.83168C13.1821 7.65611 13.522 7.54059 13.875 7.48515L13.9544 6.26535H14.2722L14.3516 7.48515C14.687 7.54059 15.018 7.65611 15.3446 7.83168C15.6712 8.00726 15.9404 8.23366 16.1522 8.51089L17.1319 8.09505L17.2643 8.31683L16.3905 9.06535C16.5317 9.40386 16.6023 9.7611 16.6023 10.1371C16.6023 10.513 16.5317 10.8581 16.3905 11.1723L17.2908 11.8931L17.1584 12.1426L16.1522 11.7267C15.9227 12.004 15.6491 12.235 15.3313 12.4198C15.0136 12.6046 14.687 12.7248 14.3516 12.7802L14.2722 14H13.9544ZM14.0892 12.0871C14.6349 12.0871 15.0798 11.9015 15.424 11.5302C15.7683 11.1589 15.9404 10.6969 15.9404 10.1441C15.9404 9.57277 15.7675 9.10693 15.4217 8.74653C15.0759 8.38614 14.6302 8.20594 14.0845 8.20594C13.5565 8.20594 13.1159 8.38696 12.7629 8.749C12.4098 9.11102 12.2333 9.57769 12.2333 10.149C12.2333 10.7018 12.4106 11.163 12.7652 11.5327C13.1198 11.9023 13.5612 12.0871 14.0892 12.0871ZM7.09638 5.21188C7.71422 5.21188 8.23497 4.99472 8.65864 4.5604C9.0823 4.12607 9.29413 3.57624 9.29413 2.91089C9.29413 2.26403 9.0823 1.71881 8.65864 1.27525C8.23497 0.831683 7.71422 0.609901 7.09638 0.609901C6.47853 0.609901 5.95778 0.831683 5.53411 1.27525C5.11045 1.71881 4.89862 2.26403 4.89862 2.91089C4.89862 3.57624 5.11045 4.12607 5.53411 4.5604C5.95778 4.99472 6.47853 5.21188 7.09638 5.21188Z" fill="#000" />
          </svg>
          <h1 className="text-[15px] xl:text-[16px] font-medium ml-[15px]">Credentials</h1>
        </div>
        <h1 className="w-[580px] lg:w-[650px] xl:w-[700px] text-[11px] xl:text-[12px] text-[#484848] font-medium mt-[20px]">
          See information about your account, download an archive of your data, or
          learn about your account deactivation options
        </h1>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        {/* Email */}
        <div>
          <div className="mt-[15px] xl:mt-[20px] flex  ">
            <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium">Email</h1>
            <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />
          </div>
          <div className="flex ">
            <Input className="focus:outline-none border-none  text-[14px] w-[550px] lg:w-[620px] xl:w-[680px]" type="email" variant="static" placeholder="jit*****@gmail.com" />
            <img className="hidden absolute mt-[5px] ml-[175px]" src="/images/sucess.svg"></img>
          </div>
        </div>
        <div className=" mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <div>
          {/* Password */}
          <div className="mt-[20px] flex  ">
            <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium">Password</h1>
            <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />
          </div>

          <Input className="focus:outline-none border-none text-[14px] w-[550px] lg:w-[620px] xl:w-[680px]" type="passwoed" variant="static" placeholder="*****" />


        </div>
        <div className=" mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        {/* Phone number */}
        <div>
          <div className="mt-[20px] flex  ">
            <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[550px] lg:w-[620px] xl:w-[680px] font-medium">Mobile Number</h1>
            <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />
          </div>
          <div className="flex ">
            <Input className="border-none text-[14px] w-[550px] focus:outline-none  lg:w-[620px] xl:w-[680px]" type="contact number" variant="static" placeholder="********902" />
            <img className="hidden absolute mt-[5px] ml-[110px]" src="/images/sucess.svg"></img>
          </div>
        </div>
        <div className=" mt-[15px] xl:mt-[20px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
      </div>
    </>
  );
}

export default Credentials;