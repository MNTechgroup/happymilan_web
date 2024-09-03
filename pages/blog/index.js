import Link from 'next/link'
import React from 'react'
import Navbar from '../_components/layout/AuthNavbar'
import Footer from '../_components/layout/Footer'
import Image from 'next/image'

function index() {
    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const Date = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const PagginationText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    return (
        <>
            <Navbar />
            <div className='w-full h-full grid place-items-center'>
                <div className='w-full mt-[100px]  grid place-items-center pt-[80px]'>
                    <div className=''>
                        <div>
                            <div className="container mx-auto">
                                <h1 style={PagginationText} className='md:pl-0 pl-[15px] relative bottom-[40px] text-[18px]'>Happy Milan Blogs</h1>

                                <div className="2xl:w-[1100px] xl:w-[100%] lg:w-full md:w-full   mx-auto flex flex-wrap">
                                    <Image width={359} height={359} alt="blog" className="md:pl-0 md:pr-0  pl-[15px] pr-[10px] lg:w-[359px] mr-[10px] w-full lg:h-[359px] h-64 object-cover object-center rounded-[20px] md:rounded-[10px]" src="/assests/common/blog-img-1.svg" />
                                    <div className="lg:w-1/2 md:w-full ml-[10px]  w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">
                                        <div className='md:pl-0 md:pr-0 pl-[10px] pr-[5px]'>
                                            <h1 className=' lg:w-[100%] 2xl:w-[700px] xl:w-[700px]  lg:text-[24px] text-[18px]' style={Title}>When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "</h1>
                                            <p className='md:pt-0 pt-[10px]' style={Date}>10 July 2023,</p>
                                        </div>
                                        <div className='md:pl-0 pl-[10px] pt-[38px]'>
                                            <Image alt='img' width={42} height={42} className='inline' src='/assests/common/blog-1-profile.svg' />
                                            <span className='ml-[10px]' style={Username}>Riya & Rohan </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='pt-[38px] md:pl-0 pl-[10px] md:pr-0 pr-[10px]'>
                                                <h1 style={Content} className='lg:w-full 2xl:w-[683px] xl:w-[683px]'>black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen.</h1>

                                            </div>
                                            <div className='w-full lg:w-auto grid place-items-center lg:block pt-[20px]'>
                                                <Link href="/blog/1"> <button style={Content} className='w-[214px] h-[50px] rounded-[24px] bg-[#F8F8F8] inline'><span className='pr-[15px]'>Read Full Article</span> <Image alt="img" width={16} height={16} className='inline' src='/assests/common/blog-arrow.svg' /></button></Link>
                                            </div>

                                        </div>
                                        <div className='w-[95%] h-[1px] bg-[black] md:w-full lg:w-full 2xl:w-[690px] xl:w-[690px] md:w-[97%] mt-[45px]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:w-full items-center justify-center mt-[50px]">
                            <div className="container mx-auto">

                                <div className="2xl:w-[1100px] xl:w-[100%] lg:w-full md:w-full   mx-auto flex flex-wrap">
                                    <Image width={359} height={359} alt="blog" className="md:pl-0 md:pr-0  pl-[15px] pr-[10px] lg:w-[359px] mr-[10px] w-full lg:h-[359px] h-64 object-cover object-center rounded-[20px] md:rounded-[10px]" src="/assests/common/blog-img-1.svg" />

                                    <div className="lg:w-1/2 md:w-full ml-[10px]  w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">
                                        <div className='md:pl-0 md:pr-0 pl-[10px] pr-[5px]'>
                                            <h1 className=' lg:w-[100%] 2xl:w-[700px] xl:w-[700px] lg:text-[24px] text-[18px]' style={Title}>When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "</h1>
                                            <p className='md:pt-0 pt-[10px]' style={Date}>10 July 2023,</p>
                                        </div>
                                        <div className='md:pl-0 pl-[10px] pt-[38px]'>
                                            <Image alt='blog-img' width={42} height={42} className='inline' src='/assests/common/blog-1-profile.svg' />
                                            <span className='ml-[10px]' style={Username}>Riya & Rohan </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='md:pl-0 pl-[10px] md:pr-0 pr-[10px] pt-[38px]'>
                                                <h1 style={Content} className='lg:w-full 2xl:w-[683px] xl:w-[683px]'>black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen.</h1>

                                            </div>
                                            <div className='w-full lg:w-auto grid place-items-center lg:block pt-[20px]'>
                                                <Link href="/blog/1"> <button style={Content} className='w-[214px] h-[50px] rounded-[24px] bg-[#F8F8F8] inline'><span className='pr-[15px]'>Read Full Article</span> <Image alt="img" width={16} height={16} className='inline' src='/assests/common/blog-arrow.svg' /></button></Link>
                                            </div>

                                        </div>
                                        <div className='w-[95%] h-[1px] bg-[black] md:w-full lg:w-full 2xl:w-[690px] xl:w-[690px] md:w-[97%] mt-[45px]'></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full grid place-items-center lg:pl-[25px] pt-[45px]'>
                        <div className='flex gap-x-[25px]'>
                            <div style={PagginationText} className=' text-[20px] rounded-[50%] grid cursor-pointer place-items-center h-[44px] w-[44px] bg-[#0F52BA] text-[#FFF]'>1</div>
                            <div style={PagginationText} className=' text-[20px] hover:bg-[#0F52BA] cursor-pointer hover:text-[#FFF] hover:border-[#0F52BA] duration-300 rounded-[50%] border-[1px] border-[black] grid place-items-center h-[44px] w-[44px] bg-[#FFF] text-[#000]'>2</div>
                            <div style={PagginationText} className=' text-[20px] hover:bg-[#0F52BA] cursor-pointer hover:text-[#FFF] hover:border-[#0F52BA] duration-300 rounded-[50%] border-[1px] border-[black] grid place-items-center h-[44px] w-[44px] bg-[#FFF] text-[#000]'>3</div>
                            <div style={PagginationText} className=' text-[20px] hover:bg-[#0F52BA] cursor-pointer hover:text-[#FFF] hover:border-[#0F52BA] duration-300 rounded-[50%] border-[1px] border-[black] grid place-items-center h-[44px] w-[44px] bg-[#FFF] text-[#000]'>4</div>
                        </div>
                    </div>
                </div>
                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default index