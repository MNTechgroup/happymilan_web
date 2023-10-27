import React from 'react'

function RecentlyView() {
 
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
 
    return (
    <>
    
    <div className=' p-[15px] relative 2xl:left-[50px]'>
              <h1 style={Text3} className='relative 2xl:left-0 xl:left-[58px] text-[16px]'>Recently Viewed</h1>
            </div>
            <div className='pt-[10px] flex flex-wrap justify-center space-x-[25px] 2xl:space-x-[25px] xl:space-x-[15px]'>
              <div style={ProfileCard} className='flex flex-col space-y-[15px] xl:w-[170px]  2xl:w-[189px] h-[327px] bg-[#FFF] rounded-[10px]'>
                <div className='flex justify-between pt-[10px]'>
                  <ul className='pl-[10px] flex space-x-[10px]'>
                    <li>
                      <img src='/assests/Black/Couple2.svg' />
                    </li>
                    <li className='text-[10px]' style={Text4}>You & Her </li>
                  </ul>
                  <ul className='pr-[10px] flex space-x-[30px]'>
                    <li>
                      <img src='/assests/Black/Stars.svg' />
                    </li>
                    <li>
                      <img src='/assests/Black/3Dots.svg' />
                    </li>
                  </ul>
                </div>
                <div className='flex justify-center '>
                  <img className='w-[102px] h-[102px] rounded-[50%]' src='/assests/dashboard/profile/1.svg' />
                </div>
                <div className='text-center'>
                  <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                  <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                  <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                  <p style={ListText} className='text-[14px]'>Never Married</p>
                </div>

                <div className='flex space-x-[15px] justify-center'>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Dislike-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Like-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Share-profile.svg' /></div>
                </div>
              </div>
              <div style={ProfileCard} className='flex flex-col space-y-[15px] xl:w-[170px]  2xl:w-[189px] h-[327px] bg-[#FFF] rounded-[10px]'>
                <div className='flex justify-between pt-[10px]'>
                  <ul className='pl-[10px] flex space-x-[10px]'>
                    <li>
                      <img src='/assests/Black/Couple2.svg' />
                    </li>
                    <li className='text-[10px]' style={Text4}>You & Her </li>
                  </ul>
                  <ul className='pr-[10px] flex space-x-[30px]'>
                    <li>
                      <img src='/assests/Black/Stars.svg' />
                    </li>
                    <li>
                      <img src='/assests/Black/3Dots.svg' />
                    </li>
                  </ul>
                </div>
                <div className='flex justify-center '>
                  <img className='w-[102px] h-[102px] rounded-[50%]' src='/assests/dashboard/profile/2.svg' />
                </div>
                <div className='text-center'>
                  <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                  <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                  <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                  <p style={ListText} className='text-[14px]'>Never Married</p>
                </div>

                <div className='flex space-x-[15px] justify-center'>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Dislike-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Like-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Share-profile.svg' /></div>
                </div>
              </div>
              <div style={ProfileCard} className='flex flex-col space-y-[15px] xl:w-[170px]  2xl:w-[189px] h-[327px] bg-[#FFF] rounded-[10px]'>
                <div className='flex justify-between pt-[10px]'>
                  <ul className='pl-[10px] flex space-x-[10px]'>
                    <li>
                      <img src='/assests/Black/Couple2.svg' />
                    </li>
                    <li className='text-[10px]' style={Text4}>You & Her </li>
                  </ul>
                  <ul className='pr-[10px] flex space-x-[30px]'>
                    <li>
                      <img src='/assests/Black/Stars.svg' />
                    </li>
                    <li>
                      <img src='/assests/Black/3Dots.svg' />
                    </li>
                  </ul>
                </div>
                <div className='flex justify-center '>
                  <img className='w-[102px] h-[102px] rounded-[50%]' src='/assests/dashboard/profile/3.svg' />
                </div>
                <div className='text-center'>
                  <h1 style={ProfileName} className='text-[18px]'>Rohan Patel</h1>
                  <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                  <p style={ListText} className='text-[14px]'>Hindu, Patel</p>
                  <p style={ListText} className='text-[14px]'>Never Married</p>
                </div>

                <div className='flex space-x-[15px] justify-center'>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Dislike-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Like-profile.svg' /></div>
                  <div><img className='w-[40px] h-[40px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35px] xl:h-[35px]' src='/assests/dashboard/icon/Share-profile.svg' /></div>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default RecentlyView