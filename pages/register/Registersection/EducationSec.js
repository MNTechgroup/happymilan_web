import {Select, Option } from "@material-tailwind/react";
import React from "react";
import dynamic from 'next/dynamic';
import { customStyles } from "../commonStyle";

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

const Text1 = {
    color: "#0F52BA",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
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

function EducationSec() {

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
    const options3 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const options4 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

    return (
        <>
            <div className="lg:relative  top-[-15px] left-[-30px]">
                <div className="pb-[100px]">
                    <div className="m-5 flex justify-between">
                        <h1 id="register-text">Education Qualification Details</h1>
                        <h1 onClick={() => alert("hello")} className='cursor-pointer lg:mr-[25%]' style={Text1}>I{`’`}ll do it later</h1>

                    </div>
                    <div
                        className="m-5 my-5 md:w-auto w-[300px] lg:w-[667px]"
                        id="progress-container"
                    >
                        <div className=" w-[200px] lg:w-[395px]" id="progress-inner"></div>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-3">
                            <div className="m-3">
                                <span style={Spanstyle}>Degree</span>
                                <div class="flex items-center space-x-2">
                                    <DynamicSelect styles={customStyles} options={options1}/>
                                </div>
                            </div>
                            <div className="m-3">
                                <span style={Spanstyle}>Select Area of Interest</span>
                                <div class="flex items-center space-x-2">
                                  <DynamicSelect styles={customStyles} options={options2}/>
                                </div>
                            </div>
                            <div className="m-3">
                                <span style={Spanstyle}>City</span>

                                <div class="flex items-center space-x-2">
                                    <DynamicSelect styles={customStyles} options={options3} />
                                </div>
                            </div>
                            <div className="m-3">
                                <span style={Spanstyle}>Country</span>
                                <div class="flex items-center space-x-2">
                                   <DynamicSelect styles={customStyles} options={options4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationSec;
