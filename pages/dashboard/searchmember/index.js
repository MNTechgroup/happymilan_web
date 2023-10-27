
import UserProfile from './comp/Searchprofile'
import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Footer from '../../components/Footer'
import UserStory from '../commonCompo/UserStory'
import ModifySearch from './comp/ModifySearch'
import ProfileComplete from '../commonCompo/ProfileComplete'


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
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "22px"
  }
  const Text6 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
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
          <div className='2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

            <div className='h-full'>
              {/* Side Section 1 */}

              <div>
                <UserStory />
              </div>

              <div>
                <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                  <h1 className='p-[5px] relative 2xl:left-[40px] xl:left-[55px]'><span style={Text5}>124</span> <span style={Text6}>Profiles Found For You!</span></h1>
                  <div className='flex space-x-[10px] relative right-[50px]'>
                    <button onClick={() => setFormOpen(true)} style={Text4} className='text-[14px] w-[168px] h-[40px] rounded-[10px] border-[1px] border-[#0F52BA]'>
                      Modify Search <img src='/assests/Black/ModifySearch.svg' className='inline pl-[10px]' />
                    </button>
                  </div>
                </div>

                {/* User Card  */}

                {/* {!Listtype ? */}

                <UserProfile />

                {/* : <GridUserProfile />} */}


              </div>

            </div>

            <div className='z-[-10] absolute 2xl:top-[250px] xl:top-[245px] right-0 flex flex-col space-y-[20px] justify-center items-center w-full 2xl:w-[450px] xl:w-[350px]'>
              {/* Side Section 2 */}
             <ProfileComplete/>

              <div className='p-[20px] 2xl:w-[300px] xl:w-[300px] h-[367px] bg-[#FFF]' style={RequestBox}>

                <h1 style={Text8} className=' text-[#000]'>More Suggestion</h1>

                <div className='pt-[25px]'>
                  <div className=' h-[57px] flex space-x-[10px]'>
                    <div>
                      <img src='/assests/pic/Request-1.svg' />
                    </div>
                    <div className='pl-[15px]'>
                      <h1 style={Text7}>Jeet Shashtri</h1>
                      <h1 className='text-[#000]' style={Text8}>M, 29, IT Expert</h1>
                      <h1 className="text-[#AEAEAE]" style={Text8}>Junagdh, India</h1>
                    </div>
                    <div className='pl-[50px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#0F52BA" />
                        <path d="M9.16853 14.8896L6.05891 11.78L5 12.8315L9.16853 17L18.1171 8.05145L17.0656 7L9.16853 14.8896Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  {/* Request 2 */}
                  <div className='pt-[25px]'>
                    <div className=' h-[57px] flex space-x-[10px]'>
                      <div>
                        <img src='/assests/pic/Request-1.svg' />
                      </div>
                      <div className='pl-[15px]'>
                        <h1 style={Text7}>Jeet Shashtri</h1>
                        <h1 className='text-[#000]' style={Text8}>M, 29, IT Expert</h1>
                        <h1 className="text-[#AEAEAE]" style={Text8}>Junagdh, India</h1>
                      </div>
                      <div className='pl-[50px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#0F52BA" />
                          <path d="M9.16853 14.8896L6.05891 11.78L5 12.8315L9.16853 17L18.1171 8.05145L17.0656 7L9.16853 14.8896Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Request 3 */}
                  <div className='pt-[25px]'>
                    <div className=' h-[57px] flex space-x-[10px]'>
                      <div>
                        <img src='/assests/pic/Request-1.svg' />
                      </div>
                      <div className='pl-[15px]'>
                        <h1 style={Text7}>Jeet Shashtri</h1>
                        <h1 className='text-[#000]' style={Text8}>M, 29, IT Expert</h1>
                        <h1 className="text-[#AEAEAE]" style={Text8}>Junagdh, India</h1>
                      </div>
                      <div className='pl-[50px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#0F52BA" />
                          <path d="M9.16853 14.8896L6.05891 11.78L5 12.8315L9.16853 17L18.1171 8.05145L17.0656 7L9.16853 14.8896Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button className=' mt-[20px] w-[252px] h-[40px] rounded-[10px] bg-[#F5F5F5] text-[#000]'>View All</button>
                </div>
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