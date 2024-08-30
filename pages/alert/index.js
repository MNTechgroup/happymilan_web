import React, { useEffect, useState } from 'react';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { LabelStyle2 } from '../../utils/options/styles/SelectBoxStyle';
import dynamic from 'next/dynamic';
import { updateFormData } from '../../store/actions/registerUser';
import { connect } from 'react-redux';

const MultiSelect = ({ formData, updateFormData }) => {

    const options = [
        { value: 'reading', label: 'Reading' },
        { value: 'traveling', label: 'Traveling' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'gaming', label: 'Gaming' },
        { value: 'photography', label: 'Photography' },
        { value: 'art', label: 'Art' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'dancing', label: 'Dancing' },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [datastore, setdatastore] = useState([])

    useEffect(() => {
        console.log(selectedOptions)
        const selectedValues = selectedOptions.map(option => option.value);
        setdatastore(selectedValues)
        // hobby: {
        //     hobbyval: []
        updateFormData({
            hobby: {
                ...formData.hobby,
                hobbyval: selectedValues,
            },
        });

    }, [selectedOptions, setSelectedOptions])

    // Handle selection
    const handleSelectChange = (selected) => {
        console.log("🚀 ~ handleSelectChange ~ selected:", selected)

        setSelectedOptions(selected || []);
    };

    // Handle removal of selected option
    const handleRemoveOption = (optionToRemove) => {
        setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
    };

    // Filter options to not show already selected options
    const filteredOptions = options.filter(option =>
        !selectedOptions.some(selectedOption => selectedOption.value === option.value)
    );

    return (
        <>
            <div className="relative">
                <DynamicSelect
                    options={filteredOptions}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    placeholder="Select your options"
                    components={{ MultiValueContainer }}
                    styles={LabelStyle2}
                    closeMenuOnSelect={false}
                />
                <div className="selected-options mt-2 flex flex-wrap">
                    {selectedOptions.map(option => (
                        <div
                            key={option.value}
                            className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 mr-2 mb-2 cursor-pointer"
                            onClick={() => handleRemoveOption(option)}
                        >
                            {option.label} <span className="ml-2">&times;</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// Custom MultiValueContainer to hide selected items in the input
const MultiValueContainer = ({ children, ...props }) => {
    return null; // Hide selected options in the input itself
};

// export default MultiSelect;
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(MultiSelect);

