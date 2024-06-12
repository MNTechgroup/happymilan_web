import { Box, Stack } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import Header from './ChatHeader';
import Footer from './UIChatFooter';
import Message from './UIChatmessage';
import Safetytips from '../SafetyTips/Safetytips';
import { useDispatch, useSelector } from 'react-redux';
import { SafetyConsentAction } from '../../../store/actions/safetyConsentActions';
import { UserContext } from '../../../ContextProvider/UsersConversationContext';
import { useSocket } from '../../../ContextProvider/SocketContext';

function UIConversation({ UserDetails }) {
    const dispatch = useDispatch();
    const SafetyCheck = useSelector((state) => state.chatSafetyConsent.safetyConsent);
    const { userData, updateUser } = useContext(UserContext);

    useEffect(() => {
        dispatch(SafetyConsentAction(userData.id));
    }, []);

    const socket = useSocket()

    return (
        <>
            <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
                {/* Chat header */}
                <Header socket={socket} />

                {/* Render safety tips or chat messages based on SafetyCheck */}
                {(SafetyCheck?.data && SafetyCheck.data.length > 0 && SafetyCheck.data.some(item => !item.primaryConsent)) || SafetyCheck?.data.length === 0 ? (
                    // Render safety tips if any item in the array has primaryConsent as false or if the array is empty
                    <Box className="bg-[#FFF] w-full h-full grid place-items-center">
                        <Safetytips UserDetails={UserDetails} />
                    </Box>
                ) : (
                    // Render chat messages if all items in the array have primaryConsent as true
                    <Box id="sidebarScroll" className='bg-[#FFF] scrollbar' width={"100%"} sx={{ flexGrow: 1, height: '100vh', overflowY: 'scroll' }}>
                        <Message  socket={socket} menu={true} />
                    </Box>
                )}


                {/* Chat footer */}
                <Footer socket={socket} />
            </Stack>
        </>
    );
}

export default UIConversation;
