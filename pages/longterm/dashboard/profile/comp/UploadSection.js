'use client';

import { Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const PhotoGrid = dynamic(() => import('./PhotoGrid'));
import Image from 'next/image';
import { useSelector } from 'react-redux';
import VideoGrid from './VideoGrid';
const UploadImage = dynamic(() => import('../../commonCompo/HandeImageUpload/UploadImage'));

function UploadSection() {
    const [ActiveSection, SetActiveSection] = useState(1);
    const [open, setOpen] = React.useState(false);

    const [currentSelectedImage, SetcurrentSelectedImage] = useState(0)

    const [showImage, SetshowImage] = useState("")

    const handleClickOpen = (res, index) => {
        
        SetcurrentSelectedImage(index)
        
        SetshowImage(res.url)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const Text1 = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontFize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const [toggleTab, setToggleTab] = useState(0)


    const selector = useSelector((state) => state.myprofile)

    //For Upload Section

    const [openUpload, setOpenUpload] = React.useState(false);



    const handleClickOpenUpload = (res) => {
        // console.log("<== Image Response ==>", res)
        if (selector.data.userProfilePic.length > 5) {
            alert("You have reached the maximum limit of 5 images. If you want to upload a new image, please delete one of your current images.");
        } else {
            // alert("Image Not More");
            setOpenUpload(true);
        }

    };

    const handleCloseUpload = () => {
        setOpenUpload(false);
    };


    const HandleImageClick = (res, index) => {
        SetcurrentSelectedImage(index)
        SetshowImage(res.url)

    }

    const [ImageHover, SetImageHover] = useState({
        ImageIconHover: false,
        VideoIconHover: false,
        UploadImageHover: false
    })


    return (
        <>

            <div>
                <div className='w-[300px] 2xl:w-[300px] xl:w-[250px]'>
                    <div>


                        {ActiveSection === 1 ? <>
                            <div>

                                <PhotoGrid handleClickOpen={handleClickOpen} />
                            </div>
                        </>
                            :
                            <>
                                <VideoGrid />

                            </>}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            className='flex justify-center'

                        >

                            <DialogContent className='w-[600px] h-[650px] 2xl:w-[600px] 2xl:h-[650px] xl:w-[600px] xl:h-[650px] bg-[black] '>
                                <div className='mt-[20px]'>
                                    <div className='ml-[30px] flex justify-between w-[380px] mb-[20px]'>
                                        <div>
                                            <h1 className='relative 2xl:left-0 xl:left-[20px]' style={Text1}>{toggleTab > 0 ? "Video Gallery" : `Photo Gallery (${selector?.data?.userProfilePic ? selector?.data?.userProfilePic.length : "0"})`} </h1>
                                        </div>
                                        <div className='flex space-x-[36px]'>
                                            <div>
                                                <svg onClick={() => setToggleTab(0)} className='cursor-pointer w-[28.925px] h-[24px] 2xl:w-[28.925px] 2xl:h-[24px] xl:w-[20px] xl:h-[20px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M2.1039 24C1.51234 24 1.01381 23.7972 0.608299 23.3917C0.202766 22.9862 0 22.4877 0 21.8961V2.1039C0 1.51234 0.202766 1.01379 0.608299 0.60826C1.01381 0.202753 1.51234 0 2.1039 0H21.8961C22.4877 0 22.9862 0.202753 23.3917 0.60826C23.7972 1.01379 24 1.51234 24 2.1039V21.8961C24 22.4877 23.7972 22.9862 23.3917 23.3917C22.9862 23.7972 22.4877 24 21.8961 24H2.1039ZM2.1039 23.1429H21.8961C22.2078 23.1429 22.4935 23.013 22.7532 22.7532C23.013 22.4935 23.1429 22.2078 23.1429 21.8961V2.1039C23.1429 1.79221 23.013 1.50649 22.7532 1.24675C22.4935 0.987013 22.2078 0.857143 21.8961 0.857143H2.1039C1.79221 0.857143 1.50649 0.987013 1.24675 1.24675C0.987013 1.50649 0.857143 1.79221 0.857143 2.1039V21.8961C0.857143 22.2078 0.987013 22.4935 1.24675 22.7532C1.50649 23.013 1.79221 23.1429 2.1039 23.1429ZM5.64935 18.8182H18.7013L14.7273 13.5584L10.7143 18.5065L8.18182 15.5455L5.64935 18.8182ZM6.55231 7.75325C6.8854 7.75325 7.16883 7.63406 7.4026 7.3957C7.63636 7.15736 7.75325 6.87165 7.75325 6.53856C7.75325 6.20549 7.63408 5.92208 7.39574 5.68831C7.15738 5.45455 6.87166 5.33766 6.5386 5.33766C6.20551 5.33766 5.92208 5.45684 5.68831 5.69521C5.45455 5.93355 5.33766 6.21926 5.33766 6.55235C5.33766 6.88542 5.45683 7.16883 5.69517 7.4026C5.93353 7.63636 6.21925 7.75325 6.55231 7.75325Z"
                                                        fill={toggleTab === 0 ? "#0F52BA" : "#FFF"} />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg onClick={() => setToggleTab(1)} className='cursor-pointer w-[28.925px] h-[24px] 2xl:w-[28.925px] 2xl:h-[24px] xl:w-[23px] xl:h-[23px]' width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M2.41791 24C1.73806 24 1.16512 23.767 0.69909 23.3009C0.23303 22.8349 0 22.2619 0 21.5821V2.41791C0 1.73806 0.23303 1.1651 0.69909 0.699045C1.16512 0.233015 1.73806 0 2.41791 0H21.5821C22.2619 0 22.8349 0.233015 23.301 0.699045C23.767 1.1651 24 1.73806 24 2.41791V11.2836L28.9254 6.35821V17.597L24 12.6716V21.5821C24 22.2619 23.767 22.8349 23.301 23.3009C22.8349 23.767 22.2619 24 21.5821 24H2.41791ZM2.41791 23.0149H21.5821C22 23.0149 22.3433 22.8806 22.6119 22.6119C22.8806 22.3433 23.0149 22 23.0149 21.5821V2.41791C23.0149 2 22.8806 1.65672 22.6119 1.38806C22.3433 1.1194 22 0.985075 21.5821 0.985075H2.41791C2 0.985075 1.65672 1.1194 1.38806 1.38806C1.1194 1.65672 0.985075 2 0.985075 2.41791V21.5821C0.985075 22 1.1194 22.3433 1.38806 22.6119C1.65672 22.8806 2 23.0149 2.41791 23.0149Z"
                                                        fill={toggleTab === 1 ? "#0F52BA" : "#FFF"} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {toggleTab > 0 ?
                                        <>

                                            <div className='flex justify-center  space-x-[70px] 2xl:space-x-[70px] xl:space-x-[100px]'>

                                                <div className='mt-[12px]'>
                                                    <ul className='flex  flex-col space-y-[20px] 2xl:space-y-[20px] xl:space-y-[20px]'>

                                                        {
                                                            selector && selector.data && selector.data.userProfileVideo ? (
                                                                selector.data.userProfileVideo.slice(0, 1).map((res, index) => (
                                                                    <li>
                                                                        {/* <Image width={74} height={74} style={{ objectFit: "cover" }} className={`cursor-pointer w-[74px] h-[74px] 2xl:w-[74px] 2xl:h-[74px] xl:w-[60px] xl:h-[60px] rounded-[10px] ${currentSelectedImage === index ? "" : "opacity-20"}`} src={res.url} /> */}
                                                                        <video className={`cursor-pointer w-[74px] h-[74px] 2xl:w-[74px] 2xl:h-[74px] xl:w-[60px] xl:h-[60px] rounded-[10px] ${currentSelectedImage === index ? "" : "opacity-20"}`} style={{ objectFit: "cover" }}>
                                                                            <source src={res.url} type="video/mp4" />
                                                                            <track
                                                                                src="/path/to/captions.vtt"
                                                                                kind="subtitles"
                                                                                srcLang="en"
                                                                                label="English"
                                                                            />
                                                                            Your browser does not support the video tag.
                                                                        </video>
                                                                    </li>

                                                                ))
                                                            ) : (
                                                                <div className='h-[381px] w-[300px] grid place-items-center'>
                                                                    <div className='grid place-items-center'>No Image</div>
                                                                </div>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <div>
                                                    {/* <div>
                                                        <Image alt='zoomIcon' width={20} height={20} src='/assests/dashboard/icon/zoom-icon.svg' className='absolute right-[80px] 2xl:right-[80px] xl:right-[90px] mt-[35px] 2xl:mt-[25px] xl:mt-[30px]' />
                                                    </div> */}

                                                    {/* <Image alt='image' style={{ objectFit: "cover", borderRadius: "10px" }} width={350} height={470} className='w-[350px] h-[480px] 2xl:w-[350px] 2xl:h-[470px] xl:w-[300px] xl:h-[420px]' src={} /> */}
                                                    <div>
                                                        <video className='w-[350px] h-[480px] 2xl:w-[350px] 2xl:h-[470px] xl:w-[300px] xl:h-[420px]' style={{ objectFit: "cover", borderRadius: "10px" }} autoPlay>
                                                            <source src={selector.data.userProfileVideo[0].url} type="video/mp4" />
                                                            <track
                                                                src="/path/to/captions.vtt"
                                                                kind="subtitles"
                                                                srcLang="en"
                                                                label="English"
                                                            />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                        : <>
                                            <div className='flex justify-center  space-x-[70px] 2xl:space-x-[70px] xl:space-x-[100px]'>

                                                <div className='mt-[12px]'>
                                                    <ul className='flex  flex-col space-y-[20px] 2xl:space-y-[20px] xl:space-y-[20px]'>

                                                        {
                                                            selector && selector.data && selector.data.userProfilePic ? (
                                                                selector.data.userProfilePic.slice(0, 5).map((res, index) => (
                                                                    <li onClick={() => HandleImageClick(res, index)}><Image width={74} height={74} style={{ objectFit: "cover" }} className={`cursor-pointer w-[74px] h-[74px] 2xl:w-[74px] 2xl:h-[74px] xl:w-[60px] xl:h-[60px] rounded-[10px] ${currentSelectedImage === index ? "" : "opacity-20"}`} src={res.url} /></li>

                                                                ))
                                                            ) : (
                                                                <div className='h-[381px] w-[300px] grid place-items-center'>
                                                                    <div className='grid place-items-center'>No Image</div>
                                                                </div>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <div>
                                                    {/* <div>
                                                        <Image alt='zoomIcon' width={20} height={20} src='/assests/dashboard/icon/zoom-icon.svg' className='absolute right-[80px] 2xl:right-[80px] xl:right-[90px] mt-[35px] 2xl:mt-[25px] xl:mt-[30px]' />
                                                    </div> */}

                                                    <Image alt='image' style={{ objectFit: "cover", borderRadius: "10px" }} width={350} height={470} className='w-[350px] h-[480px] 2xl:w-[350px] 2xl:h-[470px] xl:w-[300px] xl:h-[420px]' src={showImage} />

                                                </div>
                                            </div>
                                        </>}
                                </div>
                            </DialogContent>

                        </Dialog>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center space-x-[20px] pt-[15px]'>
                            {ActiveSection === 1 ?
                                <Image className='cursor-pointer' onClick={() => SetActiveSection(1)} width={24} height={24} alt='image' src={'/assests/profile/grad-image-icon.svg'} />

                                :
                                <Image className='cursor-pointer' onMouseEnter={() => SetImageHover({ ImageIconHover: true })} onMouseLeave={() => SetImageHover({ ImageIconHover: false })} onClick={() => SetActiveSection(1)} width={24} height={24} alt='image' src={ImageHover.ImageIconHover ? '/assests/profile/grad-image-icon.svg' : '/assests/profile/image-icon.svg'} />
                            }


                            {
                                ActiveSection === 2 ?

                                    <Image className='cursor-pointer' onClick={() => SetActiveSection(2)} width={29} height={24} alt='image' src={'/assests/profile/grad-video-icon.svg'} />

                                    :
                                    <Image className='cursor-pointer' onMouseEnter={() => SetImageHover({ VideoIconHover: true })} onMouseLeave={() => SetImageHover({ VideoIconHover: false })} onClick={() => SetActiveSection(2)} width={29} height={24} alt='image' src={ImageHover.VideoIconHover ? '/assests/profile/grad-video-icon.svg' : '/assests/profile/video-icon.svg'} />


                            }

                        </div>
                        <div className='flex items-center pt-[10px]'>
                            {/* <h1>Upload</h1> */}
                            <Image onMouseEnter={() => SetImageHover({UploadImageHover: true})} onMouseLeave={() => SetImageHover({ UploadImageHover: false })} alt='drag-drop' width={34.818} height={24} onClick={handleClickOpenUpload} className='cursor-pointer w-[34.818px] h-[24px]' src={ImageHover.UploadImageHover ? '/assests/profile/after-imageupload-icon.svg' : '/assests/profile/before-imageupload-icon.svg'} />
                            <UploadImage openUpload={openUpload}
                                handleCloseUpload={handleCloseUpload} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default UploadSection