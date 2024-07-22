import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from '../../../../_components/layout/NavBar';

function SideBar() {

    const router = useRouter();

    const menuItem = [
        {
            id: 1,
            path: "/longterm/dashboard/seting/credentials",
            name: "Login Details",
            icon: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/privacy-icon.svg' />,
            icon2: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/privacy-icon-2.svg' />
        },
        {
            id: 2,
            path: "/longterm/dashboard/seting/deleteprofile",
            name: "Profile Setting",
            icon: <Image alt='delete' loading="lazy" width={13} height={14} src='/assests/dashboard/seting/before-profile-seting.svg' />,
            icon2: <Image alt='delete' loading="lazy" width={13} height={14} src='/assests/dashboard/seting/after-profile-seting.svg' />
        },
        {
            id: 3,
            path: "/longterm/dashboard/seting/privacyseting",
            name: "Privacy Setting",
            icon: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/before-privacy-seting.svg' />,
            icon2: <Image loading='lazy' alt='privacy' width={11} height={14} src='/assests/dashboard/seting/after-privacy-seting.svg' />
        },
        {
            id: 4,
            path: "/longterm/dashboard/seting/emailalert",
            name: "Notifications",
            icon: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/before-notification-seting.svg' />,
            icon2: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/after-notification-seting.svg' />,
        },
        {
            id: 5,
            path: "/longterm/dashboard/seting/plans",
            name: "Plans",
            icon: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/before-plans-details.svg' />,
            icon2: <Image loading='lazy' alt='email' width={14} height={14} src='/assests/dashboard/seting/after-plans-details.svg' />,
        }
    ]


    const TextTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <aside id="separator-sidebar" className=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="ml-[18px] mt-[40px] h-full flex flex-col space-y-[10px] overflow-y-auto bg-[#FFF] dark:bg-gray-800">
                    <div>
                        <h1 style={TextTitle}>Account Setting</h1>
                    </div>
                    <div className='left-0'>
                        {
                            menuItem.map((item, index) => (
                                <div className="cursor-pointer link flex mt-[20px] " activeclassname="active">
                                    {
                                        router.pathname === item.path ?
                                            <div className='icon w-[30px]'>{item.icon2}</div>
                                            :
                                            <div className='icon w-[30px]'>{item.icon}</div>
                                    }
                                    <div id={router.pathname === item.path ? 'Seting-menu-grad' : 'Seting-menu-grad-before'} className={`mt-[-4px] ml-[5px]`}>
                                        <Link href={item.path}>{item.name}</Link>
                                    </div>

                                </div>

                            ))
                        }


                    </div>
                </div>
            </aside>


        </>
    )
}

export default SideBar