import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { GetSearchUsersData, updateSearchData } from '../../../../store/actions/SearchUsersActions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useDarkMode } from '../../../../ContextProvider/DarkModeContext';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function ModifySearch({ state, updateSearchData, setFormOpen }) {
    
    const { darkMode, toggleDarkMode } = useDarkMode();

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

    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            backgroundColor : darkMode ? "#141516" : "#FFF",
            height: "50px",
            borderRadius: "8px", // Add padding on the right side
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };

    const MaritalStatus = [
        { label: 'Single', value: 'single' },
        { label: 'Never Married', value: 'never-married' },
        { label: 'Married', value: 'married' },

    ]

    const communityOptions = [
        { value: "patel", label: "Patel" },
        { value: "shah", label: "Shah" },
        { value: "mehta", label: "Mehta" },
        // Add more community options as needed
    ];


    const countryoflivingOptions = [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
        // Add more countries as needed
    ];

    const motherTongueOption = [
        { value: "english", label: "English" },
        { value: "hindi", label: "Hindi" },
        { value: "gujarati", label: "Gujarati" }
    ];


    const religionOptions = [
        { value: "hindu", label: "Hinduism" },
        { value: "muslim", label: "Islam" },
        { value: "sikh", label: "Sikhism" },
        // Add more options as needed
    ];




    const statesOptions = [
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'otava', label: 'Otava' },
        { value: 'Assam', label: 'Assam' },
    ];


    const cityOptions = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "toronto", label: "Toronto" },
    ];


    const [selectedOptions, setSelectedOptions] = useState();
    const [selectedmaritalstatus, setSelectedmaritalstatus] = useState();
    const [selectedReligion, setSelectedReligion] = useState([]);
    const [selectCommunity, setSelectCommunity] = useState();
    const [selectMotherTongue, setSelectMotherTongue] = useState();
    const [selectStateofLiving, setSelectStateofLiving] = useState();
    const [selectCityeofLiving, setSelectCityeofLiving] = useState();
    const [Userage, SetUserage] = useState({
        minAge: null,
        maxAge: null
    })


    const [SaveData,SetSaveData] = useState({
        MaxAge : Userage.maxAge,
        MinAge : Userage.minAge,
        
    })

    function handleSelect(data) {
        const values = data.map(item => item.value);
        setSelectedOptions(data);
        updateSearchData({
            ...state.searchform,
            currentCountry: [...values], // Set the religion field to the updated value
        });
    }

    const handleMaritalstatus = (data) => {
        // setSelectedmaritalstatus(data)
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
        // console.log("🚀 ~ handleReligion ~ data:", values)
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
        // console.log("🚀 ~ handleReligion ~ data:", values)
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
        setSelectCityeofLiving(data)
    }

    // const [toggle, settoggle] = useState("")

    const SearchData = useSelector((state) => state.searchform)

    const dispatch = useDispatch();

    const SearchDataHandle = () => {

        dispatch(GetSearchUsersData(SearchData))

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


    }

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
            maxAge: ""
        })

        // updateSearchData({
        //     ...state.searchform,
        //     stateofLiving: [...values], // Set the religion field to the updated value
        // });

        updateSearchData({
            minAge: 0,
            maxAge: 0,
            maritalStatus: [],
            religion: [],
            community: [],
            stateofLiving: [],
            motherTongue: [],
            currentCountry: [],
            loading: false, // to track if API call is in progress
            searchResults: null, // to store search results from the API
            error: null, // to store any errors that occur during API call
        });


    }

    return (
        <>
            <div className='dark:bg-[#18191a] flex w-full justify-evenly ml-[40px] items-center' >
                <div class="2xl:ml-[210px] xl:ml-[210px] lg:ml-[150px] flex flex-col space-y-[40px] w-full  md:w-[600px] 2xl:mr-[110px] mt-[120px] pb-[50px]">
                    <div>
                        <h1 className='text-[#000] dark:text-[#FFF]' style={Text1}>Search Your Match</h1>
                    </div>

                    <div className='flex flex-col space-y-[20px]'>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF]'>Age</h1>
                            <div className='flex justify-between items-center relative left-[48px] md:left-[118px] rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>

                                <input onChange={HanldeInputChange} value={Userage.minAge} name='minAge' type='number' placeholder='From' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                <input onChange={HanldeInputChange} value={Userage.maxAge} name='maxAge' type='number' placeholder='To' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex space-y-[20px] md:space-y-0 flex-col md:flex-row justify-between'>
                            <div className='flex items-center'>
                                <h1 className='text-[#000] dark:text-[#FFF]'>Height</h1>
                                <div className='flex justify-between items-center relative left-[48px] md:left-[100px] rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>

                                    <input   name='minheight' type='number' placeholder='From' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                    <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                    <input   name='maxheight' type='number' placeholder='To' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex items-center space-x-[30px] '>
                                <h1 className='text-[#000] dark:text-[#FFF]'>weight</h1>
                                <div className='flex justify-between items-center rounded-[8px] border-[1px] border-[#D8D8D8] w-[140px] h-[50px]'>
                                    <input type='number' placeholder='From' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                    <div className='w-[1px] h-[20px] bg-[#D8D8D8]'></div>
                                    <input type='number' placeholder='To' className='dark:bg-[#141516] dark:text-[#FFF] rounded-[8px] pl-[10px] h-[40px] w-[60px] border-none outline-none bg-none focus:outline-none' />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-[#000] dark:text-[#FFF] w-[150px]'>Marital Status</h1>
                            <div className='w-full md:w-[479px]'>
                                <DynamicSelect

                                    options={MaritalStatus}
                                    placeholder="Select.."
                                    styles={customStyle}
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
                                    
                                    styles={customStyle}
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
                                    styles={customStyle}
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
                                    styles={customStyle}
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
                                    styles={customStyle}
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
                                    styles={customStyle}
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
                                    styles={customStyle}
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
                                <input type='text' placeholder='My Matches' className='dark:bg-[#141516] dark:text-[#FFF] pl-[20px] oultine-none w-full rounded-[8px] h-[50px] border-[1px] hover:border-[#000] border-[#D8D8D8]' />
                            </div>
                        </div>
                        <div className='pt-[10px]'>
                            <div className='w-full bg-[#EFEFEF] h-[1px]'></div>
                        </div>


                        <div className='w-full flex justify-end space-x-[20px]'>
                            <button onClick={CLearAllData} className={` border-[1px] border-[#0F52BA] hover:bg-[#F2F7FF] dark:hover:bg-[#141516] w-[104px] h-[50px] dark:text-[#FFF] text-[black] rounded-[25px]`}>Clear All</button>
                            <button id='grad-btn' className={` border-[1px] border-[#0F52BA] bg-[#0F52BA] text-[white] w-[104px] h-[50px] rounded-[25px]`} onClick={SearchDataHandle} >Search</button>
                        </div>
                    </div>


                </div>
                <div className='relative top-[-230px]'>
                    <div id='Save-Search-Box' className='bg-[#FFF] dark:bg-[#242526]'>
                        <div className='pb-[13px] relative pt-[14px] left-[16px]'>
                            <span className='text-[#000] dark:text-[#FFF]' style={saveSearchText}>My Saved Search</span>
                        </div>
                        <div className='pb-[14px] w-full grid place-items-center'>
                            <div className='bg-[#F2F2F2] h-[1px] w-[90%]'></div>
                        </div>
                        <div className='grid place-items-center'>
                            <ul className='flex flex-col justify-start items-start space-y-[15px]'>
                                <li className='dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px] dark:hover:bg-[#383838] hover:bg-[#F2F7FF] '>
                                    <div><span className='' style={SaveText}>My Matches</span></div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_1066_324)">
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
                                <li className='text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px] dark:hover:bg-[#383838] hover:bg-[#F2F7FF] '>
                                    <div><span className='' style={SaveText}>My Matches 1</span></div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_1066_324)">
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
                                <li className='text-[#000] dark:hover:text-[#e3e3e3] dark:text-[#FFF] cursor-pointer flex justify-between p-[10px] h-[40px] w-[264px] rounded-[22px] dark:hover:bg-[#383838]  hover:bg-[#F2F7FF] '>
                                    <div><span className='' style={SaveText}>My Matches 2</span></div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_1066_324)">
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default ModifySearch
// searchformReducer
export default connect(state => ({ state }), { updateSearchData })(ModifySearch);
