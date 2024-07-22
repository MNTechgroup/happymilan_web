import Image from 'next/image'
import React from 'react'

function DeleteGridUser() {
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }


    const ProfileCard = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const userData = [
        {
            id: 1,
            userName: "Ajay Sharma",
            profilePic: "/assests/dashboard/profile/1.svg",
            Activestatus: true,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 2,
            userName: "Rahul Verma",
            profilePic: "/assests/dashboard/profile/2.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/3.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 4,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/4.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 5,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/5.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 6,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/6.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
    ]
 

    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        userData?.map((item) => {
                            return (
                                <>
                                    <div style={ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                        <div className='flex justify-between pt-[10px]'>
                                            <ul className='pl-[10px] flex space-x-[10px]'>
                                                <li>
                                                    <Image width={17} height={14} src='/assests/Black/Couple2.svg' />
                                                </li>
                                                <li className='text-[10px]' style={Text4}>You & Her </li>
                                            </ul>
                                            <ul className='pr-[10px] flex space-x-[30px]'>
                                                <li>
                                                    <Image width={15} height={14} src='/assests/Black/Stars-2.svg' />
                                                </li>
                                                <li>
                                                    <Image width={3} height={14} src='/assests/Black/3Dots.svg' />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='flex justify-center '>
                                            <Image width={102} height={102} className='w-[102px] h-[102px] rounded-[50%]' src={item.profilePic} />
                                        </div>
                                        <div className='text-center'>
                                            <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                                            <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                                            <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                                            <p style={ListText} className='text-[14px]'>Never Married</p>
                                        </div>

                                        <div className='flex space-x-[15px] justify-center'>
                                            <div><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                                            <div><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                                            <div><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }




                </div >
                <div className='flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
                    <div id='active-no' className=' cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>1</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>2</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>3</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>4</div>
                </div>
            </div>
        </>
    )
}

export default DeleteGridUser