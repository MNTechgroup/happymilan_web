"use client";

import React, { useState } from "react";
import {
    Navbar,
    Typography
} from "@material-tailwind/react";

function Signup() {
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
        background: "white",
    };

    const [isActive, setisActive] = useState(true);
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

    const LoginPage = () => {
        return (
            <>
                <div className="grid place-items-center w-full my-10">
                    <span className="relative right-[20%]" id="scan-qr-text">
                        Scan QR to Login
                    </span>
                    <div className="relative right-[10%] my-[10px]">
                     <img src="/loginassests/login-QR.svg" />
                    </div>
                    <div className="w-[370px] relative my-[10%] right-[9%]">
                        <ul id="login-icons-ul" className="flex justify-evenly">
                            <div id="login-icons-text" className="flex items-center">
                                <img
                                    src="/assests/Black/Contact.svg"
                                    className="w-[16px] h-[16px]"
                                />{" "}
                                <span className="relative left-[10px]">Sign via Phone</span>
                            </div>
                            <span className="w-[1px] h-[26px] bg-[#E8E8E8]"></span>
                            <div id="login-icons-text" className="flex items-center">
                                <img
                                    src="/assests/Black/Message.svg"
                                    className="w-[16px] h-[16px] relative "
                                />
                                <span className="relative left-[10px]">Sign in via Email</span>
                            </div>
                        </ul>
                    </div>
                </div>
            </>
        );
    };

    const SignupPage = () => {
        return (
            <>
                <div className="my-[40%]">
                    <button
                        onClick={() => alert("hello")}
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
                        onClick={() => alert("hello")}
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
                                    href="#"
                                    className="mr-4 cursor-pointer py-1.5 font-medium"
                                >
                                    <img src="happy-milan-logo.svg" />
                                </Typography>
                                <div className="flex items-center gap-4">
                                    <div className="mr-[50px] hidden lg:block">{navList}</div>
                                </div>
                            </div>
                        </div>
                    </Navbar>
                </div>

                <div>
                    <div className="flex items-center lg:items-start flex-col lg:flex-row  lg:justify-evenly">
                        <div className="hidden lg:block relative top-[103px] w-[730px] ">
                            {isActive ? (
                                <img
                                    src="/loginassests/login-group-image.png"
                                    className="w-[730px] h-[671.429px]"
                                />
                            ) : (
                                <img
                                    src="/loginassests/signup-group-img.png"
                                    className="w-[798px] h-[678px]"
                                />
                            )}
                        </div>
                        <div className="relative h-[495px] top-[150px] ">
                            <div id="login-box" className="">
                                <div id="login-wraper">
                                    <h1>Welcome to Happy Milan</h1>
                                </div>
                                <div className="my-[30px] flex justify-center">
                                    <div className="" style={Logindiv}>
                                        <div className="flex">
                                            <button
                                                onClick={() => setisActive(false)}
                                                className=""
                                                style={!isActive ? Logintoggle : NotActiveLogintoggle}
                                            >
                                                New USer?
                                            </button>
                                            <button
                                                onClick={() => setisActive(true)}
                                                className=""
                                                style={!isActive ? NotActiveLogintoggle : Logintoggle}
                                            >
                                                Login
                                            </button>
                                        </div>

                                        {isActive ? <LoginPage /> : <SignupPage />}
                                        {/* <SignInPhone/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
