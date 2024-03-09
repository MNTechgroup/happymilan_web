import React, { useEffect, useState } from 'react'

import Popover from '@mui/material/Popover';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Cancelfriendrequest, Sentblockrequest, getAcceptedRequestData } from '../../../../store/actions/UsersAction';
import index from '../../profile';
import UserprofileSkeleton from '../../../components/Loader/UserprofileSkeleton';
import Link from 'next/link';
import { getCookie } from 'cookies-next';

function AcceptedRequest() {

    const [anchorEl, setAnchorEl] = React.useState(null);


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
                                <Image alt='img' width={24} height={24} className="cursor-pointer" onClick={onClose} src="/assests/social/close.svg" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px]'>

                        <div className="flex items-center justify-center">
                            <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[456px] gap-y-[20px] gap-x-[40px]">
                                <div className="grid place-items-center">
                                    <Image alt='social-icon' width={55} height={55} src="/assests/social/whatsapp.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-icon' width={55} height={55} src="/assests/social/tweeter.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-icon' width={55} height={55} src="/assests/social/facebook.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-icon' width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image alt='social-icon' width={55} height={55} src="/assests/social/google.svg" />
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

    const dispatch = useDispatch();

    const data = useSelector((state) => state.usersact)

    const [isCurrentUser, setisCurrentUSer] = useState("")



    useEffect(() => {
        dispatch(getAcceptedRequestData());

        setisCurrentUSer(getCookie("userid"))
    }, [])

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }


    const [CurrentUserID, SetCurrentUserID] = useState("");
    const [OtherUserId, SetOtherUserId] = useState("")
    const [UserIdforBlock, SetUserIdforBlock] = useState("")


    const handleClick = (event, res) => {
        console.log("🚀 ~ handleClick ~ res:", res)
        setAnchorEl(event.currentTarget);
        
        if (res.user.id === isCurrentUser) {
            // If the friend ID matches, set the OtherUserId to the user's ID
            SetOtherUserId(res.friend.id);
            console.log("🚀 ~ handleClick ~ res.user.id:", res.user.id)
            
            
        } else {
            // If the friend ID doesn't match, set the OtherUserId to the friend's ID
            
            SetOtherUserId(res.friend.id);
            console.log("🚀 ~ handleClick ~ res.friend.id:", res.friend.id)
        }

        SetUserIdforBlock(res.friend.id)
            

        SetCurrentUserID(res.id)
    };

    const HandleBlockUser = (res) => {
        console.log("🚀 ~ HandleBlockUser ~ res:", res)


        const isConfirmed = window.confirm('Are you sure you want to block this user?');

        // Check if user confirmed
        if (isConfirmed) {
            // Perform blocking action
            // Add your logic here to block the user
            console.log('User blocked successfully');
            setAnchorEl(null);
            dispatch(Sentblockrequest(CurrentUserID,UserIdforBlock))

            setTimeout(() => {
                dispatch(getAcceptedRequestData())
            }, 800);


        } else {
            // User canceled the action
            console.log('Blocking action canceled');
        }
    }

    const HandleCancelRequest = () => {

        const isConfirmed = window.confirm('Are you sure you want to unfriend this user?');

        // Check if user confirmed
        if (isConfirmed) {
            // Perform blocking action
            // Add your logic here to block the user
            console.log('User unfriend successfully');
            setAnchorEl(null);
            dispatch(Cancelfriendrequest(CurrentUserID , OtherUserId))

            setTimeout(() => {
                dispatch(getAcceptedRequestData())
            }, 800);


        } else {
            // User canceled the action
            console.log('unfriend action canceled');
        }


    }

   
    


    if (data?.loading == true) {
        return (
            <>
                <UserprofileSkeleton />
            </>
        )
    }



    return (
        <>
            {data.acceptedrequestdata?.acceptedUsers && data.acceptedrequestdata.acceptedUsers.length > 0 ? <>
                <div>

                    <div className='flex flex-col'>

                        {

                            // data.acceptedrequestdata?.acceptedUsers?.map((res) => {

                            data?.acceptedrequestdata?.data.data.map((res) => {


                                return (
                                    <>
                                        <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                            <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                <div className='w-[350px]'>
                                                    <div className='p-[15px] w-full '>
                                                        {/* {res.user.userProfilePic && res.user.userProfilePic.length > 0 ? (
                                                            <Swiper

                                                                pagination={{ clickable: true }}
                                                                modules={[Pagination]}
                                                                className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                            >
                                                                {res.user.userProfilePic.slice(0, 3).map((Imageres, theindex) => (

                                                                    <SwiperSlide key={theindex}>
                                                                        <Image placeholder="blur" blurDataURL="data:..." alt={`img${theindex + 1}`} width={197} height={258} style={{ width: "197px", height: "258px", borderRadius: "10px" }} className='w-[197px] h-[258px]' src={Imageres.url} loading="lazy" />
                                                                    </SwiperSlide>

                                                                ))}

                                                            </Swiper>


                                                        ) : (
                                                            <div>
                                                                <div style={{ backgroundColor: "#F8FBFF", width: "197px", height: "258px", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                                    <div className='grid place-items-center space-y-[5px]'>
                                                                        <Image alt='not-Found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                                                        <h1 className='inline' style={ImageNotFoundText}>No Image</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )} */}

                                                        <Swiper

                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                        >
                                                           

                                                                <SwiperSlide>
                                                                    <Image placeholder="blur" blurDataURL="data:..." alt={`img`} width={197} height={258} style={{ width: "197px", height: "258px", borderRadius: "10px", objectFit:"cover" }} className='w-[197px] h-[258px]' src={res.friend.id === isCurrentUser ? res.user.profilePic : res.friend.profilePic} loading="lazy" />
                                                                </SwiperSlide>

                                                           

                                                        </Swiper>

                                                    </div>
                                                </div>
                                                <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                    <div className='flex justify-between  h-[50px]'>
                                                        <div>
                                                            <Link href={`/dashboard/${res.id}`} ><h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.friend.id === isCurrentUser ? res.user.name : res.friend.name}</h1></Link>
                                                            <h1 style={statusText} className={`text-[#7A7A7A]`}>Online now</h1>
                                                        </div>
                                                        <div className='pr-[8px]'>
                                                            <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                                                                <li className='relative left-[10px]'><Image alt='img' width={17} height={14} src='/assests/Black/Couple2.svg' /></li>
                                                                <li className='text-[10px]' style={Text4}>You & Her</li>
                                                                <li><Image alt="star" width={15} height={14} src='/assests/Black/Stars-2.svg' /></li>
                                                                <li>


                                                                    <Image width={3} height={14} alt='more' src='/assests/Black/3Dots.svg' className='cursor-pointer' aria-describedby={id} variant="contained" onClick={(event) => handleClick(event, res)} />
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
                                                                        <div className='bg-[#FFF] rounded-[10px] w-[128px] h-[180px]'>

                                                                            <ul className='flex flex-col justify-center space-y-[12px] ml-[12px] '>
                                                                                <li style={Text3} onClick={openModal} className='cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[15px]'> <Image alt="share" width={13} height={14} src='/assests/dashboard/icon/share-icon.svg' /> <p>Share</p></li>
                                                                                <li style={Text3} onClick={() => HandleBlockUser(res)} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> {blockprofile ? <> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path id="Vector" d="M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z"
                                                                                        fill="red" />
                                                                                </svg>
                                                                                    <p className='text-[red]'>Unblock</p> </> : <> <Image alt="block-icon" width={14} height={14} src='/assests/dashboard/icon/block-icon.svg' /><p>Block</p> </>} </li>
                                                                                <li style={Text3} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image alt="report-icon" width={14} height={14} src='/assests/dashboard/icon/report-icon.svg' /><p> Report</p></li>
                                                                                <li style={Text3} onClick={handleClickOpen} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image alt="copy" width={12} height={14} src='/assests/dashboard/icon/copy-icon.svg' /> <p>Copy URL</p></li>
                                                                                <li style={Text3} onClick={() => HandleCancelRequest()} className='cursor-pointer flex  items-center space-x-[12px] text-[14px]'> <Image alt="copy" width={14} height={14} src='/assests/dashboard/icon/block-icon.svg' /> <p>Unfriend</p></li>
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
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res.religion ? res.religion : 'NA'}, ${res.cast ? res.cast : 'NA'}`}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res.motherTongue ? res.motherTongue : "NA , NA"}  `}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.maritalStatus ? res.maritalStatus : "NA , NA"}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res.address ? res.address.currentCity : "NA"} , ${res.address ? res.address.currentCountry : "NA"}`}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.userProfessional ? res.userProfessional.currentDesignation : "NA , NA"}</li>
                                                            </ul>
                                                        </div>
                                                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                            <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res.writeBoutYourSelf ? res.writeBoutYourSelf : "NA"}<span className='text-[#0F52BA]'> more </span></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                        <ul className='flex space-x-[10px]'>
                                                            <li><h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>Accepted</h1></li>
                                                            <li><Image alt="accepted" width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </>
                                )
                            })

                            //     return (
                            //         <>






                            //         </>
                            //     )
                            // })

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

export default AcceptedRequest