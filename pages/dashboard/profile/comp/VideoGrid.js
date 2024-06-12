import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

function VideoGrid() {

    const selector = useSelector((state) => state.myprofile)

    // console.log(selector?.data?.userProfileVideo[1]?.url)

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    return (
        <>

            {selector?.data?.userProfileVideo?.length > 0 ? <>

                <div className='w-[300px] h-[381px] rounded-[10px]'>
                    <video style={{height:"381px" , width:"100vw" ,borderRadius:"10px", objectFit:"cover"}} controls>
                        <source  src={selector?.data?.userProfileVideo[0]?.url} type="video/mp4" />
                        <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </> : <>
                <div>
                    <div style={{ backgroundColor: "#F8FBFF" }} className='h-[381px] w-[300px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image alt='no-found' width={34} height={34} src={"/assests/dashboard/icon/Photo-NotFound.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Video Found</h1>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default VideoGrid