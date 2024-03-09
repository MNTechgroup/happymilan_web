'use client';

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import Image from 'next/image';


function PhotoGrid({ handleClickOpen }) {

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const imageStyle = {
        objectFit: "cover"
    }

    const swiperRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the left arrow key is pressed
            if (event.keyCode === 37) {
                // Navigate to the previous slide
                swiperRef.current.swiper.slidePrev();
            }
            // Check if the right arrow key is pressed
            else if (event.keyCode === 39) {
                // Navigate to the next slide
                swiperRef.current.swiper.slideNext();
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Remove event listener when component is unmounted
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };

        console.log(swiperRef.current.swiper)
    }, []);

    const selector = useSelector((state) => state.myprofile)
    if (selector.status == "loading") {
        return (

            <div>

                <Swiper

                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <div className='h-[381px] w-[300px] grid place-items-center'>
                        <div className='grid place-items-center'>Loading...</div>
                    </div>




                    {/* <SwiperSlide>
                <img onClick={handleClickOpen} className='cursor-pointer' src='/assests/dashboard/user/user-image-2.svg' />

            </SwiperSlide>
            <SwiperSlide>
                <img onClick={handleClickOpen} className='cursor-pointer' src='/assests/dashboard/user/user-image-1.svg' />

            </SwiperSlide> */}
                </Swiper>
            </div>
        )
    }


    return (
        <>
            <div>

                <Swiper

                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    ref={swiperRef}
                >
                    {
                        (selector && selector.data && selector.data.userProfilePic && selector.data.userProfilePic.length > 0) ? (
                            selector.data.userProfilePic.map((res, index) => (
                                <SwiperSlide key={index}>
                                    <img style={imageStyle} onClick={() => handleClickOpen(res)} alt='user-images' className='space-x-[10px] rounded-[10px] h-[381px] w-[300px] cursor-pointer' src={res.url} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div style={{ backgroundColor: "#F8FBFF" }} className='h-[381px] w-[300px] grid place-items-center'>
                                <div className='grid place-items-center space-y-[5px]'>
                                    <Image alt='no-found' width={34} height={34} src={"/assests/dashboard/icon/Photo-NotFound.svg"} />
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