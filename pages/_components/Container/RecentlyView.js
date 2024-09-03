import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetrecentuserprofileData } from '../../../store/actions/UsersAction'
import { Skeleton } from '@mui/material'
import shuffledata from 'lodash/shuffle';
import GridLikeUser from '../common/Buttons/GridLikeUser'
import icons from '../../../utils/icons/icons'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import calculateAge from '../../../utils/helpers/CalculateAge'
import Link from 'next/link'
import Avatar from 'react-avatar'

function RecentlyView() {

  const { darkMode, toggleDarkMode } = useDarkMode();


  const ProfileName = {
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
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px" /* 171.429% */
  }

  const Text4 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px"
  }



  const ProfileCard = {
    borderRadius: "10px",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }

  const ImagenotFound = {
    color: "#B3CBF1",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetrecentuserprofileData())
  }, [])


  const { data, loading } = useSelector((state) => state.usersact.recentusersdata)

  const shuffledData = shuffledata(data);


  return (
    <>


      <div className='relative 2xl:left-[50px] '>


        {data?.length > 0 ? <h1 style={Text3} className='dark:text-[#FFF] relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px] text-[16px]'>Recently Viewed</h1> : <>
        </>
        }
      </div>
      <div className=' inline-block space-y-[10px] relative 2xl:left-[-10px] left-[5px] pt-[10px] lg:flex flex-wrap xl:justify-center 2xl:justify-center space-x-[10px] 2xl:space-x-[25px] xl:space-x-[15px]'>
        <div></div>
        {loading ?
          <>
            {[0, 1, 2].map((res, Index) => {
              return (
                <div key={Index} style={ProfileCard} className='bg-[#FFF] dark:bg-[#242526] inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px rounded-[10px]'>
                  <div className='flex justify-center pt-[10px]'>
                    <Skeleton variant="text" width={120} className='pl-[10px] flex space-x-[10px]' />

                  </div>
                  <div className='flex justify-center '>
                    <Skeleton variant="circular" alt='profile' style={{ objectFit: "cover" }} width={102} height={102} className='w-[102px] h-[102px] rounded-[50%]' src={""} />
                  </div>
                  <div className='text-center grid place-items-center'>
                    <Skeleton variant='h1' width={110} style={ProfileName} className='text-[18px]' />
                    <Skeleton variant="text" width={90} style={ListText} className='text-[14px]' />
                    <Skeleton variant="text" width={90} style={ListText} className='text-[14px]' />
                  </div>

                  <div className='flex space-x-[15px] justify-center'>
                    <div><Skeleton variant="circular" alt='ignore' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                    <div><Skeleton variant="circular" alt='like' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                    <div><Skeleton variant="circular" alt='send' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                  </div>
                </div>
              )
            })}
          </>


          : <>
            {
              shuffledData?.slice(0, 3).map((item, index) => {
                return (

                  <div key={index} style={ProfileCard} className='bg-[#FFF] dark:bg-[#242526] inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                    <div className='flex justify-between pt-[10px]'>
                      <ul className='pl-[10px] flex space-x-[10px]'>
                        <li>
                          <Image quality={25} loading='lazy' alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' />
                        </li>
                        <li className='text-[10px] text-[#000] dark:text-[#FFF]' style={Text4}>You & Her </li>
                      </ul>
                      <ul className='pr-[10px] flex space-x-[30px]'>
                        <li>
                          <Image quality={25} loading='lazy' alt='shortlist' width={15} height={14} src='/assests/Black/Stars-2.svg' />
                        </li>
                        <li>
                          {darkMode ? icons.more.dark : icons.more.light}
                        </li>
                      </ul>
                    </div>
                    <div className='flex justify-center '>
                      {item?.viewerId?.profilePic ? <>
                        <Link href={`/longterm/dashboard/${item?.viewerId?.id}`}>
                          <Image quality={40} loading='lazy' alt='profile' style={{ objectFit: "cover" }} width={102} height={102} className='hover:opacity-90 duration-100 w-[102px] h-[102px] rounded-[50%]' src={item?.viewerId.profilePic} />
                        </Link>
                      </>
                        :
                        <>
                          {/* <div className='grid place-items-center w-[102px] h-[102px] rounded-[50%] bg-[#F8FBFF]'>
                            <h1 style={ImagenotFound}>No Image</h1>
                          </div> */}
                          <Avatar name={item?.viewerId?.name} round size='102' />
                        </>
                      }
                    </div>
                    <div className='text-center'>
                      <Link href={`/longterm/dashboard/${item?.viewerId?.id}`}>
                        <h1 style={ProfileName} className='hover:opacity-75 duration-100 text-[#000] dark:text-[#FFF] text-[18px]'>{item?.viewerId?.name}</h1>
                      </Link>
                      <p style={ListText} className='text-[#000] dark:text-[#FFF] text-[14px]'>{calculateAge(item?.viewerId?.dateOfBirth)}, 5’3”</p>
                      <p style={ListText} className='text-[#000] dark:text-[#FFF] text-[14px]'>{item?.viewerId?.religion ? item?.viewerId?.religion : "hindu, patel"}</p>
                      <p style={ListText} className='text-[#000] dark:text-[#FFF] text-[14px]'>Never Married</p>
                    </div>

                    <GridLikeUser from={"GridProfile"} theUserName={item?.viewerId?.name} user={item?.viewerId} theid={item?.viewerId} key={index} />
                  </div>

                )

              })
            }
          </>}
      </div >

    </>
  )
}

export default RecentlyView