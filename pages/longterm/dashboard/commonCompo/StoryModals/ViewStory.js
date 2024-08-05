import { Box, Popover } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteMystatus } from '../../../../../store/actions/UsersAction'
import getStatusTime from '../../../../../utils/helpers/GetStoryTime'
import { useRouter } from 'next/router'

function ViewStory({ CloseBtn, Storyimagesrc }) {

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
    const NoVieweYet = {
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

    const ViewerUser = {
        color: "#FFF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;


    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();
    const HanldeDeleteStatus = (data) => {
        dispatch(DeleteMystatus(data.id))
        CloseBtn();


    }

    const [ShowViewer, SetShowViewer] = useState(false)

    const router = useRouter();


    const GotoProfile = (res) => {
        switch (res?.storyViewType) {
            case "users-story":
                return router.push(`/longterm/dashboard/${res?.Data?.userId?.id}`)
                break;
            case "currentUser":
                return router.push(`/longterm/dashboard/profile`)
                break;
            default: return null
        }
    }

    const { data, loading } = useSelector((state) => state.storyviews)



    return (
        <>
            <Box
                sx={{ backgroundColor: 'black' }}
                className="w-[full] h-full lg:h-auto 2xl:w-[799px] xl:w-[699px]"

            >
                <div className='bg-[black] w-full 2xl:h-[100vh] xl:h-[100vh] space-y-[20px]'>

                    <div className='flex justify-between pt-[20px]'>
                        <div className='pl-[40px] flex items-center space-x-[20px]'>
                            <Image onClick={() => GotoProfile(Storyimagesrc)} alt='request' width={47} height={47} className="w-[47px] h-[47px] cursor-pointer" style={{ borderRadius: "50%", objectFit: "cover" }} src={Storyimagesrc?.Data ? Storyimagesrc?.Data?.userId?.profilePic : "/assests/dashboard/request/req-3.svg"} />

                            <div className='text-left text-[#FFF]'>
                                <h1 style={Username} className='text-[14px] cursor-pointer' onClick={() => GotoProfile(Storyimagesrc)}>{Storyimagesrc?.Data ? Storyimagesrc?.Data.userId.name : "NA"}</h1>
                                {/* <p style={Activity}>27, Designer</p> */}
                                <p style={Activity}>{getStatusTime(Storyimagesrc?.Data ? Storyimagesrc.Data?.statusAddTime : "NA")}</p>
                            </div>
                        </div>

                        <div className='flex items-center pr-[40px]'>
                            {ShowViewer ?
                                <>
                                    <div className='group cursor-pointer' onClick={() => SetShowViewer(false)}>
                                        <div className='absolute opacity-[0.2] h-[40px] w-[40px] right-[35px] mt-[-5px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]'>
                                        </div>
                                        <Image alt='img' className='cursor-pointer' width={30} height={30} onClick={() => SetShowViewer(false)} src='/assests/dashboard/story/arrow-left.svg' />
                                    </div>
                                </> : <>
                                    {
                                        Storyimagesrc?.storyViewType == "currentUser" ? <>

                                            <div onClick={(event) => handleClick(event)} className='group cursor-pointer'>
                                                <div className='absolute opacity-[0.2] h-[40px] w-[40px] right-[34px] mt-[-5px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]'>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-[30px] h-[30px]">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                </svg>
                                            </div>

                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: "top",
                                                    horizontal: "left",
                                                }}
                                                transformOrigin={{
                                                    vertical: "top",
                                                    horizontal: "right",
                                                }}
                                                PaperProps={{
                                                    style: {
                                                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                        borderRadius: "10px",
                                                        marginLeft: "10px",
                                                        marginTop: "20px"
                                                    }, // Add this to remove the shadow
                                                }}
                                            >
                                                <div className="bg-[#FFF] rounded-[10px] w-[128px] h-[80px]">
                                                    <ul className="flex flex-col justify-center space-y-[4px]  ">
                                                        <li
                                                            style={Text3}
                                                            className="p-[5px] pl-[10px] cursor-pointer hover:bg-[#F2F7FF] flex  items-center space-x-[12px] text-[14px] mt-[8px]"
                                                            onClick={CloseBtn}

                                                        >
                                                            {" "}
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                            {" "}
                                                            <p>Close</p>
                                                        </li>
                                                        <li
                                                            style={Text3}
                                                            className="p-[5px] pl-[10px] cursor-pointer hover:bg-[#F2F7FF] flex  items-center space-x-[12px] text-[14px] "
                                                            onClick={() => HanldeDeleteStatus(Storyimagesrc.Data)}
                                                        >
                                                            {" "}
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>
                                                            {" "}
                                                            <p>Delete</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </Popover>
                                        </>

                                            :

                                            <>
                                                <div className='group cursor-pointer' onClick={CloseBtn}>

                                                    <div className='absolute opacity-[0.2] h-[40px] w-[40px] right-[30px] mt-[-9px] rounded-full group-hover:bg-[#F2F7FF] p-[5px]'>
                                                    </div>
                                                    <Image alt='cross-icon' width={20} height={20} className='cursor-pointer'

                                                        src='/assests/dashboard/story/cross-icon.svg' />
                                                </div>
                                            </>
                                    }
                                </>}
                        </div>
                    </div>
                    {ShowViewer ?
                        <>
                            <div className='pt-[16px]'>

                                {data?.results?.length > 0 ? <>
                                    <div className='h-full lg:h-[full] 2xl:w-auto 2xl:h-[500px] xl:h-[350px]'>
                                        <div className='flex flex-col items-center space-y-[10px]'>
                                            {
                                                data?.results?.map((res, index) => {
                                                    return (
                                                        <div onClick={() => router.push(`/longterm/dashboard/${res?.viewerId?.id}`)} className='flex justify-between items-center w-[80%] cursor-pointer duration-100 hover:opacity-70 hover:bg-[#383838] bg-[#1E1E1E] rounded-[10px] p-[20px]'>
                                                            <div className='flex items-center space-x-[29px]'>
                                                                <div className='ml-[12px]'><Image width={47} height={47} src={res?.viewerId?.profilePic} style={{ objectFit: "cover", borderRadius: "50%", width: "45px", height: "45px" }} /></div>
                                                                <div><h1 style={ViewerUser} className='cursor-pointer'>{res?.viewerId?.name}</h1></div>
                                                            </div>
                                                            <div className='group'>
                                                                <Image width={30} height={30} src={"/assests/stories/Stories-UserIcon.svg"} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </> :
                                    <>
                                        <div className='w-full 2xl:h-[50vh] xl:h-[40vh] h-[50vh] grid place-items-center'>

                                            <div>
                                                <p style={NoVieweYet} className='text-[12px] text-center text-[#FFF]'>No one views Yet</p>
                                            </div>

                                        </div>
                                    </>}
                            </div>
                        </> : <>
                            <div className='flex justify-center space-x-[90px] pt-[20px]'>

                                <div className=' flex items-center'>
                                    <Image alt='img' width={48} height={48} src='/assests/dashboard/story/arrow-left.svg' />
                                </div>
                                <div className=''>
                                    <Image alt='img' width={346} height={450} style={{ width: "400px", objectFit: "cover" }}
                                        className='h-full lg:h-[full]  2xl:h-[450px] xl:h-[350px]'
                                        src={Storyimagesrc?.Data?.content} />
                                </div>
                                <div className=' flex items-center'>
                                    <Image alt='img' width={48} height={48} src='/assests/dashboard/story/arrow-right.svg' />
                                </div>

                            </div>

                            <div className='text-center text-[white]'>
                                <h1 style={Text4}>{Storyimagesrc?.Data?.caption ? Storyimagesrc?.Data?.caption : ""}</h1>
                            </div>
                        </>}
                    {Storyimagesrc?.storyViewType == "currentUser" ? <>
                        <div className='w-full grid place-items-center'>
                            <div className='cursor-pointer flex justify-center absolute items-center bottom-[30px] space-x-[10px]'>
                                <Image onClick={() => SetShowViewer(!ShowViewer)} width={22} height={15} src={"/assests/stories/Story-countview.svg"} />
                                <div>
                                    <span className='text-[white]'>{data?.totalResults}</span>
                                </div>
                            </div>
                        </div>
                    </>
                        :
                        null
                    }
                </div>

            </Box>
        </>
    )
}

export default ViewStory