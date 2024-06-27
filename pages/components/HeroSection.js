import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Sidebar from './Navigation';
import Image from 'next/image';
import { getCookie } from 'cookies-next'
import UIbuttons from '../../UI/Buttons';


function HeroSection() {
    const router = useRouter();

    const backgroundImageUrl = 'url("/heroSec/gradient-frame-bg.png")';
    const backgroundImageUrl2 = 'url("/heroSec/mobiledesk-bg.png")';
    const backgroundimg = 'url("/download-Now.png")';

    const divStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };
    const divStyle2 = {
        backgroundImage: backgroundImageUrl2,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };
    const downloadImage = {
        backgroundImage: backgroundimg,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };

    const DownloadText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const BTNText = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }



    const data = [{ id: 1, text: "100% Privacy" }, { id: 2, text: "0% Fake Profile" }, { id: 3, text: "Fully Secured" }, { id: 4, text: "Verified Profiles" }]

    const StarCard = ({ data }) => {
        return (
            <>
                <div className="p-2 bg-gray-200  w-[178px] h-[191px]" id="profile-section">

                    <div className='grid place-items-center p-1 mt-10 w-full'>
                        <Image quality={40} loading='lazy' alt='start-icon' width={43} height={41} src='assests/Blue/LandingPage-Star.svg' />
                        <span className='mt-5'>{data.text}</span>
                    </div>

                </div>
            </>
        )
    }

    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(getCookie("jwtToken"))
    }, [])

    const Text = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const Text2 = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };


    return (
        <>
            <Sidebar />

            {/* <!-- Header Section Started --> */}
            <div className='w-full h-full'>

                <div id="landingPage-content" className='hidden 2xl:w-full xl:w-auto lg:w-full xl:pb-[50px] 2xl:mt-[-5px] 2xl:pb-[145px] lg:pb-[90px] grid place-items-center lg:block xl:mt-[1%]   w-auto pb-[200px]' style={divStyle}>

                    <div className='flex flex-col-reverse md:flex-col-reverse justify-evenly lg:flex-row justify-center'>
                        <div className=' lg:relative md:top-[50px] top-[3.8rem] 2xl:right-[-5px] xl:right-[-5px] lg:right-[0px] '  >
                            <div className='hidden md:block lg:hidden 2xl:block xl:block md:w-auto md:h-auto lg:w-[550px] lg:h-[567px]'></div>
                        </div>
                        <div id='home-title' className='relative 2xl:left-0 xl:left-0 lg:left-[15%] flex items-center m-5 items-center lg:w-[475px] 2xl:w-[475px] xl:w-[475px]' >
                            <div className='lg:relative top-[18%] lg:top-[8%] 2xl:top-[14%] xl:top-[5%] right-[5%]'>
                                <div className='relative py-[80px]  lg:p-10'>
                                    <h1 className='lg:leading-[50px] text-[#FFF] text-[20px] w-[300px] 2x:w-[300px] xl:w-[450px] md:text-[44px] md:w-full lg:w-full lg:text-[32px] 2xl:text-[44px] xl:text-[44px]'>Discover Your Perfect Match with HappyMilan.</h1>
                                    <p className='text-[#fff] lg:w-[432px] lg:h-[76px] mt-[30px]'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>


                                    {/* {!token ?  */}
                                    <button className='w-[231px] h-[60px] lg:w-[220px] lg:h-[50px] 2xl:w-[231px] 2xl:h-[60px] xl:w-[220px]  mt-[40px] xl:mt-[30px] flex items-center justify-center' onClick={!token ? () => router.push("/login") : () => router.push("/dashboard")} >{!token ? "Free Registration" : "Explore Now"} <Image quality={40} loading='lazy' alt='icon' width={18} height={20} className='ml-[15px]' src='/assests/Blue/RegisterNow-icon.svg' /></button>
                                    {/* :
                                    <button className='w-[231px] h-[60px] lg:w-[220px] lg:h-[50px] 2xl:w-[231px] 2xl:h-[60px] xl:w-[220px]  mt-[40px] xl:mt-[30px] flex items-center justify-center' onClick={() => router.push("/dashboard")} >Explore Now  <Image quality={40} loading='lazy' alt='icon' width={18} height={20} className='ml-[15px]' src='/assests/Blue/RegisterNow-icon.svg' /></button>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='lg:hidden blockw-auto 2xl:pb-[200px] xl:pb-[200px] lg:pb-[200px] pb-[200px]' style={divStyle2} id=''>

                    <div className='flex flex-col-reverse md:flex-col-reverse justify-evenly lg:flex-row justify-center'>
                        <div className='lg:relative md:top-[50px] top-[3.8rem] right-[-5px] '  >
                            <div className='hidden md:block md:w-auto md:h-auto lg:w-[550px] lg:h-[567px]'></div>
                        </div>
                        <div id='home-title' className='flex items-center m-5 items-center lg:w-[475px]' >
                            <div className='lg:relative top-[18%] right-[5%]'>
                                <div className='relative py-[80px]  lg:p-10'>
                                    <h1 className='text-[#fff]  lg:leading-[50px] p-1 text-[20px] w-full md:text-[44px] md:w-full lg:w-full lg:text-[44px]'>Discover Your Perfect Match with HappyMilan.</h1>
                                    <p className='w-full lg:w-[432px] text-[#fff] lg:h-[76px] mt-[30px]'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>

                                    <button className='w-[231px] h-[60px] lg:w-[231px] lg:h-[60px] 2xl:w-[231px] 2xl:h-[60px] xl:w-[220px]  mt-[40px] xl:mt-[30px] flex items-center justify-center' onClick={!token ? () => router.push("/login") : () => router.push("/dashboard")} >{!token ? "Free Registration" : "Explore Now"} <Image quality={40} alt='icon' width={18} height={20} className='ml-[15px]' src='/assests/Blue/RegisterNow-icon.svg' /></button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Header Section End --> */}



                {/* <!-- Explore Story Section started --> */}

                <div className=' w-full pb-[90px] lg:pb-0 md:pb-0 sm:pb-0 flex  md:items-center flex-col md:flex-col lg:flex-row  justify-center lg:my-[90px] xl:my-[80px] 2xl:my-[90px] md:my-[0px] p-[15px]'>
                    <div className='flex flex-col md:flex-row p-10'>
                        <div className='block sm:hidden lg:m-5 md:m-5 lg:my-10'>
                            <Image quality={40} loading='lazy' alt='icon' width={260} height={381} className='cursor-pointer' onClick={() => router.push("/successstories")} src='/assests/storySec/stry-1.svg' />
                        </div>
                        <div className='hidden sm:block lg:m-5 md:m-5 lg:my-10'>
                            <Image quality={40} loading='lazy' alt='story-img-1' width={260} height={381} id='story-img' src='/rectangle-369@2x.png' className='2xl:rounded-none xl:rounded-none lg:rounded-[10px] relative md:w-[260px] w-[260px] lg:w-[220px] 2xl:w-[260px] xl:w-[260px]  top-[100px] lg:top-[0px] 2xl:h-[381px] xl:h-[381px] lg:h-[360px] md:h-[381px] h-[381px] object-cover' />
                            {/* <div id='story-img-background' className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[220px] md:w-[260px] w-[200px] h-[100px] opacity-[0.9]'>
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
                                    <div onClick={() => router.push("/successstories")} className='cursor-pointer m-5'>
                                        <Image
                                            loading='lazy'
                                            width={8}
                                            height={8}
                                            className="w-8 h-8"
                                            alt="img-1"
                                            src="/group-1061.svg"
                                        />
                                    </div>

                                </div>
                            </div> */}
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
                                            style={Text2}
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
                            <Image quality={40} loading='lazy' alt='icon' width={260} height={381} className='cursor-pointer' onClick={() => router.push("/successstories")} src='/assests/storySec/stry-2.svg' />
                        </div>

                        <div className='hidden sm:block lg:m-5 md:m-5 lg:my-10'>
                            <Image quality={40} loading='lazy' alt='story-img-1' width={260} height={381} id='story-img' src='/rectangle-492@2x.png' className='2xl:rounded-none xl:rounded-none lg:rounded-[10px] relative md:w-[260px] w-[260px] lg:w-[220px] 2xl:w-[260px] xl:w-[260px] top-[100px] lg:top-[0px] 2xl:h-[381px] xl:h-[381px] lg:h-[360px] h-[381px] object-cover' />
                            {/* <div id='story-img-background' className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] 2xl:w-[260px] xl:w-[260px] lg:w-[220px] md:w-[260px] w-[200px] h-[100px] opacity-[0.9]'>
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
                                    <div onClick={() => router.push("/successstories")} className='cursor-pointer m-5 relative top-[10px]'>
                                        <Image
                                            loading='lazy'
                                            width={8}
                                            height={8}
                                            className="w-8 h-8"
                                            alt="img-2"
                                            src="/group-1061.svg"
                                        />
                                    </div>

                                </div>
                            </div> */}
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
                                            style={Text2}
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
                                <UIbuttons.ExploreBTN />
                                {/* <button onClick={() => router.push("/successstories")} id='sec-2-explore-story' className='mt-[10%] md:mt-[10%] lg:mt-[18.5%] 2xl:mt-[15.5%] xl:mt-[15.5%]'><span>Explore All Stories</span></button> */}
                            </div>
                        </section>
                        {/* <!-- Section: 2  End--> */}

                    </div>
                </div>

                {/* <!-- Explore Story Section End --> */}


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
                    <div className=' relative w-full md:w-[410px] 2xl:w-[410px] xl:w-[410px] lg:w-[310px] h-full  lg:left-[0px] 2xl:left-[30px] xl:left-[30px] top-[19px]' id='sec-3-content'>
                        <h1 className='lg:text-left text-center  2xl:w-[403px] xl:w-[403px] lg:w-[320px] text-[20px] md:text-[32px] lg:text-[25px] 2xl:text-[32px] xl:text-[32px]  mb-10' id='sec-3-h1'>Why you should register with us?</h1>
                        <p className='mb-10 lg:text-[16px] 2xl:text-[20px] xl:text-[20px]  text-[15px] text-center lg:text-left'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</p>
                        <div className='w-full lg:block flex justify-center'>
                            {/* <button onClick={() => router.push("/login")}><span>Create New Profile</span></button> */}
                            <UIbuttons.CreateNewProfileBTN Textstyle={BTNText} />
                        </div>

                    </div>

                </div>

                {/* <!-- Creating New Profile Section End --> */}

                {/* <!-- Download App Section Started --> */}

                <div className="w-full">

                    <div className='relative top-[50px] md:top-[0px]'>

                        <div id="section-4-title" className='w-full'>
                            <span className='text-center text-[20px] md:text-[25px] lg:text-[32px]'>Your Gateway to Limitless Potential<br />
                                Get the App Today!</span>
                        </div>

                        <div className='2xl:pr-0 xl:pr-0 lg:pr-[10px] 2xl:pl-0 xl:pl-0 lg:pl-[10px] grid place-items-center'>
                            <div className='hidden md:block w-full lg:w-[900px] lg:h-[380px] 2xl:w-[1066px] 2xl:h-[446.318px] xl:w-[1066px] xl:h-[446.318px] ' style={downloadImage}>

                                <div className='w-[254px] m-10 my-[11%]'>
                                    <h1 className='text-center ml-[6%] text-[18px] pb-[7%]' style={DownloadText}>Download App</h1>
                                    <div className=''>
                                        <div>
                                            {/* <Image quality={40} loading='lazy' alt='Google-Play' width={244} height={73} className='m-2 w-[244px] h-[73px]' src='/image-1@2x.png' /> */}
                                            <UIbuttons.GooglePlayBTN />
                                        </div>
                                        <div className="mt-[4%]">
                                            {/* <Image quality={40} loading='lazy' alt='App-Store' width={244} height={74} className='m-2 w-[244px] h-[74px]' src='/image-2@2x.png' /> */}
                                            <UIbuttons.AppStoreBTN />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='block md:hidden w-[244px] m-10 2xl:my-[30%] xl:my-[30%] lg:my-[30%] md:my-[30%] my-[10%]'>
                                <h1 className='text-center text-[18px] pb-[6%]' style={DownloadText}>Download App</h1>
                                <div className=''>
                                    <div>
                                        {/* <Image quality={40} loading='lazy' alt='Google-Play' width={244} height={73} className='m-2 w-[250px] md:w-[200px] lg:w-[244px] h-[73px]' src='/image-1@2x.png' /> */}
                                        <UIbuttons.GooglePlayBTN />
                                    </div>
                                    <div>
                                        {/* <Image quality={40} loading='lazy' alt='App-Store' width={244} height={73} className='m-2 w-[250px] md:w-[200px]  lg:w-[244px] h-[73px]' src='/image-2@2x.png' /> */}
                                        <UIbuttons.AppStoreBTN />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Download App Section End --> */}

                {/* <!-- Footer Section Started --> */}

                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>
                {/* <!-- Footer Section End --> */}


            </div>

        </>
    )
}

export default HeroSection