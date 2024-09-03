import React from 'react'
import dynamic from 'next/dynamic';
import { LabelStyle } from '../../../utils/options/styles/SelectBoxStyle';
import { countryoflivingOptions, currentcityOption } from '../../../utils/options/Register/ProfessionalSectionOptions';
import { updateFormData } from '../../../store/actions/registerUser';
import { connect } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function ProffSec({ formData, updateFormData, SetActiveTab }) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateFormData({
            professional: { ...formData.professional, [name]: value }
        });
    }

    return (
        <>

            <div className='pb-[100px]'>
                <div className='mt-[90px] w-full h-full '>
                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between'>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="jobTitle" name='jobTitle' onChange={handleInputChange} required />
                                        <label for="jobTitle" className="label"> Current Designation</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                                <div className="">

                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="jobType" name='jobType' onChange={handleInputChange} required />
                                        <label for="jobType" className="label">Job Type</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between'>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="companyName" name='companyName' onChange={handleInputChange} required />
                                        <label for="companyName" className="label">Company Name</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                                <div className="">
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <input type="text" id="currentSalary" name='currentSalary' onChange={handleInputChange} required />
                                        <label for="currentSalary" className="label">Annual Salary</label>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Work Country"
                                    styles={LabelStyle}
                                    options={countryoflivingOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "workCountry", value: selectedOption?.value } })}
                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Work City"
                                    styles={LabelStyle}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "workCity", value: selectedOption?.value } })}
                                    options={currentcityOption} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default ProffSec

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(ProffSec);
