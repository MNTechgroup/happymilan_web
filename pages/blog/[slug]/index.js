 'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";


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
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[270px] lg:h-[259px]">
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

            <div className="w-full  lg:w-[456px] 2xl:grid xl:grid lg:grid md:flex place-items-center">
                <input type="text" className="outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[70px] pl-[10px]  h-[50px]" />
                <button style={TitleText} className="text-[14px] lg:relative  top-[-50px] left-[200px] w-[66px] text-[#fff] bg-[#0F52BA] rounded-[8px] h-[50px]">Copy</button>
            </div>
            
           
          
        </div>
          </div>
      </div>
    );
  }


function Page() {




    const router = useRouter();
   
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const BlogTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"

    }
    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
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
            <div className="mt-[80px] w-full h-full grid place-items-center">
                <div className="pt-[50px] xl:w-[980px] 2xl:w-[1100px]">
                    <div className="w-[100px] fixed  right-16 grid place-items-center ">
                        <Image alt="arrow-icon" width={32} height={32} className="lg:block hidden cursor-pointer" onClick={() => router.back()} src="/assests/common/arrow-back.svg" />
                    </div>
                    <div className="lg:w-[850px] 2xl:w-[850px] xl:w-[850px] w-full h-full">
                        <div className="2xl:pl-0 xl:pl-0 lg:pl-0 pl-[30px] 2xl:pr-0 xl:pr-0 lg:pr-0 pr-[30px]">
                            <h1 style={TitleText} className="text-[18px]">Read Full Article <span className="text-[12px]"> Posted on  : 10 July 2023 </span></h1>
                        </div>

                        <div className="pt-[20px] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-[30px] 2xl:pr-0 xl:pr-0 lg:pr-0 pr-[30px]">
                            <h1 style={BlogTitle} className="text-[24px]">When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "</h1>
                            <div className='pt-[38px] flex justify-between w-full lg:w-[816px]'>
                                <div>
                                    <Image alt="img" width={42} height={42} className='inline' src='/assests/common/blog-1-profile.svg' />
                                    <span className='ml-[10px] text-[14px]' style={Username}>Riya & Rohan </span>
                                </div>
                                <div onClick={openModal} className="flex justify-center items-center cursor-pointer">
                                    <h1 className="inline text-[16px] mr-[10px]" style={Username}>Share</h1><img className="inline" src="/assests/common/Share-arrow.svg" />
                                </div>
                            </div>

                        </div>

                        <div className="2xl:pl-0 xl:pl-0 lg:pl-0 pl-[30px] pr-[30px] pt-[30px]">
                            <Image alt="img" width={816} height={281}  src="/assests/pic/Blog-photo-1.svg" />
                            <div className="pt-[30px] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-[1px] 2xl:pr-0 xl:pr-0 lg:pr-0 pr-[5px]">
                                <p style={TitleText} className="text-[16px] lg:w-[816px] 2xl:w-[816px] xl:w-[816px] w-full">When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen. Ambassadors could not believe how enslaved the king was by his love for Anne. "This accursed Anne has her foot in the stirrup,"</p>
                                <p style={TitleText} className="text-[16px] lg:w-[816px] 2xl:w-[816px] xl:w-[816px] w-full pt-[20px]">complained the Spanish emissary. To comprehend the king's passion, one need only read his 16th century love letters, revealing his torment over how elusive she remained: "I beg to know expressly your intention touching the love between us…having been more than a year wounded by the dart of love, and not yet sure whether I shall fail or find a place in your affection." (Their love affair ended when he had her beheaded.)</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="block lg:hidden pt-[40px]">
                    <button onClick={()=>router.back()} className="border-[1px] border-[#ECECEC] rounded-[5px] h-[30px] w-[100px]">Back</button>
                </div>

                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>

            </div>

<CustomModal isOpen={isModalOpen} onClose={closeModal} />


        </>
    )
}

export default Page;