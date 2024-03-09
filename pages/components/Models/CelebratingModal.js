import Image from 'next/image'
import React from 'react'

function CelebratingModal({ isOpen, onClose, title }) {
    const Heading = {
        fontFamily: "Poppins",
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "36px",
        letterSpacing: "0px",
        textAlign: "center",
    }
    const Text = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "21px",
        letterSpacing: "0px",
        textAlign: "center",
    }


    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-[505px] md:h-[80%] lg:h-[281px]">
                    <div className='flex justify-center items-center pt-[20px]'>
                        
                   
                    <div className='flex flex-col items-center justify-center space-y-[25px]'>
                        <div className=''>
                            <h1 id='grad-text' style={Heading} className='text-center text-[24px]'>Congratulation</h1>
                            <div className='absolute top-[20px] left-[35%]'>
                                <img alt='celebration-gif' className='' src='/assests/animation/celebration-animation.gif' />
                            </div>
                        </div>

                        <div className='text-center'>
                            <h1 style={Text} className='w-[398px] text-[14px]'>New Beginnings, New Possibilities! Congratulations on Registering with HappyMilan</h1>
                        </div>
                        <div className='text-center'>
                            <button onClick={onClose} id='grad-btn' className='w-[172px] h-[50px] text-[white] rounded-[10px]'>Start Exploring</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CelebratingModal