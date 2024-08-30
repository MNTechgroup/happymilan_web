import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OTPInp from './OTPInp'
import { useDispatch, useSelector } from 'react-redux'
import { ResetSteps, SendCodeAction, SubmitOTPAction, SubmitPasswordAction } from '../../../../../store/actions/SignupAction';
import { useFormik } from 'formik';
import { PasswordSchema, SignupSchema } from '../../../../../utils/Schema/SignupSchema';
import { useRouter } from 'next/router';
import useOtpResend from '../../../../../utils/helpers/ResendCode';
import maskEmail from '../../../../../utils/helpers/MaskedEmail';
import { getCookie } from 'cookies-next';

function NewUser({ SetOtpBoxActive }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const inpText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const BottomText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const ErrorsText = {
        color: "red",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "9px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const { step, message, loading } = useSelector((state) => state?.signUp)

    const UsernameTab = React.memo(() => {

        const initialValues = {
            name: "",
            email: ""
        }


        const { values, handleChange, handleBlur, touched, handleSubmit, errors } = useFormik({
            initialValues: initialValues,
            validationSchema: SignupSchema,
            onSubmit: (values) => {
                // console.log("🚀 ~ UsernameTab ~ values:", values)
                dispatch(SendCodeAction(values))

            }
        })

        return (
            <>

                <div>
                    <ul className='space-y-[17px]'>
                        <li className='text-center'>
                            <div className='flex'>
                                <Image src={"/assests/login/email-icon.svg"} alt='user' width={16} height={14} className='absolute mt-[17px] ml-[20px]' />
                                <input type='text' placeholder='Enter Your Name' name="name" value={values.name} onChange={handleChange} className={`w-[300px] h-[50px] border-[1px] border-[#E6E6E6] ${errors.name && touched.name ? "border-[red]" : "hover:border-[#000]  focus:border-[#000]"}  outline-none rounded-[25px] pl-[50px]`} style={inpText} />
                            </div>
                            {errors.name && touched.name
                                ? (<span style={ErrorsText}>{errors.name}</span>)
                                :
                                null}
                        </li>
                        <li className='text-center'>
                            <div className='flex'>
                                <Image src={"/assests/login/user-icon.svg"} alt='email' width={18} height={14} className='absolute mt-[18px] ml-[20px]' />
                                <input type='email' placeholder='Enter Your Email or Mobile' name='email' value={values.email} autocomplete="off" onChange={handleChange} className={`w-[300px] h-[50px] border-[1px] border-[#E6E6E6] ${errors.email && touched.email ? "border-[red]" : "hover:border-[#000]  focus:border-[#000]"} outline-none rounded-[25px] pl-[50px]`} style={inpText} />
                            </div>
                            {errors.email && touched.email
                                ? (<span style={ErrorsText}>{errors.email}</span>)
                                :
                                null}
                        </li>
                    </ul>
                </div>

                <div>
                    <button id='grad-button' onClick={handleSubmit} className='w-[300px] h-[50px] rounded-[25px]'>
                        {loading ?
                            <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                            : "Send Code"}
                    </button>
                </div>

                <div className='text-center w-[233px]'>
                    <p style={BottomText}>
                        By creating account, I Agee to Happy Milan <span className='text-[#0F52BA]'>Privacy Policy </span> and <span className='text-[#0F52BA]'>T&C</span>
                    </p>
                </div>


            </>
        )
    })

    const OTPTab = React.memo(() => {

        const [Email, SetEmail] = useState("")

        const { step, message, loading } = useSelector((state) => state?.signUp)


        useEffect(() => {
            SetEmail(getCookie("email"))
        }, [])


        useEffect(() => {
            const handleBeforeUnload = (event) => {
                console.log("🚀 ~ handleBeforeUnload ~ event:", event)
                // Modern browsers require returnValue to be set
                event.preventDefault();
                event.returnValue = ''; // Some browsers require this line for compatibility
            };

            window.addEventListener('beforeunload', handleBeforeUnload);

            // Cleanup the event listener when the component unmounts
            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }, []);

        const { countdown, isCounting, startCountdown } = useOtpResend(60);

        const Title = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
        }

        const EmailText = {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }

        const ResendText = {
            color: "#A3A3A3",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }
        const ResendCode = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }


        const HandleChangeStep = () => {
            const isConfirmed = window.confirm('Are you sure you want to delete this item?');

            if (isConfirmed) {
                dispatch(ResetSteps())
            } else {

            }

        }


        const [CurrentOTP, SetCurrentOTP] = useState(0)
        const HandleSubmit = (otp) => { SetCurrentOTP(otp) }

        const SubmitOTP = () => {
            dispatch(SubmitOTPAction(CurrentOTP))
        }
        return (
            <>
                <div className='space-y-[50px] flex flex-col justify-evenly items-center h-full'>
                    <div className='space-y-[11px] mt-[5px]'>
                        <h1 style={Title}>Verify Email</h1>
                        <div className='relative flex space-x-[12px]'>
                            <h1 style={EmailText} className='text-[#AEAEAE]'>OTP sent on <span className='text-[#000]'>{Email ? maskEmail(Email) : ""}</span>
                            </h1>
                            <Image width={11} height={11} alt='edit' className='cursor-pointer' onClick={HandleChangeStep} src={"/assests/login/edit-icon.svg"} />
                        </div>
                    </div>

                    <OTPInp length={4} onOtpSubmit={HandleSubmit} />

                    <div>
                        {isCounting ? <p style={ResendText}>Resend in <span className='text-[#000]'>{countdown}&nbsp;Sec.</span></p> :
                            <p style={ResendCode} className='cursor-pointer' onClick={startCountdown}>Resend Code</p>}

                    </div>

                    <div>
                        <button onClick={SubmitOTP} id='grad-button' className='w-[300px] h-[50px] rounded-[25px]'>
                            {loading ?
                                <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                                : "Confirm"}
                        </button>
                    </div>
                </div>
            </>
        )
    })

    const PasswordTab = React.memo(() => {

        const { step, message, loading } = useSelector((state) => state?.signUp)


        useEffect(() => {
            const handleBeforeUnload = (event) => {
                console.log("🚀 ~ handleBeforeUnload ~ event:", event)
                // Modern browsers require returnValue to be set
                event.preventDefault();
                event.returnValue = ''; // Some browsers require this line for compatibility
            };

            window.addEventListener('beforeunload', handleBeforeUnload);

            // Cleanup the event listener when the component unmounts
            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }, []);

        const initialState = {
            password: "",
            confirmPassword: "",
        }

        const { values, handleChange, handleBlur, touched, errors, handleSubmit } = useFormik({
            initialValues: initialState,
            validationSchema: PasswordSchema,
            onSubmit: (values) => {
                console.log("🚀 ~ PasswordTab ~ values:", values)
                dispatch(SubmitPasswordAction(values))

            }
        })


        const HintText = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }

        const [ShowPass, SetShowPass] = useState({
            password: false,
            confirmPassword: false
        })

        return (
            <div className='space-y-[40px] flex flex-col justify-evenly items-center h-full'>

                <div>
                    <h1>Set Your Password</h1>
                </div>

                <div>
                    <ul className='space-y-[17px]'>
                        <li className='text-center'>
                            <div className='flex'>
                                <Image onClick={() => SetShowPass({ ...ShowPass, password: !ShowPass.password })} width={18} height={18} alt='password' className='absolute left-[auto] ml-[260px] mt-[15px]' src={ShowPass.password ? "/assests/login/view-pass.png" : "/assests/login/hide-pass.png"} />
                                <input type={ShowPass.password ? 'text' : 'password'} name='password' onChange={handleChange} value={values.password} placeholder='Choose Password' className='inline w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[25px] pr-[50px]' />
                            </div>
                            {errors.password && touched.password
                                ? (<span style={ErrorsText}>{errors.password}</span>)
                                :
                                null}
                        </li>
                        <li className='text-center'>
                            <div className='flex'>
                                <Image onClick={() => SetShowPass({ ...ShowPass, confirmPassword: !ShowPass.confirmPassword })} width={18} height={18} alt='password' className='absolute left-[auto] ml-[260px] mt-[15px]' src={ShowPass.confirmPassword ? "/assests/login/view-pass.png" : "/assests/login/hide-pass.png"} />
                                <input type={ShowPass.confirmPassword ? 'text' : 'password'} name='confirmPassword' onChange={handleChange} value={values.confirmPassword} placeholder='Confirm Password' className='w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[25px] pr-[50px]' />
                            </div>
                            {errors.confirmPassword && touched.confirmPassword
                                ? (<span style={ErrorsText}>{errors.confirmPassword}</span>)
                                :
                                null}
                        </li>
                    </ul>
                </div>

                <div>
                    <button onClick={handleSubmit} id='grad-button' className='w-[300px] h-[50px] rounded-[25px]'>
                        {loading ?
                            <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                            : "Register"}
                    </button>
                </div>

                <div className='w-[250px] text-center'>
                    <p style={HintText}>Hints : <span className='text-[#878787]'>Must be 6-8 characters long, including numbers and letters</span></p>
                </div>

            </div>
        )
    })

    useEffect(() => {
        SetOtpBoxActive(step > 0);

        if (step > 2) {
            router.push('/login/1');
            setTimeout(() => {
                dispatch(ResetSteps())
            }, 400)
        }

        console.log("The Message : ", message)
    }, [step]);


    const RenderTab = () => {
        switch (step) {
            case 0: return <UsernameTab />
            case 1: return <OTPTab />
            case 2: return <PasswordTab />
            default: return null;
        }
    }

    return (
        <>
            <div className='mt-[30px] flex flex-col items-center justify-evenly h-full space-y-[28px]'>
                {RenderTab()}
            </div>
        </>
    )
}

export default NewUser