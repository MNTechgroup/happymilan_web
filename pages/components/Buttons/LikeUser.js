import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateLikeUser, UnlikeTheUser } from "../../../store/actions/GetingAlluser";
import { Getlikeduserdata } from "../../../store/actions/UsersAction";
import { getCookie } from "cookies-next";
import { useSocket } from "../../../ContextProvider/SocketContext";

const LikeUser = ({ ActiveLike, setActiveLike, userId }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.usersact.LikedUsersData);

  const [isUserLiked, setIsUserLiked] = useState(false);
  const [isUserDisliked, setIsUserDisliked] = useState(false);

  useEffect(() => {
    if (data?.results) {
      const liked = data.results.some(item => item.likedUserId === userId && item.isLike);
      const disliked = data.results.some(item => item.likedUserId === userId && !item.isLike);
      setIsUserLiked(liked);
      setIsUserDisliked(disliked);
    }
  }, [data, userId]);

  const currentUserId = getCookie("userid")
  const socket = useSocket()


  const handleLikeUser = () => {
    if (!isUserLiked) {
      // dispatch(CreateLikeUser(userId, true));
      socket?.emit('createUserLike', {
        "userId": currentUserId,
        "likedUserId": userId
    })
      dispatch(CreateLikeUser({ userId: userId, status: true }));

      setIsUserLiked(true);
      setIsUserDisliked(false);
      setTimeout(() => {
        dispatch(Getlikeduserdata());
        console.log("Called Dispatch....")
      }, 3000);
    }
    else {
      alert("You already Liked this User");
    }

  };

  const handleDislikeUser = () => {
    if (!isUserDisliked) {

      const res = data.results.find((item) => item.likedUserId === userId)
      
      socket?.emit('updateUserLike', {
        "userId": currentUserId,
        "likedUserId": res?.likedUserId,
        "isLike": false
    })

      dispatch(UnlikeTheUser(res))
      // dispatch(CreateLikeUser(userId, false));
      setIsUserLiked(false);
      setIsUserDisliked(true);


    }
  };

  const [HoverAnimation, SetHoverAnimation] = useState(false)
  const [DislikeHover , SetDislikeHover] = useState(false)

  return (
    <div className="flex pb-[20px] space-x-[20px] justify-center pt-[10px]">
      {isUserDisliked ?
        <Image onMouseEnter={()=>SetDislikeHover(true)} onMouseLeave={()=>SetDislikeHover(false)} loading="lazy" width={50} height={50} alt="dislike" onClick={handleDislikeUser} src="/assests/animation/filled-dislike.svg" />
        : DislikeHover ?
          <Image onMouseEnter={()=>SetDislikeHover(true)} onMouseLeave={()=>SetDislikeHover(false)} loading="lazy" width={50} height={50} alt="dislike" onClick={handleDislikeUser} src="/assests/animation/filled-dislike.svg" />
          :
          <svg
           onMouseEnter={()=>SetDislikeHover(true)} onMouseLeave={()=>SetDislikeHover(false)}
            width="50"
            height="50"
            viewBox="0 0 40 40"
            id="ignore-hover"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleDislikeUser}
          >
            <g id="Group 1509">
              <circle
                id="Ellipse 53"
                cx="20"
                cy="20"
                r="19.5"
                stroke="url(#paint0_linear_4122_346)"
              />
              <path
                id="Vector"
                d="M22.6134 11.3336H14.9334C14.2251 11.3336 13.6193 11.7603 13.3633 12.3747L10.7862 18.3907C10.7094 18.587 10.6667 18.7918 10.6667 19.0136V20.7203C10.6667 21.659 11.4347 22.427 12.3734 22.427H17.7579L16.9473 26.3267L16.9217 26.5998C16.9217 26.9496 17.0667 27.2739 17.2971 27.5043L18.2017 28.4003L23.8251 22.7768C24.1323 22.4696 24.3201 22.043 24.3201 21.5736V13.0403C24.3201 12.1016 23.5521 11.3336 22.6134 11.3336ZM22.6134 21.5736L18.9099 25.2771L20.0534 20.7203H12.3734V19.0136L14.9334 13.0403H22.6134V21.5736ZM26.0267 11.3336H29.4401V21.5736H26.0267V11.3336Z"
                fill="url(#paint1_linear_4122_346)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_4122_346"
                x1="2.5"
                y1="-3.5"
                x2="40"
                y2="43.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0F52BA" />
                <stop offset="0.979167" stopColor="#8225AF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4122_346"
                x1="12"
                y1="9"
                x2="26"
                y2="31.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0F52BA" />
                <stop offset="1" stopColor="#8126AF" />
              </linearGradient>
            </defs>

          </svg>
      }
      <div>
        <Image
          onMouseEnter={() => SetHoverAnimation(true)}
          onMouseLeave={() => SetHoverAnimation(false)}
          width={51}
          height={50}
          alt="like"
          className="cursor-pointer"
          loading="lazy"
          onClick={isUserLiked ? () => setActiveLike(false) : handleLikeUser}
          // src={isUserLiked ? "/assests/animation/After-Like.svg" : "/assests/animation/before-Like.svg"}
          src={
            isUserLiked
              ? "/assests/animation/After-Like.svg"
              : HoverAnimation
                ? "/assests/animation/After-Like.svg"
                : "/assests/animation/before-Like.svg"
          }
        />
      </div>
    </div>
  );
};

export default LikeUser;
