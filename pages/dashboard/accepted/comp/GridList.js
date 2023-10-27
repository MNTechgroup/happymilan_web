import React from 'react'

function UserGridProfile() {
    const Text7 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text8 = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
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

    const Text5 = {
        color: "#0F52BA",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "22px"
    }
    const Text6 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px"
    }
    const RequestBox = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
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
                image1: "/assests/pic/RecentlyViewedPicSize.svg",
                image2: "",
                image3: "",
                image4: ""
            }
        },
    ]

    return (
        <>
            <div className=' h-full w-[650px] 2xl:w-[730px] xl:w-[634px] '>
                <div className='relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div></div>

                    {
                        userData?.map((item) => {
                            return(
                            <>
                            <div style={ProfileCard} className=' flex flex-col space-y-[15px]  2xl:w-[192px] w-[189px] xl:w-[173px] h-[327px] bg-[#FFF] rounded-[10px]'>
                        <div className='flex justify-between pt-[10px]'>
                            <ul className='pl-[10px] flex space-x-[10px]'>
                                <li>
                                    <img src='/assests/Black/Couple2.svg' />
                                </li>
                                <li className='text-[10px]' style={Text4}>You & Her </li>
                            </ul>
                            <ul className='pr-[10px] flex space-x-[30px]'>
                                <li>
                                    <img src='/assests/Black/Stars.svg' />
                                </li>
                                <li>
                                    <img src='/assests/Black/3Dots.svg' />
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-center '>
                            <img className='w-[102px] h-[102px] rounded-[50%]' src={item.profilePic} />
                        </div>
                        <div className='text-center'>
                            <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                            <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                            <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                            <p style={ListText} className='text-[14px]'>Never Married</p>
                        </div>

                        <div className='flex space-x-[15px] justify-center'>
                            <div><img className='w-[40px] h-[40px]' src='/assests/dashboard/icon/Dislike-profile.svg' /></div>
                            <div><img className='w-[40px] h-[40px]' src='/assests/dashboard/icon/Like-profile.svg' /></div>
                            <div><img className='w-[40px] h-[40px]' src='/assests/dashboard/icon/Share-profile.svg' /></div>
                        </div>
                    </div>
                            </>
                            )

                        })
                    }

                    

                    <div className='flex space-x-[40px] justify-center items-center w-full'>
                        <div className='w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full text-[white] bg-[#0F52BA]'>1</div>
                        <div className='w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full text-[black] bg-[#FFF]'>2</div>
                        <div className='w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full text-[black] bg-[#FFF]'>3</div>
                        <div className='w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full text-[black] bg-[#FFF]'>4</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserGridProfile