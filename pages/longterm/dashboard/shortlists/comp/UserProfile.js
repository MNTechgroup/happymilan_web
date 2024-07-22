import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchshortlistdata } from '../../../../../store/reducers/GetShortlistList';
import { RemoveShortlist } from '../../../../../store/actions/GetingAlluser';
import { sendRequest } from '../../../../../store/actions/UsersAction';
import dynamic from 'next/dynamic';
// Dynamic imports
const SendRequestBtn = dynamic(() => import('../../../../_components/common/Buttons/SendRequestBtn'), { ssr: false });
const ShareModal = dynamic(() => import('../../../../_components/Model/Models/ShareModal'), { ssr: false });
const ProfileMenu = dynamic(() => import('../../../../_components/Model/popover/MenuPop'), { ssr: false });
const ReportModal = dynamic(() => import('../../../../_components/Model/Models/ReportModal'), { ssr: false });
const BlockUserModal = dynamic(() => import("../../../../_components/Model/Models/BlockModal"), { ssr: false });



function UserProfile() {



    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [CurrURL, SetCurURL] = useState("");


    const openBlockModal = () => {
        setisBlockModalOpen(true);
    }
    const closeBlockModal = () => { setisBlockModalOpen(false) }


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



    const [sentrequest, setsentRequest] = useState({});

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


    const likeloading = useSelector(
        (state) => state.usersact.LikedUsersData.likeloading
    );

    const [ActiveLike, setActiveLike] = useState(false);

    //For TextOverflow

    const MAX_CHARACTERS = 100; // Define your maximum character limit

    const handleTextOverflow = (text) => {
        if (text.length > MAX_CHARACTERS) {
            return text.slice(0, MAX_CHARACTERS) + "..."; // Truncate the text if it exceeds the limit
        } else {
            return text; // Return the original text if it doesn't exceed the limit
        }
    };


    //For Report 

    const [isReportModalOpen, setisReportModalOpen] = useState(false);

    const OpenReportModal = () => {
        setisReportModalOpen(true);
        setAnchorEl(null);
    };

    const CloseReportModal = () => {
        setisReportModalOpen(false);
    };




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

        const shortlistdata = data.find(data => data?.shortlistId === res?.id)
        dispatch(RemoveShortlist(shortlistdata?.id))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(fetchshortlistdata())
        }, 800);
        console.log(shortlistdata?.id)

    }


    useEffect(() => {

        dispatch(fetchshortlistdata())
    }, [])


    const HandleRequestModal = (res) => {
        dispatch(sendRequest(res?.id))

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

                                shortlistUserdata.map((res, index) => {

                                    return (
                                        <>
                                            <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                                <div
                                                    style={Box}
                                                    className={`bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}
                                                >
                                                    <div className="w-[350px]">
                                                        <div className="p-[15px] w-full ">
                                                            {res?.userProfilePic &&
                                                                res?.userProfilePic.length > 0 ? (
                                                                <Swiper
                                                                    pagination={{ clickable: true }}
                                                                    modules={[Pagination]}
                                                                    className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                                >
                                                                    {res?.userProfilePic
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
                                                                            <Image loading="lazy"
                                                                                alt="not-Found"
                                                                                width={34}
                                                                                height={34}
                                                                                src={"/assests/dashboard/icon/NotFound-img.svg"}
                                                                            />
                                                                            <h1
                                                                                className="inline"
                                                                                style={ImageNotFoundText}
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
                                                                {/* <Link href={`/longterm/dashboard/${res.id}`}><h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.name}</h1></Link> */}
                                                                <h1
                                                                    onClick={() => HandlePushUser(res.id)}
                                                                    className="2xl:text-[20px] xl:text-[15px] text-[15px] cursor-pointer text-[#000] dark:text-[#FFF]"
                                                                    style={ProfileName}
                                                                >
                                                                    {res?.name}
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
                                                                        onClick={() => HandleRemoveShortlist(res)}
                                                                    >
                                                                        <div className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
                                                                            <Image loading="lazy"
                                                                                width={15}
                                                                                height={14}
                                                                                alt="star"
                                                                                src={"/assests/Black/filled-star.svg"}
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
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`'32,5'3`}
                                                                    </li>
                                                                    <li
                                                                        className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                        style={ListText}
                                                                    >
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {res?.maritalStatus ? res?.maritalStatus : "NA , NA"}
                                                                    </li>
                                                                    <li
                                                                        className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                        style={ListText}
                                                                    >
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res?.religion ? res?.religion : "NA"}, ${res?.cast ? res?.cast : "NA"}`}
                                                                    </li>
                                                                    <li
                                                                        className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                        style={ListText}
                                                                    >
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res?.address ? res?.address?.currentCity : "NA"} , ${res?.address ? res?.address?.currentCountry : "NA"}`}
                                                                    </li>
                                                                    <li
                                                                        className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                        style={ListText}
                                                                    >
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {`${res?.motherTongue ? res?.motherTongue : "NA , NA"}  `}
                                                                    </li>

                                                                    <li
                                                                        className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                                        style={ListText}
                                                                    >
                                                                        <Image loading="lazy"
                                                                            alt="mark"
                                                                            width={15}
                                                                            height={14}
                                                                            src={"/assests/Black/RightTick.svg"}
                                                                            className="inline pr-[5px]"
                                                                        />
                                                                        {res?.userProfessional ? res?.userProfessional?.jobTitle : "NA , NA"}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">
                                                                <p
                                                                    style={Text3}
                                                                    className="text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]"
                                                                >
                                                                    {handleTextOverflow(
                                                                        res?.writeBoutYourSelf
                                                                            ? res?.writeBoutYourSelf
                                                                            : "NA",
                                                                    )}
                                                                    {res?.writeBoutYourSelf &&
                                                                        res?.writeBoutYourSelf.length >
                                                                        MAX_CHARACTERS && (
                                                                            <span className="text-[#0F52BA]">
                                                                                {" "}
                                                                                more{" "}
                                                                            </span>
                                                                        )}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="absolute right-0 mt-[-10px]">
                                                            <SendRequestBtn
                                                                RequestId={sentrequest[res?.id]}
                                                                HandleRequestModal={() => HandleRequestModal(res)}
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


                </>
                :
                <>

                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image loading="lazy" alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>

                </>
            }


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

export default UserProfile