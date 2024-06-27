import React from 'react'
function Plans() {

    const TextHeading = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const btnText = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    //     color: #8F8F8F;
    // font-family: Poppins;
    // font-size: 14px;
    // font-style: normal;
    // font-weight: 400;
    // line-height: normal;

    const Text3 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const Text5 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }




    // In this menu, you'll see the plan you've purchased and the payment method used for the purchase.
    return (
        <>
            <div className="">
                <div className="flex mt-[-17px]">

                    <h1 id="setting-text-grad" className="text-[15px] xl:text-[16px]  ml-[0px]">Plan Details</h1>
                </div>
                <div className="w-[500px] lg:w-[640px] xl:w-[700px]">
                    <h1 style={TextHeading} className=" mt-[20px]">
                        In this menu, you'll see the plan you've purchased and the payment method used for the purchase.
                    </h1>
                </div>
                <div className='mt-[23px]'>
                    <div className='w-[700px] h-[536px] rounded-[14px] border-[1px] border-[#E3E3E3]'>
                        <div className='flex space-y-[23px]  space-x-[95px] pl-[38px] w-[100%] h-[98px]' id='PlansDiv'>
                            <div className='mt-[23px]'>
                                <ul className='space-y-[6px]'>
                                    <li style={Text1}>
                                        You’re Current Plan
                                    </li>
                                    <li id='seting-plans-gradient-text'>
                                        Silver - One Month Plan
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-[5px]'>
                                    <li style={Text2}>You paid</li>
                                    <li style={Text3}>INR 599.00</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className='flex  space-y-[23px]  space-x-[95px] pl-[38px]'>
                            <div className='mt-[23px]'>
                                <ul>
                                    <li>
                                        <p style={Text4}>Date of Purchase</p>
                                        <span style={Text5}>1st August 2024</span>
                                    </li>
                                    <li>
                                        <p style={Text4}>Status</p>
                                        <span style={Text5}>Active</span>
                                    </li>
                                    <li>
                                        <p style={Text4}>Payment Method</p>
                                        <span style={Text5}>*****4533</span>
                                    </li>
                                    <li>
                                        <p style={Text4}>Auto Renewal</p>
                                        <span style={Text5}>Disable</span>
                                    </li>
                                    <li>
                                        <p style={Text4}>Expire on</p>
                                        <span style={Text5}>1st August 2024</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p style={Text4}>Benefits</p>
                                <ul>
                                    <li>Message to 10 Profiles</li>
                                    <li> Send request to 10 Profiles</li>
                                    <li> Online Support</li>
                                </ul>
                            </div>
                        </div> */}

                        <div className='flex space-y-[23px]  space-x-[95px] pl-[38px] w-[100%]'>
                            <div className='mt-[23px]'>
                                <ul className='space-y-[27px]'>
                                    <li className='space-y-[8px]'>
                                        <p className='mb-[8px]' style={Text4}>Date of Purchase</p>
                                        <span className=' text-[#8F8F8F]' style={Text5}>1st August 2024</span>
                                    </li>
                                    <li className='space-y-[8px]'>
                                        <p style={Text4}>Status</p>
                                        <div className='flex items-center space-x-[11px]'>
                                            <span className='text-[#8F8F8F]' style={Text5}>Active</span>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM5.6 10.5L2.1 7L3.087 6.013L5.6 8.519L10.913 3.206L11.9 4.2L5.6 10.5Z" fill="#2ED613" />
                                            </svg></span>
                                        </div>

                                    </li>
                                    <li className='space-y-[8px]'>
                                        <p className='mb-[8px]' style={Text4}>Payment Method</p>
                                        <span className='text-[#8F8F8F]' style={Text5}>*****4533</span>
                                    </li>
                                    <li className='space-y-[8px]'>
                                        <p className='mb-[8px]' style={Text4}>Auto Renewal</p>
                                        <span className='text-[#8F8F8F]' style={Text5}>Disable</span>
                                    </li>
                                    <li className='space-y-[8px]'>
                                        <p className='mb-[8px]' style={Text4}>Expire on</p>
                                        <span className='text-[#8F8F8F]' style={Text5}>1st August 2024</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='relative left-[55px] space-y-[5px]'>
                                <p style={Text4}>Benefits</p>
                                <ul className='space-y-[5px]'>
                                    <li>
                                        <div className='flex space-x-[19px] items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM5.6 10.5L2.1 7L3.087 6.013L5.6 8.519L10.913 3.206L11.9 4.2L5.6 10.5Z" fill="#2ED613" />
                                                </svg>
                                            </span>
                                            <p className='text-[#000]' style={Text5}><span className='text-[#8F8F8F]'>Message to </span> 10 Profiles</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-[19px] items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM5.6 10.5L2.1 7L3.087 6.013L5.6 8.519L10.913 3.206L11.9 4.2L5.6 10.5Z" fill="#2ED613" />
                                                </svg>
                                            </span>
                                            <p className='text-[#000]' style={Text5}> <span className='text-[#8F8F8F]'>Send request to </span> 10 Profiles</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-[19px] items-center'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM5.6 10.5L2.1 7L3.087 6.013L5.6 8.519L10.913 3.206L11.9 4.2L5.6 10.5Z" fill="#2ED613" />
                                                </svg>
                                            </span>
                                            <span className='text-[#8F8F8F]' style={Text5} >Online Support</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className='flex h-full items-center relative top-[50px] space-x-[20px]'>
                                    <div>
                                        <button  style={btnText} className='border-[#8225AF] hover:bg-[#F3F8FF] text-[#000] border-[1px] w-[137px] h-[50px] rounded-[23px]'>
                                            Cancel Plan
                                        </button>
                                    </div>
                                    <div>
                                        <button style={btnText} id='grad-button' className=' w-[137px] h-[50px] rounded-[50px]'>
                                            Auto Renew
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Plans