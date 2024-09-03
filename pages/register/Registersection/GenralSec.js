import React, { useState } from 'react'
import { CasteOptions, GenderOption, MaritalOptions, motherTongueOption, religionOptions } from '../../../utils/options/Register/GenralSectionOptions'
import dynamic from 'next/dynamic';
import { LabelStyle } from '../../../utils/options/styles/SelectBoxStyle';
import { connect } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function GenralSec({ formData, updateFormData, SetActiveTab }) {

    const [CharCount, setCharCount] = useState(0)

    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name == "writeBoutYourSelf") {
            const maxChars = 150
            if (value.length <= maxChars) {
                // setuserdata(prevValue => ({ ...prevValue, [name]: value }))
                updateFormData({
                    ...formData,
                    general: {
                        ...formData.general,
                        writeBoutYourSelf: value,

                    }
                });
                setCharCount(value.length);
            }
        } else {

            updateFormData({
                ...formData,
                general: {
                    ...formData.general,
                    [name]: value,

                }
            });
        }
    }


    return (
        <>
            <div className='pb-[100px]'>
                <div className='mt-[80px] w-full h-full '>

                    <div>
                        <ul className='w-full space-y-[50px]'>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Gender" //gender
                                    styles={LabelStyle}
                                    options={GenderOption}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "gender", value: selectedOption?.value } })}
                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Marital Status" //maritalStatus
                                    styles={LabelStyle}
                                    options={MaritalOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "maritalStatus", value: selectedOption?.value } })}
                                />
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Religion" //religion
                                    styles={LabelStyle}
                                    options={religionOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "religion", value: selectedOption?.value } })}
                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Caste"
                                    styles={LabelStyle}
                                    options={CasteOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "cast", value: selectedOption?.value } })}
                                />
                            </li>
                            <li className='h-[40px]'>
                                <div className='flex justify-between'>
                                    <div style={{ width: "300px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[#AFAFAF]'>
                                            CM
                                        </span>
                                        <input type="text" id="height" name='height' onChange={handleInputChange} required />
                                        <label for="height" className="label">Height</label>
                                        <div className="underline"></div>
                                    </div>

                                    <div>
                                        <div style={{ width: "300px" }} className="the-input-container">
                                            <span className='absolute right-[10px] text-[#AFAFAF]'>
                                                KG
                                            </span>
                                            <input type="text" id="weight" name='weight' onChange={handleInputChange} required />
                                            <label for="weight" className="label">Weight</label>
                                            <div className="underline"></div>
                                        </div>
                                        {/* <div className="relative">
                                            <input
                                                id="weight"
                                                name="weight"
                                                type="text"
                                                className="w-[300px] border-b border-[#C0C0C0] py-1 focus:border-b-2 focus:border-[#000] transition-colors focus:outline-none peer bg-inherit"
                                                placeholder=" "
                                                onChange={handleInputChange}

                                            />
                                            <span className='absolute right-[10px] text-[#AFAFAF]'>
                                                KG
                                            </span>
                                            <label
                                                for="weight"
                                                className="text-[#C0C0C0] absolute left-0 top-1 cursor-text transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#000] text-xs -top-4"
                                            >
                                                Weight
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <div style={{ width: "647px" }} className="the-input-container">
                                        <span className='absolute right-[10px] text-[14px] text-[#AFAFAF]'>
                                            {CharCount}&nbsp;/&nbsp;150
                                        </span>
                                        <input type="text" id="writeBoutYourSelf" name='writeBoutYourSelf' onChange={handleInputChange} value={formData?.general.writeBoutYourSelf} required />
                                        <label for="writeBoutYourSelf" className="label"> About Your Self</label>
                                        <div className="underline"></div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default GenralSec
export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(GenralSec);
