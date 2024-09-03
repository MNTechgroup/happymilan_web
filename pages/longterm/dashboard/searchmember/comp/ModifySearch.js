import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import { DeleteSaveSearchData, FetchSaveSearchData, GetSearchUsersData, SaveUserSearchPost, updateSearchData } from '../../../../../store/actions/SearchUsersActions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { Dialog, DialogContent, Skeleton } from '@mui/material';
import Image from 'next/image';
import { MaritalStatus, cityOptions, communityOptions, countryoflivingOptions, motherTongueOption, religionOptions, statesOptions } from '../../../../../utils/options/UserSearch/SearchMemberOptions';
// import { SearchMemberSelectBoxStyle } from '../../../../../utils/options/styles/SelectBoxStyle';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ModifySearch({ state, updateSearchData, setFormOpen }) {

    const { darkMode, toggleDarkMode } = useDarkMode();


    const SearchMemberSelectBoxStyle = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            backgroundColor: darkMode ? "#141516" : "#FFF",
            height: "50px",
            borderRadius: "8px", // Add padding on the right side
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        }),
        multiValue: (provided) => ({
            ...provided,
            borderRadius: "10px",
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            backgroundColor: "#F9F9F9",
            borderRadius: "5px"
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            backgroundColor: "#F9F9F9",
            borderRadius: "5px"
        }),
        // option : (provided) => ({
        //     ...provided,
        //     backgroundColor:"#F9F9F9"
        // })

    };

    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */
    }

    const saveSearchText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "22px" /* 122.222% */
    }
    const SaveText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px" /* 122.222% */
    }

    const [selectedOptions, setSelectedOptions] = useState();
    const [selectedmaritalstatus, setSelectedmaritalstatus] = useState();
    const [selectedReligion, setSelectedReligion] = useState([]);
    const [selectCommunity, setSelectCommunity] = useState();
    const [selectMotherTongue, setSelectMotherTongue] = useState();
    const [selectStateofLiving, setSelectStateofLiving] = useState();
    const [selectCityeofLiving, setSelectCityeofLiving] = useState();
    const [Userage, SetUserage] = useState({
        minAge: null,
        maxAge: null,
        minHeight: null,
        maxHeight: null,
        minWeight: null,
        maxWeight: null,
    })

    const [SearchSave, SetSearchSave] = useState("")

    const { status, data } = useSelector((state) => state.searchform.Searchsave)


    const SaveButtonClick = (res) => {


        const maritalStatusData = MaritalStatus.filter(option => res?.maritalStatus.includes(option.value));
        const religionData = religionOptions.filter(option => res?.religion.includes(option.value));
        const commnunitydata = communityOptions.filter(option => res?.community.includes(option.value));
        const mothertonguedata = motherTongueOption.filter(option => res?.motherTongue.includes(option.value));
        const countryoflivingdata = countryoflivingOptions.filter(option => res?.currentCountry.includes(option.value));
        const currentCitydata = cityOptions.filter(option => res?.currentCity.includes(option.value));
        const currentStateData = statesOptions.filter(option => res?.state.includes(option.value));

        updateSearchData({
            ...state.searchform,
            minAge: res?.minAge?.min,
            maxAge: res?.minAge?.max,
            minHeight: res?.height?.min,
            maxHeight: res?.height?.max,
            community: res?.community,
            maritalStatus: res?.maritalStatus,
            religion: res?.religion,
            motherTongue: res?.motherTongue,
            currentCountry: res?.currentCountry,
            currentCity: res?.currentCity,
            stateofLiving: res?.state

            // Set the religion field to the updated value
        });
        setSelectedReligion(religionData)
        setSelectedmaritalstatus(maritalStatusData)
        setSelectCommunity(commnunitydata)
        setSelectMotherTongue(mothertonguedata)
        setSelectedOptions(countryoflivingdata)
        setSelectCityeofLiving(currentCitydata)
        SetSearchSave(res?.saveSearch)
        setSelectStateofLiving(currentStateData)
        SetUserage({
            minAge: res?.minAge?.min,
            maxAge: res?.minAge?.max,
            minHeight: res?.height?.min,
            maxHeight: res?.height?.max,
            maxWeight: res?.weight?.max,
            minWeight: res?.weight?.min,



        })

    }


    const DeleteList = (res) => {
        dispatch(DeleteSaveSearchData(res?.id))

    }


    function handleSelect(data) {
        const values = data.map(item => item.value);
        setSelectedOptions(data);
        updateSearchData({
            ...state.searchform,
            currentCountry: [...values], // Set the religion field to the updated value
        });
    }

    const handleMaritalstatus = (data) => {
        const values = data.map(item => item.value);
        setSelectedmaritalstatus(data);
        updateSearchData({
            ...state.searchform,
            maritalStatus: [...values], // Set the religion field to the updated value
        });

    }

    const handleReligion = (data) => {
        const values = data.map(item => item.value);
        setSelectedReligion(data);
        updateSearchData({
            ...state.searchform,
            religion: [...values], // Set the religion field to the updated value
        });


    }

    const handleCommunity = (data) => {
        const values = data.map(item => item.value);
        setSelectCommunity(data)
        updateSearchData({
            ...state.searchform,
            community: [...values], // Set the religion field to the updated value
        });
    }

    const handleMotherTongue = (data) => {
        const values = data.map(item => item.value);
        setSelectMotherTongue(data);
        updateSearchData({
            ...state.searchform,
            motherTongue: [...values], // Set the religion field to the updated value
        });

    }
    const handleStateofLiving = (data) => {
        const values = data.map(item => item.value);
        setSelectStateofLiving(data);
        updateSearchData({
            ...state.searchform,
            stateofLiving: [...values], // Set the religion field to the updated value
        });




    }

    const handleCityeofLiving = (data) => {
        const values = data.map(item => item.value);
        setSelectCityeofLiving(data)

        updateSearchData({
            ...state.searchform,
            currentCity: [...values], // Set the religion field to the updated value
        });
    }

    const SearchData = useSelector((state) => state.searchform)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(FetchSaveSearchData())
    }, [])


    const CLearAllData = () => {
        setSelectedOptions(null)
        setSelectedmaritalstatus(null)
        setSelectedReligion(null)
        setSelectCommunity(null)
        setSelectMotherTongue(null)
        setSelectStateofLiving(null)
        setSelectCityeofLiving(null)
        SetUserage({
            minAge: "",
            maxAge: "",
            maxHeight: "",
            minHeight: "",
            minWeight: "",
            maxWeight: ""
        })
        SetSearchSave("")

        // updateSearchData({
        //     ...state.searchform,
        //     stateofLiving: [...values], // Set the religion field to the updated value
        // });

        updateSearchData({
            minAge: 0,
            maxAge: 0,
            minHeight: 0,
            maxHeight: 0,
            minWeight: 0,
            maxWeight: 0,
            maritalStatus: [],
            religion: [],
            community: [],
            stateofLiving: [],
            motherTongue: [],
            currentCountry: [],
            currentCity: [],
            stateofLiving: [],
            loading: false, // to track if API call is in progress
            searchResults: null, // to store search results from the API
            error: null, // to store any errors that occur during API call
        });


    }



    // Hanlde Modal For Save Search 



    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }


    const SearchDataHandle = () => {
        handleClickDeleteImageModal()

    }








    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);

    const handleClickDeleteImageModal = (res) => {
        setOpenLogoutModal(true);

    };

    const handleCloseLogout = () => {
        setOpenLogoutModal(false);
    };

    const HandleLogout = (e) => {
        if (e.target.name != "stay") {

            dispatch(SaveUserSearchPost(SearchData))
            dispatch(GetSearchUsersData(SearchData))

            setFormOpen(false)
            setTimeout(() => {
                CLearAllData()
            }, 2000)

            console.log(SearchData)

            setOpenLogoutModal(false);

        }
        setOpenLogoutModal(false)
        dispatch(GetSearchUsersData(SearchData))
        setTimeout(() => {
            CLearAllData()
        }, 2000)

        setFormOpen(false)

    }







    const HanldeInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value




        updateSearchData({
            ...state.searchform, // Ensure to spread the existing searchData to retain other fields
            [name]: parseInt(value) // Update the minAge or maxAge field based on the input name
        });

        SetUserage(prevState => ({ ...prevState, [name]: value }))


        if (name == "saveSearch") {
            SetSearchSave(value)
            updateSearchData({
                ...state.searchform, // Ensure to spread the existing searchData to retain other fields
                saveSearch: value // Update the minAge or maxAge field based on the input name
            });
        }


    }




    const [currentPage, SetcurrentPage] = useState(1)
    const DataperPage = 3;

    const totalPage = Math.ceil(data.length / DataperPage)

    const currentData = data.slice(
        (currentPage - 1) * DataperPage,
        currentPage * DataperPage
    )


    const handlePrev = () => {
        SetcurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }

    const handleNext = () => {
        SetcurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
    }


    return (
        <>
            <div className='dark:bg-[#18191a] flex w-full justify-evenly ml-[40px] items-center' >
                <div className="2xl:ml-[210px] xl:ml-[210px] lg:ml-[150px] flex flex-col space-y-[40px] w-full  md:w-[600px] 2xl:mr-[110px] mt-[120px] pb-[50px]">
                    <div>
                        <h1 className='text-[#000] dark:text-[#FFF]' style={Text1}>Search Your Match</h1>
                    </div>

                    <div className='flex flex-col space-y-[20px]'>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF]'>Age</h1>
                            <div className='flex justify-between items-center relative left-[48px] md:left-[118px] rounded-[8px] hover:border-[black] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>

                                <input onChange={HanldeInputChange} value={Userage.minAge} name='minAge' type='number' placeholder='Min' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                <input onChange={HanldeInputChange} value={Userage.maxAge} name='maxAge' type='number' placeholder='Max' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex space-y-[20px] md:space-y-0 flex-col md:flex-row justify-between'>
                            <div className='flex items-center'>
                                <h1 className='text-[#000] dark:text-[#FFF]'>Height</h1>
                                <div className='hover:border-[black] flex justify-between items-center relative left-[48px] md:left-[100px] rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>

                                    <input name='minHeight' value={Userage.minHeight} onChange={HanldeInputChange} type='number' placeholder='Min' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                    <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                    <input name='maxHeight' value={Userage.maxHeight} onChange={HanldeInputChange} type='number' placeholder='Max' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex items-center space-x-[30px] '>
                                <h1 className='text-[#000] dark:text-[#FFF]'>Weight</h1>
                                <div className='hover:border-[black] flex justify-between items-center rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>
                                    <input name='minWeight' value={Userage.minWeight} onChange={HanldeInputChange} type='number' placeholder='Min' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                    <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                    <input name='maxWeight' value={Userage.maxWeight} onChange={HanldeInputChange} type='number' placeholder='Max' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Marital Status</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={MaritalStatus}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectedmaritalstatus}
                                    onChange={handleMaritalstatus}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Religion</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={religionOptions}
                                    placeholder="Select.."

                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectedReligion}
                                    onChange={handleReligion}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Community</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={communityOptions}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectCommunity}
                                    onChange={handleCommunity}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Mother Tongue</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={motherTongueOption}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectMotherTongue}
                                    onChange={handleMotherTongue}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>

                        <div className='flex'>
                            <h1 className='text-[#000] dark:text-[#FFF] relative top-[10px] w-[150px]'>Country Living</h1>
                            <div className='w-full md:w-[479px] flex flex-col space-y-[10px]'>
                                <DynamicSelect

                                    options={countryoflivingOptions}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>State Living</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={statesOptions}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectStateofLiving}
                                    onChange={handleStateofLiving}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>City Living</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={cityOptions}
                                    placeholder="Select.."
                                    styles={SearchMemberSelectBoxStyle}
                                    value={selectCityeofLiving}
                                    onChange={handleCityeofLiving}
                                    isSearchable={true}
                                    isMulti />
                            </div>
                        </div>
                        <div className='pt-[10px]'>
                            <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Save Search</h1>
                            <div className='w-full md:w-[479px]'>
                                <input name='saveSearch' value={SearchSave} onChange={HanldeInputChange} type='text' placeholder='My Matches' className='dark:bg-[#141516] dark:text-[#FFF] pl-[20px] oultine-none w-full rounded-[8px] h-[50px] border-[1px] hover:border-[#000] border-[#D8D8D8]' />
                            </div>
                        </div>
                        <div className='pt-[10px]'>
                            <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                        </div>


                        <div className='w-full flex justify-end space-x-[20px]'>
                            <button onClick={CLearAllData} className={` border-[1px] border-[#8225AF] hover:bg-[#F2F7FF] dark:hover:bg-[#141516] w-[104px] h-[50px] dark:text-[#FFF] text-[black] rounded-[25px]`}>Clear All</button>
                            <button id='grad-btn' className={` border-[1px] border-[#0F52BA] bg-[#0F52BA] text-[white] w-[104px] h-[50px] rounded-[25px]`} onClick={SearchDataHandle} >Search</button>
                        </div>
                    </div>


                </div>
                <div className='relative top-[-230px]'>
                    <div id='Save-Search-Box' style={{ width: "280px", height: "260px" }} className='bg-[#FFF] dark:bg-[#242526]'>
                        <div className='pb-[13px] relative pt-[14px] left-[16px]'>
                            <span className='text-[#000] dark:text-[#FFF]' style={saveSearchText}>My Saved Search</span>
                        </div>
                        <div className='pb-[14px] w-full grid place-items-center'>
                            <div className='bg-[#F2F2F2] h-[1px] w-[90%]'></div>
                        </div>
                        <div className='h-[160px] flex justify-center'>

                            {status ?
                                <>
                                    <ul className='flex flex-col justify-start items-start space-y-[15px]'>
                                        <Skeleton className='text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px]'>                            </Skeleton>
                                    </ul>
                                </> : <>

                                    {data.length > 0 ? <>



                                        <ul className='flex flex-col justify-start items-start space-y-[15px]'>



                                            {currentData?.map((res, index) => {
                                                return (
                                                    <>
                                                        <li key={index} className='relative'>
                                                            <div onClick={() => SaveButtonClick(res)} className='text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px] dark:hover:bg-[#383838] hover:bg-[#F2F7FF] '>
                                                                <div><span className='' style={SaveText}>{res?.saveSearch}</span></div>

                                                            </div>
                                                            <div className='cursor-pointer absolute top-[11px] right-10' onClick={() => DeleteList(res)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                    <g clipPath="url(#clip0_1066_324)">
                                                                        <path d="M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25H4.5V14.25ZM6 6.75H12V14.25H6V6.75ZM11.625 3L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625Z" fill="#5F6368" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1066_324">
                                                                            <rect width="18" height="18" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                        </li>
                                                    </>
                                                )
                                            })}

                                        </ul>
                                    </>
                                        :
                                        <>
                                            <div className='h-[full] grid place-items-center mt-[10%]'>
                                                <div className='grid place-items-center space-y-[5px]'>
                                                    <Image alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                                    <h1 className='inline' style={ImageNotFoundText}>No Data Found</h1>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </>}
                        </div>
                        {data.length > 0 ? <>
                            <div className='flex justify-between'>

                                <div>
                                    <div onClick={handlePrev} style={{ display: currentPage === 1 ? "none" : "" }} className='relative left-[15px] hover:bg-[#F2F7FF] cursor-pointer w-[30px] h-[30px] rounded-full grid place-items-center'>
                                        <Image width={12} height={22} className='' alt='next-light' src="/assests/scorematch/Next-btn.svg" />
                                    </div>
                                </div>
                                <div>
                                    <div onClick={handleNext} style={{ display: currentPage === totalPage ? "none" : "" }} className='relative right-[15px] hover:bg-[#F2F7FF] cursor-pointer w-[30px] h-[30px] rounded-full grid place-items-center'>
                                        <Image width={12} height={22} className='transform scale-x-[-1]' alt='next-light' src="/assests/scorematch/Next-btn.svg" />
                                    </div>
                                </div>
                            </div>
                        </>
                            :
                            ""
                        }
                    </div>

                </div >
            </div >



            {/* Modal for Save Search  */}

            <Dialog
                open={openLogoutModal}
                onClose={handleCloseLogout}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className=""
            >
                <DialogContent className="text-center w-[400px] mt-[20px]">
                    <div id="alert-dialog-description">
                        <p style={LogoutModalText}>Do you want to save your current search criteria for future use?</p>
                    </div>
                </DialogContent>
                <div className="flex justify-evenly p-[20px] mb-[20px]">
                    <div>
                        <button onClick={HandleLogout} name="stay" id="grad-button" className="rounded-[24px] w-[122px] h-[50px]">No</button>
                    </div>
                    <div>
                        <button onClick={HandleLogout} name="exit" className="border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]">Yes</button>
                    </div>
                </div>
            </Dialog >





        </>
    )
}

// export default ModifySearch
// searchformReducer
export default connect(state => ({ state }), { updateSearchData })(ModifySearch);
