import { Box, Divider, Stack } from
    '@mui/material'
import React, { useEffect, useState } from 'react';
import ChatElement from './ChatElement';
import ProfileImage from '../Maincomp/ProfileImage';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getAcceptedRequestData } from '../../../store/actions/UsersAction';

const Chats = ({ toggleInnerDrawer, HandleWide }) => {

    const [token, settoken] = useState()
    const [Uname, SetUname] = useState();

    useEffect(() => {

        if (getCookie("userName")) {
            SetUname(getCookie("userName"));
        }
        else {
            SetUname("NA")

        }
        settoken(getCookie("authtoken"))

    }, [])

    const ActiveText = {
        color: "#0091FF",
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const UserName = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAcceptedRequestData())
    }, [])

    const FriendeLists = useSelector(
        (state) => state.usersact.acceptedrequestdata,
    );


    return (
        <>
            <Box sx={{
                position: "relative", width: 330,
                backgroundColor: "#FFF",
                paddingLeft: "4px",
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
            }}>
                <Stack p={2} spacing={2} sx={{ height: "100vh" }}>


                    <Stack direction={'row'} spacing={2} sx={{ paddingLeft: "10px", marginTop: "-90px" }}>
                        <Box>

                            <ProfileImage size={47} />

                        </Box>
                        <Stack spacing={0} style={{ position: "relative", top: "2px" }}>
                            <h1 style={UserName}>
                                {token ? Uname : "Please Login"}
                            </h1>
                            <p style={ActiveText}>
                                Online
                            </p>
                        </Stack>
                        <Stack>
                            <div onClick={HandleWide} className='absolute right-6 pt-[5px]'>
                                <div className='hover:bg-[#F2F7FF] w-[35px] h-[35px] grid place-items-center rounded-full '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 20V13H5V18.3115L18.3115 5H13V4H20V11H19V5.68848L5.68848 19H11V20H4Z" fill="black" />
                                    </svg>
                                </div>
                            </div>

                        </Stack>
                    </Stack>

                    <Divider className='pt-[0px] relative left-[-20px]' sx={{ width: "330px" }} />
                    {/* <div className='w-full h-[1px] bg-[#ECECEC]'></div> */}

                    <Stack p={1}>
                        <div className=''>
                            <input

                                type="text" placeholder="Search Member"

                                className="pl-[20px] w-[100%] h-[40px] oultine-none focus:outline-none text-[black] border-[1px] focus:border-[#000] border-[#E3E3E3] hover:border-[#000] rounded-[20px]  text-[#727272]" />
                            {/* <Image
                            loading='lazy'
                            alt="img"
                            width={18}
                            height={15}
                            src="/assests/Black/Search.svg"
                            style={{ width: '18px', height: '15px' }} // Ensure aspect ratio is maintained
                            className="w-[18px] h-[15px] absolute inline 2xl:left-[45px] top-[125px] xl:left-[10px] left-[10px] mt-[0px]"
                        /> */}
                            <div className="hover:bg-[#F2F7FF] h-[30px] w-[30px] rounded-[100%] absolute top-[105px] mt-[4px] right-8 ml-[5px] grid place-items-center">
                                <Image width={14} height={14} alt="search" src="/assests/dashboard/icon/Search-grad.svg" loading="lazy" />
                            </div>

                        </div>
                    </Stack>

                    <Stack
                        id="Chat-scroll-bar"
                        className='scrollbar' p={1} spacing={0} direction='column' sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>


                        <Stack spacing={1.5} className='mt-[5px]'>

                            {FriendeLists?.acceptedUsers?.map((el) => {
                                return <ChatElement
                                    // key={response.id}
                                    // res={response}
                                    // user={response.user}
                                    // friend={response.friend}
                                    // isCurrentUser={isCurrentUser}
                                    // loading={FriendeLists.loading}
                                    toggleInnerDrawer={toggleInnerDrawer} {...el} />
                            })}
                        </Stack>
                    </Stack>
                </Stack>
               
            </Box>
        </>
    )
}

export default Chats