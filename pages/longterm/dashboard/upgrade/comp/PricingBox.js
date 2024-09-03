import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetupgradePlans } from '../../../../../store/actions/UpgradeAction';

function PricingBox({ handleCheckout }) {



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetupgradePlans())
    }, [])

    const { data, loading } = useSelector((state) => state.upgradeplans.plans)

    const TabsText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Text3 = {
        fontFamily: "Poppins",
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

    return (
        <>

            <div className='flex justify-center space-x-[28px]'>

                {
                    data?.map((res, Index) => {
                        return (
                            <>
                                <div key={Index} className='space-y-[15px] lg:space-y-[0px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px] bg-[#FFF] lg:w-[200px] lg:h-[290px] w-[280px] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]'>

                                    <h1 style={Text1} className='mt-[6px] text-[18px] 2xl:text-[18px] xl:text-[18px] lg:text-[12px]  text-[black] pt-[10px] text-center'><span className='text-[#0F52BA]'> One </span>{res?.planDuration === "yearly" ? "Year" : "Month"} Plan</h1>
                                    <div className='pt-[15px]'>
                                        <div className=' flex justify-center space-x-[26px]'>
                                            <p style={TabsText} className='text-[black] text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] line-through'>INR 718.00</p>
                                            <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[9px] text-[#17C270]'>{res?.discount}% Off</p>
                                        </div>

                                        <h1 style={Text3} className='text-[black] text-[34px] lg:text-[20px] 2xl:text-[34px] xl:text-[25px]'>INR {res?.price}.00</h1>
                                        <p style={TabsText} className='text-[12px] 2xl:text-[12px] xl:text-[12px] lg:text-[10px] text-[black]' >Per month INR 200.00</p>
                                    </div>
                                    <div className='flex justify-center relative 2xl:top-[16px] xl:top-[16px] lg:top-[10px]'>
                                        <div className='w-[226px] 2xl:w-[226px] xl:w-[200px] lg:w-[180px] h-[1px] bg-[#EAEAEA]'></div>

                                    </div>
                                    <div className='pt-[18px] 2xl:pt-[18px] xl:pt-[18px] lg:pt-[10px] relative 2xl:left-0 xl:left-[10px] '>


                                        <div className='flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                                            <Image loading='lazy' alt='verify-tick' width={14} height={14} className='2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                            <h1 style={Text4} className='2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]'>Message to <span className='text-[#0F52BA]'>{res.allowNumberOfProfile} Profiles</span></h1>

                                        </div>
                                        <div className=' flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                                            <Image loading='lazy' alt='verify-tick' width={14} height={14} className='2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                            <h1 style={Text4} className='2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]' >Send request to <span className='text-[#0F52BA]'>{res.allowNumberOfRequest} Profiles</span></h1>

                                        </div>
                                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] lg:space-x-[10px] 2xl:space-x-[20px] lg:space-x-[0px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                                            <Image loading='lazy' alt='verify-tick' width={14} height={14} className='2xl:w-[14px] 2xl:h-[14px] xl:w-[14px] xl:h-[14px] lg:w-[12px] lg:h-[12px] w-[14px] h-[14px]  relative 2xl:top-0 xl:top-0 lg:top-[5px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                            <h1 style={Text4} className='2xl:w-[185px] xl:w-[185px] lg:w-[150px] text-[black] 2xl:text-[14px] xl:text-[12px]  lg:text-[10px]'>Online Support</h1>


                                        </div>
                                    </div>

                                    <button id='grad-btn' style={TabsText} onClick={() => handleCheckout({
                                        id: 1,
                                        res: res,
                                        amount: res.price,
                                        planId: res.id

                                    })} className='relative 2xl:top-[15px] xl:top-[10px] lg:top-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] lg:w-[180px] lg:h-[35px] bg-[#0F52BA] rounded-[23px]'>Select This Plan</button>

                                </div>
                            </>
                        )
                    })
                }

                {/* Two Month */}

            </div >
        </>
    )
}

export default PricingBox