"use client";

import React from "react";
import Bluenav from "../components/Bluenav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";


const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal"
}

const Text4 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "32",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal"
}

const Text2 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal"
}
const Text3 = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "normal"
}

const sec2Title = {
    color: "#000",
fontFamily: "Open Sans",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "normal",
}


const Box = {
    boxShadow: "0px 10px 40px 0px rgba(158, 158, 158, 0.19)"
}

function index() {

    const router = useRouter();

   
    const divStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        background : "#FFF"

    };


    const data = [{ id: 1, text: "100% Privacy" }, { id: 2, text: "0% Fake Profile" }, { id: 3, text: "Fully Secured" }, { id: 4, text: "Verified Profiles" }]

    const StarCard = ({ data }) => {
        return (
            <>
                <div className="p-2 bg-gray-200  w-[178px] h-[191px]" id="profile-section">

                    <div className='grid place-items-center p-1 mt-10 w-full'>
                        <img src='/shape.svg' />
                        <span className='mt-5'>{data.text}</span>
                    </div>

                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-full grid place-items-center">
              
              {/* for Desktop */}
              
              <div className=" h-full w-full hidden xl:w-full 2xl:w-[1350px]   lg:block  lg:w-full lg:h-[640px] 2xl:mt-[10px] xl:mt-[10px] 2xl:h-[600px] xl:h-[530px] " style={divStyle}>
                    <div className="flex w-full h-full flex-col lg:flex-row  justify-evenly">
                        <div className="flex justify-center items-end  mt-[30px]  lg:h-[600px] lg:w-[100%] 2xl:h-[570px] 2xl:w-[100%] xl:w-[500px] xl:h-[500px]   grid place-items-center">
                        <div className="">
                        <img src="/assests/common/about-img-1.svg" className="" />
                        </div>
                         </div>
                        <div className=" w-full h-full lg:h-[600px] lg:w-[100%] 2xl:h-[600px] 2xl:w-[100%] xl:w-[500px] xl:h-[500px]   grid place-items-center">

                        <div id='home-title' className=' mt-[70px] 2xl:mt-[70px] xl:mt-[110px] flex items-center m-5 items-center w-full lg:w-[475px]' >
                        <div className='lg:relative top-[18%] 2xl:top-[14%] xl:top-[5%] right-[15%] left-[-10%]'>
                           <div className='relative py-[80px]  lg:p-10'>
                        <h1 style={Text3} className="text-[#000] lg:pb-[20px]">Who we are?</h1>

                               <h1 className='text-[#0F52BA] lg:leading-[50px] text-[20px] w-[300px] md:text-[44px] md:w-full lg:w-full lg:text-[42px]'>Discover Your Perfect Match with HappyMilan.</h1>
                               <p className='text-[#000] lg:w-[432px] lg:h-[76px] mt-[30px]' style={Text3}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>
                           </div>
                       </div>
                   </div>

                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#DADADA]'> </div>
                

              {/* for Desktop */}
              
              
              
              
               {/* For Mobile Screens */}

               <div className="lg:hidden md:block h-full bg-[#FFF] w-full mt-[160px]">

                <div className="flex flex-col">
                    
                    <div className="w-full h-full">

                    <div id='home-title' className=' flex items-center items-center w-full lg:w-[475px]' >
                        <div className='lg:relative top-[18%] 2xl:top-[14%] xl:top-[5%] right-[15%] left-[-10%] mx-[10px]'>
                           <div className='relative py-[20px]  lg:p-10'>
                        <h1 style={Text3} className="text-[#000] pb-[10px] lg:pb-[20px]">Who we are?</h1>

                               <h1 className='text-[#0F52BA] lg:leading-[50px] text-[30px] w-[300px] md:text-[50px] md:w-[450px] lg:w-full lg:text-[42px]'>Discover Your Perfect Match with HappyMilan.</h1>
                               <p className='text-[#000] md:w-[450px] lg:w-[432px] lg:h-[76px] mt-[30px]' style={Text3}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>
                           </div>
                       </div>
                   </div>

                    </div>
                </div>
                <div className="hidden w-full h-[350px]">
                        <img className="w-full h-full " src="assests/common/about-img-1.svg" />
                    </div>

               </div>

               {/* For Mobile Screens */}
                <div className="">
                <div className="lg:pt-[100px] 2xl:pt-[10px] xl:pt-[10px] pt-[100px]">
                    {/* <!-- Creating New Profile Section Started --> */}

                    <div className=' w-full flex xl:gap-x-[120px] lg:gap-x-[120px] flex-col md:flex-col md:items-center lg:flex-row justify-center my-[13%]'>
                        <div id='grid-card-section' className='lg:mr-[100px] 2xl:mr-[100px] xl:mr-[100px] lg:mt-[60px]'>
                            <div className=" flex justify-center items-center flex-wrap justify-center md:grid grid-cols-2 gap-x-[40px]  gap-y-[40px]  mt-2 mb-2">

                                {
                                    data.map((res) => {
                                        return (
                                            <StarCard key={res.id} data={res} />
                                        )
                                    })
                                }

                            </div>

                        </div>
                        <div className='relative w-full md:w-[499px] h-full lg:left-[0px] top-[19px]' id='sec-3-content'>
                            <h1 className='lg:text-left text-center lg:w-[403px] text-[20px] md:text-[32px] lg:text-[32px] mb-10' style={Text4}>Why you should register with us?</h1>
                            <p className='lg:w-[499px] mb-10 lg:text-[20px]  text-[15px] text-center lg:text-left'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</p>
                            <div className='w-full lg:block flex justify-center'>
                                <button onClick={() => router.push("/login")}><span>Create New Profile</span></button>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Creating New Profile Section End --> */}
                </div>
                </div>

               
            <div className="pt-[50px] grid place-items-center">
                <div className="rounded-[24px] w-full h-[400px] flex justify-center items-center 2xl:w-[1106px] 2xl:h-[500px] lg:w-[1006px] xl:w-[90%] 2xl:w-[1026px] rouned-[24px] h-[480px] bg-[#FFF]" style={Box}>
                    <div className="w-full h-full  flex items-center flex-col justify-evenly">
                        <div className="text-center md:text-left lg:text-left lg:w-[894px] 2xl:w-[894px] xl:w-[90%]">
                            <h1 className="pb-[20px]" style={Text1}>Our Vision</h1>
                            <h1 style={Text2}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</h1>

                        </div>

                        <div className="lg:w-[894px] 2xl:w-[894px] xl:w-[90%] w-full h-[1px] bg-[#EF4136]">

                        </div>

                        <div className="text-center md:text-left lg:text-left lg:w-[894px] 2xl:w-[894px] xl:w-[90%]">
                            <h1 className="pb-[20px]" style={Text1}>Our Mission</h1>
                            <h1 style={Text2}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</h1>

                        </div>

                    </div>
                </div>

            </div>


           
                <div>

                    {/* <!-- Explore Story Section started --> */}

                    <div className=' w-full pb-[90px] lg:pb-0 md:pb-0 sm:pb-0 flex  md:items-center flex-col md:flex-col lg:flex-row  justify-center lg:my-[90px] xl:my-[80px] 2xl:my-[90px] md:my-[10%] p-[15px]'>
                        <div className='flex flex-col md:flex-row p-10'>

                            <div className='lg:m-5 md:m-5 lg:my-10'>
                                <img src='/rectangle-369@2x.png' className='relative w-[260px] top-[100px] lg:top-[0px] h-[381px] object-cover' />
                                <div className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] h-[100px] opacity-[0.9]'>
                                    <div className='flex justify-between'>
                                        <div className='relative  left-[28px] top-[20px] border-black text-white font-poppins'>

                                            <p className="m-0">
                                                <span>
                                                    <span className="font-semibold">{`Riya & Rohan`}</span>
                                                    <b className="font-poppins">{` `}</b>
                                                </span>
                                            </p>
                                            <p className="m-0 text-xs">(Married on 19 Apr 2023)</p>
                                        </div>
                                        <div className='m-5'>
                                            <img
                                                className="w-8 h-8"
                                                alt=""
                                                src="/group-1061.svg"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='lg:m-5 md:m-5 lg:my-10'>
                                <img src='/rectangle-492@2x.png' className='relative w-[260px] top-[100px] lg:top-[0px] h-[381px] object-cover' />
                                <div className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] h-[100px] opacity-[0.9]'>
                                    <div className='flex justify-between'>
                                        <div className='relative  left-[28px] top-[20px] border-black text-white font-poppins'>
                                            <p className="m-0">
                                                <span>
                                                    <span className="font-semibold">{`Mahesh & Priya`}</span>
                                                    <b className="font-poppins">{` `}</b>
                                                </span>
                                            </p>
                                            <p className="m-0 text-xs">(Married on 02 March 2023)</p>
                                        </div>
                                        <div className='m-5 relative top-[10px]'>
                                            <img
                                                className="w-8 h-8"
                                                alt=""
                                                src="/group-1061.svg"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                            {/* <!-- Section: 2  Start--> */}
                            <section className='h-[470px] w-full md:text-left lg:text-left p-10'>
                                <div className=' lg:relative top-[35px] lg:top-[48px] lg:right-[25px]'>
                                    <h1 style={sec2Title} className='text-[32px] 2xl:text-[32px] xl:text-[28px]  lg:w-[423px] md:w-full  lg:h-[131px]'>
                                        The safest, smartest and the most secure matchmaking service in India
                                    </h1>
                                    <div className='mt-[10%] md:mt-[5%] lg:mt-[10%]'>
                                        <span id='sec-2-stories-num'>9K+ </span>
                                        <h3 id='sec-2-explore-str'>Explore Successful Stories</h3>
                                    </div>

                                    <button onClick={()=>router.push("/successstories")} id='sec-2-explore-story' className='mt-[10%] md:mt-[10%] lg:mt-[15.5%]'><span>Explore All Stories</span></button>
                                </div>
                            </section>
                            {/* <!-- Section: 2  End--> */}

                        </div>
                    </div>

                    {/* <!-- Explore Story Section End --> */}

                </div>
                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default index