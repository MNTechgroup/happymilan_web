import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NewUser from '../_components/Container/View/SignUp/NewUser'
import LoginUser from '../_components/Container/View/UserLogin/LoginUser'
import SocialLogin from '../_components/Container/View/UserLogin/SocialLogin'
import { getCookie } from 'cookies-next'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function LoginBox() {

    const { status } = useSelector((state) => state.login)
    const router = useRouter();
    useEffect(() => {
        const token = getCookie("jwtToken");
        if (status === "idle" && token) {
            router.push("/longterm/dashboard")
        }
    }, [router, status])

    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "45px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }

    const ListText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const [OtpBoxActive, SetOtpBoxActive] = useState(false)

    const [activeTab, SetActiveTab] = useState(1)

    return (
        <>
            <div className='absolute m-[20px]'>
              <Image quality={45} loading="lazy" alt="img" width={148} height={36} src={"/heroSec/Happy-milan2.svg"} />
            </div>
            <div className='flex justify-evenly items-center h-[100vh]  w-full'>
                <div className='lg:block hidden pl-[10px] space-y-[134px] w-[593px]'>
                    <div className=''>
                        <div>
                            <h1 id="gradient-text-login" style={TitleText}>Connecting Hearts, Creating Forever Bonds.</h1>
                        </div>
                        <div className="relative top-[20px] left-[5px] w-[520px]">
                            <ul className="flex justify-between">
                                <li className="flex items-center space-x-[10px]">
                                    <span><Image alt="icon-1" width={14} height={18} src="/loginassests/List-icon-1.svg" /></span>
                                    <span style={ListText}>100% Privacy</span>
                                </li>
                                <li className="flex items-center space-x-[10px]">
                                    <span><Image alt="icon-2" width={14} height={14} src="/loginassests/List-icon-2.svg" /></span>
                                    <span style={ListText}>0% Fake Profile</span>
                                </li>
                                <li className="flex items-center space-x-[10px]">
                                    <span><Image alt="icon-3" width={14} height={18} src="/loginassests/List-icon-3.svg" /></span>
                                    <span style={ListText}>Fully Secured</span>
                                </li>
                                <li className="flex items-center space-x-[10px]">
                                    <span><Image alt="icon-4" width={20} height={19} src="/loginassests/List-icon-4.svg" /></span>
                                    <span style={ListText}>Verified Profiles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-[21px]'>
                        <h1 style={Text2}>Get the App Today</h1>
                        <ul className='flex space-x-[16px]'>
                            <div>
                                <Image alt="play-store" width={140} height={38} src='/image-1@2x.png' />
                            </div>
                            <div>
                                <Image alt="app-store" width={128} height={38} src='/image-2@2x.png' />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-[18px]  border-[1px] border-[#E6E6E6] w-[420px] h-[402px]'>
                        <div className=''>
                            {
                                OtpBoxActive ? <></> : <>
                                    <div className='pt-[40px] flex justify-center w-full'>
                                        <div className=' w-[300px] h-[50px] rounded-[25px] bg-[#F9F9F9] flex justify-between'>
                                            <div id={activeTab === 1 ? 'grad-button' : ""} onClick={() => SetActiveTab(1)} className={`cursor-pointer grid place-items-center h-[50px] w-[151px] rounded-[25px]`}>
                                                <span className='select-none'>New User?</span>
                                            </div>
                                            <div id={activeTab === 2 ? "grad-button" : ""} onClick={() => SetActiveTab(2)} className={`cursor-pointer grid place-items-center h-[50px] w-[151px] rounded-[25px]`}>
                                                <span className='select-none'>Login</span>
                                            </div>
                                        </div>
                                    </div>
                                </>}
                            {activeTab === 1 ?
                                <><NewUser SetOtpBoxActive={SetOtpBoxActive} /> </>
                                :
                                <> <LoginUser /> </>
                            }
                        </div>
                    </div>
                    <div className='relative top-[29px]'>
                        <SocialLogin />
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginBox