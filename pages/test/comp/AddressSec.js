import React from 'react'
import { motherTongueOption } from '../../../utils/options/Register/GenralSectionOptions'
import dynamic from 'next/dynamic';
import { LabelStyle } from '../../../utils/options/styles/SelectBoxStyle';
import { updateFormData } from '../../../store/actions/registerUser';
import { connect } from 'react-redux';
import { countryoflivingOptions, currentcityOption } from '../../../utils/options/Register/AddressSectionOptions';
import { StateOptions } from '../../../utils/options/Register/EducationSectionOptions';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function AddressSec({ formData, updateFormData, SetActiveTab }) {

    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const HelpText = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    // currentResidenceAddress: "",
    // currentCity: "",
    // currentCountry: "",

    const HandleChange = (e) => {
        const { name, value } = e.target;

        updateFormData({
            ...formData,
            address: {
                ...formData.address,
                [name]: value,

            }
        });
    }
    return (
        <>

            <div className='pb-[100px]'>
                <div className='mt-[90px] w-full h-full '>
                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li>
                                <div className="">
                                    <div style={{ width: "647px" }} className="the-input-container">
                                        <input type="text" id="currentResidenceAddress" name='currentResidenceAddress' onChange={HandleChange} required />
                                        <label for="currentResidenceAddress" className="label">Current Residing Address</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Residing Country"
                                    styles={LabelStyle}
                                    options={countryoflivingOptions}
                                    onChange={(selectedOption) => HandleChange({ target: { name: "currentCountry", value: selectedOption?.value } })}

                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Current State"
                                    styles={LabelStyle}
                                    options={StateOptions}
                                    onChange={(selectedOption) => HandleChange({ target: { name: "currentState", value: selectedOption?.value } })}

                                />
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Residing City"
                                    styles={LabelStyle}
                                    options={currentcityOption}
                                    onChange={(selectedOption) => HandleChange({ target: { name: "currentCity", value: selectedOption?.value } })}

                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default AddressSec
export default connect((state) => ({ formData: state.form.formData }), {
    updateFormData,
})(AddressSec);