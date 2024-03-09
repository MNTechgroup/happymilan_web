import React, { useState } from 'react'
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData } from "../../../store/actions/registerUser";
import { connect } from "react-redux"

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

function PartnerPreference({ formData, updateFormData }) {
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
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },
        { value: 13, label: '13' },
        { value: 14, label: '14' },
        { value: 15, label: '15' },
        { value: 16, label: '16' },
        { value: 17, label: '17' },
        { value: 18, label: '18' },
        { value: 19, label: '19' },
        { value: 20, label: '20' }
    ];
    
    const currentcityOption = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "toronto", label: "Toronto" },
        // Add more cities as needed
      ];

      const countryoflivingOptions = [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
        // Add more countries as needed
      ];

    const Country = [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
    ];


    const states = [
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'otava', label: 'Otava' },
        { value: 'Assam', label: 'Assam' },
    ];


    const city = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "toronto", label: "Toronto" },
    ];



    const incomeOptions = [
        { value: "1L-10L", label: "1 LPA to 10 LPA" },
        { value: "10L-20L", label: "10 LPA to 20 LPA" },
        { value: "20L-30L", label: "20 LPA to 30 LPA" },
        { value: "30L-40L", label: "30 LPA to 40 LPA" },
        { value: "40L-50L", label: "40 LPA to 50 LPA" },
        { value: "50L+", label: "50 LPA and above" }
    ];

    const dietOptions = [
        { value: "vegetarian", label: "Vegetarian" },
        { value: "non_vegetarian", label: "Non-Vegetarian" },
        // Add more diet options as needed
    ];



    const creativeOption = [
        { value: "Writing", label: "Writing" },
        { value: "PlayInstrument", label: "Play Instrument" },
        { value: "Poetry", label: "Poetry" }
    ]

    const FunOptions =
        [
            { value: "Movie", label: "Movie" },
            { value: "Sports", label: "Sports" },
            { value: "Biking", label: "Biking" },
            { value: "Music", label: "Music" },
            { value: "SocialMedia", label: "Social Media" }
        ]




    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name == "heightmin") {
            updateFormData({
                partnerpref: {
                    ...formData.partnerpref,
                    height: {
                        ...formData.partnerpref.height,
                        min: value
                    }
                }
            })
        }
        else if (name == "heightmax") {
            updateFormData({
                partnerpref: {
                    ...formData.partnerpref,
                    height: {
                        ...formData.partnerpref.height,
                        max: value
                    }
                }
            })
        }
        else if (name == "agemin") {
            updateFormData({
                partnerpref: {
                    ...formData.partnerpref,
                    age: {
                        ...formData.partnerpref.age,
                        min: value
                    }
                }
            })

        }
        else if (name == "agemax") {
            updateFormData({
                partnerpref: {
                    ...formData.partnerpref,
                    age: {
                        ...formData.partnerpref.age,
                        max: value
                    }
                }
            })

        }
        else {


            updateFormData({
                partnerpref: { ...formData.partnerpref, [name]: value }
            });
        }
    }
    return (
        <>
            <div className='pt-[0px] gap-y-[30px] flex flex-col'>
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
                            <DynamicSelect styles={customStyle2} options={options}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "agemin", value: selectedOption?.value } })}

                            />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle2} options={options}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "agemax", value: selectedOption?.value } })}

                            />

                        </div>


                    </div>
                </div>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Choose Height</h1>
                    <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                        <div className="flex items-center space-x-[10px]">
                            <DynamicSelect
                                styles={customStyle2}
                                options={options}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "heightmin", value: selectedOption?.value } })}
                            />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle2} options={options}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "heightmax", value: selectedOption?.value } })}
                            />

                        </div>


                    </div>
                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose Country</h1>
                    <DynamicSelect options={Country}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption?.value } })}
                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose State</h1>
                    <DynamicSelect options={states}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption?.value } })}

                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose City</h1>
                    <DynamicSelect options={city}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption?.value } })}

                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Income</h1>
                    <DynamicSelect
                        options={incomeOptions}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "income", value: selectedOption?.value } })}

                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Creative</h1>
                    <DynamicSelect
                        options={creativeOption}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption?.value } })}
                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Fun</h1>
                    <DynamicSelect
                        options={FunOptions}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "fun", value: selectedOption?.value } })}

                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Diet</h1>
                    <DynamicSelect
                        options={dietOptions}
                        placeholder="Select.."
                        styles={customStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "diet", value: selectedOption?.value } })}

                        isSearchable={true}
                    />

                </div>

            </div>
        </>
    )
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(PartnerPreference);