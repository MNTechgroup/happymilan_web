import React, { useEffect, useState } from 'react'
import styles from '../../../../styles/styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Cancelfriendrequest, Sentblockrequest, getAcceptedRequestData } from '../../../../store/actions/UsersAction';
import index from '../../profile';
import UserprofileSkeleton from '../../../components/Loader/UserprofileSkeleton';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
const ShareModal = dynamic(() => import('../../../components/Models/ShareModal'))
import { useDarkMode } from '../../../../ContextProvider/DarkModeContext';
import ProfileMenu from '../../../components/popover/MenuPop';
import RegisterAlertModal from '../../../components/Models/RegisterAlertModal';
import ReportModal from '../../../components/Models/ReportModal';
import BlockUserModal from '../../../components/Models/BlockModal'
import { addToShortlist } from '../../../../store/actions/GetingAlluser';
import ShowMore from '../../../components/Maincomp/UserBio';
import MatchScoreModal from '../../../components/UserModal/MatchScoreModal';

function AcceptedRequest() {
    const { darkMode, toggleDarkMode } = useDarkMode();




    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [Data, setData] = useState("");
    const [openShortlistModal, setopenShortlistModal] = React.useState(false)
    const [shortlistText, setshortlistText] = useState();

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
        // console.log("🚀 ~ HandleShortlist ~ id:", id)
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };



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
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }

    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }

    const Box = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);

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

    const [CurrURL, SetCurURL] = useState("")


    const handleClick = (event, res) => {
        console.log("🚀 ~ handleClick ~ res:", res)
        setAnchorEl(event.currentTarget);

        if (res?.user?.id === isCurrentUser) {
            // If the friend ID matches, set the OtherUserId to the user's ID
            SetOtherUserId(res?.friend?.id);
            // console.log("🚀 ~ handleClick ~ res.user.id:", res.user.id)


        } else {
            // If the friend ID doesn't match, set the OtherUserId to the friend's ID

            SetOtherUserId(res?.friend?.id);
            // console.log("🚀 ~ handleClick ~ res.friend.id:", res.friend.id)
        }

        SetUserIdforBlock(res?.friend?.id)


        SetCurrentUserID(res?.id)

        const userId = res?.friend?.id === isCurrentUser ? res?.user?.id : res?.friend?.id;
        const urlWithUserId = `${"http://localhost:3000/dashboard"}/${userId}`;

        SetCurURL(urlWithUserId)
    };

    const HandleBlockUser = (res) => {


        const isConfirmed = window.confirm('Are you sure you want to block this user?');

        // Check if user confirmed
        if (isConfirmed) {
            // Perform blocking action
            // Add your logic here to block the user
            console.log('User blocked successfully');
            setAnchorEl(null);
            dispatch(Sentblockrequest(CurrentUserID, UserIdforBlock))

            setTimeout(() => {
                dispatch(getAcceptedRequestData())
            }, 800);


        } else {
            // User canceled the action
            console.log('Blocking action canceled');
        }
    }



    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);
    const [userdeletedata, SetuserDeleteData] = useState([])


    const [theDetails, SettheDetails] = useState({
        user: "",
        LastintID: ""
    })

    const handleClickDeleteImageModal = (res) => {

        res?.id, res?.lastInitiatorUser
        setOpenLogoutModal(true);
        SetuserDeleteData(res)
    };

    const handleCloseLogout = () => {
        setOpenLogoutModal(false);
    };

    const HandleLogout = (e) => {
        if (e.target.name != "stay") {
            onsole.log('User unfriend successfully');
            setAnchorEl(null);
            dispatch(Cancelfriendrequest(CurrentUserID, OtherUserId))

            setTimeout(() => {
                dispatch(getAcceptedRequestData())
            }, 800);
            setOpenLogoutModal(false);

        }
        setOpenLogoutModal(false)

    }

    const [MyID, SetMyID] = useState("")
    useEffect(() => {
        SetMyID(getCookie("userid"))
    }, [])


    const HandleCancelRequest = (res, id) => {
        console.log("🚀 ~ HandleCancelRequest ~ res:", res)
        console.log("🚀 ~ HandleCancelRequest ~ id:", id)
        // alert(id)

        const isConfirmed = window.confirm('Are you sure you want to unfriend this user?');

        const cuurentUser = getCookie("authtoken")

        // Check if user confirmed
        if (isConfirmed) {
            // Perform blocking action
            // Add your logic here to block the user
            console.log('User unfriend successfully');
            setAnchorEl(null);
            dispatch(Cancelfriendrequest(res?.id, res?.lastInitiatorUser))

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
            {data?.acceptedrequestdata?.data?.data && data?.acceptedrequestdata?.data?.data?.length > 0 ? <>
                <div>

                    <div className='flex flex-col'>

                        {


                            data?.acceptedrequestdata?.data.data.map((res) => {


                                const IsUser = res?.friend?.id === isCurrentUser;

                                return (
                                    <>
                                        <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                            <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                <div className='w-[350px]'>
                                                    <div className='p-[15px] w-full '>
                                                        <Swiper

                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                        >
                                                            <SwiperSlide>
                                                                <Image alt={`profile`} width={197} height={258} style={{ width: "197px", height: "258px", borderRadius: "10px", objectFit: "cover" }} className='w-[197px] h-[258px]' src={res?.friend?.id === isCurrentUser ? res?.user?.profilePic : res?.friend?.profilePic} loading="lazy" />
                                                            </SwiperSlide>

                                                        </Swiper>

                                                    </div>
                                                </div>
                                                <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                    <div className='flex justify-between  h-[50px]'>
                                                        <div>
                                                            <Link href={`/dashboard/${res.id}`} ><h1 className={`${styles.ProfileName} text-[#000] dark:text-[#FFF] 2xl:text-[20px] xl:text-[15px] text-[15px]`}>{IsUser ? res?.user?.name : res?.friend?.name}</h1></Link>
                                                            <h1 style={statusText} className={`text-[#7A7A7A]`}>Online now</h1>
                                                        </div>
                                                        <div className='pr-[8px]'>
                                                            <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>
                                                                <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]`}>
                                                                    <MatchScoreModal user={IsUser ? res?.user : res?.friend} />
                                                                </li>
                                                                <li>
                                                                    <div onClick={() => HandleShortlist(IsUser ? res?.user?.id : res?.friend?.id)} className="cursor-pointer dark:hover:bg-[#383838] hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
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
                                                                    <ProfileMenu HandleCancelRequest={() => HandleCancelRequest(res, IsUser ? res?.user?.id : res?.friend?.id)} MenuTitle={"accepted"} SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                        <div id="user-card">
                                                            <ul id="user-card-grid">
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    32, 5'3
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {IsUser ? (res?.user?.religion ? res.user.religion : 'NA') : (res?.friend?.religion ? res.friend.religion : 'NA')}, {IsUser ? (res?.user?.cast ? res.user.cast : 'NA') : (res?.friend?.cast ? res.friend.cast : 'NA')}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {IsUser ? (res?.user?.motherTongue ? res.user.motherTongue : "NA, NA") : (res?.friend?.motherTongue ? res.friend.motherTongue : "NA, NA")}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {IsUser ? (res?.user?.maritalStatus ? res.user.maritalStatus : "NA, NA") : (res?.friend?.maritalStatus ? res.friend.maritalStatus : "NA, NA")}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.address ? res?.address?.currentCity : "NA"}, {res?.address ? res.address.currentCountry : "NA"}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.userProfessional ? res?.userProfessional?.currentDesignation : "NA, NA"}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                            <ShowMore userid={IsUser ? res?.user.id : res?.friend.id} text={IsUser ? (res?.user?.writeBoutYourSelf ? res?.user?.writeBoutYourSelf : "NA") : (res?.friend?.writeBoutYourSelf ? res?.friend?.writeBoutYourSelf : "NA")} maxLength={100} />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                        <ul className='flex space-x-[10px]'>
                                                            <li><h1 className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}>Accepted</h1></li>
                                                            <li><Image loading='lazy' alt="accepted" width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
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
                <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
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

                <React.Fragment>
                    <Dialog
                        open={openURLModal}
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
                                <spa className="text-[#fff]"> URL has been copied</spa>
                            </div>
                        </div>
                    </Dialog>
                </React.Fragment>

                <Dialog
                    open={openLogoutModal}
                    onClose={handleCloseLogout}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className=""
                >
                    <DialogContent className="text-center w-[400px] mt-[20px]">
                        <div id="alert-dialog-description">
                            <p style={LogoutModalText}>Are you sure you want to unfriend this user?</p>
                        </div>
                    </DialogContent>
                    <div className="flex justify-evenly p-[20px] mb-[20px]">
                        <div>
                            <button onClick={HandleLogout} name="stay" id="grad-button" className="rounded-[24px] w-[122px] h-[50px]">No</button>
                        </div>
                        <div>
                            <button onClick={HandleLogout} name="exit" className="border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]">Yes</button>
                        </div>
                    </div>
                </Dialog>
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