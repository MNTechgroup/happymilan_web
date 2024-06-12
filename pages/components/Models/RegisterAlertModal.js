import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function RegisterAlertModal({ isOpen, onClose, title }) {
  const router = useRouter();

  if (!isOpen) return null;
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-[585px] md:h-[80%] lg:h-[405px]">
          <div className="flex justify-center">
            <div className="lg:w-[585px] w-full items-center flex  justify-end">
              <div>
                <Image
                  width={24}
                  height={24}
                  alt="close-icon"
                  className="cursor-pointer"
                  onClick={onClose}
                  src="/assests/social/close.svg"
                />
              </div>
            </div>
          </div>
          <div className="mt-[0px] flex justify-center flex-col">
            <div className="text-center">
              <h1 style={TitleText} className="text-[18px]">
                Please complete your profile
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <Image
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
                src="/assests/animation/Register-animation.gif"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <p style={TitleText} className=" text-[14px]">
              A comprehensive profile enables us to provide precise match
              recommendations, ensuring that we deliver tailored results to you.
            </p>
          </div>
          <div className="flex justify-center mt-[35px]">
            <button
              id="grad-btn"
              className="text-[white] rounded-[10px] w-[150px] h-[50px]"
              onClick={() => router.push("/register")}
            >
              Let’s do it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterAlertModal;