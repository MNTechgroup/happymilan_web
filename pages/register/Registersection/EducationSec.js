import React from "react";
import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData } from "../../../store/actions/registerUser";
import { connect } from "react-redux";

//Style for Select Box
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
    menu: (provided, state) => ({
        ...provided,
        overflow: "auto",
        paddingBottom: "20px"


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


const doItlater = {
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
    left: "4px",
};

function EducationSec({ formData, updateFormData, HandleTabclick, activeTab }) {
    
    const StateOptions = [
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'otava', label: 'Otava' },
        { value: 'Assam', label: 'Assam' },
    ];
    const CollageOptions = [
        { value: 'harvard', label: 'Harvard' },
        { value: 'stanford', label: 'Stanford' },
        { value: 'mit', label: 'MIT' },
        { value: 'caltech', label: 'Caltech' },
        { value: 'oxford', label: 'Oxford' }
    ];
    const CityOptions = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "toronto", label: "Toronto" },
    ];
    const DegreeOption = [
        { value: 'bs', label: 'Bachelor of Science (B.S.)' },
        { value: 'ba', label: 'Bachelor of Arts (B.A.)' },
        { value: 'ms', label: 'Master of Science (M.S.)' },
        { value: 'mba', label: 'Master of Business Administration (MBA)' },
        { value: 'phd', label: 'Doctor of Philosophy (Ph.D.)' }
    ];
    const CountryOptions = [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
    ];



const handleInputChange = (e) =>{
const value = e.target.value;
const name = e.target.name;

updateFormData({
    education: { ...formData.education, [name]: value }
  });
}


    return (
        <>
            <div className='pt-[33px] gap-y-[30px] flex flex-col'>
                <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
                    <div>
                        <h1 className='text-[#000]' style={Text1}>Education Details</h1>
                    </div>
                    <div>
                        <h1 onClick={() => HandleTabclick(activeTab + 1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
                    </div>
                </div>
                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] w-[306px] bg-[#17C270]'></div>
                    </div>
                </div>
            </div>

            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Degree</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={DegreeOption}
                            defaultValue={formData?.education.degree}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "degree", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Collage/University</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={CollageOptions}
                            defaultValue={formData?.education.collage}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "collage", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>City</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={CityOptions}
                            defaultValue={formData?.education.city}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>State</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={StateOptions}
                            defaultValue={formData?.education.state}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Country</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={CountryOptions}
                            defaultValue={formData?.education.country}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

            </div>
        </>
    );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(EducationSec);

