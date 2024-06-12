import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchGriduserdata, sendRequest } from '../../../store/actions/UsersAction'
import { Dialog, Skeleton } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import GridLikeUser from '../../components/Buttons/GridLikeUser'
import ShortlistUser from '../../components/Buttons/ShortlistUser'
import ProfileMenu from '../../components/popover/MenuPop'
import BlockUserModal from "../../components/Models/BlockModal";
import dynamic from 'next/dynamic'


// Dynamically imported components
const ShareModal = dynamic(() => import("../../components/Models/ShareModal"));
const RegisterAlertModal = dynamic(() => import("../../components/Models/RegisterAlertModal"));
const ReportModal = dynamic(() => import("../../components/Models/ReportModal"));


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

    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
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



    const renderButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5; // Maximum number of buttons to show

        // Calculate the start and end page numbers based on the current page and total pages
        let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

        // If there are not enough pages to fill maxButtonsToShow, adjust the start and end page numbers
        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        // Render pagination buttons within the range of startPage to endPage
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <Link key={i} href={`/dashboard?page=${i}`}>
                    <div id={currentPage === i ? "grid-active-btn" : (darkMode ? "DarkPagination" : "pagination-count")} onClick={() => setCurrentPage(i)} className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>{i}</div>
                </Link>
            );
        }

        return buttons;
    };

    const router = useRouter()
    const HanldeNextPage = () => {
        const nextpage = currentPage + 1
        setCurrentPage(nextpage)
        router.push(`/dashboard?page=${nextpage}`)
    }
    const HandlePrevPage = () => {
        const prevpage = currentPage - 1;
        setCurrentPage(prevpage)
        router.push(`/dashboard?page=${prevpage}`)

    }



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
        // () => router.push(`/dashboard/${user?.id}`)

        router.push(`/dashboard/${res?.id}`)
    }


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        loading ?
                            <>
                                {[1, 2, 3, 4, 5, 6].map((res, index) => {
                                    return (
                                        <>

                                            <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='flex justify-center pt-[10px]'>
                                                    <Skeleton variant="text" width={120} className='pl-[10px] flex space-x-[10px]' />

                                                </div>
                                                <div className='flex justify-center '>
                                                    <Skeleton variant="circular" alt='profile' style={{ objectFit: "cover" }} width={102} height={102} className='w-[102px] h-[102px] rounded-[50%]' src={""} />
                                                </div>
                                                <div className='text-center grid place-items-center'>
                                                    <Skeleton variant='h1' width={110} style={ProfileName} className='text-[18px]' />
                                                    {/* <Skeleton variant="text" width={90} style={ListText} className='text-[14px]' /> */}
                                                    <Skeleton variant="text" width={90} style={ListText} className='text-[14px]' />
                                                    <Skeleton variant="text" width={90} style={ListText} className='text-[14px]' />
                                                </div>

                                                <div className='flex space-x-[15px] justify-center'>
                                                    <div><Skeleton variant="circular" alt='ignore' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                                                    <div><Skeleton variant="circular" alt='like' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                                                    <div><Skeleton variant="circular" alt='send' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })}
                            </>
                            :
                            <>
                                {
                                    // UserGridProfile
                                    pagesdata?.results?.map((user, index) => {
                                        return (
                                            <>
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
                                                            <>
                                                                <div className='grid place-items-center w-[102px] h-[102px] rounded-[50%] bg-[#F8FBFF]'>
                                                                    <h1 style={ImagenotFound}>No Image</h1>
                                                                </div>
                                                            </>
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
                                            </>
                                        )

                                    })
                                }


                            </>
                    }

                    <div className='relative left-[-20px] flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
                        {/* <button disabled={pagesdata?.hasPrevPage != true} onClick={HandlePrevPage} className='cursor-pointer w-[80px] h-[30px] rounded-[10px]' id='active-no'>Prev</button> */}
                        <button disabled={pagesdata?.hasPrevPage != true} onClick={HandlePrevPage} className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full'>
                            {darkMode ?
                                <Image width={7} height={14} alt='prev-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                                :
                                <Image width={7} height={14} alt='prev-light' src="/assests/gridSection/Prev-Data.svg" />
                            }
                        </button>

                        {renderButtons()}
                        <button disabled={pagesdata?.hasNextPage != true} onClick={HanldeNextPage} className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full'>
                            {darkMode ?
                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                                :
                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />}
                        </button>

                    </div>

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


        </>
    )
}

export default UserGridProfile