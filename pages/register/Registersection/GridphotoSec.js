import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

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

function GridphotoSec() {
    const Gridlayout = [
        { id: 1, image: "/assests/pic/Rectangle379.svg", type: "image" },
        { id: 2, image: "/assests/pic/Rectangle380.svg", type: "image" },
        { id: 3, image: "/assests/pic/Rectangle381.svg", type: "image" },
        { id: 4, image: "/assests/pic/Rectangle382.svg", type: "image" },
        { id: 5, image: "/assests/pic/Rectangle383.svg", type: "image" },
        { id: 6, image: "/assests/pic/Rectangle384.svg", type: "image" },
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
        setSelectedImage(items.image);
    };
    const [SelectedGridImage, SetSelectedGridImage] = useState(null);

    const HandleGridImageClick = (index) => {
        if (SelectedGridImage === index) {
            SetSelectedGridImage(null); // Unselect if already selected
        } else {
            SetSelectedGridImage(index); // Select the clicked image
        }
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
                            {griddata?.map((item, index) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="cursor-pointer w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px]"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        id="photo-grid-item"
                                        onClick={() =>
                                            item.type != "video" ? HandleGridImageClick(index) : ""
                                        }
                                    >
                                        <svg
                                            onClick={() => HandleRemove(item.id)}
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
                                        
                                            {item.type != "video" ? (
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
                            <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px] flex flex-col cursor-pointer justify-center items-center  bg-[#F1F1F1]">
                                <div className="">
                                    <img src="./loginassests/register-icons/Drag-Drop.svg" />
                                </div>
                                <div className="mt-[10px]">
                                    <span className="" style={Text2}>
                                        Drag and drop a <span className="block">Photo/Video</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
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
            </Dialog>
        </>
    );
}

export default GridphotoSec;
