import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEducationData, updateEducationData } from '../../../../../store/actions/UsersAction';
import { getCookie } from 'cookies-next';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

function EducationTab() {
  
   
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
    
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.usersact.educationdata)
    const status = useSelector((state)=>state.usersact)
    const currentUser = getCookie("userid")
        useEffect(()=>{
            
            dispatch(getEducationData(currentUser))
        },[])
        const [showForm, setShowForm] = useState(false);

        const handleEditClick = () => {
            setShowForm(!showForm);
        };

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
                borderColor: state.isFocused ? 'black' : provided.borderColor,
                '&:hover': {
                    borderColor: 'black',
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

        
    const StateOptions = [
        { value: 'ca', label: 'California' },
        { value: 'ny', label: 'New York' },
        { value: 'tx', label: 'Texas' },
        { value: 'fl', label: 'Florida' },
        { value: 'il', label: 'Illinois' }
    ];
    const CollageOptions = [
        { value: 'harvard', label: 'Harvard' },
        { value: 'stanford', label: 'Stanford' },
        { value: 'mit', label: 'MIT' },
        { value: 'caltech', label: 'Caltech' },
        { value: 'oxford', label: 'Oxford' }
    ];
    const CityOptions = [
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "vadodara", label: "Vadodara" },
        { value: "rajkot", label: "Rajkot" },
        { value: "jamnagar", label: "Jamnagar" },
    ];
    const DegreeOption = [
        { value: 'bs', label: 'Bachelor of Science (B.S.)' },
        { value: 'ba', label: 'Bachelor of Arts (B.A.)' },
        { value: 'ms', label: 'Master of Science (M.S.)' },
        { value: 'mba', label: 'Master of Business Administration (MBA)' },
        { value: 'phd', label: 'Doctor of Philosophy (Ph.D.)' }
    ];
    const CountryOptions = [
        { value: "india", label: "India" },
        { value: "usa", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "canada", label: "Canada" },
        { value: "australia", label: "Australia" },
    ];


        const [AllData,SetAllData] = useState({
            degree : data?.data?.degree ? data.data.degree : "",
            collage : data?.data?.collage ? data.data.collage : "",
            city : data?.data?.city ? data.data.city : "",
            state : data?.data?.state ? data.data.state : "",
            country : data?.data?.country ? data.data.country : "",


        })

        const handleInputChange = (event) =>{
            const name = event.target.name;
            const value = event.target.value;

            SetAllData((prev)=> ({...prev,[name]:value}))

        
        }

        const HandleSubmit = () =>{
            // console.log(AllData)
            dispatch(updateEducationData( currentUser , AllData))
           
            setShowForm(false)
        }

        if (status.loading === true) {

            return <h1>Loading..</h1>
            // return <SkeletonProfile/>

        }

        return (
            <>
                <div className={`w-full  ${showForm ? "h-[400px]" : "h-[369px]"}  border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}>
                    <div className='pt-[10px] grid place-items-center'>
                        <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                            <li><h1 style={Text2} className='text-[16px]'>{showForm ? "Modify General Information" : "Education Details"}</h1></li>

                            <li>
                                <div className='cursor-pointer w-[37px] h-[37px] bg-[#F0F9FF] rounded-[5px] flex items-center justify-center'>
                                    {!showForm ?
                                        <Image alt='editIcon' width={20} height={20} onClick={handleEditClick} src={'/assests/dashboard/icon/edit-details-icon.svg'} />
                                        :
                                        <Image alt='modifyIcon' width={37} height={37} onClick={handleEditClick} src={'/assests/dashboard/icon/modify-icon.svg'} />
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>

                    {
                        showForm ?
                            <>
                                <div className='flex flex-col items-center'>
                                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>Degree</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={DegreeOption}
                                                placeholder={AllData.degree}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "degree", value: selectedOption?.value } })}
                                               
                                            />
                                        </div>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>College/University</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={CollageOptions}
                                                placeholder={AllData.collage}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "collage", value: selectedOption?.value } })}
                                               
                                            />
                                        </div>
                                    </div>

                                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>City</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={CityOptions}
                                                placeholder={AllData.city}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "city", value: selectedOption?.value } })}
                                               
                                            />
                                        </div>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>State</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={StateOptions}
                                                placeholder={AllData.state}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "state", value: selectedOption?.value } })}
                                               />
                                        </div>
                                    </div>
                                    <div className='w-[90%] pt-[20px] flex justify-between space-x-[20px]'>
                                        <div>
                                            <h1 className='text-[#000] pb-[10px]' style={labelText}>Country</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                                styles={customStyles}
                                                options={CountryOptions}
                                                placeholder={AllData.country}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "country", value: selectedOption?.value } })}
                                               
                                            />
                                        </div>
                                    </div>

                                    <div className='w-[90%] flex justify-end pb-[10px] mt-[10px]'>

                                        <button onClick={HandleSubmit} id='grad-btn' className='rounded-[10px] text-[white] w-[80px] h-[40px]' >Save</button>

                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex justify-center '>
                                    <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                                </div>
                                <div className='grid place-items-center'>
                                    <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                        <div>
                                            <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Degree</p>
                                            <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.degree ? data.data.degree : "NA"}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>College/University</p>
                                            <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.collage ? data.data.collage : "NA"}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>City</p>
                                            <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.city ? data.data.city : "NA"}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>State</p>
                                            <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.state ? data.data.state  : "NA"}</h1>
                                        </div>
                                        <div>
                                            <p style={Text2} className='2xl:text-[14px] xl:text-[12px] text-[12px]'>Country</p>
                                            <h1 style={Text5} className='2xl:text-[16px]  xl:text-[14px] text-[14px]'>{data?.data?.country  ? data.data.country : "NA"}</h1>
                                        </div>

                                    </div>
                                </div>
                            </>
                    }


                </div>
            </>
        )
    
}

export default EducationTab