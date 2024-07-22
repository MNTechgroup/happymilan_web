import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { useRouter } from 'next/router';
import Image from 'next/image';

function PricingBox2() {

    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const PlanText = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "28px"
    }

    const TabsText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const [currentTab, setCurrentTab] = useState(1)

    const data = [
        {
            label: "Silver",
            value: "dashboard",
            curval: "dashboard",
        },
        {
            label: "Gold",
            value: "profile",
            curval: "profile",
        },
        {
            label: "Platinum",
            value: "settings",
            curval: "settings",
        },

    ];


    const router = useRouter();
    return (
        <>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-4 mx-auto sm:p-10">
                    <div className="mb-12 space-y-4 text-center">
                        <h1 style={Title} className="text-4xl font-semibold">Hi Riya, Upgrade Your Profile</h1>

                        {/* Pricing Labels  Start */}
                        <div>
                            <div className='pt-[10px] 2xl:pt-[40px] xl:pt-[30px] lg:pt-[20px]'>
                                <div className='flex justify-center'>

                                    <div className='bg-[#F5FAFF] rounded-[25px] w-[300px] h-[40px]'>
                                        <div className='flex justify-between items-center'>

                                            <div id={currentTab === 1 ? "grad-btn" : ""} onClick={() => setCurrentTab(1)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 1 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Silver</div>
                                            <div id={currentTab === 2 ? "grad-btn" : ""} onClick={() => setCurrentTab(2)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 2 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Gold</div>
                                            <div id={currentTab === 3 ? "grad-btn" : ""} onClick={() => setCurrentTab(3)} className={`cursor-pointer flex items-center justify-center  rounded-[25px] w-[131px] h-[40px] ${currentTab === 3 ? "bg-[#0F52BA] text-[white]" : "text-black"} `}>Platinum</div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Pricing Labels  End */}

                    </div>
                    <div id='pricebox-2-main' className="relative left-[10px] w-full place-items-center grid max-w-md grid-cols-1 gap-6 pt-[0px] auto-rows-fr lg:grid-cols-3 lg:max-w-full">

                        {/* Price Box 1 Start  */}

                        <div className=''>
                            <Swiper

                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="mySwiper relative w-[300px]"
                            >
                                <SwiperSlide className=''>
                                    <div className="w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700">
                                        <div className="flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800">
                                            <p style={PlanText} className="text-lg font-medium text-[#0F52BA]">One <span className='text-[black]'>Month Plan </span></p>
                                            <div className=' flex justify-center space-x-[26px]'>
                                                <p style={TabsText} className='text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]'>INR 718.00</p>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]'>20% Off</p>
                                            </div>

                                            <div className='text-center'>
                                                <h1 style={Text3} className='text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]'>INR 599.00</h1>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]' >Per month INR 200.00</p>
                                            </div>
                                        </div>

                                        <div className='flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]'>
                                            <div className='w-[90%] h-[1px] bg-[#EAEAEA]'></div>

                                        </div>


                                        <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                                            <ul className="relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2">
                                                <li className="w-[300px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[26px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Message to<span className='text-[#0F52BA]'> 10 Profiles</span></h1>

                                                </li>
                                                <li className="w-[300px] items-center  flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                                                </li>
                                                <li className="w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Online Support</h1>
                                                </li>
                                            </ul>
                                            <div>
                                                <button id='grad-btn' style={TabsText} onClick={() => router.push("/longterm/dashboard/upgrade/1")} className='relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700">
                                        <div className="flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800">
                                            <p style={PlanText} className="text-lg font-medium text-[#0F52BA]">Two <span className='text-[black]'>Month Plan </span></p>
                                            <div className=' flex justify-center space-x-[26px]'>
                                                <p style={TabsText} className='text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]'>INR 1079.00</p>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]'>20% Off</p>
                                            </div>

                                            <div className='text-center'>
                                                <h1 style={Text3} className='text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]'>INR 899.00</h1>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]' >Per month INR 300.00</p>
                                            </div>
                                        </div>

                                        <div className='flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]'>
                                            <div className='w-[90%] h-[1px] bg-[#EAEAEA]'></div>

                                        </div>


                                        <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                                            <ul className="relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2">
                                                <li className="w-[300px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[26px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Message to<span className='text-[#0F52BA]'> 10 Profiles</span></h1>

                                                </li>
                                                <li className="w-[300px] items-center  flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                                                </li>
                                                <li className="w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Online Support</h1>
                                                </li>
                                            </ul>
                                            <div>
                                                <button id='grad-btn' style={TabsText} onClick={() => router.push("/longterm/dashboard/upgrade/1")} className='relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-[280px] flex flex-col overflow-hidden border-[1px] border-[#0F52BA] rounded-[20px] dark:border-gray-700">
                                        <div className="flex flex-col items-center justify-center px-2 py-[10px]  space-y-4 dark:bg-gray-800">
                                            <p style={PlanText} className="text-lg font-medium text-[#0F52BA]">Three <span className='text-[black]'>Month Plan </span></p>
                                            <div className=' flex justify-center space-x-[26px]'>
                                                <p style={TabsText} className='text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px]'>INR 1319.00</p>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]'>20% Off</p>
                                            </div>

                                            <div className='text-center'>
                                                <h1 style={Text3} className='text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]'>INR 1199.00</h1>
                                                <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]' >Per month INR 300.00</p>
                                            </div>
                                        </div>

                                        <div className='flex justify-center relative 2xl:top-0 xl:top-0 lg:top-[10px]'>
                                            <div className='w-[90%] h-[1px] bg-[#EAEAEA]'></div>

                                        </div>


                                        <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                                            <ul className="relative right-[10px] self-stretch flex-1 items-center justify-center space-y-2">
                                                <li className="w-[300px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[26px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='relative right-[16px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Message to<span className='text-[#0F52BA]'> 30 Profiles</span></h1>

                                                </li>
                                                <li className="w-[300px] items-center  flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Send request to <span className='text-[#0F52BA]'>30 Profiles</span></h1>
                                                </li>
                                                <li className="w-[300px] relative right-[43.85px] items-center flex justify-center space-x-2">
                                                    <Image alt='verify-tick' width={14} height={14} className='relative right-[10px] w-[14px] h-[14px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                                    <h1 style={Text4} className='text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Online Support</h1>
                                                </li>
                                            </ul>
                                            <div>
                                                <button id='grad-btn' style={TabsText} onClick={() => router.push("/longterm/dashboard/upgrade/1")} className='relative top-[15px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>


                        </div>
                    </div>
                    <div className='w-full text-center'>
                        <p id='doItText' style={TabsText} className='cursor-pointer text-[#0F52BA]  text-[14px]' onClick={() => router.back()}>I’ll do it later</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingBox2