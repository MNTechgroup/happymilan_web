import React from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Image from "next/image";
import UIbuttons from "../../UI/Buttons";

const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "28px",
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





const Box = {
    boxShadow: "0px 10px 40px 0px rgba(158, 158, 158, 0.19)"
}

function index() {

    const router = useRouter();


    const divStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        background: "#FFF"

    };


    const data = [{ id: 1, text: "100% Privacy" }, { id: 2, text: "0% Fake Profile" }, { id: 3, text: "Fully Secured" }, { id: 4, text: "Verified Profiles" }]

    const StarCard = ({ data }) => {
        return (
            <>
                <div className="p-2 bg-gray-200  w-[178px] h-[191px]" id="profile-section">

                    <div className='grid place-items-center p-1 mt-10 w-full'>
                        <Image loading="lazy" alt="star" width={43} height={41} src='/assests/Blue/LandingPage-Star.svg' />
                        <span className='mt-5'>{data.text}</span>
                    </div>

                </div>
            </>
        )
    }


    const BTNText = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }


    const Text = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const ReadMoreText = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-full grid place-items-center">

                {/* for Desktop */}

                <div className=" lg:block h-full w-full hidden xl:w-full 2xl:w-[1350px]  lg:w-full lg:h-[640px] 2xl:mt-[10px] xl:mt-[10px] 2xl:h-[600px] xl:h-[530px] " style={divStyle}>
                    <div className="flex w-full h-full flex-col lg:flex-row  justify-evenly">
                        <div className="flex justify-center items-end  mt-[30px] 2xl:mt-[30px] xl:mt-[30px] lg:mt-[5px]  lg:h-[500px] lg:w-[100%] 2xl:h-[570px] 2xl:w-[100%] xl:w-[500px] xl:h-[500px]   grid place-items-center">
                            <div className="">
                                <Image loading="lazy" width={535} height={491} alt="image" src="/assests/common/about-img-1.png" className="2xl:h-auto xl:h-auto lg:h-[400px]" />
                            </div>
                        </div>
                        <div className=" w-full h-full lg:h-[500px] lg:w-[100%] 2xl:h-[600px] 2xl:w-[100%] xl:w-[500px] xl:h-[500px]   grid place-items-center">

                            <div id='home-title' className='mt-[70px] 2xl:mt-[70px] xl:mt-[110px] flex items-center m-5 items-center w-full lg:w-[475px]' >
                                <div className='lg:relative top-[18%] 2xl:top-[14%] xl:top-[5%] right-[15%] left-[-10%]'>
                                    <div className='relative py-[80px]  lg:p-10'>
                                        <h1 style={Text3} className="text-[#000] lg:pb-[20px]">Who we are?</h1>

                                        <h1 className='text-[#0F52BA] lg:leading-[50px] text-[20px] w-[300px] md:text-[44px] md:w-full lg:w-full lg:text-[32px] 2xl:text-[42px] xl:text-[42px] text-[42px]'>Discover Your Perfect Match with HappyMilan.</h1>
                                        <p className='text-[#000] 2xl:w-[432px] xl:w-[432px] lg:w-[410px] lg:h-[76px] mt-[30px]' style={Text3}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative lg:top-[-135px] 2xl:top-0 xl:top-0 h-[1px] w-full bg-[#DADADA]'> </div>


                {/* for Desktop */}




                {/* For Mobile Screens */}

                <div className="lg:hidden md:block h-full bg-[#FFF] w-full 2xl:mt-[160px] xl:mt-[160px] lg:mt-[160px] md:mt-[120px]">

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

                    {/* temporarily Close  */}

                </div>

                {/* For Mobile Screens */}
                <div className="2xl:mt-0 xl:mt-0 lg:mt-[-180px]">
                    <div className="lg:pt-[0px] 2xl:pt-[10px] xl:pt-[10px] pt-[100px]">
                        {/* <!-- Creating New Profile Section Started --> */}

                        <div className=' w-full flex flex-col md:flex-col md:items-center lg:flex-row justify-center my-[13%]'>
                            <div id='grid-card-section' className='lg:mr-[200px] lg:mt-[60px]'>
                                <div className="flex justify-center items-center flex-wrap justify-center md:grid grid-cols-2 2xl:gap-x-[40px] xl:gap-x-[40px] lg:gap-x-[30px] gap-x-[40px]  gap-y-[40px]  mt-2 mb-2">

                                    {
                                        data.map((res) => {
                                            return (
                                                <StarCard key={res.id} data={res} />
                                            )
                                        })
                                    }

                                </div>

                            </div>
                            <div className=' relative w-full md:w-[410px] 2xl:w-[480px] xl:w-[410px] lg:w-[310px] h-full  lg:left-[0px] 2xl:left-[30px] xl:left-[30px] top-[19px]' id='sec-3-content'>
                                <h1 className='lg:text-left text-center  2xl:w-[403px] xl:w-[403px] lg:w-[320px] text-[20px] md:text-[32px] lg:text-[25px] 2xl:text-[32px] xl:text-[32px]  mb-10' id='sec-3-h1'>Why you should register with us?</h1>
                                <p className='mb-10 lg:text-[16px] 2xl:text-[20px] xl:text-[20px]  text-[15px] text-center lg:text-left'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</p>
                                <div className='w-full lg:block flex justify-center'>
                                    <UIbuttons.CreateNewProfileBTN Textstyle={BTNText} />
                                </div>

                            </div>

                        </div>

                        {/* <!-- Creating New Profile Section End --> */}
                    </div>
                </div>


                <div className=" pt-[50px] grid place-items-center">
                    <div className="rounded-[24px] w-full h-[400px] flex justify-center items-center 2xl:w-[1106px] 2xl:h-[500px] lg:w-[900px] xl:w-[90%] 2xl:w-[1026px] xl:h-[480px] rouned-[24px] lg:h-[380px] bg-[#FFF]" style={Box}>
                        <div className=" w-full h-full  flex items-center flex-col justify-evenly">
                            <div className="2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[40px] lg:pr-[40px] pl-[15px] text-center md:text-left lg:text-left w-full lg:w-[894px] 2xl:w-[894px] xl:w-[90%]">
                                <h1 className="pb-[20px]" style={Text1}>Our Vision</h1>
                                <h1 style={Text2}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</h1>

                            </div>

                            <div className="lg:w-[894px] 2xl:w-[894px] xl:w-[90%] w-full h-[1px] bg-[#EF4136]">

                            </div>

                            <div className="2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[40px] lg:pr-[40px] pl-[15px] text-center md:text-left lg:text-left lg:w-[894px] 2xl:w-[894px] xl:w-[90%]">
                                <h1 className="pb-[20px]" style={Text1}>Our Mission</h1>
                                <h1 style={Text2}>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</h1>

                            </div>

                        </div>
                    </div>

                </div>



                <div className="">

                    {/* <!-- Explore Story Section started --> */}
                    <div className=' w-full pb-[90px] lg:pb-0 md:pb-0 sm:pb-0 flex  md:items-center flex-col md:flex-col lg:flex-row  justify-center lg:my-[90px] xl:my-[80px] 2xl:my-[90px] md:my-[0px] 2xl:p-[15px] xl:p-[15px] lg:p-[0px]'>
                        <div className='flex flex-col md:flex-row p-10'>
                            <div className='block sm:hidden lg:m-5 md:m-5 lg:my-10'>
                                <Image alt="back" width={260} height={381} loading="lazy" className='cursor-pointer' onClick={() => router.push("/successstories")} src='/assests/stories/stories-1.svg' />
                            </div>
                            <div className='hidden sm:block lg:m-5 md:m-5 lg:my-10'>
                                <Image alt="img" width={260} height={381} id='story-img' src='/rectangle-369@2x.png' className='2xl:rounded-none xl:rounded-none lg:rounded-[10px] relative md:w-[260px] w-[260px] lg:w-[220px] 2xl:w-[260px] xl:w-[260px]  top-[100px] lg:top-[0px] 2xl:h-[381px] xl:h-[381px] lg:h-[360px] md:h-[381px] h-[381px] object-cover' />
                                <div className=" lg:my-[-100px] my-[-50px] rounded-[10px] md:rounded-t-none md:rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[150px] md:w-[180px] lg:w-[260px] h-[100px] opacity-[0.9]">
                                    <div className="flex justify-between">
                                        <div className="relative left-[18px]  md:left-[10px] lg:left-[28px] top-[40px] md:top-[20px] border-black text-white font-poppins">
                                            <p className="m-0">
                                                <span>
                                                    <span
                                                        style={Text}
                                                        className="text-[9px] md:text-[12px] lg:text-[18px] font-semibold"
                                                    >{`Riya & Rohan`}</span>
                                                    <b className="font-poppins">{` `}</b>
                                                </span>
                                            </p>
                                            <p
                                                style={ReadMoreText}
                                                className="m-0 text-[8px] md:text-[12px]"
                                            >
                                                Read story
                                            </p>
                                        </div>
                                        <div className="m-5 relative top-[30px]">
                                            <Image
                                                loading="lazy"
                                                alt="img"
                                                width={8}
                                                height={8}
                                                className="cursor-pointer w-[18px] h-[18px]"
                                                src="/group-1061.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='block sm:hidden lg:m-5 md:m-5 lg:my-10 my-[10%]'>
                                {/* <img className='cursor-pointer' onClick={() => router.push("/successstories")} src='/heroSec/landing-storyimg-2.svg' /> */}
                                <Image alt="img" width={260} height={381} loading="lazy" className='cursor-pointer' onClick={() => router.push("/successstories")} src='/assests/stories/stories-2.svg' />

                            </div>

                            <div className='hidden sm:block lg:m-5 md:m-5 lg:my-10'>
                                <Image alt="img" width={260} height={381} id='story-img' src='/rectangle-492@2x.png' className='2xl:rounded-none xl:rounded-none lg:rounded-[10px] relative md:w-[260px] w-[260px] lg:w-[220px] 2xl:w-[260px] xl:w-[260px] top-[100px] lg:top-[0px] 2xl:h-[381px] xl:h-[381px] lg:h-[360px] h-[381px] object-cover' />
                                <div className=" lg:my-[-100px] my-[-50px] rounded-[10px] md:rounded-t-none md:rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[150px] md:w-[180px] lg:w-[260px] h-[100px] opacity-[0.9]">
                                    <div className="flex justify-between">
                                        <div className="relative left-[18px]  md:left-[10px] lg:left-[28px] top-[40px] md:top-[20px] border-black text-white font-poppins">
                                            <p className="m-0">
                                                <span>
                                                    <span
                                                        style={Text}
                                                        className="text-[9px] md:text-[12px] lg:text-[18px] font-semibold"
                                                    >{`Mahesh & Priya`}</span>
                                                    <b className="font-poppins">{` `}</b>
                                                </span>
                                            </p>
                                            <p
                                                style={ReadMoreText}
                                                className="m-0 text-[8px] md:text-[12px]"
                                            >
                                                Read story
                                            </p>
                                        </div>
                                        <div className="m-5 relative top-[30px]">
                                            <Image
                                                loading="lazy"
                                                alt="img"
                                                width={8}
                                                height={8}
                                                className="cursor-pointer w-[18px] h-[18px]"
                                                src="/group-1061.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                            {/* <!-- Section: 2  Start--> */}
                            <section className='h-[470px] w-full md:text-left lg:text-left p-10 2xl:mt-0 xl:mt-0 lg:mt-[20px]'>
                                <div className='lg:relative top-[35px] 2xl:top-[48px] xl:top-[48px] lg:top-[48px] 2xl:right-[25px] xl:right-[25px] lg:right-[15px] '>
                                    <h1 id='sec-2-title' className='text-[32px] 2xl:text-[32px] xl:text-[32px] lg:text-[25px] 2xl:w-[423px] xl:w-[423px] lg:w-[340px] lg:h-[131px]'>
                                        The safest, smartest and the most secure matchmaking service in India
                                    </h1>
                                    <div className='mt-[10%] md:mt-[5%] 2xl:mt-[10%] xl:mt-[10%] lg:mt-[6%] '>
                                        <span id='sec-2-stories-num'>9K+ </span>
                                        <h3 id='sec-2-explore-str'>Explore Successful Stories</h3>
                                    </div>

                                    {/* <button onClick={() => router.push("/successstories")} id='sec-2-explore-story' className='mt-[10%] md:mt-[10%] lg:mt-[18.5%] 2xl:mt-[15.5%] xl:mt-[15.5%]'><span>Explore All Stories</span></button> */}
                                    <UIbuttons.ExploreBTN />
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