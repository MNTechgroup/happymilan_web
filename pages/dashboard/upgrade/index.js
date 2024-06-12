import React, { useState } from 'react'
import NavBar from '../NavBar'
import { useRouter } from 'next/router';
import Image from 'next/image';
import ProtectedRoutes from '../../routes/ProtectedRoutes';
import dynamic from 'next/dynamic';

const PricingBox = dynamic(() => import('./comp/PricingBox'));
const PricingBox2 = dynamic(() => import('./comp/PricingBox2'));



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


    const [currentTab, setCurrentTab] = useState(1)

    const router = useRouter();


    const HandleCheckout = async (e) => {
        console.log("🚀 ~ HandleCheckout ~ e:", e)
        router.push("/dashboard/upgrade/1")

        // try {
        //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/razorpay/order`, { amount: 200 });
        //     console.log("🚀 ~ HandleCheckout ~ response:", response)

        //     // Handle successful response (e.g., initiate Razorpay checkout)
        //     var options = {
        //         "key": "rzp_test_Dv5ALfzUvZ12UN",
        //         "name": "Acme Corp",
        //         "description": "Test Transaction",
        //         "image": "https://example.com/your_logo",
        //         "order_id": response.data.id,
        //         "callback_url": "/is-order-complete",
        //         "theme": {
        //             "color": "#3399cc"
        //         }
        //     };
        //     var rzp1 = new Razorpay(options);

        //     rzp1.open();
        //     e.preventDefault();

        // } catch (error) {
        //     // Handle error
        // }



    }


    const data = [
        {
            label: "Silver",
            value: "dashboard",
            curval: "dashboard",

            desc: <PricingBox HandleCheckout={HandleCheckout} />,
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




    const handleSearch = (searchTerm) => { }

    return (
        <>
            <ProtectedRoutes />
            <NavBar handleSearch={handleSearch} />
            <div id='PriceBox'>
                <div className='gradient-div grid place-items-center w-full h-full'>
                    <div className='text-center bg-[#FFF]'>
                        <div className='flex flex-col justify-center items-center relative top-[90px] 2xl:top-[90px] xl:top-[90px] lg:top-[80px]  z-[10]  w-full h-full '>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 style={UserText} className='2xl:text-[20px] xl:text-[18px] text-[#000]'>Hi Riya, Upgrade Your Profile</h1>
                                </div>
                                <div>

                                    <div style={TabsText} id='doItText' className=' cursor-pointer text-[black] absolute 2xl:right-[-210px] xl:right-[-180px] lg:right-[-140px] right-[0px]'>
                                        <button id='Gradient-btn' onClick={() => router.back()} className='w-[95px] h-[27px] '>
                                            <span className='text-[12px] w-[72px] h-[18px]'>I’ll do it later</span>
                                        </button></div>
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