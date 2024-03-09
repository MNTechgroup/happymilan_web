import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Textarea } from '@material-tailwind/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function index() {

    const router = useRouter();

    const imgdata = [
        {
            id: 1,
            img: "/assests/stories/stories-1.svg",
            username: "Riya & Rohan",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 2,
            img: "/assests/stories/stories-2.svg",
            username: "Mahesh & Priya",
            date: "(Married on 02 March 2023)"
        },
        {
            id: 3,
            img: "/assests/stories/stories-3.svg",
            username: "Jigar & Hiteshi ",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 4,
            img: "/assests/stories/stories-4.svg",
            username: "Kaushal & Jiya",
            date: "(Married on 30 Apr 2023)"
        },
        {
            id: 5,
            img: "/assests/stories/stories-5.svg",
            username: "Jiyan & Jigisha",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 6,
            img: "/assests/stories/stories-6.svg",
            username: "Rohan & Joya",
            date: "(Married on 01 June 2023)"
        },
        {
            id: 7,
            img: "/assests/stories/stories-7.svg",
            username: "Ramesh & Shivali",
            date: "(Married on 23 Feb 2023)"
        },
        {
            id: 8,
            img: "/assests/stories/stories-8.svg",
            username: "Vishal & Heena",
            date: "(Married on 19 Apr 2023)"
        },
    ]


    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    // pb

    return (
        <>
            <Navbar />
            <div className='w-full h-full grid place-items-center'>

                <div className=' mt-[100px] w-full   lg:w-[900px] 2xl:w-[1200px] xl:w-[1200px] 2xl:h-[650px] xl:h-[650px]'>
                    <div className='w-full grid place-items-center'>
                        <div className=' w-full  lg:w-[900px] 2xl:w-[1110px] xl:w-[1110px] flex flex-col lg:flex-row w-full justify-between'>
                            <div className='grid place-items-center'>
                                <h1 className='text-[18px] text-[#000]' style={TitleText}>Let's spread your love story to the world.</h1>
                            </div>
                            <div className='hidden w-full lg:w-auto lg:block grid place-items-end lg:mt-[0px] mt-[10px]'>
                                <h1 onClick={()=>router.back()} className=' cursor-pointer inline text-[14px] lg:mr-[20px]  pb-[10px] text-[#000] lg:pb-[0px]' style={TitleText}>Not now</h1>
                                <button id='grad-btn' onClick={()=>router.push("/successstories")} className='w-[104px] h-[50px] rounded-[10px] border-[1px] bg-[#0F52BA]' style={TitleText}> <span className='text-[14px] text-[#fff]' style={TitleText}>Publish</span></button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:w-full 2xl:w-[1200px] xl:w-[1200px] justify-center gap-x-[25px] 2xl:gap-x-[25px] xl:gap-x-[25px] lg:gap-x-[25px] md:gap-x-[25px] gap-x-[25px] pt-[39px]'>

                        <div className='w-full lg:w-full pl-[20px] 2xl:pl-0 xl:pl-0  2xl:w-[670px] xl:w-[670px] h-[700px]  rounded-[8px]'>

                            <div className='w-full flex flex-col gap-y-[45px]'>
                               <div className='h-full w-full'>
                                <h1 className='relative top-[-20px]'>Me & His Name</h1>
                                <input type='text' placeholder='Name' className='outline-none pl-[20px] border-[1px] border-[black] w-[90%]  lg:w-[100%] 2xl:w-[652px] xl:w-[652px] h-[50px] rounded-[10px]' />
                                </div>
                               <div className='h-full w-full'>
                                <h1 className='relative top-[-20px]'>When did you get married?</h1>
                                <input type='text' placeholder='DD/MM/YYYY' className='outline-none pl-[20px] border-[1px] border-[black] w-[90%] lg:w-[100%] 2xl:w-[652px] xl:w-[652px] h-[50px] rounded-[10px]' />
                                </div>
                               <div className='h-full w-full'>
                                <div className='flex  justify-between'>
                                <h1 className=' relative top-[-20px]'>Type or Paste Your Story</h1>
                                <h1 className='relative top-[-20px] right-[20px] text-[14px] text-[#A0A0A0]' style={TitleText}>0/1000</h1>
                                </div>
                                <textarea type='text' className='outline-none pl-[20px] pt-[5px] border-[1px] border-[black] w-[90%] lg:w-[100%] 2xl:w-[652px] xl:w-[652px] h-[256px] rounded-[10px]' />
                                </div>
                                <div className='hidden'>
                                <h1 onClick={()=>router.back()} className=' cursor-pointer inline text-[14px] lg:mr-[20px]  pb-[10px] text-[#000] lg:pb-[0px]' style={TitleText}>Not now</h1>
                                <button onClick={()=>router.push("/successstories")} className='w-[104px] h-[50px] rounded-[10px] border-[1px] bg-[#0F52BA]' style={TitleText}> <span className='text-[14px] text-[#fff]' style={TitleText}>Publish</span></button>
                                </div>
                            </div>

                        </div>

                        <div className='flex h-full justify-center flex-wrap w-full lg:w-full 2xl:w-[415px] xl:w-[415px]  pt-[0px] lg:pt-0  gap-y-[20px] gap-x-[17px]'>
                            <div className='w-[45%] lg:w-[197px] h-[289px] rounded-[8px] bg-[#F8F8F8]'>

                                <div className='flex justify-center flex-col items-center h-full'>
                                    <Image width={24} height={24} src='/assests/stories/Add-2.svg' className='  h-[31.473px]  w-[31.47px]' />
                                    <h1 className='text-[12px] text-[#000] pt-[10px]' style={TitleText}>Add Photo</h1>
                                </div>

                            </div>
                            <div className='w-[45%] lg:w-[197px] h-[289px] rounded-[8px] bg-[#F8F8F8]'>
                            <div className='flex justify-center flex-col items-center h-full'>
                                    <Image width={24} height={24} src='/assests/stories/Add-2.svg' className='  h-[31.473px]  w-[31.47px]' />
                                    <h1 className='text-[12px] text-[#000] pt-[10px]' style={TitleText}>Add Photo</h1>
                                </div>
                            </div>
                            <div className='w-[90%] lg:w-[410px] h-[197px] rounded-[8px] bg-[#F8F8F8]'>
                            <div className='flex justify-center flex-col items-center h-full'>
                                    <Image width={24} height={24} src='/assests/stories/Add-2.svg' className='  h-[31.473px]  w-[31.47px]' />
                                    <h1 className='text-[12px] text-[#000] pt-[10px]' style={TitleText}>Add Photo</h1>
                                </div>
                            </div>
                            </div>
                            <div className=' lg:hidden  w-full lg:w-auto  flex justify-center items-center space-x-[20px]  lg:mt-[0px] mt-[10px]'>
                            <button onClick={()=>router.push("/successstories")} className='w-[104px] h-[50px] rounded-[10px] border-[1px] bg-[#0F52BA]' style={TitleText}> <span className='text-[14px] text-[#fff]' style={TitleText}>Publish</span></button>
                                <h1 onClick={()=>router.back()} className='inline text-[14px] lg:mr-[20px]  pb-[10px] text-[#000] lg:pb-[0px]' style={TitleText}>Not now</h1>
                            </div>

                    </div>

                </div>

                <div id='footer-section' className='w-full pt-0'>
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default index