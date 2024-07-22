import Image from 'next/image'
import React from 'react'
import Navbar from '../_components/layout/AuthNavbar'
import GlobalFooter from '../_components/layout/GlobalFooter'

function index() {

    const GradientText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px", /* 129.63% */
    }

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }   
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    return (
        <>
            <Navbar />

            <div className='w-full h-full 2xl:pt-[100px] xl:pt-[100px] lg:pt-[5%] space-y-[50px]'>

                <div className='flex items-center justify-between pl-[100px] pr-[100px]'>
                    <div>
                        <ul className='w-[468px] space-y-[20px]'>
                            <li id='gradient-Text-style' style={GradientText} className='2xl:text-[54px] xl:text-[54px] lg:text-[45px] text-[50px]'>Works seamlessly on Web & Mobile</li>
                            <li style={Text}>HappyMilan chat is optimized for both mobile and web without any hassle.</li>
                        </ul>
                    </div>
                    <div>
                        <Image width={0} height={0} alt='image-1' loading='lazy' src={"/assests/chat-features/image-1.svg"} className='2xl:w-[550px] 2xl:h-[486px] xl:w-[550px] xl:h-[486px] lg:w-[500px] lg:h-[436px] w-[550px] h-[486px]' />
                    </div>
                </div>

                <div className='bg-[#FDF8FF] w-full 2xl:h-[650px] xl:h-[550px] lg:h-[650px] h-[650px]'>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className='w-full flex items-center  justify-between pl-[100px] pr-[100px]'>
                            <div>
                                <ul className='w-[407px] space-y-[20px]'>
                                    <li><span style={Text2}>Emoji</span></li>
                                    <li><h1 id='gradient-Text-style' style={GradientText} className='2xl:text-[54px] xl:text-[54px] lg:text-[45px] text-[50px]'>Share Your Emotions with Loved Ones.</h1></li>
                                    <li><p style={Text}>Express your reaction or say 'Hi' with your favorite emoji.</p></li>
                                </ul>
                            </div>
                            <div className=' '>
                                <Image width={0} height={0} alt='image-1' loading='lazy' src={"/assests/chat-features/image-2.svg"} className='w-[343px] h-[500px]' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between pl-[100px] pr-[100px] items-center'>
                    <div>
                        <Image width={0} height={0} alt='image-1' loading='lazy' src={"/assests/chat-features/image-3.svg"} className='2xl:w-[341px] 2xl:h-[500px] xl:w-[331px] xl:h-[490px] lg:w-[300px] lg:h-[359px] w-[341px] h-[500px]' />
                    </div>
                    <div>
                        <ul className='w-[502px] space-y-[20px]'>
                            <li><span style={Text2}>Send or Receive Photo</span></li>
                            <li><h1 id='gradient-Text-style' style={GradientText} className='2xl:text-[54px] xl:text-[54px] lg:text-[45px] text-[50px]'>Share your best photo with your favorite people</h1></li>
                            <li><p style={Text}>Send a photo effortlessly and get a quick response from your favorite people</p></li>
                        </ul>
                    </div>
                </div>
                <div className='bg-[#FAFBFF] flex justify-between pl-[100px] pr-[130px] items-center pt-[10px] pb-[10px]'>

                    <div>
                        <ul className='w-[407px] space-y-[20px]'>
                            <li><span style={Text2}>Voice Chat</span></li>
                            <li><h1 id='gradient-Text-style' style={GradientText} className='text-[54px]'>Impress with a Quick Voice Chat.</h1></li>
                            <li><p style={Text}>Send high-quality, noise-free voice notes anytime.</p></li>
                        </ul>
                    </div>
                    <div>
                        <Image width={0} height={0} alt='image-1' loading='lazy' src={"/assests/chat-features/image-4.svg"} className='w-[504px] h-[500px]' />
                    </div>
                </div>



                <div className='flex justify-between pl-[30px] pr-[100px] items-center'>
                    <div>
                        <Image width={0} height={0} alt='image-1' loading='lazy' src={"/assests/chat-features/image-5.svg"} className='w-[504px] h-[500px]' />

                    </div>
                    <div>
                        <ul className='w-[502px] space-y-[20px]'>
                            <li><span style={Text2}>Short Video</span></li>
                            <li><h1 id='gradient-Text-style' style={GradientText} className='text-[54px]'>Send or Receive short video</h1></li>
                            <li><p style={Text}>Send a short video and reveal your authentic self.</p></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='w-full h-full pt-[50px]'>
                        <div className='w-full h-[229px] bg-[#FDF8FF]'>
                            <div className='flex justify-between items-center pr-[100px] pl-[100px]'>
                                <div className=' space-y-[37px]'>
                                    <p className='text-[24px] text-[#000]' style={Text3}>Your gateway to the limitless potentials, Download App</p>
                                    <ul className='flex space-x-[40px]'>
                                        <li>
                                            <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/play-store.svg"} />
                                        </li>
                                        <li>
                                            <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/app-store.svg"} />
                                        </li>
                                    </ul>
                                </div>
                                <div className='relative top-[30px]'>
                                    <Image width={0} height={0} alt='app' loading='lazy' src={"/heroSec/assests/app-frame.svg"} className='w-[160.043px] h-[auto]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <GlobalFooter />
                </div>

            </div>

        </>
    )
}

export default index