import React, { useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';


function GeneralSection() {

    const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
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



    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "300px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
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

    const btnstyle = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [activeTab, setActiveTab] = useState(1);

    const HandleTabclick = () => {
        setActiveTab(activeTab + 1)
    }

    const [selectedGender, setSelectedGender] = useState("male");
    const HandleGendertab = (text) => {
        setSelectedGender(text)

    }

    const [selectedInterest, setSelectInterest] = useState("")
    const HandleInterestedrtab = (text) => {
        setSelectInterest(text)
    }


    return (
        <>

            <div className='pt-[33px] gap-y-[30px] flex flex-col'>
                <div>
                    <h1 className='text-[#000]' style={Text1}>General Details</h1>
                </div>
                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] w-[74px] bg-[#17C270]'></div>
                    </div>
                </div>
            </div>

            <div className='2xl:pb-0 xl:pb-0 md: pb-[100px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>First Name</h1>
                    <input type='text' placeholder='First Name' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[300px] border-[1px] border-[#B5B5B5] pl-[10px] rounded-[8px] ' />
                </div>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Date of Birth</h1>
                    <input type='date' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#B5B5B5] pl-[10px] rounded-[8px] ' />
                </div>

                <div className="w-[300px]">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Gender</h1>

                    <div className="flex gap-x-[30px]">
                        <button value="male" style={btnstyle} onClick={() => HandleGendertab("male")} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#FFF] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "male" ? "bg-[#0F52BA]" : "bg-[#F9F9F9] text-black"}`}>
                            Male
                        </button>
                        <button value="female" onClick={() => HandleGendertab("female")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "female" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`}>
                            Female
                        </button>
                        <button value="other" onClick={() => HandleGendertab("other")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedGender === "other" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`}>
                            Other
                        </button>
                    </div>

                </div>
                <div className="w-[300px]">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Interested In</h1>

                    <div className="flex gap-x-[30px]">
                        <button value="male" style={btnstyle} onClick={() => HandleInterestedrtab("male")} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#FFF] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "male" ? "bg-[#0F52BA]" : "bg-[#F9F9F9] text-black"}`}>
                            Male
                        </button>
                        <button value="female" onClick={() => HandleInterestedrtab("female")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "female" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`}>
                            Female
                        </button>
                        <button value="other" onClick={() => HandleInterestedrtab("other")} style={btnstyle} className={` duration-500 hover:bg-[#0F52BA] hover:text-white text-[#000] w-[87px] h-[50px] rounded-[8px] ${selectedInterest === "other" ? "bg-[#0F52BA] text-white" : "bg-[#F9F9F9]"}`}>
                            Other
                        </button>
                    </div>

                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Religion</h1>

                    <div className="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Current City</h1>

                    <div className="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options2}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default GeneralSection