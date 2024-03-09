import React, { useState } from 'react'
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ModifySearch({ setFormOpen }) {

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */
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

    const MaritalStatus = [
        { value: 1, label: "Single" },
        { value: 2, label: "Married" },
        { value: 3, label: "Divorced" },
        { value: 4, label: "Separated" },
        { value: 5, label: "Widowed" }

    ]
    const ReligionOptions = [
        { value: 1, label: "Hinduism" },
        { value: 2, label: "Judaism" },
        { value: 3, label: "Christianity" },
        { value: 4, label: "Buddhism" },
        { value: 5, label: "Islam" },
        // Add more religions as needed
    ];

    const MotherTongueOptions = [
        { value: "gujarati", label: "Gujarati" },
        { value: "english", label: "English" },
        { value: "spanish", label: "Spanish" },
        { value: "mandarin", label: "Mandarin Chinese" },
        { value: "hindi", label: "Hindi" },
        { value: "arabic", label: "Arabic" },
        // Add more mother tongues as needed
    ];


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

    const states = [
        { value: 1, label: 'Andhra Pradesh' },
        { value: 2, label: 'Arunachal Pradesh' },
        { value: 3, label: 'Assam' },
        { value: 4, label: 'Bihar' },
        { value: 5, label: 'Chhattisgarh' },
        { value: 6, label: 'Goa' },
        { value: 7, label: 'Gujarat' },
        { value: 8, label: 'Haryana' },
        { value: 9, label: 'Himachal Pradesh' },
        { value: 10, label: 'Jharkhand' }
    ]

    const citydata = [
        { value: 1, label: 'Ahmedabad' },
        { value: 2, label: 'Surat' },
        { value: 3, label: 'Vadodara' },
        { value: 4, label: 'Rajkot' },
        { value: 5, label: 'Gandhinagar' },
        { value: 6, label: 'Bhavnagar' },
        { value: 7, label: 'Jamnagar' },
        { value: 8, label: 'Junagadh' },
        { value: 9, label: 'Anand' },
        { value: 10, label: 'Bharuch' }
    ]
    const [selectedOptions, setSelectedOptions] = useState();
    const [selectedmaritalstatus, setSelectedmaritalstatus] = useState();
    const [selectedReligion, setSelectedReligion] = useState();
    const [selectCommunity, setSelectCommunity] = useState();
    const [selectMotherTongue, setSelectMotherTongue] = useState();
    const [selectStateofLiving, setSelectStateofLiving] = useState();
    const [selectCityeofLiving, setSelectCityeofLiving] = useState();

    function handleSelect(data) {
        setSelectedOptions(data);
    }

    const handleMaritalstatus = (data) => {
        setSelectedmaritalstatus(data)
    }

    const handleReligion = (data) => {
        setSelectedReligion(data)
    }

    const handleCommunity = (data) => {
        setSelectCommunity(data)
    }

    const handleMotherTongue = (data) => {
        setSelectMotherTongue(data)
    }
    const handleStateofLiving = (data) => {
        setSelectStateofLiving(data)
    }

    const handleCityeofLiving = (data) =>{
        setSelectCityeofLiving(data)
    }

    const [toggle, settoggle] = useState("")
    return (
        <>
            <div class="2xl:ml-0 xl:ml-0 lg:ml-[150px] flex flex-col space-y-[40px] w-full  md:w-[600px] 2xl:mr-[110px] mt-[120px] pb-[50px]">
                <div>
                    <h1 style={Text1}>Search Your Match</h1>
                </div>

                <div className='flex flex-col space-y-[20px]'>
                    <div className='flex space-y-[20px] md:space-y-0 flex-col md:flex-row justify-between'>
                        <div className='flex items-center'>
                            <h1>Age</h1>
                            <div className='flex justify-between items-center relative left-[48px] md:left-[118px] rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>

                                <input type='number' placeholder='from' className='rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                <input type='number' placeholder='to' className='rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex items-center space-x-[30px] '>
                            <h1>Height</h1>
                            <div className='flex justify-between items-center rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>
                                <input type='number' placeholder='from' className='rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                <input type='number' placeholder='to' className='rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>Marital Status</h1>
                        <div className='w-full md:w-[479px]'>
                            <DynamicSelect

                                options={MaritalStatus}
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
                        <div className='w-full md:w-[479px]'>
                            <DynamicSelect

                                options={ReligionOptions}
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
                        <div className='w-full md:w-[479px]'>
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
                        <div className='w-full md:w-[479px]'>
                            <DynamicSelect

                                options={MotherTongueOptions}
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
                        <div className='w-full md:w-[479px] flex flex-col space-y-[10px]'>
                            <DynamicSelect

                                options={Country}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>State Living</h1>
                        <div className='w-full md:w-[479px]'>
                            <DynamicSelect

                                options={states}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectStateofLiving}
                                onChange={handleStateofLiving}
                                isSearchable={true}
                                isMulti />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='w-[150px]'>City Living</h1>
                        <div className='w-full md:w-[479px]'>
                            <DynamicSelect

                                options={citydata}
                                placeholder="Select.."
                                styles={customStyle}
                                value={selectCityeofLiving}
                                onChange={handleCityeofLiving}
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
                            <button onClick={() => settoggle("yes")} id={toggle === "yes" ? "grad-button" : ""} className={`bg-[#F9F9F9] text-[black]  w-[90px] h-[50px] rounded-l-[8px] duration-500`}>Yes</button>
                            <button onClick={() => settoggle("no")} id={toggle === "no" ? "grad-button" : ""} className={`bg-[#F9F9F9] text-[black] w-[90px] h-[50px] rounded-r-[8px] duration-500`}>No</button>
                        </div>
                    </div>

                    <div>
                        <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                    </div>

                    <div className='w-full flex justify-end space-x-[20px]'>
                        <button className={` border-[1px] border-[#0F52BA] w-[104px] h-[50px] text-[black] rounded-[10px]`}>Clear All</button>
                        <button id='grad-btn' className={` border-[1px] border-[#0F52BA] bg-[#0F52BA] text-[white] w-[104px] h-[50px] rounded-[10px]`} onClick={() => setFormOpen(false)} >Search</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModifySearch