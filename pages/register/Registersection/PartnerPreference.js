import React, { useMemo } from 'react'
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData, updatePartnerPref } from "../../../store/actions/registerUser";
import { connect, useDispatch } from "react-redux"
import { HobbycustomStyle, customStyle3 } from '../../../utils/options/styles/SelectBoxStyle';
import { AgeoptionsFun, FunOptions, cityOptions, creativeOption, dietOptions, heightoptionFun, incomeOptions, statesOptions } from '../../../utils/options/Register/PartnerPreferenceOptions';
import { CountryOptions } from '../../../utils/options/Register/EducationSectionOptions';


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

    const Ageoptions = useMemo(() => AgeoptionsFun(1, 100), []);
    const heightoption = useMemo(() => heightoptionFun(1, 100), []);

    const dispatch = useDispatch()

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
        else if (name == "income") {
            updateFormData({
                partnerpref: { ...formData.partnerpref, [name]: value }
            });
        }
        else {
            const values = value?.map(item => item.value);
            dispatch(updatePartnerPref(name, values));
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
                        <div className='h-[1px] w-[95%] bg-[#17C270]'></div>
                    </div>
                </div>
            </div>
            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>
                <div>
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Choose Age</h1>
                    <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                        <div className="flex items-center space-x-[10px]">
                            <DynamicSelect styles={customStyle3} options={Ageoptions}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "agemin", value: selectedOption?.value } })}

                            />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle3} options={Ageoptions}
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
                                styles={customStyle3}
                                options={heightoption}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "heightmin", value: selectedOption?.value } })}
                            />
                            <h1 style={doItlater}>To</h1>
                            <DynamicSelect styles={customStyle3} options={heightoption}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "heightmax", value: selectedOption?.value } })}
                            />

                        </div>


                    </div>
                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose Country</h1>
                    <DynamicSelect options={CountryOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose State</h1>
                    <DynamicSelect options={statesOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Choose City</h1>
                    <DynamicSelect options={cityOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Income</h1>
                    <DynamicSelect
                        options={incomeOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "income", value: selectedOption?.value } })}
                        isSearchable={true}
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Creative</h1>
                    <DynamicSelect
                        options={creativeOption}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Fun</h1>
                    <DynamicSelect
                        options={FunOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "fun", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>
                <div className='w-full 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>

                    <h1 style={Text2} className="pb-[10px]">Prefer Diet</h1>
                    <DynamicSelect
                        options={dietOptions}
                        placeholder="Select.."
                        styles={HobbycustomStyle}
                        onChange={(selectedOption) => handleInputChange({ target: { name: "diet", value: selectedOption } })}
                        isSearchable={true}
                        isMulti
                    />

                </div>

            </div>
        </>
    )
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(PartnerPreference);