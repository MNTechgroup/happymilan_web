import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules


function Searchprofile() {

    const userData = [
        {
            id: 1,
            userName: "Ajay Sharma",
            profilePic: "/assests/pic/RecentlyViewedPicSize.svg",
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
            profilePic: "/assests/pic/Rahulverma-1.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Praveen K",
            profilePic: "/assests/pic/PraveenK-1.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
                image2: "",
                image3: "",
                image4: ""
            }
        }
    ]

    const BoldText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const statusText = {

        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
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

    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    return (
        <>
            <div>

                <div className='flex flex-col mt-[-8px]'>




                    {

                        userData.map((res) => {

                            return (
                                <>

                                    <div key={res.id} className="relative 2xl:left-[40px] xl:left-[55px] left-[40px]">
                                        <div style={Box} className={`flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                            <div className='w-[350px]'>
                                                <div className='p-[15px] w-full '>
                                                    <img className='w-[197px] h-[258px]' src={res.profilePic} />
                                                </div>
                                            </div>
                                            <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                <div className='flex justify-between  h-[50px]'>
                                                    <div>
                                                        <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.userName}</h1>
                                                        <h1 style={statusText} className={res.Activestatus ? `text-[#17C270]` : `text-[#7A7A7A]`}>{res.Activestatus ? "Online now" : "Offline"}</h1>
                                                    </div>
                                                    <div className='pr-[8px]'>
                                                        <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                                                            <li className='relative left-[10px]'><img src='/assests/Black/Couple2.svg' /></li>
                                                            <li className='text-[10px]' style={Text4}>You & Her</li>
                                                            <li><img src='/assests/Black/Stars.svg' /></li>
                                                            <li><img src='/assests/Black/3Dots.svg' /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                    <div id="user-card">
                                                        <ul id="user-card-grid">
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.height}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.cast}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.language}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.marriagestatus}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.location}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><img src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.profession}</li>
                                                        </ul>
                                                    </div>
                                                    <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                        <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res.description}<span className='text-[#0F52BA]'> more </span></p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[10px] mr-[20px] space-x-[10px]'>
                                                    <h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>Are you impressed?</h1>
                                                    <button className='w-[134px] h-[40px] rounded-[10px] bg-[#0F52BA] text-[#FFF]'>Send Request</button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                </>
                            )
                        })

                    }



                </div>

            </div>
        </>
    )
}

export default Searchprofile