
import React, { useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import ProtectedRoutes from '../../routes/ProtectedRoutes'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const UserStory = dynamic(() => import('../commonCompo/UserStory'));
const SentRequest = dynamic(() => import('./comp/SentRequest'));
const GridList = dynamic(() => import('./comp/GridList'));
const ProfileComplete = dynamic(() => import('../commonCompo/ProfileComplete'));
const MoreSuggestion = dynamic(() => import('../commonCompo/MoreSuggestion'));
const Footer = dynamic(() => import('../../components/Footer'));

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

  const handleSearch = (searchTerm) => { }

  return (
    <>

      <ProtectedRoutes />
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
              <div className='relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

                <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span style={Text6}>Sent Requests</span></h1>
                <div className='justify-center  w-[62px] h-[30px] rounded-[17.5px] border-[1px] border-[#F3F3F3] flex  relative right-[50px]'>

                  <div onClick={() => setListtype(true)} style={{ cursor: "pointer", borderRadius: "17.5px 0PX 0px 17.5px" }} className={`w-[45px] ${Listtype ? "bg-[#F3F8FF]" : ""} hover:bg-[#F3F8FF] grid place-items-center h-[28px] border-r-[1px] border-r-[#F3F3F3]`}>
                    <Image width={13} height={13} alt='listview' src={Listtype ? "/assests/dashboard/menus/after-grid.svg" : "/assests/dashboard/menus/before-grid.svg"} />

                  </div>



                  {/* Grid View Mode  */}

                  <div onClick={() => setListtype(false)} style={{ cursor: "pointer", borderRadius: "0px 17.5px 17.5px 0px" }} className={`w-[45px] ${Listtype ? "" : " bg-[#F3F8FF]"}  hover:bg-[#F3F8FF] grid place-items-center h-[28px] border-l-[1px] border-l-[#F3F3F3]`}>
                    <Image width={13} height={13} alt='listview' src={Listtype ? "/assests/dashboard/menus/before-list.svg" : "/assests/dashboard/menus/after-list.svg"} />

                  </div>

                </div>
              </div>

              {/* User Card  */}

              {!Listtype ?
                <SentRequest /> : <GridList />}


            </div>
            <div className='block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
              <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span style={Text6}>Sent Requests</span></h1>
            </div>
            <div className='block lg:hidden 2xl:hidden xl:hidden'>

              <GridList />

            </div>
          </div>

          <div className=" hidden  absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]">

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