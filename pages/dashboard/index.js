import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from '../components/Footer';
import UserProfile from './commonCompo/UserProfile';
import UserGridProfile from './commonCompo/UserGridProfile';
import UserStory from './commonCompo/UserStory';
import RecentlyView from './commonCompo/RecentlyView';
import ProfileComplete from './commonCompo/ProfileComplete';
import StoryView from './commonCompo/StoryView';
import MoreSuggestion from './commonCompo/MoreSuggestion';
import ProtectedRoutes from '../routes/ProtectedRoutes';
import CelebratingModal from '../components/Models/CelebratingModal';

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listType, setListType] = useState(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem('modal');
    if (firstVisit === 'open') {
      setIsModalOpen(true);
      localStorage.setItem('modal', 'close');
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
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
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
  };



  return (
    <>
      <ProtectedRoutes />
      <NavBar />
      <SideBar />

      <div id="main-centerlized-content" className="flex justify-center flex-col">
        {/* Main Section Start */}
        <div id="first-child" className="pl-[0px] lg:pl-[245px] 2xl:pl-[280px] xl:pl-[240px] flex mt-[100px]">
          <div className="h-full">
            <div id="story-centerlized-content" className="pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0">
              <UserStory />
            </div>

            <div className="2xl:block xl:block hidden">
              <div className="relative w-full 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between">
                <h1 onClick={() => setIsModalOpen(true)} className="p-[5px] relative 2xl:left-[40px] xl:left-[55px]">
                  <span style={Text6}>New Matches</span>
                  <span style={Text5} className="pl-[10px]">06</span>
                </h1>
                <div className="flex space-x-[10px] relative right-[50px]">
                  <button className="" onClick={() => setListType(true)}>
                    {!listType ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Grid View Mode */}
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Grid View Mode */}
                      </svg>
                    )}
                  </button>
                  <button className="" onClick={() => setListType(false)}>
                    {!listType ? (
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* List View Mode */}
                      </svg>
                    ) : (
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* List View Mode */}
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {!listType ? <UserProfile /> : <UserGridProfile />}
            </div>

            <div className="block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]">
              <h1 className="p-[5px] relative 2xl:left-[40px] xl:left-[55px]">
                <span style={Text6}>New Matches</span>
                <span style={Text5} className="pl-[10px]">06</span>
              </h1>
            </div>

            <div className="block lg:block 2xl:hidden xl:hidden">
              <UserGridProfile />
            </div>

            <div id="centerlized-content" className="hidden lg:block mt-[50px]">
              <RecentlyView />
            </div>

            <div id="centerlized-content" className="mt-[50px] 2xl:block xl:block hidden">
              <StoryView />
            </div>
          </div>

          <div className="hidden z-[-10] absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]">
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

export default Index;
