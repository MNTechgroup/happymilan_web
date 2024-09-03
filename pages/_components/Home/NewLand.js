import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Counter from '../../../components/common/animation/Counter';
import Slider from '../../../components/common/animation/Slider';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Accordion from '../../../components/common/Features/Accordion';
import GlobalFooter from '../layout/GlobalFooter';

function NewLand() {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when page is scrolled up to a certain height
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const GradientText = {
        fontFamily: "Poppins",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px", /* 159.091% */
        background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent', // Ensure text color is transparent
    };

    const GradientText2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px", /* 129.63% */
        background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
        backgroundClip: 'text',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
    }

    const ContentText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Bgcolor = {
        background: "linear-gradient(285deg, #8225AF -2.3%, #0F52BA 106.84%)"
    }

    const List = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Text1 = {
        color: "#FFF",
        fontFamily: "Poppins",

        fontStyle: "normal",
        fontWeight: "700",
        lineWeight: "70px", /* 129.63% */
    }

    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const TitleText3 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px" /* 109.375% */
    }

    const MonthPlan = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const Price = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }
    const PaymentList = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const ProductName = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal", /* 87.5% */
    }
    const ProductList = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px", /* 87.5% */
    }

    const AccordingBody = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };


    const Object = [
        {
            id: 1,
            name: "long-term",
            title: "Long Term",
            content: "By creating this profile, you can find compatible partners for marriage and lifelong companionship",
            image: "/heroSec/longTerm-img.jpg"
        },
        {
            id: 2,
            name: "dating",
            title: "Dating",
            content: "By creating this profile, you can discover profiles for casual relationships",
            image: "/heroSec/profiles/dating-img.jpg"
        },
        {
            id: 3,
            name: "friendship",
            title: "Friendship",
            content: "By creating this profile, you can find friends and connect with groups for trips and activities.",
            image: "/heroSec/profiles/friendship-img.jpg"
        },
    ]

    const [Profiles, SetProfiles] = useState({
        id: 1,
        title: "Long Term",
        content: "By creating this profile, you can find compatible partners for marriage and lifelong companionship",
        image: "/heroSec/longTerm-img.jpg"
    })

    const HandleProfile = (e) => {


        const selectedProfile = Object.find((state) => state.name == e.target.name)
        if (selectedProfile) {
            SetProfiles({
                id: selectedProfile.id,
                title: selectedProfile.title,
                content: selectedProfile.content,
                image: selectedProfile?.image
            })
        }
    }


    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(getCookie("jwtToken"))
    }, [])


    const router = useRouter();

    const GotoLogin = () => {
        if (!token) {
            router.push("/login")
        } else {
            router.push("/longterm/dashboard")
        }
    }


    return (
        <>


            <div className={`${isVisible ? "fixed" : "hidden"} bottom-10 right-10`}>
                <button id='grad-button' onClick={scrollToTop} className="Scroll-Top-Btn">
                    <svg height="1.2em" className="Scroll-top-arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                    <p className="Scroll-Top-text">Back to Top</p>
                </button>

            </div>
            <div className='mt-[100px] w-full h-full bg-[#FFF]'>
                <div className='space-y-[40px] 2xl:space-y-[40px] xl:space-y-[20px]'>
                    <div className='space-y-[55px] 2xl:space-y-[55px] xl:space-y-[45px]'>
                        <h1 className='text-black text-center font-poppins font-bold leading-[50px] 2xl:text-[54px] xl:text-[40px] text-[40px]'>Single App, Multiple Choices. </h1>
                        <div>
                            <ul className='flex justify-center space-x-[20px]'>
                                <li>
                                    <button onClick={HandleProfile} name='long-term' className={`text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] w-[134px] h-[50px] 2xl:text-[16px] xl:text-[14px] text-[16px]  rounded-[32px]  border-[1px] border-[#000] ${Profiles?.id == 1 ? "bg-[#000] text-[#FFF]" : " text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]"}`}>Long Term</button>
                                </li>
                                <li>
                                    <button onClick={HandleProfile} name='dating' className={`text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] w-[134px] h-[50px] 2xl:text-[16px] xl:text-[14px] text-[16px]  rounded-[32px]   border-[1px] border-[#000] ${Profiles?.id == 2 ? "bg-[#000] text-[#FFF]" : " text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]"} `}>Dating</button>
                                </li>
                                <li>
                                    <button onClick={HandleProfile} name='friendship' className={`text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] w-[134px] h-[50px] 2xl:text-[16px] xl:text-[14px] text-[16px]  rounded-[32px]  border-[1px] border-[#000] ${Profiles?.id == 3 ? "bg-[#000] text-[#FFF]" : " text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]"}`}>Friendship</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=''>

                        {/* <div className='2xl:pl-[175px] xl:pl-[85px] pl-[8%] flex justify-evenly  2xl:space-x-[160px] xl:space-x-[100px] space-x-[100px]'> */}
                        <div className='flex justify-between pr-[0px] 2xl:pl-[200px] xl:pl-[160px]'>
                            <div className='mt-[20px]'>
                                <ul className='w-full space-y-[23px]'>
                                    <li style={GradientText}>{Profiles?.title}</li>
                                    <li className='w-[483px]' style={ContentText}>{Profiles?.content}</li>
                                    <li className='space-x-[25px]'>
                                        <button onClick={GotoLogin} id='grad-button' className='w-[158px] h-[50px] rounded-[32px]'>{token ? "Explore Now" : "Create Profile"}</button>
                                        <button onClick={() => router.push("/longterm/features")} className='w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]'>Learn More</button>
                                    </li>
                                </ul>

                            </div>

                            <div className=''>
                                <Image width={0} height={0} alt='img-1' src={Profiles?.image} loading='lazy' className={`w-[auto] 2xl:h-[385px] xl:h-[330px] h-[300px] relative right-[80px]`} />
                            </div>

                        </div>
                        <div style={Bgcolor} className='w-[100%] h-[553px]'>

                            <div className='flex justify-evenly items-center pt-[115px]'>

                                <div className=''>

                                    <ul className='space-y-[26px]'>
                                        <li className='w-[400px] 2xl:text-[54px] xl:text-[40px] text-[40px]' style={Text1}>India’s <br />  Most Secured Social Site</li>
                                        <li className='w-[468px] text-[18px] text-[#FFF]' style={Text3}>Connect with your chosen profiles and build stronger relationships</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='space-y-[60px]'>
                                        <li className='flex space-x-[63px]'>
                                            <div>
                                                <Image width={0} height={0} alt='privacy' loading='lazy' src={"/heroSec/icon/icon-1.svg"} className='w-[33.827px] h-[38px]' />
                                            </div>
                                            <div style={List} className='2xl:text-[28px] xl:text-[22px] text-[24px]'>
                                                100% Privacy
                                            </div>

                                        </li>
                                        <li className='flex space-x-[63px]'>
                                            <div>
                                                <Image width={0} height={0} alt='privacy' loading='lazy' src={"/heroSec/icon/icon-3.svg"} className='w-[33.827px] h-[38px]' />
                                            </div>
                                            <div style={List} className='2xl:text-[28px] xl:text-[22px] text-[24px]'>Zero Fake Profiles</div>

                                        </li>
                                        <li className='flex space-x-[63px]'>
                                            <div>
                                                <Image width={0} height={0} alt='privacy' loading='lazy' src={"/heroSec/icon/icon-2.svg"} className='w-[33.827px] h-[38px]' />
                                            </div>
                                            <div style={List} className='2xl:text-[28px] xl:text-[22px] text-[24px]'>Fully Secured</div>

                                        </li>
                                        <li className='flex space-x-[63px]'>
                                            <div>
                                                <Image width={0} height={0} alt='privacy' loading='lazy' src={"/heroSec/icon/icon-4.svg"} className='w-[33.827px] h-[38px]' />
                                            </div>
                                            <div style={List} className='2xl:text-[28px] xl:text-[22px] text-[24px]'>Verified Profiles</div>

                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className='w-full h-full pb-[20px] pt-[80px]'>
                        <div className='flex w-full justify-evenly items-center'>
                            <div className='ml-[40px] w-[400px] space-y-[40px]'>
                                <h1 id='gradient-Text-style' style={GradientText2} className='2xl:text-[54px] xl:text-[45px] lg:text-[40px]'>Chat anytime you want</h1>
                                <p style={Text3} className='text-[#000] 2xl:text-[18px] xl:text-[16px] lg:text-[18px] text-[18px]'>Connect with your chosen profiles and build stronger relationships</p>
                                <ul className='flex space-x-[70px]'>
                                    <li className='space-y-[8px] flex flex-col justify-center items-center'>
                                        <Image width={0} height={0} alt='emoji' src={"/heroSec/icon/emoji-icon.svg"} loading='lazy' className='w-[30px] h-[30px]' />
                                        <p className='text-[14px] text-center text-[#000]' style={Text3}>Emoji</p>
                                    </li>
                                    <li className='space-y-[8px] flex flex-col justify-center items-center'>
                                        <Image width={0} height={0} alt='img' src={"/heroSec/icon/img-icon.svg"} loading='lazy' className='w-[30px] h-[30px]' />
                                        <p className='text-[14px] text-center text-[#000]' style={Text3}>Image</p>
                                    </li>
                                    <li className='space-y-[8px] flex flex-col justify-center items-center'>
                                        <Image width={0} height={0} alt='mic' src={"/heroSec/icon/mic-icon.svg"} loading='lazy' className='w-[30px] h-[30px]' />
                                        <p className='text-[14px] text-center text-[#000]' style={Text3}>Audio</p>
                                    </li>
                                    <li className='space-y-[8px] flex flex-col justify-center items-center'>
                                        <Image width={0} height={0} alt='video-call' src={"/heroSec/icon/video-call-icon.svg"} loading='lazy' className='w-[30px] h-[30px]' />
                                        <p className='text-[14px] text-center text-[#000]' style={Text3}>Video</p>
                                    </li>
                                </ul>
                                <ul className='flex space-x-[25px]'>
                                    <li>
                                        <button onClick={GotoLogin} className='text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] bg-[#000] text-[#FFF]'>{"Start Chat"}</button>
                                    </li>
                                    <li>
                                        <button className='text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#000] text-[#000] hover:bg-[#EFF5FF]' onClick={() => router.push("/chat-features")}>Learn More</button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image width={0} height={0} alt='chat-ui' loading='lazy' src={"/heroSec/assests/chat-img-1.svg"} className='2xl:w-[530px] 2xl:h-[530px] xl:w-[490px] xl:h-[490px] lg:w-[530px] lg:h-[530px] w-[530px] h-[530px]' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#FDF8FF] pt-[50px] w-full h-[774px] flex flex-col justify-evenly items-center'>
                        <div className='text-center space-y-[12px]'>
                            <h1 className='2xl:text-[50px] xl:text-[50px] text-[40px]' style={TitleText3}>We offered most affordable plans</h1>
                            <p className='text-[18px] text-[#000]' style={Text3}>Connect with your chosen profiles and build stronger relationships</p>
                        </div>
                        <div className='w-[80%] text-center space-y-[90px]'>
                            <ul className='flex justify-evenly w-full'>
                                <li>
                                    <div>
                                        <h1 style={MonthPlan}>One Month Plan</h1>
                                        <ul className='flex items-center justify-center space-x-[5px]'>
                                            <li style={Price}>Rs.</li>
                                            <li>
                                                <Counter from={0} to={399} duration={6} />
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                <li className='w-[1px] h-[72px] bg-[#ADADAD]'></li>
                                <li>
                                    <div>
                                        <h1 style={MonthPlan}>Two Month Plan</h1>
                                        <ul className='flex items-center justify-center space-x-[5px]'>
                                            <li style={Price}>Rs.</li>
                                            <li>
                                                <Counter from={0} to={599} duration={6} />
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-[1px] h-[72px] bg-[#ADADAD]'></li>
                                <li>
                                    <div>
                                        <h1 style={MonthPlan}>Three Month Plan</h1>
                                        <ul className='flex items-center justify-center space-x-[5px]'>
                                            <li style={Price}>Rs.</li>
                                            <li>
                                                <Counter from={0} to={799} duration={6} />
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div>
                                <button onClick={() => token ? router.push("/longterm/dashboard/upgrade") : router.push("/login")} className='text-center font-poppins font-normal leading-normal w-[212px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]'>Discover More Plans</button>
                            </div>
                        </div>
                        <div className='w-full text-center space-y-[40px]'>
                            <div>
                                <p style={PaymentList}>We accept</p>
                            </div>
                            <div className='w-full flex justify-center'>
                                <Slider />
                            </div>
                        </div>
                    </div>

                    <div className='border-b-[1px] border-b-[#E9E9E9] pb-[60px]'>
                        <div className='text-center'>
                            <h1 className='2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]'>Frequently Asked Questions</h1>
                        </div>
                        <ul className='flex flex-col items-center space-y-[13px] mt-[80px]'>
                            <li className='w-[70%]'>
                                <Accordion title={"How do I create an account on HappyMilan?"}>
                                    <ul style={AccordingBody}>
                                        <li>
                                            Step 1: Click on{" "}
                                            <span className="text-[#0F52BA]"> “Sign up.”</span>
                                        </li>
                                        <li>
                                            Step 2: Enter your{" "}
                                            <span className="text-[#0F52BA]">
                                                {" "}
                                                “Email or mobile number.”
                                            </span>
                                        </li>
                                        <li>Step 3: Choose a password.</li>
                                        <li>
                                            Step 4: Select the registration type, either{" "}
                                            <span className="text-[#0F52BA]">
                                                {" "}
                                                “Marriage or Dating”
                                            </span>
                                        </li>
                                        <li className="mt-[30px]">
                                            after selection of registration type , you’ll be redirecting
                                            to your own dashboard and at this stage you’ll have
                                            successfully registered on HappyMilan. But you’ll be
                                            restricted to send request until you don’t complete the
                                            registration form. Once we’ve all the information, we’ll be
                                            able to give you perfect suggestion matches based on your
                                            information.
                                        </li>

                                        <li className="mt-[21px]">
                                            Wish you’ll have great experience on HappyMilan.com
                                        </li>
                                    </ul>
                                </Accordion>
                            </li>
                            <li className='w-[70%]'>
                                <Accordion title="Is HappyMilan for Long Term, Dating and Friendship?">
                                    HappyMilan is a social networking website that caters to both categories: matrimony and dating. Users can select either option when registering
                                </Accordion>
                            </li>
                            <li className='w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center'>
                                <p>What are top features of HappyMilan?</p>
                                <Image className={`opacity-50 transform origin-center transition duration-200 ease-out`} width={14} height={14} alt='plus' src={"/assests/animation/plus-img.png"} />

                            </li>
                            <li className='w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center'>
                                <p>How can I manage my profile?</p>
                                <Image className={`opacity-50 transform origin-center transition duration-200 ease-out`} width={14} height={14} alt='plus' src={"/assests/animation/plus-img.png"} />

                            </li>
                            <li className='w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center'>
                                <p>Can I cancel the membership?</p>
                                <Image className={`opacity-50 transform origin-center transition duration-200 ease-out`} width={14} height={14} alt='plus' src={"/assests/animation/plus-img.png"} />

                            </li>
                            <li className='w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center'>
                                <p>Can I delete my account?</p>
                                <Image className={`opacity-50 transform origin-center transition duration-200 ease-out`} width={14} height={14} alt='plus' src={"/assests/animation/plus-img.png"} />

                            </li>
                        </ul>
                        <div className='pt-[65px] text-center'>
                            <button onClick={() => router.push("/faq")} className='w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF] text-center font-poppins font-normal leading-normal'>Learn More</button>
                        </div>

                    </div>
                    <div className='space-y-[80px]'>
                        <div className='text-center pt-[80px]'>
                            <h1 className='2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]'>Discover more apps</h1>
                        </div>
                        <ul className='flex   justify-evenly   '>
                            <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                                <div className='flex flex-col justify-evenly w-full h-full'>
                                    <div>
                                        <Image width={0} height={0} alt='proffers' src={"/assests/product-assests/proffers.svg"} className='w-[50.702px] h-[44px]' />
                                    </div>
                                    <div className='space-y-[20px]'>
                                        <h1 style={ProductName}>Proxale</h1>
                                        <p style={ProductList}>Explore Nearby Services</p>
                                    </div>
                                    <div className='flex justify-end pr-[31px]'>
                                        <Image width={25.667} height={26.341} alt='arrow-icon' src={"/heroSec/icon/arrow-icon.svg"} />
                                    </div>
                                </div>
                            </li>
                            <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                                <div className='flex flex-col justify-evenly w-full h-full'>
                                    <div>
                                        <Image width={0} height={0} alt='Trendigo' src={"/assests/product-assests/Trendigo.svg"} className='w-[33.885px] h-[44px]' />
                                    </div>
                                    <div className='space-y-[20px]'>
                                        <h1 style={ProductName}>Trendigo</h1>
                                        <p style={ProductList}>Shop for Men & Women</p>
                                    </div>
                                    <div className='flex justify-end pr-[31px]'>
                                        <Image width={25.667} height={26.341} alt='arrow-icon' src={"/heroSec/icon/arrow-icon.svg"} />
                                    </div>
                                </div>
                            </li>
                            <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                                <div className='flex flex-col justify-evenly w-full h-full'>
                                    <div>
                                        <Image width={0} height={0} alt='proffers' src={"/assests/product-assests/adskaro.svg"} className='w-[57.538px] h-[44px]' />
                                    </div>
                                    <div className='space-y-[20px]'>
                                        <h1 style={ProductName}>AdsKaro</h1>
                                        <p style={ProductList}>Daily Ads Services</p>
                                    </div>
                                    <div className='flex justify-end pr-[31px]'>
                                        <Image width={25.667} height={26.341} alt='arrow-icon' src={"/heroSec/icon/arrow-icon.svg"} />
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className='w-full h-full pt-[100px]'>
                        <div className='w-full h-[229px] bg-[#FDF8FF]'>
                            <div className='flex justify-between items-center pr-[100px] pl-[100px]'>
                                <div className=' space-y-[37px]'>
                                    <p className='text-[24px] text-[#000]' style={Text3}>Your gateway to the limitless potentials, Download App</p>
                                    <ul className='flex space-x-[40px]'>
                                        <li>
                                            <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/play-store.svg"} />
                                        </li>
                                        <li>
                                            <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/app-store.svg"} />
                                        </li>
                                    </ul>
                                </div>
                                <div className='relative top-[30px]'>
                                    <Image width={0} height={0} alt='app' loading='lazy' src={"/heroSec/assests/app-frame.svg"} className='w-[160.043px] h-[auto]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <GlobalFooter />

                </div>
            </div >

        </>
    )
}

export default NewLand