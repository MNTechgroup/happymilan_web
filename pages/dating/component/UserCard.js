import React from 'react'
import Image from 'next/image'


function UserCard() {
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    }
    return (
        <>
            <div className='space-y-[20px] flex flex-col items-center'>
                <div className='mt-[20px] relative left-[100px] flex items-center space-x-[20px] justify-center'>

                    <div>
                        <Image className='cursor-pointer' width={91} height={104} src="/assests/dating/user-1.png" />
                    </div>
                    <div>
                        <Image width={329} height={378} className='cursor-pointer 2xl:h-[378px] 2xl:w-[329px] xl:w-[300px] xl:h-[350px]' src="/assests/dating/user-image-dating.png" />
                        <div className='absolute bottom-[30px] space-y-[5px] text-[white] ml-[20px] 2xl:ml-[30px] xl:ml-[30px]'>
                            <div>
                                <div className='rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]'>
                                    <p style={Text2} className='text-[10px]'>online</p>
                                </div>
                            </div>
                            <h1 className='text-[20px]' style={Text1}>Rohan Patel </h1>
                            <p className="text-[10px]" style={Text2}>Male 36, 4’ 5”  |  Ahmedabad (2.1 km)</p>
                        </div>
                    </div>
                    <div>
                        <Image className='cursor-pointer' width={91} height={104} src="/assests/dating/user-2.png" />
                    </div>

                </div>
                <div className='relative left-[95px] space-x-[20px] flex items-center  justify-between w-[329px] 2xl:w-[230px] xl:w-[300px]'>
                    <div className=''><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                    <div className=''><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                    <div className=''><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/star-icon.svg' /></div>
                    <div className=''><Image width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                </div>
            </div>
        </>
    )
}

export default UserCard