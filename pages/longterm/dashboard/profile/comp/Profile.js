import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchTotalLikes, updateMyProfileData } from '../../../../../store/reducers/MyProfile';
import { getCookie } from 'cookies-next';
import Avatar from 'react-avatar';
import SkeletonProfile from './SKeletonProfile'
const AddressTab = dynamic(() => import('./sections/AddressTab'));
const EducationTab = dynamic(() => import('./sections/EducationTab'));
const ContactTab = dynamic(() => import('./sections/ContactTab'));
const ProfessionalTab = dynamic(() => import('./sections/ProfessionalTab'));
const PartnerPreferenceTab = dynamic(() => import('./sections/PartnerPreferenceTab'));
import Modal from '../../commonCompo/HandleProfileUpload/Modal';
import { getSentrequestData } from '../../../../../store/actions/UsersAction';
import moment from 'moment';
import HobbiesTab from './sections/HobbiesTab';
import { useSocket } from '../../../../../ContextProvider/SocketContext';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import calculateAge from '../../../../../utils/helpers/CalculateAge';
import { heightoption, MaritalOptions, profileOptions, Religionoptions, subcastOption, weightoption } from '../../../../../utils/options/ProfileOptions/GeneralSection';
import SaveButton from '../../../../../components/common/Buttons/SaveButton';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function Profile() {


    const { darkMode, toggleDarkMode } = useDarkMode();

    const Username = {
        color: darkMode ? "#FFF" : "#000",
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

    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px"
    }
    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }


    const InputFonts = {
        fontFamily: "Poppins",
    }



    const GeneralTab = ({ data }) => {

        const [userdata, setuserdata] = useState({
            cast: data?.cast && data?.cast,
            religion: data?.religion && data.religion,
            dateOfBirth: data?.dateOfBirth && data.dateOfBirth,
            birthTime: data?.birthTime && data.birthTime,
            name: data && data.name,
            gender: data?.gender && data.gender,
            writeBoutYourSelf: data?.writeBoutYourSelf && data.writeBoutYourSelf,
            creatingProfileFor: data?.creatingProfileFor

        })


        const handleUpdateGenProfile = () => {
            dispatch(updateMyProfileData(userdata));
        }

        const [CharCount, setCharCount] = useState(0)
        const [birthTime, SetBirthTime] = useState()


        const handleInputChange = (e) => {
            const value = e.target.value;
            const name = e.target.name;
            if (name === 'gender') {
                setuserdata((prevValue) => ({ ...prevValue, [name]: value }))
            }
            else if (name === 'religion') {
                const selectedReligion = Religionoptions.find((option) => option.value === value);
                setSelectValue(selectedReligion);
                setuserdata((prevValue) => ({ ...prevValue, [name]: value }));
            }
            else if (name === 'cast') {
                console.log("casttttt")
                console.log(userdata)

                const selectedcast = subcastOption.find((option) => option.value === value);
                SetSubCastValue(selectedcast)
                setuserdata((prevValue) => ({ ...prevValue, [name]: value }))

            }
            else if (name == "birthTime") {
                const currentDate = new Date();

                // Extract the date parts
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
                const day = String(currentDate.getDate()).padStart(2, '0');

                // Combine the date with the input time
                const isoDateString = `${year}-${month}-${day}T${value}:00`;

                // Corrected: Pass 'field' and 'value' correctly
                setuserdata(prevValue => ({ ...prevValue, [name]: isoDateString }))
                SetBirthTime(value)
            }
            else if (name === 'writeBoutYourSelf') {
                const maxChars = 150
                if (value.length <= maxChars) {
                    setuserdata(prevValue => ({ ...prevValue, [name]: value }))
                    setCharCount(value.length);
                }
            }
            else {
                setuserdata(prevValue => ({ ...prevValue, [name]: value }))
            }
        }

        const [showForm, setShowForm] = useState(false);

        const handleEditClick = () => {
            setShowForm(!showForm);
        };


        const genralbtnText = {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        }
        const labelText = {
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        }


        const customStyles = {
            control: (provided, state) => ({
                ...provided,
                paddingRight: '10px',
                paddingLeft: "8px",
                width: "300px",
                height: "50px",
                borderRadius: "8px",
                border: "1px solid #e6e6e6",
                backgroundColor: darkMode ? "#141516" : "#FFF",
                borderColor: state.isFocused ? 'black' : provided.borderColor,
                '&:hover': {
                    borderColor: darkMode ? "#787878" : 'black',
                },
                boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
            }),

            indicatorSeparator: (provided) => ({
                ...provided,
                display: 'none',
                paddingRight: "20px"
                // Hide the vertical line behind the arrow
            }),
        };

        const [selectValue, setSelectValue] = useState(
            data?.religion
                ? Religionoptions.find((option) => option.value === data.religion)
                : null
        );



        const [SubCastValue, SetSubCastValue] = useState(
            data?.cast
                ? subcastOption.find((option) => option.value === data.cast)
                : null
        );

        let formattedDateOfBirth;

        if (data && data.dateOfBirth) {
            formattedDateOfBirth = moment(data?.dateOfBirth).format('YYYY-MM-DD');
        } else {
            formattedDateOfBirth = 'NA';
        }

        let formattedDateOfBirthTime;

        // Assemble the date and time in a readable format
        if (data && data.birthTime) {

            formattedDateOfBirthTime = moment(data?.birthTime).format('HH:mm:ss');

        } else {
            formattedDateOfBirthTime = 'NA'
        }



        return (
            <>
                <div className={`w-full ${showForm ? "" : "2xl:h-[360px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]"} border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>

                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>{showForm ? "Modify General Information" : "General Information"}</h1></li>
                            <li>

                                <div className='cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                    {!showForm ?
                                        <Image alt='editIcon' width={20} height={20} onClick={handleEditClick} src={darkMode ? '/assests/dashboard/icon/edit-details-icon-white.svg' : '/assests/dashboard/icon/edit-details-icon.svg'} />
                                        :
                                        <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={handleEditClick} src={darkMode ? '/assests/profile/cross-edit-icon-white.svg' : '/assests/profile/cross-edit-icon.svg'} />

                                    }
                                </div>
                            </li>
                        </ul>
                    </div>


                    {showForm ?
                        <>

                            <div className=' flex flex-col justify-center items-center'>

                                <div className='w-[90%]'>
                                    <div className="inline-block  2xl:flex lg:flex  2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 2xl:space-x-[12px] lg:space-x-[32px] xl:space-x-[20px]  pt-[10px]">
                                        {profileOptions.map((options) => {
                                            return (<button
                                                id={userdata?.creatingProfileFor == options.value ? "grad-button" : ""}
                                                style={genralbtnText}
                                                onClick={() => setuserdata(() => {
                                                    return { ...userdata, creatingProfileFor: options.value }
                                                })}
                                                className={`2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 ml-[10px] h-[50px] ${options.id === 3 ? "2xl:w-[120px] xl:w-[110px] lg:w-[128px] w-[100px]" : "w-[100px] 2xl:w-[102px] xl:w-[90px] lg:w-[102px]"} bg-[white] rounded-[8px] border-[1px] border-[#e6e6e6]`} key={options.id}>{options.label}</button>)
                                        })}
                                    </div>
                                </div>
                                <div className='w-[90%] pt-[20px]'>
                                    <div className='flex justify-between space-x-[20px]'>
                                        <div>
                                            <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >First Name</h1>
                                            <input style={InputFonts} value={userdata.name} onChange={handleInputChange} name="name" type='text' placeholder='First Name' className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                        </div>
                                        <div className=' w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                                            <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Gender</h1>
                                            <div className='space-x-[15px] flex justify-between'>
                                                <button id={userdata.gender === "male" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'male' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]'>Male</button>
                                                <button id={userdata.gender === "female" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'female' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]'>Female</button>
                                                <button id={userdata.gender === "other" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'other' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[10px]'>Other</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-[20px] flex justify-between'>
                                        <div>
                                            <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Date Of Birth</h1>
                                            <input name="dateOfBirth" value={userdata.dateOfBirth} onChange={handleInputChange} type='date' placeholder='First Name' className='dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                        </div>
                                        <div>
                                            <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Time of Birth</h1>
                                            <input name="birthTime" onChange={handleInputChange} value={birthTime} type='time' placeholder='First Name' className='dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                        </div>
                                    </div>
                                    <div className='pt-[20px] flex justify-between space-x-[20px]'>
                                        <div>
                                            <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Religion</h1>
                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={Religionoptions}
                                                defaultValue={selectValue}
                                                placeholder={
                                                    data && data.religion ? (data.religion) : ('Choose an option')
                                                }
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "religion", value: selectedOption?.value } })}
                                            />
                                        </div>
                                        <div>
                                            <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Caste / Sub Caste</h1>
                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={subcastOption}
                                                defaultValue={SubCastValue}
                                                placeholder={data && data.cast ? (data.cast) : ('Choose an option')}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "cast", value: selectedOption?.value } })}
                                            />
                                        </div>
                                    </div>
                                    <div className='pt-[20px] flex justify-between space-x-[20px]'>
                                        <div className='flex justify-between w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                                            <div>
                                                <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Height</h1>

                                                <DynamicSelect
                                                    className="h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end"
                                                    styles={customStyles}
                                                    options={heightoption}
                                                    placeholder={data?.height ? (data.height) : ('Select')}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "height", value: selectedOption?.value } })}
                                                />
                                            </div>
                                            <div>
                                                <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Weight</h1>

                                                <DynamicSelect
                                                    className="h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end"
                                                    placeholder={data?.weight ? (data.weight) : ('Select')}
                                                    styles={customStyles}
                                                    options={weightoption}
                                                    onChange={(selectedOption) => handleInputChange({ target: { name: "weight", value: selectedOption?.value } })}

                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>MaritalStatus</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={MaritalOptions}
                                                placeholder={data?.maritalStatus ? (data.maritalStatus) : ("Select")}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "maritalStatus", value: selectedOption?.value } })}

                                            />
                                        </div>
                                    </div>
                                    <div className='pt-[20px]'>
                                        <h1 style={labelText} className="dark:text-[#FFF] text-[#000] pb-[10px]">Write About Yourself</h1>
                                        <textarea style={InputFonts} type='text' name='writeBoutYourSelf' value={userdata.writeBoutYourSelf} onChange={handleInputChange} className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]' />
                                        <span className='dark:text-[#FFF] text-[#000]'>{CharCount}/150</span>
                                    </div>
                                    <div className='flex justify-end pb-[10px] mt-[10px]'>

                                        <SaveButton onClick={handleUpdateGenProfile} className={'rounded-[10px] text-[white] w-[80px] h-[40px]'} >Save</SaveButton>

                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <>
                            <div className='flex justify-center '>
                                <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                            </div>
                            <div className='grid place-items-center'>
                                <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Date of Birth</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{formattedDateOfBirth}</h1>
                                    </div>
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Birth of Time</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{formattedDateOfBirthTime}</h1>
                                    </div>
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Religion</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data.religion ? capitalizeFirstLetter(data.religion) : "NA"}</h1>
                                    </div>
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Caste/Sub Caste</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data.cast ? capitalizeFirstLetter(data.cast) : ("NA")}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid place-items-center'>
                                <div className="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>{`Height & Weight`}</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data?.height ? data?.height + " " + "ft" : "NA"}, &nbsp;{data && data?.weight ? data?.weight + " " + "kg" : "NA"} </h1>
                                    </div>
                                    <div>
                                        <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>{`Marital Status`}</p>
                                        <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data.maritalStatus ? capitalizeFirstLetter(data.maritalStatus) : ("NA")}</h1>
                                    </div>
                                </div>
                            </div>
                        </>}
                </div>
            </>
        )
    }





    const dispatch = useDispatch();

    const { data, status, totalLikes } = useSelector((state) => state.myprofile);

    const [token, settoken] = useState();
    // const TotalSentRequest = useSelector((state) => state.usersact.sentrequestdata.sentUsersdata)
    useEffect(() => {
        dispatch(fetchTotalLikes())
        dispatch(getSentrequestData())
        settoken(getCookie("authtoken"))

    }, []);


    const socket = useSocket();

    const [LiveLikeCount, SetLiveLikeCount] = useState(0);


    socket?.on('message', (data) => {
        SetLiveLikeCount(data.data.data?.totalResults);
    });


    const [ActiveTab, SetActiveTab] = useState(1);

    const RenderTab = () => {
        switch (ActiveTab) {
            case 1: return <GeneralTab data={data} />;
                break;
            case 2: return <AddressTab AddressID={data?.address} />;
                break;
            case 3: return <ContactTab data={data} />;
                break;
            case 4: return <EducationTab />;
                break;
            case 5: return <ProfessionalTab />;
                break;
            case 6: return <HobbiesTab />;
                break;
            case 7: return <PartnerPreferenceTab partnerPrefID={data?.userPartner} />;
                break;
        }
    }

    const router = useRouter();

    const [isHovered, setIsHovered] = useState(false)

    const [openProfileModal, setOpenProfileModal] = React.useState(false);
    const handleOpen = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);


    if (status === STATUSES.LOADING) {

        return <SkeletonProfile />
    }





    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className=" dark:bg-[#18191a] 2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]">
                <div className={` flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full dark:bg-[#18191a] bg-[#FFF]`}>
                    <div
                        className='bg-custom-gradient w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]'>

                        <div className='flex justify-between pb-[50px]'>
                            <div onClick={() => router.push("/longterm/dashboard/seting")} className='block lg:hidden cursor-pointer pr-[20px] pt-[20px]'>
                                <span className=" h-12 w-12 text-lg text-white "><i className={`bx bx-cog `}></i></span>
                            </div>

                        </div>
                        <div>
                        </div>
                        <div className=' grid place-items-center'>
                            <div onClick={handleOpen} onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                {
                                    token ? (
                                        <>
                                            {data?.profilePic ? (
                                                <>
                                                    <Image loading='lazy'
                                                        alt='userProfile'
                                                        width={184}
                                                        height={184}
                                                        className=' rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]'
                                                        src={data.profilePic}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                    {isHovered && (
                                                        <div className="cursor-pointer absolute mt-[-185px]" style={{ opacity: "0.60" }}>
                                                            <div className='w-[184px] h-[184px] bg-[black] rounded-[50%]'>
                                                                <div className='grid place-items-center relative top-[40%]'>
                                                                    <Image loading='lazy' width={35.556} height={32} alt='edit' src="/assests/animation/camera-icon.svg" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <Avatar
                                                        name={getCookie("userName")}
                                                        size="184"
                                                        round={true}
                                                    />
                                                    {isHovered && (
                                                        <div className="cursor-pointer absolute mt-[-185px]" style={{ opacity: "0.60" }}>
                                                            <div className='w-[184px] h-[184px] bg-[black] rounded-[50%]'>
                                                                <div className='grid place-items-center relative top-[40%]'>
                                                                    <Image loading='lazy' width={35.556} height={32} alt='edit' src="/assests/animation/camera-icon.svg" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <Avatar
                                            name={getCookie("userName")}
                                            size="184"
                                            round={true}
                                        />
                                    )
                                }
                            </div>
                            <div className='pb-[10px] pt-[15px]'>
                                {data && data.name ? (
                                    <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >{data?.name}</h1>
                                ) : (
                                    <h1 style={Username} className='dark:text-[#FFF] text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]' >NA</h1>
                                )}
                            </div>
                        </div>
                        <div className='dark:bg-[#18191a] space-y-[5px]'>
                            <div className='pb-[10px]'>
                                <ul className='flex justify-center items-center space-x-[20px] md:space-x-[40px] lg:space-x-[40px] xl:space-x-[40px] 2xl:space-x-[40px]'>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>
                                            <Image loading='lazy' alt='heartIcon' width={16} height={14} src='/assests/dashboard/icon/heart-icon.svg' />
                                            <h1 style={Text3} id='live-count' className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{LiveLikeCount}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'> Likes </span></h1>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>
                                            <Image loading='lazy' alt='upIcon' width={14} height={14} src='/assests/dashboard/icon/up-arrow.svg' />
                                        {/* Pending--v2  */}
                                            <h1 style={Text3} className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{"0"}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'>Sent</span></h1>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>
                                            <Image loading='lazy' alt='downIcon' width={14} height={14} src='/assests/dashboard/icon/down-arrow.svg' />
                                            <h1 style={Text3} className='dark:text-[#FFF] text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[13px]'>{0}<span style={Text2} className='pl-[5px] text-[14px] text-[#8B8B8B]'>Received</span></h1>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='h-[1px] w-full bg-[#EDEDED]'></div>
                            <div className='pt-[10px]'>
                                <ul className='flex justify-center items-center space-x-[8px] md:space-x-[40px]'>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>

                                            <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{data?.gender ? capitalizeFirstLetter(data?.gender) : "NA"}&nbsp;,&nbsp;{calculateAge(data?.dateOfBirth)}</h1>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>
                                            <Image loading='lazy' alt='bagIcon' width={14} height={12} src='/assests/dashboard/icon/bag-icon.svg' />
                                            <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{data && data?.userProfessional ? capitalizeFirstLetter(data?.userProfessional?.jobTitle) : "NA"}</h1>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center space-x-[10px]'>
                                            <Image loading='lazy' alt='loactionIcon' width={10} height={12} src='/assests/dashboard/icon/location-icon.svg' />
                                            <h1 style={Text2} className='dark:text-[#FFF] lg:text-[12px] md:text-[12px] text-[11px]'>{data && data?.address ? capitalizeFirstLetter(data?.address?.currentCity) : "NA"}</h1>
                                        </div>
                                    </li>
                                </ul>



                            </div>
                            <div className='text-center pt-[10px]'>
                                <p className='dark:text-[#FFF] text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]' style={Text2}>{data && data.writeBoutYourSelf ? (data?.writeBoutYourSelf && data.writeBoutYourSelf) : "About yourSelf"}</p>
                            </div>

                            <div className='dark:bg-[#18191a] hidden lg:flex space-x-[25px] 2xl:space-x-[18px] xl:space-x-[13px] lg:space-x-[35px] pt-[20px]'>

                                <div id={ActiveTab === 1 ? "grad-btn" : ""} onClick={() => SetActiveTab(1)} className={`${ActiveTab === 1 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z" fill={ActiveTab === 1 ? "white" : "black"} />
                                    </svg>
                                </div>
                                <div id={ActiveTab === 2 ? "grad-btn" : ""} onClick={() => SetActiveTab(2)} className={`${ActiveTab === 2 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="18" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.15162 8.69498C7.57598 8.69498 7.93778 8.54389 8.23702 8.2417C8.53627 7.9395 8.68589 7.57623 8.68589 7.15188C8.68589 6.72751 8.53479 6.36571 8.23259 6.06648C7.93039 5.76723 7.56711 5.61761 7.14276 5.61761C6.7184 5.61761 6.3566 5.76871 6.05737 6.07091C5.75812 6.37311 5.60849 6.73638 5.60849 7.16073C5.60849 7.5851 5.75959 7.9469 6.06179 8.24613C6.36399 8.54537 6.72727 8.69498 7.15162 8.69498ZM7.14719 16.5761C9.12473 14.8122 10.6313 13.1302 11.6668 11.5302C12.7023 9.93022 13.22 8.53234 13.22 7.33657C13.22 5.50894 12.6396 4.00681 11.4787 2.83019C10.3178 1.65355 8.87396 1.06523 7.14719 1.06523C5.42042 1.06523 3.97659 1.65355 2.8157 2.83019C1.6548 4.00681 1.07434 5.50894 1.07434 7.33657C1.07434 8.53234 1.6009 9.93022 2.65402 11.5302C3.70714 13.1302 5.20486 14.8122 7.14719 16.5761ZM7.14719 18C4.76419 15.935 2.97724 14.0134 1.78634 12.2349C0.595445 10.4565 0 8.82368 0 7.33657C0 5.15146 0.706831 3.38242 2.12049 2.02945C3.53414 0.676484 5.20971 0 7.14719 0C9.08467 0 10.7602 0.676484 12.1739 2.02945C13.5876 3.38242 14.2944 5.15146 14.2944 7.33657C14.2944 8.82368 13.6989 10.4565 12.508 12.2349C11.3171 14.0134 9.53019 15.935 7.14719 18Z" fill={ActiveTab === 2 ? "white" : "black"} />
                                    </svg>
                                </div>
                                <div id={ActiveTab === 3 ? "grad-btn" : ""} onClick={() => SetActiveTab(3)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 3 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8456 18C14.8692 18 12.8806 17.4926 10.8797 16.4779C8.87876 15.4631 7.07263 14.1518 5.46128 12.5438C3.84994 10.9359 2.53689 9.13314 1.52212 7.13564C0.507374 5.13815 0 3.1512 0 1.17481C0 0.839154 0.111883 0.559442 0.335649 0.335676C0.559415 0.111892 0.839127 0 1.17479 0H4.2088C4.47972 0 4.71601 0.0875181 4.91768 0.262554C5.11933 0.43759 5.25012 0.673573 5.31006 0.970506L5.94548 3.82678C5.98771 4.0883 5.98158 4.32598 5.9271 4.53983C5.87261 4.75368 5.76831 4.93087 5.61419 5.07139L3.10961 7.52078C4.12846 9.21521 5.25832 10.6767 6.49919 11.9054C7.74006 13.134 9.17025 14.1903 10.7898 15.0743L13.1905 12.5837C13.3675 12.3889 13.5661 12.2534 13.786 12.1771C14.006 12.1008 14.2345 12.0892 14.4715 12.1424L17.0499 12.7104C17.3415 12.7701 17.5761 12.9083 17.7538 13.125C17.9315 13.3416 18.0204 13.6012 18.0204 13.9036V16.8252C18.0204 17.1608 17.9085 17.4406 17.6847 17.6643C17.461 17.8881 17.1813 18 16.8456 18ZM2.49669 6.42772L4.68897 4.30081C4.71622 4.27356 4.73495 4.2361 4.74517 4.18843C4.75539 4.14074 4.75709 4.09648 4.75027 4.05562L4.17002 1.36889C4.1632 1.31441 4.14107 1.27355 4.10362 1.24631C4.06615 1.21906 4.02017 1.20544 3.96569 1.20544H1.34844C1.30757 1.20544 1.27352 1.21906 1.24629 1.24631C1.21903 1.27355 1.20541 1.3076 1.20541 1.34847C1.19179 2.04587 1.29634 2.81307 1.51904 3.65007C1.74174 4.48707 2.06763 5.41295 2.49669 6.42772ZM11.9196 15.6402C12.6456 15.9971 13.4404 16.2749 14.304 16.4738C15.1675 16.6727 15.9569 16.783 16.672 16.8048C16.7128 16.8048 16.7469 16.7912 16.7741 16.7639C16.8014 16.7367 16.815 16.7026 16.815 16.6618V14.0547C16.815 14.0002 16.8014 13.9543 16.7741 13.9168C16.7469 13.8793 16.706 13.8572 16.6515 13.8504L14.2427 13.3539C14.2018 13.3471 14.166 13.3488 14.1354 13.359C14.1047 13.3692 14.0724 13.388 14.0383 13.4152L11.9196 15.6402Z" fill={ActiveTab === 3 ? "white" : "black"} />
                                    </svg>
                                </div>

                                <div id={ActiveTab === 4 ? "grad-btn" : ""} onClick={() => SetActiveTab(4)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 4 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="28" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0043 18L3.61065 13.9532V7.95319L0 5.99999L11.0043 0L22.0426 5.99999V13.8957H20.7873V6.73403L18.3979 7.95319V13.9532L11.0043 18ZM11.0043 10.5766L19.3979 5.99999L11.0043 1.48508L2.64466 5.99999L11.0043 10.5766ZM11.0043 16.5766L17.1426 13.2021V8.71486L11.0043 12L4.86594 8.67018V13.2021L11.0043 16.5766Z" fill={ActiveTab === 4 ? "white" : "black"} />
                                    </svg>
                                </div>
                                <div id={ActiveTab === 5 ? "grad-btn" : ""} onClick={() => SetActiveTab(5)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 5 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="18" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.48354 18C1.08019 18 0.73209 17.8536 0.439254 17.5607C0.146418 17.2679 0 16.9198 0 16.5165V4.91141C0 4.50807 0.146418 4.15998 0.439254 3.86714C0.73209 3.57431 1.08019 3.42789 1.48354 3.42789H6.35939V1.48352C6.35939 1.08016 6.5058 0.732074 6.79864 0.439255C7.09146 0.146419 7.43955 0 7.8429 0H11.7C12.1034 0 12.4515 0.146419 12.7443 0.439255C13.0371 0.732074 13.1835 1.08016 13.1835 1.48352V3.42789H18.0594C18.4627 3.42789 18.8108 3.57431 19.1037 3.86714C19.3965 4.15998 19.5429 4.50807 19.5429 4.91141V16.5165C19.5429 16.9198 19.3965 17.2679 19.1037 17.5607C18.8108 17.8536 18.4627 18 18.0594 18H1.48354ZM7.52641 3.42789H12.0165V1.48352C12.0165 1.40439 11.9835 1.33185 11.9176 1.26592C11.8517 1.19997 11.7792 1.167 11.7 1.167H7.8429C7.76377 1.167 7.69124 1.19997 7.62531 1.26592C7.55938 1.33185 7.52641 1.40439 7.52641 1.48352V3.42789ZM18.3759 11.8819H11.795V13.3061H7.77959V11.8819H1.16702V16.5165C1.16702 16.5956 1.19999 16.6681 1.26592 16.7341C1.33187 16.8 1.40441 16.833 1.48354 16.833H18.0594C18.1385 16.833 18.2111 16.8 18.277 16.7341C18.3429 16.6681 18.3759 16.5956 18.3759 16.5165V11.8819ZM8.94662 12.1391H10.628V10.4578H8.94662V12.1391ZM1.16702 10.7149H7.77959V9.29078H11.795V10.7149H18.3759V4.91141C18.3759 4.83229 18.3429 4.75976 18.277 4.69381C18.2111 4.62788 18.1385 4.59491 18.0594 4.59491H1.48354C1.40441 4.59491 1.33187 4.62788 1.26592 4.69381C1.19999 4.75976 1.16702 4.83229 1.16702 4.91141V10.7149Z" fill={ActiveTab === 5 ? "white" : "black"} />
                                    </svg>
                                </div>
                                <div id={ActiveTab === 6 ? "grad-btn" : ""} onClick={() => SetActiveTab(6)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 6 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.08945 8.46256H4.47997C4.38767 7.6743 4.16965 6.92035 3.82591 6.20071C3.48219 5.48107 3.04737 4.86132 2.52145 4.34147C2.11579 4.92448 1.78208 5.56092 1.52034 6.2508C1.2586 6.94069 1.11497 7.67794 1.08945 8.46256ZM13.52 8.46256H16.9105C16.885 7.68401 16.7414 6.95131 16.4797 6.26447C16.2179 5.57762 15.8842 4.9427 15.4785 4.35971C14.8992 4.92691 14.451 5.55546 14.134 6.24535C13.817 6.93523 13.6123 7.6743 13.52 8.46256ZM2.52145 13.6257C3.08259 13.0585 3.52622 12.4324 3.85234 11.7474C4.17846 11.0623 4.38767 10.3257 4.47997 9.53744H1.08945C1.12103 10.3221 1.26618 11.0538 1.52489 11.7328C1.7836 12.4118 2.11579 13.0427 2.52145 13.6257ZM15.4785 13.6257C15.8842 13.0427 16.2179 12.4102 16.4797 11.7282C16.7414 11.0463 16.885 10.316 16.9105 9.53744H13.52C13.6123 10.3257 13.817 11.0623 14.134 11.7474C14.451 12.4324 14.8992 13.0585 15.4785 13.6257ZM5.56031 8.46256H8.46256V1.08945C7.4411 1.16962 6.48827 1.42073 5.60405 1.8428C4.71982 2.26487 3.93217 2.82874 3.24107 3.5344C3.89452 4.18177 4.42043 4.92874 4.8188 5.77531C5.21719 6.62187 5.46436 7.51762 5.56031 8.46256ZM9.53744 8.46256H12.4397C12.5356 7.51762 12.7837 6.62035 13.1839 5.77074C13.5841 4.92116 14.114 4.17571 14.7735 3.5344C14.0885 2.82874 13.2999 2.26487 12.4078 1.8428C11.5157 1.42073 10.5589 1.16962 9.53744 1.08945V8.46256ZM8.46256 16.9105V9.53744H5.56031C5.46436 10.4945 5.21871 11.3894 4.82337 12.222C4.42802 13.0546 3.90059 13.7915 3.24107 14.4328C3.93217 15.1385 4.70312 15.7078 5.55394 16.1408C6.40476 16.5738 7.3743 16.8304 8.46256 16.9105ZM9.53744 16.9105C10.6196 16.8304 11.5916 16.5768 12.4533 16.1499C13.3151 15.723 14.0885 15.1567 14.7735 14.451C14.114 13.8097 13.5841 13.0697 13.1839 12.2311C12.7837 11.3924 12.5356 10.4945 12.4397 9.53744H9.53744V16.9105ZM9 18C7.75627 18 6.58694 17.7635 5.492 17.2904C4.39706 16.8173 3.44454 16.1757 2.63442 15.3656C1.8243 14.5555 1.1827 13.6029 0.709628 12.508C0.236543 11.4131 0 10.2437 0 9C0 7.75628 0.236543 6.58694 0.709628 5.492C1.1827 4.39706 1.8243 3.44454 2.63442 2.63443C3.44454 1.8243 4.39706 1.1827 5.492 0.709629C6.58694 0.236544 7.75627 0 9 0C10.2437 0 11.4131 0.236544 12.508 0.709629C13.6029 1.1827 14.5555 1.8243 15.3656 2.63443C16.1757 3.44454 16.8173 4.39706 17.2904 5.492C17.7635 6.58694 18 7.75628 18 9C18 10.2437 17.7635 11.4131 17.2904 12.508C16.8173 13.6029 16.1757 14.5555 15.3656 15.3656C14.5555 16.1757 13.6029 16.8173 12.508 17.2904C11.4131 17.7635 10.2437 18 9 18Z" fill={ActiveTab === 6 ? "white" : "black"} />
                                    </svg>
                                </div>

                                <div id={ActiveTab === 7 ? "grad-btn" : ""} onClick={() => SetActiveTab(7)} className={`w-[200px] h-[50px] cursor-pointer  ${ActiveTab === 7 ? "bg-[#0F52BA] text-[#FFF]" : "bg-[#F8F8F8] Text-[#000]"} flex justify-center items-center space-x-[15px] rounded-[27px] hover:bg-[#F3F8FF]`}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z" fill={ActiveTab === 7 ? "white" : "black"} />
                                    </svg>
                                    <p style={Text4} className='text-[14px] 2xl:text-[14px] xl:text-[13px]'>Partner Preference</p>
                                </div>

                            </div>

                            <div className='dark:bg-[#18191a] hidden lg:flex pt-[10px] pb-[30px] '>
                                {RenderTab()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Modal
                handleClose={handleClose}
                handleOpen={handleOpen}
                setOpenProfileModal={setOpenProfileModal}
                openProfileModal={openProfileModal}
            />


        </>
    )
}


export default Profile