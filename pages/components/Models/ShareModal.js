import Image from 'next/image'
import React from 'react'

function ShareModal({ isOpen, onClose , data }) {

    if (!isOpen) return null;
        const TitleText = {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[80%] lg:h-[259px]">
                    <div className='flex'>
                        <div className="lg:w-[445px] w-full items-center flex  justify-between">
                            <div className="place-items-center">
                                <h1 className=" relative 2xl:left-[10px] xl:left-[8px] text-[14px] text-[black]" style={TitleText}>{data}</h1>
                            </div>
                            <div>
                                <Image width={24} height={24} alt='close-icon' className="cursor-pointer" onClick={onClose} src="/assests/social/close.svg" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px]'>

                        <div className="flex items-center justify-center">
                            <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[456px] gap-y-[20px] gap-x-[40px]">
                                <div className="grid place-items-center">
                                    <Image width={55} height={55} src="/assests/social/whatsapp.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image width={55} height={55} src="/assests/social/tweeter.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image width={55} height={55} src="/assests/social/facebook.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span>
                                </div>
                                <div className="grid place-items-center">
                                    <Image width={55} height={55} src="/assests/social/google.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Email</span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-center mt-[20px]">

                        <div className="w-full  lg:w-[456px] grid place-items-center">
                            <input type="text" className="outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[70px] pl-[10px]  h-[50px]" />
                            <button style={TitleText} className="text-[14px] lg:relative  top-[-50px] left-[200px] w-[66px] text-[#fff] bg-[#0F52BA] rounded-[8px] h-[50px]">Copy</button>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareModal