'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavBar from '../../NavBar';
import { useRouter } from 'next/router';
import Sidebar2 from '../comp/Sidebar2';
import Image from 'next/image';
import DeleteProfile from './comp/Deleteprofile';

const index = ({ children }) => {

    const router = useRouter();
        const menuItem = [
            {
                id: 1,
                path: "/seting/credentials",
                name: "Credentials",
                icon: <Image width={18} height={14} src='/assests/dashboard/seting/credentials-icon.svg' />,
                icon2 : <Image width={18} height={14} src='/assests/dashboard/seting/credentials-icon-2.svg' />
            },
            {
                id: 2,
                path: "/dashboard/seting/deleteprofile",
                name: "Hide/Delete Profile",
                icon: <Image width={22} height={14} src='/assests/dashboard/seting/delete-profile-icon.svg' />,
                icon2: <Image width={22} height={14} src='/assests/dashboard/seting/delete-profile-icon-2.svg' />
            },
            {
                id: 3,
                path: "/seting/privacy",
                name: "Privacy Setting",
                icon: <Image width={11} height={14} src='/assests/dashboard/seting/privacy-icon.svg' />,
                icon2: <Image width={11} height={14} src='/assests/dashboard/seting/privacy-icon-2.svg' />
            },
            {
                id: 4,
                path: "/seting/email-sms-alert",
                name: "Email/Sms Alert",
                icon: <Image width={14} height={14} src='/assests/dashboard/seting/email-alert.svg' />,
                icon2: <Image width={14} height={14} src='/assests/dashboard/seting/email-alert-2.svg' />,
            }
        ]

const [activeTab,SetactiveTab] = useState(1)


    
    return (
        <>
            <NavBar />
            <div className='w-full h-full grid place-items-center'>

                <div className='hidden md:block w-[90%] mt-[120px] '>

                    <h1 className='fixed left-10 text-[16px] text-[#716969] font-medium'>Account Setting</h1>
                    <div className='fixed right-10'>
                        <Image width={32} height={32} onClick={() => router.back()} className='cursor-pointer' src='/assests/common/arrow-back.svg' />
                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='fixed left-10'>
                            {
                                menuItem.map((item, index) => (
                                    <div onClick={()=>SetactiveTab(item.id)} className="cursor-pointer link flex mt-[20px] " activeclassname="active">
                                        {
                                            router.pathname === "/dashboard/seting/deleteprofile" === item.path ?
                                            <div className='icon w-[30px]'>{item.icon2}</div> 
                                            :
                                            <div className='icon w-[30px]'>{item.icon}</div> 
                                        }
                                        <div className={`${router.pathname === "/dashboard/seting/deleteprofile" === item.path ? "text-[blue]" : ""} link_text ml-[15px] font-medium text-[14px]  `}>{item.name}</div>

                                    </div>
                                   
                                ))
                            }


                        </div>
                        <div className='fixed w-[1px] ml-[20%] lg:ml-[18%] xl:ml-[250px] mt-[-17px] h-[185px] bg-[#ECECEC]'></div>


                        <main className=' absolute ml-[25%] lg:ml-[23%] xl:ml-[330px]'><DeleteProfile/></main>
                    </div>
                </div>

                <div className='block md:hidden w-[90% mt-[120px]'>
                        <Sidebar2/>
                </div>

            </div>
            
        </>
    )
}

export default index