"use client";

import React, { useEffect, useState } from "react";
import {
    IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { getCookie } from "cookies-next";
import ProfileImage from "./Maincomp/ProfileImage";
import { AppBar, Collapse, Typography } from "@mui/material";


function CommonNavbar() {
    const router = useRouter();
    const isBlogActive = router.pathname.startsWith('/blog');
    const isSuccessActive = router.pathname.startsWith('/successstories');
    const isLoginActive = router.pathname.startsWith('/login');


    const befText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const aftText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }


    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const [token, settoken] = useState();
    useEffect(() => {
        settoken(getCookie('jwtToken'))
    }, [])

    const MobileNavList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"
                style={{ color: `${router.pathname === "/aboutus" ? "#0F52BA" : ""}`, backgroundColor: `${router.pathname === "/aboutus" ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}


            >

                <Link style={{ color: `${router.pathname === "/aboutus" ? "#0F52BA" : "#000"}` }} href="/aboutus" className="flex items-center">
                    About Happy Milan
                </Link>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 lg:w-[62px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"
                style={{ color: `${isBlogActive ? "#0F52BA" : ""}`, backgroundColor: `${isBlogActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}
            >
                <Link style={{ color: `${isBlogActive ? "#0F52BA" : "#000"}` }} href="/blog" className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] "
                style={{ color: `${isSuccessActive ? "#0F52BA" : ""}`, backgroundColor: `${isSuccessActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

            >
                <Link style={{ color: `${isSuccessActive ? "#0F52BA" : "#000"}` }} href="/successstories" className="flex items-center">
                    Success Stories
                </Link>
            </Typography>

            {/* {!session ? <> */}
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] rounded-[10px]"
                style={{ color: `${isLoginActive ? "#0F52BA" : ""}`, backgroundColor: `${isLoginActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

            >
                <Link
                    href="/login"
                    className="flex items-center"
                    style={{ color: `${isLoginActive ? "#0F52BA" : "#000"}` }}

                >
                    Member Login{" "}
                    {!isLoginActive ?
                        <Image loading="lazy" width={16} height={16}
                            alt="icon"
                            src="/assests/Black/Vector.svg"
                            className="mr-4  relative left-[15px]"
                        />
                        :
                        <svg className="mr-4  relative left-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M2.77895 12.7773C3.61998 12.1976 4.45669 11.7482 5.28907 11.4292C6.12146 11.1101 7.02511 10.9506 8 10.9506C8.97489 10.9506 9.8807 11.1101 10.7174 11.4292C11.5541 11.7482 12.393 12.1976 13.234 12.7773C13.8462 12.068 14.3009 11.3191 14.5984 10.5305C14.8958 9.7419 15.0445 8.8984 15.0445 8C15.0445 6.0135 14.3671 4.34278 13.0122 2.98784C11.6572 1.63292 9.9865 0.955456 8 0.955456C6.0135 0.955456 4.34278 1.63292 2.98784 2.98784C1.63292 4.34278 0.955455 6.0135 0.955455 8C0.955455 8.8984 1.10633 9.7419 1.40809 10.5305C1.70984 11.3191 2.1668 12.068 2.77895 12.7773ZM7.99543 8.47773C7.23842 8.47773 6.60162 8.2179 6.08503 7.69825C5.56842 7.17862 5.31012 6.54029 5.31012 5.78328C5.31012 5.02628 5.56994 4.38948 6.08959 3.87287C6.60923 3.35628 7.24756 3.09799 8.00457 3.09799C8.76158 3.09799 9.39838 3.35781 9.91497 3.87744C10.4316 4.39708 10.6899 5.0354 10.6899 5.79242C10.6899 6.54943 10.4301 7.18623 9.91041 7.70282C9.39077 8.21943 8.75244 8.47773 7.99543 8.47773ZM8.00985 16C6.90099 16 5.8607 15.7911 4.88896 15.3733C3.91724 14.9555 3.06839 14.383 2.34241 13.6559C1.61644 12.9287 1.04455 12.0815 0.626738 11.1142C0.208913 10.1469 0 9.10834 0 7.99844C0 6.88854 0.208913 5.85047 0.626738 4.88422C1.04455 3.91796 1.61701 3.07126 2.34413 2.34413C3.07126 1.61702 3.91847 1.04455 4.88576 0.626739C5.85306 0.208913 6.89166 0 8.00156 0C9.11145 0 10.1495 0.208913 11.1158 0.626739C12.082 1.04455 12.9287 1.61702 13.6559 2.34413C14.383 3.07126 14.9555 3.91819 15.3733 4.8849C15.7911 5.85161 16 6.88669 16 7.99015C16 9.09901 15.7911 10.1393 15.3733 11.111C14.9555 12.0828 14.383 12.9316 13.6559 13.6576C12.9287 14.3836 12.0818 14.9555 11.1151 15.3733C10.1484 15.7911 9.11331 16 8.00985 16ZM8 15.0445C8.78272 15.0445 9.55466 14.9201 10.3158 14.6713C11.0769 14.4224 11.7938 14.02 12.4664 13.464C11.7938 12.9695 11.0815 12.5862 10.3296 12.3142C9.5776 12.0421 8.80108 11.9061 8 11.9061C7.19892 11.9061 6.42105 12.0408 5.66639 12.3101C4.91172 12.5795 4.20349 12.9641 3.54169 13.464C4.20889 14.02 4.92307 14.4224 5.6842 14.6713C6.44534 14.9201 7.21727 15.0445 8 15.0445ZM8.00114 7.52227C8.50456 7.52227 8.9193 7.35888 9.24535 7.03208C9.5714 6.70527 9.73443 6.29016 9.73443 5.78673C9.73443 5.28329 9.57102 4.86855 9.24421 4.5425C8.91742 4.21645 8.5023 4.05342 7.99886 4.05342C7.49544 4.05342 7.0807 4.21683 6.75465 4.54363C6.4286 4.87043 6.26557 5.28554 6.26557 5.78898C6.26557 6.29241 6.42898 6.70715 6.75579 7.0332C7.08258 7.35925 7.4977 7.52227 8.00114 7.52227Z" fill="#0F52BA" />
                        </svg>
                    }

                </Link>
            </Typography>

        </ul>
    );


    const [Uname, setUname] = useState();
    useEffect(() => {
        setUname(getCookie('userName'))
    }, [])

    const LoginText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="hover:bg-[#F2F7FF] p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]"
            // style={{ color: `${router.pathname === "/aboutus" ? "#0F52BA" : ""}`, backgroundColor: `${router.pathname === "/aboutus" ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}
            // style={ router.pathname == "/aboutus" ?  aftText : befText ,  {fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal",  lineHeight: "normal", }}
            >

                <Link style={router.pathname == "/aboutus" ? aftText : befText} href="/aboutus" className="flex items-center">
                    About Happy Milan
                </Link>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="hover:bg-[#F2F7FF] p-1 lg:w-[62px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"
            // style={{ color: `${isBlogActive ? "#0F52BA" : ""}`, backgroundColor: `${isBlogActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}
            >
                <Link style={isBlogActive ? aftText : befText} href="/blog" className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="hover:bg-[#F2F7FF] p-1 font-normal rounded-[10px] p-[7px]"
            // style={{ color: `${isSuccessActive ? "#0F52BA" : ""}`, backgroundColor: `${isSuccessActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

            >
                <Link style={isSuccessActive ? aftText : befText} href="/successstories" className="flex items-center">
                    Success Stories
                </Link>
            </Typography>

            {/* {!session ? <> */}
            {!token ? <>
                <Typography
                    id="nav-links"
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"
                    style={{ color: `${isLoginActive ? "#0F52BA" : ""}`, backgroundColor: `${isLoginActive ? "rgba(15, 82, 186, 0.05)" : ""}`, fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

                >
                    {/* <Link
                        href="/login"
                        className="flex items-center"
                        style={{ color: `${isLoginActive ? "#0F52BA" : "#000"}` }}

                    >
                        Member Login{" "}
                        {!isLoginActive ?
                            <Image loading="lazy" width={16} height={16}
                                alt="icon"
                                src="/assests/Black/Vector.svg"
                                className="mr-4  relative left-[15px]"
                            />
                            :
                            <svg className="mr-4  relative left-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M2.77895 12.7773C3.61998 12.1976 4.45669 11.7482 5.28907 11.4292C6.12146 11.1101 7.02511 10.9506 8 10.9506C8.97489 10.9506 9.8807 11.1101 10.7174 11.4292C11.5541 11.7482 12.393 12.1976 13.234 12.7773C13.8462 12.068 14.3009 11.3191 14.5984 10.5305C14.8958 9.7419 15.0445 8.8984 15.0445 8C15.0445 6.0135 14.3671 4.34278 13.0122 2.98784C11.6572 1.63292 9.9865 0.955456 8 0.955456C6.0135 0.955456 4.34278 1.63292 2.98784 2.98784C1.63292 4.34278 0.955455 6.0135 0.955455 8C0.955455 8.8984 1.10633 9.7419 1.40809 10.5305C1.70984 11.3191 2.1668 12.068 2.77895 12.7773ZM7.99543 8.47773C7.23842 8.47773 6.60162 8.2179 6.08503 7.69825C5.56842 7.17862 5.31012 6.54029 5.31012 5.78328C5.31012 5.02628 5.56994 4.38948 6.08959 3.87287C6.60923 3.35628 7.24756 3.09799 8.00457 3.09799C8.76158 3.09799 9.39838 3.35781 9.91497 3.87744C10.4316 4.39708 10.6899 5.0354 10.6899 5.79242C10.6899 6.54943 10.4301 7.18623 9.91041 7.70282C9.39077 8.21943 8.75244 8.47773 7.99543 8.47773ZM8.00985 16C6.90099 16 5.8607 15.7911 4.88896 15.3733C3.91724 14.9555 3.06839 14.383 2.34241 13.6559C1.61644 12.9287 1.04455 12.0815 0.626738 11.1142C0.208913 10.1469 0 9.10834 0 7.99844C0 6.88854 0.208913 5.85047 0.626738 4.88422C1.04455 3.91796 1.61701 3.07126 2.34413 2.34413C3.07126 1.61702 3.91847 1.04455 4.88576 0.626739C5.85306 0.208913 6.89166 0 8.00156 0C9.11145 0 10.1495 0.208913 11.1158 0.626739C12.082 1.04455 12.9287 1.61702 13.6559 2.34413C14.383 3.07126 14.9555 3.91819 15.3733 4.8849C15.7911 5.85161 16 6.88669 16 7.99015C16 9.09901 15.7911 10.1393 15.3733 11.111C14.9555 12.0828 14.383 12.9316 13.6559 13.6576C12.9287 14.3836 12.0818 14.9555 11.1151 15.3733C10.1484 15.7911 9.11331 16 8.00985 16ZM8 15.0445C8.78272 15.0445 9.55466 14.9201 10.3158 14.6713C11.0769 14.4224 11.7938 14.02 12.4664 13.464C11.7938 12.9695 11.0815 12.5862 10.3296 12.3142C9.5776 12.0421 8.80108 11.9061 8 11.9061C7.19892 11.9061 6.42105 12.0408 5.66639 12.3101C4.91172 12.5795 4.20349 12.9641 3.54169 13.464C4.20889 14.02 4.92307 14.4224 5.6842 14.6713C6.44534 14.9201 7.21727 15.0445 8 15.0445ZM8.00114 7.52227C8.50456 7.52227 8.9193 7.35888 9.24535 7.03208C9.5714 6.70527 9.73443 6.29016 9.73443 5.78673C9.73443 5.28329 9.57102 4.86855 9.24421 4.5425C8.91742 4.21645 8.5023 4.05342 7.99886 4.05342C7.49544 4.05342 7.0807 4.21683 6.75465 4.54363C6.4286 4.87043 6.26557 5.28554 6.26557 5.78898C6.26557 6.29241 6.42898 6.70715 6.75579 7.0332C7.08258 7.35925 7.4977 7.52227 8.00114 7.52227Z" fill="#0F52BA" />
                            </svg>
                        }

                    </Link> */}

                    <div className="">
                        <Link href="/login" passHref>
                            <button style={LoginText} id="grad-button" className="flex items-center justify-evenly rounded-full w-[92px] h-[39px]">
                                {/* <Link href="/login" className="flex items-center">Member Login</Link> */}
                                Login
                                {/* <Image width={18} height={18} alt="" src={"/assests/navbar/Profile-icon-grad.svg"} className="" /> */}
                                <Image loading="lazy" width={18} height={18}
                                    alt="icon"
                                    src="/assests/Black/Vector-2.svg"
                                    className=""
                                />
                            </button>
                        </Link>
                    </div>
                </Typography>
            </>
                :
                <>
                    <ProfileImage size={30} onClick={() => alert("Hello")} />
                </>
            }

        </ul >
    );
    return (
        <>
            <AppBar
                sx={{ boxShadow: "none" }}
                className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                style={{ backgroundColor: "#FFF" }}

            >
                <div className="flex items-center justify-between">
                    <Typography


                        className="mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium"
                    >
                        <Link href="/">  <Image loading="lazy" width={148} height={36} alt="logo" src="/heroSec/Happy-milan2.svg" /></Link>
                    </Typography>
                    <div className="flex items-center gap-4">
                        {/* <div className={` w-[600px] hidden lg:block `}>{navList}</div> */}
                        <div className={`${token ? "w-[100%]" : "w-[100%]"} hidden lg:block `}>{navList}</div>

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
                <Collapse open={openNav}>{MobileNavList}</Collapse>
            </AppBar>
        </>
    )
}

export default CommonNavbar