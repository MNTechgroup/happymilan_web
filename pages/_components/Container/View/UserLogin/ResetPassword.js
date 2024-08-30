import { Box, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OtpInput from '../SignUp/OTPInp';
import useOtpResend from '../../../../../utils/helpers/ResendCode';
import maskEmail from '../../../../../utils/helpers/MaskedEmail';
import { useFormik } from 'formik';
import { PasswordSchema } from '../../../../../utils/Schema/SignupSchema';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { ResetEmailPasswordFirstStep, ResetEmailPasswordSecondStep, ResetEmailPasswordThirdStep } from '../../../../../store/actions/SignupAction';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { RESET_PASSWORD_STEP } from '../../../../../store/type';

function ResetPassword() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: "none",
        bgcolor: 'background.paper',
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const dispatch = useDispatch();

    const [allCred, SetallCred] = useState({
        email: '',
        password: '',
        otp: '',
    })

    const EmailBox = () => {

        const [Email, SetEmail] = useState("")

        const SendCode = () => {
            dispatch(ResetEmailPasswordFirstStep(Email))
            SetallCred((prev) => ({
                ...prev,
                email: Email
            }))// store Email Cookie 
        }

        return (
            <div className='w-[420px] h-[280px] bg-[#FFF] rounded-[20px]'>
                <div className='h-full w-full text-center'>

                    <div className='w-full h-full flex flex-col justify-evenly items-center'>
                        <div>
                            <p>Reset your password</p>
                        </div>
                        <div>
                            <Image src={"/assests/login/user-icon.svg"} alt='email' width={18} height={14} className='absolute mt-[18px] ml-[20px]' />

                            <input type='email' name='email' placeholder='Enter your Email or Mobile' value={Email} onChange={(e) => SetEmail(e.target.value)} className='pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none' />
                        </div>
                        <div>
                            <button id='grad-button' onClick={SendCode} className='w-[300px] h-[50px] rounded-[25px]'>
                                {loading ?
                                    <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                                    : "Send Code"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const OTPBox = () => {



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



        const [Email, SetEmail] = useState("")

        const [CurrentOTP, SetCurrentOTP] = useState(0)
        const HandleSubmit = (otp) => {
            SetCurrentOTP(otp)
        }
        const { countdown, isCounting, startCountdown } = useOtpResend(60);

        const SubmitOTP = () => {

            dispatch(ResetEmailPasswordSecondStep({
                email: allCred.email,
                otp: CurrentOTP   //OTP Save in Cookie 
            }))

            SetallCred((prev) => ({
                ...prev,
                otp: CurrentOTP
            }))// store Email Cookie 
        }



        return (
            <>
                <div className='w-[420px] h-[280px] space-y-[50px] flex flex-col justify-evenly items-center h-full'>
                    <div className='space-y-[11px] mt-[5px]'>
                        <h1 style={Title}>Verify Email</h1>
                        <div className=''>
                            <h1 style={EmailText} className='text-[#AEAEAE]'>OTP sent on <span className='text-[#000]'>{allCred.email ? maskEmail(allCred.email) : ""}</span>
                            </h1>
                        </div>
                    </div>

                    <OtpInput length={4} onOtpSubmit={HandleSubmit} />

                    <div>
                        {isCounting ? <p style={ResendText}>Resend in <span className='text-[#000]'>{countdown}&nbsp;Sec.</span></p> :
                            <p style={ResendCode} className='cursor-pointer' onClick={startCountdown}>Resend Code</p>}

                    </div>

                    <div>
                        <button id='grad-button' className='w-[300px] h-[50px] rounded-[25px]' onClick={SubmitOTP}>
                            {loading ?
                                <Image loading="lazy" alt="loader" width={25} height={25} className='animate-spin inline relative left-[0px]' src='/assests/animation/loaderIcon.svg' />
                                : "Confirm"}
                        </button>
                    </div>
                </div>
            </>
        )
    }

    const PasswordBox = () => {

        const initialState = {
            password: "",
            confirmPassword: "",
        }

        const { values, handleChange, handleBlur, touched, errors, handleSubmit } = useFormik({
            initialValues: initialState,
            validationSchema: PasswordSchema,
            onSubmit: (values) => {
                console.log("🚀 ~ PasswordTab ~ values:", values)
                // dispatch(ResetEmailPasswordThirdStep())
                dispatch(ResetEmailPasswordThirdStep({
                    email: allCred.email,
                    password: values.password,
                    otp: allCred.otp
                }))

            }
        })

        const ErrorsText = {
            color: "red",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "9px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }


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
            <>
                <div className='w-[420px] h-[280px] space-y-[40px] flex flex-col justify-evenly items-center h-full'>

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
                                :
                                "Reset Password"}
                        </button>
                    </div>

                    <div className='w-[250px] text-center'>
                        <p style={HintText}>Hints : <span className='text-[#878787]'>Must be 6-8 characters long, including numbers and letters</span></p>
                    </div>

                </div>
            </>
        )
    }


    const SuccessModal = () => {

        const [isAnimated, setIsAnimated] = useState(false);

        useEffect(() => {
            // Trigger the animation when the component mounts
            setIsAnimated(true);
        }, []);


        const Text = {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }

        const router = useRouter();

        const BackToLogin = () => {
            router.push('/login')
            dispatch({
                type: RESET_PASSWORD_STEP
            })
            handleClose()

        }



        return (
            <>
                <div className='w-[420px] h-[280px] space-y-[40px] flex flex-col justify-evenly items-center h-full'>
                    <div className='w-[38px] h-[38px]'>
                        <Image
                            height={38}
                            width={38}
                            loading='lazy'
                            alt="right-icon"
                            className={`transform transition-transform duration-500 ease-out ${isAnimated ? 'scale-100' : 'scale-0'}`}
                            src="/assests/common/resetpassword-Modal.svg"
                        />
                    </div>
                    <div>
                        <h1 style={Text} className='w-[278px]'>your password has been changed successfully</h1>
                    </div>

                    <div>
                        <button onClick={BackToLogin} id='grad-button' className="w-[172px] h-[50px] rounded-[23px]">Back to login</button>
                    </div>
                </div>
            </>
        )
    }

    const [activeTab, SetactiveTab] = useState(3)

    const { loading, step } = useSelector((state) => state.signUp.ResetPassword)

    const CloseTheModal = () => {
        dispatch({
            type: RESET_PASSWORD_STEP
        })
        handleClose()
    }

    const RenderComp = () => {
        switch (step) {
            case 0: return <EmailBox />
            case 1: return <OTPBox />
            case 2: return <PasswordBox />
            case 3: return <SuccessModal />
            default: return null;
        }
    }

    return (
        <>
            <p onClick={handleOpen} className='select-none cursor-pointer' style={Text}>Reset Password</p>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Image
                        width={24}
                        height={24}
                        alt="close-icon"
                        className={`cursor-pointer absolute right-10 ${step > 2 ? "hidden" : ""}`}
                        onClick={CloseTheModal}
                        src="/assests/social/close.svg"
                    />
                    {RenderComp()}
                </Box>
            </Modal>
        </>
    )
}

export default ResetPassword