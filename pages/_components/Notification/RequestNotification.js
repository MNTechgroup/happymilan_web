import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptRequest,
  getAcceptedRequestData,
  getFriendsList,
  rejectRequest,
} from "../../../store/actions/UsersAction";
import { getCookie } from "cookies-next";
import RequestCard from "./RequestCard";
import FriendRequestCard from "./FriendrequestCard";
import { Skeleton } from "@mui/material";

function RequestNotification() {
  const Text2 = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };


  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.usersact.requestdata);
  const FriendeLists = useSelector(
    (state) => state.usersact.acceptedrequestdata,
  );

  const [openShortlistModal, setopenShortlistModal] = React.useState(false);

  const [shortlistText, setshortlistText] = useState();

  const HanldeAccept = (res) => {
    dispatch(acceptRequest(res));
    setshortlistText("Shortlisted has been removed");
    setopenShortlistModal(true);
    setTimeout(() => {
      setopenShortlistModal(false);
      dispatch(getFriendsList());
      dispatch(getAcceptedRequestData());
    }, 800);
  };

  const HanldeReject = (res) => {
    console.log("🚀 ~ HanldeReject ~ res:", res);
    dispatch(rejectRequest(res));

    setshortlistText("Shortlisted has been removed");
    setopenShortlistModal(true);
    setTimeout(() => {
      setopenShortlistModal(false);
      dispatch(getFriendsList());
    }, 800);
  };

  const [isCurrentUser, setisCurrentUSer] = useState("");

  useEffect(() => {
    dispatch(getFriendsList());
    dispatch(getAcceptedRequestData());
    setisCurrentUSer(getCookie("userid"));
  }, [dispatch]);

  return (
    <>
      <div
        className={` h-full dark:bg-[#242526] bg-[#FFF] 2xl:w-[340px] w-[350px] xl:w-[300px] `}
      >
        <div
          id="sidebarScroll"
          className="overflow-y-scroll h-full pb-[100px] w-full grid place-items-center"
        >
          <div className="fixed top-0 dark:bg-[#242526] bg-[#FFF] flex flex-col gap-y-[25px]">
            <h1 style={Text2} className=" pt-[25px] dark:text-[#FFF] text-[#000]">
              Latest Notification
            </h1>
            <div className=" h-[1px] w-[286px] bg-[#ECECEC]"></div>
          </div>
          <div className="mr-[10px] flex flex-col space-y-[32px] pt-[80px]">
            <div></div>
            {loading ? (
              <div className="flex pl-[6px]  items-center">
                <div>
                  <Skeleton variant="circular" width={45} height={45} />
                </div>
                <div className="pl-[20px]">
                  <Skeleton variant="text" width={100} height={20} />
                  <Skeleton variant="text" width={200} height={20} />
                </div>
              </div>
            ) : (
              data &&
              data.data &&
              data?.data?.map((res, index) => (
                <RequestCard
                  key={index}
                  user={res?.user}
                  onAccept={() => HanldeAccept(res)}
                  onReject={() => HanldeReject(res)}
                  loadingdata={loading}
                />
              ))
            )}

            {FriendeLists?.acceptedUsers?.map((response) => {
              return (
                <>
                  <FriendRequestCard
                    key={response?.id}
                    res={response}
                    loading={FriendeLists.loading}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestNotification;
