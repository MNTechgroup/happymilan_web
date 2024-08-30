'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
import ProfileImage from '../common/profile/ProfileImage';
import { getCookie } from 'cookies-next';
import Modal from '../../longterm/dashboard/commonCompo/storyUploadcomp/components/Modal';
import { useDropzone } from 'react-dropzone';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../../store/actions/registerUser'
import { Getallstatus, Uploadmystory, Uploadmystorymodal } from '../../../store/actions/UsersAction';
import ViewStory from '../../longterm/dashboard/commonCompo/StoryModals/ViewStory';
import { Skeleton } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import { Getstoryviewsdata, ViewstoryPost } from '../../../store/actions/UserStoryAction';


function UserStory({ formData, updateFormData }) {

    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
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

    const dispatch = useDispatch();


    const { loading, data, mystory } = useSelector((state) => state.usersact.UsersStorydata)

    const [showPicker, setShowPicker] = useState(false);

    const pickerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const hanldeEmojiInput = (emoji) => {

        SetStoryCaption((prev) => {
            return prev + emoji.emoji
        })
    };

    useEffect(() => {
        dispatch(Getallstatus())
    }, [])

    const [Storyimagesrc, SetStoryimagesrc] = useState({
        storyViewType: "",
        Data: null
    });

    const [notification, setNotification] = React.useState({
        right: false, // Initialize only the 'right' anchor to be closed
    });

    const toggleNotification = (anchor, open) => (event) => {


        setNotification({ ...notification, [anchor]: open });
    };

    const HandleStoryOpen = (e, res) => {
        const name = e.currentTarget.getAttribute('name'); // Use currentTarget instead of target

        switch (name) {
            case "currentUser": dispatch(Getstoryviewsdata(res?.id))
                break;
            case "users-story": dispatch(ViewstoryPost(res))
                break;
            default: console.log("Other User ViewStory")
        }

        SetStoryimagesrc({
            storyViewType: name,
            Data: res
        })

        setNotification({ ...notification, 'right': true });
    }

    const NotificationList = (anchor) => (

        <ViewStory CloseBtn={toggleNotification('right', false)} Storyimagesrc={Storyimagesrc} />
    );

    //For Notification

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [imagesrc, setImagesrc] = useState();
    const [ActiveTab, SetActiveTab] = useState(1);


    const handleClose = () => {
        setOpen(false);
        SetActiveTab(1);
    };


    const StoryModal = useSelector((state) => state.usersact.StoryUpload)



    if (StoryModal.modalClose) {
        setOpen(false)
        SetActiveTab(1);
        dispatch(Uploadmystorymodal())
    }


    const thedata = useSelector((state) => state.form.formData.uploadStory)

    const [blobData, SetBlobdata] = useState({
        size: null,
        type: null,
        blob: null
    })

    const [Uname, setUname] = useState("")
    const [token, settoken] = useState("")

    useEffect(() => {
        setUname(getCookie("userName"))
        settoken(getCookie('authtoken'))
    }, [])

    const [modalOpen, setModalOpen] = useState(false)

    const [StoryCaption, SetStoryCaption] = useState("")

    const handleInputChange = (e) => {
        SetStoryCaption(e.target.value)
    }

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 1) {
            alert("Please select only one image");
            return;
        }

        const selectedImage = acceptedFiles[0];

        const imageData = {
            id: selectedImage.name,
            key: selectedImage.name,
            contentType: selectedImage.type,
            data: URL.createObjectURL(selectedImage),
            isProfile: false
        };

        SetBlobdata({
            size: selectedImage.size,
            type: selectedImage.type,
            blob: URL.createObjectURL(selectedImage)
        })

        setImagesrc(imageData.data)
        SetActiveTab(2)
        updateFormData({
            ...formData,
            uploadStory: {
                ...formData.uploadStory,
                imagesdata: imageData,
                bufferdata: URL.createObjectURL(selectedImage)
            }
        });
    }, []);

    const HandleNext = () => {

        if (ActiveTab === 2) {

            console.log("Done")
            dispatch(Uploadmystory(thedata, imagesrc, blobData, StoryCaption))
        } else { SetActiveTab(ActiveTab + 1) }
    }


    const HandleDeleteClick = () => {
        SetActiveTab(1)
        SetStoryCaption("")
        setShowPicker(false)
    }


    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });


    return (
        <>
            <div id='story-section-center' className='lg:top-0 top-20 pb-[20px] w-full lg:w-auto lg:pb-[0px] z-10 lg:z-0 bg-[white] mt-[-20px] lg:mt-0 lg:bg-none dark:bg-[#18191a] p-[5px] fixed  lg:relative left-[0px] 2xl:left-[50px] lg:left-[50px] xl:left-[60px] flex space-x-[15px]'>
                <>
                    {loading ? (
                        <Skeleton variant="circular" width={47} height={47} />
                    ) : (
                        <>

                            {mystory?.length > 0 ? (
                                <ul>
                                    {
                                        mystory.map((res) => (
                                            <li>
                                                <div name="currentUser" onClick={(e) => HandleStoryOpen(e, res)} style={{ boxSizing: 'content-box' }} className='w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center border-[2px] border-[blue]' id='story-gradient-border'><Image alt='user-1' width={47} height={47} style={{ objectFit: "cover", borderRadius: "50%", width: "47px", height: "47px", border: '2px solid transparent', }} src={res?.userId?.profilePic ? res?.userId?.profilePic : '/assests/dashboard/user/1.svg'} /></div>
                                            </li>
                                        ))
                                    }
                                </ul>

                            ) : (
                                <ul>
                                    <div className='w-[47px] h-[47px] bg-[#FFF] rounded-full grid place-items-center'>
                                        <div className='cursor-pointer'>
                                            <ProfileImage size={47} />
                                            <div className='relative left-[34px] top-[-17px]'>
                                                <Image loading='lazy' alt='add-icon' width={18} height={18} onClick={handleClickOpen} src='/assests/stories/Add-story-icon.svg' />
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            )}
                        </>
                    )}
                </>


                <Dialog
                    open={open}
                    onClose={handleClose}
                   
                    className='flex justify-center rounded-[20px]'

                >



                    <DialogContent   className='dark:bg-[#18191a] rounded-[20px]'>

                        <div className='space-y-[20px] rounded-[20px]'>
                            <div className='lg:pb-0 pb-[20px] flex items-center justify-between space-x-[20px]'>
                                <div>
                                    <h1 style={Text3}>Add Story</h1>
                                </div>


                            </div>

                            <div className=''>

                                {
                                    ActiveTab == 1 ? (
                                        <>

                                            <div className='md:pb-[20px] lg:pb-0 flex flex-col justify-center items-center space-y-[20px] w-full h-full   md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[526px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[20px]'>
                                                <div {...getRootProps()} className='mt-[10%] lg:mt-0 md:w-[60px] md:h-[60px] lg:w-auto lg:h-auto 2xl:w-auto 2xl:h-auto xl:w-auto xl:h-auto'>
                                                    <input {...getInputProps()} className="hidden" />
                                                    <Image loading='lazy' alt="drag-drop" width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
                                                </div>
                                                <div className='text-center'>
                                                    <h1 style={Text1} className='dark:text-[#FFF] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px]'>Select Photos</h1>
                                                    <p className='dark:text-[#FFF]' style={Text2}>Or drag and drop a file</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>


                                            <div className='dark:bg-[#242526] flex flex-col justify-center items-center space-y-[90px]  md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[526px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px]'>
                                                <div className='flex-col items-center flex items-center'>
                                                    <div className=' grid place-items-center md:w-[120px] md:h-[120px] lg:h-auto lg:w-[150px] 2xl:w-[190px] 2xl:h-[241px] xl:w-[190px] xl:h-[241px]'>
                                                        <Image style={{ objectFit: "cover", borderRadius: "10px" }} loading='lazy' alt='upload' width={190} height={241} src={imagesrc} />
                                                    </div>
                                                    <div onClick={HandleDeleteClick} className='cursor-pointer relative top-[50px]'>
                                                        <Image loading='lazy' alt='delete-icon' width={19.695} height={22.17} className='w-[19.695px] h-[22.17px]' src='/assests/Black/Delete.svg' />
                                                    </div>
                                                </div>
                                                <div ref={pickerRef} className='w-full'>

                                                    <div onClick={() => setShowPicker(!showPicker)} className={`absolute left-[35px] bottom-[55px]  cursor-pointer`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                                        </svg>
                                                    </div>
                                                    <div className='flex mt-[5px]'>
                                                        <div className='w-full'>
                                                            <input name='caption' value={StoryCaption} onChange={handleInputChange} placeholder='Caption..' type='text' className='lg:mt-0 mt-[20px] pl-[50px] w-full h-[40px] 2xl:h-[50px] md:h-[30px] xl:h-[50px] lg:h-[40px] rounded-[25px] border-[1px] border-[#DADADA] focus:outline-none focus:border-[1px] focus:border-[black]' />
                                                        </div>
                                                        <div className='w-[90px] grid place-items-center'>
                                                            <div className='hover:bg-[#F2F7FF]  p-[12px] rounded-full'>
                                                                <button disabled={StoryModal.loading} onClick={HandleNext}>
                                                                    <Image width={26} height={26} alt='send' src="/assests/chat/Send-Icon.svg" />
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        {showPicker ?
                                                            <div className='absolute z-[110] left-[30px] h-[300px] top-[0px]'>
                                                                <EmojiPicker onEmojiClick={hanldeEmojiInput} />
                                                            </div>
                                                            : null}
                                                    </div>
                                                </div>
                                            </div>


                                        </>

                                    )}

                            </div>
                        </div>
                    </DialogContent>

                </Dialog>
                {
                    loading ? <>
                        <Skeleton variant="circular" width={47} height={47} />
                    </> : <>

                        <ul id='hide-Story-scrollbar' className='relative flex overflow-y-auto  space-x-[10px] w-[60%]'>

                            {
                                data?.map((items, index) => {
                                    return (

                                        <li key={index}>
                                            <div name="users-story" onClick={(e) => HandleStoryOpen(e, items)} style={{ boxSizing: 'content-box' }} className='duration-100 hover:scale-90 w-[47px] h-[47px] cursor-pointer bg-[#FFF] rounded-full grid place-items-center border-[2px] border-[blue]'><Image alt='user-1' width={47} height={47} style={{ objectFit: "cover", borderRadius: "50%", width: "47px", height: "47px", border: '2px solid transparent', }} src={items?.userId?.profilePic ? items?.userId?.profilePic : '/assests/dashboard/user/no-profile.svg'} /></div>
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </>
                }
            </div>

            <Drawer
                anchor="right"
                BackdropProps={{ style: { opacity: 0 } }}
                open={notification['right']}
                onClose={toggleNotification('right', false)}
            >
                {NotificationList('right')}
            </Drawer>

            {modalOpen && (
                <Modal
                    setModalOpen={setModalOpen}
                    closeModal={() => setModalOpen(false)}
                />
            )}
        </>
    )
}


export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UserStory);