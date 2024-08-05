import Image from 'next/image'
import React, { useState } from 'react'
import { Postrecentuserprofile, sendRequest } from '../../../../../store/actions/UsersAction'
import { useDispatch, useSelector } from 'react-redux'
import GridLikeUser from '../../../../_components/common/Buttons/GridLikeUser'
import { Dialog } from '@mui/material'
import ReportModal from '../../../../_components/Model/Models/ReportModal'
import RegisterAlertModal from '../../../../_components/Model/Models/RegisterAlertModal'
import ShareModal from '../../../../_components/Model/Models/ShareModal'
import ProfileMenu from '../../../../_components/Model/popover/MenuPop'
import BlockUserModal from "../../../../_components/Model/Models/BlockModal";
import { useRouter } from 'next/router'


function SearchUsers({ searchResults }) {

    const thedata = useSelector((state) => state.myprofile);


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

    const router = useRouter();

    const HandlePushUser = (res) => {
        router.push(`/longterm/dashboard/${res}`);
        dispatch(Postrecentuserprofile(res));
    };


    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
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


    const ProfileCard = {
        borderRadius: "10px",
        background: "#FFF",
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


    const [sentrequest, setsentRequest] = useState({});

    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();


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

    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        searchResults?.map((user, index) => {
                            return (
                                <>
                                    <div style={ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                        <div className='flex justify-between pt-[10px]'>
                                            <ul className='pl-[10px] flex space-x-[10px]'>
                                                <li>
                                                    <Image width={17} height={14} src='/assests/Black/Couple2.svg' />
                                                </li>
                                                <li className='text-[10px]' style={Text4}>You & Her </li>
                                            </ul>
                                            <ul className='pr-[10px] flex space-x-[30px]'>
                                                <li>
                                                    <Image width={15} height={14} src='/assests/Black/Stars-2.svg' />
                                                </li>
                                                <li>
                                                    <ProfileMenu SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={user} />

                                                </li>
                                            </ul>
                                        </div>
                                        <div className='flex justify-center cursor-pointer'>
                                            <Image onClick={() => HandlePushUser(user?.id)} width={102} height={102} style={{ objectFit: "cover" }} className='w-[102px] h-[102px] rounded-[50%] hover:opacity-90 duration-100' src={user?.profilePic ? user.profilePic : ""} />
                                        </div>
                                        <div className='text-center'>
                                            <h1 onClick={() => HandlePushUser(user?.id)} style={ProfileName} className='cursor-pointer text-[18px] hover:opacity-75 duration-100'>{user?.name}</h1>
                                            <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                                            <p style={ListText} className='text-[14px]'>{`${user?.religion ? user.religion : "NA"} , ${user?.cast ? user.cast : "NA"}`}</p>
                                            <p style={ListText} className='text-[14px]'>{user?.maritalStatus ? user.maritalStatus : "NA"}</p>
                                        </div>

                                        <GridLikeUser RequestId={sentrequest[user?.id]}
                                            HandleRequestModal={() => HandleRequestModal(user)} from={"GridProfile"} user={user} key={index} />
                                    </div>
                                </>
                            )

                        })
                    }




                </div >
                {/* <div className='flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
                    <div id='active-no' className=' cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>1</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>2</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>3</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>4</div>
                </div> */}
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

export default SearchUsers