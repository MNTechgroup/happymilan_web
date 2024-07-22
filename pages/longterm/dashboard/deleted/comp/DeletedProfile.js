import React, { useState } from 'react'

import Popover from '@mui/material/Popover';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import ShareModal from '../../../../_components/Model/Models/ShareModal';
import { Dialog, DialogContent } from '@mui/material';


function DeletedProfile() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const [blockprofile, setblockprofile] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        handleClose();
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const userData = [
        {
            id: 1,
            userName: "Kabir Singh",
            profilePic: "/assests/dashboard/delete/deleted-1.svg",
            Activestatus: true,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "/assests/dashboard/delete/deleted-1.svg",
                image2: "/assests/dashboard/delete/deleted-2.svg",
                image3: "/assests/dashboard/delete/deleted-3.svg",
                image4: ""
            }
        },
        {
            id: 2,
            userName: "Rohan Desai",
            profilePic: "/assests/dashboard/delete/deleted-2.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "/assests/dashboard/delete/deleted-2.svg",
                image2: "/assests/dashboard/delete/deleted-3.svg",
                image3: "/assests/dashboard/delete/deleted-1.svg",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Vivaan Reddy",
            profilePic: "/assests/dashboard/delete/deleted-3.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "/assests/dashboard/delete/deleted-3.svg",
                image2: "/assests/dashboard/delete/deleted-2.svg",
                image3: "/assests/dashboard/delete/deleted-1.svg",
                image4: ""
            }
        }
    ]

    const BoldText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const statusText = {

        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }

    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenURLModal(true);


        setTimeout(() => {
            setOpenURLModal(false);
            handleClose()
        }, 2000);
    };

    return (
        <>
            <div>

                <div className='flex flex-col'>

                    {

                        userData.map((res) => {
                            const { images } = res
                            return (
                                <>


                                    <div key={res.id} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                        <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                            <div className='w-[350px]'>
                                                <div className='p-[15px] w-full '>
                                                    <Swiper

                                                        pagination={{ clickable: true }}
                                                        modules={[Pagination]}
                                                        className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                                    >
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image1} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image2} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image3} />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                            <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                <div className='flex justify-between  h-[50px]'>
                                                    <div>
                                                        <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.userName}</h1>
                                                        <h1 style={statusText} className={res.Activestatus ? `text-[#17C270]` : `text-[#7A7A7A]`}>{res.Activestatus ? "Online now" : "Offline"}</h1>
                                                    </div>
                                                    <div className='pr-[8px]'>
                                                        <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>
                                                            <li className="cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]">
                                                                <div>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="couple-icon"
                                                                        width={17}
                                                                        height={14}
                                                                        src="/assests/Black/Couple2.svg"

                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <span className="relative top-[-2px] text-[10px] text-[#000] dark:text-[#FFF]"
                                                                        style={Text4}>
                                                                        Match Score
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
                                                                    <Image
                                                                        loading="lazy"
                                                                        width={15}
                                                                        height={14}
                                                                        alt="star"
                                                                        src={"/assests/Black/Stars-2.svg"}
                                                                    />
                                                                </div>
                                                            </li>
                                                            <li>

                                                                <div onClick={(event) => handleClick(event, res)} className="grid place-items-center cursor-pointer hover:bg-[#F2F7FF] relative top-[-8px] rounded-[10px] h-[30px] w-[16px]">

                                                                    <Image loading='lazy' width={3} height={14} alt='more' src='/assests/Black/3Dots.svg' className='cursor-pointer' aria-describedby={id} variant="contained" onClick={(event) => handleClick(event, res)} />
                                                                </div><Popover
                                                                    id={id}
                                                                    open={open}
                                                                    anchorEl={anchorEl}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'left',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    PaperProps={{
                                                                        style: { boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: "10px", marginLeft: "-10px" } // Add this to remove the shadow
                                                                    }}
                                                                >
                                                                    <div className='bg-[#FFF] rounded-[10px] w-[128px] h-[150px]'>

                                                                        <ul className='flex flex-col justify-center space-y-[12px] ml-[12px] '>
                                                                            <li style={Text3} onClick={openModal} className='cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[15px]'> <Image width={13} height={14} src='/assests/dashboard/icon/share-icon.svg' /> <p>Share</p></li>
                                                                            <li style={Text3} onClick={() => setblockprofile(!blockprofile)} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> {blockprofile ? <> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path id="Vector" d="M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z"
                                                                                    fill="red" />
                                                                            </svg>
                                                                                <p className='text-[red]'>Unblock</p> </> : <> <Image width={14} height={14} src='/assests/dashboard/icon/block-icon.svg' /><p>Block</p> </>} </li>
                                                                            <li style={Text3} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image width={14} height={14} src='/assests/dashboard/icon/report-icon.svg' /><p> Report</p></li>
                                                                            <li onClick={handleClickOpen} style={Text3} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image width={12} height={14} src='/assests/dashboard/icon/copy-icon.svg' /> <p>Copy URL</p></li>
                                                                        </ul>

                                                                    </div>
                                                                </Popover>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                    <div id="user-card">
                                                        <ul id="user-card-grid">
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.height}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.cast}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.language}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.marriagestatus}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.location}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.profession}</li>
                                                        </ul>
                                                    </div>
                                                    <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                        <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res.description}<span className='text-[#0F52BA]'> more </span></p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                    <ul className='flex space-x-[10px]'>
                                                        <li><h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>This is no more longer</h1></li>
                                                        <li>
                                                            <Image width={20} height={23} src='/assests/Black/trash-2.svg' />

                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </>
                            )
                        })

                    }


                </div>

            </div>

            <ShareModal isOpen={isModalOpen} onClose={closeModal} />

            <React.Fragment>
                <Dialog
                    open={openURLModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent className='w-[249px] h-[81px] text-center grid place-items-center'>
                        <div className='text-[14px]' style={Urlmodaltext}>
                            URL has been copied
                        </div>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default DeletedProfile