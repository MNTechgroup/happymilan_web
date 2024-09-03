import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, TwitterIcon, WhatsappIcon, WhatsappShareButton } from "next-share";
import Image from "next/image";
import React, { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

function ShareModal({ isOpen, onClose, data, UserID }) {
  if (!isOpen) return null;
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const SocialText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };
  const Btntext = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const [buttonText, setButtonText] = useState(false);

  const handleCopy = () => {
    console.log(data);
    // Copy the value of the input field to the clipboard
    navigator.clipboard
      .writeText(data)
      .then(() => {
        // Change the button text to indicate the copy action
        // setButtonText('Copied!');
        setButtonText(true);
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  const NewTabOpen = () => {
    // const baseUrl = window.location.origin; // This will automatically take care of local and hosted environments
    const baseUrl = window.location.origin; // This will automatically take care of local and hosted environments
    const url = `${baseUrl}/longterm/dashboard/${UserID}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[80%] lg:h-[359px]">
          <div className="flex">
            <div className="lg:w-[500px] w-full items-center flex  justify-between">
              <div className="place-items-center">
                <h1
                  className=" relative 2xl:left-[10px] xl:left-[8px] text-[14px] text-[black]"
                  style={TitleText}
                >
                  {"Share with Friends"}
                </h1>
              </div>
              <div>
                <Image
                  width={24}
                  height={24}
                  alt="close-icon"
                  className="cursor-pointer"
                  onClick={onClose}
                  loading='lazy'
                  src="/assests/social/close.svg"
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <div className="flex items-center justify-center">
              <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[520px] gap-y-[20px] gap-x-[30px]">
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <WhatsappShareButton url={data} title="Check out this profile!">
                      <WhatsappIcon size={40} style={{ borderRadius: "50%" }}></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Whatsapp
                    </label>
                  </div>

                  {/* <Image width={55} height={55} src="/assests/social/whatsapp.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">

                    <Image
                      width={40}
                      height={40}
                      loading='lazy'
                      src="/assests/social/icons8-messenger.svg"
                    />
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Messenger
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/tweeter.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <FacebookShareButton url={data} title="Check out this profile!">
                      <FacebookIcon size={40} style={{ borderRadius: "50%" }}></FacebookIcon>
                    </FacebookShareButton>
                    {/* <Image
                      width={40}
                      height={40}
                      loading='lazy'
                      src="/assests/social/icons8-facebook.svg"
                    /> */}
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Facebook
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/facebook.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <Image
                      width={35}
                      height={35}
                      loading='lazy'
                      src="/assests/social/icons8-gmail.svg"
                    />
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Gmail
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <TwitterShareButton url={`https://happymilanweb.web.app/`}>
                      <Image
                        width={35}
                        height={35}
                        loading='lazy'
                        src="/assests/social/icons8-twitterx.svg"
                      />
                    </TwitterShareButton>
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      twitterx
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[35px]">
            <div className="w-full  lg:w-[500px] grid place-items-center">
              <input
                value={data}
                type="text"
                className="outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[70px] pl-[10px]  h-[50px]"
              />
              <button
                id="grad-button"
                onClick={handleCopy}
                style={TitleText}
                className="text-[14px] lg:relative  top-[-50px] left-[220px] w-[66px] text-[#fff] bg-[#0F52BA] rounded-[8px] h-[50px] grid place-items-center"
              >
                {!buttonText ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <div

                      className="bg-custom-gradient w-[50px] h-[40px] absolute top-[-45px] flex items-center justify-center text-white rounded"
                    >
                      <p className="text-[10px]"> Copied ! </p>
                    </div>
                    <div
                      className="absolute top-[-12px] w-[10px] h-[10px] bg-[black]"
                      id="Arrow-bottom"
                    ></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                      <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="group grid place-items-center mt-[-20px]">
            <div>
              <button
                style={Btntext}
                // onClick={() => window.open(data, "_blank")}
                onClick={NewTabOpen}
                className="w-[500px] h-[50px] border-[1px] group-hover:border-[black] duration-150 border-[#B9BABC] rounded-[10px] bg-[white] outline-none group-hover:text-[#3c41b5]"
              >
                Visit page (opens in new tab)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareModal;