"use client";

import { Checkbox } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { updateFormData } from "../../../store/actions/registerUser";
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });
import React from "react";
import { connect } from "react-redux";

//Style for Select Box
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: "10px",
    paddingLeft: "8px",
    width: "300px",
    height: "50px",
    borderRadius: "8px", // Add padding on the right side
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? "black" : provided.borderColor,
    "&:hover": {
      borderColor: "black",
    },
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    paddingRight: "20px",
    // Hide the vertical line behind the arrow
  }),
};

const AddressSection = ({
  formData,
  updateFormData,
  HandleTabclick,
  activeTab,
}) => {
  const currentcityOption = [
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "surat", label: "Surat" },
    { value: "toronto", label: "Toronto" },
    // Add more cities as needed
  ];

  // Countries
  const countryoflivingOptions = [
    { value: "india", label: "India" },
    { value: "us", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "mexico", label: "Mexico" },
    // Add more countries as needed
  ];
  const Text1 = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Text2 = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Btntextstyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const doItlater = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    updateFormData({
      address: { ...formData.address, [name]: value },
    });
  };

  return (
    <>
      <div className="pt-[33px] gap-y-[30px] flex flex-col">
        <div className="flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full">
          <div>
            <h1 className="text-[#000]" style={Text1}>
              Address Details
            </h1>
          </div>
          <div>
            <h1
              onClick={() => HandleTabclick(activeTab + 1)}
              className="cursor-pointer text-[#0F52BA]"
              style={doItlater}
            >
              I{"’"}ll do it later
            </h1>
          </div>
        </div>
        <div>
          <div className="2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]">
            <div className="h-[1px] w-[161px] bg-[#17C270]"></div>
          </div>
        </div>
      </div>

      <div className="2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]">
        <div className="2xl:w-[665px] xl:w-[665px] md:w-full lg:w-full">
          <h1 className="text-[#000] pb-[10px]" style={Text2}>
            Current Residing Address
          </h1>
          <input
            type="text"
            placeholder="Residing Address"
            value={formData?.address.currentResidenceAddress}
            name="currentResidenceAddress"
            onChange={handleInputChange}
            className="hover:border-[black] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[100%] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] "
          />
        </div>

        <div className="">
          <h1 className="text-[#000] pb-[10px]" style={Text2}>
            Current City
          </h1>

          <div class="flex items-center space-x-2">
            <DynamicSelect
              className="h-[50px] w-[300px] flex justify-end"
              styles={customStyles}
              options={currentcityOption}
              defaultValue={formData?.address.currentCity}
              onChange={(selectedOption) =>
                handleInputChange({
                  target: { name: "currentCity", value: selectedOption?.value },
                })
              }
            />
          </div>
        </div>

        <div className="">
          <h1 className="text-[#000] pb-[10px]" style={Text2}>
            Current Residing Country
          </h1>

          <div class="flex items-center space-x-2">
            <DynamicSelect
              className="h-[50px] w-[300px] flex justify-end"
              styles={customStyles}
              options={countryoflivingOptions}
              defaultValue={formData?.address.currentCountry}
              onChange={(selectedOption) =>
                handleInputChange({
                  target: {
                    name: "currentCountry",
                    value: selectedOption?.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="">
          <h1 className="text-[#000] pb-[10px]" style={Text2}>
            Same as current address
          </h1>

          <button
            style={Btntextstyle}
            className="w-[300px] h-[50px] bg-[#F8F8F8] rounded-[10px]"
          >
            Add Your Origin
          </button>
        </div>
        <div className="">
          <h1 className="text-[#000] pb-[10px] h-[31px]" style={Text2}></h1>
          <div className="w-[300px] flex justify-start items-center">
            <div className="ml-[-10px]">
              <Checkbox className="border-none  rounded-[4px] bg-[#F3F3F3]" />
            </div>
            <div>
              <h1>Same as current address</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({ formData: state.form.formData }), {
  updateFormData,
})(AddressSection);
