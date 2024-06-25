import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
function UserStory() {
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


    const [notification, setNotification] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed
    });

    const toggleNotification = (anchor, open) => (event) => {


        setNotification({ ...notification, [anchor]: open });
    };

    const NotificationList = (anchor) => (
        <Box
            sx={{ backgroundColor: 'black' }}
            className="w-[full] h-full lg:h-auto 2xl:w-[799px] xl:w-[699px]"

        >
            <div className='bg-[black] w-full 2xl:h-[100vh] xl:h-[565px] space-y-[20px]'>

                <div className='flex justify-between pt-[20px]'>
                    <div className='pl-[40px] flex items-center space-x-[20px]'>
                        <Image width={47} height={47} className="w-[47px] h-[47px]" src="/assests/dashboard/request/req-3.svg" />

                        <div className='text-left text-[#FFF]'>
                            <h1 style={Username} className='text-[14px]'>Rishikesh Shah</h1>
                            <p style={Activity}>27, Designer</p>
                        </div>
                    </div>

                    <div className='flex items-center pr-[40px]'>
                        <Image width={20} height={20} className='cursor-pointer' onClick={toggleNotification('right', false)} src='/assests/dashboard/story/cross-icon.svg' />
                    </div>
                </div>

                <div className='flex justify-center space-x-[90px] pt-[20px]'>

                    <div className=' flex items-center'>
                        <Image width={48} height={48} src='/assests/dashboard/story/arrow-left.svg' />
                    </div>
                    <div className=''>
                        <Image width={346} height={450} className='h-full lg:h-[450px] 2xl:w-auto 2xl:h-[450px] xl:h-[350px]' src='/assests/dashboard/story/story-pic.svg' />
                    </div>
                    <div className=' flex items-center'>
                        <Image width={48} height={48} src='/assests/dashboard/story/arrow-right.svg' />
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
                <div className='md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[230px] 2xl:w-[526px] 2xl:h-[330px] xl:w-[526px] xl:h-[330px] bg-[#F5F5F5] rounded-[10px]'>
                    <div className='mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto'>
                        <Image width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
                    </div>
                    <div className='text-center'>
                        <h1 style={Text1} className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]'>Select Photos</h1>
                        <p style={Text2}>Or drag and drop a file</p>
                    </div>
                </div>
            </>
        )
    }

    const PublishSection = () => {
        return (
            <>
                <div className='flex flex-col justify-center items-center space-y-[20px]  md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[230px] 2xl:w-[526px] xl:w-[526px] 2xl:h-[330px] xl:h-[330px]'>
                    <div className='flex items-center'>
                        <div className=' md:w-[120px] md:h-[120px] lg:h-auto lg:w-[150px] 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto'>
                            <Image width={190} height={241} src='/assests/dashboard/story/Upload-storypic.svg' />
                        </div>
                        <div className='relative left-[10%] md:left-[100px] lg:left-[120px] 2xl:left-[150px] xl:left-[150px]'>
                            <Image width={19.695} height={22.17} className='w-[19.695px] h-[22.17px]' src='/assests/Black/Delete.svg' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <input placeholder='Caption..' type='text' className='lg:mt-0 mt-[20px] pl-[20px] w-full h-[40px] 2xl:h-[50px] md:h-[30px] xl:h-[50px] lg:h-[40px] rounded-[10px] border-[1px] border-[#D8D8D8] focus:outline-none focus:border-[1px] focus:border-[black]' />
                    </div>
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
            <div id='story-section-center' className='pb-[20px] w-full lg:w-auto lg:pb-[0px] z-10 lg:z-0 bg-[white] mt-[-20px] lg:mt-0 lg:bg-none p-[5px] fixed  lg:relative left-[0px] 2xl:left-[50px] lg:left-[50px] xl:left-[60px] flex space-x-[15px]'>
                <div className='w-[47px] h-[47px] bg-[#FFF] rounded-full grid place-items-center'>
                    <Image width={47} height={47} onClick={handleClickOpen} src='/assests/dashboard/user/add-story.svg' /></div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    className='flex justify-center'

                >

                    <DialogContent className=''>
                        <div className='space-y-[20px]'>
                            <div className='lg:pb-0 pb-[20px] flex items-center justify-between space-x-[20px]'>
                                <div className='flex items-center space-x-[20px]'>
                                    <Image width={47} height={47} className="lg:w-[47px] lg:h-[47px] md:w-[40px] md:h-[40px]" src="/assests/dashboard/user/userProfile.svg" />
                                    <div className='text-[#000]'>
                                        <h1 style={Username} className='text-[10px] md:text-[12px] lg:text-[14px]'>Riya M Shah</h1>
                                        <p style={Activity}>27, Designer</p>
                                    </div>
                                </div>

                            </div>

                            <div className=''>

                                {RenderComponent()}

                                <div className='pt-[20px] md:pt-[30px] lg:pt-[20px] flex space-x-[28px] justify-center'>
                                    <button style={Text3} onClick={handleClose} className='w-[126px] h-[44px] md:w-[100px] md:h-[35px] lg:w-[126px] lg:h-[44px] xl:w-[126px] xl:h-[44px] 2xl:w-[126px] 2xl:h-[44px] rounded-[8px] bg-[#FFF] border-[1px] border-[#0F52BA] text-[#000]'>Close</button>
                                    <button id='grad-btn' style={Text3} onClick={ActiveTab === 2 ? handleClose : () => SetActiveTab(ActiveTab + 1)} className='w-[126px] h-[44px] md:w-[100px] md:h-[35px] lg:w-[126px] lg:h-[44px] xl:w-[126px] xl:h-[44px] 2xl:w-[126px] 2xl:h-[44px] rounded-[8px] bg-[#0F52BA] border-[1px] border-[#0F52BA] text-[#FFF]'>Publish</button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>

                </Dialog>
                <div onClick={toggleNotification('right', true)} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center'><Image width={47} height={47} src='/assests/dashboard/user/1.svg' /></div>
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