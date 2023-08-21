import { useRouter } from 'next/router';
import React from 'react'


function HeroSection() {
    const router = useRouter();

    const backgroundImageUrl = 'url("/heroSec/Frame2.png")';
    const backgroundImageUrl2 = 'url("/heroSec/Frame2(1).png")';
    const backgroundimg = 'url("/download-Now.png")';

    const divStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };
    const divStyle2 = {
        backgroundImage: backgroundImageUrl2,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };
    const downloadImage = {
        backgroundImage: backgroundimg,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    };

    const DownloadText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const data = [{ id: 1, text: "100% Privacy" }, { id: 2, text: "0% Fake Profile" }, { id: 3, text: "Fully Secured" }, { id: 4, text: "Verified Profiles" }]

    const StarCard = ({ data }) => {
        return (
            <>
                <div className="p-2 bg-gray-200  w-[178px] h-[191px]" id="profile-section">

                    <div className='grid place-items-center p-1 mt-10 w-full'>
                        <img src='/shape.svg' />
                        <span className='mt-5'>{data.text}</span>
                    </div>

                </div>
            </>
        )
    }


    return (
        <>
            {/* <!-- Header Section Started --> */}

                
            <div className='hidden lg:block  w-auto pb-[200px]' style={divStyle} id=''>
             
             <div className='flex flex-col-reverse md:flex-col-reverse justify-evenly lg:flex-row justify-center'>
                   <div className=' lg:relative md:top-[50px] top-[3.8rem] right-[-5px] '  >
                       <div  className='hidden md:block md:w-auto md:h-auto lg:w-[550px] lg:h-[567px]'></div>
                   </div>
                   <div id='home-title' className='flex items-center m-5 items-center lg:w-[475px]' >
                       <div className='lg:relative top-[18%] right-[5%]'>
                           <div className='relative py-[80px]  lg:p-10'>
                               <h1 className='lg:leading-[50px] p-1 text-[20px] w-[300px] md:text-[44px] md:w-full lg:w-full lg:text-[44px]'>Discover Your Perfect Match with HappyMilan.</h1>
                               <p className='lg:w-[432px] lg:h-[76px] mt-[30px]'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>
                               <button className='mt-[40px] flex items-center justify-center' onClick={() => router.push("/login")} >Free Registration <img className='ml-[15px]' src='/vector.svg' /></button>
                           </div>
                       </div>
                   </div>
               </div>
               
           </div>

           <div className='lg:hidden block w-auto pb-[200px]' style={divStyle2} id=''>
             
             <div className='flex flex-col-reverse md:flex-col-reverse justify-evenly lg:flex-row justify-center'>
                   <div className=' lg:relative md:top-[50px] top-[3.8rem] right-[-5px] '  >
                       <div  className='hidden md:block md:w-auto md:h-auto lg:w-[550px] lg:h-[567px]'></div>
                   </div>
                   <div id='home-title' className='flex items-center m-5 items-center lg:w-[475px]' >
                       <div className='lg:relative top-[18%] right-[5%]'>
                           <div className='relative py-[80px]  lg:p-10'>
                               <h1 className='lg:leading-[50px] p-1 text-[20px] w-[300px] md:text-[44px] md:w-full lg:w-full lg:text-[44px]'>Discover Your Perfect Match with HappyMilan.</h1>
                               <p className='lg:w-[432px] lg:h-[76px] mt-[30px]'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys, and we are here to make that process seamless, enjoyable, and successful.</p>
                               <button className='mt-[40px] flex items-center justify-center' onClick={() => router.push("/login")} >Free Registration <img className='ml-[15px]' src='/vector.svg' /></button>
                           </div>
                       </div>
                   </div>
               </div>
               
           </div>
           
            {/* <!-- Header Section End --> */}



            {/* <!-- Explore Story Section started --> */}

            <div className=' w-full pb-[90px] lg:pb-0 md:pb-0 sm:pb-0 flex  md:items-center flex-col md:flex-col lg:flex-row  justify-center 2xl:my-[100px] md:my-[10%] p-[15px]'>
                <div className='flex flex-col md:flex-row p-10'>

                    <div className='lg:m-5 md:m-5 lg:my-10'>
                        <img src='/rectangle-369@2x.png' className='relative w-[260px] top-[100px] lg:top-[0px] h-[381px] object-cover' />
                        <div className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] h-[100px] opacity-[0.9]'>
                            <div className='flex justify-between'>
                                <div className='relative  left-[28px] top-[20px] border-black text-white font-poppins'>

                                    <p className="m-0">
                                        <span>
                                            <span className="font-semibold">{`Riya & Rohan`}</span>
                                            <b className="font-poppins">{` `}</b>
                                        </span>
                                    </p>
                                    <p className="m-0 text-xs">(Married on 19 Apr 2023)</p>
                                </div>
                                <div className='m-5'>
                                    <img
                                        className="w-8 h-8"
                                        alt=""
                                        src="/group-1061.svg"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='lg:m-5 md:m-5 lg:my-10'>
                        <img src='/rectangle-492@2x.png' className='relative w-[260px] top-[100px] lg:top-[0px] h-[381px] object-cover' />
                        <div className=' lg:my-[-100px] rounded-t-none rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[260px] h-[100px] opacity-[0.9]'>
                            <div className='flex justify-between'>
                                <div className='relative  left-[28px] top-[20px] border-black text-white font-poppins'>
                                    <p className="m-0">
                                        <span>
                                            <span className="font-semibold">{`Mahesh & Priya`}</span>
                                            <b className="font-poppins">{` `}</b>
                                        </span>
                                    </p>
                                    <p className="m-0 text-xs">(Married on 02 March 2023)</p>
                                </div>
                                <div className='m-5 relative top-[10px]'>
                                    <img
                                        className="w-8 h-8"
                                        alt=""
                                        src="/group-1061.svg"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    {/* <!-- Section: 2  Start--> */}
                    <section className='h-[470px] w-full md:text-left lg:text-left p-10'>
                        <div className='lg:relative top-[35px] lg:top-[48px] lg:right-[25px]'>
                            <h1 id='sec-2-title' className='lg:w-[423px] lg:h-[131px]'>
                                The safest, smartest and the most secure matchmaking service in India
                            </h1>
                            <div className='mt-[10%] md:mt-[5%] lg:mt-[10%]'>
                                <span id='sec-2-stories-num'>9K+ </span>
                                <h3 id='sec-2-explore-str'>Explore Successful Stories</h3>
                            </div>

                            <button id='sec-2-explore-story' className='mt-[10%] md:mt-[10%] lg:mt-[15.5%]'><span>Explore All Stories</span></button>
                        </div>
                    </section>
                    {/* <!-- Section: 2  End--> */}

                </div>
            </div>

            {/* <!-- Explore Story Section End --> */}


            {/* <!-- Creating New Profile Section Started --> */}

            <div className=' w-full flex flex-col md:flex-col md:items-center lg:flex-row justify-center my-[20%]'>
                <div id='grid-card-section' className='lg:mr-[200px] lg:mt-[60px]'>
                    <div className="flex justify-center items-center flex-wrap justify-center md:grid grid-cols-2 gap-x-[40px]  gap-y-[40px]  mt-2 mb-2">

                        {
                            data.map((res) => {
                                return (
                                    <StarCard key={res.id} data={res} />
                                )
                            })
                        }

                    </div>

                </div>
                <div className=' relative w-full md:w-[410px] h-full lg:left-[0px] lg:left-[30px] top-[19px]' id='sec-3-content'>
                    <h1 className='lg:text-left text-center lg:w-[403px] text-[20px] md:text-[32px] lg:text-[32px] mb-10'>Why you should register with us?</h1>
                    <p className='mb-10 lg:text-[20px]  text-[15px] text-center lg:text-left'>Welcome to Matrimoney, the premier online platform for finding your perfect life partner! We understand that finding a compatible partner is one of life's most important journeys</p>
                    <div className='w-full lg:block flex justify-center'>
                        <button><span>Create New Profile</span></button>
                    </div>

                </div>

            </div>

            {/* <!-- Creating New Profile Section End --> */}

            {/* <!-- Download App Section Started --> */}

            <div className="w-full">

                <div className='relative top-[50px] md:top-[0px]'>

                    <div id="section-4-title" className='w-full'>
                        <span className='text-center text-[20px] md:text-[25px] lg:text-[32px]'>Your Gateway to Limitless Potential<br />
                            Get the App Today!</span>
                    </div>

                    <div className='grid place-items-center'>
                        <div className='hidden md:block w-full lg:w-[1066px] lg:h-[446.318px] ' style={downloadImage}>

                            <div className='w-[254px] m-10 my-[11%]'>
                                <h1 className='text-center ml-[6%] text-[18px] pb-[7%]' style={DownloadText}>Download App</h1>
                                <div className=''>
                                    <div>
                                        <img className='m-2 w-[244px] h-[73px]' src='/image-1@2x.png' />
                                    </div>
                                    <div className="mt-[4%]">
                                        <img className='m-2 w-[244px] h-[74px]' src='/image-2@2x.png' />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='block md:hidden w-[244px] m-10 my-[30%]'>
                            <h1 className='text-center text-[18px] pb-[6%]' style={DownloadText}>Download App</h1>
                            <div className=''>
                                <div>
                                    <img className='m-2 w-[250px] md:w-[200px] lg:w-[244px] h-[73px]' src='/image-1@2x.png' />
                                </div>
                                <div>
                                    <img className='m-2 w-[250px] md:w-[200px]  lg:w-[244px] h-[73px]' src='/image-2@2x.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Download App Section End --> */}

            {/* <!-- Footer Section Started --> */}

            <div id='footer-section' className='w-full my-[225px]'>
                <footer className='w-auto h-[1px] my-[100px]'>

                    <div id='footer-links'>
                        <ul className='list-none flex flex-col md:flex-row justify-center'>
                            <li>Support</li>
                            <li>Blogs</li>
                            <li>Success  Stories</li>
                            <li>FAQ</li>
                            <li>Career</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </footer>
            </div>
            {/* <!-- Footer Section End --> */}




        </>
    )
}

export default HeroSection