import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';

function UserLikesbtn({ HandleShortlistUser, HandleRequestModal , RequestId, user }) {
    const [isUserLiked, setIsUserLiked] = useState(false);
    const [isUserDisliked, setIsUserDisliked] = useState(false);
    // const [isRequestSent, setisRequestSent] = useState(false);
    

    const [OnHover, SetOnHover] = useState({
        LikeHover: false,
        DislikeHover: false,
        SentRequestHover: false,
        shortlisthover: false,
    })

    // const SentRequestData = useSelector((state) => state.usersact.sentrequestdata.sentUsersdata)
   
    // useEffect(() => {
    //     const FilledSent = SentRequestData?.some(item => item?.id === user?.id)
    //     setisRequestSent(FilledSent)
    // }, [])


    return (
        <div className='mt-[20px] pb-[10px]'>
            <div className='flex space-x-[15px] justify-center'>
                <div><Image onMouseEnter={() => SetOnHover({ DislikeHover: true })} onMouseLeave={() => SetOnHover({ DislikeHover: false })} loading='lazy' alt='ignore' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                    src={
                        isUserDisliked ?
                            '/assests/gridSection/afterDislikeUser.svg'
                            : OnHover.DislikeHover ?
                                '/assests/gridSection/afterDislikeUser.svg'
                                : '/assests/dashboard/icon/ignore-icon-2.svg'
                    } /></div>
                <div>
                    <Image onMouseEnter={() => SetOnHover({ LikeHover: true })} onMouseLeave={() => SetOnHover({ LikeHover: false })} loading='lazy' alt='like' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                        src={isUserLiked
                            ? "/assests/animation/After-Like.svg"
                            : OnHover.LikeHover ?
                                "/assests/animation/After-Like.svg"
                                : '/assests/dashboard/icon/heart-icon-2.svg'} />
                </div>
                <div>
                    <Image
                        onClick={HandleShortlistUser}
                        onMouseEnter={() => SetOnHover({ shortlisthover: true })} onMouseLeave={() => SetOnHover({ shortlisthover: false })} loading='lazy' alt='like' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                        src={isUserLiked
                            ? "/assests/dashboard/icon/shortlist-after-icon.svg"
                            : OnHover.shortlisthover ?
                                "/assests/dashboard/icon/shortlist-after-icon.svg"
                                : '/assests/dashboard/icon/shortlist-before-icon.svg'} />
                </div>
                <div><Image onClick={HandleRequestModal} onMouseEnter={() => SetOnHover({ SentRequestHover: true })} onMouseLeave={() => SetOnHover({ SentRequestHover: false })} loading='lazy' alt='send' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                    src={RequestId 
                        // Pending--v2  // || isRequestSent 
                        ?
                        '/assests/dashboard/icon/send-icon-2.svg'
                        : OnHover.SentRequestHover ?
                            '/assests/dashboard/icon/send-icon-2.svg'
                            : '/assests/gridSection/Grid-before-sent.svg'} /></div>
            </div>
        </div>
    )
}

export default UserLikesbtn