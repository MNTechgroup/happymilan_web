'use client';

import React, { useEffect, useState } from 'react';
import ProtectedRoutes from '../routes/ProtectedRoutes';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import SideBar from './SideBar';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { getSentrequestData } from '../../store/actions/UsersAction';
import { getAuthData } from '../../utils/API/Localstorage';
import Image from 'next/image';
import { useDarkMode } from '../../ContextProvider/DarkModeContext';
// Lazy load your components
const UserProfile = dynamic(() => import('./commonCompo/UserProfile'));
const UserGridProfile = dynamic(() => import('./commonCompo/UserGridProfile'));
const ProfileComplete = dynamic(() => import('./commonCompo/ProfileComplete'));
const MoreSuggestion = dynamic(() => import('./commonCompo/MoreSuggestion'));
const UserStory = dynamic(() => import('./commonCompo/UserStory'));
const RecentlyView = dynamic(() => import('./commonCompo/RecentlyView'));
const StoryView = dynamic(() => import('./commonCompo/StoryView'));
const CelebratingModal = dynamic(() => import('../components/Models/CelebratingModal'));
const SearchUsers = dynamic(() => import('./commonCompo/SearchParams/SearcheUsers'));
const Footer = dynamic(() => import('../components/Footer'));


function index() {

  const dispatch = useDispatch();
  const authRoute = getAuthData()

  const {darkMode , toggleDarkMode } = useDarkMode();

  useEffect(() => {
    dispatch(getSentrequestData())
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listType, setListType] = useState(false);


  useEffect(() => {
    const firstVisit = localStorage.getItem('modal');
    if (firstVisit === 'open') {
      setIsModalOpen(true);
      localStorage.setItem('modal', 'close');
    }
  }, []);

  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/register")

  };

  const Text5 = {
    color: '#0F52BA',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '22px',
  };

  const Text6 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
  };


  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const axios = require("axios")
    const token = getCookie("authtoken")

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/userUniqueId/${searchTerm}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {

        // Update search results based on API response

        setSearchResults(response.data.data);

      })
      .catch((error) => {
        console.log(error);

      });

  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [])


  const { users, loading } = useSelector((state) => state.alluser);


  return (
    <>
      <ProtectedRoutes />
      <NavBar
        handleSearch={handleSearch}
      />
      <SideBar />

      <div id='main-centerlized-content' className='dark:bg-[#18191a] flex justify-center flex-col'>
        <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

          <div className='h-full '>
            {/* Side Section 1 */}

            <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>

              <UserStory />
            </div>

            <div id='centerlized-content' className='dark:bg-[#18191a] 2xl:block xl:block lg:block hidden'>
              <div className=' relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

                <h1 className='text-[#000] dark:text-[#FFF] p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6} >New Requests</span></h1>
                <div className={`justify-center  w-[62px] h-[30px] rounded-[17.5px] border-[1px] ${darkMode ? "border-[#73757b]" : "border-[#F3F3F3]"} flex  relative right-[50px]`}>

                  <div onClick={() => setListType(true)} style={{ cursor:"pointer" ,borderRadius: "17.5px 0PX 0px 17.5px" }} className={`w-[45px] ${darkMode ? "bg-[#141516] border-r-[#73757b]"  : listType ?  "border-r-[#F3F3F3] bg-[#F3F8FF]"  : " hover:bg-[#F3F8FF] border-r-[#F3F3F3]" } grid place-items-center h-[28px] border-r-[1px] `}>
                    <Image width={13} height={13} alt='listview' src={listType ? "/assests/dashboard/menus/after-grid.svg" : "/assests/dashboard/menus/before-grid.svg"} />

                  </div>



                  {/* Grid View Mode  */}

                  <div onClick={() => setListType(false)} style={{ cursor:"pointer" ,borderRadius: "0px 17.5px 17.5px 0px" }} className={`w-[45px] ${darkMode ? "bg-[#141516] border-l-[#73757b]"  : listType ?  "border-l-[#F3F3F3]  "  : " bg-[#F3F8FF] hover:bg-[#F3F8FF] border-l-[#F3F3F3]" }   grid place-items-center h-[28px] border-l-[1px]`}>
                    <Image width={13} height={13} alt='listview' src={listType ? "/assests/dashboard/menus/before-list.svg" : "/assests/dashboard/menus/after-list.svg"} />

                  </div>

                </div>
              </div>


              {searchTerm === '' ? (
                <>
                  {!listType ? <UserProfile users={users} /> : <UserGridProfile />}
                </>
              ) : (
                <div>

                  {searchResults.length === 0 ? (
                    <div>No search results</div>
                  ) : (
                    <div>
                      <SearchUsers searchResults={searchResults} />
                    </div>
                  )}
                </div>
              )}
            </div>


            {/* <div className="block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]">
              <h1 className="p-[5px] relative 2xl:left-[40px] xl:left-[55px]">
                <span className='text-[#000] dark:text-[#FFF]' style={Text6}>New Matches</span>
                <span style={Text5} className="pl-[10px]">06</span>
              </h1>
            </div> */}

            {/* <div  className="block lg:block 2xl:hidden xl:hidden ">
              <UserGridProfile />
            </div> */}

            <div id="centerlized-content" className=" hidden lg:block mt-[50px] ">
              <RecentlyView />
            </div>

            <div id="centerlized-content" className=" mt-[50px] 2xl:block xl:block hidden ">
              <StoryView />
            </div>

          </div>

          <div className=" hidden  absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]">

            <ProfileComplete />

            <MoreSuggestion />
          </div>
        </div>
        <div className="pt-[100px]">
          <Footer />
        </div>
      </div>
      <CelebratingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default index;
