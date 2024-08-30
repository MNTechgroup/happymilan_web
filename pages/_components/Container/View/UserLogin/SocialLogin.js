import Image from 'next/image'
import React from 'react'

function SocialLogin() {

    const Text = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    return (
        <>
            <div className='flex items-center space-x-[24px]'>
                <p style={Text} className='select-none'>Or Continue With</p>
                <ul className='flex space-x-[17px] items-center'>
                    <li>
                        <Image src={"/assests/login/google-icon.svg"} className='cursor-pointer' width={34} height={34} alt='google' />
                    </li>
                    <li>
                        <Image src={"/assests/login/facebook-icon.svg"} className='cursor-pointer' width={34} height={34} alt='google' />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SocialLogin