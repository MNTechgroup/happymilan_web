import React from 'react'
import NavBar from './component/NavBar'
import SideBar from './component/SideBar'
import UserStory from './component/UserStory'
import UserCard from './component/UserCard'
import UnlockProfile from './component/UnlockProfile'
function index() {

    

    return (
        <>
            <NavBar />

            <SideBar />

            <div id='main-centerlized-content' className='flex justify-center flex-col'>
                <div id='first-child' className=' pl-[0px] lg:pl-[245px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>


                    <div className='h-full'>
                        {/* Side Section 1 */}

                        <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                            <UserStory />
                        </div>

                        <div id='centerlized-content' className=' 2xl:block xl:block   hidden'>
                            <div className='relative w-full 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                                <UserCard />
                            </div>
                        </div>

                    </div>

                    <div className='hidden  z-[-10]  absolute 2xl:top-[180px] xl:top-[245px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
                        {/* Side Section 2 */}
                        <UnlockProfile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index