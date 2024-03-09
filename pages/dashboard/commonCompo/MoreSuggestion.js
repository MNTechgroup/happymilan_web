import Image from 'next/image'
import React from 'react'
function MoreSuggestion() {

    const Text7 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text8 = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const RequestBox = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    } 


    return (
        <>
            <div className='p-[20px] 2xl:w-[300px] xl:w-[280px] h-[367px] bg-[#FFF]' style={RequestBox}>

                <h1 style={Text8} className=' text-[#000]'>More Suggestion</h1>

                <div className='pt-[25px]'>

                    <div>
                        <ul className='flex flex-col space-y-[22px]'>
                            <li>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-[20px]'>
                                        <div>
                                        <Image width={42} height={42} alt='request-1' src='/assests/pic/Request-1.svg' />
                                        </div>
                                        <div className=''>
                                            <h1 style={Text7}>Jeet Shashtri</h1>
                                            <h1 className='text-[#000]' style={Text8}>M, 29, IT Expert</h1>
                                            <h1 className="text-[#AEAEAE]" style={Text8}>Junagdh, India</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <Image alt='suggestion' width={24} height={24} src="/assests/common/suggestion-mark-icon.svg" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-[20px]'>
                                        <div>
                                        <Image width={42} height={42} alt='request-2' src='/assests/pic/request-2.svg' className='' />
                                        <Image width={18} height={18} alt='lock' src='/assests/dashboard/icon/lock-icon.svg' className='absolute mt-[-30px] ml-[12px]' />
                                        </div>
                                        <div className=''>
                                            <h1 style={Text7}>Not Visible</h1>
                                            <h1 className='text-[#000]' style={Text8}>M, 34, Business Expert</h1>
                                            <h1 className="text-[#AEAEAE]" style={Text8}>Surat, India</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <Image alt='suggestion-mark' width={24} height={24} src="/assests/common/suggestion-mark-icon.svg" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-[20px]'>
                                        <div className=''>
                                        <Image width={42} height={42} alt='request-3' src='/assests/pic/request-3.svg' className='' />
                                        </div>
                                        <div className=''>
                                            <h1 style={Text7}>Shahil Mukherjee</h1>
                                            <h1 className='text-[#000]' style={Text8}> M, 29, Animator</h1>
                                            <h1 className="text-[#AEAEAE]" style={Text8}>Ahmedabad, India</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <Image alt='suggestion-mark' width={24} height={24} src="/assests/common/suggestion-mark-icon.svg" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <button className=' mt-[20px] w-[100%] h-[40px] rounded-[10px] bg-[#F5F5F5] text-[#000]'>View All</button>
                </div>
            </div>
        </>
    )
}

export default MoreSuggestion