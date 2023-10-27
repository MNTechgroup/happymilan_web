import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@material-tailwind/react';
function UserStory() {
    // const Text2 = {
    //     fontFamily: "Poppins",
    //     fontSize: "14px",
    //     fontStyle: "normal",
    //     fontWeight: "400",
    //     lineHeight: "normal"
    // }
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Username = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Activity = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }

    const BoxSdow2 = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.03)"
    }

    const [notification, setNotification] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed
    });

    const toggleNotification = (anchor, open) => (event) => {


        setNotification({ ...notification, [anchor]: open });
    };


    const NotificationList = (anchor) => (
        <Box
            sx={{ backgroundColor: 'black' }}
            className="w-[799px] 2xl:w-[799px] xl:w-[699px]"

        >
            <div className='bg-[black] w-full 2xl:h-[100vh] xl:h-[565px] space-y-[20px]'>

                <div className='flex justify-between pt-[20px]'>
                    <div className='pl-[40px] flex items-center space-x-[20px]'>
                        <img className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-3.svg" />

                        <div className='text-left text-[#FFF]'>
                            <h1 style={Username}>Rishikesh Shah</h1>
                            <p style={Activity}>27, Designer</p>
                        </div>
                    </div>

                    <div className='flex items-center pr-[40px]'>
                        <img className='cursor-pointer' onClick={toggleNotification('right', false)} src='/assests/dashboard/story/cross-icon.svg' />
                    </div>
                </div>

                <div className='flex justify-center space-x-[90px] pt-[20px]'>

                    <div className=' flex items-center'>
                        <img src='/assests/dashboard/story/arrow-left.svg' />
                    </div>
                    <div className=''>
                        <img className='2xl:w-auto 2xl:h-[450px] xl:h-[350px]' src='/assests/dashboard/story/story-pic.svg' />
                    </div>
                    <div className=' flex items-center'>
                        <img src='/assests/dashboard/story/arrow-right.svg' />
                    </div>

                </div>

                <div className='text-center text-[white]'>
                    <h1 style={Text4}>My Latest Click ❤️</h1>
                </div>

            </div>
        </Box>
    );

    //For Notification
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        SetActiveTab(1);
    };

    const UploadSection = () => {
        return (
            <>
                <div className='flex flex-col justify-center items-center space-y-[20px] w-[526px] h-[330px] bg-[#F5F5F5] rounded-[10px]'>
                    <div>
                        <img src='/loginassests/register-icons/Drag-Drop.svg' />
                    </div>
                    <div className='text-center'>
                        <h1 style={Text1}>Select Photos</h1>
                        <p style={Text2}>Or drag and drop a file</p>
                    </div>
                </div>
            </>
        )
    }

    const PublishSection = () => {
        return (
            <>
                <div className='flex flex-col justify-center items-center space-y-[20px] w-[526px] h-[330px]'>
                    <div className='flex items-center'>
                        <div>
                            <img src='/assests/dashboard/story/Upload-storypic.svg' />
                        </div>
                        <div className='relative left-[150px]'>
                            <img className='w-[19.695px] h-[22.17px]' src='/assests/Black/Delete.svg' />
                        </div>
                    </div>
                    <input placeholder='Caption..' type='text' className='pl-[20px] w-full h-[50px] rounded-[10px] border-[1px] border-[#D8D8D8] focus:outline-none focus:border-[1px] focus:border-[black]' />
                </div>
            </>
        )
    }
    const [ActiveTab, SetActiveTab] = useState(1);
    const RenderComponent = () => {

        switch (ActiveTab) {
            case 1: return <UploadSection />;
            case 2: return <PublishSection />;
            default: ""
        }

    }
    return (
        <>
            <div className='p-[5px] relative left-[50px] 2xl:left-[50px] xl:left-[60px] flex space-x-[15px]'>
                <div className='w-[47px] h-[47px] bg-[#FFF] rounded-full grid place-items-center'>
                    <img onClick={handleClickOpen} src='/assests/dashboard/user/add-story.svg' /></div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    className='flex justify-center'

                >

                    <DialogContent className=''>
                        <div className='space-y-[20px]'>
                            <div className='flex items-center justify-between space-x-[20px]'>
                                <div className='flex items-center space-x-[20px]'>
                                <img className="w-[47px] h-[47px]" src="/assests/dashboard/user/userProfile.svg" />
                                <div className='text-[#000]'>
                                    <h1 style={Username}>Riya M Shah</h1>
                                    <p style={Activity}>27, Designer</p>
                                </div>
                                </div>
                                <div onClick={handleClose} className='cursor-pointer  relative right-[5px]'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M1.53846 20L0 18.4615L8.46154 10L0 1.53846L1.53846 0L10 8.46154L18.4615 0L20 1.53846L11.5385 10L20 18.4615L18.4615 20L10 11.5385L1.53846 20Z" fill="#000" />
                                    </svg>
                                </div>
                            </div>

                            <div className=''>

                                {RenderComponent()}

                                <div className='pt-[20px] flex space-x-[28px] justify-center'>
                                    <button style={Text3} onClick={handleClose} className='w-[126px] h-[44px] rounded-[8px] bg-[#FFF] border-[1px] border-[#0F52BA] text-[#000]'>Close</button>
                                    <button style={Text3} onClick={ActiveTab === 2 ? handleClose : () => SetActiveTab(ActiveTab + 1)} className='w-[126px] h-[44px] rounded-[8px] bg-[#0F52BA] border-[1px] border-[#0F52BA] text-[#FFF]'>Publish</button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>

                </Dialog>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><img src='/assests/dashboard/user/1.svg' /></div>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><img src='/assests/dashboard/user/2.svg' /></div>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><img src='/assests/dashboard/user/3.svg' /></div>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><img src='/assests/dashboard/user/4.svg' /></div>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><img src='/assests/dashboard/user/5.svg' /></div>
            </div>

            <Drawer
                anchor="right"
                BackdropProps={{ style: { opacity: 0 } }}
                open={notification['right']}
                onClose={toggleNotification('right', false)}
            >
                {NotificationList('right')}
            </Drawer>
        </>
    )
}

export default UserStory