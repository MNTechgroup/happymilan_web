import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { Checkbox } from '@material-tailwind/react';

const AddressTab = () => {
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



    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];
    return (
        <>
            <div className={`w-full ${showForm ? "h-[450px]" : "2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]"} border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='text-[16px]'>{showForm ? "Modify General Information" : "Address Details"}</h1></li>
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
                        <div className=' flex flex-col justify-center items-center'>

                            <div className='w-[90%]'>
                                <div className=''>
                                    <h1 style={labelText} className="pb-[10px]">Current Residing Address</h1>
                                    <textarea type='text' className='pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]' />

                                </div>
                            </div>
                            <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                <div>
                                    <h1 className='text-[#000] pb-[10px]' style={labelText}>Current City</h1>

                                    <DynamicSelect
                                        className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                        styles={customStyles}
                                        options={options}
                                    />
                                </div>
                                <div>
                                    <h1 className='text-[#000] pb-[10px]' style={labelText}>Country of Living</h1>

                                    <DynamicSelect
                                        className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                        styles={customStyles}
                                        options={options}
                                    />
                                </div>
                            </div>

                            <div className='w-[90%]  pt-[20px] space-x-[20px]'>
                                <div>
                                    <h1 className='text-[#000] pb-[10px]' style={labelText}>Same as current address</h1>
                                    <div className=' flex justify-between'>
                                        <div>
                                            <button className='w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]  rounded-[10px] h-[50px] bg-[#F8F8F8]' >Add Your Origin</button>
                                        </div>
                                        <div className='relative left-[-15px] flex items-center'>
                                            <div className='ml-[-10px]'><Checkbox className='border-none  rounded-[4px] bg-[#F3F3F3]' /></div>
                                            <div><h1>Same as current address</h1></div>

                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end pb-[10px] mt-[10px]'>

                                    <button id='grad-btn' className='rounded-[10px] text-[white] w-[80px] h-[40px]' >Save</button>

                                </div>
                            </div>




                        </div>

                    </>
                    :
                    <>
                        <div className='flex justify-center '>
                            <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]">
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Residing Address</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>01-02, Delhi Street, Delhi, India</h1>
                                </div>
                                <div className=' '>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[14px]'></p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'></h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current City</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Delhi</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Residing Country</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Permanent Address</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>01-02, Delhi Street, Delhi, India</h1>
                                </div>
                            </div>
                        </div>

                    </>}

            </div>
        </>
    )
}

export  default AddressTab;