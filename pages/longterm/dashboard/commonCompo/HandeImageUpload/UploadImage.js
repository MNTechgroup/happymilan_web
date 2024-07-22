import { Dialog, DialogContent } from '@mui/material'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useDropzone } from 'react-dropzone'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateFormData } from '../../../../../store/actions/registerUser'
import { ImageUpload } from '../../../../../store/actions/ImageUpload'
import { fetchMyProfileData } from '../../../../../store/reducers/MyProfile'

function UploadImage({ formData, updateFormData, openUpload, handleCloseUpload }) {

    const TextTitle = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const Activity = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text4 = {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }
    const Text6 = {
        fontFamily: "Poppins",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "32px"
    }
    const Text7 = {
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [Uname, SetUname] = useState("")
    useEffect(() => {
        const name = getCookie("userName")
        SetUname(name)
    }, [])

    // const activeTab = 2
    const [activeTab, SetActiveTab] = useState(1)
    const [PreviewImage, SetPreviewImage] = useState([])

    const { userProfile, status } = useSelector((state) => state.form?.formData)


    const dispatch = useDispatch();


    const CloseTheModal = () => {
        handleCloseUpload();
        if (PreviewImage.length > 0) {

        } else {
            SetActiveTab(1)
        }

    }


    const HandleNext = () => {
        SetActiveTab(activeTab + 1)
        if (activeTab === 2) {
            handleCloseUpload()
            console.log(PreviewImage)
            dispatch(ImageUpload(userProfile))
            setTimeout(() => {
                dispatch(fetchMyProfileData());
                updateFormData({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [],
                        bufferdata: ""
                    }
                });
                SetPreviewImage([]);
            }, 2000);
            SetActiveTab(1)

        }
    }



    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 5) {
            alert("Please select only 5 images");
            return;
        }

        const selectedImages2 = Array.from(acceptedFiles).map((file, index) => ({
            id: index,
            key: file.name,
            contentType: file.type,
            data: URL.createObjectURL(file),
            isProfile: false

        }))
       

        SetPreviewImage(prev => [...prev, ...selectedImages2]);



        acceptedFiles.forEach((file) => {

            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {

                // const binaryData = reader.result;

                updateFormData({
                    ...formData,
                    userProfile: {
                        ...formData.userProfile,
                        images: [...selectedImages2],
                        bufferdata: URL.createObjectURL(file)
                    }
                });

                SetActiveTab(activeTab + 1)

            };

            reader.readAsArrayBuffer(file);


        });
    }, []);

    const UploadComponent = () => {

        const { getRootProps, getInputProps } = useDropzone({ onDrop })
        return (
            <>
                <div className='flex flex-col justify-center items-center space-y-[20px] w-[526px] h-[330px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[10px]'>

                    <div {...getRootProps()}>
                        <Image alt='drag-drop' width={63} height={44} src='/loginassests/register-icons/Drag-Drop.svg' />
                    </div>
                    <input {...getInputProps()} className="hidden" />
                    <div className='text-center'>
                        <h1 className='dark:text-[#FFF] text-[#000]' style={Text4}>Select Photos</h1>
                        <p className='dark:text-[#FFF] text-[#000]' style={Text2}>Or drag and drop a file</p>
                    </div>

                </div>
            </>

        )
    }

    const HandleRemove = (index) => {
        const updatedPreviewImage = PreviewImage.filter(item => item.data !== index);

        // Update the state with the filtered array
        SetPreviewImage(updatedPreviewImage);

    }

    const PreviewComponent = () => {
        const { getRootProps, getInputProps } = useDropzone({ onDrop })
        return (
            <>
                <div className='w-[526px] h-[330px] bg-[#F5F5F5] dark:bg-[#242526] rounded-[10px]'>
                    <div className='flex space-x-[20px]'>
                        {PreviewImage.map((res, index) => {
                            return (
                                <>


                                    <div
                                        key={index}
                                        className="cursor-pointer w-[150px] h-[150px] lg:w-[130px] lg:h-[130px] rounded-[10px] mt-[10px] ml-[10px]"
                                        style={{
                                            backgroundImage: `url(${res.data})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        id="photo-grid-item"

                                    >
                                        <svg
                                            onClick={() => HandleRemove(res.data)}
                                            className="z-[1] cursor-pointer relative ml-[80%] lg:ml-[78%] mt-[5%]"
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
                                    </div>
                                </>
                            )
                        })}


                        <div className='mt-[10px] h-[130px] w-[130px]  rounded-[10px] flex flex-col justify-center items-center dark:bg-[#303133]  bg-[#EBEBEB]'>
                            <div {...getRootProps()}>
                                <Image alt='drag-drop' width={35} height={35} src='/loginassests/register-icons/Drag-Drop.svg' />
                            </div>
                            <input {...getInputProps()} className="hidden" />
                            <div className='text-center mt-[5px]'>
                                <h1 className='dark:text-[#FFF] text-[#000]' style={Text6}>Select Photos</h1>
                                <p className='dark:text-[#FFF] text-[#000]' style={Text7}>Or drag and drop a file</p>
                            </div>
                        </div>

                    </div >
                </div>
            </>
        )
    }

    const RenderComponent = () => {
        switch (activeTab) {
            case 1:
                return <UploadComponent />
            case 2:
                return <PreviewComponent />
            default:
                return null;
        }
    }



    return (
        <>
            <Dialog
                open={openUpload}
                onClose={handleCloseUpload}
                className='flex justify-center'

            >

                <DialogContent className='dark:bg-[#303133] '>
                    <div className='space-y-[20px]'>
                        {/* <div className='flex items-center justify-between space-x-[20px]'>
                            <div className='flex items-center space-x-[20px]'>
                                <ProfileImage size={47} />
                                <div className='text-[#000]'>
                                    <h1 style={Username}>{Uname}</h1>
                                    <p style={Activity}>27, Designer</p>
                                </div>
                            </div>

                        </div> */}
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='dark:text-[#FFF]' style={TextTitle}>Upload Photo</h1>
                            </div>
                            <div>
                                <img alt='close-icon' onClick={CloseTheModal} className="w-[24px] h-[24px] cursor-pointer"  src="/assests/social/close.svg" />

                            </div>
                        </div>

                        <div className=''>

                            {RenderComponent()}

                            <div className='pt-[20px] flex space-x-[28px] justify-center'>
                                <button style={Text3} onClick={CloseTheModal} className='w-[126px] h-[44px] rounded-[24px] hover:bg-[#F3F8FF] bg-[#FFF] border-[1px] border-[#0F52BA] text-[#000]'>Close</button>
                                <button id='grad-btn' style={Text3} onClick={HandleNext} className='w-[126px] h-[44px] rounded-[24px] bg-[#0F52BA] border-[1px] border-[#0F52BA] text-[#FFF]'>Publish</button>
                            </div>
                        </div>
                    </div>
                </DialogContent>

            </Dialog>
        </>
    )
}

// export default UploadImage
export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(UploadImage);