import React, { useState } from 'react'
import icons from '../../../../utils/icons/icons'
import { useDarkMode } from "../../../../ContextProvider/DarkModeContext";
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

    const GototPage = (res) => {
        if (res != "") {
            window.open('https://hmbusiness-eace6.web.app/', "_blank")
            SetOpenProductList(false)
        } else {

        }
        // window.open('https://hmbusiness-eace6.web.app/', "_blank")
        // SetOpenProductList(false)
    }


    const ProductDataList = [
        {
            id: 1,
            name: "Proxale",
            content: "Explore Nearby Services",
            image: "/assests/product-assests/proffers.svg",
            IconWidth: "36.874px",
            IconHeight: "",
            Url_Link: "https://hmbusiness-eace6.web.app/"
        },
        {
            id: 2,
            name: "Trendigo",
            content: "Shop for Men & Women",
            image: "/assests/product-assests/Trendigo.svg",
            IconWidth: "36.874px",
            IconHeight: "",
            Url_Link: ""
        },
        {
            id: 3,
            name: "AdsKaro",
            content: "Daily Ads Services",
            image: "/assests/product-assests/adskaro.svg",
            IconWidth: "42.507px",
            IconHeight: "",
            Url_Link: ""
        },
    ]


    return (
        <>
            <div>
                <div onClick={HandleOpenProductList} className='cursor-pointer  rounded-full dark:hover:bg-[#383838] hover:bg-[#F3F8FF] p-[8px]'>
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
                        <div className="w-[320px] h-[240px]" style={BoxStyle}>
                            <ul className=''>
                                {
                                    ProductDataList.map((res, index) => {
                                        return (
                                            <li key={index} onClick={() => GototPage(res.Url_Link)} className={`${res?.id != 2 ? "border-[1px] border-b-[#EEEEEE]" : ""} hover:bg-[#F2F7FF] cursor-pointer flex  w-[100%] h-[80px]`} style={{ borderRadius: `${res?.id != 3 ? "" : "0 0 10px 10px"}` }}>
                                                <div className='w-full flex justify-evenly items-center'>
                                                    <div>
                                                        <Image width={0} height={0} src={res?.image} alt='proffers' className={` h-[32px]`} loading='lazy' style={{ width: res?.IconWidth }} />
                                                    </div>
                                                    <div className='space-y-[5px] w-[166px]'>
                                                        <p style={Text1}>{res?.name}</p>
                                                        <p style={Text2}>{res?.content}</p>
                                                    </div>
                                                    <div className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M11.077 10L7.24365 6.1667L7.83344 5.5769L12.2566 10L7.83344 14.4232L7.24365 13.8334L11.077 10Z" fill="#BEBEBE" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </Box>
                </Modal>

            </div >
        </>
    )
}

export default ProductsListModal