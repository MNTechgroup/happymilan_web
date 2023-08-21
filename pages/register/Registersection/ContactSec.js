"use client";

import React from "react";
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style for Select Box
const customStyle2 = {
  control: (provided) => ({
    ...provided,
    paddingRight: '10px',
    width:"200px",
    height:"50px",
    borderRadius:"8px" // Add padding on the right side
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight:"20px"
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

const ContactSection = () => {

  const options1 = [
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
      <div className="lg:relative  top-[-15px] left-[-30px]">   
      <div>
          <div className="m-5">
            <h1 id="register-text">Contact Details</h1>
          </div>
          <div className="m-5 my-5 md:w-auto w-[300px] lg:w-[630px]" id="progress-container">
            <div className="w-[234px]" id="progress-inner"></div>
          </div>
          <div className="ml-[6px]">
          <div className="flex flex-col w-full flex-wrap gap-1">
            <div className="m-3">
              <span style={Spanstyle}>Mobile Number</span>

              <div className="flex lg:flex-row md:flex-row flex-col">
                <div class="flex items-center">
                  <DynamicSelect styles={customStyle2} options={options1} />
                </div>
                <div className="mt-[10px] md:mt-0 lg:mt-0 md:ml-[8%] lg:ml-[4%]">
                  <input
                    placeholder="Number"
                    className="pl-[10px] rounded-[8px] border-2 w-[320px] lg:w-[400px] h-[52px]"
                    label="Number"
                    style={{ border: "2px solid #c7c7c7" }}
                  />
                </div>
              </div>
            </div>

            <div className="m-3">
              <span style={Spanstyle}>Home Number</span>

              <div className="flex lg:flex-row md:flex-row flex-col">
                <div class="lg:flex items-center">
                <DynamicSelect styles={customStyle2} options={options2} />
                
                </div>
                <div className="mt-[10px] md:mt-0 lg:mt-0 md:ml-[8%] lg:ml-[4%]">
                  <input
                    placeholder="Number"
                    className="pl-[10px] rounded-[8px] w-[320px] lg:w-[400px] h-[52px]"
                    label="Number"
                    style={{ border: "2px solid #c7c7c7" }}
                  />
                </div>
              </div>
            </div>
            <div className="m-3">
              <span style={Spanstyle}>Enter Email Address</span>
              <div className="w-full">
                <input
                  placeholder="Email"
                  className="pl-[10px] rounded-[8px]  h-[50px] w-[320px] border-2 md:w-[670px]  lg:w-[630px]"
                  label="Email"
                  style={{ border: "2px solid #c7c7c7" }}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
