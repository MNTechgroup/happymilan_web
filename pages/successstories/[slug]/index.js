import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import StoryView from '../../dashboard/commonCompo/StoryView'

const ShareModal = dynamic(() => import('../../components/Models/ShareModal'));

export async function getStaticPaths() {
    // Generate static paths based on the data you have
    const paths = generateStaticParams().map(({ slug }) => ({
        params: { slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Fetch data for the specific slug
    const { slug } = params;
    // Replace the following line with your actual data-fetching logic
    const data = { slug };
    return {
        props: {
            data,
        },
    };
}

export function generateStaticParams() {
    return [{ slug: 'story' }]; // Replace this with your actual data
}

function index({ data }) {



    const { slug } = data
    const router = useRouter();

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
    const Text5 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal" /* 116.667% */
    }
    const Text3 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal" /* 116.667% */

    }

    //     color: #000;
    // font-family: Poppins;
    // font-size: 34px;
    // font-style: normal;
    // font-weight: 600;
    // line-height: normal;

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal" /* 116.667% */

    }



    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderTabContent = () => {
        switch (slug) {
            case "story":
                return (
                    <>
                        <div className=' grid place-items-center w-full h-full'>
                            <div className=' 2xl:w-full  lg:w-full  h-full   grid place-items-end '>

                                <div className='z-[100] hidden lg:block fixed top-[100px] right-[85px] 2xl:right-[170px] xl:right-[85px]'>
                                    <Image loading='lazy' alt='img' width={32} height={32} src='/assests/common/arrow-back.svg' onClick={() => router.back()} className='cursor-pointer' style={TitleText} />
                                </div>
                            </div>
                            <div className=' lg:pb-0 pb-[60px] mt-[100px] w-full  lg:w-full 2xl:w-[834px] xl:w-[834px]'>

                                <div className=' w-full '>
                                    <div className='text-left pl-[0px] lg:pl-[0px] relative '>
                                        <h1 style={Text4} className='relative left-[-2px] text-[34px]'>Story of Riya & Rohan</h1>
                                        <span style={TitleText} className='text-[14px] text-[#797979]'>Married on 19th April 2024</span>
                                    </div>
                                </div>



                                <div className=' hidden lg:hidden 2xl:block xl:block fixed bottom-2 2xl:right-[140px] xl:right-[80px] 2xl:top-[43%] lg:top-[43%] xl:top-[43%] 2xl:w-[100px] xl:w-[50px] w-[100px] h-[300px] 2xl:pb-0 lg:pb-0 pb-0 xl:pb-[50px]'>

                                    <div className='flex flex-col justify-evenly h-full w-full items-center'>
                                        <div className='grid place-items-center'>
                                            <Image loading='lazy' alt='img' width={15} height={16} className='cursor-pointer' src='/assests/stories/Share-icon.svg' />
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint0_linear_1217_1200)" />
                                                <path d="M19.7193 29L18.455 27.849C13.9646 23.7771 11 21.0916 11 17.7956C11 15.1101 13.1101 13 15.7956 13C17.3128 13 18.7689 13.7063 19.7193 14.8223C20.6698 13.7063 22.1259 13 23.6431 13C26.3286 13 28.4387 15.1101 28.4387 17.7956C28.4387 21.0916 25.4741 23.7771 20.9837 27.8578L19.7193 29Z" fill="url(#paint1_linear_1217_1200)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1217_1200" x1="2.5" y1="-3.5" x2="40" y2="43.5" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#0F52BA" />
                                                        <stop offset="0.979167" stop-color="#8225AF" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1217_1200" x1="9.69785" y1="5.57812" x2="30.0104" y2="32.5312" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#0F52BA" />
                                                        <stop offset="1" stop-color="#7D27AF" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>

                                        </div>
                                    </div>


                                </div>
                                <div className=' w-full h-full mt-[40px] grid place-items-center'>
                                    <div className='flex relative right-[34.5px]'>
                                        <div className='w-[595px]'>
                                            <p style={TitleText} className='xl:text-[14px] 2xl:text-[16px] lg:text-[12px] text-[16px]'>When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen. Ambassadors could not believe how enslaved the king was by his love for Anne. "This accursed Anne has her foot in the stirrup,"<br /><br />

                                                complained the Spanish emissary. To comprehend the king's passion, one need only read his 16th century love letters, revealing his torment over how elusive she remained: "I beg to know expressly your intention touching the love between us…having been more than a year wounded by the dart of love, and not yet sure whether I shall fail or find a place in your affection." (Their love affair ended when he had her beheaded.)
                                                <br />
                                                <br />
                                                <span style={TitleText} className='text-[12px] mt-[10px]'>Written by</span>
                                                <br />
                                                <span style={Text4} className='text-[16px]'>Rahul Shah</span>
                                            </p>
                                        </div>
                                        <div className='relative left-[68px]'>
                                            <div>
                                                <Image loading='lazy' alt='img' width={171} height={251} src='/assests/stories/stories-1.svg' />

                                            </div>
                                            <div className='grid place-items-center mt-[12px]'>
                                                <ul className='flex space-x-[10px]'>
                                                    <li className='w-[12px] h-[12px] bg-[#0F52BA] rounded-full'></li>
                                                    <li className='w-[12px] h-[12px] bg-[#DFDFDFB2] rounded-full'></li>
                                                </ul>
                                            </div>
                                        </div>



                                    </div>

                                    <div className=' mt-[24px] w-[834px] relative left-[-5px]'>
                                        <div className='w-full h-[110px] rounded-[14px]'>
                                            <div>
                                                <div className='h-[110px]'>
                                                    <svg className='cursor-pointer absolute left-[-5px] top-0 m-[20px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M13.6803 8.46153C14.0259 8.46153 14.318 8.34056 14.5566 8.09861C14.7952 7.85665 14.9145 7.56284 14.9145 7.21719C14.9145 6.87155 14.7936 6.57942 14.5516 6.34081C14.3096 6.10221 14.0158 5.98292 13.6702 5.98292C13.3245 5.98292 13.0324 6.10389 12.7938 6.34583C12.5552 6.5878 12.4359 6.8816 12.4359 7.22725C12.4359 7.5729 12.5569 7.86503 12.7988 8.10364C13.0408 8.34223 13.3346 8.46153 13.6803 8.46153ZM6.32981 8.46153C6.67545 8.46153 6.96758 8.34056 7.20619 8.09861C7.44481 7.85665 7.56411 7.56284 7.56411 7.21719C7.56411 6.87155 7.44313 6.57942 7.20117 6.34081C6.9592 6.10221 6.6654 5.98292 6.31975 5.98292C5.9741 5.98292 5.68197 6.10389 5.44336 6.34583C5.20477 6.5878 5.08547 6.8816 5.08547 7.22725C5.08547 7.5729 5.20644 7.86503 5.44839 8.10364C5.69035 8.34223 5.98416 8.46153 6.32981 8.46153ZM10 15.4274C11.0598 15.4274 12.036 15.135 12.9284 14.5502C13.8209 13.9655 14.4915 13.1895 14.9402 12.2222H13.8333C13.4259 12.9074 12.8843 13.4491 12.2083 13.8472C11.5324 14.2454 10.7963 14.4444 10 14.4444C9.2037 14.4444 8.46759 14.2454 7.79167 13.8472C7.11574 13.4491 6.57407 12.9074 6.16667 12.2222H5.05983C5.50854 13.1895 6.17912 13.9655 7.07158 14.5502C7.96403 15.135 8.94017 15.4274 10 15.4274ZM10.0037 20C8.62089 20 7.3208 19.7376 6.10344 19.2128C4.88609 18.688 3.82716 17.9757 2.92664 17.0761C2.02614 16.1764 1.31324 15.1185 0.787944 13.9023C0.262648 12.6861 0 11.3865 0 10.0037C0 8.62089 0.262398 7.3208 0.787195 6.10344C1.31201 4.88609 2.02425 3.82716 2.92392 2.92664C3.82358 2.02614 4.88152 1.31324 6.09772 0.787945C7.31394 0.262649 8.61346 0 9.99628 0C11.3791 0 12.6792 0.262398 13.8966 0.787194C15.1139 1.31201 16.1728 2.02425 17.0734 2.92392C17.9739 3.82358 18.6868 4.88152 19.2121 6.09772C19.7374 7.31394 20 8.61346 20 9.99628C20 11.3791 19.7376 12.6792 19.2128 13.8966C18.688 15.1139 17.9757 16.1728 17.0761 17.0734C16.1764 17.9739 15.1185 18.6868 13.9023 19.2121C12.6861 19.7374 11.3865 20 10.0037 20ZM10 18.8889C12.4815 18.8889 14.5833 18.0278 16.3056 16.3056C18.0278 14.5833 18.8889 12.4815 18.8889 10C18.8889 7.51852 18.0278 5.41667 16.3056 3.69444C14.5833 1.97222 12.4815 1.11111 10 1.11111C7.51852 1.11111 5.41667 1.97222 3.69444 3.69444C1.97222 5.41667 1.11111 7.51852 1.11111 10C1.11111 12.4815 1.97222 14.5833 3.69444 16.3056C5.41667 18.0278 7.51852 18.8889 10 18.8889Z" fill="black" />
                                                    </svg>
                                                    <textarea style={{resize:"none"}} maxLength={200} className='hover:border-[#000] border-[1px] border-[#E9E9E9] rounded-[14px] outline-none pl-[50px] pt-[20px] w-full h-[110px]' placeholder='Share your wishes or comments' />
                                                </div>
                                                {/* <ul className='m-[18px] flex items-center space-x-[10px]'>
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M13.6803 8.46153C14.0259 8.46153 14.318 8.34056 14.5566 8.09861C14.7952 7.85665 14.9145 7.56284 14.9145 7.21719C14.9145 6.87155 14.7936 6.57942 14.5516 6.34081C14.3096 6.10221 14.0158 5.98292 13.6702 5.98292C13.3245 5.98292 13.0324 6.10389 12.7938 6.34583C12.5552 6.5878 12.4359 6.8816 12.4359 7.22725C12.4359 7.5729 12.5569 7.86503 12.7988 8.10364C13.0408 8.34223 13.3346 8.46153 13.6803 8.46153ZM6.32981 8.46153C6.67545 8.46153 6.96758 8.34056 7.20619 8.09861C7.44481 7.85665 7.56411 7.56284 7.56411 7.21719C7.56411 6.87155 7.44313 6.57942 7.20117 6.34081C6.9592 6.10221 6.6654 5.98292 6.31975 5.98292C5.9741 5.98292 5.68197 6.10389 5.44336 6.34583C5.20477 6.5878 5.08547 6.8816 5.08547 7.22725C5.08547 7.5729 5.20644 7.86503 5.44839 8.10364C5.69035 8.34223 5.98416 8.46153 6.32981 8.46153ZM10 15.4274C11.0598 15.4274 12.036 15.135 12.9284 14.5502C13.8209 13.9655 14.4915 13.1895 14.9402 12.2222H13.8333C13.4259 12.9074 12.8843 13.4491 12.2083 13.8472C11.5324 14.2454 10.7963 14.4444 10 14.4444C9.2037 14.4444 8.46759 14.2454 7.79167 13.8472C7.11574 13.4491 6.57407 12.9074 6.16667 12.2222H5.05983C5.50854 13.1895 6.17912 13.9655 7.07158 14.5502C7.96403 15.135 8.94017 15.4274 10 15.4274ZM10.0037 20C8.62089 20 7.3208 19.7376 6.10344 19.2128C4.88609 18.688 3.82716 17.9757 2.92664 17.0761C2.02614 16.1764 1.31324 15.1185 0.787944 13.9023C0.262648 12.6861 0 11.3865 0 10.0037C0 8.62089 0.262398 7.3208 0.787195 6.10344C1.31201 4.88609 2.02425 3.82716 2.92392 2.92664C3.82358 2.02614 4.88152 1.31324 6.09772 0.787945C7.31394 0.262649 8.61346 0 9.99628 0C11.3791 0 12.6792 0.262398 13.8966 0.787194C15.1139 1.31201 16.1728 2.02425 17.0734 2.92392C17.9739 3.82358 18.6868 4.88152 19.2121 6.09772C19.7374 7.31394 20 8.61346 20 9.99628C20 11.3791 19.7376 12.6792 19.2128 13.8966C18.688 15.1139 17.9757 16.1728 17.0761 17.0734C16.1764 17.9739 15.1185 18.6868 13.9023 19.2121C12.6861 19.7374 11.3865 20 10.0037 20ZM10 18.8889C12.4815 18.8889 14.5833 18.0278 16.3056 16.3056C18.0278 14.5833 18.8889 12.4815 18.8889 10C18.8889 7.51852 18.0278 5.41667 16.3056 3.69444C14.5833 1.97222 12.4815 1.11111 10 1.11111C7.51852 1.11111 5.41667 1.97222 3.69444 3.69444C1.97222 5.41667 1.11111 7.51852 1.11111 10C1.11111 12.4815 1.97222 14.5833 3.69444 16.3056C5.41667 18.0278 7.51852 18.8889 10 18.8889Z" fill="black" />
                                                    </svg></li>
                                                    <li>
                                                        <p style={TitleText} className='text-[16px]'>Share your wishes or comments</p>
                                                        <textarea style={TitleText} className='w-full h-full' placeholder='Share your wishes or comments'/>
                                                    </li>
                                                </ul> */}
                                            </div>
                                            <div className='absolute grid place-items-end relative top-[-50px] right-[19px]'>
                                                <button style={TitleText} className='text-[14px] w-[81px] h-[40px] rounded-[10px]' id='grad-button'>Send</button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='ml-[5%] 2xl:w-[834px] xl:w-full lg:w-[834px] mt-[38px]'>
                                        <div className='relative left-[-60px] 2xl:left-[-20px] xl:left-[-20px] 2xl:w-full xl:w-full  xl:w-full m-[0px] flex justify-between'>

                                            <h1 className=''><span style={Text5} className='text-[16px] text-[#000] dark:text-[#FFF]'>Success Stories</span></h1>
                                            <div className='flex space-x-[5px]'>
                                                <div onClick={() => router.push("/successstories")} className=' flex items-center space-x-[10px]' >
                                                    <h1 style={Text5} className='relative left-[-10px] cursor-pointer text-[16px] dark:text-[#FFF] text-[#BABABA]'>More Stories</h1>
                                                    <svg className='relative left-[-10px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                                        <path d="M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z" fill="#E1E1E1" />
                                                    </svg>
                                                </div>




                                            </div>
                                        </div>
                                        <div className="w-full relative 2xl:left-[-30px] xl:left-[70px] left-[40px] top-[20px]">
                                            <div className='flex relative 2xl:left-0 xl:left-[-90px] 2xl:space-x-[25px] xl:space-x-[25px] lg:space-x-[25px]'>
                                                <div>
                                                    <Image alt='story-1' className='2xl:w-[260px] 2xl:h-[355px] xl:w-[260px] xl:h-[350px] lg:w-[200px] lg:h-[220px] ' loading='lazy' width={260} height={381} src={"/assests/storySec/stry-1.svg"} />
                                                </div>
                                                <div>
                                                    <Image alt='story-1' className='2xl:w-[260px] 2xl:h-[355px] xl:w-[260px] xl:h-[350px] lg:w-[200px] lg:h-[220px] ' loading='lazy' width={260} height={381} src={"/assests/storySec/stry-2.svg"} />
                                                </div>
                                                <div>
                                                    <Image alt='story-1' className='2xl:w-[260px] 2xl:h-[355px] xl:w-[260px] xl:h-[350px] lg:w-[200px] lg:h-[220px] ' loading='lazy' width={260} height={381} src={"/assests/storySec/stry-3.svg"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )
        }
    }

    return (
        <>
            <Navbar />
            <div className='w-full h-full grid place-items-center'>

                {renderTabContent()}
                <div id='footer-section' className='w-full'>
                    <Footer />
                </div>

            </div>



            <ShareModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default index