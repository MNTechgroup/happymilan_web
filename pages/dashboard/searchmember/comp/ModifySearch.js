import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { Checkbox } from "@material-tailwind/react";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ModifySearch({setFormOpen}) {

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */
    }

    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }



    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
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

    const Country = [
        { value: 1, label: 'India' },
        { value: 2, label: 'Canada' },
        { value: 3, label: 'United States' },
        { value: 4, label: 'China' },
        { value: 5, label: 'Brazil' },
        { value: 6, label: 'Australia' },
        { value: 7, label: 'United Kingdom' },
        { value: 8, label: 'Germany' },
        { value: 9, label: 'France' },
        { value: 10, label: 'Japan' },
        { value: 11, label: 'South Korea' },
        { value: 12, label: 'Russia' },
        { value: 13, label: 'Mexico' },
        { value: 14, label: 'Italy' },
        { value: 15, label: 'Spain' },
        { value: 16, label: 'Netherlands' },
        { value: 17, label: 'Sweden' },
        { value: 18, label: 'Switzerland' },
        { value: 19, label: 'Norway' },
        { value: 20, label: 'Denmark' },
    ]
    const [selectedOptions, setSelectedOptions] = useState();
    const [selectedmaritalstatus, setSelectedmaritalstatus] = useState();
    const [selectedReligion, setSelectedReligion] = useState();
    const [selectCommunity, setSelectCommunity] = useState();
    const [selectMotherTongue, setSelectMotherTongue] = useState();
    const [selectStateofLiving, setSelectStateofLiving] = useState();
    
    function handleSelect(data) {
        setSelectedOptions(data);
    }

    const handleMaritalstatus = (data) =>{
        setSelectedmaritalstatus(data)
    }

    const handleReligion = (data) =>{
        setSelectedReligion(data)
    }

    const handleCommunity = (data) =>{
        setSelectCommunity(data)
    }

    const handleMotherTongue = (data) =>{
        setSelectMotherTongue(data)
    }
    const handleStateofLiving = (data) =>{
        setSelectStateofLiving(data)
    }

    const [toggle,settoggle] = useState("")
    return (
        <>
            <div class="flex flex-col space-y-[40px] w-[600px] 2xl:mr-[110px] mt-[120px] pb-[50px]">
                <div>
                    <h1 style={Text1}>Search Your Match</h1>
                </div>

                <div className='flex flex-col space-y-[20px]'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <h1>Age</h1>
                             <div className=' relative left-[118px] rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'></div>
                        </div>
                        <div className='flex items-center space-x-[30px] '>
                            <h1>Age</h1>
                             <div className='rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'></div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>Marital Status</h1>
                        <div className='w-[479px]'>
                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectedmaritalstatus}
                                onChange={handleMaritalstatus}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>Religion</h1>
                        <div className='w-[479px]'>
                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectedReligion}
                                onChange={handleReligion}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>Community</h1>
                        <div className='w-[479px]'>
                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectCommunity}
                                onChange={handleCommunity}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>Mother Tongue</h1>
                        <div className='w-[479px]'>
                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectMotherTongue}
                                onChange={handleMotherTongue}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex'>
                        <h1 className='relative top-[10px] w-[150px]'>Country Living</h1>
                        <div className='w-[479px] flex flex-col space-y-[10px]'>
                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                                isMulti />

                            <DynamicSelect
                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectStateofLiving}
                                onChange={handleStateofLiving}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div>
                        <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                    </div>
                    <div className='flex items-center'>
                        <h1>With Photo?</h1>
                        <div className='relative left-[50px]'>
                            <button onClick={()=>settoggle("yes")} className={`${toggle === "yes" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"}  w-[90px] h-[50px] rounded-[8px] duration-500`}>Yes</button>
                            <button onClick={()=>settoggle("no")} className={`${toggle  === "no"? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"} w-[90px] h-[50px] rounded-[8px] duration-500`}>No</button>    
                        </div>
                    </div>

                    <div>
                        <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                    </div>

                    <div className='w-full flex justify-end space-x-[20px]'>
                        <button className={` border-[1px] border-[#0F52BA] w-[104px] h-[50px] text-[black] rounded-[10px]`}>Clear All</button>
                        <button className={` border-[1px] border-[#0F52BA] bg-[#0F52BA] text-[white] w-[104px] h-[50px] rounded-[10px]`} onClick={()=>setFormOpen(false)} >Search</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModifySearch