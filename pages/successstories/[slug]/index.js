import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Textarea } from '@material-tailwind/react'
import { useRouter } from 'next/router'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";


  function CustomModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl h-[259px]">
          <div className='flex'>
          <div className="lg:w-[445px] w-full items-center flex  justify-between">
            <div className="place-items-center">
                <h1 className="text-[14px] text-[black]" style={TitleText}>Share with Friends</h1>
            </div>
            <div>
                <img className="cursor-pointer"  onClick={onClose} src="/assests/social/close.svg" />
            </div>
         </div>
          </div>
          <div className='mt-[20px]'>

          <div className="flex items-center justify-center">
        <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[456px] gap-y-[20px] gap-x-[40px]">
            <div className="grid place-items-center">
                <img src="/assests/social/whatsapp.svg" />
                <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span>
            </div>
            <div className="grid place-items-center">
                <img src="/assests/social/tweeter.svg" />
                <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span>
            </div>
            <div className="grid place-items-center">
                <img src="/assests/social/facebook.svg" />
                <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span>
            </div>
            <div className="grid place-items-center">
                <img src="/assests/social/linkedin.svg" />
                <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span>
            </div>
            <div className="grid place-items-center">
                <img src="/assests/social/google.svg" />
                <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Email</span>
            </div>
        </div>
        </div>
        

          </div>
          <div className="flex justify-center mt-[20px]">

            <div className="w-full  lg:w-[456px] grid place-items-center">
                <input type="text" className="outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[70px] pl-[10px]  h-[50px]" />
                <button style={TitleText} className="text-[14px] lg:relative  top-[-50px] left-[200px] w-[66px] text-[#fff] bg-[#0F52BA] rounded-[8px] h-[50px]">Copy</button>
            </div>
            
           
          
        </div>
          </div>
      </div>
    );
  }
  

function index() {

    const router = useRouter();

    const imgdata = [
        {
            id: 1,
            img: "/assests/stories/stories-1.svg",
            username: "Riya & Rohan",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 2,
            img: "/assests/stories/stories-2.svg",
            username: "Mahesh & Priya",
            date: "(Married on 02 March 2023)"
        },
        {
            id: 3,
            img: "/assests/stories/stories-3.svg",
            username: "Jigar & Hiteshi ",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 4,
            img: "/assests/stories/stories-4.svg",
            username: "Kaushal & Jiya",
            date: "(Married on 30 Apr 2023)"
        },
        {
            id: 5,
            img: "/assests/stories/stories-5.svg",
            username: "Jiyan & Jigisha",
            date: "(Married on 19 Apr 2023)"
        },
        {
            id: 6,
            img: "/assests/stories/stories-6.svg",
            username: "Rohan & Joya",
            date: "(Married on 01 June 2023)"
        },
        {
            id: 7,
            img: "/assests/stories/stories-7.svg",
            username: "Ramesh & Shivali",
            date: "(Married on 23 Feb 2023)"
        },
        {
            id: 8,
            img: "/assests/stories/stories-8.svg",
            username: "Vishal & Heena",
            date: "(Married on 19 Apr 2023)"
        },
    ]


    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "28px" /* 116.667% */
    }
    const Text3 = {

        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal" /* 116.667% */

    }

  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


    return (
        <>
            <Navbar />
            <div className='w-full h-full grid place-items-center'>
                <div className=' 2xl:w-[1200px] xl:w-[1200px] lg:w-full  h-full border-2  grid place-items-end border-[black]'>

                    <div className='fixed top-[100px]'>
                        <img src='/assests/common/arrow-back.svg' onClick={() => router.back()} className='cursor-pointer' style={TitleText} />
                    </div>
                </div>
                <div className=' mt-[100px] w-full  lg:w-full 2xl:w-[1200px] xl:w-[1200px]'>

                    <div className=' w-full '>
                        <div className='pl-[45px]'>
                            <h1 className='text-[18px] text-[#000]' style={TitleText}>Story of Riya & Rohan</h1>
                        </div>
                    </div>



                    <div className='hidden lg:hidden 2xl:block xl:block fixed bottom-2 2xl:left-6 xl:left-0 2xl:top-[43%] lg:top-[43%] xl:top-[43%] 2xl:w-[100px] xl:w-[50px] w-[100px] h-[300px] 2xl:pb-0 lg:pb-0 pb-0 xl:pb-[50px]'>

                        <div className='flex flex-col justify-evenly h-full w-full items-center'>
                            <div className='grid place-items-center'>
                                <img className='cursor-pointer' onClick={openModal} src='/assests/stories/Share-icon.svg' />
                                <h1 className='text-[10px] pt-[5px]' style={TitleText}>Share</h1>
                            </div>
                            <div className='grid place-items-center'>
                                <h1 className='text-[16px]' style={Text3}>10K</h1>
                                <h1 className='text-[10px]' style={TitleText}>Read</h1>
                            </div>
                            <div className='bg-[#0F52BA] w-[25px] h-[1px]'></div>
                            <div className='grid place-items-center'>
                                <h1 className='text-[16px]' style={Text3}>9K</h1>

                                <h1 className='text-[10px]' style={TitleText}>Heart</h1>
                            </div>
                            <div className='grid place-items-center'>
                                <img src='/assests/stories/story-heart.svg' />
                            </div>
                            <div>

                            </div>
                        </div>


                    </div>
                    <div className='w-full h-full grid place-items-center'>
                        <div className=' flex w-full flex-col flex-col-reverse  lg:flex-row  xl:w-[1100px] 2xl:w-[1100px]  justify-evenly  pt-[20px]'>


                            <div className='w-full lg:pl-[10px] 2xl:pl-0 xl:pl-0 lg:w-full xl:w-[530px] 2xl:w-[530px]  h-full '>
                                <div className=' mt-[-13px] w-full grid place-items-center text-center'>
                                    <h1 className='pb-[27px] text-[42px] text-[#000]' style={TitleText}>Our Story</h1>
                                    <div className=' w-[82px] h-[1px] bg-[#0F52BA]'></div>
                                </div>
                                <div className='pt-[35px] w-full lg:w-[524px] xl:w-[524px] 2xl:w-[524px]'>
                                    <h1 className='text-[16px] text-[#000]' style={TitleText}>When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen. Ambassadors could not believe how enslaved the king was by his love for Anne. "This accursed Anne has her foot in the stirrup,"</h1>
                                    <h1 className='pt-[20px] text-[16px] text-[#000]' style={TitleText}>complained the Spanish emissary. To comprehend the king's passion, one need only read his 16th century love letters, revealing his torment over how elusive she remained: "I beg to know expressly your intention touching the love between us…having been more than a year wounded by the dart of love, and not yet sure whether I shall fail or find a place in your affection." (Their love affair ended when he had her beheaded.) </h1>
                                </div>
                                <div className='flex justify-between relative 2xl:top-[141px] xl:top-[136px] lg:top-[30px] top-[135px]'>
                                    <div>
                                        <h1 className='text-[24px]' style={Text2}>Riya & Rohan</h1>
                                        <p className='text-[14px]' style={Text2}>Married on 19 Apr 2023</p>
                                    </div>
                                    <div>
                                        <button onClick={() => router.push("/successstories")} className='w-[196px] h-[50px] border-[1px] border-[black] rounded-[10px]'><span className='text-[16px]' style={TitleText}>More Stories</span></button>
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full lg:w-full 2xl:w-[550px] xl:w-[550px] h-full '>

                                <div className='flex gap-x-[20px] gap-y-[20px] flex-wrap justify-center lg:justify-start'>
                                    <div className='w-[45%] lg:w-[200px] h-full lg:h-[300px] rounded-[8px] bg-[] xl:w-[260px] xl:h-[381px] 2xl:h-[381px] 2xl:w-[260px]'>

                                        <div className='flex justify-center flex-col items-center h-full'>
                                            <img src='/assests/stories/stories-1.svg' />
                                        </div>

                                    </div>
                                    <div className='w-[45%] lg:w-[200px] h-full lg:h-[300px]  rounded-[8px] xl:w-[260px] xl:h-[381px] 2xl:h-[381px] 2xl:w-[260px]'>

                                        <div className='flex justify-center flex-col items-center h-full'>
                                            <img src='/assests/stories/Story-pic-2.svg' />
                                        </div>

                                    </div>
                                    <div className='w-[95%] lg:w-[420px] h-full lg:h-[200px] rounded-[8px] xl:w-[540px] xl:h-[259px] 2xl:h-[259px] 2xl:w-[540px]'>

                                        <div className='flex justify-center flex-col items-center h-full'>
                                            <img src='/assests/stories/Story-pic-3.svg' />
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>

            </div>


      
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
   
        </>
    )
}

export default index