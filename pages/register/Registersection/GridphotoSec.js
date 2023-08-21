import React, { useState } from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";

const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}
const Text2 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

function GridphotoSec() {
    const Gridlayout = [
        { id: 1, image: "/assests/pic/Rectangle379.svg", type:"image" },
        { id: 2, image: "/assests/pic/Rectangle380.svg", type:"image" },
        { id: 3, image: "/assests/pic/Rectangle381.svg", type:"image" },
        { id: 4, image: "/assests/pic/Rectangle382.svg", type:"image" },
        { id: 5, image: "/assests/pic/Rectangle383.svg", type:"image" },
        { id: 6, image: "/assests/pic/Rectangle384.svg", type:"image" },
        { id: 7, image: "/assests/pic/Rectengle385.svg", type:"video" },
    ]

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [griddata, setgriddata] = useState(Gridlayout);

    const HandleRemove = (id) => {

        setgriddata((prev) => {
            return prev.filter((dt) => id !== dt.id)
        })
    }
    return (
        <>
            <div className='lg:h-full lg:pb-0 md:pb-0 pb-[100px]'>
                <div className='lg:mx-[8%]'>
                    <div className='text-center lg:text-left lg:ml-[5.5%] w-full pt-[5px] pb-[10px]'>
                        <h1 style={Text1}>Select Photo to <span className='text-[#0F52BA]'>Set as profile picture</span></h1>
                    </div>
                    <div className='lg:grid flex justify-center lg:justify-left flex-wrap' id="photo-grid-container">
                        {
                            griddata?.map((item) => {
                                return (
                                    
                                    <div key={item.id} className='cursor-pointer w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px]' onClick={()=>{item.type === "video" ? handleOpen() : ""}} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }} id="photo-grid-item">
                                        <svg onClick={() => HandleRemove(item.id)} className='cursor-pointer relative ml-[80%] lg:ml-[85%] mt-[5%]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.4" />
                                            <path d="M14.1111 10.3333V15.8889H9.66667V10.3333H14.1111ZM13.2778 7H10.5L9.94444 7.55556H8V8.66667H15.7778V7.55556H13.8333L13.2778 7ZM15.2222 9.22222H8.55556V15.8889C8.55556 16.5 9.05556 17 9.66667 17H14.1111C14.7222 17 15.2222 16.5 15.2222 15.8889V9.22222Z" fill="white" />
                                        </svg>
                                    </div>)
                            })
                        }
                        <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[10px] flex flex-col cursor-pointer justify-center items-center  bg-[#F1F1F1]'>
                            <div className=''>
                                <img src='./loginassests/register-icons/Drag-Drop.svg' />
                            </div>
                            <div className='mt-[10px]'>
                                <span className='' style={Text2}>Drag and drop a <span className='block'>Photo/Video</span></span>
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
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody divider>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>
                
            </Dialog>

        </>
    )
}

export default GridphotoSec