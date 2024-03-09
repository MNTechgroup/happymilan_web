"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { updateFormData } from "../../../store/actions/registerUser";
import { connect, useSelector } from "react-redux";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

const motherTongueOption = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "gujarati", label: "Gujarati" }
];


const religionOptions = [
    { value: "hindu", label: "Hinduism" },
    { value: "muslim", label: "Islam" },
    { value: "sikh", label: "Sikhism" },
    // Add more options as needed
];





const GeneralSection = ({ formData, updateFormData, activeTab, TheValidation }) => {


    const [selectedGender, setSelectedGender] = useState("");
    const HandleGendertab = (text) => {
        setSelectedGender(text)

        updateFormData({
            general: {
                ...formData.general,
                gender: text,
            },
        });

    }



    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "300px",
            height: "50px",
            borderRadius: "8px",
            borderColor: state.isFocused ? 'black' : "",
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
    // MY_SELF: 'mySelf',
    // MY_SON: 'mySon',
    // MY_DAUGHTER: 'myDaughter',
    // MY_BROTHER: 'myBrother',
    // MY_FRIEND: 'myFriend',

    const profileOptions = [
        { id: 1, label: 'My Self' , value : 'mySelf' },
        { id: 2, label: 'My Son'  , value : 'mySon' },
        { id: 3, label: 'My Daughter' , value : 'myDaughter' },
        { id: 4, label: 'My Brother' , value : 'myBrother'},
        { id: 5, label: 'My Friend' , value :  'myFriend'},
    ];

    const [selectedProfile, setselectedProfile] = useState(0)
    const HandleSelectProfile = (val) => {
        // Update local state
        setselectedProfile(val.id);

        // Dispatch action to update Redux store
        updateFormData({
            general: {
                ...formData.general,
                creatingProfileFor: val.value,
            },
        });
    }

    const [selectBoxData, setselectBoxData] = useState({
        motherTongue: "",
        religion: "",
        currentcity: "",
        countryofliving: "",
        cast: "",
        timeData: "",
        selectedTime : ""
    })

    const [nullFields, setNullFields] = useState([]);

    const isFieldNull = (fieldName) => {
        return formData?.general[fieldName] === null || formData?.general[fieldName] === '';
    };

    //   console.log(isFormValid)

    const handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;



        // Update the form data in Redux store
        if (name === 'motherTongue') {
            const selectedReligion = motherTongueOption.find((option) => option.value === value);
            setselectBoxData({
                motherTongue: selectedReligion
            });


        }
        else if (name === 'religion') {
            const selectedReligion = religionOptions.find((option) => option.value === value);
            setselectBoxData({
                religion: selectedReligion
            });

        }
        else if (name === 'currentcity') {
            const selectedReligion = currentcityOption.find((option) => option.value === value);
            setselectBoxData({
                currentcity: selectedReligion
            });

        }
        else if (name === 'countryofliving') {
            const selectedReligion = countryoflivingOptions.find((option) => option.value === value);
            setselectBoxData({
                countryofliving: selectedReligion
            });

        }

        else if (name === 'dateOfBirth') {
            const selectedDate = new Date(value);
            const currentDate = new Date();
            const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

            // Check if selected date is in the future
            if (selectedDate > currentDate) {
                alert('Please select a date that is not in the future.');
                // Optionally, you can reset the date input here
                value =null;

            } // Check if user is at least 18 years old
            if (eighteenYearsAgo < selectedDate) {
                alert('You must be at least 18 years old.');
                // Optionally, you can reset the date input here
                value = null


            }


        }
        else if (name === 'birthTime') {
            // Assuming value is in 'hh:mm' format

            setselectBoxData(prevState => ({...prevState , selectedTime : value}))

            setselectBoxData(prevState => ({ ...prevState, timeData: value }));
            const [time, period] = value.split(' ');
            const [hours, minutes] = time.split(':');
            const date = new Date();
            // Set the hours and minutes of the date object
            date.setHours(period === 'PM' ? parseInt(hours) + 12 : hours);
            date.setMinutes(minutes);
            // Format the time as desired (you can adjust the format as needed)
        
            updateFormData({
                ...formData,
                general: {
                    ...formData.general,
                    birthTime : date.toISOString()
                }
            });

            



            
        }

       
        if(name === 'birthTime')
        {}else{

        // Update the form data in Redux store
        updateFormData({
            ...formData,
            general: {
                ...formData.general,
                [name]: value,
                
            }
        });
    }

    };


    useEffect(() => {
        isFieldNull();
    }, [handleInputChange])


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

            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
                <div>
                    <h1 className="" style={Text2}>Creating Profile for</h1>
                    <div className="inline-block  2xl:flex xl:flex lg:flex  2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 ml-[-10px] 2xl:space-x-[32px] lg:space-x-[32px] xl:space-x-[32px]  pt-[10px]">
                        {profileOptions.map((options) => {
                            return (<button id={formData?.general.creatingProfileFor === options.label ? "active-no" : ""} style={btnstyle} onClick={() => HandleSelectProfile(options)} className={`2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 ml-[10px] h-[50px] ${options.id === 3 ? "2xl:w-[128px] xl:w-[128px] lg:w-[128px] w-[100px]" : "w-[100px] 2xl:w-[102px] xl:w-[102px] lg:w-[102px]"} ${selectedProfile === options.id ? "bg-[#0F52BA] text-[white]" : "bg-[white]"}  rounded-[8px] border-[1px] border-[#e6e6e6]`} key={options.id}>{options.label}</button>)
                        })}
                    </div>
                </div>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>First Name <span className={`text-[10px] text-${nullFields.includes('firstName') ? "[red]" : "[black]"}`}>*</span></h1>
                    <input name="firstName" value={formData?.general.firstName} onChange={handleInputChange} type='text' placeholder='First Name' className={`outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[300px] border-[1px] border-${'[#e6e6e6]'} pl-[10px] rounded-[8px]`} />
                    {isFieldNull("firstName") ? <><span className="block text-[red]">required</span></> : ""}
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Last Name</h1>
                    <input name="lastName" value={formData?.general.lastName} onChange={handleInputChange} type='text' placeholder="Last Name" className={`outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-${'[#e6e6e6]'} pl-[10px] rounded-[8px] `} required />
                    {isFieldNull("lastName") ? <><span className="block text-[red]">required</span></> : ""}

                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Mother Tongue</h1>
                    <DynamicSelect
                        className={`h-[50px] w-[300px] flex justify-end border-${isFieldNull("motherTongue") ? "[red]" : "[#e6e6e6"}`}
                        styles={customStyles}
                        options={motherTongueOption}
                        defaultValue={formData?.general.motherTongue}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "motherTongue", value: selectedOption?.value } })}
                    />
                    {isFieldNull("motherTongue") ? <><span className="block text-[red]">required</span></> : ""}

                </div>



                <div className="w-[300px]">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Gender</h1>
                    <div className="flex gap-x-[30px]">
                        {
                            [{ id: 1, val: "male", label: "Male" }, { id: 2, val: "female", label: "Female" }, { id: 3, val: "other", label: "Other" }].map((res) => {
                                return (<>
                                    <button id={formData?.general.gender === res.val ? "active-no" : ""} value={res.val} style={btnstyle} onClick={() => HandleGendertab(res.val)} className={` duration-500  w-[87px] h-[50px] rounded-[8px] ${selectedGender === res.label ? "bg-[#0F52BA]" : "bg-[#F9F9F9] text-black"}`}>
                                        {res.label}
                                    </button></>)
                            })
                        }
                    </div>

                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Date of Birth</h1>
                    <input name="dateOfBirth" value={formData?.general.dateOfBirth} onChange={handleInputChange} type='date' className={`outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-${'[#e6e6e6]'}  pl-[10px] rounded-[8px]`} />
                    {isFieldNull("dateOfBirth") ? <><span className="block text-[red]">required</span></> : ""}

                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Time of Birth</h1>
                    <input name="birthTime" value={selectBoxData.selectedTime} onChange={handleInputChange} type='time' className={`outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-${'[#e6e6e6]'}  pl-[10px] rounded-[8px]`} />
                    {isFieldNull("birthTime") ? <><span className="block text-[red]">required</span></> : ""}

                </div>


                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Religion</h1>

                    <div class="space-x-2">
                        <DynamicSelect
                            className={`h-[50px] w-[300px] flex justify-end border-${"[#e6e6e6]"}`}
                            styles={customStyles}
                            options={religionOptions}
                            defaultValue={selectBoxData.religion}
                            onChange={(selectedOption) => handleInputChange({ target: { name: "religion", value: selectedOption?.value } })}

                        />
                        {isFieldNull("religion") ? <><span className="block text-[red]">required</span></> : ""}

                    </div>
                </div>

                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Caste / Sub Caste</h1>
                    <input name="cast" value={formData?.general.cast} onChange={handleInputChange} type='text' className={`outline-none focus:border-[1px] focus:border-[black] pr-[10px] h-[50px] w-[300px] border-[1px] border-${'[#e6e6e6]'}  pl-[10px] rounded-[8px]`} />
                    {isFieldNull("cast") ? <><span className="block text-[red]">required</span></> : ""}
                
                </div>

                <div className='w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Write About Yourself</h1>
                    <textarea name="writeBoutYourSelf" value={formData?.general.writeBoutYourSelf} onChange={handleInputChange} type='text' className={`pt-[5px] outline-none focus:border-[1px] focus:border-[black] h-50 2xl:h-[76px] xl:h-[76px] w-[100%] border-[1px] border-${'[#e6e6e6]'} pl-[10px] rounded-[8px]`} />
                    {isFieldNull("writeBoutYourSelf") ? <><span className="block text-[red]">required</span></> : ""}

                </div>

            </div>
        </>
    )
}

export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(GeneralSection);