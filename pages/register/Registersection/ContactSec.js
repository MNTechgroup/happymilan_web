"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Checkbox } from "@material-tailwind/react";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style for Select Box
const customStyle2 = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    width: "155px",
    height: "50px",
    borderRadius: "8px", // Add padding on the right side
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
};




const Spanstyle = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  position: "relative",
  top: "-10px",
  left: "4px",
};

const Text1 = {
  fontFamily: "Poppins",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}


const Text2 = {
  fontFamily: "Poppins",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}


const Btntextstyle = {
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const doItlater = {
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}

const ContactSection = () => {

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const options2 = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <>
      <div className='pt-[33px] gap-y-[30px] flex flex-col'>
        <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
          <div>
            <h1 className='text-[#000]' style={Text1}>Contact Details</h1>
          </div>
          <div>
            <h1 className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
          </div>
        </div>

        <div>
          <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
            <div className='h-[1px] w-[234px] bg-[#17C270]'></div>
          </div>
        </div>
      </div>

      <div className=' 2xl:w-[664px] xl:w-[664px] md:w-full  lg:w-full 2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
        <div className="w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full">
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Mobile Number</h1>
          <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[29px]">
            <div className="">
              <DynamicSelect styles={customStyle2} options={options} />
            </div>
            <div className="">
              <input
                placeholder="Number"
                className="focus:outline-none focus:border-black border-[#e6e6e6] text-[#000] border-[1px] pl-[18px] rounded-[8px] w-full  lg:w-[481px] h-[50px]"
                label="Number"

              />
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full">
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Home Number</h1>
          <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[29px]">
            <div className="">
              <DynamicSelect styles={customStyle2} options={options} />
            </div>
            <div className="">
              <input
                placeholder="Number"
                className="focus:outline-none focus:border-black border-[#e6e6e6] text-[#000] border-[1px] pl-[18px] rounded-[8px] w-full  lg:w-[481px] h-[50px]"
                label="Number"

              />
            </div>
          </div>
        </div>

        <div className='w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full'>
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Enter Email Address</h1>
          <input type='text' placeholder='Email Address' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[100%] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
        </div>

      </div>
    </>
  );
};

export default ContactSection;
