import { Box, IconButton, Stack } from '@mui/material';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import { UserContext } from '../../../ContextProvider/UsersConversationContext';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser';
import { useDropzone } from 'react-dropzone';
import { setUploadUIVisibility } from '../../../store/reducers/registerReducer';
// import EmojiPicker from 'emoji-picker-react';
import dynamic from 'next/dynamic';
import RecordingInput from './RecordingInput';
import { useChatSettings } from '../../../ContextProvider/ChatSetingContext';

// Import EmojiPicker dynamically
const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });



const ChatInput = ({ HandleStopVoice, HanldeVoiceChat, setOpenPicker, StartVoice, socket, handleSendMessage, message, setMessage, updateFormData, formData }) => {


    const { imagesdata, bufferdata } = useSelector((state) => state.form.formData.uploadChatImage)


    const HanldeRemoveImage = () => {
        updateFormData({
            ...formData,
            uploadChatImage: {
                imagesdata: "",
                bufferdata: "",
                CaptionText: ""
            }
        });
    }


    const [typing, setTyping] = useState(false);
    const { userData, updateUser } = useContext(UserContext);

    const handleTyping = (e) => {
        const currentUser = getCookie("userid")
        const fromUserId = currentUser; // Replace with the actual sender user ID
        const toUserId = userData.id; // Replace with the actual recipient user ID
        const data = { from: fromUserId, to: toUserId };
        socket.emit('typing', data); // Emit the "typing" event to the server

        if (e.key === 'Enter') {


            if (bufferdata != "") {
                console.log("Hello 2")
                console.log(bufferdata)
                const CurrentUser = getCookie("userid")

                updateFormData({
                    ...formData,
                    uploadChatImage: {
                        ...formData.uploadChatImage,
                        CaptionText: message
                    }
                });

                const chatContent = {
                    "from": CurrentUser,
                    "to": userData.id,
                    "message": message,
                    "fileName": imagesdata.key,
                    "type": "image"
                }


                socket.emit("uploadContent", chatContent)

                socket.on('message', (data) => {

                    const CurrentUser = getCookie("userid")
                    if (data.data.message != "messages received") {

                        fetch(imagesdata.data)
                            .then(response => response.blob())
                            .then(blob => {
                                // Use the blob as needed

                                const axios = require('axios');
                                let config = {
                                    method: 'put',
                                    maxBodyLength: Infinity,
                                    url: data.data?.result.url,
                                    headers: {
                                        'Content-Type': 'image/jpeg',
                                        'x-amz-acl': 'public-read',
                                    },
                                    data: blob
                                };

                                axios.request(config)
                                    .then((response) => {

                                        const chatContent2 = {
                                            "from": CurrentUser,
                                            "to": userData.id,
                                            "message": message,
                                            "fileName": imagesdata.key,
                                            "type": "image"
                                        }

                                        console.log(JSON.stringify(response.data));
                                        socket.emit("sendMessage", chatContent2)
                                        updateFormData({
                                            ...formData,
                                            uploadChatImage: {
                                                imagesdata: "",
                                                bufferdata: "",
                                                CaptionText: ""
                                            }
                                        });

                                        setMessage('')
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });

                            })
                            .catch(error => {
                                console.error('Error fetching blob:', error);
                            });

                    }
                    // Update messages state with the received message
                });

            }
            e.preventDefault(); // Prevent default behavior of Enter key
            if (message.trim() !== '') {
                // Emit message using socket

                if (bufferdata != "") {

                    console.log("Caption Text : ", message)

                    updateFormData({
                        ...formData,
                        uploadChatImage: {
                            ...formData.uploadChatImage,
                            CaptionText: message
                        }
                    });

                } else {

                    const currentUser = getCookie("userid")
                    const objmsg = {
                        to: userData.id,
                        from: currentUser,
                        message: message
                    };
                    socket.emit('sendMessage', objmsg); // Emit the message to the server
                    setMessage('');
                }
            }
        }
    };
    const handleStopTyping = () => {
        setTyping(false);
        // socket.emit('typing', false); // Emit typing stop event stopTyping
        const currentUser = getCookie("userid")
        // socket.emit('typing', true); // Emit typing start event
        const fromUserId = currentUser; // Replace with the actual sender user ID
        const toUserId = userData.id; // Replace with the actual recipient user ID
        const data = { from: fromUserId, to: toUserId };
        socket.emit('stopTyping', data);
        // Emit the "typing" event to the server

    };

    const [recordingDuration, setRecordingDuration] = useState(0);


    useEffect(() => {
        let intervalId;

        if (StartVoice) {
            intervalId = setInterval(() => {
                setRecordingDuration(prevDuration => prevDuration + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
            setRecordingDuration(0);
        }

        return () => clearInterval(intervalId); // Clean up the interval on component unmount or when StartVoice changes
    }, [StartVoice]);



    if (StartVoice) {
        return (
            <RecordingInput HandleStopVoice={HandleStopVoice} HanldeVoiceChat={HanldeVoiceChat} recordingDuration={recordingDuration} />
        )
    }

    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "10px" }}>
            <Stack sx={{ backgroundColor: "#ECECEC", borderRadius: "25px" }}>

                <Stack sx={{ display: bufferdata == "" ? "none" : "", paddingLeft: "10px", borderRadius: "10px 10px 0 0", paddingTop: "10px", paddingBottom: "10px", height: "100%", backgroundColor: "#ECECEC" }}>
                    <svg
                        onClick={HanldeRemoveImage}
                        className="z-[1] cursor-pointer absolute ml-[90px] mt-[10px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="black"
                            fill-opacity="0.4"
                        />
                        <path
                            d="M14.1111 10.3333V15.8889H9.66667V10.3333H14.1111ZM13.2778 7H10.5L9.94444 7.55556H8V8.66667H15.7778V7.55556H13.8333L13.2778 7ZM15.2222 9.22222H8.55556V15.8889C8.55556 16.5 9.05556 17 9.66667 17H14.1111C14.7222 17 15.2222 16.5 15.2222 15.8889V9.22222Z"
                            fill="white"
                        />
                    </svg>
                    <Image loading='lazy' width={100} height={100} alt='user-image' style={{ objectFit: "cover", borderRadius: "10px", height: "120px", width: "120px" }} src={bufferdata} />
                </Stack>




                <input style={{ border: "1px solid #DADADA", paddingLeft: "50px", paddingTop: "12px", paddingBottom: "12px", borderRadius: "25px", backgroundColor: "#FFF" }} onKeyDown={handleTyping} onBlur={handleStopTyping} value={message} fullWidth onChange={(e) => setMessage(e.target.value)} placeholder='Write a message...' variant='filled' />
                <span
                    className='absolute bottom-[70px] ml-[24px]'
                    onClick={() => {
                        setOpenPicker((prev) => !prev);
                    }}>
                    <svg className='ml-[-10px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M13.6803 8.46153C14.0259 8.46153 14.318 8.34056 14.5566 8.09861C14.7952 7.85665 14.9145 7.56284 14.9145 7.21719C14.9145 6.87155 14.7936 6.57942 14.5516 6.34081C14.3096 6.10221 14.0158 5.98292 13.6702 5.98292C13.3245 5.98292 13.0324 6.10389 12.7938 6.34583C12.5552 6.5878 12.4359 6.8816 12.4359 7.22725C12.4359 7.5729 12.5569 7.86503 12.7988 8.10364C13.0408 8.34223 13.3346 8.46153 13.6803 8.46153ZM6.32981 8.46153C6.67545 8.46153 6.96758 8.34056 7.20619 8.09861C7.44481 7.85665 7.56411 7.56284 7.56411 7.21719C7.56411 6.87155 7.44313 6.57942 7.20117 6.34081C6.9592 6.10221 6.6654 5.98292 6.31975 5.98292C5.9741 5.98292 5.68197 6.10389 5.44336 6.34583C5.20477 6.5878 5.08547 6.8816 5.08547 7.22725C5.08547 7.5729 5.20644 7.86503 5.44839 8.10364C5.69035 8.34223 5.98416 8.46153 6.32981 8.46153ZM10 15.4274C11.0598 15.4274 12.036 15.135 12.9284 14.5502C13.8209 13.9655 14.4915 13.1895 14.9402 12.2222H13.8333C13.4259 12.9074 12.8843 13.4491 12.2083 13.8472C11.5324 14.2454 10.7963 14.4444 10 14.4444C9.2037 14.4444 8.46759 14.2454 7.79167 13.8472C7.11574 13.4491 6.57407 12.9074 6.16667 12.2222H5.05983C5.50854 13.1895 6.17912 13.9655 7.07158 14.5502C7.96403 15.135 8.94017 15.4274 10 15.4274ZM10.0037 20C8.62089 20 7.3208 19.7376 6.10344 19.2128C4.88609 18.688 3.82716 17.9757 2.92664 17.0761C2.02614 16.1764 1.31324 15.1185 0.787944 13.9023C0.262648 12.6861 0 11.3865 0 10.0037C0 8.62089 0.262398 7.3208 0.787195 6.10344C1.31201 4.88609 2.02425 3.82716 2.92392 2.92664C3.82358 2.02614 4.88152 1.31324 6.09772 0.787945C7.31394 0.262649 8.61346 0 9.99628 0C11.3791 0 12.6792 0.262398 13.8966 0.787194C15.1139 1.31201 16.1728 2.02425 17.0734 2.92392C17.9739 3.82358 18.6868 4.88152 19.2121 6.09772C19.7374 7.31394 20 8.61346 20 9.99628C20 11.3791 19.7376 12.6792 19.2128 13.8966C18.688 15.1139 17.9757 16.1728 17.0761 17.0734C16.1764 17.9739 15.1185 18.6868 13.9023 19.2121C12.6861 19.7374 11.3865 20 10.0037 20ZM10 18.8889C12.4815 18.8889 14.5833 18.0278 16.3056 16.3056C18.0278 14.5833 18.8889 12.4815 18.8889 10C18.8889 7.51852 18.0278 5.41667 16.3056 3.69444C14.5833 1.97222 12.4815 1.11111 10 1.11111C7.51852 1.11111 5.41667 1.97222 3.69444 3.69444C1.97222 5.41667 1.11111 7.51852 1.11111 10C1.11111 12.4815 1.97222 14.5833 3.69444 16.3056C5.41667 18.0278 7.51852 18.8889 10 18.8889Z" fill="black" />
                    </svg>
                </span>

            </Stack>
        </Box>
    )
}

const ChatFooter = ({ socket, formData, updateFormData }) => {

    const { userData, updateUser } = useContext(UserContext);

    const { imagesdata, bufferdata } = useSelector((state) => state.form.formData.uploadChatImage)


    const [openPicker, setOpenPicker] = useState(false);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (bufferdata != "") {
            const CurrentUser = getCookie("userid")

            updateFormData({
                ...formData,
                uploadChatImage: {
                    ...formData.uploadChatImage,
                    CaptionText: message
                }
            });

            const chatContent = {
                "from": CurrentUser,
                "to": userData.id,
                "message": message ? message : "",
                "fileName": imagesdata.key,
                "type": "image"
            }

            const chatContentobj = {
                "from": CurrentUser,
                "to": userData.id,
                "fileName": imagesdata.key,
                "type": "image"
            }

            console.log("🚀 ~ handleSendMessage ~ chatContent:", message ? chatContent : chatContentobj)

            socket.emit("uploadContent", message ? chatContent : chatContentobj)

            socket.on('message', (data) => {

                const CurrentUser = getCookie("userid")
                if (data.data.message != "messages received") {
                    console.log("🚀 ~ socket.on ~ imagesdata:", imagesdata)


                    fetch(imagesdata.data)
                        .then(response => response.blob())
                        .then(blob => {
                            console.log("🚀 ~ socket.on ~ blob:", blob)
                            // Use the blob as needed

                            const axios = require('axios');
                            let config = {
                                method: 'put',
                                maxBodyLength: Infinity,
                                url: data.data?.result.url,
                                headers: {
                                    'Content-Type': 'image/jpeg',
                                    'x-amz-acl': 'public-read',
                                },
                                data: blob
                            };

                            axios.request(config)
                                .then((response) => {

                                    const chatContent2 = {
                                        "from": CurrentUser,
                                        "to": userData?.id,
                                        "message": message ? message : "",
                                        "fileName": imagesdata?.key,
                                        "type": "image"
                                    }

                                    console.log(JSON.stringify(response.data));
                                    socket.emit("sendMessage", chatContent2)
                                    updateFormData({
                                        ...formData,
                                        uploadChatImage: {
                                            imagesdata: "",
                                            bufferdata: "",
                                            CaptionText: ""
                                        }
                                    });

                                    setMessage('')
                                })
                                .catch((error) => {
                                    console.log(error);
                                });

                        })
                        .catch(error => {
                            console.error('Error fetching blob:', error);
                        });

                }

                // Update messages state with the received message
            });



        } else {

            if (message.trim() !== '') {



                const currentUser = getCookie("userid")
                const objmsg = {
                    to: userData?.id,
                    from: currentUser,
                    message: message
                };
                socket.emit('sendMessage', objmsg); // Emit the message to the server
                setMessage('');
            }

        }
    };

    const HandleEmojiSelect = (emoji) => {

        // setMessage(message + emoji.emoji)
        setMessage((prevMessage) => prevMessage + emoji.emoji);

    }
    const [StartVoice, SetStartVoice] = useState(false)

    const recorderRef = useRef(null);
    const audioChunks = useRef([]);

    const HanldeVoiceChat = async () => {
        SetStartVoice(!StartVoice)
        console.log("Start")
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            recorderRef.current = new MediaRecorder(stream);
            recorderRef.current.ondataavailable = (e) => audioChunks.current.push(e.data);
            recorderRef.current.start();
            SetStartVoice(true);
        } catch (err) {
            console.error('Error accessing microphone:', err);
        }

    }

    const uploadAndEmitAudioBlob = () => {
        if (audioChunks.current.length === 0) return;

        const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
        console.log('Blob data:', blob);




        const currentUser = getCookie("userid");


        const chatContent = {
            "from": currentUser,
            "to": userData.id,
            "fileName": "audio.webm",
            "type": "audio",
        };

        socket.emit("uploadContent", chatContent);
        console.log(" ~ uploadAndEmitAudioBlob ~ chatContent:", chatContent);

        socket.on('message', (data) => {
            console.log(" ~ socket.on ~ data:", data);

            const CurrentUser = getCookie("userid");

            if (!data.data?.result?.url) {
                console.error("Missing upload URL in response!");
                return; // Handle missing upload URL
            }

            const uploadUrl = data.data.result.url;

            const axios = require('axios');
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: uploadUrl,
                headers: {
                    'Content-Type': blob.type,
                    'x-amz-acl': 'public-read', // Adjust headers as needed
                },
                data: blob
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    const chatContent2 = {
                        "from": CurrentUser,
                        "to": userData.id,
                        "message": message, // Assuming you have a message state
                        "fileName": "audio",
                        "type": blob.type
                    };

                    socket.emit("sendMessage", chatContent2);
                    setMessage('');
                    audioChunks.current = []; // Clear recorded audio data
                })
                .catch((error) => {
                    console.error("Error uploading blob:", error);
                    // Handle upload errors (e.g., display error message to user)
                });
        });

    };


    const HandleStopVoice = () => {
        SetStartVoice(false)
        console.log("Stop")
        recorderRef.current.stop();
        uploadAndEmitAudioBlob();
    }



    useEffect(() => {
        // Cleanup recorder on component unmount
        return () => {
            if (recorderRef.current) {
                recorderRef.current.stop();
            }
        };
    }, []);

    //Upload Image

    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 1) {
            alert("Please select only one image");
            return;
        }

        const selectedImage = acceptedFiles[0];
        const userId = userData?.id;

        dispatch(setUploadUIVisibility({ userId, isVisible: true }));

        const imageData = {
            id: selectedImage?.name,
            key: selectedImage?.name,
            contentType: selectedImage?.type,
            data: URL.createObjectURL(selectedImage),
            isProfile: false
        };

        updateFormData({
            ...formData,
            uploadChatImage: {
                ...formData.uploadChatImage,
                imagesdata: imageData,
                bufferdata: URL.createObjectURL(selectedImage)
            }
        });
    }, []);

    const { settings, setSettings } = useChatSettings();


    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });



    return (
        <Box p={2} sx={{ width: '100%', backgroundColor: '#FFF' }}>
            <Stack direction='row' alignItems={'center'} spacing={3}>
                <Stack sx={{ background: "none", width: '100%' }}>
                    {/* Chat Input */}
                    <Box sx={{ display: openPicker ? 'inline' : 'none', zIndex: 10, position: 'fixed', bottom: 120, right: 'auto' }}>
                        {/* <Picker  onEmojiSelect={HandleEmojiSelect} /> */}
                        <EmojiPicker onEmojiClick={HandleEmojiSelect} />
                    </Box>
                    <ChatInput HandleStopVoice={HandleStopVoice} HanldeVoiceChat={HanldeVoiceChat} formData={formData} updateFormData={updateFormData} socket={socket} StartVoice={StartVoice} handleSendMessage={handleSendMessage} setMessage={setMessage} message={message} setOpenPicker={setOpenPicker} />
                </Stack>

                <Box sx={{
                    height: 48, width: 48,
                    borderRadius: 1.5
                }}>
                    <Stack sx={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton onClick={handleSendMessage}>
                            {/* <Image loading='lazy' alt="send-message" width={29} height={24} src="/assests/dashboard/chats/send-icon.svg" /> */}
                            <Image loading='lazy' alt="send-message" width={29} height={24} src="/assests/chat/Send-Icon.svg" />

                        </IconButton>
                    </Stack>

                </Box>
            </Stack>
            <Stack>
                <div className='chat-input-list-items'>
                    <div className='mt-[20px] ml-[10px]'>
                        <ul className='flex space-x-[30px]'>
                            <li>

                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                    <path d="M11.2464 15.8221C12.5244 15.8221 13.5978 15.3878 14.4663 14.5192C15.3349 13.6506 15.7693 12.5773 15.7693 11.2993C15.7693 10.0212 15.3349 8.94912 14.4663 8.08294C13.5978 7.21675 12.5244 6.78366 11.2464 6.78366C9.96834 6.78366 8.89622 7.21675 8.03003 8.08294C7.16384 8.94912 6.73075 10.0212 6.73075 11.2993C6.73075 12.5773 7.16384 13.6506 8.03003 14.5192C8.89622 15.3878 9.96834 15.8221 11.2464 15.8221ZM11.2464 14.8606C10.2328 14.8606 9.38702 14.5204 8.70912 13.8402C8.03125 13.1599 7.69231 12.3129 7.69231 11.2993C7.69231 10.2857 8.03125 9.43991 8.70912 8.76203C9.38702 8.08414 10.2328 7.74519 11.2464 7.74519C12.26 7.74519 13.107 8.08414 13.7873 8.76203C14.4675 9.43991 14.8077 10.2857 14.8077 11.2993C14.8077 12.3129 14.4675 13.1599 13.7873 13.8402C13.107 14.5204 12.26 14.8606 11.2464 14.8606ZM1.73075 20C1.2504 20 0.841844 19.8316 0.505094 19.4949C0.168364 19.1582 0 18.7496 0 18.2692V4.32931C0 3.85015 0.168364 3.4419 0.505094 3.10456C0.841844 2.76723 1.2504 2.59856 1.73075 2.59856H5.72356L8.02884 0H14.4712L16.7764 2.59856H20.7693C21.2484 2.59856 21.6567 2.76723 21.994 3.10456C22.3313 3.4419 22.5 3.85015 22.5 4.32931V18.2692C22.5 18.7496 22.3313 19.1582 21.994 19.4949C21.6567 19.8316 21.2484 20 20.7693 20H1.73075ZM20.7693 19.0385C20.9936 19.0385 21.1779 18.9664 21.3221 18.8221C21.4664 18.6779 21.5385 18.4936 21.5385 18.2692V4.32931C21.5385 4.12098 21.4664 3.9407 21.3221 3.78847C21.1779 3.63622 20.9936 3.56009 20.7693 3.56009H16.3341L14.0288 0.961531H8.47116L6.16588 3.56009H1.73075C1.5064 3.56009 1.3221 3.63622 1.17788 3.78847C1.03365 3.9407 0.961531 4.12098 0.961531 4.32931V18.2692C0.961531 18.4936 1.03365 18.6779 1.17788 18.8221C1.3221 18.9664 1.5064 19.0385 1.73075 19.0385H20.7693Z" fill="black" />
                                </svg>
                            </li>
                            <li {...getRootProps()} className='cursor-pointer'>
                                <input {...getInputProps()} type='file' className='cursor-pointer opacity-0 w-[11px] absolute' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                                    <path d="M11 14.55C11 16.0694 10.4625 17.3576 9.3875 18.4145C8.3125 19.4715 7.01667 20 5.5 20C3.98333 20 2.6875 19.4792 1.6125 18.4375C0.5375 17.3958 -1.69746e-07 16.1167 -2.36042e-07 14.6L-7.05939e-07 3.85C-7.52218e-07 2.79125 0.379533 1.88489 1.1386 1.13092C1.89768 0.376974 2.81018 -1.22837e-07 3.8761 -1.6943e-07C4.94203 -2.16023e-07 5.85417 0.376974 6.6125 1.13092C7.37083 1.88489 7.75 2.79125 7.75 3.85L7.75 13.725C7.75 14.362 7.53216 14.9004 7.09648 15.3402C6.66079 15.7801 6.12746 16 5.49648 16C4.86549 16 4.33333 15.7708 3.9 15.3125C3.46667 14.8542 3.25 14.3083 3.25 13.675L3.25 3.85L4.25 3.85L4.25 13.7C4.25 14.05 4.36938 14.3542 4.60813 14.6125C4.84686 14.8708 5.14269 15 5.49563 15C5.84854 15 6.14583 14.875 6.3875 14.625C6.62917 14.375 6.75 14.075 6.75 13.725L6.75 3.85C6.75 3.052 6.47259 2.3775 5.91777 1.8265C5.36297 1.2755 4.68381 1 3.88027 1C3.07676 1 2.39583 1.2755 1.8375 1.8265C1.27917 2.3775 0.999999 3.052 0.999999 3.85L1 14.65C1 15.8667 1.44062 16.8958 2.32187 17.7375C3.20313 18.5792 4.2625 19 5.5 19C6.75 19 7.8125 18.5708 8.6875 17.7125C9.5625 16.8542 10 15.8083 10 14.575L10 3.85L11 3.85L11 14.55Z" fill="black" />
                                </svg>
                            </li>
                            <li className='cursor-pointer' onClick={HanldeVoiceChat}>
                                {StartVoice ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                    <path d="M7 11.4286C6.34188 11.4286 5.78847 11.2088 5.33975 10.7692C4.89103 10.3297 4.66667 9.78754 4.66667 9.14286V2.28571C4.66667 1.64103 4.89103 1.09891 5.33975 0.659344C5.78847 0.219782 6.34188 0 7 0C7.65812 0 8.21153 0.219782 8.66025 0.659344C9.10897 1.09891 9.33333 1.64103 9.33333 2.28571V9.14286C9.33333 9.78754 9.10897 10.3297 8.66025 10.7692C8.21153 11.2088 7.65812 11.4286 7 11.4286ZM6.41667 20V15.9802C4.58889 15.8161 3.0625 15.0843 1.8375 13.7846C0.6125 12.485 0 10.9377 0 9.14286H1.16667C1.16667 10.7238 1.73542 12.0714 2.87292 13.1857C4.01042 14.3 5.38611 14.8571 7 14.8571C8.61389 14.8571 9.98958 14.3 11.1271 13.1857C12.2646 12.0714 12.8333 10.7238 12.8333 9.14286H14C14 10.9377 13.3875 12.485 12.1625 13.7846C10.9375 15.0843 9.41111 15.8161 7.58333 15.9802V20H6.41667ZM7 10.2857C7.33056 10.2857 7.60764 10.1762 7.83125 9.95714C8.05486 9.7381 8.16667 9.46667 8.16667 9.14286V2.28571C8.16667 1.9619 8.05486 1.69048 7.83125 1.47143C7.60764 1.25238 7.33056 1.14286 7 1.14286C6.66944 1.14286 6.39236 1.25238 6.16875 1.47143C5.94514 1.69048 5.83333 1.9619 5.83333 2.28571V9.14286C5.83333 9.46667 5.94514 9.7381 6.16875 9.95714C6.39236 10.1762 6.66944 10.2857 7 10.2857Z" fill="url(#paint0_linear_607_216)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_607_216" x1="4.01326e-07" y1="-8.5" x2="14" y2="23" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0F52BA" />
                                            <stop offset="1" stop-color="#8225AF" />
                                        </linearGradient>
                                    </defs>
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                        <path d="M7 11.4286C6.34188 11.4286 5.78847 11.2088 5.33975 10.7692C4.89103 10.3297 4.66667 9.78754 4.66667 9.14286V2.28571C4.66667 1.64103 4.89103 1.09891 5.33975 0.659344C5.78847 0.219782 6.34188 0 7 0C7.65812 0 8.21153 0.219782 8.66025 0.659344C9.10897 1.09891 9.33333 1.64103 9.33333 2.28571V9.14286C9.33333 9.78754 9.10897 10.3297 8.66025 10.7692C8.21153 11.2088 7.65812 11.4286 7 11.4286ZM6.41667 20V15.9802C4.58889 15.8161 3.0625 15.0843 1.8375 13.7846C0.6125 12.485 0 10.9377 0 9.14286H1.16667C1.16667 10.7238 1.73542 12.0714 2.87292 13.1857C4.01042 14.3 5.38611 14.8571 7 14.8571C8.61389 14.8571 9.98958 14.3 11.1271 13.1857C12.2646 12.0714 12.8333 10.7238 12.8333 9.14286H14C14 10.9377 13.3875 12.485 12.1625 13.7846C10.9375 15.0843 9.41111 15.8161 7.58333 15.9802V20H6.41667ZM7 10.2857C7.33056 10.2857 7.60764 10.1762 7.83125 9.95714C8.05486 9.7381 8.16667 9.46667 8.16667 9.14286V2.28571C8.16667 1.9619 8.05486 1.69048 7.83125 1.47143C7.60764 1.25238 7.33056 1.14286 7 1.14286C6.66944 1.14286 6.39236 1.25238 6.16875 1.47143C5.94514 1.69048 5.83333 1.9619 5.83333 2.28571V9.14286C5.83333 9.46667 5.94514 9.7381 6.16875 9.95714C6.39236 10.1762 6.66944 10.2857 7 10.2857Z" fill="black" />
                                    </svg>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </Stack>
        </Box>
    )
}


export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(ChatFooter);
