import Image from "next/image";
import React from "react";

function ResetPasswordSuccess({ isOpen, onClose, title, HandleExlopre }) {
  const Text = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0px",
    textAlign: "center",
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="grid place-items-center relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-[505px] md:h-[80%] lg:h-[281px]">
          <div className="w-[427px] flex flex-col items-center justify-center space-y-[25px]">
            <div className="">
              <Image
                height={38}
                width={38}
                loading='lazy'
                alt="right-icon"
                src="/assests/common/resetpassword-Modal.svg"
              />
            </div>

            <div className="text-center">
              <h1 style={Text} className="w-[278px]">
                your password has been changed successfully
              </h1>
            </div>
            <div className="text-center">
              <button
                id="grad-btn"
                className="w-[172px] h-[50px] text-[white] rounded-[10px]"
                onClick={HandleExlopre}
              >
                Back to login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordSuccess;