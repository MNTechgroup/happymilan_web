import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { sendRequest } from '../../../../../store/actions/UsersAction';
import { addToShortlist } from '../../../../../store/actions/GetingAlluser';
import RegisterAlertModal from '../../../../_components/Model/Models/RegisterAlertModal';
import ReportModal from '../../../../_components/Model/Models/ReportModal';
import ProfileMenu from '../../../../_components/Model/popover/MenuPop';
import BlockUserModal from "../../../../_components/Model/Models/BlockModal";
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal';
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
const ShareModal = dynamic(() => import('../../../../_components/Model/Models/ShareModal'), { ssr: false });
const ShowMore = dynamic(() => import('../../../../_components/common/profile/UserBio'), { ssr: false });
const SendRequestBtn = dynamic(() => import('../../../../_components/common/Buttons/SendRequestBtn'), { ssr: false });


function RecentViewUser() {

    const { darkMode, toggleDarkMode } = useDarkMode();


    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);

    const CloseRegisterModal = () => {
        setisRegisterModalOpen(false);
    };

    const openBlockModal = () => {
        setisBlockModalOpen(true);
    }
    const closeBlockModal = () => { setisBlockModalOpen(false) }

    const OpenReportModal = () => {
        setisReportModalOpen(true);

    };

    const CloseReportModal = () => {
        setisReportModalOpen(false);
    };


    const dispatch = useDispatch();


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [sentrequest, setsentRequest] = useState(false);

    const ProfileName = {
        color: darkMode ? "#FFF" : "#000",
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
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }


    const Box = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }


    const Urlmodaltext = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }


    const { data, loading } = useSelector((state) => state.usersact.recentusersdata)


    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();


    const HandleRequestModal = (res) => {
        // if (data?.data?.userProfileCompleted) {
        dispatch(sendRequest(res.id));

        setsentRequest((prevState) => ({
            ...prevState,
            [res.id]: !prevState[res.id], // Update the sentRequests state for the specific user ID
        }));

        if (!sentrequest[res.id]) {
            setshortlistText("Request Sent..");
            setopenShortlistModal(true);
        } else {
            setshortlistText("Request Removed..");
            setopenShortlistModal(true);
        }

        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };


    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);


    };


    return (
        <>
            {data?.length > 0 ? <>
                <div>

                    <div className='flex flex-col'>

                        {

                            data?.map((res, index) => {

                                return (
                                    <>


                                        <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                            <div style={Box} className={` bg-[#FFF] dark:bg-[#242526] flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                <div className='w-[350px]'>
                                                    <div className='p-[15px] w-full '>
                                                        <Swiper

                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                                        >
                                                            {
                                                                res?.viewerId?.userProfilePic.slice(0, 3).map((imageurl, Index) => {
                                                                    return (
                                                                        <>
                                                                            <SwiperSlide key={Index}>
                                                                                <Image  loading='lazy' alt='img' width={197} height={258} style={{ borderRadius: "10px", objectFit: "cover" }} className='w-[197px] h-[258px]' src={imageurl.url} />
                                                                            </SwiperSlide>
                                                                        </>
                                                                    )
                                                                })
                                                            }

                                                        </Swiper>
                                                    </div>
                                                </div>
                                                <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                    <div className='flex justify-between  h-[50px]'>
                                                        <div>
                                                            <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res?.viewerId?.name}</h1>
                                                            <h1 style={statusText} className={`text-[#7A7A7A]`}>{"Offline"}</h1>
                                                        </div>
                                                        <div className='pr-[8px]'>
                                                            <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>

                                                                <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]`}>

                                                                    <MatchScoreModal user={res?.viewerId} />

                                                                </li>
                                                                <li>
                                                                    <div onClick={() => HandleShortlist(res.viewerId?.id)} className="cursor-pointer dark:hover:bg-[#383838] hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
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
                                                                    <ProfileMenu openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                        <div id="user-card">
                                                            <ul id="user-card-grid">
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />{"38,7"}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' /> {res?.viewerId?.maritalStatus ? res?.viewerId?.maritalStatus : "NA , NA"}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />{`${res?.viewerId?.religion ? res?.viewerId?.religion : "NA"}, ${res?.viewerId?.cast ? res?.viewerId?.cast : "NA"}`}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />{`${res?.viewerId?.address ? res?.viewerId?.address?.currentCity : "NA"} , ${res?.viewerId?.address ? res?.viewerId?.address?.currentCountry : "NA"}`}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />{`${res?.viewerId?.motherTongue ? res.viewerId?.motherTongue : "NA , NA"}  `}</li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image loading='lazy' alt='img' width={15} height={14} src={darkMode ? '/assests/Black/RightTickWhite.svg' : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />{res?.viewerId?.userProfessional ? res.viewerId?.userProfessional?.jobTitle : "NA , NA"}</li>
                                                            </ul>
                                                        </div>
                                                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                            <ShowMore userid={res?.viewerId} text={res?.viewerId?.writeBoutYourSelf ? res?.viewerId?.writeBoutYourSelf : "NA"} maxLength={100} />

                                                            {/* res?.viewerId?.writeBoutYourSelf */}
                                                        </div>
                                                    </div>
                                                    <div className='relative top-[10px]'>
                                                        <SendRequestBtn
                                                            RequestId={sentrequest[res?.viewerId?.id]}
                                                            HandleRequestModal={() => HandleRequestModal(res?.viewerId)}
                                                        />
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
                :
                <>
                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image loading='lazy' alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>
                </>
            }

            <RegisterAlertModal
                title={""}
                isOpen={isRegisterModalOpen}
                onClose={CloseRegisterModal}
            />
            <ReportModal
                title={"helo"}
                isOpen={isReportModalOpen}
                onClose={CloseReportModal}
            />

            <BlockUserModal
                isOpen={isBlockModalOpen}
                onClose={closeBlockModal}
            />

            <React.Fragment>
                <Dialog
                    open={openShortlistModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            backgroundColor: "transparent", // or 'none' if you prefer
                            boxShadow: "none",
                        },
                    }}
                    BackdropProps={{
                        style: { opacity: 0, backgroundColor: "none", boxShadow: "none" },
                    }}
                >
                    <div
                        style={{ padding: "17px 19px 17px 20px" }}
                        className="bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center"
                    >
                        <div className="text-[14px]" style={Urlmodaltext}>
                            <span className="text-[#fff]"> {shortlistText}</span>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default RecentViewUser