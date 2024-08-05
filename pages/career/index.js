import Image from 'next/image'
import React from 'react'
import CommonNavbar from '../_components/layout/AuthNavbar'
import GlobalFooter from '../_components/layout/GlobalFooter'
import { Box, Modal, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { CareerPageStyle } from '../../utils/options/styles/SelectBoxStyle';
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });


function index() {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "556px",
        height: "606px",
        bgcolor: '#FFF',
        borderRadius: "18px",
        boxShadow: 24,

    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const Heading = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
    }

    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#757575",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontSeight: "400",
        lineHeight: "normal"
    }

    const RoleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }

    const BtnText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    //     color: #000;
    // text-align: center;
    // font-family: Poppins;
    // font-size: 16px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: normal;


    const ModalText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const AttachCV = {
        color: "#0F52BA",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        textDecorationLine: "underline"
    }

    const btnText2 = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const OpeningsOBJ = [
        {
            id: 1,
            role: "Front End Developer",
            worksetup: "Remote",
            icon: "/assests/career/icon-1.svg",
            location: "",
            description: "",
            applylink: "",
            experience: "Fresher or 2+ yrs"
        },
        {
            id: 2,
            role: "Back End Developer",
            worksetup: "Remote",
            icon: "/assests/career/icon-2.svg",
            location: "",
            description: "",
            applylink: "",
            experience: "Fresher or 2+ yrs"
        },
        {
            id: 3,
            role: "UI Designer",
            worksetup: "Remote",
            icon: "/assests/career/icon-3.svg",
            location: "",
            description: "",
            applylink: "",
            experience: "Fresher or 2+ yrs"
        }
    ]

    const iconBgColors = ["#E7F0FF", "#E4FFF2", "#FBF2FF"];

    // Designations
    const designationOptions = [
        { value: "frontend_developer", label: "Front-end Developer" },
        { value: "backend_developer", label: "Back-end Developer" },
        { value: "fullstack_developer", label: "Full-stack Developer" },
        { value: "data_scientist", label: "Data Scientist" },
        { value: "project_manager", label: "Project Manager" },
        { value: "qa_engineer", label: "QA Engineer" },
        { value: "devops_engineer", label: "DevOps Engineer" },
        // Add more designations as needed
    ];



    return (
        <>
            <CommonNavbar />

            <div className='w-full h-full 2xl:pt-[120px] xl:pt-[100px] pt-[100px] space-y-[50px]'>
                <div className='pb-[120px]'>
                    <div className='flex justify-evenly items-center'>
                        <div>
                            <ul className='flex space-x-[27px]'>
                                <li>
                                    <Image width={0} height={0} alt='image-1' src={"/assests/career/img-1.svg"} className='lg:w-[194px] lg:h-[439px] w-[150px] h-[395px]' />
                                </li>
                                <li>
                                    <Image width={0} height={0} alt='image-1' src={"/assests/career/img-2.svg"} className='lg:w-[194px] lg:h-[439px] w-[150px] h-[395px]' />
                                </li>
                            </ul>
                        </div>
                        <div className='lg:w-[556px] w-[500px] space-y-[45px]'>
                            <h1 className='lg:text-[48px] text-[40px]' style={Heading}>Embark on Your Career Journey with Us</h1>
                            <p className='lg:text-[24px] text-[20px]' style={Content}>
                                Explore our current job openings and take the next step towards a rewarding IT career. Join us for professional growth, innovation, and endless possibilities
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full pt-[10px] pb-[40px]'>

                    <div className='text-center'>
                        <h1 style={Text}>Current Openings</h1>
                    </div>
                    <div className='space-y-[90px]'>
                        <div className='pl-[50px] pr-[50px] pt-[68px]'>
                            <ul className=' flex-col space-y-[30px] lg:space-y-0 flex lg:flex-row justify-center items-center lg:justify-evenly'>

                                {OpeningsOBJ?.map((res, index) => {
                                    const bgcolor = iconBgColors[index % iconBgColors.length];
                                    return (
                                        <>
                                            <li className='2xl:w-[348px] xl:w-[348px] lg:w-[300px] 2xl:h-[190px] xl:h-[190px] lg:h-[160px] w-[348px] h-[190px] border-[1px] cursor-pointer duration-100 hover:border-[#8225AF] border-[#DCDCDC] rounded-[14px] pl-[20px]'>

                                                <div className='flex flex-col justify-evenly h-full w-full'>
                                                    <div className='2xl:w-[57px] 2xl:h-[57px] xl:w-[57px] xl:h-[57px] lg:w-[55px] lg:h-[55px] w-[57px] h-[57px] rounded-full  grid place-items-center' style={{ backgroundColor: bgcolor }}>
                                                        <Image width={15} height={15} alt='icon' src={res?.icon} />
                                                    </div>

                                                    <div className='space-y-[21px]'>
                                                        <h1 style={RoleText}>{res?.role}</h1>
                                                        <ul className='flex space-x-[60px]'>
                                                            <li style={Text2} className='flex space-x-[10px]'>
                                                                <Image loading='lazy' alt="img" width={8} height={10} src='/assests/Black/remote.svg' />
                                                                <span>{res?.worksetup}</span></li>
                                                            <li style={Text2} className='flex space-x-[10px]'>
                                                                <Image loading='lazy' alt="img" width={10} height={10} src='/assests/Black/clock.svg' />
                                                                <span>{res?.experience}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>

                        <div className='text-center'>
                            <button onClick={handleOpen} style={BtnText} className=' hover:bg-[#E7F0FF] lg:w-[181px] lg:h-[55px] w-[170px] h-[45px] border-[1px] border-[#8225AF] rounded-[28px]'>Send Your CV</button>
                        </div>

                    </div>
                </div>

                <div className=' border-t-[1px] border-t-[#E1E1E1]'>
                    <GlobalFooter />
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className=''>
                        <div className='absolute right-[40px] top-[30px]'>
                            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M1.38462 18L0 16.6154L7.61539 9L0 1.38462L1.38462 0L9 7.61539L16.6154 0L18 1.38462L10.3846 9L18 16.6154L16.6154 18L9 10.3846L1.38462 18Z" fill="black" />
                            </svg>
                        </div>
                        <div className='space-y-[40px] pt-[50px]'>
                            <div className='pl-[40px]'>
                                <h1 style={ModalText}>Submit Your CV</h1>
                            </div>

                            <div className='grid place-items-center w-full'>
                                <ul className='w-[85%] space-y-[30px]'>
                                    <li className='space-y-[10px]'>
                                        <span>Full Name</span>
                                        <input type='text' className='hover:border-[#000] pl-[30px] w-full h-[50px] border-[1px] border-[#CDCDCD] rounded-[10px]' />
                                    </li>
                                    <li className='space-y-[10px]'>
                                        <span>Enter your Email or Mobile Number</span>
                                        <input type='email' className='hover:border-[#000] pl-[30px] w-full h-[50px] border-[1px] border-[#CDCDCD] rounded-[10px]' />
                                    </li>
                                    <li className='space-y-[10px]'>
                                        <span>Applying For?</span>
                                        {/* <input type='text' className='hover:border-[#000] pl-[30px] w-full h-[50px] border-[1px] border-[#CDCDCD] rounded-[10px]' /> */}
                                        <DynamicSelect styles={CareerPageStyle} className='w-[full]' options={designationOptions} />
                                    </li>
                                    <li>
                                        <span className='relative left-[5px]' style={AttachCV}>Attach a CV</span>
                                    </li>
                                    <li>
                                        <button id='grad-btn' className='w-full h-[55px] rounded-[27.5px]' style={btnText2}>Submit</button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default index