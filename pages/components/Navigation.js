"use client";
import React, { useEffect, useState } from "react";
import {
    IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "react-avatar";
import { getCookie } from "cookies-next";
import ProfileImage from "./Maincomp/ProfileImage";
import { AppBar, Box, Collapse, Dialog, DialogContent, Menu, Modal, Typography } from "@mui/material";
import DarkModeToggle from "../emoji";
import { useDarkMode } from "../../ContextProvider/DarkModeContext";
import { useRouter } from "next/router";
import icons from "../../utils/icons/icons";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../store/actions/UsersAction";

function Sidebar() {


    //For Menu Profile

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [OpenProfileModal, SetOpenProfileModal] = useState(false)
    const handleClick = (event) => {
        SetOpenProfileModal(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        SetOpenProfileModal(false)
        setAnchorEl(null);
    };

    const { darkMode, toggleDarkMode } = useDarkMode();

    const BoxSdow2 = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
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
        // color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px"
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

    const [Uname, SetUname] = useState();

    useEffect(() => {

        if (getCookie("userName")) {
            SetUname(getCookie("userName"));
        }
        else {
            SetUname("NA")

        }

    }, [])

    const router = useRouter()

    const isUpgradeActive = router.pathname.startsWith('/dashboard/upgrade');


    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const [token, settoken] = useState();
    useEffect(() => {
        settoken(getCookie("jwtToken"))
    }, [])



    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);


    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }


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



    const MobileNav = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"

            >

                <Link href="/aboutus"> About Happy Milan </Link>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] "

            >
                <Link style={{ color: "white" }} href="/blog" className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] "

            >
                <Link style={{ color: "white" }} href="/successstories" className="flex items-center">
                    Success Stories
                </Link>
            </Typography>
            {!token ? <>
                <Typography
                    id="nav-links"
                    as="li"
                    variant="small"
                    className="p-1 font-normal rounded-[10px]  rounded-[10px]"
                >
                    <Link
                        style={{ color: "white" }}
                        href="/login"
                        className="flex items-center"
                    >
                        Member Login{" "}
                        <Image loading="lazy" width={16} height={16}
                            alt="icon"
                            src="/assests/Black/Vector-2.svg"
                            className="mr-4  relative left-[15px]"
                        />

                    </Link>
                </Typography>

            </> :
                <>
                    <Typography
                        id="nav-links"
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal rounded-[10px]  rounded-[10px]"
                        style={{ fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

                    >
                        <Link
                            style={{ color: "white" }}
                            href="/"
                            className="flex items-center"
                        >
                            <Avatar name="Foo Bar" size="150" />
                        </Link>
                    </Typography>
                </>}
        </ul>
    );


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"

            >

                <Link href="/aboutus"> About Happy Milan </Link>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 lg:w-[62px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"

            >
                <Link style={{ color: "white" }} href="/blog" className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] p-[7px]"

            >
                <Link style={{ color: "white" }} href="/successstories" className="flex items-center">
                    Success Stories
                </Link>
            </Typography>
            {!token ? <>
                <Typography
                    id="nav-links"
                    as="li"
                    variant="small"
                    className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"
                >
                    <Link
                        style={{ color: "white" }}
                        href="/login"
                        className="flex items-center"
                    >
                        Member Login{" "}
                        <Image loading="lazy" width={16} height={16}
                            alt="icon"
                            src="/assests/Black/Vector-2.svg"
                            className="mr-4  relative left-[15px]"
                        />

                    </Link>
                </Typography>

            </> :
                <>
                    <div onClick={handleClick}>
                        <ProfileImage size={30} />

                    </div>
                    <Modal
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        BackdropProps={{ style: { opacity: 0 } }}
                        anchorEl={anchorEl}
                        open={OpenProfileModal}
                        onClose={handleClose}
                        sx={{ outline: "none" }}
                        style={{ outline: "none", position: "absolute", right: "50px", top: "70px" }}

                    >
                        <Box sx={{ outline: "none" }} className="absolute right-0">
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
                        </Box>
                    </Modal>
                </>}
        </ul>
    );


    return (
        <>
            <div className="h-[20px] w-full">
                <AppBar
                    className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                    id="landing-navigation-bg"

                >

                    <div className="flex items-center justify-between">

                        <Typography
                          

                            className="mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium"
                        >
                            <Link href="/">  <Image loading="lazy" width={148} height={36} alt="Logo" src="/HM-logo.svg" /></Link>
                        </Typography>

                        <div className="flex items-center gap-4">
                            <div className={`${token ? "w-[100%]" : "w-[600px]"} hidden lg:block `}>{navList}</div>

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
                                        style={{ color: "white" }}
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
                                        style={{ color: "white" }}
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
                    <Collapse open={openNav}>{MobileNav}</Collapse>
                </AppBar>

                {/* <!-- Main Component --> */}


            </div>
        </>
    );
}

export default Sidebar;
