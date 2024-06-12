import { Box, Divider, Menu, MenuItem, Stack, } from '@mui/material'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../ContextProvider/UsersConversationContext';
import { getCookie } from 'cookies-next';



const MessageOptions = ({ data }) => {

    const Message_options = [
        {
            title: "View Profile",
        },
        {
            title: "Block",
        },
        {
            title: "Report User",
        },
        {
            title: "Star message",
        },
        {
            title: "Report",
        },
        {
            title: "Delete Message",
        },
    ];


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const HanldeEvent = () => {


    }
    return (
        <>
            <Image
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

                alt="img" width={4} height={16} className="cursor-pointer 2xl:w-auto 2xl:h-auto xl:w-[5px] xl:h-[14px]" src="/assests/dashboard/chats/chat-more-icon.svg" />

            {/* <svg

                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size={10}

                xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg> */}

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                style={{ marginLeft: "-25px" }}

            >
                <Stack sx={{ borderRadius: "20px", padding: "10px" }} spacing={1} px={1}>
                    {Message_options.slice(0, 3).map((el) => (
                        <MenuItem  onClick={HanldeEvent}>{el.title}</MenuItem>
                    ))}
                </Stack>
            </Menu>
        </>
    )
}




const Header = ({ socket }) => {

    const { userData, updateUser } = useContext(UserContext);

    const [userTyping, SetUserTyping] = useState(false)

    const currentUser = getCookie("authtoken")

    socket?.on('typing', (data) => {

        // Check if the typing event is for the current user
        if (data.from != currentUser) { // Replace currentUserID with the ID of the current user
            // Update UI to indicate that the user is typing
            SetUserTyping(true)
            console.log(data.from);
        }
    });

    socket?.on('stopTyping', (data) => {
        SetUserTyping(false)
        // Check if the stopTyping event is for the current user
    });

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

    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "6px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    return (
        <>
            <Box p={2} sx={{ width: '100%', backgroundColor: '#FFF', boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
                <Stack alignItems={'center'} direction='row' style={{ marginLeft: "5px" }} justifyContent={'space-between'}
                    sx={{ width: '100%', height: '100%' }}>
                    <Stack direction={'row'} spacing={2}>
                        <Box>
                            {userData?.profilePic ?
                                <Image loading='lazy' width={47} height={47} alt='profile-image' style={{ objectFit: "cover", borderRadius: "50%" }} className='w-[47px] h-[47px]' src={userData?.profilePic} />
                                :
                                <div className='bg-[#F8FBFF] grid place-items-center' style={{ height: "47px", width: "47px", borderRadius: "50%", objectFit: "cover" }}>
                                    <Image loading='lazy' alt='not-found' width={16} height={16} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                    <h1 className='relative top-[-5px]' style={ImagenotFound}>No Image</h1>
                                </div>
                            }
                        </Box>
                        <Stack spacing={0} style={{ position: "relative", top: "1px" }}>
                            <h1 style={UserName}>
                                {userData?.userName}
                            </h1>
                            <p style={ActiveText}>
                                {userTyping ? "Typing..." : "Online"}
                            </p>
                        </Stack>
                        <Stack className=''>
                            <div className="absolute right-10 mt-[10px]">
                                {/* <Image alt="img" width={4} height={16} className="2xl:w-auto 2xl:h-auto xl:w-[5px] xl:h-[14px]" src="/assests/dashboard/chats/chat-more-icon.svg" /> */}
                                <MessageOptions />
                            </div>
                        </Stack>
                    </Stack>
                </Stack>

            </Box>
            <Divider className='mt-[0px] bg-[#e3e3e3]' sx={{backgroundColor:"#e3e3e3"}} />

        </>)
}

export default Header