import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateHobbies, updatehobbiesData } from '../../../../../../store/actions/registerUser';
import { fetchMyhoobies, updateMyHobbies } from '../../../../../../store/reducers/MyProfile';
import SaveButton from '../../../../../../components/common/Buttons/SaveButton';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function HobbiesTab() {



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


    const FitnessDataoption = [
        { value: "Running", label: "Running" },
        { value: "Cycling", label: "Cycling" },
        { value: "Yoga", label: "Yoga" },
        { value: "Walking", label: "Walking" },
        { value: "Working Out", label: "Working Out" },
        { value: "Trekking", label: "Trekking" },
        { value: "Aerobics/Zumba", label: "Aerobics/Zumba" },
        { value: "Swimming", label: "Swimming" },

    ]
    const creativeOption = [
        { value: "Writing", label: "Writing" },
        { value: "PlayInstrument", label: "Play Instrument" },
        { value: "Poetry", label: "Poetry" }
    ]



    const FunOptions =
        [
            { value: "Movie", label: "Movie" },
            { value: "Sports", label: "Sports" },
            { value: "Biking", label: "Biking" },
            { value: "Music", label: "Music" },
            { value: "SocialMedia", label: "Social Media" }
        ]



    // const { data, status, totalLikes } = useSelector((state) => state.myprofile);

    const [TheData, SetData] = useState()

    const { status, partnerpref } = useSelector((state) => state.form?.formData)
    const { loading, data } = useSelector((state) => state.myprofile.profileData?.HobbiesData)
    const { upload, allhobbies } = useSelector((state) => state.form?.formData)

    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(!showForm);

        if (data?.[0]) {
            const Creative = creativeOption.filter(option => data[0]?.values.includes(option.value));
            SetData(Creative)
        }
    };

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        lineHeight: "normal",
    };



    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            height: "50px",
            borderRadius: "8px", // Add padding on the right side
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };

    const dispatch = useDispatch();





    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        const values = value.map(item => item.value);
        dispatch(updateHobbies(name, values));

    }

    const SubmitChanges = () => {
        dispatch(updateMyHobbies(allhobbies))
        setShowForm(false)
    }

    useEffect(() => {
        dispatch(fetchMyhoobies())
    }, [])

    return (
        <>
            <div className={`w-full ${showForm ? "h-[450px]" : "h-[369px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>{showForm ? "Modify Hobbies and Interests" : "Hobbies and Interests"}</h1></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image loading='lazy' alt='editIcon' width={20} height={20} onClick={handleEditClick} src={'/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={handleEditClick} src={'/assests/profile/cross-edit-icon.svg'} />

                                }
                            </div>
                        </li>
                    </ul>
                </div>
                {showForm ?
                    <>
                        <div className="space-y-[20px] flex flex-col items-center justify-center">

                            <div className='w-[90%]'>
                                <h1 className="font-semibold" style={Text1}>Creative</h1>
                                <div className='w-full mt-[10px]'>
                                    <DynamicSelect

                                        options={creativeOption}
                                        placeholder="Select.."
                                        styles={customStyle}
                                        value={TheData}
                                        onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption } })}
                                        isSearchable={true}
                                        isMulti />
                                </div>
                            </div>

                            <div className='w-[90%]'>
                                <h1 className="font-semibold" style={Text1}>Fun</h1>
                                <div className='w-full mt-[10px]'>
                                    <DynamicSelect
                                        options={FunOptions}
                                        placeholder="Select.."
                                        styles={customStyle}
                                        onChange={(selectedOption) => handleInputChange({ target: { name: "fun", value: selectedOption } })}
                                        isSearchable={true}
                                        isMulti />
                                </div>
                            </div>

                            <div className='w-[90%]'>
                                <h1 className="font-semibold" style={Text1}>Fitness</h1>
                                <div className='w-full mt-[10px]'>
                                    <DynamicSelect
                                        // defaultValue={}
                                        options={FitnessDataoption}
                                        placeholder="Select.."
                                        styles={customStyle}
                                        onChange={(selectedOption) => handleInputChange({ target: { name: "fitness", value: selectedOption } })}
                                        isSearchable={true}
                                        isMulti />

                                </div>
                            </div>
                            <div className='w-[90%] flex justify-end pb-[10px] mt-[10px]'>

                                <SaveButton onClick={SubmitChanges}>Save</SaveButton>

                            </div>
                        </div>
                    </>
                    : <>
                        <div className='flex justify-center '>
                            <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                {data?.map((res) => {
                                    return (
                                        <>
                                            <div>
                                                <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>{res?.category}</p>
                                                {res?.values.map((val) => {
                                                    return (
                                                        <>
                                                            <span style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{val} , </span>

                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <br />

                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default HobbiesTab