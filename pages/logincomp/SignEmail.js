import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getCookie, setCookie } from 'cookies-next'
import Image from "next/image";
import { validatePassword } from "../../utils/form/validationRules";

const SignInEmail = () => {
    const router = useRouter();
    const TextStyle = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const Text2 = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const [visible, setvisible] = useState(false);
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
    const isOtpFilled = () => {
        return otp.every((digit) => digit !== '');
    };

    //Resend OTP countdown 

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

    //OTP Resend API

    const handleResendClick = async () => {
        if (!isCounting) {
            // Start the countdown when clicked
            setIsCounting(true);
            // Simulate sending OTP (you can replace this with your actual logic)
            // Example: sendOTP();
            try {
                const emailofuser = localStorage.getItem("email");

                const response = await axios.post(
                    "https://happymilan.tech/api/v1/user/auth/send-verify-otp-email",
                    {
                        email: emailofuser,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    },
                );

                // Handle the response as needed (e.g., display a success message)
                // Optionally, you can reset the form fields after a successful request
            } catch (error) {
                // Handle errors (e.g., display an error message)
                console.error("OTP Sent failed:", error);
            }
        }
    };

    //OTP Confirm(Submit) API

    const [UEmail, SetUemail] = useState("")

    useEffect(() => {
        const emailOfUser = localStorage.getItem("email");
        maskEmail(emailOfUser)
    }, [])

    function maskEmail(email) {
        const atIndex = email.indexOf('@');
        const maskedPart = email.substring(1, atIndex).replace(/./g, '*');
        const maskedEmail = email[0] + maskedPart + email.substring(atIndex);
        SetUemail(maskedEmail);
        return maskedEmail;
    }


    const handleOTPSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!isOtpFilled()) {

                // Display an error message or prevent submission if OTP is not filled
                throw new Error('OTP is not filled');
            }

            const emailOfUser = localStorage.getItem("email");
            const DeviceToken = getCookie("fcmToken")


            if (!emailOfUser) {
                throw new Error('Email not found');
            }

            const DataPost = {
                email: emailOfUser,
                otp: otp.join(""),
                deviceToken: DeviceToken
            }
            console.log("🚀 ~ handleOTPSubmit ~ DataPost:", DataPost)


            const response = await axios.post(
                "https://happymilan.tech/api/v1/user/auth/verify-otp-email",
                DataPost
            );

            const theData = response.data.data;
            localStorage.setItem("token", theData.tokens.access.token);
            localStorage.setItem("refoken", theData.tokens.refresh.token);
            localStorage.setItem("modal", "open");

            setCookie("jwtToken", theData.tokens.access.token);
            setCookie("authtoken", theData.tokens.refresh.token);
            setCookie("email", theData.user.email);
            setvisible(true);

            console.log("OTP submission successful:", response.data);
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error("OTP submission failed:", error.message);
            // You may display an error message to the user here
        }
    };


    //Submit Password 

    const [isValid, setValid] = useState(true);

    const [userpassword, setuserpassword] = useState({
        p1: "",
        p2: ""
    })

    const HandlePasswordChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setuserpassword((prev) => {
            return { ...prev, [name]: value }
        })

        if (userpassword.p1 != "") {
            if (name === "p1") {
                validatePassword(value) ? setValid(true) : setValid(false)
            }
        }

    }

    const SubmitPassword = async () => {
        if (userpassword.p1 === "" || userpassword.p2 === "") {
            // Display an inline error message or prevent submission if passwords are not filled
            alert("Please fill in both password fields");
            return;
        } else if (userpassword.p1 != userpassword.p2) {
            // Display an inline error message if passwords don't match
            alert("Passwords do not match. Please re-enter.");
            return;
        }

        try {

            // Prepare request body
            const requestBody = {
                password: userpassword.p1 // The new password
            };

            // Get authorization token from cookies
            const authToken = getCookie("authtoken");

            // Request headers containing the authorization token
            const headers = {
                Authorization: `Bearer ${authToken}`, // Include the token
                'Content-Type': 'application/json', // Set the content type
            };

            // Make PUT request to update user password
            const response = await axios.put("https://happymilan.tech/api/v1/user/auth/update-user", requestBody, { headers });
            console.log("🚀 ~ SubmitPasswordddddd ~ response:", response)

            // Handle the response as needed (e.g., display a success message)
            console.log("Password update successful:", response);

            // Update cookies with user data
            setCookie('userName', response.data.userData.name);
            setCookie('userid', response.data.userData.id);

            // Redirect to login page with user's email
            router.push(`/login/${response.data.userData.email}`);
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error('Password update failed:', error);
            // You may display an error message to the user here
        }
    };



    const [showPassword, setshowPassword] = useState(false)
    const [showSecondPassword, setshowSecondPassword] = useState(false)

    return (
        <>
            {
                visible ?
                    <>
                        <div className=" relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[50px] xl:gap-y-[25px] gap-y-[15px]">
                            <div></div>
                            <div className="relative top-[40px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[20px] xl:top-[-10px]">
                                <h1 style={TextStyle}>Set your password</h1>
                                {/* <p className="text-[#AEAEAE]" style={Text2}>Password sent roh******tel@gmail.com</p> */}
                                <p className="text-[#AEAEAE]" style={Text2}>{`Password sent ${UEmail}`}</p>
                            </div>
                            <div className="flex flex-col gap-x-[10px] justify-center items-center gap-y-[10px]">
                                <div>
                                    <input onChange={HandlePasswordChange} value={userpassword.p1} name="p1" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pr-[40px] w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />

                                    <Image alt="show-password" onClick={() => setshowPassword(!showPassword)} width={20.776} height={16} className="absolute right-[90px] mt-[-35px]" src={showPassword ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"} />
                                    <div>
                                        <h1 className={` w-[300px] pt-[5px] ${!isValid ? "text-[red]" : "text-[green]"}  ${userpassword.p1 != "" ? "" : "text-[#AEAEAE]"}`} style={Text3}>Must be at least 6 - 8 characters in length and may contain both number s and letters</h1>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={HandlePasswordChange} value={userpassword.p2} name="p2" type={showSecondPassword ? "text" : "password"} placeholder="Confirm your password" className="pr-[40px] w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />
                                    <Image alt="show-password" onClick={() => setshowSecondPassword(!showSecondPassword)} width={20.776} height={16} className="absolute right-[90px] mt-[-35px]" src={showSecondPassword ? "/assests/Blue/pass-view.png" : "/assests/Blue/pass-hide.png"} />

                                </div>
                            </div>

                            <div className="text-center relative top-[-2px] xl:top-[-2.5px] flex flex-col 2xl:pt-0 xl:pt-[10px] justify-center items-center">
                                <button id="grad-btn" style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={SubmitPassword}>Register Now</button>
                            </div>
                        </div>

                    </> : <>

                        <div className=" relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[30px] xl:gap-y-[20px] gap-y-[15px]">
                            <div></div>
                            <div className="relative top-[40px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[40px] xl:top-0">
                                <h1 style={TextStyle}>Please enter verification code</h1>
                                {/* <p className="text-[#AEAEAE]" style={Text2}>Verification code sent roh******tel@gmail.com</p> */}
                                <p className="text-[#AEAEAE]" style={Text2}>{`Verification code sent ${UEmail}`}</p>
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

                                <button id="grad-btn" style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={handleOTPSubmit}>Register Now</button>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}

export default SignInEmail;