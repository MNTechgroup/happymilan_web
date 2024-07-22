import React, { useEffect, useState } from 'react'
import NavBar from '../../_components/layout/AuthNavbar'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import GlobalFooter from '../../_components/layout/GlobalFooter'

function page() {


  const GradientText2 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "50px", /* 129.63% */
    background: 'linear-gradient(91deg, #0F52BA -0.45%, #8225AF 97.59%)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent'
  }

  const Text2 = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }

  const FeaturesTitle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "44px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "70px", /* 159.091% */
  }

  const ListText = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  }
  const TitleText = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "44px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "70px",
  }

  const btnText = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }
  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }

  const data = [
    {
      id: 1,
      icon: "/assests/features/gridbox/right-tick-normal.svg",
      icon2: "/assests/features/gridbox/right-tick-hover.svg",
      title: "Send Request"
    },
    {
      id: 2,
      icon: "/assests/features/gridbox/chat-icon-normal.svg",
      icon2: "/assests/features/gridbox/chat-icon-hover.svg",
      title: "Chat"
    },
    {
      id: 3,
      icon: "/assests/features/gridbox/bell-icon-normal.svg",
      icon2: "/assests/features/gridbox/bell-icon-hover.svg",
      title: "Live Notifications"
    },
    {
      id: 4,
      icon: "/assests/features/gridbox/heart-icon-normal.svg",
      icon2: "/assests/features/gridbox/heart-icon-hover.svg",
      title: "See Who Likes"
    },
    {
      id: 5,
      icon: "/assests/features/gridbox/view-icon-normal.svg",
      icon2: "/assests/features/gridbox/view-icon-hover.svg",
      title: "See Who Visits"
    },
    {
      id: 6,
      icon: "/assests/features/gridbox/search-icon-normal.svg",
      icon2: "/assests/features/gridbox/search-icon-hover.svg",
      title: "Search Member"
    },
    {
      id: 7,
      icon: "/assests/features/gridbox/lock-icon-normal.svg",
      icon2: "/assests/features/gridbox/lock-icon-hover.svg",
      title: "Privacy Settings"
    },
    {
      id: 8,
      icon: "/assests/features/gridbox/more-icon-normal.svg",
      icon2: "/assests/features/gridbox/more-icon-hover.svg",
      title: "And Many More"
    },
  ]



  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getCookie("jwtToken"))
  }, [])


  const router = useRouter();

  const GotoLogin = () => {
    if (!token) {
      router.push("/login")
    } else {
      router.push("/longterm/dashboard")
    }
  }



  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToSection = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <NavBar background="#FDF8FF" />
      <div className='space-y-[60px] w-full h-full'>
        <div className='bg-[#FDF8FF] h-full w-full pt-[100px]'>
          <div className='flex items-center justify-between pl-[100px] pr-[60px]'>
            <div className='space-y-[38px]'>
              <ul className='2xl:w-[510px] xl:w-[510px] lg:w-[380px] w-[510px] h-full 2xl:space-y-[38px] xl:space-y-[35px] lg:space-y-[25px] space-y-[38px]'>
                <li> <h1 id='gradient-Text-style-2' style={GradientText2} className='2xl:h-[70px] xl:h-[70px] lg:h-[55px] h-[60px] 2xl:text-[64px] xl:text-[64px] lg:text-[45px] text-[50px]'>Long Term</h1>
                </li>
                <li><p style={Text2} className='2xl:text-[20px] xl:text-[20px] lg:text-[15px] text-[15px]'>By creating this profile, you can find compatible partners for marriage and lifelong companionship</p>
                </li>
                <li>
                  <button onClick={scrollToSection} className='hover:bg-[#EFF5FF] w-[174px] 2xl:h-[50px] xl:h-[50px] lg:h-[45px] h-[45px] border-[1px] border-[#000] rounded-[32px]'>See Features</button>
                </li>
              </ul>
            </div>
            <div className='hidden lg:block'>
              <Image width={0} height={0} alt='img-1' loading='lazy' src={"/assests/features/features-2.png"} className='2xl:w-[651px] 2xl:h-[562px] xl:w-[569px] xl:h-[480px] lg:w-[459px] lg:h-[380px] w-[661px] h-[562px]' />
            </div>
          </div>
        </div>

        <div id='features' className='h-full w-full space-y-[80px] border-b-[#F0D4FB] border-b-[1px] pb-[80px]'>
          <div>
            <h1 style={FeaturesTitle}>Features</h1>
          </div>
          <div className=" flex justify-center items-center space-x-[98px]">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[98px]">
              {data?.map((res, index) => (
                <div className='space-y-[15px] text-center grid place-items-center'>
                  <div
                    key={index}
                    className="group hover:border-[#8225AF] w-[135px] h-[135px] border-[1px] border-[#E5E5E5] rounded-full flex items-center justify-center text-white text-lg"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >

                    <Image width={0} height={0} alt='icons' loading='lazy'
                      src={hoveredIndex === index ? res.icon2 : res.icon}
                      className='w-auto h-auto group-hover:scale-105' />

                  </div>
                  <span style={ListText}>{res?.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <ul className='space-y-[42px] text-center'>
            <li style={TitleText}>Discover Your Perfect Match Now!</li>
            <li>
              <button style={btnText} id='grad-button' onClick={GotoLogin} className='w-[244px] h-[70px] rounded-[35px]'>{token ? "Explore Now" : "Create Profile"}</button>
            </li>
          </ul>
        </div>
        <div>
          <div className='w-full h-full pt-[50px]'>
            <div className='w-full h-[229px] bg-[#FDF8FF]'>
              <div className='flex justify-between items-center pr-[100px] pl-[100px]'>
                <div className=' space-y-[37px]'>
                  <p className='text-[24px] text-[#000]' style={Text3}>Your gateway to the limitless potentials, Download App</p>
                  <ul className='flex space-x-[40px]'>
                    <li>
                      <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/play-store.svg"} />
                    </li>
                    <li>
                      <Image width={0} height={0} alt='google-play' loading='lazy' className='w-[148.5px] h-[44px]' src={"/heroSec/assests/app-store.svg"} />
                    </li>
                  </ul>
                </div>
                <div className='relative top-[30px]'>
                  <Image width={0} height={0} alt='app' loading='lazy' src={"/heroSec/assests/app-frame.svg"} className='w-[160.043px] h-[auto]' />
                </div>
              </div>
            </div>
          </div>

          <GlobalFooter />
        </div>
      </div>
    </>
  )
}

export default page