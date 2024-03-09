import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../../../store/actions/GetingUserById';
import { Skeleton } from '@mui/material';


function SkeletonProfileSec() {




    const Username = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }




    const GeneralTab = () => {

        return (
            <>
                <div className={`w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>

                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <Skeleton><h1 style={Text2} className='text-[16px]'>{"General Information"}</h1></Skeleton>
                            <li></li>
                        </ul>
                    </div>


                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Date of Birth</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>02 . 03. 1986</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Birth of Time</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>10:01:20 AM</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Religion</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Hindu</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Caste/Sub Caste</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>Patel, Kadva Patidar</h1>
                            </Skeleton>
                        </div>
                    </div>

                    <div className='hidden md:flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current City</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>New York</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Country of Living</p>
                                <h1 style={Text5} className='2xl:text-[16px] xl:text-[14px] text-[14px]'>United States of America</h1>
                            </Skeleton>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    const LocationTab = () => {

        return (
            <>
                <div className={`w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <Skeleton><h1 style={Text2} className='text-[16px]'>Address Details</h1></Skeleton>
                            <li>

                            </li>
                        </ul>
                    </div>

                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Residing Address</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>01-02, Delhi Street, Delhi, India</h1>
                            </Skeleton>
                            <Skeleton className=' '>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[14px]'></p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'></h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current City</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Delhi</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Residing Country</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Permanent Address</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>01-02, Delhi Street, Delhi, India</h1>
                            </Skeleton>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ContactTab = () => {


        return (
            <>
                <div className='w-full h-[270px] lg:h-[369px]  border-[1px] border-[#F1F1F1] rounded-[10px] 2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]'>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <Skeleton><h1 style={Text2} className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]'>Contact Details</h1></Skeleton>
                            <li>

                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Mobile Number</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>+91 90001 01021</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Home Number</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>+91 90001 01021</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Email Address</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>riyashah@gmail.com</h1>
                            </Skeleton>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    const EducationTab = () => {
        return (
            <>
                <div className={`w-full  h-[369px]  border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <Skeleton><h1 style={Text2} className='text-[16px]'>{"Education Details"}</h1></Skeleton>

                            <li>

                            </li>
                        </ul>
                    </div>

                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Degree</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>BCA</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>College/University</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Delhi University</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>City</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Noida</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>State</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Delhi</h1>
                            </Skeleton>
                            <Skeleton>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Country</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India</h1>
                            </Skeleton>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ProfessionalTab = () => {



        return (
            <>
                <div className='w-full h-[369px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]'>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><h1 style={Text2} className='text-[16px]'>Professional Details</h1></li>
                        </ul>
                    </div>
                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Current Designation</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Software Designer</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Job Type</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Private</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Company Name</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>ABC Company</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Annual Salary</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>INR 6-8 Lacs</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Work in City</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Delhi</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Work in Country</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        )
    }
    const HobbiesTab = () => {


        return (
            <>
                <div className='w-full h-[369px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]'>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><h1 style={Text2} className='text-[16px]'>Hobbies and Interests</h1></li>
                        </ul>
                    </div>
                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Creative</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Writing,  Painting</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'></p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'></h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Fun</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Movie</h1>

                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'></p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'></h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Fitness</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Walking</h1>
                            </div>


                        </div>
                    </div>

                </div>
            </>
        )
    }
    const PartnerPreferenceTab = () => {

        return (
            <>
                <div className={`w-full h-[400px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><h1 style={Text2} className='text-[16px]'>Partner Preference</h1></li>
                         
                        </ul>
                    </div>
                    <div className='flex justify-center '>
                        <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                    </div>
                    <div className='grid place-items-center'>
                        <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Age</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>24 - 28</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Height</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>4.5 to 5.6 ft</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer City State</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Gujarat, Delhi,Mumbai</h1>

                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Country</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>India, Australia,USA</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Income</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>INR 10 Lacs or above</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Creative</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Writing, Painting</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Fun</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Watching Movie</h1>
                            </div>
                            <div>
                                <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Prefer Diet</p>
                                <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>Vegetarian</h1>
                            </div>


                        </div>
                    </div>
                </div>
            </>
        )
    }



    const [ActiveTab, SetActiveTab] = useState(1);

    const RenderTab = () => {
        switch (ActiveTab) {
            case 1: return <GeneralTab />;
                break;
            case 2: return <LocationTab />;
                break;
            case 3: return <ContactTab />;
                break;
            case 4: return <EducationTab />;
                break;
            case 5: return <ProfessionalTab />;
                break;
            case 6: return <HobbiesTab />;
                break;
            case 7: return <PartnerPreferenceTab />;
                break;
        }
    }


    const router = useRouter();


    const { userprofile } = router.query;

    const { user, loading } = useSelector((state) => state.userById)


    console.log("userdata : ", user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserById(userprofile))
    }, [userprofile, dispatch])

    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]">
                <div className={`flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full bg-[#FFF]`}>
                    <div id='grad-btn' className='w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]'>

                        <div>
                            <div className='absolute right-[20px] pt-[10px]'>
                                <ul className='flex space-x-[20px] items-center'>
                                    <li><Image alt="share" width={15} height={16} src='/assests/Black/Share-icon-2.svg' /></li>
                                    <li><Image alt="download" width={33} height={32} src='/assests/Black/Download-2.svg' /></li>
                                </ul>
                            </div>
                        </div>


                        <div className='flex justify-between'>
                            <div>
                                <Image alt="arrow" width={32} height={32} onClick={() => router.back()} className='cursor-pointer m-[10px] w-[30px] h-[30px] md:w-[32px] md:h-[32px]' src='/assests/dashboard/story/arrow-left.svg' />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='grid place-items-center'>
                        <Skeleton variant="circular" width={184} height={184} className='mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]' src='/assests/dashboard/user/userProfile.svg' />
                            <Skeleton className='pb-[10px] pt-[15px]'>
                                <h1 style={Username} className='text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]'>{user && user.name ? (user?.name && user.name) : "Rohan Patel"}</h1>
                            </Skeleton>
                        </div>
                        <div className='space-y-[5px]'><div className='pt-[10px]'>
                            <ul className='flex justify-center items-center space-x-[8px] md:space-x-[40px]'>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>

                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>Male, 36</h1>
                                    </div>
                                </Skeleton>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image alt='proffession' width={14} height={12} src='/assests/dashboard/icon/bag-icon.svg' />
                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>Software Engineer</h1>
                                    </div>
                                </Skeleton>
                                <Skeleton>
                                    <div className='flex items-center space-x-[10px]'>
                                        <Image alt='loaction-icon' width={10} height={12} src='/assests/dashboard/icon/location-icon.svg' />
                                        <h1 style={Text2} className='lg:text-[12px] md:text-[12px] text-[11px]'>NY, United States</h1>
                                    </div>
                                </Skeleton>
                            </ul>



                        </div>
                            <Skeleton className='text-center pt-[10px]'>
                                <p className='text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile on the face. I am a big Nature & Animal lover. I have lived in different parts of India and appreciate all cultures & customs. </p>
                            </Skeleton>

                            <div className='hidden lg:flex space-x-[25px] 2xl:space-x-[25px] xl:space-x-[20px] lg:space-x-[35px] pt-[20px]'>

                                <div   className={`bg-[#F8F8F8] w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[10px]`}>
                                   
                                </div>
                                <div id={ActiveTab === 2 ? "grad-btn" : ""}  className={`${ActiveTab === 2 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[10px]`}>
                                   </div>
                                <div id={ActiveTab === 3 ? "grad-btn" : ""}  className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 3 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[10px]`}>
                                   </div>

                                <div id={ActiveTab === 4 ? "grad-btn" : ""}  className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 4 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[10px]`}>
                                    </div>
                                <div id={ActiveTab === 5 ? "grad-btn" : ""}  className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 5 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[10px]`}>
                                   </div>
                                <div id={ActiveTab === 6 ? "grad-btn" : ""}  className={`w-[50px] h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 6 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[10px]`}>
                                   </div>

                                <div id={ActiveTab === 7 ? "grad-btn" : ""}  className={`w-[200px] h-[50px] cursor-pointer  ${ActiveTab === 7 ? "bg-[#0F52BA] text-[#FFF]" : "bg-[#F8F8F8] Text-[#000]"} flex justify-center items-center space-x-[15px] rounded-[10px]`}>
                                 </div>

                            </div>

                            <div className='hidden lg:block pt-[10px] pb-[30px]'>
                                {/* <GeneralTab/> */}
                                {RenderTab()}
                            </div>
                            <div className='block lg:hidden pt-[10px] pb-[30px]'>
                                {/* <GeneralTab/> */}
                                <div className='flex flex-col space-y-[30px] pb-[50px]'>
                                    <div>
                                        <GeneralTab />

                                    </div>

                                    <div>
                                        <LocationTab />
                                    </div>

                                    <div>
                                        <ContactTab />
                                    </div>

                                    <div>
                                        <EducationTab />
                                    </div>

                                    <div>
                                        <ProfessionalTab />
                                    </div>

                                    <div>
                                        <HobbiesTab />
                                    </div>

                                    <div>
                                        <PartnerPreferenceTab />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SkeletonProfileSec