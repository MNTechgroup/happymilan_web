import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import Popover from '@mui/material/Popover';
// Import Swiper styles
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserByShortlistID, fetchshortlistdata } from '../../../../store/reducers/GetShortlistList';
import { fetchUserById } from '../../../../store/actions/GetingUserById';
import { RemoveShortlist } from '../../../../store/actions/GetingAlluser';
import { sendRequest } from '../../../../store/actions/UsersAction';
import Link from 'next/link';

function UserProfile() {


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
                <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[80%] lg:h-[259px]">
                    <div className='flex'>
                        <div className="lg:w-[445px] w-full items-center flex  justify-between">
                            <div className="place-items-center">
                                <h1 className=" relative 2xl:left-[10px] xl:left-[8px] text-[14px] text-[black]" style={TitleText}>Share with Friends</h1>
                            </div>
                            <div>
                                <Image alt="close" width={24} height={24} className="cursor-pointer" onClick={onClose} src="/assests/social/close.svg" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px]'>

                        <div className="flex items-center justify-center">
                            <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[456px] gap-y-[20px] gap-x-[40px]">
                                <div className="grid place-items-center">
                                    <Image alt='social-1' width={55} height={55} src="/assests/social/whatsapp.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-2' width={55} height={55} src="/assests/social/tweeter.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-3' width={55} height={55} src="/assests/social/facebook.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-4' width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-5' width={55} height={55} src="/assests/social/google.svg" />
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

    const [sentrequest, setsentRequest] = useState(false);

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

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);
    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();


    const handleClickOpen = () => {
        setOpenURLModal(true);
        setTimeout(() => {
            setOpenURLModal(false);
            handleClose()
        }, 2000);
    };


    const dispatch = useDispatch();

    const { data, shortlistUserdata, status } = useSelector((state) => state.shortlistdata)



    const HandleRemoveShortlist = (res) => {

        const shortlistdata = data.find(data => data.shortlistId === res.id)
        dispatch(RemoveShortlist(shortlistdata.id))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(fetchshortlistdata())
        }, 800);
        console.log(shortlistdata.id)

    }


    useEffect(() => {

        dispatch(fetchshortlistdata())
    }, [])


    const HandleRequestSent = (res) => {
        dispatch(sendRequest(res.id))
    }

    if (status == "loading") {
        return (
            <>
                <div className=''>
                    <div className="">
                        <div style={Box} className={`ml-[50px] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                            <div className='w-[350px]'>
                                <div className='p-[15px] w-full '>

                                    <Skeleton className='relative top-[-70px]' width={197} height={400}>

                                    </Skeleton>


                                </div>
                            </div>
                            <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                <div className='flex justify-between  h-[50px]'>
                                    <div>
                                        <Skeleton variant='text' ><h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{"Rohan Patel"}</h1></Skeleton>
                                    </div>
                                    <div className='pr-[8px]'>
                                        <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>

                                            <Skeleton className='relative left-[10px]'><Image alt='couple-icon' width={17} height={14} src='/assests/Black/Couple2.svg' /></Skeleton>
                                            <Skeleton className='text-[10px]' style={Text4}><span>You & Her</span></Skeleton>
                                            <Skeleton className='cursor-pointer'><Image width={15} height={14} alt='star' src={'/assests/Black/filled-star.svg'} /></Skeleton>
                                            <Skeleton>

                                                <Image width={3} height={14} alt='more' src='/assests/Black/3Dots.svg' className='cursor-pointer' variant="contained" />

                                            </Skeleton>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                    <div id="user-card">
                                        <ul id="user-card-grid">
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{`'32,5'3`}</span></Skeleton>
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{`Hindu,Patel`}</span></Skeleton>
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{"Gujarati, Hindi"}</span></Skeleton>
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{"Never Married"}</span></Skeleton>
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{"Ahmedabad,Gujarat"}</span></Skeleton>
                                            <Skeleton variant='text' sx={{ fontSize: "14px" }} className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /><span>{"Software Engineer"}</span></Skeleton>
                                        </ul>
                                    </div>
                                    <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                        <Skeleton variant='p' style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '><span>{"I'd describe myself as someone who's reliable, trendy,"}</span></Skeleton>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                    <Skeleton variant='p' className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}><span>{"Are you impressed?"}</span></Skeleton>
                                    <Skeleton height={50} className={`w-[134px] h-[40px] rounded-[10px]   text-[#000]`} ><span>{"Send Request"} </span></Skeleton>
                                </div>
                            </div>
                        </div>
                        <div className='flex pb-[20px] space-x-[20px] justify-center pt-[10px]'>

                            <Skeleton className=''>

                                <Image width={51} height={50} alt='like' className='cursor-pointer' src='/assests/animation/After-Like.svg' />
                            </Skeleton>



                            <Skeleton className=''>

                                <Image width={51} height={50} alt='like' className='cursor-pointer' src='/assests/animation/After-Like.svg' />
                            </Skeleton>

                        </div>

                    </div>

                </div>
            </>
        )
    }

    return (
        <>

            {shortlistUserdata && shortlistUserdata.length > 0 ?
                <>
                    <div>

                        <div className='flex flex-col'>

                            {

                                shortlistUserdata.map((res) => {
                                    // const { images } = res
                                    return (
                                        <>

                                            <div key={res?.id} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                                <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                    <div className='w-[350px]'>
                                                        <div className='p-[15px] w-full '>
                                                            <Swiper

                                                                pagination={{ clickable: true }}
                                                                modules={[Pagination]}
                                                                className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                                            >
                                                                <SwiperSlide>
                                                                    <Image width={197} height={258} className='w-[197px] h-[258px]' src={"/assests/dashboard/shortlist/shortlist-1.svg"} />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <Image width={197} height={258} className='w-[197px] h-[258px]' src={"/assests/dashboard/shortlist/shortlist-2.svg"} />
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <Image width={197} height={258} className='w-[197px] h-[258px]' src={"/assests/dashboard/shortlist/shortlist-3.svg"} />
                                                                </SwiperSlide>
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                        <div className='flex justify-between  h-[50px]'>
                                                            <div>
                                                                <Link href={`/dashboard/${res.id}`} > <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res?.name}</h1></Link>
                                                                <h1 style={statusText} className={`text-[#7A7A7A]`}>{"Offline"}</h1>
                                                            </div>
                                                            <div className='pr-[8px]'>
                                                                <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                                                                    <li className='relative left-[10px]'><Image alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' /></li>
                                                                    <li className='text-[10px]' style={Text4}>You & Her</li>
                                                                    <li className='cursor-pointer' onClick={() => HandleRemoveShortlist(res)}><Image width={15} height={14} src='/assests/Black/filled-star.svg' /></li>
                                                                    <li>
                                                                        <Image alt='more' width={3} height={14} src='/assests/Black/3Dots.svg' className='cursor-pointer' aria-describedby={id} variant="contained" onClick={handleClick} />
                                                                        <Popover
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
                                                                                    <li style={Text3} onClick={openModal} className='cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[15px]'> <Image alt='share' width={13} height={14} src='/assests/dashboard/icon/share-icon.svg' /> <p>Share</p></li>
                                                                                    <li style={Text3} onClick={() => setblockprofile(!blockprofile)} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> {blockprofile ? <> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path id="Vector" d="M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z"
                                                                                            fill="red" />
                                                                                    </svg>
                                                                                        <p className='text-[red]'>Unblock</p> </> : <> <Image width={14} height={14} src='/assests/dashboard/icon/block-icon.svg' /><p>Block</p> </>} </li>
                                                                                    <li style={Text3} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image alt='report-icon' width={14} height={14} src='/assests/dashboard/icon/report-icon.svg' /><p> Report</p></li>
                                                                                    <li onClick={handleClickOpen} style={Text3} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image alt='copy-icon' width={12} height={14} src='/assests/dashboard/icon/copy-icon.svg' /> <p>Copy URL</p></li>
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
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`'32,5'3`}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.religion},${res?.cast} `}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"Gujarati, Hindi"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"Never Married"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"Ahmedabad,Gujarat"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"Software Engineer"}</li>
                                                                </ul>
                                                            </div>
                                                            <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                                <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res?.writeBoutYourSelf}<span className='text-[#0F52BA]'> more </span></p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-0 mr-[20px] space-x-[10px]'>
                                                            <h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>{sentrequest ? "Wait for his response" : "Are you impressed?"}</h1>
                                                            <button id={!sentrequest ? "grad-btn" : "req-sent"} className={`w-[134px] h-[40px] rounded-[10px] ${sentrequest ? "bg-[#EDEDED] text-[black]" : "bg-[#0F52BA] text-[white]"} bg-[#0F52BA] text-[#FFF]`} onClick={() => HandleRequestSent(res)}>{sentrequest ? "Sent" : "Send Request"} </button>
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

                    <CustomModal isOpen={isModalOpen} onClose={closeModal} />

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

                    <React.Fragment>
                        <Dialog
                            open={openShortlistModal}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            PaperProps={{
                                style: {
                                    backgroundColor: 'transparent', // or 'none' if you prefer
                                    boxShadow: 'none',
                                }
                            }}
                            BackdropProps={{ style: { opacity: 0, backgroundColor: "none", boxShadow: "none" } }}

                        >
                            <div style={{ padding: "17px 19px 17px 20px" }} className='bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center'>
                                <div className='text-[14px]' style={Urlmodaltext}>
                                    <span className="text-[#fff]"> {shortlistText}</span>
                                </div>
                            </div>
                        </Dialog>
                    </React.Fragment>
                </>
                :
                <>

                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default UserProfile