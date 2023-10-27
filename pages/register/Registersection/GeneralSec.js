"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];
const options2 = [
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
    const [selectedGender, setSelectedGender] = useState("");
    const HandleGendertab = (text) => {
        setSelectedGender(text)

    }

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

    const overStyle = {
        overflowY: "hidden", /* Hide vertical scrollbar */
        overflowX: "hidden"
    }



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


    const [selectedInterest, setSelectInterest] = useState("")
    const HandleInterestedrtab = (text) => {
        setSelectInterest(text)
    }


    const profileOptions = [
        { id: 1, label: 'My Self' },
        { id: 2, label: 'My Son' },
        { id: 3, label: 'My Daughter' },
        { id: 4, label: 'My Brother' },
        { id: 5, label: 'My Friend' },
    ];

    const [selectedProfile, setselectedProfile] = useState(0)
    const HandleSelectProfile = (val) => {
        setselectedProfile(val.id)

    }
    const [SelectdOption,setSelectdOption] = useState("")

    const [Generaldata, setGeneraldata] = useState({
        firstname: "",
        lastname: "",
        nickname: "",
        date: "",
        birthtime: "",
        caste: "",
        religion : SelectdOption.label



    })
    const HandleInputs = (event) => {
        setGeneraldata(
            { ...Generaldata, [event.target.name]: event.target.value }
        )

        // console.log(event.target.value)
    }

    const HandleSubmit = () =>{
        console.log(Generaldata)
    }
    
    return (
        <>
            <div className='pt-[33px] gap-y-[30px] flex flex-col'>
                <div>
                    <h1 onClick={HandleSubmit} className='text-[#000]' style={Text1}>General Details</h1>
                </div>
                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] w-[74px] bg-[#17C270]'></div>
                    </div>
                </div>
            </div>

            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
                <div>
                    <h1 className="" style={Text2}>Creating Profile for</h1>
                    <div className="flex space-x-[32px] pt-[10px]">
                        {profileOptions.map((options) => {
                            return (<button style={btnstyle} onClick={() => HandleSelectProfile(options)} className={`h-[50px] ${options.id === 3 ? "w-[128px]" : "w-[102px]"} ${selectedProfile === options.id ? "bg-[#0F52BA] text-[#FFF]" : "bg-[white]"}  rounded-[8px] border-[1px] border-[#e6e6e6]`} key={options.id}>{options.label}</button>)
                        })}
                    </div>
                </div>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>First Name</h1>
                    <input name="firstname" value={Generaldata.firstname} onChange={HandleInputs} type='text' placeholder='First Name' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Last Name</h1>
                    <input name="lastname" value={Generaldata.lastname} onChange={HandleInputs} type='text' placeholder="Last Name" className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Do you have Nick Name?</h1>
                    <input name="nickname" value={Generaldata.nickname} onChange={HandleInputs} type='text' placeholder="Nick Name" className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
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

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Date of Birth</h1>
                    <input name="date" value={Generaldata.date} onChange={HandleInputs} type='date' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Time of Birth</h1>
                    <input name="birthtime" value={Generaldata.birthtime} onChange={HandleInputs} type='time' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                </div>


                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Religion</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            
                            value={SelectdOption}
                            onChange={setSelectdOption}
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options}
                        />
                    </div>
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Caste / Sub Caste</h1>
                    <input name="caste" value={Generaldata.caste} onChange={HandleInputs} type='text' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Current City</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Country of Living</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options}
                        />
                    </div>
                </div>
                <div className='w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Write About Yourself</h1>
                    <textarea type='text' className='pt-[5px] outline-none focus:border-[1px] focus:border-[black] h-50 2xl:h-[76px] xl:h-[76px] w-[100%] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]' />

                </div>

            </div>
        </>
    )
}

export default GeneralSection;