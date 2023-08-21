"use client";

import dynamic from 'next/dynamic';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

import React  from "react";

//Style for Select Box 
const customStyles = {
  control: (provided) => ({
    ...provided,
    paddingRight: '10px',
    width:"300px",
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

const Headtext = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

const Btntextstyle = {
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const AddressSection = () => {
 
  

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
      <div className=" lg:relative  top-[-15px] left-[-30px] lg:pb-0 pb-[100px]">
        <div>
          <div className="m-5">
            <h1 id="register-text">Address Details</h1>
          </div>
          <div className="m-5 my-5 md:w-auto w-[300px] lg:w-[630px]" id="progress-container">
            <div className=" w-[100px] lg:w-[161px]" id="progress-inner"></div>
          </div>
          <div className="ml-[6px]">
          <div className="flex flex-wrap gap-1">
            <div className="m-3">
              <span style={Spanstyle}>Current Residing Address</span>
              <div className="lg:w-full">
                <input
                  style={{ border: "2px solid #c7c7c7" }}
                  placeholder="username"
                  className="pl-[10px] outline-blue border-2  rounded-[8px] h-[50px]  w-[300px] lg:w-[630px]"
                  label="Username"
                />
              </div>
            </div>

            <div className="m-3">
              <span style={Spanstyle}>Current City</span>

              <div class="flex items-center space-x-2">
              <DynamicSelect styles={customStyles} options={options1}/>
              </div>
            </div>
            <div className="m-3">
              <span style={Spanstyle}>Current Residing Country</span>

              <div class="flex items-center space-x-2">
                <DynamicSelect styles={customStyles} options={options2}/>
              </div>
            </div>
            <div className="m-3">
              <span className="" style={Headtext}>
                Same as current address
              </span>
              <div className="flex flex-col lg:flex-row mt-[10px]">
                <div>
                  <button
                    style={Btntextstyle}
                    className="w-[300px] h-[50px] bg-[#F8F8F8]"
                  >
                    Add Your Origin
                  </button>
                </div>
                <div className="lg:mt-0 mt-[10px]">
                  <button className="w-[300px] h-[50px] ">
                    Same as current address
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressSection;
