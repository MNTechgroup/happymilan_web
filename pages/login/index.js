"use client";

import React, { useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    Input,
} from "@material-tailwind/react";

import LoginPage from "../logincomp/Loginpage";
import SignInEmail from "../logincomp/SignEmail";

function login() {
    const Logindiv = {
        width: "300px",
        height: "50px",
        borderRadius: "10px",
        background: "#F9F9F9",
    };

    const Logintoggle = {
        width: "150px",
        height: "50px",
        color: "white",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        flexShrink: "0",
        borderRadius: "10px",
        background: "linear-gradient(199deg, #EF4136 0%, #2B3990 100%)",
    };
    const NotActiveLogintoggle = {
        width: "150px",
        height: "50px",
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        flexShrink: "0",
        borderRadius: "10px",
        background: "#f8f8f8",
    };

    const [isActive, setisActive] = useState(false);
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
                <a href="#" className="flex items-center">
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
                <a href="#" className="flex items-center">
                    Success Stories
                </a>
            </Typography>
        </ul>
    );


    const [phone, setphone] = useState(false)
    const [viaEmail, setviaEmail] = useState(false)

    const HandleClick = () => {
        setphone(false)
    }

    const SignupPage = () => {
        return (
            <>

                <div className="my-[40%]">
                    <button
                        onClick={() => setphone(true)}
                        id="signUp-sec-1"
                        className="my-5 grid place-items-center cursor-pointer"
                    >
                        <div className="flex">
                            <img
                                className="relative right-[10%]"
                                src="/assests/Blue/Contact.svg"
                            />
                            <span>Sign up using Phone</span>
                        </div>
                    </button>
                    <button
                        onClick={() => setviaEmail(true)}
                        id="signUp-sec-1"
                        className="my-5 grid place-items-center cursor-pointer"
                    >
                        <div className="flex">
                            <img
                                className="relative right-[10%]"
                                src="/assests/Blue/Message.svg"
                            />
                            <span>Sign up using Email</span>
                        </div>
                    </button>
                </div>
            </>
        );
    };

    const SignInPhone = () => {
        return (
            <>
                <div className="">
                    <div className="flex justify-center p-5 py-[30px]">
                        <img src="/assests/Black/Contact.svg" className="m-2" />
                        <h1 id="signin-phone-title" className="m-2">Sign up using Mobile</h1>
                    </div>
                    <div>
                        <div className="grid place-items-center">
                            <div className="w-72 m-2">
                                <Input label="Phone Number" />
                            </div>
                            <div className="w-72 m-2">
                                <Input label="OTP" />
                            </div>
                            <h2 id="signin-phone-OtpText">OTP will be sent your mobile number</h2>
                            <h1 id="signin-phone-Resend" className="my-[30px]">Resend</h1>
                            <div className="">
                                <button className="flex items-center  w-[300px] h-[50px]" id="Send-otp-btn"><span className="mx-auto">Send OTP</span> <img src="/vector.svg" className="mr-[15px]" /></button>
                            </div>
                            <div>
                                <h1 className="cursor-pointer my-[50px]" onClick={HandleClick} id="already-signup-text">Already Registered? Login</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    };


    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    return (
        <>
            <div className="w-full h-screen overflow-scroll md:overflow-hidden bg-[#0F52BA]">
                <div className="max-h-[768px] w-auto">
                    <Navbar
                        className="z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white"
                        style={{ background: "#0F52BA" }}
                    >
                        <div className="">
                            <div className="flex items-center justify-between text-blue-gray-900">
                                <Typography
                                    as="a"
                                    href="/"
                                    className="mr-4 cursor-pointer py-1.5 font-medium"
                                >
                                    <img src="happy-milan-logo.svg" />
                                </Typography>
                                <div className="flex items-center gap-4">
                                    <div className="mr-[50px] hidden lg:block">{navList}</div>
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
                        </div>
                        <MobileNav open={openNav}>{navList}</MobileNav>

                    </Navbar>
                </div>

                <div>
                    <div className="flex items-center lg:items-start flex-col lg:flex-row  lg:justify-evenly">
                        <div className="hidden lg:block relative top-[90px] w-[840px] ">

                            <img
                                src="/loginassests/signup-group-img.png"
                                className="w-full lg:w-full h-full"
                            />
                        </div>
                        <div className="h-full  relative h-[495px] top-[220px] ">
                            <div id="login-box" className="w-[420px] h-[440px]">
                                {viaEmail ? <SignInEmail setviaEmail={setviaEmail} /> : <>
                                    {phone ? <SignInPhone /> :
                                        <>
                                            <div id="login-wraper">
                                                <h1>Welcome to Happy Milan</h1>
                                            </div>
                                            <div className="my-[30px] flex justify-center">
                                                <div className="" style={Logindiv}>

                                                    <div className="flex">
                                                        <button
                                                            onClick={() => { setisActive(false) }}
                                                            className=""
                                                            style={!isActive ? Logintoggle : NotActiveLogintoggle}
                                                        >
                                                            New USer?
                                                        </button>
                                                        <button
                                                            onClick={() => { setisActive(true) }}
                                                            className=""
                                                            style={!isActive ? NotActiveLogintoggle : Logintoggle}
                                                        >
                                                            Login
                                                        </button>
                                                    </div>

                                                    {isActive ? <LoginPage /> : <SignupPage />}


                                                </div>
                                            </div>
                                        </>}
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default login;
