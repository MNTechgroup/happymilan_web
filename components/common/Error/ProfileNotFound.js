import Image from 'next/image'
import React from 'react'

function ProfileNotFound() {
    const Boxshadow = {
        boxShadow: "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
    }
    const Text6 = {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '22px',
    };
    const Text2 = {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        textAlign: "center",
        fontWeight: '500',
        lineHeight: '22px',
    };
    const Text3 = {
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontStyle: 'normal',
        textAlign: "center",
        fontWeight: '500',
        lineHeight: '22px',
    };
    const Text4 = {
        fontFamily: 'Poppins',
        fontSize: '15px',
        fontStyle: 'normal',
        textAlign: "center",
        fontWeight: '700',
        lineHeight: '22px',
    };
    return (
        <>
            <div className='w-full h-full grid place-items-center'>
                <div style={Boxshadow} className='grid place-items-center w-[600px] h-[400px] bg-[#FFF]  mt-[50px]'>

                    <div className='pl-[20px] pr-[20px]'>
                        <ul className='text-center space-y-[20px]'>
                            <li className='grid place-items-center'>
                                <Image width={100} height={100} loading='lazy' alt='error' src={"/assests/Error/Error-image.png"} />
                            </li>
                            <li className='space-y-[10px]'>
                                <p style={Text6}>Something Went Wrong
                                </p>
                                <p style={Text2}>It seems we're having trouble fetching the profiles at the moment. Please try again later or contact support if the issue persists.</p>
                            </li>
                            <li>
                                <p style={Text4}>Error Code</p>
                            </li>
                            <li>
                                <p style={Text3}>If you need immediate assistance, feel free to contact our support team or check our help center for more information.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div >
        </>
    )
}

export default ProfileNotFound