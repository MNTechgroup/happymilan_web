import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SaveButton from '../../../../../../components/common/Buttons/SaveButton';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });



const ContactTab = ({ data }) => {


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

    const [formdata, setformdata] = useState({
        email: data?.email && data.email,
    })

    const [ShowPhoneNumber, SetShowPhoneNumber] = useState(null)
    const [showMobileNumber, SetShowMobileNumber] = useState(null)

    let phoneNumber;
    let mobileNumber;


    useEffect(() => {
        if (data?.mobileNumber) {
            phoneNumber = data?.mobileNumber.toString();

            // Insert a space after the country code (e.g., "91")
            phoneNumber = phoneNumber.replace(/^(\d{2})/, '$1 ');

            SetShowPhoneNumber(phoneNumber)
        } else {
            SetShowPhoneNumber(null)
        }

        if (data?.mobileNumber) {
            mobileNumber = data?.mobileNumber.toString();

            // Insert a space after the country code (e.g., "91")
            mobileNumber = mobileNumber.replace(/^(\d{2})/, '$1 ');
            SetShowMobileNumber(mobileNumber)
        } else {
            SetShowMobileNumber(null)
        }



    }, [])

    return (
        <>
            <div className={`w-full h-[270px] lg:h-${showForm ? "[450px]" : "[369px]"}  border-[1px] border-[#F1F1F1] rounded-[10px] 2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='dark:text-[#FFF]  2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]'>{showForm ? "Modify Contact Details" : "Contact Details"}</h1></li>
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
                {showForm ?
                    <>

                        <div className='flex flex-col items-center justify-center'>

                            <div className='w-[90%]'>
                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Mobile Number</h1>
                                <div className='flex justify-between'>
                                    <div>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[170px] xl:w-[135px] lg:w-[200px] flex justify-end"
                                            styles={customStyles}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <input name="firstname" type='text' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[350px] xl:w-[300px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                                    </div>
                                </div>
                            </div>
                            <div className='w-[90%] pt-[20px]'>
                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Home Number</h1>
                                <div className='flex justify-between'>
                                    <div>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[170px] xl:w-[135px] lg:w-[200px] flex justify-end"
                                            styles={customStyles}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <input name="firstname" type='text' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[350px] xl:w-[300px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                                    </div>
                                </div>
                            </div>
                            <div className='w-[90%] pt-[20px]'>
                                <h1 className='text-[#000] pb-[10px]' style={labelText}>Email Address</h1>
                                <div>
                                    <input name="Enter Email Address" type='text' value={formdata.email} placeholder='First Name' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                                </div>
                            </div>

                            <div className='w-[90%] flex justify-end pb-[10px] mt-[20px]'>

                                <SaveButton>Save</SaveButton>

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
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Mobile Number</p>
                                    {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>+{data?.mobileNumber ? data.mobileNumber : 'NA'}</h1> */}
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>+{ShowPhoneNumber ? ShowPhoneNumber : 'NA'}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Home Number</p>
                                    {/* <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.homeMobileNumber ? data.homeMobileNumber : "NA"}</h1> */}
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>+{showMobileNumber ? showMobileNumber : "NA"}</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Email Address</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.email ? data.email : "NA"}</h1>
                                </div>

                            </div>

                        </div>
                    </>}


            </div>
        </>
    )
}

export default ContactTab