import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPartnerpreferencedata } from '../../../../../store/actions/UsersAction';
import { getCookie } from 'cookies-next';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

const PartnerPreferenceTab = () => {

    const disptach = useDispatch();
    useEffect(()=>{
        const currentUser = getCookie("userid")
        disptach(getPartnerpreferencedata(currentUser))
    },[])

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


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "300px",
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



    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    return (
        <>
            <div className={`w-full ${showForm ? "h-full" : "h-[400px]"} border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='text-[16px]'>Partner Preference</h1></li>
                        <li>
                            <div className='cursor-pointer w-[37px] h-[37px] bg-[#F0F9FF] rounded-[5px] flex items-center justify-center'>
                                {!showForm ?
                                    <Image alt='editIcon' width={20} height={20} onClick={handleEditClick} src={'/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image alt='modifyIcon' width={37} height={37} onClick={handleEditClick} src={'/assests/dashboard/icon/modify-icon.svg'} />
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                {showForm ?
                    <>
                        <div className='flex flex-col items-center'>

                            <div className='w-[90%] flex justify-between'>
                                <div>
                                    <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In Country</h1>

                                    <div className='flex items-center 2xl:space-x-[20px] xl:space-x-[10px] space-x-[10px]'>
                                        <div>
                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[100px] xl:w-[95px] lg:w-[100px] flex justify-end"
                                                styles={customStyles}
                                                options={options}
                                            />
                                        </div>
                                        <div className='text-center'>
                                            <h1>To</h1>
                                        </div>
                                        <div>
                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[100px] xl:w-[95px] lg:w-[100px] flex justify-end"
                                                styles={customStyles}
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In Country</h1>

                                    <div className='flex items-center 2xl:space-x-[20px] xl:space-x-[10px] space-x-[10px]'>

                                        <div>
                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[100px] xl:w-[95px] lg:w-[100px] flex justify-end"
                                                styles={customStyles}
                                                options={options}
                                            />
                                        </div>
                                        <h1>To</h1>
                                        <div>
                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[100px] xl:w-[95px] lg:w-[100px] flex justify-end"
                                                styles={customStyles}
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[90%]'>
                                <div className='space-y-[15px] py-[15px]'>
                                    <div className=''>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px]"
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-full "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-full "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-full "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-full "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-full "
                                            styles={customStyles2}
                                            options={options}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='w-[90%] flex justify-end pb-[10px] mt-[10px]'>

                                <button id='grad-btn' className='rounded-[10px] text-[white] w-[80px] h-[40px]' >Save</button>

                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='flex justify-center '>
                            <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Age</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>24 - 28</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Height</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>4.5 to 5.6 ft</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer City State</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Gujarat, Delhi,Mumbai</h1>

                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Country</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India, Australia,USA</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Income</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>INR 10 Lacs or above</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Creative</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Writing, Painting</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Fun</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Watching Movie</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Diet</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Vegetarian</h1>
                                </div>


                            </div>
                        </div>

                    </>}

            </div>
        </>
    )
}

export default PartnerPreferenceTab;