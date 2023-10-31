import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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



    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");

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
                const emailofuser = localStorage.getItem('email')

                const response = await axios.post(
                    'https://happymilan.tech/api/v1/user/auth/send-verify-otp-email',
                    {
                        email: emailofuser,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Handle the response as needed (e.g., display a success message)
                console.log('OTP Sent successful:', response.data);

                // Optionally, you can reset the form fields after a successful request
            } catch (error) {
                // Handle errors (e.g., display an error message)
                console.error('OTP Sent failed:', error);
            }


        }

       
    }

    //OTP Confirm(Submit) API
    
    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        if (!isOtpFilled()) {

            // Display an error message or prevent submission if OTP is not filled
            return;
        }

        try {
            const emailofuser = localStorage.getItem('email')
            const response = await axios.post('https://happymilan.tech/api/v1/user/auth/verify-otp-email', {
                email: emailofuser,
                otp: otp.join(''), // Join the OTP digits into a single string
            });

            // Handle the response as needed (e.g., display a success message)
            console.log('OTP submission successful:', response.data);
            const thedata = response.data.data;
            localStorage.setItem("token", (thedata.tokens.access.token));
            setvisible(true);
            //console.log(otp.join(''))
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error('OTP submission failed:', error);
        }
    };

    //Submit Password 

    const SubmitPassword = async () => {
        if (!password || !conpassword) {
            alert("fill The Password")
        }
        else {
            try {

                const requestBody = {
                    password, // The new password
                };
            
                const authToken = localStorage.getItem("token")
                // Request headers containing the authorization token
                const headers = {
                    Authorization: `Bearer ${authToken}`, // Include the token
                    'Content-Type': 'application/json', // Set the content type
                };
                const response = await axios.put("https://happymilan.tech/api/v1/user/auth/update-user", requestBody, { headers });

                // Handle the response as needed (e.g., display a success message)
                console.log('Password submission successful:', response.data);
                const thedata = response.data
                 router.push(`/login/${thedata.user.email}`)

                } catch (error) {
                // Handle errors (e.g., display an error message)
                console.error('Password submission failed:', error);
            }
        }
       
    }

    return (
        <>
            {
                visible ?
                    <>
                        <div className=" relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[50px] xl:gap-y-[25px] gap-y-[15px]">
                            <div></div>
                            <div className="relative top-[40px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[20px] xl:top-[-10px]">
                                <h1 style={TextStyle}>Set your password</h1>
                                <p className="text-[#AEAEAE]" style={Text2}>Password sent roh******tel@gmail.com</p>
                            </div>
                            <div className="flex flex-col gap-x-[10px] justify-center items-center gap-y-[10px]">
                                <div>
                                    <input onChange={((e) => setpassword(e.target.value))} value={password} type="password" placeholder="Enter your password" className="w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />
                                    <div>
                                        <h1 className="w-[300px] pt-[5px] text-[#AEAEAE]" style={Text3}>Must be at least 6-8 characters in length and may contain both number s and letters</h1>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={((e) => setconpassword(e.target.value))} value={conpassword} type="password" placeholder="Confirm your password" className="w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />
                                </div>
                            </div>

                            <div className="text-center relative top-[-2px] xl:top-[-2.5px] flex flex-col 2xl:pt-0 xl:pt-[10px] justify-center items-center">
                                <button style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={SubmitPassword}>Register Now</button>
                            </div>
                        </div>
            
                    </> : <>

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
                                <h1 className="text-[#0F52BA]" style={Text2}>Not Now</h1>
                            </div>

                            <div className="text-center flex flex-col 2xl:pt-0 xl:pt-[10px] justify-center items-center">

                                <button style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={handleOTPSubmit}>Register Now</button>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}

export default SignInEmail;