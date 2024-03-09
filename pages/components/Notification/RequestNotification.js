import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptRequest, getAcceptedRequestData, getFriendsList, rejectRequest } from '../../../store/actions/UsersAction'
import { getCookie } from 'cookies-next'
import RequestCard from './RequestCard'
import FriendRequestCard from './FriendrequestCard'

function RequestNotification() {
    const Username = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Activity = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const dispatch = useDispatch();

    const data = useSelector((state) => state.usersact.requestdata)
    const FriendeLists = useSelector((state) => state.usersact)

    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();

    const HanldeAccept = (res) => {

        dispatch(acceptRequest(res))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());
            dispatch(getAcceptedRequestData());
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


    const [isCurrentUser, setisCurrentUSer] = useState("")


    useEffect(() => {
        dispatch(getFriendsList())
        dispatch(getAcceptedRequestData());
        setisCurrentUSer(getCookie("userid"))

    }, [dispatch])



    return (
        <>

            <div className={` h-full bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}>
                <div className="overflow-y-scroll h-full pb-[100px] w-full grid place-items-center">
                    <div className="fixed top-0 bg-[#FFF] flex flex-col gap-y-[25px]">
                        <h1 style={Text2} className=" pt-[25px]  text-[#000]">Latest Notification</h1>
                        <div className=" h-[1px] w-[286px] bg-[#ECECEC]"></div>
                    </div>
                    <div className="mr-[10px] flex flex-col space-y-[32px] pt-[80px]">
                        <div></div>

                        {data && data.data && data.data.map((res, index) => {


                            return (
                                <>
                                    {/* <div className="w-[286px] flex flex-col space-y-[20px]">
                                        <div className=" flex pl-[6px]  items-center">
                                            <div className="">
                                                <Image width={47} height={47} src="/assests/dashboard/request/req-1.svg" />
                                            </div>
                                            <div className="pl-[40px]">
                                                <h1 style={Username}>{res.user.name}</h1>
                                                <h1 style={Activity} >Sent you a following request</h1>
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative top-[-10px]">
                                            <div className="w-[100px] flex space-x-[20px]">
                                                <Image className='cursor-pointer' onClick={() => HanldeReject(res)} width={28} height={28} src="/assests/dashboard/request/ignore-req-icon.svg" />
                                                <Image className='cursor-pointer' onClick={() => HanldeAccept(res)} width={28} height={28} src="/assests/dashboard/request/accept-req-icon.svg" />
                                            </div>
                                        </div>
                                    </div> */}

                                    <RequestCard
                                        key={index}
                                        user={res.user}
                                        onAccept={() => HanldeAccept(res)}
                                        onReject={() => HanldeReject(res)}
                                    />
                                </>
                            )

                        })}

                        {/* <div className="w-[286px] flex flex-col space-y-[20px]"> */}

                        {
                            FriendeLists.acceptedrequestdata?.data?.data.map((response) => {

                                return (
                                    <>
                                        <FriendRequestCard
                                            key={response.id}
                                            res={response}
                                            user={response.user}
                                            friend={response.friend}
                                            isCurrentUser={isCurrentUser} />

                                    </>
                                )

                            })
                        }

                        {/* </div> */}

                        {/* <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="pl-[6px] flex items-center">
                                <div>
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-3.svg" />
                                </div>
                                <div className="pl-[38px]">
                                    <h1 style={Username}>Ronit Kumar</h1>
                                    <h1 style={Activity} >Likes you!</h1>
                                </div>
                            </div>

                        </div> */}
                        {/* Likes You Request  */}

                        {/* <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="pl-[6px] flex items-center">
                                <div>
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-4.svg" />
                                </div>
                                <div className="pl-[38px]">
                                    <h1 style={Username}>Priyal Mehta</h1>
                                    <h1 style={Activity} >Likes you!</h1>
                                </div>
                            </div>

                        </div> */}

                        {/* <div className="w-[286px] flex flex-col space-y-[20px]">
                            <div className="flex pl-[6px]   items-center">
                                <div className="">
                                    <Image width={47} height={47} src="/assests/dashboard/request/req-5.svg" />
                                </div>
                                <div className="pl-[40px]">
                                    <h1 style={Username}>Rihan Shah</h1>
                                    <h1 style={Activity} >Sent you a following request</h1>
                                </div>
                            </div>
                            <div className="flex justify-center relative top-[-10px]">
                                <div className="w-[100px] flex space-x-[20px]">
                                    <Image onClick={() => alert("1")} width={28} height={28} src="/assests/dashboard/request/ignore-req-icon.svg" />
                                    <Image onClick={() => alert("2")} width={28} height={28} src="/assests/dashboard/request/accept-req-icon.svg" />
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div >

        </>
    )
}

export default RequestNotification