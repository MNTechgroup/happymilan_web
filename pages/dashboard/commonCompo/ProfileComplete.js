import React from 'react'

function ProfileComplete() {
   
      const Text3 = {
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
    
     

    return (
        <>
            <div className='2xl:mt-[-30px] xl:mt-[-25px] w-[300px] h-[219px]' style={Box}>
                <div className='text-center flex flex-col justify-center items-center mt-[-10px] 2xl:space-y-[3px] xl:space-y-[5px] items-center p-[30px]'>
                    <h1 style={Text3} className=' text-[14px]'>Complete your Profile</h1>
                    <span style={Text3} className=' text-[#45B749] text-[30px]'>90%</span>
                    <p style={Text3} className='2xl:pb-[10px] xl:pb-[15px] text-center text-[14px] w-[207px]'>Add a photo now and get more responses (25%)</p>
                    <button style={Text3} className='text-[14px] 2xl:w-[158px] 2xl:h-[44px] xl:w-[150px] xl:h-[44px]   rounded-[10px] bg-[#0F52BA] text-[white]'>Add Photos</button>
                </div>
            </div>
        </>
    )
}

export default ProfileComplete