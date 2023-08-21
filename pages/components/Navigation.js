"use client";
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import HeroSection from "./HeroSection";
import Link from "next/link";

function Sidebar() {
    const [openNav, setOpenNav] = React.useState(false);

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
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a
                    href="#"
                    className="flex items-center poppins"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    About Happy Milan
                </a>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal poppins"
            >
                <a style={{ color: "white" }} href="#" className="flex items-center">
                    Blogs
                </a>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a style={{ color: "white" }} href="#" className="flex items-center">
                    Success Stories
                </a>
            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link
                    style={{ color: "white" }}
                    href="/login"
                    className="flex items-center"
                >
                    Member Login{" "}
                    <img
                        src="/assests/Black/Vector-2.svg"
                        className="mr-10  relative left-[15px]"
                    />
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            <div className="max-h-[768px] w-auto">
            <Navbar
                    className="z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white"
                    style={{ background: "#EF4136" }}
                >

                    <div className="flex items-center justify-between">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                     <img src="/asset-1-1.svg" />
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="mr-14 hidden lg:block">{navList}</div>
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
                    <MobileNav open={openNav}>{navList}</MobileNav>
                </Navbar>

                {/* <!-- Main Component --> */}

                <div className="">
                    <HeroSection />
                </div>
            </div>
        </>
    );
}

export default Sidebar;
