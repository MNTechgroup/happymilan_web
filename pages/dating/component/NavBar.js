"use client";

import React, { useState } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Badge,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Image from "next/image";
import ProfileImageDating from "./ProfileImageDating";


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
const Username2 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
}
const Activity = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}
const Activity2 = {
    fontFamily: "Poppins",
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

const BoxSdow2 = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
}

function NavBar() {

    // <img 


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

    const Chats = [
        {
            id: 1,
            type: "me",
            name: 'John Doe',
            message: 'Hi! How are you?'
        },
        {
            id: 2,
            type: "other",
            name: 'Jane Smith',
            message: 'Hello!'
        },
        {
            id: 3,
            type: "me",
            name: 'John Doe',
            message: 'I am fine.'
        },
        {
            id: 4,
            type: "other",
            name: 'Jane Smith',
            message: 'Good to hear that.'
        },
        {
            id: 5,
            type: "me",
            name: 'John Doe',
            message: 'How about yourself?'
        },
        {
            id: 6,
            type: "other",
            name: 'Jane Smith',
            message: 'I\'m doing well.'
        },
        {
            id: 7,
            type: "me",
            name: 'John Doe',
            message: 'That is great to hear.'
        },
        {
            id: 8,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 9,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 10,
            type: "me",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 11,
            type: "me",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 12,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 13,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 14,
            type: "me",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 15,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 16,
            type: "other",
            name: 'Jane Smith',
            message: 'Thanks for asking.'
        },
        {
            id: 17,
            type: "other",
            name: 'Jane Smith',
            message: 'hello for asking.'
        },

    ];


    const ChatText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const TimeText = {
        color: "#C8C8C8",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    // <img 
    const list = () => (
        <Box
            role="presentation"

        >
            <div className={`scroll-req-content  h-full bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                <div className="overflow-y-scroll h-full pb-[40px] w-full grid place-items-center">
                    <div className="flex flex-col gap-y-[15px] fixed top-0 bg-[#FFF]">

                        <div className="relative left-[1%] 2xl:left-[1%] xl:left-[7px] flex space-x-[19px]  pt-[20px] items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/user/userProfile.svg" />
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
                            <Image width={18} height={15} src="/assests/Black/Search.svg" className="w-[18px] h-[15px] absolute inline 2xl:left-[10px] xl:left-[10px] left-[10px] mt-[19px]" />
                        </div>

                    </div>
                    <div className="mr-[15px] pt-[20px] flex flex-col space-y-[15px] mt-[150px]">
                        <div onClick={toggleInnerDrawer} className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center">
                            <Image width={47} height={47} className=" w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-3.svg" />
                            <div>
                                <h1 style={Username}>Rishikesh Shah <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-4.svg" />
                            <div>
                                <h1 style={Username}>Ronit Kumar <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-5.svg" />

                            <div>
                                <h1 style={Username}>Priyal Mehta <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-1.svg" />
                            <div>
                                <h1 style={Username}>Rhitik Gajjar <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px] items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-7.svg" />
                            <div>
                                <h1 style={Username}>Meet Patel<span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>
                        <div className="hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px] items-center">
                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />
                            <div>
                                <h1 style={Username}>Niketan Sharma<span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                <p style={Activity} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                            </div>
                        </div>

                        <div className="hidden">
                            <button className="w-[278px] h-[40px] rounded-[10px] bg-[#FAFAFA]">View All</button>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer anchor="right" BackdropProps={{ style: { opacity: 0 } }} open={innerDrawerOpen} onClose={toggleInnerDrawer}>
                <div className="2xl:w-[750px] xl:w-[650px]">
                    <div className="flex space-x-[10px]">
                        <div className={` scroll-req-content  h-full bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                            <div className="overflow-y-scroll h-full pb-[40px] w-full grid place-items-center">
                                <div className="2xl:w-[320px] xl:w-[280px] flex flex-col gap-y-[15px] fixed top-0 bg-[#FFF]">

                                    <div className="bg-[#FFF] relative 2xl:left-[10px] xl:left-[10px] flex space-x-[19px]  pt-[20px] items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/user/userProfile.svg" />
                                        <div>
                                            <h1 style={UserProfileName} className="text-bold text-[14px]">Riya M Shah</h1>
                                            <p style={userStatus} className="text-[#0091FF]">Online</p>
                                        </div>
                                    </div>

                                    <div className=" h-[1px] 2xl:w-[270px] xl:w-[230px] bg-[#ECECEC]"></div>

                                    <div className="ml-[-0px]">
                                        <input
                                            onClick={handleContentClick}
                                            type="text" placeholder="Search Member"
                                            style={Text2}
                                            className="pl-[40px] w-[270px] xl:w-[230px] 2xl:w-[270px] h-[50px] 2xl:h-[50px] xl:h-[40px] oultine-none focus:outline-none text-[black] focus:border-[1px] focus:border-[black] rounded-[10px] bg-[#FAFAFA] text-[#727272]" />
                                        <Image width={18} height={15} src="/assests/Black/Search.svg" className="w-[18px] h-[15px] absolute inline 2xl:left-[8px] xl:left-[10px] mt-[19px] 2xl:mt-[18px] xl:mt-[13px]" />
                                    </div>

                                </div>
                                <div className="mr-[55px] pt-[20px] flex items-center justify-center flex-col space-y-[15px] 2xl:mt-[150px] xl:mt-[130px]">
                                    <div className="bg-[#F4F9FF]  rounded-[10px]  xl:w-[230px] 2xl:w-[270px] p-[10px] flex space-x-[19px]  items-center">
                                        <Image width={47} height={47} onClick={toggleInnerDrawer} className="ml-[5px] cursor-pointer w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-3.svg" />
                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Rishikesh Shah <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#F4F9FF] xl:w-[230px] 2xl:w-[270px] rounded-[10px] cursor-pointer flex  p-[10px] space-x-[19px]  items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] ml-[5px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-4.svg" />
                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Ronit Kumar <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#F4F9FF] xl:w-[230px] 2xl:w-[270px] rounded-[10px] cursor-pointer flex  p-[10px] space-x-[19px]  items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] ml-[5px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-5.svg" />

                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Priyal Mehta <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#F4F9FF] xl:w-[230px] 2xl:w-[270px] rounded-[10px] cursor-pointer flex  p-[10px] space-x-[19px]  items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] ml-[5px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-1.svg" />
                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Rhitik Gajjar <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#F4F9FF] xl:w-[230px] 2xl:w-[270px] rounded-[10px] cursor-pointer flex  p-[10px] space-x-[19px] items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] ml-[5px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-7.svg" />
                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Meet Patel<span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#F4F9FF] xl:w-[230px] 2xl:w-[270px] rounded-[10px] cursor-pointer flex  p-[10px] space-x-[19px] items-center">
                                        <Image width={47} height={47} className="w-[47px] h-[47px] ml-[5px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />
                                        <div>
                                            <h1 style={Username2} className="text-[14px] 2xl:text-[14px] xl:text-[12px]">Niketan Sharma<span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]" > Hi, I am bus now. Can I talk...</p>
                                        </div>
                                    </div>


                                    <div className="hidden">
                                        <button className="w-[278px] h-[40px] rounded-[10px] bg-[#FAFAFA]">View All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative left-[-60px] z-[10] w-[1px] h-[100vh] bg-[#E6E6E6]">
                            <div className="w-[1px] h-[100px] 2xl:mt-[280px] xl:mt-[300px] mt-[280px] bg-[black]"></div>
                        </div>

                        {/* Chat Section */}

                        <div className="fixed">
                            <div className="space-y-[20px] relative left-[300px] 2xl:w-[400px] xl:w-[300px]">
                                <div className="fixed 2xl:w-[400px] xl:w-[300px]">
                                    <div className="w-full mt-[20px] flex  justify-between items-center ">
                                        <div className="relative 2xl:left-0 xl:left-[-40px] flex space-x-[19px]  items-center">
                                            <Image width={47} height={47} className="w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-3.svg" />
                                            <div>
                                                <h1 style={Username}>Rishikesh Shah</h1>
                                                <p style={userStatus} className="text-[#0091FF]">Online</p>

                                            </div>
                                        </div>

                                        <div className="">
                                            <Image width={4} height={16} className="2xl:w-auto 2xl:h-auto xl:w-[5px] xl:h-[14px]" src="/assests/dashboard/chats/chat-more-icon.svg" />
                                        </div>

                                    </div>
                                    <div className=" 2xl:ml-[-10px] xl:ml-[-50px] mt-[15px] h-[1px] w-[100vh] bg-[#ECECEC]"></div>

                                    <div className="2xl:pl-[5px] xl:pl-[0px] 2xl:ml-0 xl:ml-[-35px]  overflow-y-scroll w-[100%] h-[500px]  2xl:pt-[50px] xl:pt-[30px] 2xl:pb-[60px] xl:pb-[100px]">

                                        <div className="flex flex-col space-y-[20px]">

                                            {
                                                Chats.map(({ type, message }) => {

                                                    if (type === 'me') {
                                                        return (
                                                            <>

                                                                <div className=" flex justify-end  space-x-[15px]">
                                                                    <div className="flex flex-col justify-center rounded-[10px] bg-[#FAFAFA] p-[10px]">
                                                                        <h1 style={ChatText} className="text-[12px]">{message}</h1>
                                                                        <p style={TimeText} className="mt-[10px] mr-[5px] text-right">{"08:15 am"}</p>
                                                                    </div>
                                                                    <div>
                                                                        <Image width={40} height={40} src="/assests/dashboard/user/userProfile.svg" className="w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]" />
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="flex justify-start  space-x-[15px]">
                                                                    <div>
                                                                        <Image width={40} height={40} src="/assests/dashboard/request/req-3.svg" className="w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]" />
                                                                    </div>
                                                                    <div className="flex flex-col justify-center rounded-[10px] bg-[#FAFAFA] p-[10px]">
                                                                        <h1 className="text-[12px]">{message}</h1>
                                                                        <p style={TimeText} className="mt-[10px] ml-[5px] text-left">{"08:15 am"}</p>
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>


                                    </div>
                                    <div className=" fixed 2xl:bottom-[0px] xl:bottom-[0px] bg-[#FFF] w-[500px] 2xl:w-[500px] xl:w-[380px] 2xl:pl-0 xl:pl-[35px] 2xl:right-[-60px] xl:right-0 h-[100px]  space-y-[10px]">

                                        <div className="flex relative 2xl:left-[-40px] xl:left-[-35px] justify-center space-x-[20px]">
                                            <input type="text" placeholder="Type message here" className="focus:outline-none w-[333px] h-[50px] border-[1px] border-[#6D6D6D] rounded-[10px] pl-[20px]" /> <button><Image width={29} height={24} src="/assests/dashboard/chats/send-icon.svg" /></button>
                                        </div>
                                        <div className="2xl:ml-[20px] xl:ml-[-32px]">
                                            <ul className="flex space-x-[20px]">
                                                <li><Image width={23} height={20} src="/assests/dashboard/chats/camera-icon.svg" /></li>
                                                <li><Image width={11} height={20} src="/assests/dashboard/chats/document-attach-icon.svg" /></li>
                                            </ul>
                                        </div>

                                    </div>


                                </div>





                            </div>


                        </div>

                    </div>
                </div>
            </Drawer>
        </Box >
    );
    //For Message Notification input




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
                    <div className="mr-[10px] flex flex-col space-y-[32px] pt-[80px]">
                        <div></div>
                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className=" flex pl-[6px]  items-center">
                                <div className="">
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-1.svg" />
                                </div>
                                <div className="pl-[40px]">
                                    <h1 style={Username}>Rihan Shah</h1>
                                    <h1 style={Activity} >Sent you a following request</h1>
                                </div>
                            </div>
                            <div className="flex justify-center relative top-[-10px]">
                                <div className="w-[100px] flex space-x-[20px]">
                                    <Image width={28} height={28} src="/assests/dashboard/request/ignore-req-icon.svg" />
                                    <Image width={28} height={28} src="/assests/dashboard/request/accept-req-icon.svg" />
                                </div>
                            </div>
                        </div>

                        {/* Likes You Request  */}

                        <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className=" flex pl-[6px] items-center">
                                <div>
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-2.svg" />
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
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-3.svg" />
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
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-4.svg" />
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
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-5.svg" />
                                </div>
                                <div className="pl-[40px]">
                                    <h1 style={Username}>Rihan Shah</h1>
                                    <h1 style={Activity} >Sent you a following request</h1>
                                </div>
                            </div>
                            <div className="flex justify-center relative top-[-10px]">
                                <div className="w-[100px] flex space-x-[20px]">
                                    <Image width={28} height={28} src="/assests/dashboard/request/ignore-req-icon.svg" />
                                    <Image width={28} height={28} src="/assests/dashboard/request/accept-req-icon.svg" />
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

    //For Nearby Places

    // const [secondAnchorEl, setSecondAnchorEl] = React.useState(null);
    // const secondOpen = Boolean(secondAnchorEl);

    // const handleSecondClick = (event) => {
    //     setSecondAnchorEl(event.currentTarget);
    // };

    // const handleSecondClose = () => {
    //     setSecondAnchorEl(null);
    // };


    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    //inner Drawer For Chat

    const [innerDrawerOpen, setInnerDrawerOpen] = useState(false);


    const toggleInnerDrawer = () => {
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

            <div class="min-h-screen flex flex-row bg-gray-100">
                <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div class="flex items-center justify-center">


                        <div className="flex space-x-[20px] pl-[10px] pr-[10px] pt-[20px] pb-[20px] border-b-[1px] border-gray-200">
                            <div>
                                <Image width={40} height={40} onClick={() => router.push("/dashboard/profile")} className="cursor-pointer" src="/assests/dashboard/user/userProfile.svg" />
                            </div>
                            <div>
                                <h1 style={Username}>Riya M Shah</h1>
                                <p style={userStatus} className="text-[#0091FF]">Online</p>

                            </div>
                            <div className="grid place-items-center">
                                <span class=""><i class={`bx bx-dots-horizontal-rounded`}></i></span>
                            </div>
                        </div>


                    </div>
                    <ul class="flex flex-col py-0 border-b-[1px] border-gray-200">
                        <li>

                            <Link href="/dashboard" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-home ${router.pathname === "/dashboard" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard" ? "text-[#0F52BA]" : ""}`}>Home</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/searchmember" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-search ${router.pathname === "/dashboard/searchmember" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/searchmember" ? "text-[#0F52BA]" : ""}`}>Search Member</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/accepted" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-check-circle  ${router.pathname === "/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}>Accepted</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/recentlyviewed" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-search ${router.pathname === "/dashboard/recentlyviewed" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/recentlyviewed" ? "text-[#0F52BA]" : ""}`}>recentlyviewed</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/newrequest" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-bell ${router.pathname === "/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}>New Requests</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/shortlists" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-star ${router.pathname === "/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}>Shortlists</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/sent" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-search ${router.pathname === "/dashboard/sent" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/sent" ? "text-[#0F52BA]" : ""}`}>Sent</span>
                            </Link>
                        </li>
                    </ul>
                    <ul class="flex flex-col py-4">
                        <li>

                            <Link href="/dashboard/cancelled" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-dislike ${router.pathname === "/dashboard/cancelled" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/cancelled" ? "text-[#0F52BA]" : ""}`}>Cancelled</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/blocked" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-block ${router.pathname === "/dashboard/blocked" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/blocked" ? "text-[#0F52BA]" : ""}`}>Blocked</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/dashboard/deleted" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class={`bx bx-trash ${router.pathname === "/dashboard/deleted" ? "text-[#0F52BA]" : ""}`}></i></span>
                                <span class={`text-sm font-medium ${router.pathname === "/dashboard/deleted" ? "text-[#0F52BA]" : ""}`}>Deleted</span>
                            </Link>
                        </li>
                        <li className="hidden">
                            <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                                <span class="text-sm font-medium">Logout</span>
                            </a>
                        </li>
                        {isUpgradeActive ? "" : <>
                            <li>
                                <div className="relative left-[14px] top-[10px]">
                                    <button id="grad-btn" onClick={() => router.push("/dashboard/upgrade")} style={Text2} className="text-[#FFF] mr-[2px] text-center flex items-center justify-center w-[110px] h-[40px] bg-[#0F52BA] rounded-[8px]">Upgrade<Image width={17} height={14} className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>
                                </div>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </Box>
    );

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
                    <button id="grad-btn" style={Text2} onClick={() => router.push("/dashboard/upgrade")} className="text-[#FFF] text-center flex items-center justify-center w-[123px] h-[40px] bg-[#0F52BA] rounded-[8px]">Upgrade<Image width={23} height={23} className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>
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
                    <Image width={26} height={20} className="cursor-pointer" onClick={toggleDrawer('right', true)} src="/assests/dashboard/icon/notification.svg" />
                </Badge>

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"

                className="p-1 font-normal poppins rounded-[10px]"
            >



                <Image width={17} height={20} className="cursor-pointer" onClick={toggleNotification('right', true)} src="/assests/dashboard/icon/notification-icon.svg" />

            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] p-[7px]"

            >
                <button aria-controls="second-fade-menu" aria-haspopup="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1.48288 20C1.07718 20 0.728608 19.8542 0.437165 19.5625C0.145722 19.2708 0 18.922 0 18.516C0 18.1099 0.145722 17.7611 0.437165 17.4694C0.728608 17.1777 1.07718 17.0319 1.48288 17.0319C1.88861 17.0319 2.2372 17.1777 2.52864 17.4694C2.82006 17.7611 2.96577 18.1099 2.96577 18.516C2.96577 18.922 2.82006 19.2708 2.52864 19.5625C2.2372 19.8542 1.88861 20 1.48288 20ZM9.99222 20C9.58652 20 9.23795 19.8542 8.9465 19.5625C8.65506 19.2708 8.50934 18.922 8.50934 18.516C8.50934 18.1099 8.65506 17.7611 8.9465 17.4694C9.23795 17.1777 9.58652 17.0319 9.99222 17.0319C10.3979 17.0319 10.7465 17.1777 11.0379 17.4694C11.3294 17.7611 11.4751 18.1099 11.4751 18.516C11.4751 18.922 11.3294 19.2708 11.0379 19.5625C10.7465 19.8542 10.3979 20 9.99222 20ZM18.5016 20C18.0958 20 17.7473 19.8542 17.4558 19.5625C17.1644 19.2708 17.0187 18.922 17.0187 18.516C17.0187 18.1099 17.1644 17.7611 17.4558 17.4694C17.7473 17.1777 18.0958 17.0319 18.5016 17.0319C18.9073 17.0319 19.2558 17.1777 19.5473 17.4694C19.8387 17.7611 19.9844 18.1099 19.9844 18.516C19.9844 18.922 19.8387 19.2708 19.5473 19.5625C19.2558 19.8542 18.9073 20 18.5016 20ZM1.48288 11.484C1.07718 11.484 0.728608 11.3382 0.437165 11.0465C0.145722 10.7549 0 10.406 0 10C0 9.59398 0.145722 9.24514 0.437165 8.95347C0.728608 8.6618 1.07718 8.51596 1.48288 8.51596C1.88861 8.51596 2.2372 8.6618 2.52864 8.95347C2.82006 9.24514 2.96577 9.59398 2.96577 10C2.96577 10.406 2.82006 10.7549 2.52864 11.0465C2.2372 11.3382 1.88861 11.484 1.48288 11.484ZM9.99222 11.484C9.58652 11.484 9.23795 11.3382 8.9465 11.0465C8.65506 10.7549 8.50934 10.406 8.50934 10C8.50934 9.59398 8.65506 9.24514 8.9465 8.95347C9.23795 8.6618 9.58652 8.51596 9.99222 8.51596C10.3979 8.51596 10.7465 8.6618 11.0379 8.95347C11.3294 9.24514 11.4751 9.59398 11.4751 10C11.4751 10.406 11.3294 10.7549 11.0379 11.0465C10.7465 11.3382 10.3979 11.484 9.99222 11.484ZM18.5016 11.484C18.0958 11.484 17.7473 11.3382 17.4558 11.0465C17.1644 10.7549 17.0187 10.406 17.0187 10C17.0187 9.59398 17.1644 9.24514 17.4558 8.95347C17.7473 8.6618 18.0958 8.51596 18.5016 8.51596C18.9073 8.51596 19.2558 8.6618 19.5473 8.95347C19.8387 9.24514 19.9844 9.59398 19.9844 10C19.9844 10.406 19.8387 10.7549 19.5473 11.0465C19.2558 11.3382 18.9073 11.484 18.5016 11.484ZM1.48288 2.96808C1.07718 2.96808 0.728608 2.82225 0.437165 2.53061C0.145722 2.23894 0 1.89008 0 1.48404C0 1.07802 0.145722 0.729175 0.437165 0.437505C0.728608 0.145835 1.07718 0 1.48288 0C1.88861 0 2.2372 0.145835 2.52864 0.437505C2.82006 0.729175 2.96577 1.07802 2.96577 1.48404C2.96577 1.89008 2.82006 2.23894 2.52864 2.53061C2.2372 2.82225 1.88861 2.96808 1.48288 2.96808ZM9.99222 2.96808C9.58652 2.96808 9.23795 2.82225 8.9465 2.53061C8.65506 2.23894 8.50934 1.89008 8.50934 1.48404C8.50934 1.07802 8.65506 0.729175 8.9465 0.437505C9.23795 0.145835 9.58652 0 9.99222 0C10.3979 0 10.7465 0.145835 11.0379 0.437505C11.3294 0.729175 11.4751 1.07802 11.4751 1.48404C11.4751 1.89008 11.3294 2.23894 11.0379 2.53061C10.7465 2.82225 10.3979 2.96808 9.99222 2.96808ZM18.5016 2.96808C18.0958 2.96808 17.7473 2.82225 17.4558 2.53061C17.1644 2.23894 17.0187 1.89008 17.0187 1.48404C17.0187 1.07802 17.1644 0.729175 17.4558 0.437505C17.7473 0.145835 18.0958 0 18.5016 0C18.9073 0 19.2558 0.145835 19.5473 0.437505C19.8387 0.729175 19.9844 1.07802 19.9844 1.48404C19.9844 1.89008 19.8387 2.23894 19.5473 2.53061C19.2558 2.82225 18.9073 2.96808 18.5016 2.96808Z" fill="black" />
                    </svg>
                </button>


            </Typography>
            <Typography
                id="nav-links"
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal rounded-[10px] p-[7px] rounded-[10px]"

            >

                <Tooltip title="Account settings" id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>

                    {/* <Image width={40} height={40} className="cursor-pointer" src="/assests/dashboard/user/userProfile.svg" /> */}

                    <ProfileImageDating Username={"Riya Shah"} Size={40} />

                </Tooltip>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    className="ml-[-25px] mt-[10px]"
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
                            transition: 'none',
                        },
                    }}

                >
                    <div className="pt-[20px] w-[278px] h-[410px] bg-[#FFF]" style={BoxSdow2}>
                        <div className="flex flex-col space-y-[20px]">

                            <div className="flex space-x-[39px] pl-[24px] items-center">
                                <Image width={47} height={47} className="w-[47px] h-[47px]" src="/assests/dashboard/user/userProfile.svg" />
                                <div>
                                    <ul className="relative right-[18px] flex items-center space-x-[10px]">
                                        <li className=""><Image width={8} height={8} src="/assests/dashboard/menu/verfied-tick.svg" /></li>
                                        <li style={planPrice2} className="text-[12px]"><h1>Gold</h1></li>
                                    </ul>
                                    <h1 style={planPrice} className="text-[12px]">One Month</h1>
                                </div>
                            </div>

                            <div className="pl-[24px] ">
                                <h1 style={UserProfileName} className="text-[#000]">Riya M Shah</h1>
                                <p style={userId} className="text-[#50545A]">ID: HM1002021</p>
                                <div className="pt-[8px]">
                                    <button id="grad-btn" onClick={() => router.push("/dashboard/upgrade")} style={Text2} className="text-[#FFF] mr-[2px] text-center flex items-center justify-center w-[123px] h-[40px] bg-[#0F52BA] rounded-[8px]">Upgrade<Image width={23} height={23} className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>

                                </div>
                            </div>
                            <div className="w-full grid place-items-center">
                                <div className="bg-[#EBEBEB] h-[1px] w-[230px]"></div>
                            </div>
                            <div className="pt-[0px] flex  flex-col space-y-[21px]">
                                <ul style={Text4} className="pl-[30px] text-[#000] space-y-[21px]">

                                    <li className="cursor-pointer flex items-center space-x-[10px]">
                                        <Link href="/dashboard/profile" className="cursor-pointer flex items-center space-x-[10px]" > <Image width={17.223} height={16} src="/assests/dashboard/menu/menu-profile.svg" className="w-[17.223px] h-[16px]" />
                                            <h1>My Profile</h1></Link>
                                    </li>
                                    <li className="flex items-center space-x-[10px]"><Image width={17.223} height={16} src="/assests/dashboard/menu/menu-seting.svg" className="w-[17.223px] h-[16px]" /><h1><Link href="/dashboard/seting">Accounts</Link></h1></li>
                                    <li className="flex items-center space-x-[10px]"><Image width={17.223} height={16} src="/assests/dashboard/menu/menu-lock.svg" className="w-[17.223px] h-[16px]" /><h1>Privacy Policy</h1></li>
                                </ul>

                                <div className="flex justify-center">
                                    <button className="w-[230px] h-[44px] text-[black] bg-[#F7F7F7] rounded-[10px] flex justify-center items-center" style={Text4}><h1>Log Out </h1><Image width={15} height={18} className="relative left-[50px]" src="/assests/dashboard/menu/menu-logout.svg" /></button>
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
                <div className="flex items-center flex-row-reverse lg:flex-row justify-between">
                    <Typography
                        as="li"

                        className="mr-4 cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        <Link href="/">  <Image width={148} height={36} src="/heroSec/Happy-milan2.svg" /></Link>
                    </Typography>
                    <Typography
                        as="li"
                        id="id-search-centerlized"
                        className=" hidden absolute 2xl:left-[335px] xl:left-[310px] 2xl:flex xl:flex cursor-pointer py-1.5 lg:ml-[0px] font-medium"
                    >
                        {
                            isUpgradeActive ? "" : <>
                                <input type='text' className='text-[#000] outline-none   pl-[10px] w-[200px] h-[40px] rounded-[8px] bg-[#F7F7F7] border-none ouline-none focus:border-[1px] focus:border-[black] pr-[40px]' placeholder='Profile ID Search' /> <Image width={15} height={14} src="/assests/Black/Search.svg" className="relative right-[30px]" />

                            </>
                        }

                    </Typography>
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
        </>
    )
}

export default NavBar