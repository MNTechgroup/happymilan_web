import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function StoryView() {

    const router = useRouter();
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [isHover, SetisHover] = useState(false)

    const GotoStory = () => {
        router.push("/successstories/story")
    }


    return (
        <>

            <div className='relative 2xl:w-[715px] xl:w-[635px]  xl:w-[615px] m-[10px] flex justify-between'>

                <h1 className='p-[5px] relative 2xl:left-[40px] xl:left-[55px]'><span style={Text2} className='text-[16px] text-[#000] dark:text-[#FFF]'>Success Stories</span></h1>
                <div className='flex space-x-[10px] relative right-[50px]'>
                    <div onMouseEnter={() => SetisHover(true)} onMouseLeave={() => SetisHover(false)} onClick={() => router.push("/successstories")} className='flex items-center space-x-[16px]' >
                        <h1 style={Text2} className={`cursor-pointer text-[16px] dark:text-[#FFF]  ${isHover ? "text-[#000]" : "text-[#BABABA]"}`}>More Stories</h1>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z" fill={isHover ? "#000" : "#E1E1E1"} />
                        </svg>
                    </div>

                </div>
            </div>
            <div className="relative 2xl:left-[0px] xl:left-[53px] left-[40px] top-[20px]">
                <div className='inline-flex justify-center items-center lg:flex md:justify-center  flex-wrap space-x-[20px]'>
                    <div>
                        <Image className='cursor-pointer' onClick={GotoStory} alt='story-1' loading='lazy' width={197} height={290} src={"/assests/storySec/stry-1.svg"} />
                    </div>
                    <div>
                        <Image className='cursor-pointer' onClick={GotoStory} alt='story-2' loading='lazy' width={197} height={290} src={"/assests/storySec/stry-2.svg"} />
                    </div>
                    <div>
                        <Image className='cursor-pointer' onClick={GotoStory} alt='story-3' loading='lazy' width={197} height={290} src={"/assests/storySec/stry-3.svg"} />
                    </div>
                </div>
            </div>

        </>
    )
}


export default StoryView