
import UserProfile from './comp/Searchprofile'
import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Footer from '../../components/Footer'
import UserStory from '../commonCompo/UserStory'
import ModifySearch from './comp/ModifySearch'
import ProfileComplete from '../commonCompo/ProfileComplete'
import MoreSuggestion from '../commonCompo/MoreSuggestion'
import SearchUSerGrid from './comp/SearchUserGrid'
import Image from 'next/image'
import ProtectedRoutes from '../../routes/ProtectedRoutes'

{/* <img  */}
function index() {

  const Text7 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
  }
  const Text8 = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }
  const BoldText = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }
  const ProfileName = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
  }
  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  const ListText = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px" /* 171.429% */
  }

  const Text4 = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px"
  }

  const Box = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }

  const Text5 = {
    color: "#0F52BA",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "22px"
  }
  const Text6 = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px"
  }
  const RequestBox = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }

  const ProfileCard = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }
  const [FormOpen, setFormOpen] = useState(true);




  useEffect(() => {
    if (!FormOpen) {
      window.scrollTo(0, 0)
    }
  }, [FormOpen]);

  return (
    <>

<ProtectedRoutes/>
      <NavBar />


      <SideBar />


      {/* Main Section Start */}
      {FormOpen ? <>
        <div className='w-full h-full grid place-items-center'>

          <div className=''>
            <ModifySearch setFormOpen={setFormOpen} />

          </div>

        </div>
      </>
        :
        <>
       <div id='main-centerlized-content' className='flex justify-center flex-col'>
      <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

              <div className=' h-full'>
                {/* Side Section 1 */}

                <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                  <UserStory />
                </div>

                <div id='centerlized-content'>
                  <div className='relative md:top-0 top-[50px] 2xl:w-[715px] xl:w-[635px] lg:w-[650px] md:w-[635px] w-full m-[10px] space-x-[0px] md:space-x-0 flex justify-between'>

                    <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span className='md:text-[16px] text-[14px]' style={Text5}>124</span> <span className='text-[12px] md:text-[16px]' style={Text6}>Profiles Found For You!</span></h1>
                    <div className='flex space-x-[10px] relative right-[50px]'>
                      <button onClick={() => setFormOpen(true)} style={Text4} className='text-[12px] md:text-[14px] w-[150px] md:w-[168px] h-[40px] rounded-[10px] border-[1px] border-[#0F52BA]'>
                        Modify Search <Image width={24} height={14} src='/assests/Black/ModifySearch.svg' className='inline pl-[10px]' />
                      </button>
                    </div>
                  </div>

                  {/* User Card  */}

                  {/* {!Listtype ? */}
                  <div className='2xl:block xl:block lg:block hidden'>

                    <UserProfile />


                  </div>
                  <div className='block lg:hidden  xl:hidden 2xl:hidden'>
                    <SearchUSerGrid />

                  </div>



                </div>

              </div>

              <div className='hidden  z-[-10]  absolute 2xl:top-[250px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>

                {/* Side Section 2 */}
                <ProfileComplete />

                <MoreSuggestion />

              </div>


            </div>
            </div>
          </>}
          <div className='pt-[100px]'>
            <Footer />
          </div>

       

    </>
  )
}

export default index