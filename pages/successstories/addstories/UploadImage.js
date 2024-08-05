import Image from 'next/image'
import React from 'react'

function UploadImage() {
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const Text3 = {
        color: "#6A6A6A",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    return (
        <>
            <div className="relative top-[80px] flex h-full justify-center flex-wrap w-full lg:w-full 2xl:w-[300px] xl:w-[415px]  pt-[0px] lg:pt-0  gap-y-[20px] gap-x-[17px]">
                <div className="border-dashed border-[1px] border-[#B5B5B5] w-[45%] lg:w-[300px] h-[266px] rounded-[8px] ">
                    <div className="flex justify-center flex-col items-center h-full">
                        <Image
                            loading="lazy"
                            alt="add-pic"
                            width={24}
                            height={24}
                            src="/assests/stories/gradient-drag-icon.svg"
                            className="  h-[31.473px]  w-[31.47px]"
                        />
                        <h1
                            className="w-[92px] text-center text-[12px] text-[#000] pt-[10px]"
                            style={TitleText}
                        >
                            Select or drag
                            Wedding Photo
                        </h1>
                    </div>
                </div>

                <div>
                    <h1 style={Text3}>Max. 3 Photos (JPEG, PNG)</h1>
                </div>

            </div>
        </>
    )
}

export default UploadImage