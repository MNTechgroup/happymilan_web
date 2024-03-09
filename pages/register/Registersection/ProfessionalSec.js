import React from 'react'

import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData } from "../../../store/actions/registerUser";

//Style For Select Box

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


// const Text1 = {
//     color: "#0F52BA",
//     fontFamily: "Poppins",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: "400",
//     lineHeight: "normal"
// }

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


const Btntextstyle = {
    color: "#000",
    textAlign: "center",
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
    left: "4px"
}

function ProfessionalSec({ formData, updateFormData, HandleTabclick, activeTab }) {



    const jobTypeOptions = [
        { value: 'full_time', label: 'Full-time' },
        { value: 'part_time', label: 'Part-time' },
        { value: 'contract', label: 'Contract' },
        { value: 'internship', label: 'Internship' },
        { value: 'remote', label: 'Remote' }
    ];


    const currentDesignationOptions = [
        { value: 'junior_engineer', label: 'Junior Engineer' },
        { value: 'senior_analyst', label: 'Senior Analyst' },
        { value: 'team_lead', label: 'Team Lead' },
        { value: 'project_manager', label: 'Project Manager' },
        { value: 'director', label: 'Director' }
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


    const doItlater = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }



const handleInputChange = (e) =>{

    const value = e.target.value;
    const name = e.target.name;

    updateFormData({
        professional: { ...formData.professional, [name]: value }
      });



}


    return (
        <>

            <div className='pt-[33px] gap-y-[30px] flex flex-col'>
                <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
                    <div>
                        <h1 className='text-[#000]' style={Text1}>Professional Details</h1>
                    </div>
                    <div>
                        <h1 onClick={() => HandleTabclick(activeTab + 1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
                    </div>
                </div>
                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] md:w-[395px] w-[85%]  bg-[#17C270]'></div>
                    </div>
                </div>
            </div>

            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Current Designation (Job Title)</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={currentDesignationOptions}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "jobTitle", value: selectedOption?.value } })}

                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Job Type</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={jobTypeOptions}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "jobType", value: selectedOption?.value } })}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Company Name</h1>

                    <div class="flex items-center space-x-2">
                        <input onChange={handleInputChange} value={formData?.professional.companyName} type='text' name='companyName' placeholder='Enter Company Name' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Annual Salary</h1>

                    <div class="flex items-center space-x-2">
                        {/* <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options4}
                        /> */}

                        <input onChange={handleInputChange} value={formData?.professional.currentSalary} type='number' name='currentSalary' placeholder='Enter Your current Salary' className='outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                    </div>
                </div>


                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Work In City</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={currentcityOption}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "workCity", value: selectedOption?.value } })}

                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Work In Country</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={countryoflivingOptions}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "workCountry", value: selectedOption?.value } })}

                        />
                    </div>
                </div>



            </div>

        </>
    )
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(ProfessionalSec);