import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchGriduserdata, sendRequest } from '../../../store/actions/UsersAction'
import { Dialog, Skeleton } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import dynamic from 'next/dynamic'
import GridLikeUser from '../common/Buttons/GridLikeUser'
import ShortlistUser from '../common/Buttons/ShortlistUser'
import Avatar from 'react-avatar'
import Pagination from '../../../components/common/Features/Pagination'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'

// Dynamically imported components
const ShareModal = dynamic(() => import("../Model/Models/ShareModal"));
const RegisterAlertModal = dynamic(() => import("../Model/Models/RegisterAlertModal"));
const ReportModal = dynamic(() => import("../Model/Models/ReportModal"), { ssr: false });
const ProfileMenu = dynamic(() => import("../Model/popover/MenuPop"), { ssr: false });
const BlockUserModal = dynamic(() => import("../Model/Models/BlockModal"), { ssr: false });


function UserGridProfile() {


    const { darkMode, toggleDarkMode } = useDarkMode();


    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
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


    const ProfileCard = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };



    const dispatch = useDispatch();
    const { totalPages, data, loading, pagesdata } = useSelector((state) => state.usersact.UserGridData)
    const [CurrentPageofUserdata, SetCurrentPageofUserdata] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(FetchGriduserdata(currentPage))
    }, [currentPage, setCurrentPage, CurrentPageofUserdata, SetCurrentPageofUserdata])


    const router = useRouter()

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    const [sentrequest, setsentRequest] = useState({});
    const [openShortlistModal, setopenShortlistModal] = React.useState(false);
    const [shortlistText, setshortlistText] = useState();
    const thedata = useSelector((state) => state.myprofile);


    const HandleRequestModal = (res) => {
        if (thedata.data.userProfileCompleted) {
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
        } else {
            OpenRegisterModal();
        }
    };

    // Popup Data

    const [CurrURL, SetCurURL] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [Data, setData] = useState("");

    const openModal = (e) => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
    }
    const HandleVisitProfile = (res) => {
        router.push(`/longterm/dashboard/${res?.id}`)
    }
    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-[90%] xl:w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        loading ?
                            <>
                                <ProfileSkeletonLoader />
                            </>
                            :
                            <>
                                {
                                    // UserGridProfile
                                    pagesdata?.results?.map((user, index) => {
                                        return (

                                            <div key={user.id} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='flex justify-between pt-[10px]'>
                                                    <ul className='pl-[10px] flex space-x-[10px]'>
                                                        <li>
                                                            <Image quality={25} loading='lazy' alt='couple-icon' width={17} height={14} src='/assests/Black/Couple2.svg' />
                                                        </li>
                                                        <li className='text-[#000] dark:text-[#FFF] text-[10px]' style={Text4}>You & Her </li>
                                                    </ul>
                                                    <ul className='pr-[10px] flex space-x-[30px]'>
                                                        <li>
                                                            <li>
                                                                <ShortlistUser UserId={user?.id} />
                                                            </li>
                                                        </li>
                                                        <li>
                                                            <ProfileMenu SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={user} />

                                                        </li>
                                                    </ul>
                                                </div>
                                                <div onClick={() => HandleVisitProfile(user)} className='flex justify-center '>
                                                    {user?.profilePic ? <>
                                                        <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={user?.profilePic} />
                                                    </>
                                                        :
                                                        <><Avatar name={user?.name} round size='100' /></>
                                                    }
                                                </div>
                                                <div className='text-center'>

                                                    <h1 style={ProfileName} className=' text-[#000] dark:text-[#FFF] text-[18px]'>{user?.name}</h1>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>32, 5’3”</p>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{user?.religion ? user?.religion : "NA"}, {user?.cast ? user?.cast : "NA"}</p>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{user?.maritalStatus ? user?.maritalStatus : "NA"}</p>

                                                </div>
                                                <GridLikeUser RequestId={sentrequest[user?.id]}
                                                    HandleRequestModal={() => HandleRequestModal(user)} from={"GridProfile"} currentPage={currentPage} user={user} key={index} />
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} darkMode={false} URL={'/longterm/dashboard/'} />
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


        </>
    )
}

export default UserGridProfile