
import React, { useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Footer from '../../components/Footer'
import UserStory from '../commonCompo/UserStory'
import ProfileComplete from '../commonCompo/ProfileComplete'
import MoreSuggestion from '../commonCompo/MoreSuggestion'
import RecentViewUser from './comp/RecentViewUser'
import GridUser from './comp/GridUser'
import ProtectedRoutes from '../../routes/ProtectedRoutes'
function index() {

  const Text6 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px"
  }

  const [Listtype, setListtype] = useState(false);

  return (
    <>
<ProtectedRoutes/>

      <NavBar />


      <SideBar />

      {/* Main Section Start */}

      <div id='main-centerlized-content' className='flex justify-center flex-col'>
        <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

          <div className='h-full'>
            {/* Side Section 1 */}

            <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
              <UserStory />
            </div>

            <div id='centerlized-content' className='2xl:block xl:block lg:block hidden'>
              <div className='relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

                <h1 className='p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>Recently Reviewed</span></h1>
                <div className='flex space-x-[10px] relative right-[50px]'>
                  <button className='' onClick={() => setListtype(true)}>

                    {/* Grid View Mode  */}

                    {/* <img src='/assests/Black/3-grid.svg'/> */}
                    {
                      !Listtype ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#BBBBBB" />
                      </svg> : <svg className='' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#0F52BA" />
                      </svg>
                    }
                  </button>


                  {/* Grid View Mode  */}
                  <button className='' onClick={() => setListtype(false)}>

                    {/* List View Mode  */}
                    {!Listtype ?
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
                      :
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_576_120)">
                          <path d="M16.5 0H0.5V4H16.5V0Z" fill="#BBBBBB" />
                          <path d="M16.5 6H0.5V10H16.5V6Z" fill="#BBBBBB" />
                          <path d="M16.5 12H0.5V16H16.5V12Z" fill="#BBBBBB" />
                        </g>
                        <defs>
                          <clipPath id="clip0_576_120">
                            <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                          </clipPath>
                        </defs>
                      </svg>}


                    {/* List View Mode  */}


                  </button>
                </div>
              </div>

              {/* User Card  */}

              {!Listtype ?
                <RecentViewUser /> : <GridUser />}


            </div>
            <div className='block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
            <h1 className='p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>Recently Reviewed</span></h1>
            </div>
            <div className='block lg:hidden 2xl:hidden xl:hidden'>

              <GridUser />

            </div>

          </div>

          <div className='hidden  z-[-10]  absolute 2xl:top-[250px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>

            {/* Side Section 2 */}
            <ProfileComplete />

            <MoreSuggestion />

          </div>

        </div>
        <div className='pt-[100px]'>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default index