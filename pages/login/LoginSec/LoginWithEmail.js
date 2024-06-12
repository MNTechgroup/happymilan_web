import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, resetError } from '../../../store/reducers/loginReducer';
import Image from 'next/image';
import axios from 'axios';
import ResetPasswordSuccess from '../../components/Models/ResetPasswordSuccess';
import { Alert, Snackbar } from '@mui/material';
import GoogleLoginButton from '../../components/Buttons/GoogleLoginButton'
import { STATUSES } from '../../../store/reducers/MyProfile';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail, validatePassword } from '../../../utils/form/validationRules';


function LoginWithEmail({ rendercomponent, setrendercomponent }) {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const [theStep, SetTheStep] = useState(1)

    //OTP Section

    const [otp, setOTP] = useState(['', '', '', '']); // Initialize an array to store OTP digits
    const otpInputs = useRef([]);



    const handleOTPChange = (text, index) => {
        if (text.length === 1 && index < 3) {
            // Auto focus to the next input
            otpInputs.current[index + 1].focus();
        }

        // Update the OTP array with the entered digit
        const updatedOTP = [...otp];
        updatedOTP[index] = text;
        setOTP(updatedOTP);
    };

    const [countdown, setCountdown] = useState(60);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let timer;

        if (isCounting && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsCounting(false);
            // Handle what happens when the countdown reaches 0
        }

        return () => clearTimeout(timer);
    }, [countdown, isCounting]);



    const [ResetPasswordData, setResetPasswordData] = useState({
        email: "",
        otp: "",
        password: ""
    })


    const handleResendClick = async () => {


        if (!isCounting) {
            // Start the countdown when clicked
            setIsCounting(true);
            // Simulate sending OTP (you can replace this with your actual logic)
            // Example: sendOTP();
            try {


                let data = JSON.stringify({
                    "email": ResetPasswordData.email
                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/forgot-password`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        SetTheStep(2)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                // Handle errors (e.g., display an error message)
                console.error('OTP Sent failed:', error);
            }
        }
    }
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setResetPasswordData(prevState => ({ ...prevState, [name]: value }))

    }

    const Submit = () => {
        setIsModalOpen(true)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, SetisLoading] = useState(false)

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const ChangeStep = () => {
        if (theStep === 1) {
            SetisLoading(true)
            let data = JSON.stringify({
                "email": ResetPasswordData.email
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/forgot-password`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    SetisLoading(false)
                    SetTheStep(theStep + 1)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else if (theStep === 2) {

            // otp.join('')

            const axios = require('axios');
            let data = JSON.stringify({
                "email": ResetPasswordData.email,
                "otp": otp.join('')
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/verify-reset-otp`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    SetTheStep(theStep + 1)
                })
                .catch((error) => {
                    console.log(error);
                });


        } else if (theStep === 3) {

            // console.log(otp.join(''))
            const axios = require('axios');
            let data = JSON.stringify({
                "password": ResetPasswordData.password,
                "email": ResetPasswordData.email,
                "otp": otp.join('')
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/reset-password`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    setIsModalOpen(true)
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    }


    const HandleExlopre = () => {
        settheResetPassword(false)
        setIsModalOpen(false)
    }

    const TextStyle = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const ResetPassword = {
        color: "#0F52BA",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const ContinueWith = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text4 = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const { status, error, handleError } = useSelector(state => state.login);



    const [openOTPModal, setOpenOTPModal] = React.useState(false);
    const [AlertMessage, SetAlertMessage] = useState('');
    const [isModal, setisModal] = useState(false);

    const handleCloseOTPAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenOTPModal(false);

    };
    { error && toast.error(error) }

    const [Erros, SetErrors] = useState({
        setEmailError: "",
        setPasswordError: ""
    })

    const LoginButton = async (e) => {
        e.preventDefault();
    
        const { email, password } = credentials;
    
        if (!email.trim() && !password.trim()) {
            // Handle empty fields case if needed
            return;
        }
    
        if (!email.trim()) {
            SetErrors((prev) => ({ ...prev, setEmailError: "Please enter a valid email address." }));
            return;
        }
    
        if (!validateEmail(email)) {
            SetErrors((prev) => ({ ...prev, setEmailError: "Please enter a valid email address." }));
            return;
        }
    
        SetErrors((prev) => ({ ...prev, setEmailError: "" }));
    
        if (!validatePassword(password)) {
            SetErrors((prev) => ({ ...prev, setPasswordError: "Password should be at least 6 characters long." }));
            return;
        }
    
        SetErrors((prev) => ({ ...prev, setPasswordError: "" }));
    
        // All validations passed, proceed with login
        await dispatch(loginAsync(credentials));
    
        setTimeout(() => {
            dispatch(resetError());
        }, 1000);
    };


    useEffect(() => {
        dispatch(resetError());
    }, []);



    const [theResetPassword, settheResetPassword] = useState(false);

    const [showPassword, setshowPassword] = useState(false)
    const [showSecondPassword, setshowSecondPassword] = useState(false)


    return (

        <>
            <div>
                <Image loading='lazy' alt='arrow-icon' width={0} height={0} style={{ height: "auto", width: "auto" }} className="absolute p-[20px]" onClick={() => setrendercomponent(0)} src="/assests/common/Back-Arow.svg" />
            </div>
            {!theResetPassword ? <>
                <div className='w-full h-full grid place-items-center'>

                    <div className='relative top-[10px] 2xl:top-[20px] xl:top-[10px] flex flex-col 2xl:gap-y-[10px] xl:gap-y-[10px] gap-y-[10px] 2xl:my-[10%] xl:my-[50px]'>
                        <h1 style={TextStyle} className='mb-[30px]'>Sign in via Email</h1>
                        <div>
                            <input type='email' name='email' value={credentials.email} placeholder='Enter Email' className='hover:border-[#000] focus:border-[1px] focus:border-[black] outline-none border-[1px] pl-[50px] border-[#E6E6E6] rounded-[8px] w-[300px] 2xl:h-[50px] h-[50px] xl:h-[45px]' onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
                            <Image loading="lazy" alt='message-icon' width={20.776} height={16} className='w-[20.776px] h-[16px] absolute mt-[-34px] 2xl:mt-[-35px] xl:mt-[-33px] ml-[18px]' src='/assests/Blue/Message.svg' />

                        </div>
                        {<p  style={{ display: Erros.setEmailError == "" ? "none" : "" , color: "red", fontSize: "12px" }}>{Erros.setEmailError}</p>}
                        <div>
                            <input type={showPassword ? "text" : "password"} name='password' value={credentials.password} placeholder='Enter Password' className='hover:border-[#000] pr-[45px] focus:border-[1px] focus:border-[black] outline-none border-[1px] pl-[50px] border-[#E6E6E6] rounded-[8px] w-[300px] 2xl:h-[50px] h-[50px] xl:h-[45px]' onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                            <Image loading="lazy" alt='password-icon' width={14.023} height={18} className='w-[14.023px] h-[18px] absolute mt-[-36px] 2xl:mt-[-35px] xl:mt-[-33px] ml-[20px]' src='/loginassests/lock-icon.svg' />
                            {/* <div className='absolute right-[11px]  mt-[-40px] w-[30px] h-[30px] rounded-full bg-[#F3F8FF]'></div> */}
                            <Image loading="lazy" alt='show-password' onClick={() => setshowPassword(!showPassword)} width={20.776} height={16} className="hover:bg-[#F3F8FF] p-[2px] rounded-full  cursor-pointer absolute right-[15px] mt-[-35px]" src={showPassword ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"} />

                        </div>
                        {<p style={{ display: Erros.setPasswordError == "" ? "none" : "" , color: "red", fontSize: "12px" }}>{Erros.setPasswordError}</p>}
                        <div>
                            <h1 className='cursor-pointer' style={ResetPassword} onClick={() => settheResetPassword(true)}>Reset Password</h1>
                        </div>
                        <div>
                            <button id='grad-btn' onClick={LoginButton} className='w-[300px] 2xl:h-[50px] xl:h-[45px] h-[50px] rounded-[8px] bg-[#0F52BA] text-[#FFF] hover:opacity-[0.95]'>
                                {status == STATUSES.LOADING
                                    ? <>
                                        <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />

                                    </>
                                    :
                                    "Login"}
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center 2xl:mt-[-16px]  xl:mt-[-59px]'>

                        <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                        <div className='p-[12px]'>
                            <h1 className='text-[#000]' style={ContinueWith}>or continue with</h1>
                        </div>
                        <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                    </div>

                    <div className='flex items-center justify-center gap-x-[30px] mt-[-10px] relative 2xl:top-[-9px] xl:top-[-7px]'>
                        <GoogleLoginButton />
                        <div className="xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]">
                            <Image loading="lazy" alt="fb-icon" width={50} height={50} src='/assests/social/facebook-icon-btn.svg' />
                        </div>
                        <div className="cursor-pointer xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]">
                            {rendercomponent != 1 ?
                                <div className="2xl:w-[50px] 2xl:h-[50px]  h-[50px] w-[50px] xl:w-[40px] xl:h-[40px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">

                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_576_254)">
                                            <path d="M2.01493 20C1.44838 20 0.970933 19.8058 0.582575 19.4174C0.194192 19.0291 0 18.5516 0 17.9851V2.01493C0 1.44838 0.194192 0.97092 0.582575 0.582537C0.970933 0.194179 1.44838 0 2.01493 0H23.9552C24.5218 0 24.9992 0.194179 25.3876 0.582537C25.776 0.97092 25.9701 1.44838 25.9701 2.01493V17.9851C25.9701 18.5516 25.776 19.0291 25.3876 19.4174C24.9992 19.8058 24.5218 20 23.9552 20H2.01493ZM12.9851 9.51493L0.820895 1.34328V17.9851C0.820895 18.3333 0.932836 18.6194 1.15672 18.8433C1.3806 19.0672 1.66667 19.1791 2.01493 19.1791H23.9552C24.3035 19.1791 24.5896 19.0672 24.8134 18.8433C25.0373 18.6194 25.1493 18.3333 25.1493 17.9851V1.34328L12.9851 9.51493ZM12.9851 8.47015L24.5149 0.820895H1.49254L12.9851 8.47015ZM0.820895 1.34328V0.820895V17.9851C0.820895 18.3333 0.932836 18.6194 1.15672 18.8433C1.3806 19.0672 1.66667 19.1791 2.01493 19.1791H0.820895V1.34328Z" fill="#0F52BA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_576_254">
                                                <rect width="26" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                :
                                <div id='grad-btn' className="bg-[#0F52BA] 2xl:w-[50px] 2xl:h-[50px]  h-[50px] w-[50px] xl:w-[45px] xl:h-[45px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">

                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_576_254)">
                                            <path d="M2.01493 20C1.44838 20 0.970933 19.8058 0.582575 19.4174C0.194192 19.0291 0 18.5516 0 17.9851V2.01493C0 1.44838 0.194192 0.97092 0.582575 0.582537C0.970933 0.194179 1.44838 0 2.01493 0H23.9552C24.5218 0 24.9992 0.194179 25.3876 0.582537C25.776 0.97092 25.9701 1.44838 25.9701 2.01493V17.9851C25.9701 18.5516 25.776 19.0291 25.3876 19.4174C24.9992 19.8058 24.5218 20 23.9552 20H2.01493ZM12.9851 9.51493L0.820895 1.34328V17.9851C0.820895 18.3333 0.932836 18.6194 1.15672 18.8433C1.3806 19.0672 1.66667 19.1791 2.01493 19.1791H23.9552C24.3035 19.1791 24.5896 19.0672 24.8134 18.8433C25.0373 18.6194 25.1493 18.3333 25.1493 17.9851V1.34328L12.9851 9.51493ZM12.9851 8.47015L24.5149 0.820895H1.49254L12.9851 8.47015ZM0.820895 1.34328V0.820895V17.9851C0.820895 18.3333 0.932836 18.6194 1.15672 18.8433C1.3806 19.0672 1.66667 19.1791 2.01493 19.1791H0.820895V1.34328Z" fill="#FFF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_576_254">
                                                <rect width="26" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            }
                        </div>
                        <div className="xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px] ">
                            <div onClick={() => setrendercomponent(2)} className="cursor-pointer group hover:bg-[#F8F8F8] 2xl:w-[50px] 2xl:h-[50px] h-[50px] w-[50px] xl:w-[45px] xl:h-[45px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">

                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:opacity-[0.70]'>
                                    <path d="M18.5714 20C16.6017 20 14.5238 19.4589 12.3377 18.3766C10.1515 17.2944 8.08983 15.7792 6.1526 13.8312C4.21537 11.8831 2.70563 9.82143 1.62338 7.6461C0.541126 5.47078 0 3.39827 0 1.42857C0 1.02041 0.132965 0.68027 0.398896 0.408149C0.664805 0.136049 0.997208 0 1.3961 0H3.75737C4.15289 0 4.48052 0.113636 4.74026 0.340909C5 0.568182 5.18398 0.876623 5.29221 1.26623L5.90679 3.78705C5.95161 4.14114 5.93074 4.45887 5.84416 4.74026C5.75758 5.02165 5.6144 5.25136 5.41464 5.42942L2.62987 7.95455C3.23593 9.01515 3.87446 9.98918 4.54545 10.8766C5.21645 11.7641 5.91991 12.5866 6.65584 13.3442C7.47835 14.1883 8.3658 14.9567 9.31818 15.6494C10.2706 16.342 11.3203 17.0022 12.4675 17.6299L15.1948 14.8377C15.4113 14.5996 15.6403 14.4426 15.8819 14.3669C16.1235 14.2911 16.4032 14.2749 16.7208 14.3182L18.7338 14.7727C19.1234 14.8377 19.4318 15.0175 19.6591 15.3123C19.8864 15.607 20 15.9466 20 16.3312V18.6039C20 19.0028 19.864 19.3352 19.5919 19.6011C19.3197 19.867 18.9796 20 18.5714 20ZM2.27273 7.33766L5.03247 4.83766C5.11905 4.75108 5.17857 4.63203 5.21104 4.48052C5.24351 4.329 5.24892 4.18831 5.22727 4.05844L4.57792 1.23377C4.55628 1.06061 4.48593 0.930736 4.36688 0.844156C4.24784 0.757576 4.10173 0.714286 3.92857 0.714286H1.16883C1.03896 0.714286 0.930736 0.757576 0.844156 0.844156C0.757576 0.930736 0.714286 1.03896 0.714286 1.16883C0.692641 2.05628 0.822511 3.01948 1.1039 4.05844C1.38528 5.0974 1.77489 6.19048 2.27273 7.33766ZM13.1818 17.9545C14.0693 18.4307 15.0541 18.7771 16.1364 18.9935C17.2186 19.21 18.1169 19.3182 18.8312 19.3182C18.961 19.3182 19.0693 19.2749 19.1558 19.1883C19.2424 19.1017 19.2857 18.9935 19.2857 18.8636V16.1364C19.2857 15.9632 19.2424 15.8171 19.1558 15.6981C19.0693 15.579 18.9394 15.5087 18.7662 15.487L16.461 15C16.3312 14.9784 16.2175 14.9838 16.1201 15.0162C16.0227 15.0487 15.9199 15.1082 15.8117 15.1948L13.1818 17.9545Z" fill="#0F52BA" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

                {
                    isModal ? (

                        <Snackbar open={openOTPModal} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleCloseOTPAlert}>
                            <Alert onClose={handleCloseOTPAlert} severity={"error"} sx={{ width: '100%' }}>
                                {AlertMessage}
                            </Alert>
                        </Snackbar>
                    ) : ""
                }
            </>
                :
                <>
                    <div className='w-full h-full grid place-items-center'>

                        {theStep === 1 && (
                            <div className='flex flex-col space-y-[30px]'>
                                <div className='mt-[-30px]'>
                                    <h1 onClick={Submit} className='relative top-[-30px]' style={Text2}>Reset your password</h1>
                                </div>
                                <div className='space-y-[20px]'>
                                    <div>
                                        <input type='email' name='email' value={ResetPasswordData.email} onChange={handleInputChange} placeholder='Enter Your Email' className='focus:outline-none focus:border-[black] pl-[50px] w-[300px] h-[50px] rounded-[8px] border-[1px] border-[#E6E6E6]' />
                                        <Image loading="lazy" alt='message-icon' width={20.776} height={16} className='w-[20.776px] h-[16px] absolute mt-[-34px] 2xl:mt-[-35px] xl:mt-[-33px] ml-[18px]' src='/assests/Blue/Message.svg' />

                                    </div>
                                    <div>
                                        <button id='grad-button' className='w-[300px] h-[50px] rounded-[10px]' onClick={ChangeStep}>
                                            Send OTP
                                            <div className='inline'>
                                                {isLoading ? (
                                                    <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[60px]' src='/assests/animation/loaderIcon.svg' />
                                                ) : (

                                                    <Image loading="lazy" alt="arrow" width={18} height={20} className='inline relative left-[60px]' src='/vector.svg' />
                                                )}
                                            </div>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {theStep === 2 && (
                            <div className=" relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[30px] xl:gap-y-[20px] gap-y-[15px]">
                                <div></div>
                                <div className="relative top-[40px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[40px] xl:top-0">
                                    <h1 style={TextStyle}>Please enter verification code</h1>
                                    <p className="text-[#AEAEAE]" style={Text2}>Verification code sent roh******tel@gmail.com</p>
                                </div>
                                <div className="flex pt-[20px] 2xl:mt-[40px]  mt-[20px] gap-x-[10px] justify-center items-center">

                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(ref) => (otpInputs.current[index] = ref)}
                                            type="text"
                                            value={digit}
                                            className="w-[67.89px] outline-none border-b-[1px] text-center border-[black]"
                                            onChange={(e) => handleOTPChange(e.target.value, index)}
                                            maxLength={1}
                                        />
                                    ))}

                                </div>

                                <div className="2xl:mt-[20px] xl:mt-[10px] text-center">
                                    <button
                                        onClick={handleResendClick}
                                        disabled={isCounting}
                                        className={`text-${isCounting ? 'gray' : 'blue'} cursor-pointer`}
                                    >
                                        {isCounting ? `Resend in ${countdown}s` : 'Resend OTP'}
                                    </button>
                                </div>
                                <div className="2xl:mt-[3px] xl:mt-[8px]">
                                </div>

                                <div className="text-center flex flex-col 2xl:pt-0 xl:pt-[10px] justify-center items-center">

                                    <button id="grad-btn" style={Text4} className="w-[300px] h-[51px]  rounded-[10px]" onClick={ChangeStep} >Confirm</button>
                                </div>
                            </div>
                        )}
                        {theStep === 3 && (
                            <div className='relative top-[10px] 2xl:top-[20px] xl:top-[10px] flex flex-col 2xl:gap-y-[10px] xl:gap-y-[10px] gap-y-[10px] 2xl:my-[10%] xl:my-[50px]'>
                                <h1 onClick={Submit} style={TextStyle} className='mb-[30px]'>Change Password</h1>
                                <div>
                                    <input type={showPassword ? "text" : 'password'} name='password' onChange={handleInputChange} placeholder='Enter New Password' className='pr-[45px] focus:border-[1px] focus:border-[black] outline-none border-[1px] pl-[20px] border-[#E6E6E6] rounded-[8px] w-[300px] 2xl:h-[50px] h-[50px] xl:h-[45px]' />
                                    <Image loading="lazy" alt='show-password' onClick={() => setshowPassword(!showPassword)} width={20.776} height={16} className="cursor-pointer absolute right-[15px] mt-[-35px]" src={showPassword ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"} />

                                </div>
                                <div>
                                    <input type={showSecondPassword ? "text" : 'password'} name='conpassword' placeholder='Enter Confirm Password' className='pr-[45px] focus:border-[1px] focus:border-[black] outline-none border-[1px] pl-[20px] border-[#E6E6E6] rounded-[8px] w-[300px] 2xl:h-[50px] h-[50px] xl:h-[45px]' />
                                    <Image loading="lazy" alt='show-password' onClick={() => setshowSecondPassword(!showSecondPassword)} width={20.776} height={16} className="cursor-pointer absolute right-[15px] mt-[-35px]" src={showSecondPassword ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"} />
                                </div>
                                <div>
                                    <button id='grad-btn' className='w-[300px] 2xl:h-[50px] xl:h-[45px] h-[50px] rounded-[8px] bg-[#0F52BA] text-[#FFF] hover:opacity-[0.95]' onClick={ChangeStep}>Change Password</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <ResetPasswordSuccess isOpen={isModalOpen} onClose={closeModal} HandleExlopre={HandleExlopre} />

                </>}
        </>
    )
}

export default LoginWithEmail