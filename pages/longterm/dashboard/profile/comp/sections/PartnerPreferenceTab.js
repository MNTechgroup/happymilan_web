import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchPartnerPrefdata, updateMyPartnerPrefdata } from '../../../../../../store/reducers/MyProfile';
import { updateFormData, updatePartnerPref } from '../../../../../../store/actions/registerUser';
import SaveButton from '../../../../../../components/common/Buttons/SaveButton';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

const PartnerPreferenceTab = ({ partnerPrefID, formData, updateFormData }) => {

    const disptach = useDispatch();
    useEffect(() => {
        // disptach(getPartnerpreferencedata(partnerPrefID))
        disptach(fetchPartnerPrefdata())
    }, [])


    const { loading, data } = useSelector((state) => state.myprofile.profileData.PartnerPrefData)



    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }

    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(!showForm);
    };

    const labelText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const options = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },
        { value: 13, label: '13' },
        { value: 14, label: '14' },
        { value: 15, label: '15' },
        { value: 16, label: '16' },
        { value: 17, label: '17' },
        { value: 18, label: '18' },
        { value: 19, label: '19' },
        { value: 20, label: '20' }
    ];

    const Country = [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "china", label: "China" },
        { value: "myanmar", label: "Myanmar" },
        { value: "nepal", label: "Nepal" },
        { value: "sri-lanka", label: "Sri-lanka" },
        { value: "pakistan", label: "Pakistan" },
        { value: "afghanistan", label: "Afghanistan" },
    ];


    const states = [
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'assam', label: 'Assam' },
        { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
        { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
        { value: 'bihar', label: 'Bihar' },
        { value: 'chhattisgarh', label: 'Chhattisgarh' },
        { value: 'goa', label: 'Goa' },
        { value: 'haryana', label: 'Haryana' },
        { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
        { value: 'jharkhand', label: 'Jharkhand' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'kerala', label: 'Kerala' },
        { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'manipur', label: 'Manipur' },
        { value: 'meghalaya', label: 'Meghalaya' },
        { value: 'mizoram', label: 'Mizoram' },
        { value: 'nagaland', label: 'Nagaland' },
        { value: 'odisha', label: 'Odisha' },
        { value: 'punjab', label: 'Punjab' },
        { value: 'rajasthan', label: 'Rajasthan' },
        { value: 'sikkim', label: 'Sikkim' },
        { value: 'tamil-nadu', label: 'Tamil Nadu' },
        { value: 'telangana', label: 'Telangana' },
        { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
        { value: 'uttarakhand', label: 'Uttarakhand' },
        { value: 'west-bengal', label: 'West Bengal' },
        { value: 'alberta', label: 'Alberta' },
        { value: 'british-columbia', label: 'British Columbia' },
        { value: 'manitoba', label: 'Manitoba' },
        { value: 'new-brunswick', label: 'New Brunswick' },
        { value: 'newfound-land', label: 'Newfound Land' },
        { value: 'nova-scotia', label: 'Nova Scotia' },
        { value: 'ontario', label: 'Ontario' },
        { value: 'prince-edward-island', label: 'Prince Edward Island' },
        { value: 'quebec', label: 'Quebec' },
        { value: 'saskatchewan', label: 'Saskatchewan' },
        { value: 'alabama', label: 'Alabama' },
        { value: 'alaska', label: 'Alaska' },
        { value: 'arizona', label: 'Arizona' },
        { value: 'arkansas', label: 'Arkansas' },
        { value: 'california', label: 'California' },
        { value: 'colorado', label: 'Colorado' },
        { value: 'connecticut', label: 'Connecticut' },
        { value: 'delaware', label: 'Delaware' },
        { value: 'florida', label: 'Florida' },
        { value: 'georgia', label: 'Georgia' },
        { value: 'hawaii', label: 'Hawaii' },
        { value: 'idaho', label: 'Idaho' },
        { value: 'illinois', label: 'Illinois' }
    ];


    const city = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "toronto", label: "Toronto" },
    ];



    const incomeOptions = [
        { value: "1L-10L", label: "1 LPA to 10 LPA" },
        { value: "10L-20L", label: "10 LPA to 20 LPA" },
        { value: "20L-30L", label: "20 LPA to 30 LPA" },
        { value: "30L-40L", label: "30 LPA to 40 LPA" },
        { value: "40L-50L", label: "40 LPA to 50 LPA" },
        { value: "50L+", label: "50 LPA and above" }
    ];

    const dietOptions = [
        { value: "vegetarian", label: "Vegetarian" },
        { value: "non_vegetarian", label: "Non-Vegetarian" },
        // Add more diet options as needed
    ];

    const creativeOption = [
        { value: "writing", label: "writing" },
        { value: "painting", label: "Painting" }
    ]

    const FunOptions =
        [
            { value: "movie", label: "Movie" },
            { value: "sports", label: "Sports" },
            { value: "biking", label: "Biking" },
            { value: "music", label: "Music" },
            { value: "socialMedia", label: "Social Media" }
        ]

    const { status, partnerpref } = useSelector((state) => state.form?.formData)


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "100%",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };
    const customStyles2 = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "100px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };


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
            disptach(updatePartnerPref(name, values));
        }
    }


    const SubmitChanges = () => {
        setShowForm(false)
        disptach(updateMyPartnerPrefdata({ partnerPrefId: data?.id, UpdatedDataforPartnerPrefdata: partnerpref }))

    }


    return (
        <>
            <div className={`w-full ${showForm ? "h-[900px]" : "h-[400px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>{showForm ? "Modify Partner Preference" : "Partner Preference"}</h1></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image alt='editIcon' width={20} height={20} onClick={handleEditClick} src={'/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={handleEditClick} src={'/assests/profile/cross-edit-icon.svg'} />
                                }
                            </div>
                        </li>
                    </ul>
                </div>

                {loading == "loading" ?
                    <>
                        <div className='w-full h-full grid place-items-center'>
                            <div>
                                <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/gradient-loader.svg' />
                            </div>
                        </div>
                    </>
                    :
                    <>

                        {showForm ?
                            <>
                                <div className='flex flex-col items-center'>

                                    <div className='w-[90%] flex justify-between'>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>Choose Age</h1>
                                            <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                                                <div className="flex items-center space-x-[10px]">
                                                    <DynamicSelect styles={customStyles2} options={options}
                                                        placeholder="min"
                                                        onChange={(selectedOption) => handleInputChange({ target: { name: "agemin", value: selectedOption?.value } })}

                                                    />
                                                    <h1 style={labelText}>To</h1>
                                                    <DynamicSelect styles={customStyles2} options={options}
                                                        placeholder="max"
                                                        onChange={(selectedOption) => handleInputChange({ target: { name: "agemax", value: selectedOption?.value } })}

                                                    />

                                                </div>


                                            </div>
                                        </div>

                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>Choose Height</h1>
                                            <div className="flex flex-col md:flex-row justify-center 2xl:items-center xl:items-center lg:gap-y-0  gap-y-[10px] gap-x-[60px]">
                                                <div className="flex items-center space-x-[10px]">
                                                    <DynamicSelect
                                                        styles={customStyles2}
                                                        options={options}
                                                        placeholder="min"
                                                        onChange={(selectedOption) => handleInputChange({ target: { name: "heightmin", value: selectedOption?.value } })}
                                                    />
                                                    <h1 style={labelText}>To</h1>
                                                    <DynamicSelect styles={customStyles2} options={options}
                                                        placeholder="max"
                                                        onChange={(selectedOption) => handleInputChange({ target: { name: "heightmax", value: selectedOption?.value } })}
                                                    />

                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-[90%] h-full'>
                                        <div className='space-y-[15px] py-[15px]'>
                                            <div className=''>
                                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Choose country</h1>

                                                <DynamicSelect options={Country}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />
                                            </div>
                                            <div>
                                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Choose state</h1>

                                                <DynamicSelect options={states}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />
                                            </div>
                                            <div>
                                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Choose City</h1>

                                                <DynamicSelect options={city}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />
                                            </div>
                                            <div>
                                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Prefer Income</h1>

                                                <DynamicSelect
                                                    options={incomeOptions}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "income", value: selectedOption?.value } })}
                                                    isSearchable={true}
                                                />
                                            </div>
                                            <div>
                                                <h1 style={labelText} className="pb-[10px]">Creative</h1>
                                                <DynamicSelect
                                                    options={creativeOption}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />
                                            </div>
                                            <div>
                                                <h1 style={labelText} className="pb-[10px]">Fun</h1>
                                                <DynamicSelect
                                                    options={FunOptions}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "fun", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />
                                            </div>
                                            <div>
                                                <h1 style={labelText} className="pb-[10px]">Prefer Diet</h1>
                                                <DynamicSelect
                                                    options={dietOptions}
                                                    placeholder="Select.."
                                                    styles={customStyles}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "diet", value: selectedOption } })}
                                                    isSearchable={true}
                                                    isMulti
                                                />

                                            </div>

                                        </div>
                                    </div>
                                    <div className='w-[90%] flex justify-end pb-[10px] mt-[10px]'>

                                        <SaveButton onClick={SubmitChanges} >Save</SaveButton>

                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex justify-center '>
                                    <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                                </div>
                                <div className='grid place-items-center'>
                                    <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Age</p>
                                            <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.age?.min} - {data?.age?.max}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Height</p>
                                            <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.height?.min} to {data?.height?.max} ft</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer City State</p>
                                            <ul className='flex'>
                                                {data?.state.map((val) => {
                                                    return (
                                                        <li>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]' >{val} ,</span>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                            {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.state.map((val)=>{return })}</h1> */}

                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Country</p>
                                            {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>India, Australia,USA</h1> */}
                                            <ul className='flex'>
                                                {data?.country.map((val) => {
                                                    return (
                                                        <li>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]' >{val} ,</span>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Income</p>
                                            {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>INR 10 Lacs or above</h1> */}
                                            <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.income}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Creative</p>
                                            {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>Writing, Painting</h1> */}
                                            <ul className='flex'>
                                                {data?.creative.map((val) => {
                                                    return (
                                                        <li>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]' >{val} ,</span>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Fun</p>
                                            <ul className='flex'>
                                                {data?.fun.map((val) => {
                                                    return (
                                                        <li>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]' >{val} ,</span>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                        <div>
                                            <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Diet</p>
                                            {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>Vegetarian</h1> */}
                                            <ul className='flex'>

                                                {data?.diet.map((val) => {
                                                    return (
                                                        <li>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]' >{val} ,</span>
                                                        </li>
                                                    )
                                                })}


                                            </ul>
                                        </div>


                                    </div>
                                </div>

                            </>}
                    </>}
            </div>
        </>
    )
}

// export default PartnerPreferenceTab;
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(PartnerPreferenceTab);