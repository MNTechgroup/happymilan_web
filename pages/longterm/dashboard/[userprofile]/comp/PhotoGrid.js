'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { useSelector } from 'react-redux';


function PhotoGrid({handleClickOpen}) {

const data = useSelector((state)=>state.userById)

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
            <div className=''>

                <Swiper

                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        (data && data.user && data.user.userProfilePic && data.user.userProfilePic.length > 0) ? (
                            data.user.userProfilePic.map((res, index) => (
                                <SwiperSlide key={index}>
                                    <Image loading='lazy' width={0} height={0} onClick={()=>handleClickOpen(res,index)} style={{objectFit:"cover"}} alt='user-images' className='space-x-[10px] rounded-[10px] h-[381px] w-[300px] cursor-pointer' src={res?.url} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div style={{ backgroundColor: "#F8FBFF" }} className='h-[381px] w-[300px] grid place-items-center'>
                            <div className='grid place-items-center space-y-[5px]'>
                                <Image loading='lazy' alt='no-found' width={34} height={34} src={"/assests/dashboard/icon/Photo-NotFound.svg"} />
                                <h1 className='inline' style={ImageNotFoundText}>No Photos Found</h1>
                            </div>
                        </div>
                        )
                    }
                </Swiper>
            </div>
        </>
    )
}

export default PhotoGrid