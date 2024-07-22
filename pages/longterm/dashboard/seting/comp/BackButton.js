import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

function BackButton() {

    const router = useRouter();

    return (
        <>
            <div className='p-[5px] rounded-full hover:bg-[#F3F8FF]'>

                <Image alt="back" loading="lazy" width={32} height={32} onClick={() => router.push("/longterm/dashboard")} className='cursor-pointer' src='/assests/common/arrow-back.svg' />

            </div>
        </>
    )
}

export default BackButton