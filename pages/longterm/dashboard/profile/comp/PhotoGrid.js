import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Deleteimage } from '../../../../../store/actions/UsersAction';
import { Dialog, DialogContent } from '@mui/material';

function PhotoGrid({ handleClickOpen }) {

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    };

    const imageStyle = {
        objectFit: "cover"
    };

    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }

    const swiperRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) {
                swiperRef.current.swiper.slidePrev();
            } else if (event.keyCode === 39) {
                swiperRef.current.swiper.slideNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const dispatch = useDispatch();
    

    const selector = useSelector((state) => state.myprofile);
    const loader = useSelector((state) => state.usersact.deleteimagedata);





    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);
    const [userdeletedata, SetuserDeleteData] = useState([])

    const handleClickDeleteImageModal = (res) => {
        setOpenLogoutModal(true);
        SetuserDeleteData(res)
    };

    const handleCloseLogout = () => {
        setOpenLogoutModal(false);
    };

    const HandleLogout = (e) => {
        if (e.target.name != "stay") {
            dispatch(Deleteimage(userdeletedata));
            setOpenLogoutModal(false);

        }
        setOpenLogoutModal(false)

    }


    return (
        <>
            {loader.loading ? (
                <div>
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div className='h-[381px] w-[300px] grid place-items-center'>
                            <div className='grid place-items-center'>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"></div>
                                    <div className="w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"></div>
                                    <div className="w-4 h-4 rounded-full animate-pulse bg-[#a78bfa]"></div>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            ) : (
                <div>
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        ref={swiperRef}
                    >
                        {selector && selector.data && selector.data.userProfilePic && selector.data.userProfilePic.length > 0 ? (
                            selector.data.userProfilePic.map((res, index) => (
                                <SwiperSlide key={index}>
                                    <div className='right-[10px] mt-[10px] z-[10] absolute'>
                                        <Image loading='lazy' onClick={() => handleClickDeleteImageModal(res)} alt='delete' width={24} height={24} src="/assests/dashboard/icon/Trash-icon.svg" />
                                    </div>
                                    <img style={imageStyle} onClick={() => handleClickOpen(res, index)} alt='user-images' className='space-x-[10px] rounded-[10px] h-[381px] w-[300px] cursor-pointer' src={res?.url} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div style={{ backgroundColor: "#F8FBFF" }} className='h-[381px] w-[300px] grid place-items-center'>
                                <div className='grid place-items-center space-y-[5px]'>
                                    <Image loading='lazy' alt='no-found' width={34} height={34} src={"/assests/dashboard/icon/Photo-NotFound.svg"} />
                                    <h1 className='inline' style={ImageNotFoundText}>No Photos Found</h1>
                                </div>
                            </div>
                        )}
                    </Swiper>
                </div>
            )}
            <Dialog
                open={openLogoutModal}
                onClose={handleCloseLogout}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className=""
            >
                <DialogContent className="text-center w-[400px] mt-[20px]">
                    <div id="alert-dialog-description">
                        <p style={LogoutModalText}>Are you sure you want to delete the image?</p>
                    </div>
                </DialogContent>
                <div className="flex justify-evenly p-[20px] mb-[20px]">
                    <div>
                        <button onClick={HandleLogout} name="stay" id="grad-button" className="rounded-[24px] w-[122px] h-[50px]">No</button>
                    </div>
                    <div>
                        <button onClick={HandleLogout} name="exit" className="border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]">Yes</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default PhotoGrid;