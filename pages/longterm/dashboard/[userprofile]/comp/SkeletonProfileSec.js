import React from 'react'
import Image from 'next/image';
import { Skeleton } from '@mui/material';


function SkeletonProfileSec() {

    // /assests/Black/


    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }




    const GeneralTab = () => {

        return (
            <>
                <div className={`w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>

                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <Skeleton><h1 style={Text2} className='text-[16px]'>{"General Information"}</h1></Skeleton>
                            <li></li>
                        </ul>
                    </div>


                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Date of Birth</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>02 . 03. 1986</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Birth of Time</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>10:01:20 AM</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Religion</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Hindu</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Caste/Sub Caste</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Patel, Kadva Patidar</h1>
                            </Skeleton>
                        </div>
                    </div>

                    <div className='hidden md:flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div className="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current City</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>New York</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Country of Living</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>United States of America</h1>
                            </Skeleton>
                        </div>
                    </div>

                </div>
            </>
        )
    }







    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]">
                <div className={`flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full bg-[#FFF]`}>
                    <div id='grad-btn'
                        className="ml-[-5px] mt-[-3px] bg-custom-gradient w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]"
                    // className='w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]'
                    >

                        {/* <div>
                            <div className='absolute right-[20px] pt-[10px]'>
                                <ul className='flex space-x-[20px] items-center'>
                                    <li><Image loading='lazy' alt="share" width={15} height={16} src='/assests/Black/Share-icon-2.svg' /></li>
                                    <li><Image loading='lazy' alt="download" width={33} height={32} src='/assests/Black/Download-2.svg' /></li>
                                </ul>
                            </div>
                        </div> */}


                        {/* <div className='flex justify-between'>
                            <div>
                                <Image loading='lazy' alt="arrow" width={32} height={32} className='cursor-pointer m-[10px] w-[30px] h-[30px] md:w-[32px] md:h-[32px]' src='/assests/dashboard/story/arrow-left.svg' />
                            </div>
                        </div> */}

                        <div className='grid place-items-center mt-[50px]'>
                            <Skeleton variant="circular" width={184} height={184} className='mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]' />
                            <Skeleton className='pb-[10px] pt-[15px]'>
                                <h1 style={Username} className='text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]'>{"Rohan Patel"}</h1>
                            </Skeleton>
                        </div>
                        <div className='space-y-[5px]'><div className='pt-[10px]'>
                            <ul className='flex justify-center items-center space-x-[8px] md:space-x-[40px]'>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>

                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>Male, 36</h1>
                                    </div>
                                </Skeleton>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image loading='lazy' alt='proffession' width={14} height={12} src='/assests/dashboard/icon/bag-icon.svg' />
                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>Software Engineer</h1>
                                    </div>
                                </Skeleton>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image loading='lazy' alt='loaction-icon' width={10} height={12} src='/assests/dashboard/icon/location-icon.svg' />
                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>NY, United States</h1>
                                    </div>
                                </Skeleton>
                            </ul>



                        </div>
                            <Skeleton className='text-center pt-[10px]'>
                                <p className='text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile on the face. I am a big Nature & Animal lover. I have lived in different parts of India and appreciate all cultures & customs. </p>
                            </Skeleton>



                            <div className='hidden lg:block pt-[10px] pb-[30px]'>
                                <GeneralTab />
                                {/* {RenderTab()} */}
                            </div>
                            <div className='block lg:hidden pt-[10px] pb-[30px]'>
                                {/* <GeneralTab/> */}
                                <div className='flex flex-col space-y-[30px] pb-[50px]'>
                                    <div>
                                        <GeneralTab />

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

export default SkeletonProfileSec