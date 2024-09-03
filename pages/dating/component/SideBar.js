import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image';
import Avatar from 'react-avatar';
import ProfileImageDating from './ProfileImageDating';

function SideBar() {


  const RangeSlider2 = () => {


    const [value2, setValue2] = useState(50);

    const updateTrackerColor = (e) => {
      const newValue = parseInt(e.target.value, 10);
      setValue2(newValue);
    };




    return (
      <>

        <div className='w-[190px]'>
          <ul className='flex justify-between'>
            <li><h1 style={Text3} className='text-[14px]'>Age</h1></li>
            <li><h1 style={Text3} className='text-[14px] text-[#0F52BA]'>18-25</h1></li>
          </ul>
        </div>
        <div>

          <input
            type="range"
            min="0"
            max="100"
            value={value2}
            onChange={updateTrackerColor}
            style={{
              width: '180px',
              height: '2px',
              backgroundColor: '#efefef',
              borderRadius: '5px',
              outline: 'none',
              margin: '20px 0',
            }}
            className="range-slider2"
          />
          <style jsx global>{`
        .range-slider2 {
          width: 180px;
          height: 2px;
          background-color: white;
          border-radius: 5px;
          outline: none;
          margin: 20px 0;
        }

        .range-slider2::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #0F52BA 0%, #BA0FA9 ${value2}%, #efefef ${value2}% 100%);
          border-radius: 5px;
          height: 2px;
        }
        
        .range-slider2::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background-color: #0F52BA; /* Set thumb color */
          border-radius: 50%;
          color:#0F52BA;
          cursor: pointer;
          margin-top: -7px;
        }
      `}</style>

        </div>

      </>
    )
  }



  const RangeSlider = () => {


    const [value, setValue] = useState(50);

    const updateTrackerColor = (e) => {
      const newValue = parseInt(e.target.value, 10);
      setValue(newValue);
    };



    return (
      <>

        <div className='w-[190px]'>
          <ul className='flex justify-between'>
            <li><h1 style={Text3} className='text-[14px]'>Distance</h1></li>
            <li><h1 style={Text3} className='text-[14px] text-[#0F52BA]'>{value} km</h1></li>
          </ul>
        </div>
        <div>

          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={updateTrackerColor}
            style={{
              width: '180px',
              height: '2px',
              backgroundColor: '#efefef',
              borderRadius: '5px',
              outline: 'none',
              margin: '20px 0',
            }}
            className="range-slider"
          />
          <style jsx global>{`
        .range-slider {
          width: 180px;
          height: 2px;
          background-color: white;
          border-radius: 5px;
          outline: none;
          margin: 20px 0;
        }

        .range-slider::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #0F52BA 0%, #BA0FA9 ${value}%, #efefef ${value}% 100%);
          border-radius: 5px;
          height: 2px;
        }
        
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background-color: #0F52BA; /* Set thumb color */
          border-radius: 50%;
          color:#0F52BA;
          cursor: pointer;
          margin-top: -7px;
        }
      `}</style>
        </div>
      </>
    )
  }
  const Text2 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px"
  }
  const NotificationText = {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "22px"
  }
  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }
  const router = useRouter();


  const Click = () => {

  }

  return (
    <>

      <aside id="separator-sidebar" className=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#FFF] dark:bg-gray-800">

          <div className='p-[10px]'>
            <div>
              {/* <Avatar name='Riya Shah' size='47' round /> */}
              <ProfileImageDating Username={"Riya Shah"} Size={47} />
            </div>
            <div className='pt-[20px]'>
              <h1 onClick={Click} style={Text2}>Riya M Shah</h1>
            </div>
            <div className='pt-[10px]'>
              <span style={Text3} className='text-[14px] text-[#50545A]'>ID: HM1002021</span>  <span className='text-[#E3E3E3]'>|</span>  <Link href="/longterm/dashboard/profile"><span className='text-[14px] text-[#0F52BA]'>My Profile</span></Link>
            </div>
          </div>

          <ul className="space-y-[10px] pb-[20px] font-medium border-t  border-gray-200 dark:border-gray-700 p-[10px]">

            {/* <li className='pt-[8px] pb-[20px] flex items-center '>
              <div className='flex items-center justify-between w-[190px] '>
                <div>
                  <h1 style={Text3} className='text-[14px]'>Location</h1>
                </div>
                <div>
                  <Image width={7} height={12} alt='arrow' src="/assests/dating/arrow-btn.svg" />
                </div>
              </div>
            </li> */}

            <li className='pt-[8px] pb-[20px]'>
              <div className='flex'>
                <input type='text' placeholder='search by location' className='w-[190px] outline-none pl-[15px] pr-[30px]' />
                <Image width={15} height={14} src="/assests/Black/Search.svg" className="relative right-[30px]" />
              </div>
            </li>

            <li>

              <div>
                <RangeSlider />
              </div>
            </li>
            <li>
              <div>
                <RangeSlider2 />
              </div>
            </li>











          </ul>
          <ul className=" pb-[20px] pt-2 mt-0 p-[10px] space-y-[10px] font-medium border-t border-gray-200 dark:border-gray-700">
            <li className='pt-[8px] flex items-center  '>
              <Image width={15} height={14} src='/assests/Black/RightTick.svg' />
              <Link href="#"><h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/longterm/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}>Accepted</h1></Link>
              <div className={`${router.pathname === "/longterm/dashboard/accepted" ? "invisible" : "visible	"} flex justify-end  w-full pr-[10px]`}>
                <div id='grad-btn' className='grid place-items-center w-[24px] h-[24px] bg-[#0F52BA] rounded-[50px]'>
                  <h1 style={NotificationText} className='text-[white]'>03</h1>
                </div>
              </div>
            </li>
            <li className='pt-[8px] flex items-center   '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_576_128)">
                  <path d="M1.72727 14C1.3822 14 1.09139 13.8817 0.854841 13.6452C0.61828 13.4086 0.5 13.1178 0.5 12.7727V1.22727C0.5 0.882197 0.61828 0.591379 0.854841 0.354818C1.09139 0.118273 1.3822 0 1.72727 0H13.2727C13.6178 0 13.9086 0.118273 14.1452 0.354818C14.3817 0.591379 14.5 0.882197 14.5 1.22727V12.7727C14.5 13.1178 14.3817 13.4086 14.1452 13.6452C13.9086 13.8817 13.6178 14 13.2727 14H1.72727ZM1.72727 13.5H13.2727C13.4848 13.5 13.6591 13.4318 13.7955 13.2955C13.9318 13.1591 14 12.9848 14 12.7727V10.2045H10.4091C10.1364 10.7955 9.73331 11.25 9.19993 11.5682C8.66654 11.8864 8.09836 12.0455 7.49539 12.0455C6.8924 12.0455 6.32576 11.8864 5.79545 11.5682C5.26515 11.25 4.86364 10.7955 4.59091 10.2045H1V12.7727C1 12.9848 1.06818 13.1591 1.20455 13.2955C1.34091 13.4318 1.51515 13.5 1.72727 13.5ZM7.50395 11.5455C8.09223 11.5455 8.625 11.375 9.10227 11.0341C9.57955 10.6932 9.93182 10.25 10.1591 9.70455H14V1.22727C14 1.01515 13.9318 0.840909 13.7955 0.704545C13.6591 0.568182 13.4848 0.5 13.2727 0.5H1.72727C1.51515 0.5 1.34091 0.568182 1.20455 0.704545C1.06818 0.840909 1 1.01515 1 1.22727V9.70455H4.84091C5.06818 10.25 5.42177 10.6932 5.90168 11.0341C6.38159 11.375 6.91568 11.5455 7.50395 11.5455ZM7.5 7.84091L4.72727 5.06818L5.09091 4.72727L7.25 6.88636V2.31818H7.75V6.88636L9.90909 4.72727L10.2727 5.06818L7.5 7.84091ZM1.72727 13.5H1H14H1.72727Z"
                    fill={router.pathname === "/longterm/dashboard/newrequest" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_128">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="#"><h1 style={Text3} className={`pl-[10px] text-[14px] hover:text-[#0F52BA] ${router.pathname === "/longterm/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}>New Requests</h1></Link>
              <div className={`${router.pathname === "/longterm/dashboard/newrequest" ? "invisible" : "visible	"} flex justify-center relative 2xl:left-[50px] lg:left-[50px] xl:left-[40px]`}>
                <div className='grid place-items-center w-[24px] h-[24px] bg-[#17C270] rounded-[50px]'>
                  <h1 style={NotificationText} className='text-[white]'>06</h1>
                </div>
              </div>
            </li>


            <li className='pt-[8px] flex items-center '>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_576_176)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7399 3.5023L13.8866 4.22619C14.701 4.41452 15.2086 5.22747 15.0202 6.04193C14.9599 6.30248 14.8317 6.54237 14.6486 6.73729L12.5704 9.12543L12.8545 12.3518V12.3656C12.9183 13.197 12.2999 13.9244 11.469 13.9952C11.1789 14.0182 10.8881 13.9581 10.6308 13.822L7.77338 12.6098L4.7947 13.8723C4.02821 14.1962 3.1443 13.8374 2.82037 13.0709L2.81872 13.067C2.77162 12.9559 2.73789 12.8396 2.71828 12.7206C2.70244 12.6204 2.69663 12.5189 2.70096 12.4176C2.69919 12.3974 2.69919 12.3771 2.70096 12.357L2.98498 9.12716L0.868727 6.6888C0.32265 6.05838 0.391012 5.10468 1.02139 4.55861C1.19894 4.40478 1.40996 4.29455 1.63764 4.23658L1.67228 4.22619H1.68613L4.82068 3.50057L6.4832 0.729701C6.91528 0.0152499 7.84473 -0.213693 8.55923 0.218389C8.77436 0.34849 8.95364 0.530155 9.08088 0.747019L9.09128 0.762605L10.7399 3.5023ZM14.1378 6.25944C14.1875 6.20761 14.23 6.14938 14.2642 6.08626C14.4765 5.68998 14.3273 5.19668 13.9311 4.98441C13.8674 4.95029 13.7995 4.92483 13.7291 4.90864L10.4387 4.14665C10.3458 4.1257 10.2656 4.06746 10.217 3.98559V3.98386L8.49385 1.10909L8.48346 1.09177C8.25214 0.706317 7.75217 0.581368 7.36672 0.812692C7.2522 0.881401 7.15635 0.977256 7.08764 1.09177L5.35585 3.97174C5.30827 4.0598 5.22488 4.12293 5.12725 4.14492L1.84897 4.90171H1.82819C1.39039 5.00371 1.1182 5.44134 1.2202 5.87914C1.25012 6.00755 1.31077 6.12674 1.39697 6.22653L3.59288 8.76188C3.66709 8.83474 3.70458 8.93713 3.69506 9.04069L3.40758 12.3657C3.40897 12.3836 3.40897 12.4015 3.40758 12.4194C3.39966 12.4844 3.39966 12.5501 3.40758 12.6151C3.41628 12.6707 3.43079 12.7253 3.45088 12.7779C3.45902 12.7935 3.46599 12.8097 3.47166 12.8264C3.65116 13.2147 4.1006 13.3978 4.50034 13.2455C4.51757 13.2365 4.53554 13.2289 4.55403 13.223L7.64008 11.9155C7.72641 11.8789 7.82391 11.8789 7.91024 11.9155L10.908 13.1797C10.9271 13.1861 10.9456 13.1942 10.9634 13.2039C11.0989 13.2774 11.2532 13.3093 11.4067 13.2957H11.4171C11.8579 13.2562 12.1859 12.8712 12.1549 12.4298V12.4125L11.8639 9.04069C11.8554 8.94696 11.8854 8.85379 11.947 8.78266L14.1187 6.28022L14.1378 6.25944Z"
                    fill={router.pathname === "/longterm/dashboard/shortlists" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_176">
                    <rect width="15" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="#">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/longterm/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}>Shortlists</h1>
              </Link>

            </li>


            <li className='pt-[8px] flex items-center '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_576_132)">
                  <path d="M13.9296 14L9.98889 9.9037C9.4772 10.3717 8.88046 10.7263 8.19868 10.9677C7.51689 11.209 6.84326 11.3296 6.17778 11.3296C4.5909 11.3296 3.24789 10.7823 2.14873 9.68756C1.04958 8.59283 0.5 7.25332 0.5 5.66904C0.5 4.08474 1.04736 2.74383 2.14207 1.6463C3.2368 0.548765 4.57435 0 6.1547 0C7.73506 0 9.08029 0.547772 10.1904 1.64332C11.3005 2.73884 11.8556 4.07751 11.8556 5.65932C11.8556 6.36298 11.7259 7.05617 11.4667 7.73889C11.2074 8.42161 10.8531 9.00494 10.4037 9.48889L14.3444 13.5593L13.9296 14ZM6.17778 10.7593C7.61378 10.7593 8.82402 10.271 9.8085 9.29445C10.793 8.3179 11.2852 7.10802 11.2852 5.66481C11.2852 4.2216 10.793 3.01173 9.8085 2.03519C8.82402 1.05864 7.61378 0.57037 6.17778 0.57037C4.74178 0.57037 3.53154 1.05864 2.54706 2.03519C1.5626 3.01173 1.07037 4.2216 1.07037 5.66481C1.07037 7.10802 1.5626 8.3179 2.54706 9.29445C3.53154 10.271 4.74178 10.7593 6.17778 10.7593Z"
                    fill={router.pathname === "/longterm/dashboard/sent" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_132">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="#">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/longterm/dashboard/sent" ? "text-[#0F52BA]" : ""}`}>Sent</h1>
              </Link>
            </li>

          </ul>

        </div>
      </aside>


    </>
  )
}

export default SideBar