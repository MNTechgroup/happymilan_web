import { useRouter } from 'next/router'
import React from 'react'

function PricingBox() {
    
    const router = useRouter();

    const UserText = {
        fontFamily: "Poppins",
        fontSize: "20px",
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
                {/* <div className='space-y-[15px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:w-[280px] xl:w-[240px] w-[280px] bg-[#FFF] xl:h-[340px] 2xl:h-[397px] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]'> */}
                <div className='space-y-[15px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px] w-[280px] bg-[#FFF] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]'>

                    <h1 style={Text1} className='text-[black] pt-[10px] text-center'><span className='text-[#0F52BA]'> One </span>Month Plan</h1>
                    <div className='pt-[15px]'>
                        <div className=' flex justify-center space-x-[26px]'>
                            <p style={TabsText} className='text-[black] text-[12px]'>INR 718.00</p>
                            <p style={TabsText} className='text-[12px] text-[#17C270]'>20% Off</p>
                        </div>

                        <h1 style={Text3} className='text-[black] text-[34px] 2xl:text-[34px] xl:text-[25px]'>INR 599.00</h1>
                        <p style={TabsText} className='text-[12px] text-[black]' >Per month INR 200.00</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[226px] 2xl:w-[226px] xl:w-[200px] h-[1px] bg-[#EAEAEA]'></div>

                    </div>
                    <div className='pt-[18px] relative 2xl:left-0 xl:left-[10px]'>


                        <div className='flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Message to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Online Support</h1>
                           

                        </div>
                    </div>

                    <button style={TabsText} onClick={()=>router.push("/dashboard/upgrade/1")} className='relative top-[15px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                </div>
                <div className='space-y-[15px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px] w-[280px] bg-[#FFF] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]'>

                    <h1 style={Text1} className='text-[black] pt-[10px] text-center'><span className='text-[#0F52BA]'> Two </span>Month Plan</h1>
                    <div className='pt-[15px]'>
                        <div className=' flex justify-center space-x-[26px]'>
                            <p style={TabsText} className='text-[black] text-[12px]'>INR 1079.00</p>
                            <p style={TabsText} className='text-[12px] text-[#17C270]'>20% Off</p>
                        </div>

                        <h1 style={Text3} className='text-[black] text-[34px] 2xl:text-[34px] xl:text-[25px]'>INR 899.00</h1>
                        <p style={TabsText} className='text-[12px] text-[black]' >Per month INR 300.00</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='2xl:w-[226px] w-[226px] xl:w-[200px] h-[1px] bg-[#EAEAEA]'></div>

                    </div>
                    <div className='pt-[18px] relative 2xl:left-0 xl:left-[10px]'>


                        <div className='flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Message to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Online Support</h1>
                           

                        </div>
                    </div>

                    <button onClick={()=>router.push("/dashboard/upgrade/1")} style={TabsText} className='relative top-[15px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                </div>
                <div className='space-y-[15px] 2xl:space-y-[15px] xl:space-y-[10px] 2xl:h-[397px] xl:h-[340px] xl:w-[240px] 2xl:w-[280px] bg-[#FFF] h-[397px] rounded-[20px] border-[1px] border-[#0F52BA]'>

                    <h1 style={Text1} className='pt-[10px] text-center text-[black]'><span className='text-[#0F52BA]'> Three </span>Month Plan</h1>
                    <div className='pt-[15px]'>
                        <div className=' flex justify-center space-x-[26px]'>
                            <p style={TabsText} className='text-[12px] text-[black]'>INR 1319.00</p>
                            <p style={TabsText} className='text-[12px] text-[#17C270]'>20% Off</p>
                        </div>

                        <h1 style={Text3} className='text-[black] text-[34px] 2xl:text-[34px] xl:text-[25px]'>INR 1199.00</h1>
                        <p style={TabsText} className='text-[12px] text-[black]' >Per month INR 200.00</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='2xl:w-[226px] w-[226px] xl:w-[200px] h-[1px] bg-[#EAEAEA]'></div>

                    </div>
                    <div className='pt-[18px] relative 2xl:left-0 xl:left-[10px]'>


                        <div className='flex items-center justify-center 2xl:space-x-[20px] 2xl:left-0 xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Message to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>
                           
                        </div>
                        <div className='flex items-center justify-center space-x-[20px] 2xl:left-0 xl:space-x-[20px] 2xl:space-x-[20px] space-y-[10px] 2xl:space-y-[0px] xl:space-y-[0px] text-left'>

                            <img className='w-[14px] h-[14px] relative ' src="/assests/dashboard/menu/verfied-tick.svg" />
                            <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Online Support</h1>
                           

                        </div>
                    </div>

                    <button style={TabsText} onClick={()=>router.push("/dashboard/upgrade/1")} className='relative top-[15px] text-[16px] text-[#FFF] w-[226px] 2xl:w-[226px] 2xl:h-[50px] h-[50px] xl:w-[200px] xl:h-[40px] bg-[#0F52BA] rounded-[20px]'>Select This Plan</button>

                </div>
            </div>
        </>
    )
}

export default PricingBox