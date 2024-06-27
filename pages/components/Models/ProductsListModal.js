import React, { useState } from 'react'
import icons from '../../../utils/icons/icons'
import { useDarkMode } from "../../../ContextProvider/DarkModeContext";
import { Box, Modal, Typography } from '@mui/material';
import Image from 'next/image';


function ProductsListModal() {

    const { darkMode, toggleDarkMode } = useDarkMode();
    const [OpenProductList, SetOpenProductList] = useState(false)

    const HandleOpenProductList = () => {
        SetOpenProductList(true)
    }

    const handleCloseProductList = () => {
        SetOpenProductList(false)
    }

    const BoxStyle = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
    }

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "14px", /* 100% */
    }

    const Text2 = {
        color: "#A6A4A4",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px",
    }

    const GototPage = () => {
        window.open('https://hmbusiness-eace6.web.app/', "_blank")
        SetOpenProductList(false)
    }

    return (
        <>
            <div>
                <div onClick={HandleOpenProductList} className='cursor-pointer'>
                    {darkMode ? icons["nav-dots-menu"].dark : icons["nav-dots-menu"].light}
                </div>

                <Modal
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    BackdropProps={{ style: { opacity: 0 } }}

                    open={OpenProductList}
                    onClose={handleCloseProductList}
                    sx={{ outline: "none" }}
                    style={{ outline: "none", position: "absolute", right: "140px", top: "70px" }}

                >

                    <Box sx={{ outline: "none" }} className="absolute right-0">
                        <div className="w-[320px] h-[160px]" style={BoxStyle}>
                            <ul className=''>
                                <li onClick={GototPage} className='hover:bg-[#F2F7FF] cursor-pointer flex  w-[100%] h-[80px]'>
                                    <div className='w-full flex justify-evenly items-center'>
                                        <div>
                                            <Image width={0} height={0} src={"/assests/product-assests/proffers.svg"} alt='proffers' className='w-[36.874px] h-[32px]' loading='lazy' />
                                        </div>
                                        <div className='space-y-[5px]'>
                                            <p style={Text1}>Proffers</p>
                                            <p style={Text2}>Explore Nearby Services</p>
                                        </div>
                                        <div className=''>
                                            {/* {darkMode ?
                                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                                                :
                                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />} */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M11.077 10L7.24365 6.1667L7.83344 5.5769L12.2566 10L7.83344 14.4232L7.24365 13.8334L11.077 10Z" fill="#BEBEBE" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='h-[1px] w-full bg-[#EEEEEE]'></div>
                                </li>
                                {/* <li className='h-[80px] border-[1px] border-[black]'> */}
                                <li className='hover:bg-[#F2F7FF] cursor-pointer flex  w-[100%] h-[80px]'>

                                    <div className='w-full flex justify-evenly items-center'>
                                        <div>
                                            <Image width={0} height={0} src={"/assests/product-assests/Trendigo.svg"} alt='proffers' className='w-[36.874px] h-[32px]' loading='lazy' />
                                        </div>
                                        <div className='space-y-[5px]'>
                                            <p style={Text1}>Trendigo</p>
                                            <p style={Text2}>Shop for Men & Women</p>
                                        </div>
                                        <div>
                                            {/* {darkMode ?
                                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                                                :
                                                <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />} */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M11.077 10L7.24365 6.1667L7.83344 5.5769L12.2566 10L7.83344 14.4232L7.24365 13.8334L11.077 10Z" fill="#BEBEBE" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </Modal>

            </div >
        </>
    )
}

export default ProductsListModal