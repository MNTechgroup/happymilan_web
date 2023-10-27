"use client";
import React, { useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    Collapse,
    IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

function Sidebar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const [token, settoken] = useState();
    useEffect(() => {
        settoken(localStorage.getItem('token'))
    }, [])

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
                        <img
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
                        className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"
                        style={{ fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}

                    >
                        <Link
                            style={{ color: "white" }}
                            href="/"
                            className="flex items-center"
                        >
                            <h1> {localStorage.getItem('email')} </h1>{" "}
                            <img
                                src="/assests/Black/Vector-2.svg"
                                className="mr-4  relative left-[15px]"
                            />
                        </Link>
                        {/* <SpeedDial placement="top">
                            <SpeedDialHandler> */}
                        {/* Email   */}

                        {/* <img
                                    src={ProfileImage}
                                    alt="img"
                                    className="mr-4  relative left-[15px] w-[35.22px] h-[35.22px] rounded-full"
                                /> */}

                        {/* </SpeedDialHandler>
                            <SpeedDialContent className="bg-none border-none">
                                <SpeedDialAction className="bg-none border-none">
                                    <h1 className="text-[black]" onClick={HandleLogout}>Log Out</h1>
                                </SpeedDialAction>
                            </SpeedDialContent>
                        </SpeedDial> */}

                    </Typography>
                </>}
        </ul>
    );


    return (
        <>
            <div className="h-[20px] w-full">
                <Navbar
                    className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                    style={{ backgroundColor: "#ef4136" }}

                >

                    <div className="flex items-center justify-between">

                        <Typography
                            as="li"

                            className="mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium"
                        >
                            <Link href="/">  <img src="/asset-1-1.svg" /></Link>
                        </Typography>

                        {/* <Typography
                            className="mr-4 cursor-pointer py-1.5 font-medium ml-[50px]"
                        >
                       
                    <Link href="/"> <img src="/asset-1-1.svg" /> </Link>
                        </Typography> */}
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
                    <Collapse open={openNav}>{navList}</Collapse>
                </Navbar>

                {/* <!-- Main Component --> */}


            </div>
        </>
    );
}

export default Sidebar;
