import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    addToShortlist,
} from "../../../store/actions/GetingAlluser";
import {
    Getlikeduserdata,
    Postrecentuserprofile,
    sendRequest,
} from "../../../store/actions/UsersAction";
import UserprofileSkeleton from "../../../components/common/shader/UserprofileSkeleton";
import { useRouter } from "next/router";
import LikeUser from "../common/Buttons/LikeUser";
import SendRequestBtn from "../common/Buttons/SendRequestBtn";
import { useDarkMode } from "../../../ContextProvider/DarkModeContext";
import dynamic from "next/dynamic";
import { capitalizeFirstLetter } from "../../../utils/form/Captitelize";

// Dynamically imported components
const ShareModal = dynamic(() => import("../Model/Models/ShareModal"));
const RegisterAlertModal = dynamic(() => import("../Model/Models/RegisterAlertModal"));
const ReportModal = dynamic(() => import("../Model/Models/ReportModal"), { ssr: false });
const ProfileMenu = dynamic(() => import("../Model/popover/MenuPop"), { ssr: false });
const BlockUserModal = dynamic(() => import("../Model/Models/BlockModal"), { ssr: false });
const MatchScoreModal = dynamic(() => import("../Model/Models/MatchScoreModal"), { ssr: false });
const ShowMore = dynamic(() => import("../common/profile/UserBio"), { ssr: false });



function SampleUserProfile({ users }) {

    const { darkMode, toggleDarkMode } = useDarkMode();
    const { loading } = useSelector((state) => state.alluser);
    const [ActiveLike, setActiveLike] = useState(false);

    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const statusText = {
        fontFamily: "Poppins",
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

    const Box = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
    };

    const [sentrequest, setsentRequest] = useState({});
    const [CurrURL, SetCurURL] = useState("");
    const [UserID, SetUserID] = useState("");




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
    };

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const likeloading = useSelector(
        (state) => state.usersact.LikedUsersData.likeloading
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Getlikeduserdata())
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the left arrow key is pressed
            if (event.keyCode === 37) {
                swiperRef.current.swiper.slidePrev();
            }
            // Check if the right arrow key is pressed
            else if (event.keyCode === 39) {
                swiperRef.current.swiper.slideNext();
            }
        };

        // Add event listener for keydown
        document.addEventListener("keydown", handleKeyDown);

        // Remove event listener when component is unmounted
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();

    const swiperRef = useRef(null);

    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

        swiperRef.current.swiper.slideNext();
    };

    const data = useSelector((state) => state.myprofile);

    const HandleRequestModal = (res) => {
        if (data?.data?.userProfileCompleted) {
            dispatch(sendRequest(res._id));

            setsentRequest((prevState) => ({
                ...prevState,
                [res._id]: !prevState[res._id], // Update the sentRequests state for the specific user ID
            }));

            if (!sentrequest[res._id]) {

                setshortlistText(`You sent a request to ${res?.name}`);
                setopenShortlistModal(true);
            } else {
                setshortlistText("Request Removed..");
                setopenShortlistModal(true);
            }

            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);
        } else {
            OpenRegisterModal();
        }
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




    if (loading) {
        return <UserprofileSkeleton />;
    }

    return (
        <>
            <div className="">
                <div className="flex">
                    <div className=" grid place-items-center w-[10px] lg:w-[40px] 2xl:w-[40px] xl:w-[40px] h-[294px]">
                        <div id="custom-prev-button" className="Prevbtn relative left-[20px] md:left-[10px]  2xl:left-0 xl:left-[20px] rounded-l-full grid place-items-center cursor-pointer hover:bg-[#F1F6FF]" style={{ width: "35px", height: "70.993px" }}>
                            <Image width={7} height={14} className='' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />
                        </div>
                    </div>

                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        className=" w-[600px] relative lg:left-[-10px] 2xl:left-[0px] xl:left-[10px] 2xl:w-[650px] 2xl:h-full xl:w-[560px] lg:w-[560px]  xl:h-full"
                        navigation={{
                            prevEl: "#custom-prev-button",
                            nextEl: "#custom-next-button",
                        }}
                    >
                        {users?.map((res, index) => {
                            return (

                                <SwiperSlide key={index} className="">
                                    <div className="">
                                        <div
                                            style={Box}
                                            className={`bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[530px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:h-[270px] lg:w-[530px] md:w-[400px] bg-[#FFF]`}
                                        >
                                            <div className="w-[350px] 2xl:w-[350px] xl:w-[350px] lg:w-[250px] md:w-[300px]">
                                                <div className="p-[15px] w-full ">
                                                    {res.userProfilePic &&
                                                        res.userProfilePic.length > 0 ? (
                                                        <Swiper
                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[187px] lg:w-[170px] w-[185px] h-[260px]"
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
                                                                                // width: "197px",
                                                                                // height: "258px",
                                                                                borderRadius: "10px",
                                                                                objectFit: "cover",
                                                                            }}
                                                                            className="2xl:w-[197px] 2xl:h-[258px] xl:w-[197px] xl:h-[258px] lg:w-[180px] lg:h-[240px] w-[180px] h-[240px]"
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
                                                            onClick={() => HandlePushUser(res._id)}
                                                            className="2xl:text-[20px] xl:text-[15px] text-[15px] cursor-pointer text-[#000] dark:text-[#FFF]  hover:opacity-75 duration-100"
                                                            style={ProfileName}
                                                        >
                                                            {capitalizeFirstLetter(res.name)}
                                                        </h1>
                                                        <h1
                                                            style={statusText}
                                                            className={`text-[#17C270]`}
                                                        >
                                                            {res?.isUserActive ?
                                                                <span className="text-[9px] text-[#0091FF]">Online now</span>
                                                                :
                                                                <span className="text-[9px] text-[#a6a6a6]">Offline</span>
                                                            }
                                                        </h1>
                                                    </div>
                                                    <div className="pr-[8px]">
                                                        {/* <ul className="flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]"> */}
                                                        <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>

                                                            <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]`}>

                                                                <MatchScoreModal user={res} />

                                                            </li>


                                                            <li
                                                                className="cursor-pointer"
                                                                onClick={() => HandleShortlist(res._id)}
                                                            >
                                                                <div className="cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] p-[5px] rounded-[50%] relative top-[-5px]">
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
                                                                <ProfileMenu SetUserID={SetUserID} SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} />
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
                                                                {`${res?.age},${res?.height}`}
                                                            </li>

                                                            <li
                                                                className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                style={ListText}
                                                            >
                                                                {res?.maritalStatus ?
                                                                    <>
                                                                        <Image
                                                                            loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {res.maritalStatus ? capitalizeFirstLetter(res.maritalStatus) : "NA , NA"}
                                                                    </>
                                                                    : ""}
                                                            </li>

                                                            <li
                                                                className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                style={ListText}
                                                            >
                                                                {res?.religion ?
                                                                    <>
                                                                        <Image
                                                                            loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res.religion ? capitalizeFirstLetter(res.religion) : "NA"}, ${res.cast ? capitalizeFirstLetter(res.cast) : "NA"}`}
                                                                    </>
                                                                    : ""}
                                                            </li>


                                                            <li
                                                                className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                style={ListText}
                                                            >
                                                                {res?.address ?
                                                                    <>
                                                                        <Image
                                                                            loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res.address ? capitalizeFirstLetter(res.address.currentCity) : "NA"} , ${res.address ? capitalizeFirstLetter(res.address.currentCountry) : "NA"}`}
                                                                    </>
                                                                    : ""}
                                                            </li>


                                                            <li
                                                                className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                style={ListText}
                                                            >
                                                                {res?.motherTongue ?
                                                                    <>
                                                                        <Image
                                                                            loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res.motherTongue ? capitalizeFirstLetter(res.motherTongue) : "NA , NA"}  `}
                                                                    </>
                                                                    : ""}
                                                            </li>

                                                            <li
                                                                className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                style={ListText}
                                                            >
                                                                {res?.userProfessional ?
                                                                    <>
                                                                        <Image
                                                                            loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {res.userProfessional ? capitalizeFirstLetter(res.userProfessional.jobTitle) : "NA , NA"}
                                                                    </>
                                                                    : ""}
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">

                                                        <ShowMore userid={res?._id} text={res?.writeBoutYourSelf} maxLength={100} />
                                                    </div>
                                                </div>

                                                <div className="absolute right-0 mt-[-10px]">
                                                    <SendRequestBtn
                                                        userdata={res?.name}
                                                        Requeststatus={res?.friendsDetails}
                                                        RequestId={sentrequest[res._id]}
                                                        HandleRequestModal={() => HandleRequestModal(res)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {likeloading ? <></> : <>

                                            <LikeUser
                                                ActiveLike={ActiveLike}
                                                setActiveLike={setActiveLike}
                                                userId={res._id}
                                                TheUsername={res?.name}
                                                userdata={res}


                                            />
                                        </>}
                                    </div>
                                </SwiperSlide>

                            );
                        })}
                    </Swiper>

                    <div className="z-8 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]">
                        <div id="custom-next-button" className="Prevbtn rounded-r-full grid place-items-center cursor-pointer  hover:bg-[#F1F6FF]" style={{ width: "35px", height: "70.993px" }}>
                            <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />
                        </div>
                    </div>
                </div>
            </div >
            <ShareModal UserID={UserID} isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
            <RegisterAlertModal
                title={Data}
                isOpen={isRegisterModalOpen}
                onClose={CloseRegisterModal}
            />
            <ReportModal
                title={"helo"}
                isOpen={isReportModalOpen}
                onClose={CloseReportModal}
                ReportData={CurrURL}
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
    );
}

export default SampleUserProfile;
