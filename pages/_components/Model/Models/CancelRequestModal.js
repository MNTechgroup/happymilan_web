import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Cancelfriendrequest, getAcceptedRequestData, Sentblockrequest } from "../../../../store/actions/UsersAction";
import { getCookie } from "cookies-next";

function CancelRequestModal({ isOpen, onClose, data, title }) {
    if (!isOpen) return null;


    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }

    const dispatch = useDispatch();

    const CurrentUser = getCookie("userid")

    const HandleBlockUser = (e) => {
        if (e.target.name == 1) {

            dispatch(Cancelfriendrequest(data?.currUser, data?.OtherUser))
            onClose();
            setTimeout(() => {
                dispatch(getAcceptedRequestData())
            }, 800);

        } else {
            onClose();
        }
    }

    return (
        <>

            <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className=""
            >

                <DialogContent className="text-center w-[500px]  mt-[20px]">
                    <div id="alert-dialog-description">
                        <p style={LogoutModalText}>Are you sure you want to Unfriend This User?</p>
                    </div>
                </DialogContent>
                <div className="flex justify-evenly p-[20px] mb-[20px]">
                    <div className="relative right-[-10px]">
                        <button onClick={HandleBlockUser} name={1} id="grad-button" className="rounded-[23px] w-[122px] h-[50px]">Yes</button>
                    </div>
                    <div className="relative left-[-10px]">
                        <button onClick={HandleBlockUser} name={0} className="border-[black] border-[1px]  hover:bg-[#EFF5FF] rounded-[23px] w-[122px] h-[50px]">No</button>
                    </div>
                </div>
            </Dialog>


        </>
    );
}

export default CancelRequestModal;