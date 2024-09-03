import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { motherTongueOption, profileOptions } from '../../../utils/options/Register/GenralSectionOptions';
import dynamic from 'next/dynamic';
import { updateFormData } from '../../../store/actions/registerUser';
import { connect, useDispatch } from 'react-redux';
import { getCookie } from 'cookies-next';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ProfileSelection({ formData, updateFormData, SetActiveTab }) {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }


    // function splitName(fullName) {
    //     const nameParts = fullName?.trim()?.split(" ") || [];
    //     const firstName = nameParts[0] || "";
    //     const lastName = nameParts.slice(1).join(" ") || ""; // Handles cases with middle or multiple last names
    //     return { firstName, lastName };
    // }

    // const [Credentials, setCredentials] = useState({
    //     firstName: '',
    //     lastName: ''
    // })

    // useEffect(() => {
    //     const { firstName, lastName } = splitName(getCookie("uname"));
    //     // You can now use firstName and lastName as needed
    //     setCredentials({
    //         firstName: firstName,
    //         lastName: lastName
    //     });

    //     updateFormData(prevFormData => ({
    //         ...prevFormData,
    //         general: {
    //             ...prevFormData.general,
    //             "firstName": "Firstname",
    //             "lastName": "lastname"
    //         }
    //     }));


    // }, []);

    // const [Validate, SetValidate] = useState({
    //     creatingProfileFor: "",
    //     firstName: "",
    //     lastName: ""
    // })



    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;



    //     setCredentials((prev) => {
    //         return { ...prev, [name]: value }
    //     })

    //     updateFormData({
    //         ...formData,
    //         general: {
    //             ...formData.general,
    //             firstName: Credentials?.firstName,
    //             lastName: Credentials?.lastName,
    //             [name]: value,

    //         }
    //     });



    //     SetValidate((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }
    // const validateFields = () => {
    //     // Check if all fields in the Validate object are filled
    //     return Object.values(Validate).every(value => value.trim() !== '');
    // };

    // const HandleSubmit = () => {

    //     if (validateFields()) {
    //         SetActiveTab(1)
    //     } else {
    //         alert("Please fill out all required fields.");
    //     }
    // }

    const dispatch = useDispatch();


    function splitName(fullName) {
        const nameParts = fullName?.trim()?.split(" ") || [];
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || ""; // Handles cases with middle or multiple last names
        return { firstName, lastName };
    }

    // Initializing local state for credentials
    const [Credentials, setCredentials] = useState({
        firstName: '',
        lastName: ''
    });

    // Using useEffect to split the name from the cookie and update credentials and Redux state
    useEffect(() => {
        const { firstName, lastName } = splitName(getCookie("uname"));
        setCredentials({
            firstName,
            lastName
        });

        // Update the Redux state immediately after setting local state

        updateFormData({
            ...formData,
            general: {
                ...formData.general,
                firstName: firstName,
                lastName: lastName
            }
        });


    }, []);

    const [Validate, SetValidate] = useState({
        creatingProfileFor: "",
        // firstName: formData?.general?.firstName,
        // lastName: formData?.general?.lastName
    });

    // Handling input changes and updating both local state and Redux state
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setCredentials((prev) => ({
            ...prev,
            [name]: value
        }));

        updateFormData({
            ...formData,
            general: {
                ...formData.general,
                [name]: value,
            }
        });

        SetValidate((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Validating fields before submission
    const validateFields = () => {
        return Object.values(Validate).every(value => value.trim() !== '');
    };

    // Handling form submission and checking validation
    const HandleSubmit = () => {
        if (validateFields()) {
            SetActiveTab(1);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <>
            <div>
                <div className='flex flex-col items-center justify-evenly w-full h-[100vh]'>
                    <div>
                        <h1 style={Title}>I’m creating profile for?</h1>
                    </div>

                    <div className='flex flex-col items-center space-y-[98px]'>
                        <div className=''>
                            <DynamicSelect
                                className={`h-[50px] w-[500px]`}
                                placeholder="Profile Creating for"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        paddingRight: '0px',
                                        paddingLeft: "0px", // Ensure no padding on the left
                                        width: "500px",
                                        height: "50px",
                                        borderRadius: "0px", // Removes the border-radius
                                        borderColor: "black",
                                        borderTop: "none", // No top border
                                        borderLeft: "none", // No left border
                                        borderRight: "none", // No right border
                                        backgroundColor: "transparent", // No background
                                        boxShadow: 'none', // No box-shadow
                                        borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
                                        transition: "border-color 0.3s ease-in-out", // Animation for border color
                                        '&:hover': {
                                            borderBottomColor: state.isFocused ? "black" : "#C0C0C0",
                                        },
                                    }),
                                    valueContainer: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px", // Ensure no padding in the value container
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px",
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        paddingLeft: "0px",
                                    }),
                                    indicatorSeparator: () => ({
                                        display: 'none',
                                    }),
                                }}
                                options={profileOptions}
                                onChange={(selectedOption) => handleInputChange({ target: { name: "creatingProfileFor", value: selectedOption?.value } })}

                            />

                        </div>

                        <ul className='h-[30px] flex space-x-[37px]'>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input value={formData?.general?.firstName} type="text" id="firstName" name='firstName' onChange={handleInputChange} required />
                                    <label for="firstName" className="label">First Name</label>
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div style={{ width: "232px" }} className="the-input-container">
                                    <input value={formData?.general?.lastName} type="text" id="lastName" name='lastName' onChange={handleInputChange} required />
                                    <label for="lastName" className="label">Last Name</label>
                                    <div className="underline"></div>
                                </div>


                            </li>
                        </ul>
                        <div>
                            <button onClick={HandleSubmit} className='w-[153px] h-[44px] bg-[#000] rounded-[22px] text-[#FFF] text-center'>Start Now
                                <Image width={24} height={24} alt='next' src={"/assests/login/Arrow-reg.svg"} className='relative left-[8px] inline' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// export default ProfileSelection

export default connect((state) => ({ formData: state.form?.formData }), { updateFormData })(ProfileSelection);
