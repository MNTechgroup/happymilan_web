import dynamic from 'next/dynamic';
import React from 'react'
import { GenderOption, MaritalOptions } from '../../../utils/options/Register/GenralSectionOptions';
import { cityOptions, CountryOptions, dietOptions, incomeOptions, statesOptions } from '../../../utils/options/Register/PartnerPreferenceOptions';
import { LabelStyle } from '../../../utils/options/styles/SelectBoxStyle';
import { updateFormData, updatePartnerPref } from '../../../store/actions/registerUser';
import { connect, useDispatch } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function PartnerPrefSec({ formData, updateFormData }) {

    const inputText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const dispatch = useDispatch();


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
            <div className='pb-[100px]'>
                <div id='Partner-Pref-Scroll' className='mt-[90px]  w-full h-full overflow-x-hidden overflow-y-scroll'>
                    <div className='pr-[10px]'>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between'>
                                <div className='w-[300px] space-y-[10px]'>
                                    <p style={TitleText}>Select Age Range</p>
                                    <ul className='flex justify-between'>
                                        <li>
                                            <input type='number' name='agemin' onChange={handleInputChange} placeholder='min' style={inputText} id='num-input' className='w-[113px]  outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                        </li>
                                        <li>
                                            <div className='text-[#000]'>-</div>
                                        </li>
                                        <li>
                                            <input type='number' name='agemax' onChange={handleInputChange} placeholder='max' style={inputText} id='num-input' className='w-[113px]  outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-[300px] space-y-[10px]'>
                                    <p style={TitleText}>Select Prefer Heights</p>
                                    <ul className='flex justify-between'>
                                        <li>
                                            <input type='number' name='heightmin' onChange={handleInputChange} placeholder='min' style={inputText} id='num-input' className='w-[113px]  outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                        </li>
                                        <li>
                                            <div className='text-[#000]'>-</div>
                                        </li>
                                        <li>
                                            <input type='number' name='heightmax' onChange={handleInputChange} placeholder='max' style={inputText} id='num-input' className='w-[113px]  outline-none border-b-[1px] border-b-[#C0C0C0] focus:border-b-[#000] ' />
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <DynamicSelect
                                    className='w-[630px]'
                                    placeholder="Select Prefer Countries"
                                    styles={LabelStyle}
                                    options={CountryOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption } })}
                                    isSearchable={true}
                                    isMulti
                                />
                            </li>
                            <li>
                                <DynamicSelect
                                    className='w-[630px]'
                                    placeholder="Select Prefer States"
                                    styles={LabelStyle}
                                    options={statesOptions}
                                    isSearchable={true}
                                    isMulti
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption } })}
                                />
                            </li>
                            <li>
                                <DynamicSelect
                                    className='w-[630px]'
                                    placeholder="Select Prefer City"
                                    styles={LabelStyle}
                                    options={cityOptions}
                                    isSearchable={true}
                                    isMulti
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption } })}
                                />
                            </li>
                            <li className='flex justify-between'>

                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Select Prefer income"
                                    styles={LabelStyle}
                                    options={incomeOptions}
                                    isSearchable={true}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "income", value: selectedOption?.value } })}
                                />

                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Select Prefer Diet"
                                    styles={LabelStyle}
                                    options={dietOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "diet", value: selectedOption } })}
                                    isSearchable={true}
                                    isMulti
                                />

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
// export default PartnerPrefSec
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(PartnerPrefSec);
