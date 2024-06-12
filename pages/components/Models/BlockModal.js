import { Dialog, DialogContent } from "@mui/material";
import React  from "react";

function BlockModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;


  const LogoutModalText = {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30px"
  }

  const HandleBlockUser = () => {
    alert("Open")
    onClose()
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
            <p style={LogoutModalText}> Are you sure you want to Block This User?</p>
          </div>
        </DialogContent>
        <div className="flex justify-evenly p-[20px] mb-[20px]">
          <div className="relative right-[-10px]">
            <button onClick={HandleBlockUser} name={1} id="grad-button" className="rounded-[10px] w-[122px] h-[50px]">Yes</button>
          </div>
          <div className="relative left-[-10px]">
            <button onClick={HandleBlockUser} name={0} className="border-[black] border-[1px] rounded-[10px] w-[122px] h-[50px]">No</button>
          </div>
        </div>
      </Dialog>


    </>
  );
}

export default BlockModal;