"use client";

import React  from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";

function Bluenav() {

    const [openNav, setOpenNav] = React.useState(false);

    const router = useRouter();


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                className="p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"
                style={{ backgroundColor: `${router.pathname === "/aboutus" ? "rgba(255, 255, 255, 0.10)" : ""}` }}

            >

                <Link style={{ fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }} href="/aboutus"> About Happy Milan </Link>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 lg:w-[62px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[10px]"

            >
                <Link style={{ fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", color: "white" }} href="/blog" className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 font-normal rounded-[10px] p-[7px]"
            >
                <Link style={{ color: "white", fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }} href="/successstories" className="flex items-center">
                    Success Stories
                </Link>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"
                style={{ backgroundColor: `${router.pathname === "/login" ? "rgba(255, 255, 255, 0.10)" : ""}` }}
            >
                <Link
                    style={{ color: "white", fontFamily: "Poppins", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", }}
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
        </ul>
    );

    return (
        <>
            <Navbar
                className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
                style={{ backgroundColor: "#0f52ba" }}

            >

                <div className="flex items-center justify-between">
                <Typography
                        as="li"

                        className="mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium"
                    >
                        <Link href="/">  <img src="/happy-milan-logo.svg" /></Link>
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
        </>
    )
}

export default Bluenav