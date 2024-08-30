import React, { useEffect, useState } from 'react'
import CommonNavbar from '../_components/layout/AuthNavbar'
import Image from 'next/image'
import { getCookie } from 'cookies-next'
import GlobalFooter from '../_components/layout/GlobalFooter'
import { useRouter } from 'next/router'

function index() {

    const Heading = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
    }

    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
    }

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const TitleText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px",
    }

    const btnText = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }


    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(getCookie("jwtToken"))
    }, [])

    const router = useRouter();

    const GotoLogin = () => {

        if (token) {
            router.push("/longterm/dashboard")
        } else {
            router.push("/login")
        }

    }
    return (
        <>

            <CommonNavbar />
            <div className='pt-[100px] 2xl:pt-[120px] xl:pt-[90px] lg:pt-[90px] space-y-[80px]'>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[75%] flex justify-evenly space-x-[176px] items-center'>
                        {/* <div className='flex justify-evenly space-x-[176px] items-center'> */}
                        <div>
                            <Image width={0} height={0} alt='image-1' src={"/assests/about/grid-layout.svg"} className='w-[356px] h-[530px]' />
                        </div>
                        <div>
                            <ul className='2xl:w-[500px] xl:w-[450px] lg:w-[500px] w-[500px] space-y-[15px]'>
                                <li className='w-[443px]'>
                                    <h1 style={Heading} className='text-[48px] 2xl:text-[48px] xl:text-[40px] lg:text-[48px] '>Single App, Multiple Choices.</h1>
                                </li>
                                <li>
                                    <p style={Content} className='text-[24px] 2xl:text-[24px] xl:text-[20px] lg:text-[24px]'>Welcome to HappyMilan your hub for finding a life partner, exploring dating opportunities, and making new friends. Join us to connect with a vibrant community and discover meaningful relationships.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <div className='space-y-[40px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%]'>
                        <div>
                            <span style={Text}>Who we are?</span>
                        </div>
                        <ul className='space-y-[15px]'>
                            <li style={Text2} className='text-[24px]'>Welcome to HappyMilan, where we bring people together to create meaningful connections. Our platform is designed to cater to those seeking lifelong partnerships, exciting dating opportunities, or lasting friendships.</li>
                            <li style={Text2} className='text-[16px]'>At HappyMilan, we believe that every connection starts with understanding and mutual respect. Our mission is to provide a safe and engaging environment where users can explore their relationship goals and meet like-minded individuals. Whether you’re looking for a life partner, new dates, or friends who share your interests, our platform is here to support you every step of the way.</li>
                            <li style={Text2} className='text-[16px]'>Join us and become part of a vibrant community where connections flourish, and relationships thrive. Together, we’re making the journey to meaningful connections easier and more fulfilling</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full grid place-items-center'>
                    <div className='bg-[#CACACA] h-[1px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%] grid place-items-center'></div>
                </div>
                <div className='grid place-items-center space-y-[40px]'>
                    <div className='2xl:w-[70%] xl:w-[75%] lg:w-[65%]'>
                        <ul className='space-y-[40px]'>
                            <li><h1 style={Text3} className='text-[#0F52BA]'>Mission</h1></li>
                            <li><p style={Text4}>To connect individuals through genuine and meaningful relationships, fostering a supportive community for matrimony, dating, and friendships.</p></li>
                        </ul>
                    </div>
                    <div className='2xl:w-[70%] xl:w-[75%] lg:w-[65%]'>
                        <ul className='space-y-[40px]'>
                            <li><h1 style={Text3} className='text-[#8225AF]'>Vision</h1></li>
                            <li><p style={Text4}>To be the leading platform for creating lasting connections, where everyone finds their perfect match and builds a network of meaningful relationships.</p></li>
                        </ul>
                    </div>
                </div>

                <div className='w-full grid place-items-center'>
                    <div className='bg-[#CACACA] h-[1px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%] grid place-items-center'></div>
                </div>

                <div className='w-full'>
                    <ul className='space-y-[42px] text-center'>
                        <li style={TitleText}>Discover Your Perfect Match Now!</li>
                        <li>
                            <button style={btnText} id='grad-button' onClick={GotoLogin} className='w-[244px] h-[70px] rounded-[35px]'>{token ? "Explore Now" : "Create Profile"}</button>
                        </li>
                    </ul>
                </div>
                <div className='border-t-[1px] border-t-[#E1E1E1]'>
                    <GlobalFooter />
                </div>
            </div>

        </>
    )
}

export default index