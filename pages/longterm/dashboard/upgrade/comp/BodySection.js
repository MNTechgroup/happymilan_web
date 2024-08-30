import React from 'react'
import Accordion from '../../../../../components/common/Features/Accordion'
import Image from 'next/image'
import Footer from '../../../../_components/layout/Footer'

function BodySection() {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "70px", /* 250% */
    }

    const Text = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const Text2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text3 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    //     color: #000;
    // text-align: center;
    // font-family: Poppins;
    // font-size: 14px;
    // font-style: normal;
    // font-weight: 600;
    // line-height: normal;
    return (
        <>
            <div className='space-y-[108px] w-full h-full grid place-items-center'>
                <div className='mt-[180px] space-y-[40px]'>

                    <div>
                        <h1 style={Title}>Frequently Asked Questions</h1>
                    </div>
                    <div className='w-full'>
                        <ul className='space-y-[13px]'>
                            <li className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%]'>
                                <Accordion title={"What payment options are available?"} />
                            </li>
                            <li className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%]'>
                                <Accordion title={"Can I cancel the plan at any time?"} />
                            </li>
                            <li className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%]'>
                                <Accordion title={"Is there a refund policy?"} />
                            </li>
                            <li className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%]'>
                                <Accordion title={"Will I need to pay any additional charges?"} />
                            </li>
                            <li className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%]'>
                                <Accordion title={"Are the available payment options safe?"} />
                            </li>
                        </ul>
                    </div>

                </div>

                <div className=''>
                    <div className='2xl:w-[900px] xl:w-[800px] md:w-[650px] w-[90%] h-[275px] bg-[#FDF8FF] rounded-[18px] flex flex-col justify-evenly'>
                        <div className='space-y-[20px]'>
                            <h1 style={Text}>Need further assistance?</h1>
                            <p style={Text2}>Can’t find the answer you’re looking for? Please chat to our friendly team</p>
                        </div>

                        <div>
                            <ul className='flex justify-evenly'>
                                <li className='flex space-x-[14px] flex space-x-[14px]'>
                                    <Image
                                        width={16}
                                        height={16}
                                        alt="img"
                                        loading="lazy"
                                        className=""
                                        src="/assests/common/contact-icon.svg"
                                    />
                                    <h1 className="" style={Text3}>
                                        +91 91048 14072
                                    </h1>
                                </li>
                                <li className='h-[18px] w-[1px] bg-[#CECECE]'></li>
                                <li className='flex space-x-[14px]'>
                                    <Image
                                        width={21}
                                        height={16}
                                        alt="img"
                                        loading="lazy"
                                        src="/assests/common/email-icon.svg"
                                    />
                                    <h1 style={Text3}>
                                        contact@mntechgroup.com
                                    </h1>
                                </li>
                                <li className='h-[18px] w-[1px] bg-[#CECECE]'></li>
                                <li className='flex space-x-[14px]'>
                                    <Image
                                        width={17}
                                        height={16}
                                        alt="img"
                                        loading="lazy"
                                        src="/assests/common/message-icon.svg"
                                    />
                                    <h1 style={Text3}>
                                        Chat with us
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-full h-full'>
                <Footer />
            </div>
        </>
    )
}

export default BodySection