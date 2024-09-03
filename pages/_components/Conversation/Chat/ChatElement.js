import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../ContextProvider/UsersConversationContext';
import StyledBadge from '../../../../components/common/animation/StyleBadge';
//single chat element
const ChatElement = ({ toggleInnerDrawer, isUserActive, id, name, profilePic }) => {

    const Username2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Activity2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const userStatus = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const { userData, updateUser } = useContext(UserContext);

    const [selectedUser, SetSelectedUser] = useState('')


    useEffect(() => {

        const CurrentChatUser = id
        SetSelectedUser(CurrentChatUser)

    }, [userData, updateUser, selectedUser, SetSelectedUser])

    const HandleOpenChat = () => {



        if (toggleInnerDrawer) {
            const thedata = {
                userName: name,
                profilePic: profilePic,
                ActiveUser: isUserActive,
                id: id
            }

            SetSelectedUser(thedata.id)
            toggleInnerDrawer();

            updateUser(thedata)
        }
        else {
            const thedata = {
                userName: name,
                profilePic: profilePic,
                ActiveUser: isUserActive,
                id: id
            }
            SetSelectedUser(thedata.id)
            updateUser(thedata)
        }
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
        <Box sx={{
            width: "100%",
            borderRadius: 1,

        }}
        >

            <Stack direction="row" alignItems='center' justifyContent='space-between'>
                <Stack direction='row' spacing={0}>
                    <div style={{ borderRadius: "40.5px" }} onClick={HandleOpenChat} className={`${userData?.id == selectedUser ? "bg-[#F4F9FF]" : ""} z-100  hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center`}>
                        {profilePic ?
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ // position
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                variant="dot"
                                invisible={!isUserActive} // Hide the badge when the user is inactive
                            >
                                <Image alt="img" width={47} height={47} className=" w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]" style={{ objectFit: "cover", borderRadius: "50%" }} src={profilePic} loading="lazy" />
                            </StyledBadge>
                            :
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ // position
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                variant="dot"
                                invisible={!isUserActive}
                            >
                                <div className='bg-[#F8FBFF] grid place-items-center' style={{ height: "44px", width: "44px", borderRadius: "50%", objectFit: "cover" }}>
                                    <Image loading='lazy' alt='not-found' width={16} height={16} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                    <h1 className='relative top-[-5px]' style={ImagenotFound}>No Image</h1>
                                </div>
                            </StyledBadge>
                        }
                        <div>
                            <h1 style={Username2}>{name} <span style={userStatus} className="text-[#A7A7A7] ml-[5px]">1h ago</span></h1>
                            <p style={Activity2} className="text-[12px] 2xl:text-[11px] xl:text-[10px]"> Hi, I am busy now. Can I talk...</p>
                        </div>
                    </div>
                </Stack>
            </Stack>
        </Box >
    )
};

export default ChatElement