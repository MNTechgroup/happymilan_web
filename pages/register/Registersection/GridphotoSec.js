import React, { useState } from "react";
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import { updateFormData } from '../../../store/actions/registerUser'
import Image from "next/image";



function GridphotoSec({ formData, updateFormData, }) {

    const data = useSelector((state) => state.form.formData.upload)

    const [TheImages, SetTheImages] = useState(data.images)
    const images = data.images


    const HandleRemove = (res) => {
        const filteredArray = TheImages.filter(item => item.id !== res.id)
        SetTheImages(filteredArray)

        updateFormData({
            ...formData,
            upload: {
                ...formData.upload,
                // ...images,
                images: filteredArray
            }
        });
        console.log(res)
    };

    const [SelectedGridImage, SetSelectedGridImage] = useState(null);

    const HandleGridImageClick = (index, items) => {

        if (items.contentType.startsWith('video/')) {
            return null
                ;
        } else {

            if (SelectedGridImage === index) {
                SetSelectedGridImage(null); // Unselect if already selected
            } else {
                SetSelectedGridImage(index); // Select the clicked image
                updateFormData({
                    ...formData,
                    upload: {
                        ...formData.upload,
                        images: TheImages.map((image, theindex) => ({
                            ...image,
                            isProfile: theindex === index, // Set isProfile to true for the selected image
                        }))
                    }
                });

            }
        }
    };


    const handleFileChange = (event) => {

        const files = event.target.files;
        if (files.length > 5) {
            alert('You can select a maximum of 5 files.');
            return;
        }


        // Iterate over each file



        const selectedImages = Array.from(files).map(file => ({
            key: file.name,
            contentType: file.type,
            // Add other properties you may need
        }));

        console.log("FileChange Calll")

        updateFormData({
            ...formData,
            upload: {
                ...formData.upload,
                ...images,
                images: [...selectedImages]
            }
        });

    }



    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const Text2 = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    return (
        <>
            <div className="w-full h-full grid place-items-center pb-[100px]">
                <div className="max-w-[1900px] pt-[100px]">
                    <div className="p-2 ">
                        <div className="pb-[20px]">
                            <h1 style={Text1}>
                                Select Photo to{" "}
                                <span className="text-[#0F52BA]">Set as profile picture</span>
                            </h1>
                        </div>
                        <div
                            className=" lg:grid lg:gap-y-[30px] gap-y-[20px] gap-x-[29px] flex justify-center lg:justify-left flex-wrap"
                            id="photo-grid-container"
                        >
                            {TheImages?.map((item, index) => {
                                return (
                                    <>

                                        <div
                                            key={index}
                                            className=" w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px]"
                                        >

                                            <div
                                                className={`${SelectedGridImage === index ? "block" : "hidden"
                                                    }  grid place-items-center  absolute  rounded-[8px]  w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-[#0F52BACC] `}
                                            >
                                                <img
                                                    src="/assests/common/Select-Right.svg"
                                                    className=""
                                                />
                                            </div>

                                            <Image width={0} height={0} alt={index} src={item?.data}
                                                style={{ objectFit: "cover" }}
                                                className=" w-[150px]   h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px]"
                                                id="photo-grid-item"
                                                onClick={() => HandleGridImageClick(index, item)}

                                            />

                                            <svg
                                                onClick={() => HandleRemove(item)}
                                                className="absolute z-[100] cursor-pointer relative top-[-92%] left-[83%]"
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
                                    </>);
                            })}

                            <label htmlFor="dropzone-file">

                                <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px] flex flex-col cursor-pointer justify-center items-center  bg-[#F1F1F1]">
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                        multiple />
                                    <div className="">
                                        <img src="./loginassests/register-icons/Drag-Drop.svg" />
                                    </div>
                                    <div className="mt-[10px]">
                                        <span className="" style={Text2}>
                                            Drag and drop a <span className="block">Photo/Video</span>
                                        </span>
                                    </div>

                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(GridphotoSec);
