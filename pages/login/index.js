"use client";

import React, { useState } from "react";
import LoginPage from "../logincomp/Loginpage";
import SignInEmail from "../logincomp/SignEmail";
import { useRouter } from "next/router";
import CommonNavbar from "../components/Navbar";
import PhoneSignUp from "./SignUpSec/PhoneSignup";
import dynamic from "next/dynamic";
import LoginWithEmail from "./LoginSec/LoginWithEmail";
import LoginWithPhone from "./LoginSec/LoginWithPhone";
import SignupWithEmail from "./SignUpSec/SignupWithEmail";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import axios from "axios";

//Style for Select Box
const customStyle2 = {
    control: (provided, state) => ({
        ...provided,
        paddingRight: '10px',
        paddingLeft: "8px",
        marginTop: "10px",
        width: "95px",
        height: "40px",
        borderRadius: "8px", // Add padding on the right side
        border: "1px solid #e6e6e6",
        borderColor: state.isFocused ? 'black' : provided.borderColor,
        '&:hover': {
            borderColor: 'black',
        },
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
        paddingRight: "20px"
        // Hide the vertical line behind the arrow
    }),
};
const customStyle1 = {
    control: (provided, state) => ({
        ...provided,
        paddingRight: '10px',
        paddingLeft: "8px",
        marginTop: "10px",
        width: "95px",
        height: "50px",
        borderRadius: "8px", // Add padding on the right side
        border: "1px solid #e6e6e6",
        borderColor: state.isFocused ? 'black' : provided.borderColor,
        '&:hover': {
            borderColor: 'black',
        },
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
        paddingRight: "20px"
        // Hide the vertical line behind the arrow
    }),
};


const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

//Styles 

const Logindiv = {
    width: "300px",
    height: "44px",
    borderRadius: "10px",
    background: "#F9F9F9",
};

const Logintoggle = {
    width: "147px",
    height: "44px",
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    flexShrink: "0",
    borderRadius: "10px",
    // background: "linear-gradient(199deg, #EF4136 0%, #2B3990 100%)",
    background: "#EF4136",
};
const NotActiveLogintoggle = {
    width: "147px",
    height: "44px",
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    flexShrink: "0",
    borderRadius: "10px",
    background: "#f8f8f8",
};



function login() {
    const router = useRouter();

    const [userdata, setuserdata] = useState({
        phone: "",
        Password: ""
    })

    const HanldeInput = (e) => {

        const { name, value } = e.target;
        setuserdata({
            ...userdata,
            [name]: value, // Update the specific key with the new value
        });
    };



    const [Element, setElement] = useState(false)

    const [isActive, setisActive] = useState(true)
    const [PhoneSec, setPhoneSec] = useState(false)
    
    
    const HandleBack = () => {
        setElement(false)
        setPhoneSec(false)
    }
    const HandleToggle = () => {

        setPhoneSec(true)
    }

    //For LoginPages

    const [rendercomponent, setrendercomponent] = useState(0);
    const ReturnComp = () => {
        switch (rendercomponent) {
            case 1: return <LoginWithEmail rendercomponent={rendercomponent} setrendercomponent={setrendercomponent} />;
            case 2: return <LoginWithPhone rendercomponent={rendercomponent} setrendercomponent={setrendercomponent} />;
            case 3: return <SignupWithEmail rendercomponent={rendercomponent} setrendercomponent={setrendercomponent} />;
            default: return "<h1>Hello</h1>";
        }
    }

    function SignUp() {
        const TextStyle = {
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "8px",
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
        const BtnText = {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }

        const [firstName, setFirstName] = useState('');
        const [email, setEmail] = useState('');
        const [isValidEmail, setIsValidEmail] = useState(true);
        const handleFirstNameChange = (event) => {
            setFirstName(event.target.value);
        };

        const handleEmailChange = (event) => {
            const newEmail = event.target.value;
            setEmail(newEmail);
            validateEmail(newEmail);
        };

        const validateEmail = (inputEmail) => {
            // Regular expression for basic email validation
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            setIsValidEmail(emailRegex.test(inputEmail));
        };

        const handleSubmit = async (event) => {
            event.preventDefault();

            // console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/auth/register`)
            if (firstName === "" || email === "") {

            }
            else {
                // Check if the email is valid before making the POST request
                if (!isValidEmail) {
                    alert('Please enter a valid email address.');
                    return;
                }
                try {
                    const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/auth/register`,
                        {
                            email: email,
                            name: firstName,
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );

                    // Handle the response as needed (e.g., display a success message)
                    console.log('Registration successful:', response.data);
                    const thedata = response.data.data;
                  if(thedata.success){
                    localStorage.setItem("email",email)
                  }
                        // localStorage.setItem("email",email)
                    // Optionally, you can reset the form fields after a successful request
                    setElement(true)
                } catch (error) {
                    // Handle errors (e.g., display an error message)
                    console.error('Registration failed:', error);
                }
              }

          
        }
        return (
            <>

                <div className="flex flex-col items-center justify-center 2xl:gap-y-[18px] xl:gap-y-[10px] gap-y-[8px]">
                    {!PhoneSec ? <>

                        <div className='2xl:pt-[15px] pt-[10px] xl:pt-[17px] relative'>


                            <input
                                placeholder='First Name'
                                type='text'
                                value={firstName}
                                onChange={handleFirstNameChange}
                                className='outline-none focus:border-[1px] focus:border-[#000] pl-[50px] w-[300px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                            />

                            <img
                                src='/assests/common/profile-icon.svg'
                                className='w-[20px] h-[20px] absolute left-4 2xl:top-[40px] xl:top-[36px] top-[35px] transform -translate-y-1/2'
                                alt='Email Icon'
                            />

                            <input
                                placeholder='Enter Your Email'
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                                className='outline-none focus:border-[1px] mt-[10px] focus:border-[#000] pl-[50px] w-[300px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                            />
                            <img
                                src='/assests/Blue/Message.svg'
                                className='w-[20px] h-[20px] absolute left-4 2xl:top-[100px] xl:top-[85px] top-[94px] transform -translate-y-1/2'
                                alt='Email Icon'
                            />

                            {!isValidEmail && (
                                <p className="text-red-500">Please enter a valid email address.</p>
                            )}



                        </div>
                        <div className=''>
                            <h1 className='' style={TextStyle}>By creating account, I Agee to Happy Milan <span className='text-[#0F52BA]'>Privacy Policy</span> and <span className='text-[#0F52BA]'> T&C</span></h1>
                        </div>
                        <div>
                            <button onClick={handleSubmit} style={BtnText} className='w-[300px] h-[50px] 2xl:w-[300px] 2xl:h-[50px] xl:w-[300px] xl:h-[45px]  bg-[#0F52BA] rounded-[10px] text-[#FFF] hover:opacity-[0.95]'>Send Code <img className='inline relative left-[60px]' src='/vector.svg' /></button>
                        </div>

                    </>
                        :
                        <>

                            <div className='2xl:pt-[15px] pt-[10px] xl:pt-[17px] relative'>
                                <input
                                    placeholder='First Name'
                                    type='text'
                                    className='outline-none focus:border-[1px] focus:border-[#000] pl-[50px] w-[300px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                                />

                                <img
                                    src='/assests/common/profile-icon.svg'
                                    className='w-[20px] h-[20px] absolute left-4 2xl:top-[40px] xl:top-[36px] top-[35px] transform -translate-y-1/2'

                                    alt='Email Icon'
                                />


                                <div className="flex gap-x-[12px]">
                                    <DynamicSelect placeholder="+91" styles={customStyle1} options={options} className="2xl:block hidden xl:hidden" />

                                    <DynamicSelect placeholder="+91" styles={customStyle2} options={options} className="2xl:hidden block xl:block" />


                                    <input
                                        placeholder='Enter Your Phone'
                                        type='number'
                                        id="number-input"
                                        name="phone"
                                        className='outline-none focus:border-[1px] mt-[10px] focus:border-[#000] pl-[20px] w-[195px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                                    />


                                </div>




                            </div>
                            <div className='w-[302px]'>
                                <h1 className='' style={TextStyle}>By creating account, I Agee to Happy Milan <span className='text-[#0F52BA]'>Privacy Policy</span> and <span className='text-[#0F52BA]'> T&C</span></h1>

                            </div>
                            <div>
                                <button onClick={() => setElement(true)} style={BtnText} className='w-[300px] h-[50px] 2xl:w-[300px] 2xl:h-[50px] xl:w-[300px] xl:h-[45px]  bg-[#0F52BA] rounded-[10px] text-[#FFF] hover:opacity-[0.95]'>Send Code <img className='inline relative left-[60px]' src='/vector.svg' /></button>
                            </div>

                        </>
                    }


                    <div className='flex items-center justify-center 2xl:mt-[16px] xl:mt-[18px] mt-[5px]'>

                        <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                        <div className='p-[12px]'>
                            <h1 className='text-[#000]' style={ContinueWith}>or continue with</h1>
                        </div>
                        <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                    </div>

                    <div className='flex items-center justify-center gap-x-[30px] 2xl:mt-[-15px] xl:mt-0'>
                        <div className="xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]">
                            <img src='/assests/social/google-icon-btn.svg' />
                        </div>
                        <div className="xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]">
                            <img src='/assests/social/facebook-icon-btn.svg' />
                        </div>
                        <div className="xl:w-[45px] h-[30px] xl:h-[45px] h-[50px] w-[50px] 2xl:w-[50px] 2xl:h-[50px]">
                            {!PhoneSec ?
                                <div onClick={HandleToggle} className="cursor-pointer group hover:bg-[#F8F8F8] 2xl:w-[50px]  h-[50px] w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">


                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-[0.70]">
                                        <path d="M18.5714 20C16.6017 20 14.5238 19.4589 12.3377 18.3766C10.1515 17.2944 8.08983 15.7792 6.1526 13.8312C4.21537 11.8831 2.70563 9.82143 1.62338 7.6461C0.541126 5.47078 0 3.39827 0 1.42857C0 1.02041 0.132965 0.68027 0.398896 0.408149C0.664805 0.136049 0.997208 0 1.3961 0H3.75737C4.15289 0 4.48052 0.113636 4.74026 0.340909C5 0.568182 5.18398 0.876623 5.29221 1.26623L5.90679 3.78705C5.95161 4.14114 5.93074 4.45887 5.84416 4.74026C5.75758 5.02165 5.6144 5.25136 5.41464 5.42942L2.62987 7.95455C3.23593 9.01515 3.87446 9.98918 4.54545 10.8766C5.21645 11.7641 5.91991 12.5866 6.65584 13.3442C7.47835 14.1883 8.3658 14.9567 9.31818 15.6494C10.2706 16.342 11.3203 17.0022 12.4675 17.6299L15.1948 14.8377C15.4113 14.5996 15.6403 14.4426 15.8819 14.3669C16.1235 14.2911 16.4032 14.2749 16.7208 14.3182L18.7338 14.7727C19.1234 14.8377 19.4318 15.0175 19.6591 15.3123C19.8864 15.607 20 15.9466 20 16.3312V18.6039C20 19.0028 19.864 19.3352 19.5919 19.6011C19.3197 19.867 18.9796 20 18.5714 20ZM2.27273 7.33766L5.03247 4.83766C5.11905 4.75108 5.17857 4.63203 5.21104 4.48052C5.24351 4.329 5.24892 4.18831 5.22727 4.05844L4.57792 1.23377C4.55628 1.06061 4.48593 0.930736 4.36688 0.844156C4.24784 0.757576 4.10173 0.714286 3.92857 0.714286H1.16883C1.03896 0.714286 0.930736 0.757576 0.844156 0.844156C0.757576 0.930736 0.714286 1.03896 0.714286 1.16883C0.692641 2.05628 0.822511 3.01948 1.1039 4.05844C1.38528 5.0974 1.77489 6.19048 2.27273 7.33766ZM13.1818 17.9545C14.0693 18.4307 15.0541 18.7771 16.1364 18.9935C17.2186 19.21 18.1169 19.3182 18.8312 19.3182C18.961 19.3182 19.0693 19.2749 19.1558 19.1883C19.2424 19.1017 19.2857 18.9935 19.2857 18.8636V16.1364C19.2857 15.9632 19.2424 15.8171 19.1558 15.6981C19.0693 15.579 18.9394 15.5087 18.7662 15.487L16.461 15C16.3312 14.9784 16.2175 14.9838 16.1201 15.0162C16.0227 15.0487 15.9199 15.1082 15.8117 15.1948L13.1818 17.9545Z" fill="#0F52BA" />
                                    </svg>

                                </div>
                                : <div onClick={HandleToggle} className="bg-[#0F52BA] 2xl:w-[50px] h-[50px] w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">


                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5714 20C16.6017 20 14.5238 19.4589 12.3377 18.3766C10.1515 17.2944 8.08983 15.7792 6.1526 13.8312C4.21537 11.8831 2.70563 9.82143 1.62338 7.6461C0.541126 5.47078 0 3.39827 0 1.42857C0 1.02041 0.132965 0.68027 0.398896 0.408149C0.664805 0.136049 0.997208 0 1.3961 0H3.75737C4.15289 0 4.48052 0.113636 4.74026 0.340909C5 0.568182 5.18398 0.876623 5.29221 1.26623L5.90679 3.78705C5.95161 4.14114 5.93074 4.45887 5.84416 4.74026C5.75758 5.02165 5.6144 5.25136 5.41464 5.42942L2.62987 7.95455C3.23593 9.01515 3.87446 9.98918 4.54545 10.8766C5.21645 11.7641 5.91991 12.5866 6.65584 13.3442C7.47835 14.1883 8.3658 14.9567 9.31818 15.6494C10.2706 16.342 11.3203 17.0022 12.4675 17.6299L15.1948 14.8377C15.4113 14.5996 15.6403 14.4426 15.8819 14.3669C16.1235 14.2911 16.4032 14.2749 16.7208 14.3182L18.7338 14.7727C19.1234 14.8377 19.4318 15.0175 19.6591 15.3123C19.8864 15.607 20 15.9466 20 16.3312V18.6039C20 19.0028 19.864 19.3352 19.5919 19.6011C19.3197 19.867 18.9796 20 18.5714 20ZM2.27273 7.33766L5.03247 4.83766C5.11905 4.75108 5.17857 4.63203 5.21104 4.48052C5.24351 4.329 5.24892 4.18831 5.22727 4.05844L4.57792 1.23377C4.55628 1.06061 4.48593 0.930736 4.36688 0.844156C4.24784 0.757576 4.10173 0.714286 3.92857 0.714286H1.16883C1.03896 0.714286 0.930736 0.757576 0.844156 0.844156C0.757576 0.930736 0.714286 1.03896 0.714286 1.16883C0.692641 2.05628 0.822511 3.01948 1.1039 4.05844C1.38528 5.0974 1.77489 6.19048 2.27273 7.33766ZM13.1818 17.9545C14.0693 18.4307 15.0541 18.7771 16.1364 18.9935C17.2186 19.21 18.1169 19.3182 18.8312 19.3182C18.961 19.3182 19.0693 19.2749 19.1558 19.1883C19.2424 19.1017 19.2857 18.9935 19.2857 18.8636V16.1364C19.2857 15.9632 19.2424 15.8171 19.1558 15.6981C19.0693 15.579 18.9394 15.5087 18.7662 15.487L16.461 15C16.3312 14.9784 16.2175 14.9838 16.1201 15.0162C16.0227 15.0487 15.9199 15.1082 15.8117 15.1948L13.1818 17.9545Z" fill="#FFF" />
                                    </svg>

                                </div>
                            }
                        </div>
                    </div>

                </div>

            </>
        )
    }


    return (
        <>
            <CommonNavbar />

            <div className="w-full h-screen  xl:h-screen 2xl:h-screen overflow-scroll md:overflow-hidden bg-[#FFF]">

                <div className="grid place-items-center">
                    <div>
                        <div className="flex items-center lg:items-start flex-col lg:flex-row w-full h-full">
                            <div className="hidden lg:block  relative my-[90px] max-w-[840px]  lg:mr-[5%]">

                                <img
                                    src="/loginassests/signup-group-img.png"
                                    className="w-full lg:w-full h-full"
                                />
                            </div>
                            <div className="h-full  lg:mr-[50px]  relative lg:top-0 my-[9%] 2xl:my-[9%] xl:my-[9%]  top-[220px]  ">
                                <div id="login-box" className="w-[380px] h-[440px] md:w-[420px] md:h-[440px] lg:w-[420px] lg:h-[440px] xl:h-[440px] xl:w-[400px] 2xl:h-[490px] 2xl:w-[450px]">
                                    {rendercomponent > 0 ? ReturnComp() : <>

                                        {Element || PhoneSec ? <img className="z-10 cursor-pointer absolute p-[20px]" src="/assests/common/Back-Arow.svg" onClick={HandleBack} /> : ""}

                                        {Element ? <>

                                            {!PhoneSec ? <SignInEmail /> : <PhoneSignUp userdata={userdata} setuserdata={setuserdata} HanldeInput={HanldeInput} />}
                                        </>
                                            :
                                            <>
                                                <div id="login-wraper" className="pt-[20px] pb-[20px]">
                                                    <h1>Welcome to Happy Milan</h1>
                                                </div>
                                                <div className="my-[5px] flex justify-center">
                                                    <div className="" style={Logindiv}>

                                                        <div className="flex">
                                                            <button
                                                                onClick={() => { setisActive(false) }}
                                                                className=""
                                                                style={!isActive ? Logintoggle : NotActiveLogintoggle}
                                                            >
                                                                New User?
                                                            </button>
                                                            <button
                                                                onClick={() => { setisActive(true) , setPhoneSec(false) }}
                                                                className=""
                                                                style={!isActive ? NotActiveLogintoggle : Logintoggle}
                                                            >
                                                                Login
                                                            </button>
                                                        </div>

                                                        {isActive ? <LoginPage rendercomponent={rendercomponent} setrendercomponent={setrendercomponent} /> : <SignUp rendercomponent={rendercomponent} setrendercomponent={setrendercomponent} />}


                                                    </div>
                                                </div>
                                            </>}

                                    </>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default login;
