import React from 'react'
import NavBar from '../dashboard/NavBar'
import UserStory from '../dashboard/commonCompo/UserStory'

function Skeleton() {
    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const ProfileCard = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    return (
        <>
            {/* NAVBAR SKELETON  START*/}

            <NavBar />


            {/* NAVBAR SKELETON  END*/}


            {/* SIDE BAR SKELETON  */}
            <aside id="separator-sidebar" class=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#FFF] dark:bg-gray-800">

                    <div className='p-[10px]'>
                        <div className='user-card skeleton w-[47px] h-[47px] bg-[gray] rounded-[50px]'>
                        </div>
                        <div className='pt-[20px]'>
                            <div className='user-card skeleton w-[100px] bg-[gray] h-[20px]'></div>
                        </div>
                        <div className='pt-[10px]'>
                            <div className='user-card skeleton w-[110px] bg-[gray] h-[20px]'></div>
                        </div>
                    </div>

                    <ul class="space-y-[10px] pb-[20px] font-medium border-t  border-gray-200 dark:border-gray-700 p-[10px]">

                        <li className='pt-[8px] flex items-center'>

                            <div>
                                <div className='user-card skeleton w-[110px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>

                        <li className='pt-[8px] flex items-center '>


                            <div>
                                <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                            </div>

                        </li>

                        <li className='pt-[8px] flex items-center  '>
                            <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                        </li>

                        <li className='pt-[8px] flex items-center '>
                            <div>
                                <div className='user-card skeleton w-[110px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>

                        <li className='pt-[8px] flex items-center   '>
                            <div>
                                <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>


                        <li className='pt-[8px] flex items-center '>

                            <div>
                                <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                            </div>

                        </li>


                        <li className='pt-[8px] flex items-center '>

                            <div>
                                <div className='user-card skeleton w-[130px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>

                    </ul>
                    <ul class=" pb-[20px] pt-2 mt-0 p-[10px] space-y-[10px] font-medium border-t border-gray-200 dark:border-gray-700">

                        <li className='pt-[8px] flex items-center '>

                            <div>
                                <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>

                        <li className='pt-[8px] flex items-center '>
                            <div className='user-card skeleton w-[110px] bg-[gray] h-[20px]'></div>
                            <div></div>
                        </li>

                        <li className='pt-[8px] flex items-center '>

                            <div>
                                <div className='user-card skeleton w-[120px] bg-[gray] h-[20px]'></div>
                            </div>
                        </li>
                    </ul>

                </div>
            </aside>

            {/* SIDE BAR SKELETON  */}


            {/* DASHBOARD SKELETON START  */}

            <div id='main-centerlized-content' className='flex justify-center flex-col'>
                <div id='first-child' className=' pl-[0px] lg:pl-[245px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>


                    <div className='h-full'>
                        {/* Side Section 1 */}

                        <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                            <div id='story-section-center' className='pb-[20px] w-full lg:w-auto lg:pb-[0px] z-10 lg:z-0 bg-[white] mt-[-20px] lg:mt-0 lg:bg-none p-[5px] fixed  lg:relative left-[0px] 2xl:left-[50px] lg:left-[50px] xl:left-[60px] flex space-x-[15px]'>
                                {
                                    [1, 2, 3, 4, 5].map(() => {
                                        return (
                                            <>
                                                <div className='user-card skeleton  w-[47px] h-[47px] cursor-pointer bg-[#000] rounded-full grid place-items-center'></div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div id='centerlized-content' className=' 2xl:block xl:block   hidden'>
                            <div className='relative w-full 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                                <h1 className='user-card skeleton w-[150px] h-[20px] p-[5px] relative 2xl:left-[50px] xl:left-[55px]'> </h1>
                                <div className='flex space-x-[10px] relative right-[50px]'>
                                    <button className='' >

                                        {/* Grid View Mode  */}

                                        {/* <img src='/assests/Black/3-grid.svg'/> */}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#BBBBBB" />
                                        </svg>
                                    </button>


                                    {/* Grid View Mode  */}
                                    <button className=''>

                                        {/* List View Mode  */}

                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_576_120)">
                                                <path d="M16.5 0H0.5V4H16.5V0Z" fill="#0F52BA" />
                                                <path d="M16.5 6H0.5V10H16.5V6Z" fill="#0F52BA" />
                                                <path d="M16.5 12H0.5V16H16.5V12Z" fill="#0F52BA" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_576_120">
                                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>



                                        {/* List View Mode  */}


                                    </button>
                                </div>
                            </div>

                            {/* User Card  */}


                            <div className=''>

                                <div className='flex'>

                                    <div className=' grid place-items-center w-[10px] lg:w-[40px] 2xl:w-[40px] xl:w-[40px] h-[294px]'>

                                    </div>
                                    <div className=' w-[600px] relative 2xl:left-0 xl:left-[10px] 2xl:w-[650px] 2xl:h-full xl:w-[560px]  xl:h-full'>
                                        <div className="">
                                            <div style={Box} className={`relative left-[-4px]  xl:left-[-3px] 2xl:left-[5px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                <div className='w-[350px]'>
                                                    <div className='p-[15px] w-full '>

                                                        <div className='rounded-[10px] user-card skeleton w-[197px] h-[258px]' >
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                    <div className='flex justify-between  h-[50px]'>
                                                        <div>
                                                            <div className='user-card skeleton w-[200px] 2xl:w-[200px] xl:w-[130px] h-[20px]'></div>
                                                            <div className={`mt-[10px] user-card skeleton w-[100px] 2xl:w-[100px] xl:w-[80px] h-[20px] text-[#7A7A7A]`}></div>
                                                        </div>
                                                        <div className='pr-[8px]'>
                                                            <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                                                                <li className='user-card skeleton w-[100px] 2xl:w-[100px] xl:w-[80px] h-[20px] '></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                        <div id="user-card">
                                                            <ul id="user-card-grid">
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                                <li className='user-card skeleton 2xl:w-[130px] xl:w-[100px] w-[100px] h-[20px]' ><div className='inline pr-[5px]'></div></li>
                                                            </ul>
                                                        </div>
                                                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                            <div className='user-card skeleton w-[220px] 2xl:w-[320px] xl:w-[280px] h-[20px]'></div>
                                                            <div className='user-card skeleton w-[250px] h-[20px] mt-[10px]'></div>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                        <div className='user-card skeleton w-[150px] h-[20px]  text-[16px] 2xl:text-[16px] xl:text-[14px]' ></div>
                                                        <button className={`user-card skeleton w-[134px] h-[40px] rounded-[10px]   text-[#FFF]`}></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex pb-[20px] space-x-[20px] justify-center pt-[10px]'>

                                                <div className='user-card skeleton w-[50px] h-[50px] rounded-[50px]'>

                                                </div>

                                                <div className='user-card skeleton w-[50px] h-[50px] rounded-[50px]'>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='z-5 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]'>

                                    </div>
                                </div>

                            </div>



                            {/* User Card  */}




                        </div>

                        <div className='block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
                            <h1 className='hide-text p-[5px] relative 2xl:left-[40px] xl:left-[55px]'>
                                <span >New Matches</span><span className='pl-[10px]'>06</span>
                            </h1>
                        </div>

                        <div className='block lg:block 2xl:hidden xl:hidden'>

                            {/* <UserGridProfile /> */}

                            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                                    <div className=''></div>
                                {
                                    [1,2,3,4,5,6].map((res)=>{
                                        return(
                                        <>
                                       
                                    <div style={ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                        <div className='flex justify-center pt-[10px]'>
                                            <ul className=' flex space-x-[10px]'>
                                                <li className='user-card skeleton text-[10px] w-[120px] h-[20px]'> </li>
                                            </ul>
                                           
                                        </div>
                                        <div className='flex justify-center '>
                                            <div className='user-card skeleton w-[102px] h-[102px] rounded-[50%]'></div>
                                        </div>
                                        <div className='text-center flex justify-center flex-col items-center space-y-[15px]'>
                                            <div className='w-[150px] h-[20px] user-card skeleton'></div>
                                            <div className='w-[130px] h-[20px] user-card skeleton'></div>
                                            <div className='w-[130px] h-[20px] user-card skeleton'></div>
                                        </div>

                                        <div className='flex space-x-[15px] justify-center'>
                                            <div><div className='user-card skeleton w-[40px] h-[40px] rounded-[50px]' ></div></div>
                                            <div><div className='user-card skeleton w-[40px] h-[40px] rounded-[50px]' ></div></div>
                                            <div><div className='user-card skeleton w-[40px] h-[40px] rounded-[50px]'  ></div></div>
                                        </div>
                                    </div>

                                    </>)
                                    })
                                }


                                </div >
                                
                            </div>

                            {/* <UserGridProfile /> */}

                        </div>
                        <div id='centerlized-content' className='hidden lg:block mt-[50px]'>

                            {/* <RecentlyView /> */}

                        </div>

                        <div id='centerlized-content' className='mt-[50px] 2xl:block xl:block hidden'>
                            {/* <StoryView/> */}
                        </div>



                    </div>

                    <div className='hidden  z-[-10]  absolute 2xl:top-[250px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
                        {/* Side Section 2 */}
                        {/* <ProfileComplete/>

          <MoreSuggestion/> */}

                    </div>
                </div>
                <div className='pt-[100px]'>
                    {/* <Footer /> */}
                </div>
            </div>

        </>
    )
}

export default Skeleton