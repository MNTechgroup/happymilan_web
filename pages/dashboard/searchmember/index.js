
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import ProtectedRoutes from '../../routes/ProtectedRoutes'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
const UserStory = dynamic(() => import('../commonCompo/UserStory'));
const ModifySearch = dynamic(() => import('./comp/ModifySearch'));
const ProfileComplete = dynamic(() => import('../commonCompo/ProfileComplete'));
const MoreSuggestion = dynamic(() => import('../commonCompo/MoreSuggestion'));
const SearchUSerGrid = dynamic(() => import('./comp/SearchUserGrid'));
const UserProfile = dynamic(() => import('./comp/Searchprofile'))

function index() {

  const { darkMode, toggleDarkMode } = useDarkMode();


  const Text4 = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px"
  }
  const modifyText = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
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

  const { loading, data } = useSelector((state) => state.usersact.searchusersprofiledata)

  const handleSearch = (searchTerm) => { }

  useEffect(() => {
    if (!FormOpen) {
      window.scrollTo(0, 0)
    }
  }, [FormOpen]);

  return (
    <>

      <ProtectedRoutes />
      <NavBar handleSearch={handleSearch} />


      <SideBar />


      {/* Main Section Start */}
      {FormOpen ? <>
        <div className='dark:bg-[#18191a] w-full h-full grid place-items-center'>

          <div className=''>
            <ModifySearch setFormOpen={setFormOpen} />

          </div>

        </div>
      </>
        :
        <>
          <div id='main-centerlized-content' className='dark:bg-[#18191a] flex justify-center flex-col'>
            <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

              <div className=' h-full'>
                {/* Side Section 1 */}

                <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                  <UserStory />
                </div>

                <div id='centerlized-content'>
                  <div className='relative md:top-0 top-[50px] 2xl:w-[715px] xl:w-[635px] lg:w-[650px] md:w-[635px] w-full m-[10px] space-x-[0px] md:space-x-0 flex justify-between'>

                    <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span className='md:text-[16px] text-[14px]' style={Text5}>{loading ? 0 : `${data?.length} `}</span> <span className='text-[12px] md:text-[16px] text-[#000] dark:text-[#FFF]' style={Text6}>Profiles Found For You!</span></h1>
                    <div className='flex space-x-[10px] relative right-[50px]'>
                      <button onClick={() => setFormOpen(true)} style={modifyText} className='text-[12px] md:text-[14px] w-[100px] md:w-[105px] h-[30px] rounded-[17px] hover:bg-[#F2F7FF]'>
                        <span className='relative left-[-5px] text-[#000] dark:text-[#FFF]'>Modify</span>
                        {darkMode ?
                          <Image alt='search' loading='lazy' width={24} height={14} src='/assests/Black/Modify-dark.svg' className='w-[23px] h-[14px] inline relative left-[8px]' />
                          :
                          <Image alt='search' loading='lazy' width={24} height={14} src='/assests/Black/ModifySearch.svg' className='w-[23px] h-[14px] inline relative left-[8px]' />
                        }
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

              <div className=" hidden  absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]">

                <ProfileComplete />

                <MoreSuggestion />
              </div>


            </div>
          </div>
        </>}
      <div className='dark:bg-[#18191a] pt-[100px]'>
        <Footer />
      </div>



    </>
  )
}

export default index