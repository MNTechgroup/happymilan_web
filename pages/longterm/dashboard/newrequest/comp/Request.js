import React, { useState } from 'react'
// import required modules
import Popover from '@mui/material/Popover';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent } from '@mui/material';
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton';
import { acceptRequest, getFriendsList, rejectRequest } from '../../../../../store/actions/UsersAction';
import { useDispatch } from 'react-redux';
import ShareModal from '../../../../_components/Model/Models/ShareModal';
import ProfileMenu from '../../../../_components/Model/popover/MenuPop';
import ReportModal from '../../../../_components/Model/Models/ReportModal';
import RegisterAlertModal from '../../../../_components/Model/Models/RegisterAlertModal';
import BlockUserModal from "../../../../_components/Model/Models/BlockModal";
import { addToShortlist } from '../../../../../store/actions/GetingAlluser';
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal';


function Request({ data, loading }) {
    const [anchorEl, setAnchorEl] = React.useState(null);




    const [CurrURL, SetCurURL] = useState("");




    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [Data, setData] = useState("");


    const OpenRegisterModal = (res) => {
        setData(res);
        setisRegisterModalOpen(true);
    };

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


    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };


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

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
        handleClose();
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };





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

    const handleClickOpen = () => {
        setOpenURLModal(true);


        setTimeout(() => {
            setOpenURLModal(false);
            handleClose()
        }, 2000);
    };

    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();

    const dispatch = useDispatch();
    const HanldeAccept = (res) => {

        dispatch(acceptRequest(res))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());

        }, 800);

    }

    const HanldeReject = (res) => {
        dispatch(rejectRequest(res));

        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());
        }, 800);

    }


    if (loading) {
        return <UserprofileSkeleton />
    }

    const HandleShow = () => {
        console.log(data?.data.length)
    }

    return (
        <>

            {data?.data.length > 0 ?
                <>
                    <div>

                        <div className='flex flex-col'>

                            {

                                data && data.data && data.data.map((res, index) => {


                                    return (
                                        <>

                                            <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                                <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                    <div className='w-[350px]'>
                                                        <div className='p-[15px] w-full '>
                                                            <Swiper

                                                                pagination={{ clickable: true }}
                                                                modules={[Pagination]}
                                                                className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                                            >
                                                                <SwiperSlide>
                                                                    <Image alt='img' onClick={HandleShow} width={197} height={258} className='w-[197px] h-[258px]' src={res.user?.profilePic} style={{ borderRadius: "10px", objectFit: "cover" }} />
                                                                </SwiperSlide>

                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                        <div className='flex justify-between  h-[50px]'>
                                                            <div>
                                                                <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.user?.name}</h1>
                                                                <h1 style={statusText} className={`text-[#17C270]`}>Online now</h1>
                                                            </div>
                                                            <div className='pr-[8px]'>
                                                                <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>

                                                                    <li className="cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]">

                                                                        <MatchScoreModal user={res?.user} />

                                                                    </li>
                                                                    <li>
                                                                        <div onClick={() => HandleShortlist(res.user.id)} className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
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

                                                                        <ProfileMenu SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} />

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                            <div id="user-card">
                                                                <ul id="user-card-grid">
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{"NA"}</li>
                                                                </ul>
                                                            </div>
                                                            <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                                <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{"Description..."}<span className='text-[#0F52BA]'> more </span></p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-0 mr-[20px] space-x-[10px]'>
                                                            <h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>Want to accept?</h1>
                                                            <div className='flex space-x-[21px]'>
                                                                <div onClick={() => HanldeAccept(res)} onMouseEnter={() => setIsHovered2(true)}
                                                                    onMouseLeave={() => setIsHovered2(false)}
                                                                    className={`${isHovered2 ? "bg-custom-gradient" : ""}  cursor-pointer w-[40px]  h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`}>
                                                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.65147 12L0 6.34853L0.637477 5.73308L5.65147 10.747L16.3765 0L17.014 0.637506L5.65147 12Z" fill={isHovered2 ? "white" : "black"} />
                                                                    </svg>
                                                                </div>
                                                                <div onClick={() => HanldeReject(res)} onMouseEnter={() => setIsHovered(true)}
                                                                    onMouseLeave={() => setIsHovered(false)} className={`${isHovered ? "bg-custom-gradient" : ""} w-[40px] h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`}>
                                                                    <svg className='SVG-hover' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0.529793 12L0 11.4702L5.47021 6L0 0.529793L0.529793 0L6 5.47021L11.4702 0L12 0.529793L6.52979 6L12 11.4702L11.4702 12L6 6.52979L0.529793 12Z" fill={isHovered ? "white" : "black"} />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div >

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
                : <>
                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>
                </>
            }

            <RegisterAlertModal
                title={Data}
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

export default Request