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
    const [currentTab, setCurrentTab] = useState("dashboard")

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
            <NavBar />
            <div className='gradient-div grid place-items-center w-full h-full'>
                <div className='text-center bg-[#FFF]'>
                    <div className='flex flex-col justify-center items-center relative top-[90px]  z-[10]  w-full h-full '>
                        <div className='flex justify-between'>
                        <h1 style={UserText} className='2xl:text-[20px] xl:text-[18px] text-[#000]'>Hi Riya, Upgrade Your Profile</h1>
                        <p style={TabsText} className='cursor-pointer text-[#0F52BA] absolute 2xl:right-[-160px] xl:right-[-80px] right-[0px] text-[14px]' onClick={()=>router.back()}>I’ll do it later</p>
                        </div>
                        <div className='pt-[40px] 2xl:pt-[40px] xl:pt-[30px]'>
                            <Tabs value="dashboard">
                                <div className='flex justify-center'>
                                    <TabsHeader className='bg-[#F5FAFF] rounded-[25px] w-[387px] xl:h-[40px] 2xl:h-[50px]'
                                        indicatorProps={{
                                            className: "bg-[#0F52BA] shadow-none rounded-full",
                                        }}
                                         >
                                        {data.map(({ label, value }) => (
                                            <Tab onClick={() => setCurrentTab(value)} className='bg-[#F5FAFF] rounded-[25px]' key={value} value={value}>
                                                <div style={TabsText} className={`${currentTab === value ? "text-[white]" : "text-[black]"} text-[14px]  flex items-center gap-2`}>
                                                    {label}
                                                </div>
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                </div>
                                <TabsBody 
                                animate={{
                                    initial: { y: 0, x: 0 },
                                    mount: { y: 0, x: 0 },
                                    unmount: { y: 0, x: 0 },
                                 }}
                                 >
                                    {data.map(({ value, desc }) => (
                                        <TabPanel className=' w-[990px]' key={value} value={value}>
                                            {desc}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>
                        </div>
                    </div>

                    <img className='mt-[20px] absolute 2xl:h-[350px] xl:h-[350px] bottom-0 left-0 w-full' src='/assests/dashboard/menu/upgrade-menu.png' />

                </div>
            </div>

        </>
    )
}

export default index