"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const btnstyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const Spanstyle = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    position: "relative",
    top: "-10px",
    left: "4px"
}


const GeneralSection = () => {
    const [selectedGender, setSelectedGender] = useState("male");
    const HandleGendertab = (text) => {
        setSelectedGender(text)

    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            paddingRight: '10px',
            width: "300px",
            height: "50px",
            borderRadius: "8px" // Add padding on the right side
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };

    const overStyle = {
        overflowY: "hidden", /* Hide vertical scrollbar */
        overflowX: "hidden"
    }

    return (
        <>

            <div className="lg:relative top-[-15px] left-[-30px]" style={overStyle}>
                <div className="m-5">
                    <h1 id="register-text">General Details</h1>
                </div>
                <div className="m-5 my-5 md:w-auto w-[90%] lg:w-[630px]" id="progress-container">
                    <div className="w-[74px]" id="progress-inner"></div>
                </div>

                <div className="ml-[6px]">
                    <div className="flex flex-wrap gap-3" style={{ paddingBottom: "100px" }}>
                        <div className="m-3">
                            <span style={Spanstyle}>First Name</span>

                            <input placeholder="First name"  className="block text-[#000] pl-[10px] border-2  border-[#C7C7C7]" id="register-input-box" />
                        </div>
                        <div className="m-3">
                            <span style={Spanstyle}>Last Name</span>

                            <input label="Last Name" placeholder="Last Name"  className="block block pl-[10px] border-2 border-[#C7C7C7]" id="register-input-box" />
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Do you have Nick Name?</span>
                            <input label="Nick Name" placeholder="Nick Name" id="register-input-box" className="block pl-[10px] border-2 border-[#c7c7c7]" />
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Gender</span>

                            <div className="flex gap-2">
                                <button value="male" style={btnstyle} onClick={() => HandleGendertab("male")} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#FFF] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "male" ? "bg-[#0F52BA]" : "text-black"}`}>
                                    Male
                                </button>
                                <button value="female" onClick={() => HandleGendertab("female")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "female" ? "bg-[#0F52BA] text-white" : ""}`}>
                                    Female
                                </button>
                                <button value="other" onClick={() => HandleGendertab("other")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "other" ? "bg-[#0F52BA] text-white" : ""}`}>
                                    Other
                                </button>
                            </div>

                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Date of Birth</span>

                            <div>
                                <input
                                    type="date"
                                    class="w-[300px] h-[50px] border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Birth of Time</span>

                            <div class="flex items-center space-x-2">
                                <input
                                    type="time"
                                    class="w-[300px] h-[50px] border-2 border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="m-3">
                            <span style={Spanstyle}>Religion</span>

                            <div class="flex items-center space-x-2">
                                <DynamicSelect
                                    className="h-[50px] w-[300px] flex justify-end"
                                    styles={customStyles}
                                    options={options}
                                />
                            </div>
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Caste / Sub Caste</span>

                            <div class="flex items-center space-x-2">
                                <DynamicSelect
                                    className="h-[50px] w-[300px] flex justify-end"
                                    styles={customStyles}
                                    options={options}
                                />
                            </div>
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Current City</span>

                            <div class="flex items-center space-x-2">
                                <DynamicSelect
                                    className="h-[50px] w-[300px] flex justify-end"
                                    styles={customStyles}
                                    options={options}
                                />
                            </div>
                        </div>

                        <div className="m-3">
                            <span style={Spanstyle}>Country of Living</span>

                            <div class="flex items-center space-x-2">
                                <DynamicSelect
                                    className="h-[50px] w-[300px] flex justify-end"
                                    styles={customStyles}
                                    options={options}
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default GeneralSection;