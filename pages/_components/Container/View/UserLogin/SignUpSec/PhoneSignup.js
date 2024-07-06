import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";

const PhoneSignUp = ({ userdata, setuserdata, HanldeInput }) => {
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

    const Register = () => {
        router.push("/login/1")
       
    }


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

    return (
        <>
            {
                visible ?
                    <>
                       <div className=" relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[50px] xl:gap-y-[25px] gap-y-[36px]">
                            <div></div>
                            <div className="relative lg:top-[40px] top-[10px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[20px] xl:top-[-10px]">
                                <h1 style={TextStyle}>Set your password</h1>
                                <p className="text-[#AEAEAE]" style={Text2}>+91 *****90801</p>
                            </div>
                            <div className="flex flex-col gap-x-[10px] justify-center items-center gap-y-[10px]">
                                <div>
                                    <input type="password" placeholder="Enter your password" className="w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />
                                    <div>
                                        <h1 className="w-[300px] pt-[5px] text-[#AEAEAE]" style={Text3}>Must be at least 6-8 characters in length and may contain both number s and letters</h1>
                                    </div>
                                </div>
                                <div>
                                    <input type="password" placeholder="Confirm your password" className="w-[300px] h-[50px] pl-[20px] rounded-[8px] border-[1px] border-[#E6E6E6] focus:outline-none focus:border-[black]" />
                                </div>
                            </div>

                            <div className="text-center 1- flex flex-col 2xl:pt-[1px] xl:pt-[10px] justify-center items-center">
                                <button id="grad-btn" style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={Register}>Register Now</button>
                            </div>
                        </div>
                    </> : <>
                    <div className="relative top-[15px] flex flex-col  justify-center 2xl:gap-y-[30px] xl:gap-y-[20px] gap-y-[30px]">
                            <div></div>
                            <div className="relative top-[20px] lg:top-[40px] mt-[20px] 2xl:mt-[0px] xl:mt-[40px] 2xl:top-[40px] xl:top-0">
                                <h1 style={TextStyle}>Please enter verification code</h1>
                                <p className="text-[#AEAEAE]" style={Text2}>Verification code sent +91 *****90801</p>
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

                            <div className="2xl:mt-[20px] xl:mt-[10px]">
                                {/* <h1 className="text-[#0F52BA]" style={Text2}>Resend after 57 s</h1> */}
                                <h1 className="text-[#0F52BA]" style={Text2}>Resend Code</h1>
                            </div>

                            <div className="2xl:mt-[3px] xl:mt-[8px]">
                                <h1 className="text-[#0F52BA]" style={Text2}>Not Now</h1>
                            </div>

                            <div className="text-center flex flex-col 2xl:pt-0 xl:pt-[10px] justify-center items-center">
                            
                                <button id="grad-btn" style={Text2} className="w-[300px] h-[51px] bg-[#0F52BA] rounded-[10px] text-[#FFF]" onClick={() => setvisible(true)}>Register Now</button>
                            </div>
                        </div>

                    </>
            }

        </>
    )
}

export default PhoneSignUp;