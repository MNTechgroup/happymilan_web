
import React, { useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Footer from '../../components/Footer'
import UserStory from '../commonCompo/UserStory'
import CanceledProfile from './comp/CanceledProfile'
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
  const [Listtype, setListtype] = useState(false);

  return (
    <>

      <NavBar />


      <SideBar />

      {/* Main Section Start */}
      
      <div className=' 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>
        <div className='h-full'>
          {/* Side Section 1 */}

        <div>
          <UserStory/>
        </div>

          <div>
            <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

              <h1 className='p-[5px] relative 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>Cancelled</span></h1>
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

            {/* {!Listtype ? */}
              <CanceledProfile /> 
              
               {/* : <GridList />} */}


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
      <div className='pt-[100px]'>
        <Footer />
      </div>

    </>
  )
}

export default index