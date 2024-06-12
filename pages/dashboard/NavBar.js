"use client";

import React, { useContext, useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Image from "next/image";
import { Badge, Dialog, DialogContent, Stack } from "@mui/material";
import { getCookie } from 'cookies-next';
// Import only the specific Material-UI components and icons you need
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import { useDispatch } from "react-redux";
import propTypes from 'prop-types'
import { logoutuser } from "../../store/actions/UsersAction";
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '../../utils/firebase/firebase';
import toast, { Toaster } from 'react-hot-toast';
import Chats from "../components/Chat/UIChat";
import UIConversation from "../components/Chat/UIConversation";
import { UserContext } from "../../ContextProvider/UsersConversationContext";
import { useDarkMode } from "../../ContextProvider/DarkModeContext";
import icons from "../../utils/icons/icons";
import { useChatSettings } from "../../ContextProvider/ChatSetingContext";

const RequestNotification = dynamic(() => import("../components/Notification/RequestNotification"));
const ProfileImage = dynamic(() => import("../components/Maincomp/ProfileImage"));
const UpgradeButton = dynamic(() => import("../components/Buttons/UpgradeButton"));
const DarkModeToggle = dynamic(() => import("../emoji"));

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
    // color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px"
}

const Username2 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
}

const userStatus = {
    fontFamily: "Poppins",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
}

const planPrice = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px"
}
const planPrice2 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "14px"
}



function NavBar({ handleSearch }) {


    const [token, settoken] = useState()
    const [Uname, SetUname] = useState();

    useEffect(() => {

        if (getCookie("userName")) {
            SetUname(getCookie("userName"));
        }
        else {
            SetUname("NA")

        }
        settoken(getCookie("authtoken"))

    }, [])



    const [searchTerm, setSearchTerm] = useState('');

    const { darkMode, toggleDarkMode } = useDarkMode();

    const BoxSdow2 = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
    }

    // Debounce the handleSearch function to limit the search executions
    // const debouncedHandleSearch = debounce(handleSearch, 300); log out

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        // Call the debounced handleSearch function with the search term Log out
        handleSearch(value);
    };



    const router = useRouter();

    //For Message Notification

    const [state, setState] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed profi
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };



    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }


    const [Wide, SetWide] = useState(false);


    // Don't forget to handle disconnection and other events

    const { settings, setSettings } = useChatSettings();


    const HandleWide = () => {
        SetWide(!Wide)
        
            setSettings({
                ...settings,
                isMinimized: !settings.isMinimized,
            });
    }

    const [ChatUser, SetChatUser] = useState({
        userName: "",
        id: ""
    })

    const list = () => (
        <Box>
            <div className={`scroll-req-content  h-full  bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                <Chats HandleWide={HandleWide} toggleInnerDrawer={toggleInnerDrawer} SetChatUser={SetChatUser} />
            </div>
            <Drawer anchor="right" BackdropProps={{ style: { opacity: 0 } }} open={innerDrawerOpen} onClose={toggleInnerDrawer}>
                <Stack direction='row' sx={{ width: '100%' }}>
                    {/* Chats */}
                    {/* <ChatSidebar HanldeSetUser={HanldeSetUser} /> */}
                    <Chats HandleWide={HandleWide} />
                    <Box sx={{
                        height: '100%', width: Wide ? 'calc(100vw - 320px)' : 'calc(750px - 300px)',
                        backgroundColor: '#F0F4FA'
                    }}>
                        {/* <ChatRoomPage UserRoom={UserRoom} /> */}
                        <UIConversation UserDetails={ChatUser} />
                    </Box>


                </Stack>
            </Drawer>
        </Box >
    );
    //For Message Notification input profile id




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
        <Box id="sidebarScroll"
            className="dark:bg-[#242526] bg-[#FFF] "
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}

        >
            <RequestNotification />
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


    //inner Drawer For Chat

    const { userData, updateUser } = useContext(UserContext);

    const [innerDrawerOpen, setInnerDrawerOpen] = useState(false);
    const toggleInnerDrawer = (res) => {
        SetChatUser(res)
        updateUser(res)


        setInnerDrawerOpen(!innerDrawerOpen);
        if (innerDrawerOpen) {
            setState(state.right = false)
        }
    };

    const isUpgradeActive = router.pathname.startsWith('/dashboard/upgrade');

    const [MobileState, setMobileState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleMobileNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMobileState({ 'left': open });
    };


    const MobileNav = (anchor) => (
        <Box

            role="presentation"
            onClick={toggleMobileNav(anchor, false)}
            onKeyDown={toggleMobileNav(anchor, false)}
        >
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="min-h-screen flex flex-row bg-gray-100">
                <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div className="flex items-center justify-center">


                        <div className="flex space-x-[20px] pl-[10px] pr-[10px] pt-[20px] pb-[20px] border-b-[1px] border-gray-200">
                            <div>
                                <Image alt="img" width={40} height={40} onClick={() => router.push("/dashboard/profile")} className="cursor-pointer" src="/assests/dashboard/user/userProfile.svg" />
                            </div>
                            <div>
                                <h1 style={Username2}>{Uname}</h1>
                                <p style={userStatus} className="text-[#0091FF]">Online</p>

                            </div>
                            <div className="grid place-items-center">
                                <span className=""><i className={`bx bx-dots-horizontal-rounded`}></i></span>
                            </div>
                        </div>


                    </div>
                    <ul className="flex flex-col py-0 border-b-[1px] border-gray-200">
                        <li>

                            <Link href="/dashboard" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-home ${router.pathname === "/dashboard" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard" ? "text-[#0F52BA]" : ""}`}>Home</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/searchmember" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-search ${router.pathname === "/dashboard/searchmember" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/searchmember" ? "text-[#0F52BA]" : ""}`}>Search Member</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/accepted" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-check-circle  ${router.pathname === "/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}>Accepted</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/recentlyviewed" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-search ${router.pathname === "/dashboard/recentlyviewed" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/recentlyviewed" ? "text-[#0F52BA]" : ""}`}>recentlyviewed</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/newrequest" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-bell ${router.pathname === "/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}>New Requests</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/shortlists" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-star ${router.pathname === "/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}>Shortlists</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/sent" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-search ${router.pathname === "/dashboard/sent" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/sent" ? "text-[#0F52BA]" : ""}`}>Sent</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col py-4">
                        <li>

                            <Link href="/dashboard/cancelled" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-dislike ${router.pathname === "/dashboard/cancelled" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/cancelled" ? "text-[#0F52BA]" : ""}`}>Cancelled</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/blocked" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-block ${router.pathname === "/dashboard/blocked" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/blocked" ? "text-[#0F52BA]" : ""}`}>Blocked</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/deleted" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className={`bx bx-trash ${router.pathname === "/dashboard/deleted" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span className={`text-sm font-medium ${router.pathname === "/dashboard/deleted" ? "text-[#0F52BA]" : ""}`}>Deleted</span>
                            </Link>
                        </li>
                        <li className="hidden">
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                                <span className="text-sm font-medium">Logout</span>
                            </a>
                        </li>
                        {isUpgradeActive ? "" : <>
                            <li>
                                <div className="relative left-[14px] top-[10px]">
                                    <UpgradeButton IconSize={17} BtnSizeH={40} BtnSizeW={110} />
                                </div>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </Box>
    );

    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);

    const dispatch = useDispatch();

    const handleClickOpenLogout = () => {
        setOpenLogoutModal(true);
    };

    const handleCloseLogout = () => {
        setOpenLogoutModal(false);
    };

    const HandleLogout = (e) => {
        if (e.target.name === "stay") {
            setOpenLogoutModal(false);
            setAnchorEl(null);

        }
        else {
            dispatch(logoutuser())
            router.push("/login")
        }

    }



    const [notificationCount, setNotificationCount] = useState(0);

    if (typeof window !== 'undefined') {
        const messaging = getMessaging(firebaseApp);

        // Listen for incoming messages
        onMessage(messaging, (payload) => {
            console.log('Message received:', payload);

            // Display the message as a toast notification
            setNotificationCount((prevCount) => prevCount + 1);
            toast.success(payload.notification?.title);
        });
    }

    const handleNotificationOpen = () => {
        toggleNotification('right', true)();
        setNotificationCount(0)
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-end lg:gap-x-[50px]">
            <div
                className="p-1 font-normal poppins rounded-[10px]"
            >
                {isUpgradeActive ? "" : <>
                    <UpgradeButton IconSize={23} BtnSizeH={40} BtnSizeW={123} />
                </>}

            </div>
            <div
                id="nav-links"
                className="p-1 p-[5px]  font-normal poppins rounded-[100%] hover:bg-[#F2F7FF] w-[40px] h-[40px] grid place-items-center"
                
            >


                <Image alt="img" width={26} height={20} className="cursor-pointer" onClick={toggleDrawer('right', true)} src={darkMode ? "/assests/dashboard/icon/notification-white.svg" : "/assests/dashboard/icon/notification.svg"} />

            </div>
            <div
                id="nav-links"
                className="p-1 font-normal poppins p-[5px] rounded-[100%] hover:bg-[#F2F7FF] w-[40px] h-[40px] grid place-items-center"
            >
                <Badge badgeContent={notificationCount} color="primary">
                    <Image alt="img" width={17} height={20} className="cursor-pointer" onClick={handleNotificationOpen} src={darkMode ? "/assests/dashboard/icon/notification-icon-white.svg" : "/assests/dashboard/icon/notification-icon.svg"} />
                </Badge>
            </div>
            <div
                id="nav-links"
                className="p-1 font-normal rounded-[10px] p-[7px]"

            >
                {darkMode ? icons["nav-dots-menu"].dark : icons["nav-dots-menu"].light}

            </div>
            <div
                id="nav-links"
                className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"

            >
                <div style={{ cursor: "pointer" }} onClick={handleClick}>
                    <ProfileImage size={40} />
                </div>

                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    className=" ml-[-25px] mt-[10px]"
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            backgroundColor: darkMode ? "#242526" : "#FFF",

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

                                // transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                            transition: 'none',
                        },
                    }}

                >



                    <div className="pt-[20px] w-[278px] h-[449px]" style={BoxSdow2}>
                        <div className="flex flex-col space-y-[20px]">

                            <div className="flex space-x-[39px] pl-[24px] items-center">

                                <ProfileImage size={47} />
                                <div>
                                    {isUpgradeActive ?
                                        (<>
                                            <ul className="relative right-[18px] flex items-center space-x-[10px]">
                                                <li className=""><Image alt="img" width={8} height={8} src="/assests/dashboard/menu/verfied-tick.svg" /></li>
                                                <li style={planPrice2} className="text-[12px]"><h1>Gold</h1></li>
                                            </ul>
                                            <h1 style={planPrice} className="text-[12px]">One Month</h1>
                                        </>)
                                        : null}
                                </div>
                            </div>

                            <div className="pl-[28px] ">
                                <h1 style={UserProfileName} className="text-[#000] dark:text-[#FFF]">{Uname}</h1>
                                <p style={userId} className="text-[#50545A]">ID: HM1002021</p>

                            </div>
                            <div className="w-full grid place-items-center">
                                <div className="bg-[#EBEBEB] h-[1px] w-[230px]"></div>
                            </div>
                            <div className="relative left-[-10px] pt-[0px] flex items-center flex-col space-y-[23px]">
                                <ul style={Text4} className=" dark:text-[#FFF] pl-[0px] text-[#000] space-y-[8px]">

                                    <li className="w-[230px] h-[34px] p-[10px] pl-[15px] hover:bg-[#F3F8FF] dark:hover:bg-[#18191a] rounded-[100px]  cursor-pointer flex items-center space-x-[10px]">
                                        <span>
                                            {darkMode ? icons.myprofile.dark : icons.myprofile.light}
                                        </span>
                                        <Link className="relative left-[5px]" href="/dashboard/profile" >
                                            My Profile
                                        </Link>
                                    </li>
                                    <li className="w-[230px] h-[34px] p-[10px] pl-[15px] hover:bg-[#F3F8FF] dark:hover:bg-[#18191a] rounded-[100px]  flex items-center space-x-[10px]">
                                        <span>
                                            {darkMode ? icons.setting.dark : icons.setting.light}
                                        </span>
                                        <Link className="relative left-[5px]" href="/dashboard/seting/credentials">Accounts</Link>
                                    </li>
                                    <li className="w-[230px] h-[34px] p-[10px] pl-[15px] hover:bg-[#F3F8FF] dark:hover:bg-[#18191a] rounded-[100px]  flex items-center space-x-[10px]">

                                        <span>
                                            {darkMode ? icons["menu-lock"].dark : icons["menu-lock"].light}
                                        </span>

                                        <Link className="relative left-[5px]" href="/dashboard/seting/privacyseting">Privacy Policy</Link>
                                    </li>


                                </ul>
                                <div className="w-full grid place-items-center">
                                    <div className="bg-[#EBEBEB] h-[1px] w-[230px]"></div>
                                </div>
                                <ul className="pl-[10px]">
                                    <li className="flex items-center space-x-[60px]">
                                        <div className="flex space-x-[0px]">
                                            <span className="relative left-[-2px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.06547 16C5.82506 16 3.92072 15.2159 2.35242 13.6476C0.78414 12.0793 0 10.1749 0 7.93453C0 5.96181 0.624113 4.23786 1.87234 2.76268C3.12057 1.28751 4.67867 0.366612 6.54664 0C6.30224 0.488816 6.1102 1.00382 5.97054 1.54501C5.83088 2.0862 5.76105 2.64484 5.76105 3.22095C5.76105 5.1704 6.44336 6.82743 7.80797 8.19203C9.17257 9.55664 10.8296 10.239 12.779 10.239C13.3552 10.239 13.9138 10.1691 14.455 10.0295C14.9962 9.8898 15.5025 9.69776 15.9738 9.45336C15.6247 11.3213 14.7125 12.8794 13.2373 14.1277C11.7621 15.3759 10.0382 16 8.06547 16ZM8.06547 15.2668C9.60175 15.2668 10.9809 14.8434 12.2029 13.9967C13.425 13.15 14.3153 12.0458 14.874 10.6841C14.5248 10.7714 14.1757 10.8412 13.8265 10.8936C13.4774 10.946 13.1282 10.9722 12.779 10.9722C10.6318 10.9722 8.80305 10.2171 7.29296 8.70704C5.78287 7.19695 5.02782 5.36825 5.02782 3.22095C5.02782 2.87179 5.05401 2.52264 5.10638 2.17349C5.15876 1.82433 5.22859 1.47518 5.31588 1.12602C3.95417 1.68467 2.84997 2.57501 2.00327 3.79705C1.15657 5.01909 0.733224 6.39825 0.733224 7.93453C0.733224 9.95963 1.44899 11.6879 2.88052 13.1195C4.31206 14.551 6.04037 15.2668 8.06547 15.2668Z" fill={darkMode ? "#FFF" : "#000"} />
                                                </svg>
                                            </span>

                                            <span className="relative left-[10px] dark:text-[#FFF] text-[#000]">Dark Mode</span>

                                        </div>
                                        <div>
                                            <DarkModeToggle toggleDarkMode={toggleDarkMode} />
                                        </div>
                                    </li>
                                </ul>

                                <div onClick={handleClickOpenLogout} className="relative left-[10px] flex justify-center">
                                    <button id={darkMode ? "Gradient-logout-btn-2" : ""} className="w-[230px] h-[44px] border-[1px] border-[#EBEBEB] text-[black] dark:text-[#FFF] dark:bg-[#141516] dark:border-[1px] dark:border-[#FFF] bg-[#FFF] hover:bg-[#F3F8FF] rounded-[22px]" style={Text4}>
                                        Log Out
                                    </button>
                                </div>

                                <Dialog
                                    open={openLogoutModal}
                                    onClose={handleCloseLogout}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    className=""
                                >

                                    <DialogContent className="text-center w-[400px] mt-[20px]">
                                        <div id="alert-dialog-description">
                                            <p style={LogoutModalText}> Are you sure you want to exit?</p>
                                        </div>
                                    </DialogContent>
                                    <div className="flex justify-evenly p-[20px] mb-[20px]">
                                        <div>
                                            <button onClick={HandleLogout} name="stay" id="grad-button" className="rounded-[10px] w-[122px] h-[50px]">Stay</button>
                                        </div>
                                        <div>
                                            <button onClick={HandleLogout} name="exit" className="border-[black] border-[1px] rounded-[10px] w-[122px] h-[50px]">Log out</button>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </Menu>
            </div >
        </ul >
    );
    return (
        <>
            <Navbar
                className={` z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                style={{ backgroundColor: darkMode ? "#18191a" : "#FFF" }}

            >
                <div className="flex items-center flex-row-reverse lg:flex-row justify-between">
                    <div

                        className="mr-4 cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        <Link href="/">  <Image quality={45} loading="lazy" alt="img" width={148} height={36} src={darkMode ? "/heroSec/new-logo-white.svg" : "/heroSec/Happy-milan2.svg"} /></Link>
                    </div>
                    <div
                        id="id-search-centerlized"
                        className=" hidden absolute 2xl:left-[335px] xl:left-[310px] 2xl:flex xl:flex cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        {
                            isUpgradeActive ? "" : <>
                                {/* <Image loading="lazy" alt="img" width={15} height={14} style={{ width: "15px", height: "14px" }} src="/assests/Black/Search.svg" className="absolute mt-[12px] ml-[10px]" /> */}
                                <div className="hover:bg-[#F2F7FF] h-[30px] w-[30px] rounded-[100%] absolute mt-[5px] ml-[5px] grid place-items-center">
                                   <Image width={15} height={15} alt="search" src="/assests/dashboard/icon/Search-grad.svg" loading="lazy" />
                                </div>
                                <input type='search'
                                    value={searchTerm}
                                    onChange={handleChange} className='text-[#000] dark:text-[#FFF] outline-none   pl-[40px] w-[200px] h-[40px] rounded-[23px] bg-none border-[1px] border-[#E3E3E3]  dark:bg-[#242526]  ouline-none focus:border-[1px] focus:border-[black] pr-[10px]' placeholder='Profile ID Search' />

                            </>
                        }

                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-[600px] hidden lg:block ">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={toggleMobileNav('left', true)}
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
                                    <clipPath
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
                                    <clipPath
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                <div>
                    <Drawer
                        anchor="left"
                        BackdropProps={{ style: { opacity: 0 } }}
                        open={MobileState['left']}
                        onClose={toggleMobileNav('left', false)}
                    >
                        {MobileNav('left')}
                    </Drawer>

                </div>

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

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

NavBar.propTypes = {
    handleSearch: propTypes.func.isRequired,
};


export default NavBar