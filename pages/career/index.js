import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
  } from "@material-tailwind/react";
import Footer from '../components/Footer';
import Image from 'next/image';

function index() {

    const TitleText = {
        color: "#0F52BA",
        fontFamily: "Poppins",
        fontSize: "42px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "50px",
    }
    const contentText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "normal",
    }
    const contentText2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Btntext = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const CardTitle = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }
    const CardContent = {
        color: "#757575",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const cardelem = [ { id:1}, {id:2} , {id:3}, {id:4} , {id:5} , {id:6} ]




    const data = [
        {
            label: "HR",
            value: "HR",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "IT",
            value: "IT",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Sales & Marketing",
            value: "Sales & Marketing",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },

        {
            label: "Design",
            value: "Design",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];
    const [selectedvalue, setSelectedval] = useState("HR");
    return (
        <>

            <Navbar />

            <div className='w-full  h-full grid place-items-center'>
                <div className=''>
                    <div className='w-full h-full mt-[50px]  2xl:mt-[20px] xl:mt-[20px] gap-x-[90px]  flex flex-col-reverse flex-col lg:flex-row justify-evenly'>
                        <div className="flex justify-center items-end  mt-[30px]  lg:h-[600px] lg:w-[100%] 2xl:h-[570px] 2xl:w-[100%] xl:w-[500px] xl:h-[500px]   grid place-items-center">
                        <div className="md:pr-0 md:pl-0 pl-[10px] pr-[10px]">
                        <Image alt="img" width={466} height={445} src="/assests/common/career-img.svg" className="" />
                        </div>
                         </div>
                         <div className=" w-full h-full lg:h-[600px] lg:w-[100%] 2xl:h-[600px] 2xl:w-[530px] xl:w-[500px] xl:h-[500px]   grid place-items-center">

                        <div  className=' 2xl:mt-[100px] xl:mt-[70px] flex items-center m-5 items-center w-full lg:w-[530px] 2xl:w-[530px]' >
                        <div className=' h-[500px] flex justify-center items-center  w-full lg:w-[530px] 2xl:w-[530px] '>
                            <div>
                                <h1 className='pb-[20px]' style={contentText} >Career</h1>
                                <h1 className='pb-[10px] md:pl-0 md:pr-0 pl-[10px] pr-[10px] ' style={TitleText}>Start Your Career Journey with Us: Your Path to Success Begins Here!</h1>
                                <h1 className='pt-[20px] lg:w-[503px] md:pl-0 md:pr-0 pl-[10px] pr-[10px]' style={contentText}>Explore our current job openings and take the next step towards a rewarding career in the exciting world of IT. Join us and embark on a journey of professional growth, innovation, and endless possibilities.</h1>
                            </div>
                        </div>
                   </div>

                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#DADADA]'>

                </div>

                <div className=' pt-[80px]'>

                    <div>
                        <h1 style={contentText2}>Current Openings</h1>
                    </div>

                    <div className='hidden w-full lg:w-[700px] pt-[60px]'>
                        <div className=''>
                            <Tabs id="custom-animation" value={selectedvalue}>
                                <TabsHeader indicatorProps={{
                                    className: "bg-[#0F52BA] shadow-none ",

                                }}>
                                    {data.map(({ label, value }) => (
                                        <Tab key={value} value={value} onClick={() => setSelectedval(label)} className={`${selectedvalue === value ? "text-[white]" : "text-[black]"}`}>
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody
                                    animate={{
                                        initial: { y: 250 },
                                        mount: { y: 0 },
                                        unmount: { y: 250 },
                                    }}
                                >

                                </TabsBody>
                            </Tabs>
                        </div>
                    </div>

                    <div className='w-full h-full grid place-items-center'>
                        <div className='flex justify-evenly lg:justify-center 2xl:gap-x-[22px] xl:gap-x-[22px]  lg:gap-x-[22px] pt-[70px]  w-full md:w-[700px]'>
                            <button style={Btntext} className='h-[40px] border-[1px] border-[#DADADA] rounded-[10px] w-[84px] bg-[#0F52BA] text-[white] text-center'>HR</button>
                            <button style={Btntext} className='h-[40px] border-[1px] border-[#DADADA] rounded-[10px] w-[84px]  bg-[#FFF] hover:bg-[#0F52BA] duration-300 hover:text-[white]  text-[black] text-center'>IT</button>
                            <button style={Btntext} className='h-[40px] border-[1px] border-[#DADADA] p-[10px] rounded-[10px]  bg-[#FFF] hover:bg-[#0F52BA] duration-300 hover:text-[white]  text-[black] '>Sales & Marketing</button>
                            <button style={Btntext} className='h-[40px] border-[1px] border-[#DADADA] rounded-[10px]  md:w-[111px] bg-[#FFF] hover:bg-[#0F52BA] duration-300 hover:text-[white]  text-[black] text-center'>Design</button>
                        </div>

                    </div>

                    <div className='pt-[50px] w-full lg:w-[1000px]'>
                        <div className='flex flex-wrap justify-center  gap-y-[38px] gap-x-[38px] '>
                            
                            {
                                cardelem.map((res)=>{
                                    return(
                                    <>
                                    <div key={res.id} className='w-[300px] h-[112px] border-[1px] border-[#DADADA] rounded-[10px]'>
                                <div>

                                    <div className='m-[15px] pt-[5px]'>
                                        <h1 className='m-[4px] pb-[10px]' style={CardTitle}>Web Developer</h1>


                                        <Image alt="img" width={8} height={10} className='m-[5px] inline' src='/assests/Black/remote.svg' />
                                        <span className='m-[5px] inline' style={CardContent}>Remote</span>
                                        <Image alt="img" width={10} height={10} className='ml-[25px] m-[5px] inline' src='/assests/Black/clock.svg' />
                                        <span className='m-[5px] inline' style={CardContent}>5 Days Work</span>

                                    </div>
                                </div>

                            </div>
                                    </>
                                    )
                                })
                            }
                            
                        </div>
                    </div>

                    <div className='flex justify-center gap-y-[30px] mt-[80px]'>
                        <button style={Btntext} className='w-[148px] h-[40px] rounded-[10px] bg-[#0F52BA] text-[#FFF]'>Send you CV</button>
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