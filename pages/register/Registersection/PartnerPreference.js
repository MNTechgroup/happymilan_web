import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { Checkbox } from "@material-tailwind/react";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style for Select Box
const customStyle2 = {
    control: (provided, state) => ({
        ...provided,
        paddingRight: '10px',
        paddingLeft: "8px",
        width: "133px",
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

function PartnerPreference() {
    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const doItlater = {
        fontFamily: "Poppins",
        fontSize: "14px",
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
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
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
        { value: 1, label: 'Uttar Pradesh' },
        { value: 2, label: 'Maharashtra' },
        { value: 3, label: 'Bihar' },
        { value: 4, label: 'West Bengal' },
        { value: 5, label: 'Madhya Pradesh' },
        { value: 6, label: 'Tamil Nadu' },
        { value: 7, label: 'Rajasthan' },
        { value: 8, label: 'Karnataka' },
        { value: 9, label: 'Gujarat' },
        { value: 10, label: 'Andhra Pradesh' },
        { value: 11, label: 'Odisha' },
        { value: 12, label: 'Telangana' },
        { value: 13, label: 'Kerala' },
        { value: 14, label: 'Jharkhand' },
        { value: 15, label: 'Assam' },
        { value: 16, label: 'Punjab' },
        { value: 17, label: 'Chhattisgarh' },
        { value: 18, label: 'Haryana' },
        { value: 19, label: 'Uttarakhand' },
        { value: 20, label: 'Himachal Pradesh' },
    ]

    const city = [
        { value: 1, label: 'Ahmedabad' },
        { value: 2, label: 'Surat' },
        { value: 3, label: 'Vadodara' },
        { value: 4, label: 'Rajkot' },
        { value: 5, label: 'Gandhinagar' },
        { value: 6, label: 'Jamnagar' },
        { value: 7, label: 'Bhavnagar' },
        { value: 8, label: 'Junagadh' },
        { value: 9, label: 'Anand' },
        { value: 10, label: 'Patan' },
        { value: 11, label: 'Mumbai' },
        { value: 12, label: 'Delhi' },
        { value: 13, label: 'Kolkata' },
        { value: 14, label: 'Chennai' },
        { value: 15, label: 'Hyderabad' },
        { value: 16, label: 'Bangalore' },
        { value: 17, label: 'Jaipur' },
        { value: 18, label: 'Pune' },
        { value: 19, label: 'Lucknow' },
        { value: 20, label: 'Kochi' },
    ]
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
    ];
    const [selectedOptions, setSelectedOptions] = useState();
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <>
            <div className='pt-[33px] gap-y-[30px] flex flex-col'>
                <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
                    <div>
                        <h1 className='text-[#000]' style={Text1}>Partner Preferences</h1>
                    </div>
                    <div>
                        <h1 className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
                    </div>
                </div>

                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] w-[74px] bg-[#17C270]'></div>
                    </div>
                </div>
            </div>
            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Choose Age</h1>
                    <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                        <div className="flex items-center space-x-[10px]">
                            <DynamicSelect styles={customStyle2} options={options} />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle2} options={options} />

                        </div>


                    </div>
                </div>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Choose Height</h1>
                    <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                        <div className="flex items-center space-x-[10px]">
                            <DynamicSelect styles={customStyle2} options={options} />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle2} options={options} />

                        </div>


                    </div>
                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose Country</h1>
                    <DynamicSelect options={Country}
                        placeholder="Select.."
                        styles={customStyle}
                        value={selectedOptions}
                        onChange={handleSelect}
                        isSearchable={true}
                        isMulti />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose State</h1>
                    <DynamicSelect options={states}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                        isMulti />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose City</h1>
                    <DynamicSelect options={city}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                        isMulti />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Income</h1>
                    <DynamicSelect options={optionList}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Creative</h1>
                    <DynamicSelect options={optionList}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                        isMulti />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Fun</h1>
                    <DynamicSelect options={optionList}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                        isMulti />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Diet</h1>
                    <DynamicSelect options={optionList}
                        placeholder="Select.."
                        styles={customStyle}

                        isSearchable={true}
                        isMulti />

                </div>

            </div>
        </>
    )
}

export default PartnerPreference