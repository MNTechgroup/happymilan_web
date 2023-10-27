"use client";

import React, { useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
    Badge,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';



const Text2 = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}
const userId = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px"
}
const Text4 = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const UserProfileName = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px"
}

const Username = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
}
const Activity = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const userStatus = {
    fontFamily: "Poppins",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
}

const BoxSdow2 = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
}

function NavBar() {
    const router = useRouter();

    //For Message Notification

    const [state, setState] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };


    const list = (anchor) => (
        <Box
            role="presentation"

        >
            <div className={`scroll-req-content  h-full bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                <div className="overflow-y-scroll h-full pb-[40px] w-full grid place-items-center">
                    <div className="flex flex-col gap-y-[15px] fixed top-0 bg-[#FFF]">

                        <div className="flex space-x-[19px] pl-[25px] pt-[20px] items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/user/userProfile.svg" />
                            <div>
                                <h1 style={UserProfileName} className="text-bold text-[14px]">Riya M Shah</h1>
                                <p style={userStatus} className="text-[#0091FF]">Online</p>
                            </div>
                        </div>

                        <div className=" h-[1px] w-[286px] bg-[#ECECEC]"></div>

                        <div>
                            <input
                                onClick={handleContentClick}
                                type="text" placeholder="Search Member"
                                style={Text2}
                                className="pl-[40px] w-[278px] h-[50px] oultine-none focus:outline-none text-[black] focus:border-[1px] focus:border-[black] rounded-[10px] bg-[#FAFAFA] text-[#727272]" />
                            <img src="/assests/Black/Search.svg" className="w-[18px] h-[15px] absolute inline 2xl:left-[10px] xl:left-[10px] mt-[19px]" />
                        </div>

                      </div>
                    <div className="pt-[20px] flex flex-col space-y-[40px] mt-[150px]">
                        <div className="flex space-x-[19px]  items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-3.svg" />
                            <div>
                                <h1 style={Username}>Rishikesh Shah <span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="flex space-x-[19px]  items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-4.svg" />
                            <div>
                                <h1 style={Username}>Ronit Kumar <span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="flex space-x-[19px]  items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-5.svg" />

                            <div>
                                <h1 style={Username}>Priyal Mehta <span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="flex space-x-[19px]  items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-1.svg" />
                            <div>
                                <h1 style={Username}>Rhitik Gajjar <span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="flex space-x-[19px] items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-7.svg" />
                            <div>
                                <h1 style={Username}>Meet Patel<span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="flex space-x-[19px] items-center">
                            <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-6.svg" />
                            <div>
                                <h1 style={Username}>Niketan Sharma<span style={userStatus} className="text-[#A7A7A7]">1h ago</span></h1>
                                <p style={Activity}> Hi, I am bus now. Can I talk...</p>
                            </div>
                        </div>

                        <div className="hidden">
                            <button className="w-[278px] h-[40px] rounded-[10px] bg-[#FAFAFA]">View All</button>
                        </div>
                    </div>
                </div>
            </div>

        </Box>
    );
    //For Message Notification




    const [notification, setNotification] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed
    });

    const toggleNotification = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNotification({ ...notification, [anchor]: open });
    };


    const NotificationList = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            onClick={toggleNotification(anchor, false)}
            onKeyDown={toggleNotification(anchor, false)}
        >
            <div className={` h-full bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                <div className="overflow-y-scroll h-full pb-[100px] w-full grid place-items-center">
                    <div className="fixed top-0 bg-[#FFF] flex flex-col gap-y-[25px]">
                        <h1 style={Text2} className=" pt-[25px]  text-[#000]">Latest Notification</h1>
                        <div className=" h-[1px] w-[286px] bg-[#ECECEC]"></div>
                    </div>
                    <div className="flex flex-col space-y-[32px] pt-[80px]">
                        <div></div>
                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className=" flex pl-[6px]  items-center">
                                <div className="">
                                    <img src="/assests/dashboard/request/req-1.svg" />
                                </div>
                                <div className="pl-[40px]">
                                    <h1 style={Username}>Rihan Shah</h1>
                                    <h1 style={Activity} >Sent you a following request</h1>
                                </div>
                            </div>
                            <div className="flex justify-center relative top-[-10px]">
                                <div className="w-[100px] flex space-x-[20px]">
                                    <img src="/assests/dashboard/request/ignore-req-icon.svg" />
                                    <img src="/assests/dashboard/request/accept-req-icon.svg" />
                                </div>
                            </div>
                        </div>

                        {/* Likes You Request  */}

                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className=" flex pl-[6px] items-center">
                                <div>
                                    <img src="/assests/dashboard/request/req-2.svg" />
                                </div>
                                <div className="pl-[38px]">
                                    <h1 style={Username}>Rishikesh Shah </h1>
                                    <h1 style={Activity} >Likes you!</h1>
                                </div>
                            </div>

                        </div>

                        {/* Likes You Request  */}

                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="pl-[6px] flex items-center">
                                <div>
                                    <img src="/assests/dashboard/request/req-3.svg" />
                                </div>
                                <div className="pl-[38px]">
                                    <h1 style={Username}>Ronit Kumar</h1>
                                    <h1 style={Activity} >Likes you!</h1>
                                </div>
                            </div>

                        </div>
                        {/* Likes You Request  */}

                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="pl-[6px] flex items-center">
                                <div>
                                    <img src="/assests/dashboard/request/req-4.svg" />
                                </div>
                                <div className="pl-[38px]">
                                    <h1 style={Username}>Priyal Mehta</h1>
                                    <h1 style={Activity} >Likes you!</h1>
                                </div>
                            </div>

                        </div>

                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="flex pl-[6px]   items-center">
                                <div className="">
                                    <img src="/assests/dashboard/request/req-5.svg" />
                                </div>
                                <div className="pl-[40px]">
                                    <h1 style={Username}>Rihan Shah</h1>
                                    <h1 style={Activity} >Sent you a following request</h1>
                                </div>
                            </div>
                            <div className="flex justify-center relative top-[-10px]">
                                <div className="w-[100px] flex space-x-[20px]">
                                    <img src="/assests/dashboard/request/ignore-req-icon.svg" />
                                    <img src="/assests/dashboard/request/accept-req-icon.svg" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Box>
    );

    //For Notification

    //For Profile Menu

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const isUpgradeActive = router.pathname.startsWith('/dashboard/upgrade');

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-end lg:gap-x-[50px]">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal poppins rounded-[10px]"


            >
                {isUpgradeActive ? "" : <>
                    <button style={Text2} onClick={() => router.push("/dashboard/upgrade")} className="text-[#FFF] text-center flex items-center justify-center w-[123px] h-[40px] bg-[#0F52BA] rounded-[8px]">Upgrade<img className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>
                </>}

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal poppins rounded-[10px]"

            >


                <Badge className="cursor-pointer mt-[9px] w-[9px] h-[9px] bg-[#0F52BA]" color="#0F52BA">
                    <img className="cursor-pointer" onClick={toggleDrawer('right', true)} src="/assests/dashboard/icon/notification.svg" />
                </Badge>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 font-normal poppins rounded-[10px]"
            >



                <img className="cursor-pointer" onClick={toggleNotification('right', true)} src="/assests/dashboard/icon/notification-icon.svg" />

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] p-[7px]"

            >

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1.48288 20C1.07718 20 0.728608 19.8542 0.437165 19.5625C0.145722 19.2708 0 18.922 0 18.516C0 18.1099 0.145722 17.7611 0.437165 17.4694C0.728608 17.1777 1.07718 17.0319 1.48288 17.0319C1.88861 17.0319 2.2372 17.1777 2.52864 17.4694C2.82006 17.7611 2.96577 18.1099 2.96577 18.516C2.96577 18.922 2.82006 19.2708 2.52864 19.5625C2.2372 19.8542 1.88861 20 1.48288 20ZM9.99222 20C9.58652 20 9.23795 19.8542 8.9465 19.5625C8.65506 19.2708 8.50934 18.922 8.50934 18.516C8.50934 18.1099 8.65506 17.7611 8.9465 17.4694C9.23795 17.1777 9.58652 17.0319 9.99222 17.0319C10.3979 17.0319 10.7465 17.1777 11.0379 17.4694C11.3294 17.7611 11.4751 18.1099 11.4751 18.516C11.4751 18.922 11.3294 19.2708 11.0379 19.5625C10.7465 19.8542 10.3979 20 9.99222 20ZM18.5016 20C18.0958 20 17.7473 19.8542 17.4558 19.5625C17.1644 19.2708 17.0187 18.922 17.0187 18.516C17.0187 18.1099 17.1644 17.7611 17.4558 17.4694C17.7473 17.1777 18.0958 17.0319 18.5016 17.0319C18.9073 17.0319 19.2558 17.1777 19.5473 17.4694C19.8387 17.7611 19.9844 18.1099 19.9844 18.516C19.9844 18.922 19.8387 19.2708 19.5473 19.5625C19.2558 19.8542 18.9073 20 18.5016 20ZM1.48288 11.484C1.07718 11.484 0.728608 11.3382 0.437165 11.0465C0.145722 10.7549 0 10.406 0 10C0 9.59398 0.145722 9.24514 0.437165 8.95347C0.728608 8.6618 1.07718 8.51596 1.48288 8.51596C1.88861 8.51596 2.2372 8.6618 2.52864 8.95347C2.82006 9.24514 2.96577 9.59398 2.96577 10C2.96577 10.406 2.82006 10.7549 2.52864 11.0465C2.2372 11.3382 1.88861 11.484 1.48288 11.484ZM9.99222 11.484C9.58652 11.484 9.23795 11.3382 8.9465 11.0465C8.65506 10.7549 8.50934 10.406 8.50934 10C8.50934 9.59398 8.65506 9.24514 8.9465 8.95347C9.23795 8.6618 9.58652 8.51596 9.99222 8.51596C10.3979 8.51596 10.7465 8.6618 11.0379 8.95347C11.3294 9.24514 11.4751 9.59398 11.4751 10C11.4751 10.406 11.3294 10.7549 11.0379 11.0465C10.7465 11.3382 10.3979 11.484 9.99222 11.484ZM18.5016 11.484C18.0958 11.484 17.7473 11.3382 17.4558 11.0465C17.1644 10.7549 17.0187 10.406 17.0187 10C17.0187 9.59398 17.1644 9.24514 17.4558 8.95347C17.7473 8.6618 18.0958 8.51596 18.5016 8.51596C18.9073 8.51596 19.2558 8.6618 19.5473 8.95347C19.8387 9.24514 19.9844 9.59398 19.9844 10C19.9844 10.406 19.8387 10.7549 19.5473 11.0465C19.2558 11.3382 18.9073 11.484 18.5016 11.484ZM1.48288 2.96808C1.07718 2.96808 0.728608 2.82225 0.437165 2.53061C0.145722 2.23894 0 1.89008 0 1.48404C0 1.07802 0.145722 0.729175 0.437165 0.437505C0.728608 0.145835 1.07718 0 1.48288 0C1.88861 0 2.2372 0.145835 2.52864 0.437505C2.82006 0.729175 2.96577 1.07802 2.96577 1.48404C2.96577 1.89008 2.82006 2.23894 2.52864 2.53061C2.2372 2.82225 1.88861 2.96808 1.48288 2.96808ZM9.99222 2.96808C9.58652 2.96808 9.23795 2.82225 8.9465 2.53061C8.65506 2.23894 8.50934 1.89008 8.50934 1.48404C8.50934 1.07802 8.65506 0.729175 8.9465 0.437505C9.23795 0.145835 9.58652 0 9.99222 0C10.3979 0 10.7465 0.145835 11.0379 0.437505C11.3294 0.729175 11.4751 1.07802 11.4751 1.48404C11.4751 1.89008 11.3294 2.23894 11.0379 2.53061C10.7465 2.82225 10.3979 2.96808 9.99222 2.96808ZM18.5016 2.96808C18.0958 2.96808 17.7473 2.82225 17.4558 2.53061C17.1644 2.23894 17.0187 1.89008 17.0187 1.48404C17.0187 1.07802 17.1644 0.729175 17.4558 0.437505C17.7473 0.145835 18.0958 0 18.5016 0C18.9073 0 19.2558 0.145835 19.5473 0.437505C19.8387 0.729175 19.9844 1.07802 19.9844 1.48404C19.9844 1.89008 19.8387 2.23894 19.5473 2.53061C19.2558 2.82225 18.9073 2.96808 18.5016 2.96808Z" fill="black" />
                </svg>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"

            >

                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <img onClick={handleClick} className="cursor-pointer" src="/assests/dashboard/user/userProfile.svg" />

                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',

                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,

                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <div className="pt-[20px] w-[278px] h-[423px] bg-[#FFF]" style={BoxSdow2}>
                        <div className="flex flex-col space-y-[20px]">

                            <div className="flex space-x-[39px] pl-[24px] items-center">
                                <img className="w-[47px] h-[47px]" src="/assests/dashboard/user/userProfile.svg" />
                                <div>
                                    <ul className="relative right-[18px] flex items-center space-x-[10px]">
                                        <li className=""><img src="/assests/dashboard/menu/verfied-tick.svg" /></li>
                                        <li className=""><h1>Gold</h1></li>
                                    </ul>
                                    <h1>One Month</h1>
                                </div>
                            </div>

                            <div className="pl-[24px] ">
                                <h1 style={UserProfileName} className="text-[#000]">Riya M Shah</h1>
                                <p style={userId} className="text-[#50545A]">ID: HM1002021</p>
                                <div className="pt-[8px]">
                                    <button onClick={()=>router.push("/dashboard/upgrade")} style={Text2} className="text-[#FFF] mr-[2px] text-center flex items-center justify-center w-[123px] h-[40px] bg-[#0F52BA] rounded-[8px]">Upgrade<img className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>

                                </div>
                            </div>
                            <div className="w-full grid place-items-center">
                                <div className="bg-[#EBEBEB] h-[1px] w-[230px]"></div>
                            </div>
                            <div className="pt-[21px] flex  flex-col space-y-[21px]">
                                <ul style={Text4} className="pl-[30px] text-[#000] space-y-[21px]">
                                    <li className="flex items-center space-x-[10px]"><img src="/assests/dashboard/menu/menu-seting.svg" className="w-[17.223px] h-[16px]" /><h1>My Profile</h1></li>
                                    <li className="flex items-center space-x-[10px]"><img src="/assests/dashboard/menu/menu-profile.svg" className="w-[17.223px] h-[16px]" /><h1>Accounts</h1></li>
                                    <li className="flex items-center space-x-[10px]"><img src="/assests/dashboard/menu/menu-lock.svg" className="w-[17.223px] h-[16px]" /><h1>Privacy Policy</h1></li>
                                </ul>

                                <div className="flex justify-center">
                                    <button className="w-[230px] h-[44px] text-[black] bg-[#F7F7F7] rounded-[10px] flex justify-center items-center" style={Text4}><h1>Log Out </h1><img className="relative left-[50px]" src="/assests/dashboard/menu/menu-logout.svg" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            </Typography>
        </ul>
    );
    return (
        <>
            <Navbar
                className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                style={{ backgroundColor: "#FFF" }}

            >
                <div className="flex items-center justify-between">
                    <Typography
                        as="li"

                        className="mr-4 cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        <Link href="/">  <img src="/heroSec/Happy-milan2.svg" /></Link>
                    </Typography>
                    <Typography
                        as="li"

                        className=" absolute 2xl:left-[335px] xl:left-[290px] flex cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        {
                            isUpgradeActive ? "" : <>
                                <input type='text' className='text-[#000] outline-none   pl-[10px] w-[200px] h-[40px] rounded-[8px] bg-[#F7F7F7] border-none ouline-none focus:border-[1px] focus:border-[black] pr-[40px]' placeholder='Profile ID Search' /> <img src="/assests/Black/Search.svg" className="relative right-[30px]" />

                            </>
                        }

                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="w-[600px] hidden lg:block ">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    style={{ color: "black" }}
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    style={{ color: "black" }}
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>

            <Drawer
                anchor="right"
                BackdropProps={{ style: { opacity: 0 } }}
                open={notification['right']}
                onClose={toggleNotification('right', false)}
            >
                {NotificationList('right')}
            </Drawer>

            <Drawer
                anchor="right"
                BackdropProps={{ style: { opacity: 0 } }}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </>
    )
}

export default NavBar