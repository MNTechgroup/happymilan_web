import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'
import { updateFormData } from '../../../store/actions/registerUser'


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

function GridphotoSec({ formData, updateFormData, }) {

    const data = useSelector((state) => state.form.formData.upload)
    const images = data.images
    const Gridlayout = [
        { id: 1, image: "/assests/userpics/1.jpg", type: "image" },
        { id: 2, image: "/assests/userpics/2.jpg", type: "image" },
        { id: 3, image: "/assests/userpics/3.jpg", type: "image" },
        { id: 4, image: "/assests/userpics/4.jpg", type: "image" },
        { id: 5, image: "/assests/userpics/5.jpg", type: "image" },
        { id: 7, image: "/assests/common/Rectangle385.svg", type: "video" },
    ];

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [griddata, setgriddata] = useState(Gridlayout);
    const [selectedImage, setSelectedImage] = useState("");

    const HandleRemove = (id) => {
        setgriddata((prev) => {
            return prev.filter((dt) => id !== dt.id);
        });
    };

    const HandleImageclick = (items) => {
        handleOpen(true);
        setSelectedImage(items.key);
    };
    const [SelectedGridImage, SetSelectedGridImage] = useState(null);

    const HandleGridImageClick = (index) => {
        if (SelectedGridImage === index) {
            SetSelectedGridImage(null); // Unselect if already selected
            console.log("<== image clicked 1 ==>")
        } else {
            SetSelectedGridImage(index); // Select the clicked image
            console.log("<== image clicked 2 ==>",index)

            updateFormData({
                ...formData,
                upload: {
                    ...formData.upload,
                    images: images.map((image, theindex) => ({
                        ...image,
                        isProfile: theindex === index, // Set isProfile to true for the selected image
                    }))
                }
            });

        }
    };

    console.log("Grid data : ", images)

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

        updateFormData({
            ...formData,
            upload: {
                ...formData.upload,
                ...images,
                images: [...selectedImages]
            }
        });

    }

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
                            {images?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="cursor-pointer w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px]"
                                        style={{
                                            backgroundImage: `url(${item.data})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        id="photo-grid-item"
                                        onClick={() =>
                                            HandleGridImageClick(index)
                                        }
                                    >
                                        <svg
                                            onClick={() => HandleRemove(item.key)}
                                            className="z-[1] cursor-pointer relative ml-[80%] lg:ml-[85%] mt-[5%]"
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

                                        {item.contentType != "video" ? (
                                            <>
                                                <div
                                                    className={`${SelectedGridImage === index ? "block" : "hidden"
                                                        }  grid place-items-center  relative lg:top-[-33px] top-[-31px] rounded-[8px]  w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-[#0F52BACC] bg-opacity-70`}
                                                >
                                                    <img
                                                        src="./assests/common/Select-Right.svg"
                                                        className=""
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="grid place-items-center w-full h-[65%]">
                                                <img
                                                    onClick={() => {
                                                        item.type != "video" ? "" : HandleImageclick(item);
                                                    }}
                                                    src="/assests/common/videoPlay-icon.svg"
                                                />
                                            </div>
                                        )}

                                    </div>
                                );
                            })}

                            {/* {images.map((image, index) => (
                               
                              
                                <img key={index} src={getImageBlobUrl(image)} alt={image.key} />
                            

                               // <img key={index} src={URL.createObjectURL(image.key)} alt={`Image ${index}`} />
                            
                            ))} */}

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

        {/* <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -200 },
                }}
            >
                <DialogBody className="p-1 h-[680px]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/27df/ce21/8380d4d8757222b906a67275927a4c49?Expires=1693785600&Signature=SkiPD7F5Bp7U80hqxzim7CkTkK3Pzb8u8O0ALXPZAmkgGlW2UID63X58b-gAbvFgUUNRIG8b-boSSWdEMbD2Pi-pIg7p5dM4mdBfs-QgDyDXuEgDxKCUd8BQX~nu4ukJLh1fsU1tsMAUWaZ2TiXEBHNe-7CPq6rv6CcnIGOujQhQszX0nz6iSnXBu10Kb9WekUkdxbDyWIOjuIvPBC8b~Ho0Dtu0sjDVfsZeP9KSN0IFmj9xkw3vU1LYuMFcxIDRp04ZBL7D2vx6XWzbeEez2Jqs91RIDuHrFVkdE0rrPJ6ZQ0VSBKMMRsOTX1G6c3rRGrfr173kWvIMzybSdaiWzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="grid place-items-center w-full my-auto h-[90%]">
                            <img src="/assests/common/videoPlay-icon.svg" />
                        </div>
                    </div>
                </DialogBody>
            </Dialog> */}
        </>
    );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(GridphotoSec);
