import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfessionalData } from '../../../../../store/actions/UsersAction';
import { getCookie } from 'cookies-next';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

const ProfessionalTab = () => {

    const data = useSelector((state)=>state.usersact.professionaldata)

const dispatch = useDispatch();
    useEffect(()=>{
        const currentUserId = getCookie("userid")
        dispatch(getProfessionalData(currentUserId))
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

    const [AllData, setAllData] = useState( {
        jobType : data?.data?.jobType ? data.data.jobType : "NA",
        companyName : data?.data?.companyName ? data.data.companyName : "NA",
        currentSalary : data?.data?.currentSalary ? data.data.currentSalary : "NA",
        workCity : data?.data?.workCity ? data.data.workCity : "NA",
        workCountry : data?.data?.workCountry ? data.data.workCountry : "NA"

    });





    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    return (
        <>
            <div className='w-full h-[369px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]'>
                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='text-[16px]'>Professional Details</h1></li>
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

                            <div className=''>
                                <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Current Designation (Job Title)</h1>

                                        <input name="firstname" type='text' placeholder='Type' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Job Type</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={options}
                                        />
                                    </div>
                                </div>

                                <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Company Name</h1>

                                        <input name="Enter Name Here" type='text' placeholder='Enter Name Here' className='outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />

                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Annual Salary</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={options}
                                        />
                                    </div>
                                </div>
                                <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In City</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={options}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[#000] pb-[10px]' style={labelText}>Work In Country</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
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
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Designation</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{"Software Developer"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Job Type</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.jobType ? data.data.jobType : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Company Name</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.companyName ? data.data.companyName : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Annual Salary</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.currentSalary ? data.data.currentSalary : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Work in City</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.workCity ? data.data.workCity : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Work in Country</p>
                                    <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.workCountry ? data.data.workCountry : "NA"}</h1>
                                </div>

                            </div>
                        </div>

                    </>}

            </div>
        </>

       
    )
}

export default ProfessionalTab;