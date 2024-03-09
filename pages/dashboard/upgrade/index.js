import React, { useState } from 'react'
import NavBar from '../NavBar'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import PricingBox from './comp/PricingBox';
import { useRouter } from 'next/router';
import PricingBox2 from './comp/PricingBox2';
import Image from 'next/image';
import ProtectedRoutes from '../../routes/ProtectedRoutes';


function index() {


    const UserText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const TabsText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "28px"
    }
    const [currentTab, setCurrentTab] = useState(1)

    const router = useRouter();

    const data = [
        {
            label: "Silver",
            value: "dashboard",
            curval: "dashboard",

            desc: <PricingBox />,
        },
        {
            label: "Gold",
            value: "profile",
            curval: "profile",

            desc: <PricingBox />,
        },
        {
            label: "Platinum",
            value: "settings",
            curval: "settings",

            desc: <PricingBox />,
        },

    ];

    return (
        <>
        <ProtectedRoutes/>
            <NavBar />
            <div id='PriceBox'>
                <div className='gradient-div grid place-items-center w-full h-full'>
                    <div className='text-center bg-[#FFF]'>
                        <div className='flex flex-col justify-center items-center relative top-[90px] 2xl:top-[90px] xl:top-[90px] lg:top-[80px]  z-[10]  w-full h-full '>
                            <div className='flex justify-between'>
                                <div>
                                <h1 style={UserText} className='2xl:text-[20px] xl:text-[18px] text-[#000]'>Hi Riya, Upgrade Your Profile</h1>
                                </div>
                                <div>
                                    <p id='doItText' style={TabsText} className='cursor-pointer text-[#0F52BA] absolute 2xl:right-[-210px] xl:right-[-180px] lg:right-[-140px] right-[0px] text-[14px]' onClick={() => router.back()}>I’ll do it later</p>
                                </div>
                            </div>
                            <div className='pt-[40px] 2xl:pt-[40px] xl:pt-[30px] lg:pt-[20px]'>
                                <div className='flex justify-center'>

                                    <div className='bg-[#F5FAFF] rounded-[25px] w-[387px] lg:h-[30px] xl:h-[40px] 2xl:h-[50px]'>
                                        <div className='flex justify-between items-center'>

                                            <div id={currentTab === 1 ? 'grad-btn' : ""} onClick={() => setCurrentTab(1)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] 2xl:h-[50px] xl:h-[40px] lg:h-[35px] ${currentTab === 1 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Silver</div>
                                            <div id={currentTab === 2 ? 'grad-btn' : ""} onClick={() => setCurrentTab(2)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] 2xl:h-[50px] xl:h-[40px] lg:h-[35px] ${currentTab === 2 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Gold</div>
                                            <div id={currentTab === 3 ? 'grad-btn' : ""} onClick={() => setCurrentTab(3)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] 2xl:h-[50px] xl:h-[40px] lg:h-[35px] ${currentTab === 3 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Platinum</div>

                                        </div>
                                    </div>
                                </div>
                                <div id='pricing-box' className='mt-[20px]'>
                                    {currentTab === 1 && data[0].desc}
                                    {currentTab === 2 && data[1].desc}
                                    {currentTab === 3 && data[2].desc}
                                </div>
                            </div>
                        </div>

                        <Image alt='menu' width={0} height={350} id='upgrade-bg-img' className='mt-[40px] h-full absolute 2xl:h-[350px] xl:h-[350px] bottom-0 left-0 w-full' src='/assests/dashboard/menu/upgrade-menu-gradient.png' />

                    </div>
                </div>
            </div>

            <div id="PriceBox2" className='pt-[50px]'>
                <PricingBox2 />
            </div>

        </>
    )
}

export default index