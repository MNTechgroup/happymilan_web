"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { updateFormData, updateGeneralInfo } from "../../../store/actions/registerUser";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { validatePhoneNumber } from "../../../utils/form/validationRules";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style for Select Box
const customStyle2 = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    width: "155px",
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

const ContactSection = ({ formData, updateFormData, HandleTabclick, activeTab }) => {


  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.form?.formData)

  const [Codes, SetCodes] = useState({
    homeCode: "",
    mobileCode: ""
  })
  const countryCodes = [
    { value: '+1', label: 'United States (+1)' },
    { value: '+44', label: 'United Kingdom (+44)' },
    { value: '+91', label: 'India (+91)' },
    // Add more country codes as needed
  ];


  const [PhoneNumberError, setPhoneNumberError] = useState({
    label: "",
    status: false
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "mobileCode") {
      const selectedCurrentCity = countryCodes.find((option) => option.value === value);
      SetCodes({
        ...Codes,
        mobileCode: selectedCurrentCity
      });
    } else if (name == "homeCode") {
      const selectedcode = countryCodes.find((option) => option.value === value);
      SetCodes({
        ...Codes,
        homeCode: selectedcode
      })
    }
    else if (name == "mobileNumber") {
      
      if (!validatePhoneNumber(value)) {
        
        setPhoneNumberError((prev) => ({
          label:"Enter Valid Phone Number",
          status: true
        }))
      }else
      {
        setPhoneNumberError((prev) => ({
          label:"",
          status: false
        }))
        updateFormData({
          contact: { ...formData.contact, [name]: value }
        });
      }
    }


    updateFormData({
      contact: { ...formData.contact, [name]: value }
    });
  }

  const Check = () => {

    dispatch(updateGeneralInfo({

      mobileNumber: contact.mobileCode + contact.mobileNumber,
      homeMobileNumber: contact.homeCode + contact.homeMobileNumber

    }))

  }

  const [Uemail, setUemail] = useState();

  useEffect(() => {
    setUemail(getCookie('email'))
  }, [])

  return (
    <>
      <div className='pt-[33px] gap-y-[30px] flex flex-col'>
        <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
          <div>
            <h1 onClick={Check} className='text-[#000]' style={Text1}>Contact Details</h1>
          </div>
          <div>
            <h1 onClick={() => HandleTabclick(activeTab + 1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
          </div>
        </div>

        <div>
          <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
            <div className='h-[1px] w-[234px] bg-[#17C270]'></div>
          </div>
        </div>
      </div>

      <div className=' 2xl:w-[664px] xl:w-[664px] md:w-full  lg:w-full 2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
        <div className="w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full">
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Mobile Number</h1>
          <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[29px]">
            <div className="">
              <DynamicSelect
                defaultValue={Codes.mobileCode}
                styles={customStyle2}
                options={countryCodes}
                onChange={(selectedOption) => handleInputChange({ target: { name: "mobileCode", value: selectedOption?.value } })}
              />
            </div>
            <div className="">
              <input
                placeholder="Number"
                className={`hover:border-[black] focus:outline-none focus:border-black border-${PhoneNumberError.status ? "[red]" : "[#e6e6e6]"} text-[#000] border-[1px] pl-[18px] rounded-[8px] w-full  lg:w-[481px] h-[50px]`}
                label="Number"
                name="mobileNumber"
                type="number"
                onChange={handleInputChange}
                value={formData?.contact.mobileNumber}
                maxLength={10}


              />
             
            </div>
          </div>
          <span className="text-[red] text-[10px] relative left-[190px]">{PhoneNumberError.label}</span>
        </div>

        <div className="w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full">
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Home Number</h1>
          <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[29px]">
            <div className="">
              <DynamicSelect
                styles={customStyle2}
                defaultValue={Codes.homeCode}
                options={countryCodes}
                onChange={(selectedOption) => handleInputChange({ target: { name: "homeCode", value: selectedOption?.value } })}
              />
            </div>
            <div className="">
              <input
                placeholder="Number"
                className="hover:border-[black] focus:outline-none focus:border-black border-[#e6e6e6] text-[#000] border-[1px] pl-[18px] rounded-[8px] w-full  lg:w-[481px] h-[50px]"
                label="Number"
                name="homeMobileNumber"
                onChange={handleInputChange}
                value={formData?.contact?.homeMobileNumber}
              />
            </div>
          </div>
        </div>

        <div className='w-full 2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full'>
          <h1 className='text-[#000] pb-[10px]' style={Text2}>Enter Email Address</h1>
          <input type='text' value={Uemail} placeholder='Email Address' className='hover:border-[black] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[100%] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
        </div>

      </div>
    </>
  );
};


export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(ContactSection);
