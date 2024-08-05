'use client';

import React from 'react'
import dynamic from 'next/dynamic';
// import NavBar from '../../../_components/layout/Navbar';
const NavBar = dynamic(() => import('../../../_components/layout/Navbar'));
const SideBar = dynamic(() => import('../../../_components/layout/SideBar'));
const Profile = dynamic(() => import('./comp/Profile'));
const UploadSection = dynamic(() => import('./comp/UploadSection'));
const MoreSuggestion = dynamic(() => import('../../../_components/Container/MoreSuggestion'));
const UserStory = dynamic(() => import('../../../_components/Container/UserStory'))

function index() {

  const handleSearch = (searchTerm) => { }


  return (
    <>

      <NavBar handleSearch={handleSearch} />


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
              <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                <Profile />

              </div>
            </div>

            {/* User Card  */}



          </div>
        </div>

        {/* <div className='z-[-10] absolute 2xl:top-[180px] xl:top-[180px] right-0 flex flex-col space-y-[50px] justify-center items-center w-full 2xl:w-[450px] xl:w-[350px]'> */}
        <div className='hidden  absolute 2xl:top-[175px] xl:top-[175px] right-10  xl:flex 2xl:flex flex-col space-y-[50px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
          {/* Side Section 2 */}
          <UploadSection />

          <MoreSuggestion />
        </div>



      </div>

    </>
  )
}

export default index