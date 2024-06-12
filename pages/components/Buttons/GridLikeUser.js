import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CreateLikeUser, UnlikeTheUser } from '../../../store/actions/GetingAlluser';
import { useDispatch, useSelector } from 'react-redux';
import { FetchGriduserdata, Getlikeduserdata, GetrecentuserprofileData, sendRequest } from '../../../store/actions/UsersAction';
import { Dialog } from '@mui/material';
import { useSocket } from '../../../ContextProvider/SocketContext';
import { getCookie } from 'cookies-next';

function GridLikeUser({ currentPage, from, user, RequestId, HandleRequestModal }) {


    const { data, loading } = useSelector((state) => state.usersact.LikedUsersData);
    const [isUserLiked, setIsUserLiked] = useState(false);
    const [isUserDisliked, setIsUserDisliked] = useState(false);
    const [isRequestSent, setisRequestSent] = useState(false);




    const SentRequestData = useSelector((state) => state.usersact.sentrequestdata.sentUsersdata)

    useEffect(() => {
        const FilledSent = SentRequestData?.some(item => item?.id === user?.id)
        setisRequestSent(FilledSent)

        if (data?.results) {
            const liked = data.results.some(item => item.likedUserId === user?.id && item.isLike);
            const disliked = data.results.some(item => item.likedUserId === user?.id && !item.isLike);
            setIsUserLiked(liked);
            setIsUserDisliked(disliked)
        }


    }, [data, currentPage]);


    const dispatch = useDispatch();

    // const SentRequestData = useSelector((state) => state.usersact.sentrequestdata)
    // useEffect(() => {
    //     dispatch(getSentrequestData())
    // }, [])

    const socket = useSocket()
    const currentUserId = getCookie("userid")

    const handleLikeClick = () => {
        setIsUserLiked(!isUserLiked); // Toggle like state
        if (!isUserLiked) {
            console.log({
                "userId": currentUserId,
                "likedUserId": user?.id
            })
            socket?.emit('createUserLike', {
                "userId": currentUserId,
                "likedUserId": user?.id
            })
            dispatch(CreateLikeUser({ userId: user?.id, status: true }));
            setTimeout(() => {
                dispatch(Getlikeduserdata());
                if (from == "GridProfile") {
                    dispatch(FetchGriduserdata(currentPage))
                } else { dispatch(GetrecentuserprofileData()) }
                console.log("Called Dispatch....")
            }, 3000);
            setIsUserDisliked(false);
        } else {
            alert("Already Liked...")
        }

    }

    const HandleDislikeUser = () => {
        setIsUserLiked(false)
        setIsUserDisliked(true)
    }





    const handleDislikeUser = () => {
        if (!isUserDisliked) {

            const res = data.results.find((item) => item.likedUserId === user?.id)
            console.log("🚀 ~ handleDislikeUser ~ res:", res)
            console.log("obj :", {
                "userId": currentUserId,
                "likedUserId": res?.likedUserId,
                "isLike": false
            })
            socket?.emit('updateUserLike', {
                "userId": currentUserId,
                "likedUserId": res?.likedUserId,
                "isLike": false
            })
            // dispatch(UnlikeTheUser(res))
            // dispatch(CreateLikeUser({ userId: user?.id, status: false }));
            setTimeout(() => {
                dispatch(Getlikeduserdata());
                if (from == "GridProfile") {
                    dispatch(FetchGriduserdata(currentPage))
                } else { dispatch(GetrecentuserprofileData()) }
                console.log("Called Dispatch....")
            }, 3000);
            // dispatch(CreateLikeUser(userId, false));
            setIsUserLiked(false);
            setIsUserDisliked(true);


        }
    };

    const [OnHover, SetOnHover] = useState({
        LikeHover: false,
        DislikeHover: false,
        SentRequestHover: false
    })


    return (
        <>
            <div className='flex space-x-[15px] justify-center'>
                <div><Image onMouseEnter={() => SetOnHover({ DislikeHover: true })} onMouseLeave={() => SetOnHover({ DislikeHover: false })} loading='lazy' onClick={handleDislikeUser} alt='ignore' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                    src={
                        isUserDisliked ?
                            '/assests/gridSection/afterDislikeUser.svg'
                            : OnHover.DislikeHover ?
                                '/assests/gridSection/afterDislikeUser.svg'
                                : '/assests/dashboard/icon/ignore-icon-2.svg'
                    } /></div>
                <div>
                    <Image onMouseEnter={() => SetOnHover({ LikeHover: true })} onMouseLeave={() => SetOnHover({ LikeHover: false })} loading='lazy' onClick={handleLikeClick} alt='like' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                        src={isUserLiked
                            ? "/assests/animation/After-Like.svg"
                            : OnHover.LikeHover ?
                                "/assests/animation/After-Like.svg"
                                : '/assests/dashboard/icon/heart-icon-2.svg'} />
                </div>
                <div><Image onMouseEnter={() => SetOnHover({ SentRequestHover: true })} onMouseLeave={() => SetOnHover({ SentRequestHover: false })} loading='lazy' onClick={HandleRequestModal} alt='send' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                    src={RequestId || isRequestSent ?
                        '/assests/dashboard/icon/send-icon-2.svg'
                        : OnHover.SentRequestHover ?
                            '/assests/dashboard/icon/send-icon-2.svg'
                            : '/assests/gridSection/Grid-before-sent.svg'} /></div>
            </div>


        </>


    )
}

export default GridLikeUser