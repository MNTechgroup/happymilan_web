import React from 'react'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext';

function ProfileComplete() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const Text3 = {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  }
  const Box = {
    borderRadius: "10px",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }

  return (
    <>
      <div className='bg-[#FFF] dark:bg-[#242526] 2xl:mt-[-30px] xl:mt-[-25px] w-[300px] 2xl:w-[300px] xl:w-[280px] h-[219px]' style={Box}>
        <div className='w-full h-full grid place-items-center'>
        <div className='flex flex-col items-center justify-center pt-[0px] space-y-[10px]'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="35" viewBox="0 0 42 35" fill="none">
              <path d="M20.7859 34.6667L6.82012 27.0228V15.6894L0 12.0001L20.7859 0.666748L41.6359 12.0001V26.9142H39.2649V13.3866L34.7516 15.6894V27.0228L20.7859 34.6667ZM20.7859 20.6448L36.6405 12.0001L20.7859 3.47191L4.99548 12.0001L20.7859 20.6448ZM20.7859 31.9781L32.3805 25.6041V17.1281L20.7859 23.3334L9.19122 17.0438V25.6041L20.7859 31.9781Z" fill="url(#paint0_linear_1217_1619)" />
              <defs>
                <linearGradient id="paint0_linear_1217_1619" x1="-1.49655e-06" y1="-7" x2="38.5" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F52BA" />
                  <stop offset="1" stopColor="#8225AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <p style={Text3} className='dark:text-[#FFF] 2xl:pb-[10px] xl:pb-[15px] text-center text-[14px] w-[207px]'>Complete Your Educational
              Details for Better Matches</p>
          </div>
          <div>
            <button id={darkMode ? 'Gradient-btn-2' : ''} style={Text3} className={`${darkMode ? "" : "border-[1px] border-[#8225AF]"} cursor-pointer hover:bg-[#F3F8FF] text-[14px] 2xl:w-[158px] 2xl:h-[44px] xl:w-[150px] xl:h-[44px]   rounded-[22px]  dark:bg-[#141516] dark:text-[#FFF] text-[black]`}>Add Details</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ProfileComplete