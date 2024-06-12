import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

function BackButton() {

    const router = useRouter();

    return (
        <>
            <div>

                <Image alt="back" loading="lazy" width={32} height={32} onClick={() => router.push("/dashboard")} className='cursor-pointer' src='/assests/common/arrow-back.svg' />

            </div>
        </>
    )
}

export default BackButton