import React from 'react'
import Navbar from '../components/Navbar'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import Footer from '../components/Footer';

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

const CardTitleText = {
    color: "#000",
textAlign: "center",
fontFamily: "Poppins",
fontSize: "18px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"
}

const CardContentText = {
    color: "#000",
fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal",
}

const Textstyle = {
    color: "#000",
textAlign: "center",
fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"
}

function index() {   
    
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    
  return (
    <>
        <Navbar/>
    <div className='w-full pt-[80px] lg:pt-[120px] mt-[37px] h-full  lg:grid place-items-center '>
        <div className=''>
        
<h1 className='text-center'><span id='faq-title-1'>Frequently asked questions</span>
<span id='faq-title-2' className='block mt-[10px]'>Have questions? We{"’"}re here to help</span></h1>
        </div>

        <div className='mt-[26px]'>
            <div className='w-full  lg:w-[750px]'>

        <Accordion open={open === 1} className="pt-[22px] pl-[10px] lg:pl-0 pb-[5px]" style={{borderBottom:"1px solid  #DADADA"}}>
        <AccordionHeader style={AccordingTitle} className=' border-none' onClick={() => handleOpen(1)}>Is there a free trial available?</AccordionHeader>
      
        <AccordionBody style={AccordingBody} className="mt-[-10px]">
        Yes, you can try us for free 30 days, if you want, we{"’"}ll provide you with a free, personalised 30-minute 
        onboarding call to get you up and running as possible.
        </AccordionBody>
        </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 2} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none  lg:pl-0 pb-[20px]' onClick={() => handleOpen(2)}>Can I change my plan later?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 3} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none pt-[22px] pb-[20px]' onClick={() => handleOpen(3)}>What is your cancellation policy?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 7} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none pt-[22px] pb-[20px]' onClick={() => handleOpen(7)}>Can other info be aded to an invoice?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 4} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none pt-[22px] pb-[20px]' onClick={() => handleOpen(4)}>How does billing work?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 5} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none pt-[22px] pb-[20px]' onClick={() => handleOpen(5)}>Hows I change my account email?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className='pl-[10px] lg:pl-0' open={open === 6} style={{borderBottom:"1px solid #DADADA"}}>
      <AccordionHeader style={AccordingTitle} className='border-none pt-[22px] pb-[20px]' onClick={() => handleOpen(6)}>Hows I delete my delete account?</AccordionHeader>
        <AccordionBody style={AccordingBody} className="mt-[-10px] pb-[22px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
        </div>

        </div>

        <div>
            <div className='w-full h-full lg:grid place-items-center lg:w-[750px] lg:h-[266px] bg-[#F4F9FF] rounded-[20px] mt-[46px]'>
<div className='w-full grid place-items-center pb-[20px] pt-[40px]'>
<img src='/assests/common/group-rounded.svg' />
   
</div>
<div className='text-center'>
    <h1 style={CardTitleText}>Still have questions?</h1>
    <p className='pt-[10px]' style={CardContentText}>Can{"’"}t find the answer you{"’"}re looking for? Please chat to our friendly team</p>
</div>

<div className='md:flex p-[10px] justify-evenly w-full md:m-[40px]'>
    
    <div className='mt-[10px] md:mt-0'>
        <img className='inline mr-[14px]' src='/assests/common/contact-icon.svg' />
        <h1 className='inline' style={Textstyle}>+079 000322321</h1>
    </div>
  
    <div className='hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]'></div>
  
    <div className='mt-[20px] md:mt-0 md:ml-[50px]'>
        <img className='inline mr-[14px]' src='/assests/common/email-icon.svg' />
        <h1 className='inline' style={Textstyle}>support@happymilan.com</h1>
    </div>
  
    <div className='hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]'></div>
  
    <div className='mt-[20px] md:mt-0 md:ml-[50px]'>
        <img className='inline mr-[14px]' src='/assests/common/message-icon.svg' />
        <h1 className='inline' style={Textstyle}>Chat with us</h1>
    </div>
</div>
            </div>

            
        </div>


        {/* <!-- Footer Section Started --> */}

        <Footer/>
                {/* <!-- Footer Section End --> */}


    </div>
    </>
  )
}

export default index