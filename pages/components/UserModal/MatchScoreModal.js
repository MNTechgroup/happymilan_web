import { Box, Modal, Stack, Typography } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import ProfileImage from '../Maincomp/ProfileImage';

function MatchScoreModal({ user }) {

    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px",
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 505,
        height: 612,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 12,
        p: 4,
    };

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const ScoreMatchText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const Text5 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const variable = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const valueofvar = {
        fontFamily: "Poppins",
        fontSize: "16x",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    }

    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "6px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        console.log(user)
    };
    const handleClose = () => setOpen(false);


    return (
        <>
            <div onClick={handleOpen}>
                <Image
                    loading="lazy"
                    alt="couple-icon"
                    width={17}
                    height={14}
                    src="/assests/Black/Couple2.svg"

                />
            </div>
            <div onClick={handleOpen} className="">
                <span className="relative top-[-2px] text-[10px] text-[#000] dark:text-[#FFF]"
                    style={Text4}>
                    Match Score
                </span>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ outline: "none" }}
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // semi-transparent black without blur
                        backdropFilter: 'none', // remove the blur effect

                    },
                }}
            >
                <Box  sx={{ ...style, outline: "none", borderRadius: "21px" }}>

                    <div>
                        <div className='w-full space-y-[20px] 2xl:space-y-[20px] xl:space-y-[15px] lg:space-y-[20px]'>
                            <div>
                                <span style={ScoreMatchText} className='text-[#000]'>Your Match : <span className='text-[#0F52BA]'>85%</span></span>
                            </div>
                            <div className='flex flex-col items-center space-y-[15px]'>

                                <div>
                                    <div className='flex'>
                                        <div className='relative left-[15px]'>
                                            <ProfileImage size={70} />

                                        </div>
                                        <div>
                                            {user?.profilePic ?
                                                <>
                                                <div className='w-[70px] h-[70px]'>
                                                    <Image width={70} height={70} alt='user' className='rounded-full' style={{objectFit:"cover",width:"70px",height:"70px"}} src={user?.profilePic} />
                                                </div>
                                                </>
                                                :
                                                <>
                                                    <div className='bg-[#F8FBFF] grid place-items-center' style={{ height: "70px", width: "70px", borderRadius: "50%", objectFit: "cover" }}>
                                                        <div className='w-full h-full'>
                                                            <ul className='flex justify-center flex-col items-center mt-[20px]'>
                                                                <li><Image quality={25} loading='lazy' alt='not-found' width={18} height={18} src={"/assests/dashboard/icon/NotFound-img.svg"} /></li>
                                                                <li> <h1 className='relative top-[5px]' style={ImagenotFound}>No Image</h1>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-[10px]'>
                                    <span> <Image
                                        loading="lazy"
                                        alt="couple-icon"
                                        width={15}
                                        height={14}
                                        src="/assests/Black/Couple2.svg"

                                    /></span>
                                    <span style={Text}>You & {user?.name} Matched</span>
                                </div>
                            </div>
                            <div className=' w-full h-[1px] bg-[#EAEAEA]'></div>

                        </div>
                        <Stack className='mt-[28px] 2xl:mt-[28px] xl:mt-[24px] lg:mt-[24px]'>
                            <div>
                                <span className='text-[#0F52BA]' style={Text5}>Based on Your Partner Preference</span>
                            </div>

                            <Stack>
                                <ul className='mt-[24px] 2xl:mt-[24px] xl:mt-[20px] lg:mt-[20px] flex flex-col space-y-[18px]'>
                                    <li className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <div style={variable}>Religion</div>
                                            <div style={valueofvar}>Hindu</div>
                                        </div>
                                        <div>
                                            <Image width={23} height={23} alt='match' src={"/assests/scorematch/matchScore-tick.svg"} />
                                        </div>
                                    </li>
                                    <li className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <div style={variable}>Height</div>
                                            <div style={valueofvar}>4.5 to 5.3 ft</div>
                                        </div>
                                        <div>
                                            <Image width={23} height={23} alt='match' src={"/assests/scorematch/matchScore-tick.svg"} />
                                        </div>
                                    </li>
                                    <li className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <div style={variable}>Age</div>
                                            <div style={valueofvar}>27 - 34</div>
                                        </div>
                                        <div>
                                            <Image width={23} height={23} alt='match' src={"/assests/scorematch/matchScore-tick.svg"} />
                                        </div>
                                    </li>
                                    <li className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <div style={variable}>weight</div>
                                            <div style={valueofvar}>52 to 68 kg</div>
                                        </div>
                                        <div>
                                            <Image width={23} height={23} alt='match' src={"/assests/scorematch/matchScore-tick.svg"} />
                                        </div>
                                    </li>
                                </ul>
                            </Stack>
                            <div className='mt-[43px] flex justify-center w-full'>
                                <div className='flex space-x-[50px]'>
                                    <div>
                                        <Image width={14} height={24} className='' alt='next-light' src="/assests/scorematch/Next-btn.svg" />
                                    </div>
                                    <ul className='flex space-x-[23px] items-center'>
                                        <li className='w-[14px] h-[14px] rounded-full bg-[#0F52BA]'></li>
                                        <li className='w-[14px] h-[14px] rounded-full bg-[#ECECEC]'></li>
                                        <li className='w-[14px] h-[14px] rounded-full bg-[#ECECEC]'></li>
                                        <li className='w-[14px] h-[14px] rounded-full bg-[#ECECEC]'></li>
                                    </ul>
                                    <div>
                                        <Image width={14} height={24} className='transform scale-x-[-1]' alt='next-light' src="/assests/scorematch/Next-btn.svg" />
                                    </div>
                                </div>
                            </div>
                        </Stack>

                    </div>

                </Box>
            </Modal>
        </>
    )
}

export default MatchScoreModal