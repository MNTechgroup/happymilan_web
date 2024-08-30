import React from 'react'
import { motherTongueOption } from '../../../utils/options/Register/GenralSectionOptions'
import dynamic from 'next/dynamic';
import { LabelStyle } from '../../../utils/options/styles/SelectBoxStyle';
import { connect } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser';
import { CityOptions, CollageOptions, CountryOptions, DegreeOption, StateOptions } from '../../../utils/options/Register/EducationSectionOptions';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function EducationSec({ formData, updateFormData, }) {

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        updateFormData({
            education: { ...formData.education, [name]: value }
        });
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
                                    placeholder="Degree"
                                    styles={LabelStyle}
                                    options={DegreeOption}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "degree", value: selectedOption?.value } })}
                                />
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Collage / University"
                                    styles={LabelStyle}
                                    options={CollageOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "collage", value: selectedOption?.value } })}
                                />
                            </li>
                            <li className='flex justify-between'>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="Country"
                                    styles={LabelStyle}
                                    options={CountryOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption?.value } })}
                                />

                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="State"
                                    styles={LabelStyle}
                                    options={StateOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption?.value } })}
                                />
                            </li>
                            <li className=''>
                                <DynamicSelect
                                    className='w-[300px]'
                                    placeholder="City"
                                    styles={LabelStyle}
                                    options={CityOptions}
                                    onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption?.value } })}
                                />

                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default EducationSec
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(EducationSec);
