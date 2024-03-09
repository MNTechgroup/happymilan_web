import Image from 'next/image'
import React from 'react'

function RecentlyView() {
  
  const ProfileName = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
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
   
    
  ] 

  

  return (
    <>

      <div className='relative 2xl:left-[50px]'>
        <h1 style={Text3} className='relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px] text-[16px]'>Recently Viewed</h1>
      </div>
      <div className='inline-block space-y-[10px] relative 2xl:left-[-10px] left-[5px] pt-[10px] lg:flex flex-wrap xl:justify-center 2xl:justify-center space-x-[10px] 2xl:space-x-[25px] xl:space-x-[15px]'>
      <div></div>
      {
            userData?.map((item,index) => {
              return (
                <>
                  <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                        <div className='flex justify-between pt-[10px]'>
                            <ul className='pl-[10px] flex space-x-[10px]'>
                                <li>
                                    <Image alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' />
                                </li>
                                <li className='text-[10px]' style={Text4}>You & Her </li>
                            </ul>
                            <ul className='pr-[10px] flex space-x-[30px]'>
                                <li>
                                    <Image alt='shortlist' width={15} height={14} src='/assests/Black/Stars-2.svg' />
                                </li>
                                <li>
                                    <Image  width={3} height={14} alt='more' src='/assests/Black/3Dots.svg' />
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-center '>
                            <Image alt='profile' width={102} height={102} className='w-[102px] h-[102px] rounded-[50%]' src={item.profilePic} />
                        </div>
                        <div className='text-center'>
                            <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                            <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                            <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                            <p style={ListText} className='text-[14px]'>Never Married</p>
                        </div>

                        <div className='flex space-x-[15px] justify-center'>
                            <div><Image alt='ignore' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                            <div><Image alt='like' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                            <div><Image alt='send' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                        </div>
                    </div>
                </>
              )

            })
          }
      </div>

    </>
  )
}

export default RecentlyView