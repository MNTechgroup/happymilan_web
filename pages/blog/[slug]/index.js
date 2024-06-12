'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import ShareModal from "../../components/Models/ShareModal";


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
                                    <h1 className="inline text-[16px] mr-[10px]" style={Username}>Share</h1><Image alt="img" width={17} height={14} className="inline" src="/assests/common/Share-arrow.svg" />
                                </div>
                            </div>

                        </div>

                        <div className="2xl:pl-0 xl:pl-0 lg:pl-0 pl-[30px] pr-[30px] pt-[30px]">
                            <Image alt="img" width={816} height={281} src="/assests/pic/Blog-photo-1.svg" />
                            <div className="pt-[30px] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-[1px] 2xl:pr-0 xl:pr-0 lg:pr-0 pr-[5px]">
                                <p style={TitleText} className="text-[16px] lg:w-[816px] 2xl:w-[816px] xl:w-[816px] w-full">When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen. Ambassadors could not believe how enslaved the king was by his love for Anne. "This accursed Anne has her foot in the stirrup,"</p>
                                <p style={TitleText} className="text-[16px] lg:w-[816px] 2xl:w-[816px] xl:w-[816px] w-full pt-[20px]">complained the Spanish emissary. To comprehend the king's passion, one need only read his 16th century love letters, revealing his torment over how elusive she remained: "I beg to know expressly your intention touching the love between us…having been more than a year wounded by the dart of love, and not yet sure whether I shall fail or find a place in your affection." (Their love affair ended when he had her beheaded.)</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="block lg:hidden pt-[40px]">
                    <button onClick={() => router.back()} className="border-[1px] border-[#ECECEC] rounded-[5px] h-[30px] w-[100px]">Back</button>
                </div>

                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>

            </div>

            <ShareModal isOpen={isModalOpen} onClose={closeModal} />


        </>
    )
}

export default Page;