import { Box, IconButton, Link, Stack, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import moment from 'moment/moment';
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../ContextProvider/UsersConversationContext';
import { useSocket } from '../ContextProvider/SocketContext';

const messageText = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
}

const Message_options = [
    {
        title: "Reply",
    },
    // {
    //     title: "React to message",
    // },
    // {
    //     title: "Forward message",
    // },
    // {
    //     title: "Star message",
    // },
    {
        title: "Report",
    },
    {
        title: "Delete Message",
    },
];




const DocMsg = ({ el, menu }) => {
    const theme = useTheme();
    return (

        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {el.incoming ? <>
                <Image alt="img" width={40} height={40} className="mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />

                <Box p={1.5} sx={{
                    backgroundColor: el.incoming ? "#EAEAEA" :
                        "#EAEAEA", borderRadius: 1.5, width: 'max-content'
                }}>
                    <Stack spacing={2}>
                        <Stack p={2} spacing={3} direction='row' alignItems='center'
                            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                            {/* <Image size={48}/> */}
                            <Typography style={messageText} variant='caption'>
                                Abstract.png
                            </Typography>
                            <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" /></svg>
                            </IconButton>
                        </Stack>
                        <Typography style={messageText} variant='body2' sx={{ color: el.incoming ? theme.palette.text : '#fff' }} >
                            {el.message}
                        </Typography>
                    </Stack>
                </Box>
            </> :
                <>
                    <Box p={1.5} sx={{
                        backgroundColor: el.incoming ? theme.palette.background.default :
                            "#EAEAEA", borderRadius: 1.5, width: 'max-content'
                    }}>
                        <Stack spacing={2}>
                            <Stack p={2} spacing={3} direction='row' alignItems='center'
                                sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                                {/* <Image size={48}/> */}
                                <Typography style={messageText} variant='caption'>
                                    Abstract.png
                                </Typography>
                                <IconButton>
                                    <span>Download Icon</span>
                                </IconButton>
                            </Stack>
                            <Typography style={messageText} variant='body2' sx={{ color: el.incoming ? theme.palette.text : '#fff' }} >
                                {el.message}
                            </Typography>
                        </Stack>
                    </Box>
                    <Image alt="img" width={40} height={40} className=" w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />

                </>}
            {/* {menu && <MessageOptions/>} */}

        </Stack>
    )
}

const LinkMsg = ({ el, menu }) => {
    const theme = useTheme();
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {el.incoming ?
                <>
                    <Image alt="img" width={40} height={40} className="mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />
                    <Box p={1.5} sx={{
                        backgroundColor: el.incoming ? theme.palette.background.default :
                            "#EAEAEA", borderRadius: 1.5, width: 'max-content'
                    }}>
                        <Stack spacing={2}>
                            <Stack p={2} spacing={3} alignItems='start'
                                sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                                <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: '10px' }} />
                                <Stack spacing={2}>
                                    <Typography style={messageText} variant='subtitle2'>Creating Chat App</Typography>
                                    <Typography style={messageText} variant='subtitle2' sx={{ color: theme.palette.primary.main }}
                                        component={Link} to="//https://www.youtube.com">www.youtube.com</Typography>
                                </Stack>
                                <Typography style={messageText} variant='body2' color={el.incoming ? theme.palette.text : '#fff'}>
                                    {el.message}
                                </Typography>

                            </Stack>
                        </Stack>
                    </Box>
                </>
                :
                <>
                    <Box p={1.5} sx={{
                        backgroundColor: el.incoming ? theme.palette.background.default :
                            theme.palette.primary.main, borderRadius: 1.5, width: 'max-content'
                    }}>
                        <Stack spacing={2}>
                            <Stack p={2} spacing={3} alignItems='start'
                                sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                                <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: '10px' }} />
                                <Stack spacing={2}>
                                    <Typography style={messageText} variant='subtitle2'>Creating Chat App</Typography>
                                    <Typography style={messageText} variant='subtitle2' sx={{ color: theme.palette.primary.main }}
                                        component={Link} to="//https://www.youtube.com">www.youtube.com</Typography>
                                </Stack>
                                <Typography style={messageText} variant='body2' color={el.incoming ? theme.palette.text : '#fff'}>
                                    {el.message}
                                </Typography>

                            </Stack>
                        </Stack>
                    </Box>
                    <Image alt="img" width={40} height={40} className="mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]" src="/assests/dashboard/request/req-6.svg" />

                </>
            }

            {/* {menu && <MessageOptions/>} */}
        </Stack>
    )
}

const ReplyMsg = ({ el, menu }) => {
    const theme = useTheme();
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default :
                    "#EAEAEA", borderRadius: 1.5, width: 'max-content'
                // backgroundColor: el.incoming ? theme.palette.background.default :
                //     theme.palette.primary.main, borderRadius: 1.5, width: 'max-content'
            }}>
                <Stack spacing={2}>
                    <Stack p={2} direction='column' spacing={3} alignItems='center'
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <Typography style={messageText} variant='body2' color={theme.palette.text}>
                            {el.message}
                        </Typography>
                    </Stack>
                    <Typography style={messageText} variant='body2' color={el.incoming ? theme.palette.text : '#000'}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
            {/* {menu && <MessageOptions />} */}
        </Stack>
    )
}

const MediaMsg = ({ menu, userMessage, Outgoing, sendAt, Top, setTop, onDeleteMessage }) => {


    const { userData, updateUser } = useContext(UserContext);

    if (userMessage.message == "heloo guys how are you Feature: Chat typing indicator out of the box · Issue #1565 · FaridSafi/react-native-gifted-chat · GitHub") {
        console.log("Length of mesage = ", userMessage.message.length)
    }

    const getMessageTime = (sendAt) => {
        const timeDifference = Date.now() - sendAt;
        if (timeDifference < 3600000) {
            return moment(sendAt).fromNow(); // Format time as "X minutes ago"
        } else {
            return moment(sendAt).format('HH:mm'); // Format time as "HH:mm"
        }
    };

    const messageTime = getMessageTime(sendAt);

    const TimeText = {
        color: "#C8C8C8",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }



    const scroll = useRef();


    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [userMessage.message])


    const imgRef = useRef(null);

    const handleImageClick = () => {
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
          } else if (imgRef.current.mozRequestFullScreen) { // Firefox
            imgRef.current.mozRequestFullScreen();
          } else if (imgRef.current.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            imgRef.current.webkitRequestFullscreen();
          } else if (imgRef.current.msRequestFullscreen) { // IE/Edge
            imgRef.current.msRequestFullscreen();
          }
    };




    return (
        <>
            {Outgoing
                ?
                <>
                    <Stack id="Chat-scroll-bar" ref={scroll} direction='row' justifyContent={'end'}>
                        {/* {menu && <MessageOptions/>} */}

                        <Box p={2} sx={{
                            backgroundColor: "#F8E8FF", borderRadius: 1.5, width: 'max-content'
                        }}>
                            <Stack spacing={1}>
                                <Image
                                    id='chat-image'
                                    ref={imgRef}
                                    onClick={handleImageClick}
                                    width={0}
                                    height={0}
                                    src={userMessage.fileUrl}
                                    style={{ cursor: "pointer", objectFit: "cover", maxHeight: 210, borderRadius: '10px' }}
                                    alt="Description"
                                    quality={45} // Adjust image quality (0-100)
                                    layout="responsive" // Adjust image layout (fill, fixed, intrinsic, responsive)
                                    loading="lazy" // Adjust image loading behavior (lazy, eager)
                                />
                                <Stack direction="col" justifyContent={'space-between'} alignItems="center">
                                    <Typography style={messageText} variant='body2' color={"#000"}>
                                        {userMessage.message.length > 65 ? (
                                            <>
                                                {console.log("Message New Line")}
                                                {userMessage.message.slice(0, 65)} {<br />} {userMessage.message.slice(65)}
                                            </>
                                        ) : (
                                            userMessage.message
                                        )}
                                    </Typography>
                                    <Typography className='pl-[20px]' style={TimeText} variant='body2' color={"#000"}>
                                        {messageTime}
                                    </Typography>
                                </Stack>
                            </Stack>

                        </Box>
                        <MessageOptions data={userMessage} onDeleteMessage={onDeleteMessage} />
                        {/* <ProfileImage size={40} /> */}
                    </Stack>

                </>
                :
                <>

                    <Stack id="Chat-scroll-bar" ref={scroll} direction='row' justifyContent={'start'}>
                        <Box p={2} sx={{
                            backgroundColor: "#E1EDFF", borderRadius: 1.5, width: 'max-content'
                        }}>
                            <Stack spacing={1}>
                                <Image
                                    width={0}
                                    height={0}
                                    src={userMessage.fileUrl}
                                    sizes="max-height: 210px"
                                    style={{ objectFit: "cover", maxHeight: 210, borderRadius: '10px' }}
                                    alt="Description"
                                    quality={45} // Adjust image quality (0-100)
                                    layout="responsive" // Adjust image layout (fill, fixed, intrinsic, responsive)
                                    loading="lazy" // Adjust image loading behavior (lazy, eager)
                                />
                                <Stack direction="col" justifyContent={'space-between'} alignItems="center">
                                    <Typography style={messageText} variant='body2' color={"#000"}>
                                        {userMessage.message}
                                    </Typography>
                                    <Typography style={TimeText} variant='body2' color={"#000"}>
                                        {messageTime}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>


                        {/* {menu && <MessageOptions/>} */}
                    </Stack>
                </>
            }
        </>
    )
}


const TextMsg = ({ el, Outgoing, userMessage, sendAt, onDeleteMessage }) => {


    const { userData, updateUser } = useContext(UserContext);


    const getMessageTime = (sendAt) => {
        const timeDifference = Date.now() - sendAt;
        if (timeDifference < 3600000) {
            return moment(sendAt).fromNow(); // Format time as "X minutes ago"
        } else {
            return moment(sendAt).format('HH:mm'); // Format time as "HH:mm"
        }
    };

    const messageTime = getMessageTime(sendAt);

    const TimeText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        Opacity: "0.6"
    }

    const scroll = useRef();

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [userMessage.message])

    const [showFullMessage, setShowFullMessage] = useState(false);

    const handleToggleMessage = () => {
        setShowFullMessage(!showFullMessage);
    };

    const MAX_LENGTH = 80; // Adjust this to your preferred length
    const isLongMessage = userMessage?.message?.length > MAX_LENGTH;
    const displayedMessage = showFullMessage ? userMessage?.message : userMessage?.message?.substring(0, MAX_LENGTH);



    return (
        <>
            {
                Outgoing ?

                    <Stack id="Chat-scroll-bar" direction='row' justifyContent={'end'}>
                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#F8E8FF",
                                borderRadius: "18px",
                                // width: "max-content",
                                maxWidth: showFullMessage ? '50%' : '50%',


                            }}
                        >
                            <Typography variant='body2' color='#000'>
                                {displayedMessage}
                                {isLongMessage && (

                                    <span onClick={handleToggleMessage} style={{ color: 'blue', cursor: 'pointer' }}>
                                        <br />
                                        {showFullMessage ? ' Show less' : '...Read more'}
                                    </span>
                                )}
                                <div className='flex items-center justify-end'>
                                    <div className='p-[5px] text-right'>
                                        <h1 style={TimeText}>{messageTime}</h1>
                                    </div>
                                    <div>
                                        <Image width={15} height={15} src={"/assests/chat/receive-tick.svg"} loading='lazy' alt='receive' />
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                        <Box>
                            <MessageOptions onDeleteMessage={onDeleteMessage} data={userMessage} />
                        </Box>
                        {/* <ProfileImage size={40} /> */}
                    </Stack>
                    :
                    <Stack id="Chat-scroll-bar" ref={scroll} direction='row' justifyContent='start'>

                        <Box
                            p={2}
                            sx={{
                                backgroundColor: "#E1EDFF",
                                borderRadius: "18px",
                                // width: 'max-content'
                                maxWidth: showFullMessage ? '50%' : '50%',

                            }}
                        >
                            <Typography variant='body2' color='#000'>
                                {displayedMessage}
                                {isLongMessage && (
                                    <span onClick={handleToggleMessage} style={{ color: 'blue', cursor: 'pointer' }}>
                                        {showFullMessage ? ' Show less' : '...Read more'}
                                    </span>
                                )}
                                <div className='flex items-center justify-start'>
                                    <div className='p-[5px] text-right'>
                                        <h1 style={TimeText}>{messageTime}</h1>
                                    </div>
                                    <div>
                                        <Image width={15} height={15} src={"/assests/chat/receive-tick.svg"} loading='lazy' alt='receive' />
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                    </Stack>


            }

        </>
    );
};

export default TextMsg;

// const TimeLine = ({ el }) => {
//     const theme = useTheme();
//     return <Stack direction='row' alignItems='center' justifyContent='space-between'>
//         <Divider width='46%' />
//         <Typography style={messageText} variant='caption' sx={{ color: theme.palette.text }}>
//             {el.text}
//         </Typography>
//         <Divider width='46%' />
//     </Stack>
// }

const MessageOptions = ({ data, onDeleteMessage }) => {

    const socket = useSocket()


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const HanldeEvent = () => {

        onDeleteMessage(data.id);

        const objectdata = {
            "from": data.from,
            "to": data.to,
            "messageId": data.id,
            "messageDeletedAll": true
        }

        socket.emit("DeleteMessage", objectdata)

        socket.emit("getLastConversation", { from: data.from, to: data.to });
        socket.emit("getLastConversation", { to: data.from, from: data.to });

    }


    return (
        <>
            <svg

                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size={10}

                xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={1} px={1}>
                    {Message_options.map((el) => (
                        <MenuItem onClick={HanldeEvent}>{el.title}</MenuItem>
                    ))}
                </Stack>
            </Menu>
        </>
    )
}

const Safetytips = () => {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const TipsText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const [Tab, SetTab] = useState(0)


    const HandleNext = () => {
        // SetTab(Tab+1)
        if (Tab >= 2) {
            SetTab(0)
        } else {
            SetTab(Tab + 1)
        }
    }

    const RenderTabContent = () => {
        switch (Tab) {
            case 0: return ("Do not share your mobile number, personal details, bank detail or address until trust has been established.");
            case 1: return ("Avoid meeting at unknown places. If you choose to go, inform a trusted person about your plans.");
            case 2: return ("Share your live location with your parents for easy tracking during difficult times.");
        }
    }

    return (
        <>
            <div className='w-full h-full grid place-items-center mt-[20px] pt-[50px]'>
                <div className='2xl:w-[333px] 2xl:h-[272px] xl:w-[300px] xl:h-[200px] lg:w-[300px] lg:h-[200px] w-[333px] h-[272px]  rounded-[14px] border-[1px] border-[#E5BDF8] bg-[#FAF0FF]'>
                    <div className='w-full h-full flex flex-col items-center space-y-[31px]' id='Tips-content'>
                        <div className='mt-[25px]'>
                            <ul className='flex space-x-[9px]'>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path d="M7.66667 0H7V3H7.66667V0Z" fill="black" />
                                        <path d="M3.9328 0.799967L3.35547 1.1333L4.85547 3.7313L5.4328 3.39797L3.9328 0.799967Z" fill="black" />
                                        <path d="M1.15755 3.38678L0.824219 3.96411L3.42222 5.46411L3.75555 4.88678L1.15755 3.38678Z" fill="black" />
                                        <path d="M3 7H0V7.66667H3V7Z" fill="black" />
                                        <path d="M3.39908 9.23278L0.800781 10.7322L1.13398 11.3096L3.73228 9.81018L3.39908 9.23278Z" fill="black" />
                                        <path d="M11.2435 9.20489L10.9102 9.78223L13.5082 11.2822L13.8415 10.7049L11.2435 9.20489Z" fill="black" />
                                        <path d="M14.668 7H11.668V7.66667H14.668V7Z" fill="black" />
                                        <path d="M13.4925 3.35962L10.8945 4.85962L11.2279 5.43695L13.8259 3.93695L13.4925 3.35962Z" fill="black" />
                                        <path d="M10.7064 0.824552L9.20703 3.42285L9.78443 3.75605L11.2838 1.15775L10.7064 0.824552Z" fill="black" />
                                        <path d="M8.1 15.1L7.86667 15.3333H6.8L6.56667 15.1C6.5 15.0333 6.43333 15 6.33333 15H6V15.6667H6.2L6.43333 15.9C6.5 15.9667 6.56667 16 6.66667 16H8C8.1 16 8.16667 15.9667 8.23333 15.9L8.46667 15.6667H8.66667V15H8.33333C8.23333 15 8.16667 15.0333 8.1 15.1Z" fill="black" />
                                        <path d="M9.33203 12.3335H5.33203V13.0002H9.33203V12.3335Z" fill="black" />
                                        <path d="M9.33203 13.6665H5.33203V14.3332H9.33203V13.6665Z" fill="black" />
                                        <path d="M7.33464 3.6665C5.3013 3.6665 3.66797 5.29984 3.66797 7.33317C3.66797 8.33317 4.06797 9.29984 4.8013 9.99984C5.13464 10.3665 5.33464 10.8332 5.33464 11.3332V11.6665H6.0013V11.3332C6.0013 10.6665 5.76797 9.99984 5.26797 9.49984C4.66797 8.93317 4.33464 8.1665 4.33464 7.33317C4.33464 5.6665 5.66797 4.33317 7.33464 4.33317C9.0013 4.33317 10.3346 5.6665 10.3346 7.33317C10.3346 8.1665 10.0013 8.93317 9.4013 9.49984C8.9013 9.99984 8.66797 10.6665 8.66797 11.3332V11.6665H9.33464V11.3332C9.33464 10.8332 9.53464 10.3665 9.86797 9.99984C10.6013 9.29984 11.0013 8.33317 11.0013 7.33317C11.0013 5.29984 9.36797 3.6665 7.33464 3.6665Z" fill="black" />
                                        <path d="M6.99961 11.6668H7.66628V9.46676L8.56628 8.56676L8.09961 8.1001L7.33294 8.86676L6.56628 8.1001L6.09961 8.56676L6.99961 9.46676V11.6668Z" fill="black" />
                                        <path d="M7.66667 5.33333C7.66667 5.13333 7.53333 5 7.33333 5C6.03333 5 5 6.03333 5 7.33333C5 7.53333 5.13333 7.66667 5.33333 7.66667C5.53333 7.66667 5.66667 7.53333 5.66667 7.33333C5.66667 6.4 6.4 5.66667 7.33333 5.66667C7.53333 5.66667 7.66667 5.53333 7.66667 5.33333Z" fill="black" />
                                    </svg>
                                </li>
                                <li style={Title}>Safety Tips</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='w-[279px]' style={TipsText}>
                                    {RenderTabContent()}
                                    {/* Do not share your mobile number, personal details, bank detail or address until trust has been established. */}
                                </li>
                            </ul>
                        </div>
                        <div className='flex space-x-[9px]'>
                            {
                                [0, 1, 2].map((res) => {
                                    return (
                                        <>
                                            <div className={`rounded-[50%] w-[10px] h-[10px] bg-[#8225AF] ${Tab == res ? "" : "opacity-[0.1]"}`}></div>
                                        </>)
                                })
                            }

                        </div>
                        <div>
                            <button className={`${Tab >= 2 ? "w-[147px]" : "w-[73px]"} h-[34px] bg-[#0F52BA] rounded-[23px] text-[#FFF]`} onClick={HandleNext}>
                                {Tab >= 2 ? "I agree, start chat" : "Next"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const TypingMessage = () => {
    return (
        <>
            <Stack direction='row' justifyContent={'start'}>
                <Image
                    alt='img'
                    width={40}
                    height={40}
                    className='mr-[10px] w-[40px] h-[40px] ml-[5px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px]'
                    src='/assests/dashboard/request/req-6.svg'
                />
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: "#F0F0F0",
                        borderRadius: 1.5,
                        width: 'max-content'
                    }}
                >
                    <Typography variant='body2' color='#000'>
                        {"Typing...."}
                    </Typography>
                </Box>

            </Stack>
        </>
    )
}

const AudioMessage = ({ el, Outgoing, userMessage, sendAt, onDeleteMessage }) => {


    const { userData, updateUser } = useContext(UserContext);


    const audioSrc = "../assests/song/sample-6s.mp3"

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    // #audio-img #audio-button

    return (
        <>
            {
                Outgoing ?

                    <Stack id="Chat-scroll-bar" direction='row' sx={{ marginRight: "10px" }} justifyContent={'end'}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F8E8FF" }} p={2.5} className="player-card">
                            <Stack>
                                <svg id='audio-img' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M5.05013 21.8167H2.2168C1.60291 21.8167 1.09527 21.616 0.69388 21.2146C0.292491 20.8132 0.0917969 20.3056 0.0917969 19.6917V10.9083C0.0917969 9.39722 0.37513 7.98056 0.941797 6.65833C1.50846 5.33611 2.28763 4.17917 3.2793 3.1875C4.27096 2.19583 5.42791 1.41667 6.75013 0.85C8.07235 0.283333 9.48902 0 11.0001 0C12.5112 0 13.9279 0.283333 15.2501 0.85C16.5724 1.41667 17.7293 2.19583 18.721 3.1875C19.7126 4.17917 20.4918 5.33611 21.0585 6.65833C21.6251 7.98056 21.9085 9.39722 21.9085 10.9083V19.6917C21.9085 20.3056 21.7078 20.8132 21.3064 21.2146C20.905 21.616 20.3974 21.8167 19.7835 21.8167H16.9501V13.8833H20.9168V10.9083C20.9168 8.14583 19.9546 5.80243 18.0303 3.87812C16.106 1.95382 13.7626 0.991667 11.0001 0.991667C8.23763 0.991667 5.89423 1.95382 3.96992 3.87812C2.04562 5.80243 1.08346 8.14583 1.08346 10.9083V13.8833H5.05013V21.8167ZM4.05846 14.875H1.08346V19.6917C1.08346 19.975 1.20152 20.2347 1.43763 20.4708C1.67374 20.7069 1.93346 20.825 2.2168 20.825H4.05846V14.875ZM17.9418 14.875V20.825H19.7835C20.0668 20.825 20.3265 20.7069 20.5626 20.4708C20.7987 20.2347 20.9168 19.975 20.9168 19.6917V14.875H17.9418Z" fill="url(#paint0_linear_607_198)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_607_198" x1="-2.5" y1="-5.5" x2="22" y2="26.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0F52BA" />
                                            <stop offset="1" stop-color="#8225AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Stack>
                            <Stack>
                                <button id='audio-button' onClick={handlePlayPause}>
                                    <span class="material-symbols-rounded">
                                        {isPlaying ? <img src='../assests/song/Pause-icon.svg' /> : <img src='../assests/song/Play-icon.svg' />}
                                    </span>
                                </button>
                            </Stack>
                            <Stack className='pt-[15px]'>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration}
                                    value={currentTime}
                                    onChange={handleSeek}
                                />

                                <audio ref={audioRef} src={userMessage?.fileUrl} />

                                <Stack direction="row" className="track-duration">
                                    <p>{formatDuration(currentTime)}</p>
                                    <p>{formatDuration(duration)}</p>
                                </Stack>


                            </Stack>
                        </Box>
                        <MessageOptions />

                    </Stack>
                    :

                    <Stack id="Chat-scroll-bar" direction='row' justifyContent={'start'}>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#E1EDFF" }} className="player-card">
                            <Stack >
                                {/* <img id='audio-img' src="./assets/cover-image.jpg" alt="Cover Image" /> */}
                                <svg id='audio-img' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M5.05013 21.8167H2.2168C1.60291 21.8167 1.09527 21.616 0.69388 21.2146C0.292491 20.8132 0.0917969 20.3056 0.0917969 19.6917V10.9083C0.0917969 9.39722 0.37513 7.98056 0.941797 6.65833C1.50846 5.33611 2.28763 4.17917 3.2793 3.1875C4.27096 2.19583 5.42791 1.41667 6.75013 0.85C8.07235 0.283333 9.48902 0 11.0001 0C12.5112 0 13.9279 0.283333 15.2501 0.85C16.5724 1.41667 17.7293 2.19583 18.721 3.1875C19.7126 4.17917 20.4918 5.33611 21.0585 6.65833C21.6251 7.98056 21.9085 9.39722 21.9085 10.9083V19.6917C21.9085 20.3056 21.7078 20.8132 21.3064 21.2146C20.905 21.616 20.3974 21.8167 19.7835 21.8167H16.9501V13.8833H20.9168V10.9083C20.9168 8.14583 19.9546 5.80243 18.0303 3.87812C16.106 1.95382 13.7626 0.991667 11.0001 0.991667C8.23763 0.991667 5.89423 1.95382 3.96992 3.87812C2.04562 5.80243 1.08346 8.14583 1.08346 10.9083V13.8833H5.05013V21.8167ZM4.05846 14.875H1.08346V19.6917C1.08346 19.975 1.20152 20.2347 1.43763 20.4708C1.67374 20.7069 1.93346 20.825 2.2168 20.825H4.05846V14.875ZM17.9418 14.875V20.825H19.7835C20.0668 20.825 20.3265 20.7069 20.5626 20.4708C20.7987 20.2347 20.9168 19.975 20.9168 19.6917V14.875H17.9418Z" fill="url(#paint0_linear_607_198)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_607_198" x1="-2.5" y1="-5.5" x2="22" y2="26.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0F52BA" />
                                            <stop offset="1" stop-color="#8225AF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Stack>
                            <Stack>
                                <button id='audio-button' onClick={handlePlayPause}>
                                    <span class="material-symbols-rounded">
                                        {isPlaying ? <img src='../assests/song/Pause-icon.svg' /> : <img src='../assests/song/Play-icon.svg' />}
                                    </span>
                                </button>
                            </Stack>
                            <Stack className='pt-[15px]'>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration}
                                    value={currentTime}
                                    onChange={handleSeek}
                                />

                                <audio ref={audioRef} src={userMessage?.fileUrl} />

                                <Stack direction="row" className="track-duration">
                                    <p>{formatDuration(currentTime)}</p>
                                    <p>{formatDuration(duration)}</p>
                                </Stack>


                            </Stack>
                        </Box>
                    </Stack>
            }
        </>
    )
}


// should not be default export, because we need to export multiple things
export { Safetytips, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg, TypingMessage, AudioMessage }