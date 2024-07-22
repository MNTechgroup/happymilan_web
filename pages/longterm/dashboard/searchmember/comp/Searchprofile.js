import React, { useEffect, useState } from 'react'


// import required modules
const ShareModal = dynamic(() => import('../../../../_components/Model/Models/ShareModal'));
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    addToShortlist,
} from "../../../../../store/actions/GetingAlluser";
import {
    Postrecentuserprofile,
    sendRequest,
} from "../../../../../store/actions/UsersAction";
import UserprofileSkeleton from "../../../../../components/common/shader/UserprofileSkeleton";
import { useRouter } from "next/router";
import SendRequestBtn from "../../../../_components/common/Buttons/SendRequestBtn";
import { useDarkMode } from "../../../../../ContextProvider/DarkModeContext";
import dynamic from "next/dynamic";
import ProfileMenu from "../../../../_components/Model/popover/MenuPop";
import BlockUserModal from "../../../../_components/Model/Models/BlockModal";
import RegisterAlertModal from '../../../../_components/Model/Models/RegisterAlertModal';
import ReportModal from '../../../../_components/Model/Models/ReportModal';


function Searchprofile() {

    const { darkMode, toggleDarkMode } = useDarkMode();


    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const statusText = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px",
    };
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */,
    };

    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px",
    };

    const Box = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
    };

    const [sentrequest, setsentRequest] = useState(false);
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

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const dispatch = useDispatch();


    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();


    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);


    };

    const HandleRequestModal = (res) => {
        // if (data?.data?.userProfileCompleted) {
        dispatch(sendRequest(res._id));

        setsentRequest((prevState) => ({
            ...prevState,
            [res._id]: !prevState[res._id], // Update the sentRequests state for the specific user ID
        }));

        if (!sentrequest[res._id]) {
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




    const imageFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    };

    const router = useRouter();
    const HandlePushUser = (res) => {
        router.push(`/longterm/dashboard/${res}`);
        dispatch(Postrecentuserprofile(res));
    };

    const MAX_CHARACTERS = 100; // Define your maximum character limit

    const handleTextOverflow = (text) => {
        if (text.length > MAX_CHARACTERS) {
            return text.slice(0, MAX_CHARACTERS) + "..."; // Truncate the text if it exceeds the limit
        } else {
            return text; // Return the original text if it doesn't exceed the limit
        }
    };

    const { loading, data } = useSelector((state) => state.usersact.searchusersprofiledata)


    if (loading) {
        return (
            <>
                <UserprofileSkeleton />
            </>
        )
    }

    return (
        <>
            <div>

                <div className='flex flex-col mt-[-8px]'>

                    {data?.map((res, Index) => {
                        return (
                            <>

                                <div key={Index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                    <div
                                        style={Box}
                                        className={`bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}
                                    >
                                        <div className="w-[350px]">
                                            <div className="p-[15px] w-full ">
                                                {res.userProfilePic &&
                                                    res.userProfilePic.length > 0 ? (
                                                    <Swiper
                                                        pagination={{ clickable: true }}
                                                        modules={[Pagination]}
                                                        className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                    >
                                                        {res.userProfilePic
                                                            .slice(0, 3)
                                                            .map((Imageres, theindex) => (
                                                                <SwiperSlide key={theindex}>
                                                                    <Image
                                                                        placeholder="blur"
                                                                        blurDataURL="data:..."
                                                                        alt={`img${theindex + 1}`}
                                                                        width={197}
                                                                        height={258}
                                                                        style={{
                                                                            width: "197px",
                                                                            height: "258px",
                                                                            borderRadius: "10px",
                                                                            objectFit: "cover",
                                                                        }}
                                                                        className="w-[197px] h-[258px]"
                                                                        src={Imageres.url}
                                                                        loading="lazy"
                                                                        quality={45}
                                                                    />
                                                                </SwiperSlide>
                                                            ))}
                                                    </Swiper>
                                                ) : (
                                                    <div>
                                                        <div
                                                            style={{
                                                                backgroundColor: "#F8FBFF",
                                                                width: "197px",
                                                                height: "258px",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: "10px"
                                                            }}
                                                        >
                                                            <div className="grid place-items-center space-y-[5px]">
                                                                <Image
                                                                    alt="not-Found"
                                                                    width={34}
                                                                    height={34}
                                                                    loading="lazy"
                                                                    quality={25}
                                                                    src={"/assests/dashboard/icon/NotFound-img.svg"}
                                                                />
                                                                <h1
                                                                    className="inline"
                                                                    style={imageFoundText}
                                                                >
                                                                    No Image
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]">
                                            <div className="flex justify-between  h-[50px]">
                                                <div>
                                                    <h1
                                                        onClick={() => HandlePushUser(res.id)}
                                                        className="2xl:text-[20px] xl:text-[15px] text-[15px] cursor-pointer text-[#000] dark:text-[#FFF]"
                                                        style={ProfileName}
                                                    >
                                                        {res.name}
                                                    </h1>
                                                    <h1
                                                        style={statusText}
                                                        className={`text-[#17C270]`}
                                                    >
                                                        {"Online now"}
                                                    </h1>
                                                </div>
                                                <div className="pr-[8px]">
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
                                                        <li
                                                            className="cursor-pointer"
                                                            onClick={() => HandleShortlist(res.id)}
                                                        >
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
                                                            <ProfileMenu SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]">
                                                <div id="user-card">
                                                    <ul id="user-card-grid">
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {`'32,5'3`}
                                                        </li>
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {res.maritalStatus ? res.maritalStatus : "NA , NA"}
                                                        </li>
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {`${res.religion ? res.religion : "NA"}, ${res.cast ? res.cast : "NA"}`}
                                                        </li>
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {`${res.address ? res.address.currentCity : "NA"} , ${res.address ? res.address.currentCountry : "NA"}`}
                                                        </li>
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {`${res.motherTongue ? res.motherTongue : "NA , NA"}  `}
                                                        </li>

                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {res.userProfessional ? res.userProfessional.jobTitle : "NA , NA"}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">
                                                    <p
                                                        style={Text3}
                                                        className="text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]"
                                                    >
                                                        {handleTextOverflow(
                                                            res.writeBoutYourSelf
                                                                ? res.writeBoutYourSelf
                                                                : "NA",
                                                        )}
                                                        {res.writeBoutYourSelf &&
                                                            res.writeBoutYourSelf.length >
                                                            MAX_CHARACTERS && (
                                                                <span className="text-[#0F52BA]">
                                                                    {" "}
                                                                    more{" "}
                                                                </span>
                                                            )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="absolute right-0 mt-[0px]">
                                                <SendRequestBtn
                                                    RequestId={sentrequest[res?._id]}
                                                    HandleRequestModal={() => HandleRequestModal(res)}
                                                />
                                                {/* <button onClick={()=>alert(res?.name)}>Send Request</button> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* {likeloading ? <></> : <>

                                        <LikeUser
                                            ActiveLike={ActiveLike}
                                            setActiveLike={setActiveLike}
                                            userId={res.id}
                                        />
                                    </>} */}
                                </div>

                            </>
                        );
                    })}

                    <div className="z-5 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]">
                        <button id="custom-next-button" className="w-[35px] h-[70px]">
                            <Image
                                loading="lazy"
                                alt="next-icon"
                                width={55}
                                height={91}
                                src={darkMode ? "/assests/dashboard/icon/next-card-btn-white.svg" : "/assests/dashboard/icon/next-card-btn.svg"}
                            />
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

export default Searchprofile