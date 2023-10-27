import React from 'react'
import Navbar from '../components/Navbar'
import { Accordion, AccordionBody, AccordionHeader, Typography } from '@material-tailwind/react'
import Footer from '../components/Footer'
import Sidebar from '../components/Navigation'

function index() {
    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const ContentText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const TextTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const AccordingTitle = {
        color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    }

    const AccordingBody = {
        color: "#7B7B7B",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const CardStyle = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
        <Navbar/>
            <div className='lg:pt-[120px] pt-[100px] w-full h-full grid place-items-center'>
                <div className='w-full lg:w-[750px]'>
                    <div className='w-full  text-center lg:text-left '>
                        <h1 style={TitleText}>Privacy Policy</h1>
                        <p style={ContentText} className='mt-[10px]'>Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand:</p>
                    </div>

                    <div className='mt-[26px] pb-[50px]'>
                        <div className='w-full lg:w-[750px]'>

                            <Accordion open={open === 1} style={{ borderBottom: "1px solid  #DADADA", borderTop:"1px solid #DADADA" }} className="pb-[5px] pt-[5px] lg:w-[750px] w-full   border-none">

                                <AccordionHeader className=' pl-[15px] lg:pl-0  lg:pl-0  border-none' style={TextTitle} onClick={() => handleOpen(1)}>1. What information does ReshtaForever.com collect from you?</AccordionHeader>

                                <AccordionBody style={AccordingBody} className="w-full lg:w-[727px] mt-[-10px]">
                                    <h1 className='w-full lg:w-[750px]'>RishtaForever.com is an advertising platform providing targeted advertising services for the purpose of matchmaking (“Service”). In order to do provide the services, you (User/Member) required to submit certain personal information which is displayed on the Site on behalf of you to find the perfect life partner. You hereby provide your consent to collect, process, and share of your personal information with other user/members in order to provide the service.Shaadi.com gathers three types of information while you are availing our services:i. Information you voluntarily submit; andii. Information not directly submitted by youiii. Information we receive from others</h1>
                                    <div className='p-[10px]'>
                                        <h1 className='' style={ContentText}>1. Information submitted by youIn order to avail the service you provide the following information</h1>
                                        <div className='w-full lg:w-[750px]'>
                                            <ul className='lg:ml-[35px] list-disc m-[15px]'>
                                                <li className='mt-[10px]'>To register as a Member of Shaadi.com or use this Site, you must be legally competent and of legal marriageable age as per the laws of India (currently, 18 years or over for females and 21 years or over for males).</li>
                                                <li className='mt-[10px]'>Shaadi.com site is only to facilitate personal advertisement for lawful marriage alliance between persons who are legally competent to enter into matrimony under the laws to which they are subject. Membership in the Service is void where prohibited.</li>
                                                <li className='mt-[10px]'>By using this Site, you represent and warrant that you have the right, consent, authority, and legal capacity to enter into this Agreement; submit relevant information to us; and that you are not prohibited or prevented by any applicable law for the time being in force or any order or decree or injunction from any court, tribunal or any such competent authority restraining you from entering into matrimony.</li>
                                                <li className='mt-[10px]'> You further confirm that you, intend to seek a life partner and that you shall not use this site for casual dating or for any commercial use. You also agree to abide by all of the terms and conditions of this Agreement and use the service in conformity with all applicable laws. If at any time Shaadi.com is of the opinion (in its sole discretion) or has any reason to believe that you are not eligible to become a member or that you have made any misrepresentation, or violated any provisions of the Terms of Use, applicable laws, Shaadi.com reserves the right to forthwith terminate your membership and / or your right to use the Service without any refund to you of any of your unutilized subscription fee.</li>
                                                <li className='mt-[10px]'>By using this Site you acknowledge that the match mails or the match search results shown to you by the system are based on the partner preference details submitted by you in your profile.</li>
                                                <li className='mt-[10px]'>Shaadi.com reserves the right to share information with third parties with regards to any promotions or offers exclusive to our members. However, we shall obtain your prior consent before sharing any of your data.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className='' style={ContentText}>1. Information not directly submitted by you</h1>
                                            <div className='w-full lg:w-[750px]'>
                                                <ul className='list-disc m-[15px] lg:ml-[35px]'>
                                                    <li className='mt-[10px]'>User activityWe collect information about your activity on our services, such as date and time you logged in, features you’ve been using, searches, clicks and pages visited by you, your interaction with other users including messages exchanged.</li>
                                                    <li className='mt-[10px]'> Device InformationWe collect information from and about the device(s) such as IP address, device ID and type, device-specification and apps settings, app error reports, browser type and version, operating system, identifiers associated with cookies or other technologies that may uniquely identify your device or browser;</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='flex justify-center' style={ContentText}>1. Information we receive from othersIn addition to the information you provide us directly, we receive information about you from others, such as:</h1>
                                            <ul className='lg:w-full list-disc m-[15px] lg:ml-[35px]'>
                                                <li>Social MediaYou have an option to use your social media login (such as Google SSO/Apple ID) to create and log into your shaadi.com account. This saves you from remembering one more login credentials and allows you to share some information from your social media account with us</li>
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionBody>

                            </Accordion>

                            <Accordion className='' open={open === 2} style={{ borderBottom: "1px solid #DADADA" }}>
                                <AccordionHeader style={TextTitle} className='border-none pt-[22px] pb-[20px]  pl-[15px] lg:pl-0' onClick={() => handleOpen(2)}>2. How we use information we collect?</AccordionHeader>
                            </Accordion>

                            <Accordion className='' open={open === 2} style={{ borderBottom: "1px solid #DADADA" }}>
                                <AccordionHeader style={TextTitle} className='border-none pt-[22px] pb-[20px]  pl-[15px] lg:pl-0' onClick={() => handleOpen(2)}>3. With whom does we share your information?</AccordionHeader>
                            </Accordion>

                            <Accordion className='' open={open === 2} style={{ borderBottom: "1px solid #DADADA" }}>
                                <AccordionHeader style={TextTitle} className='border-none pt-[22px] pb-[20px]  pl-[15px] lg:pl-0' onClick={() => handleOpen(2)}>4. How to access and/or control your information?</AccordionHeader>
                            </Accordion>

                            <Accordion className='' open={open === 2} style={{ borderBottom: "1px solid #DADADA" }}>
                                <AccordionHeader style={TextTitle} className='border-none pt-[22px] pb-[20px]  pl-[15px] lg:pl-0' onClick={() => handleOpen(2)}>5. How we secure your information?</AccordionHeader>
                            </Accordion>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>



        </>
    )
}

export default index