import React from 'react'

function StoryView() {

    const boxShadow = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    const Text1 = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    return (
        <>

            <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                <h1 className='p-[5px] relative 2xl:left-[40px] xl:left-[55px]'><span style={Text2} className='text-[16px]'>Success Stories</span></h1>
                <div className='flex space-x-[10px] relative right-[50px]'>
                    <div className='flex items-center space-x-[16px]' >
                        <h1 style={Text2} className='cursor-pointer text-[16px] text-[#BABABA]'>View All </h1>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z" fill="#E1E1E1" />
                        </svg>
                    </div>




                </div>
            </div>
            <div className="relative 2xl:left-[40px] xl:left-[53px] left-[40px]">

                <div style={boxShadow} className={`flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[550px] xl:h-[284px] bg-[#FFF]`}>

                    <div className='pl-[10px] flex items-center space-x-[30px]'>
                        <div className='w-[197px] h-[258px]'>
                            <img className="w-[197px] h-[258px]" src='/assests/dashboard/menu/story-section.svg' />
                        </div>
                        <div className='space-y-[20px] '>
                            <div>
                                <h1 style={Text1}>Riya & Rohan</h1>
                                <p style={Text2} className='text-[12px]'>(Married on 19 Apr 2023)</p>
                            </div>
                            <div>
                                <p style={Text2} className='w-full 2xl:w-[358px] xl:w-[300px] text-[12px] 2xl:text-[12px] xl:text-[11px]'>When the Tudor king fell for a young lady-in-waiting, Anne Boleyn, who possessed eyes "black and beautiful," he was long married to a Spanish princess. But Anne refused to be a royal mistress, and the king rocked the Western world to win his divorce and make Anne queen. Ambassadors could not believe how enslaved the king was by his love for Anne. "This accursed Anne has her foot in the stirrup,"
                                </p>
                            </div>
                            <div>
                                <button style={Text2} className='text-[14px] rounded-[10px] w-[116px] h-[34px] text-[#FFF] bg-[#0F52BA]'>Read More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default StoryView