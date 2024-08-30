import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync } from '../../../../../store/reducers/loginReducer';
import { STATUSES } from '../../../../../store/reducers/MyProfile';
import ResetPassword from './ResetPassword';

function LoginUser() {

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    const { status, error, handleError } = useSelector(state => state.login);

    const LoginButton = async (e) => {
        e.preventDefault();

        const { email, password } = credentials;

        if (!email.trim() && !password.trim()) {
            // Handle empty fields case if needed
            return;
        }

        // All validations passed, proceed with login
        await dispatch(loginAsync(credentials));
    };

    const NumText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const StepListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const ScanText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const [ActiveTab, SetActiveTab] = useState(true)

    const [ShowPass, SetshowPass] = useState(false)

    return (
        <>
            {
                ActiveTab ?
                    <>
                        <div className='mt-[30px] space-y-[45px] h-full flex flex-col items-center justify-evenly'>
                            <div className='w-full flex flex-col items-center space-y-[30px]'>
                                <ul className='space-y-[17px]'>
                                    <li className='flex'>
                                        <Image src={"/assests/login/user-icon.svg"} alt='user' width={16} height={14} className='absolute mt-[18px] ml-[20px]' />
                                        <input type='email' placeholder='Email or Mobile' value={credentials?.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} className='pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none' />
                                    </li>
                                    <li className='flex'>
                                        <Image onClick={() => SetshowPass(!ShowPass)} width={18} height={18} alt='password' className='absolute left-[auto] ml-[260px] mt-[15px]' src={ShowPass ? "/assests/login/view-pass.png" : "/assests/login/hide-pass.png"} />
                                        <Image src={"/assests/login/email-icon.svg"} alt='user' width={18} height={14} className='absolute mt-[17px] ml-[20px] inline' />
                                        <input type={ShowPass ? 'text' : 'password'} placeholder='Enter Password' value={credentials?.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className='pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none  pr-[50px]' />
                                    </li>
                                </ul>

                                <div className='relative top-[-2px]'>
                                    <button onClick={LoginButton} id='grad-button' className='w-[300px] h-[50px] rounded-[25px]'>

                                        {status == STATUSES.LOADING ?
                                            <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                                            : "Login"}
                                    </button>
                                </div>
                            </div>
                            <div className='w-full relative top-[-10px]'>

                                <ul className='w-full flex justify-evenly'>
                                    <li><ResetPassword /></li>
                                    <li onClick={() => SetActiveTab(false)} className='flex space-x-[11px] cursor-pointer'><p style={Text} className='select-none'>Use QR Code</p>
                                        <Image width={20} height={20} alt='qr' src={"/assests/login/qr-icon.svg"} /></li>
                                </ul>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className='mt-[52px] space-y-[47px] h-full flex flex-col items-center justify-evenly'>
                            <div className='pl-[20px] pr-[20px] w-full flex justify-evenly items-center space-x-[47px]'>
                                <div className=" space-y-[30px]">
                                    <div>
                                        <p style={ScanText}>How to Scan?</p>
                                    </div>
                                    <ul className='space-y-[14px]'>
                                        <li className='flex space-x-[13px]'>
                                            <div className='p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full'>
                                                <p style={NumText}>1</p>
                                            </div>
                                            <span style={StepListText}>Open App</span>
                                        </li>
                                        <li className='flex space-x-[13px]'>
                                            <div className='p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full'>
                                                <p style={NumText}>2</p>
                                            </div>
                                            <span style={StepListText}>Go to Profile</span>
                                        </li>
                                        <li className='flex space-x-[13px]'>
                                            <div className='p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full'>
                                                <p style={NumText}>3</p>
                                            </div>
                                            <span style={StepListText}>Click on “Connect” to Log in</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div>
                                        <Image alt="qr-code" width={125} height={125} className="h-[100px] w-[100px] md:w-[100px] md:h-[100px] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px]" src="/loginassests/login-QR.svg" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[340px] h-[1px] bg-[#E6E6E6]'></div>
                            </div>
                            <div onClick={() => SetActiveTab(true)} className='relative top-[-10px]'>
                                <p className='select-none'>Use Password</p>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default LoginUser