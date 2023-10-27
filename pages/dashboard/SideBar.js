import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function SideBar() {
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
  return (
    <>

      <aside id="separator-sidebar" class=" hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#FFF] dark:bg-gray-800">

          <div className='p-[10px]'>
            <div>
              <img className='w-[47px] h-[47px]' src='/assests/dashboard/user/userProfile.svg' />
            </div>
            <div className='pt-[20px]'>
              <h1 style={Text2}>Riya M Shah</h1>
            </div>
            <div className='pt-[10px]'>
              <span style={Text3} className='text-[14px] text-[#50545A]'>ID: HM1002021</span>  <span className='text-[#E3E3E3]'>|</span>  <Link href="/dashboard/profile"><span className='text-[14px] text-[#0F52BA]'>My Profile</span></Link>
            </div>
          </div>

          <ul class="space-y-[10px] pb-[20px] font-medium border-t  border-gray-200 dark:border-gray-700 p-[10px]">

            <li className='pt-[8px] flex items-center '>
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M0.647934 13.3521H4.25785V7.93719H8.14545V13.3521H11.7554V5.02149L6.20165 0.809917L0.647934 5.02149V13.3521ZM0 14V4.69752L6.20165 0L12.4033 4.69752V14H7.49752V8.58512H4.90579V14H0Z" fill={router.pathname === "/dashboard" ? "#0F52BA" : "black"} />
              </svg>

              <Link href="/dashboard"> <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard" ? "text-[#0F52BA]" : ""}`}>Home</h1></Link>
            </li>

            <li className='pt-[8px] flex items-center '>

              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_132)">
                  <path d="M13.9296 14L9.98889 9.9037C9.4772 10.3717 8.88046 10.7263 8.19868 10.9677C7.51689 11.209 6.84326 11.3296 6.17778 11.3296C4.5909 11.3296 3.24789 10.7823 2.14873 9.68756C1.04958 8.59283 0.5 7.25332 0.5 5.66904C0.5 4.08474 1.04736 2.74383 2.14207 1.6463C3.2368 0.548765 4.57435 0 6.1547 0C7.73506 0 9.08029 0.547772 10.1904 1.64332C11.3005 2.73884 11.8556 4.07751 11.8556 5.65932C11.8556 6.36298 11.7259 7.05617 11.4667 7.73889C11.2074 8.42161 10.8531 9.00494 10.4037 9.48889L14.3444 13.5593L13.9296 14ZM6.17778 10.7593C7.61378 10.7593 8.82402 10.271 9.8085 9.29445C10.793 8.3179 11.2852 7.10802 11.2852 5.66481C11.2852 4.2216 10.793 3.01173 9.8085 2.03519C8.82402 1.05864 7.61378 0.57037 6.17778 0.57037C4.74178 0.57037 3.53154 1.05864 2.54706 2.03519C1.5626 3.01173 1.07037 4.2216 1.07037 5.66481C1.07037 7.10802 1.5626 8.3179 2.54706 9.29445C3.53154 10.271 4.74178 10.7593 6.17778 10.7593Z" fill={router.pathname === "/dashboard/searchmember" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_132">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>

              <Link href="/dashboard/searchmember"> <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/searchmember" ? "text-[#0F52BA]" : ""}`}>Search Member</h1></Link>


            </li>

            <li className='pt-[8px] flex items-center  '>
              <img src='/assests/Black/RightTick.svg' />
              <Link href="/dashboard/accepted"><h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/accepted" ? "text-[#0F52BA]" : ""}`}>Accepted</h1></Link>
              <div className={`${router.pathname === "/dashboard/accepted" ? "invisible" : "visible	"} flex justify-end  w-full pr-[10px]`}>
                <div className='grid place-items-center w-[24px] h-[24px] bg-[#0F52BA] rounded-[50px]'>
                  <h1 style={NotificationText} className='text-[white]'>03</h1>
                </div>
              </div>
            </li>

            <li className='pt-[8px] flex items-center '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_132)">
                  <path d="M13.9296 14L9.98889 9.9037C9.4772 10.3717 8.88046 10.7263 8.19868 10.9677C7.51689 11.209 6.84326 11.3296 6.17778 11.3296C4.5909 11.3296 3.24789 10.7823 2.14873 9.68756C1.04958 8.59283 0.5 7.25332 0.5 5.66904C0.5 4.08474 1.04736 2.74383 2.14207 1.6463C3.2368 0.548765 4.57435 0 6.1547 0C7.73506 0 9.08029 0.547772 10.1904 1.64332C11.3005 2.73884 11.8556 4.07751 11.8556 5.65932C11.8556 6.36298 11.7259 7.05617 11.4667 7.73889C11.2074 8.42161 10.8531 9.00494 10.4037 9.48889L14.3444 13.5593L13.9296 14ZM6.17778 10.7593C7.61378 10.7593 8.82402 10.271 9.8085 9.29445C10.793 8.3179 11.2852 7.10802 11.2852 5.66481C11.2852 4.2216 10.793 3.01173 9.8085 2.03519C8.82402 1.05864 7.61378 0.57037 6.17778 0.57037C4.74178 0.57037 3.53154 1.05864 2.54706 2.03519C1.5626 3.01173 1.07037 4.2216 1.07037 5.66481C1.07037 7.10802 1.5626 8.3179 2.54706 9.29445C3.53154 10.271 4.74178 10.7593 6.17778 10.7593Z" fill={router.pathname === "/dashboard/recentlyviewed" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_132">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/dashboard/recentlyviewed"><h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/recentlyviewed" ? "text-[#0F52BA]" : ""}`}>Recently Viewed</h1></Link>
            </li>

            <li className='pt-[8px] flex items-center   '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_128)">
                  <path d="M1.72727 14C1.3822 14 1.09139 13.8817 0.854841 13.6452C0.61828 13.4086 0.5 13.1178 0.5 12.7727V1.22727C0.5 0.882197 0.61828 0.591379 0.854841 0.354818C1.09139 0.118273 1.3822 0 1.72727 0H13.2727C13.6178 0 13.9086 0.118273 14.1452 0.354818C14.3817 0.591379 14.5 0.882197 14.5 1.22727V12.7727C14.5 13.1178 14.3817 13.4086 14.1452 13.6452C13.9086 13.8817 13.6178 14 13.2727 14H1.72727ZM1.72727 13.5H13.2727C13.4848 13.5 13.6591 13.4318 13.7955 13.2955C13.9318 13.1591 14 12.9848 14 12.7727V10.2045H10.4091C10.1364 10.7955 9.73331 11.25 9.19993 11.5682C8.66654 11.8864 8.09836 12.0455 7.49539 12.0455C6.8924 12.0455 6.32576 11.8864 5.79545 11.5682C5.26515 11.25 4.86364 10.7955 4.59091 10.2045H1V12.7727C1 12.9848 1.06818 13.1591 1.20455 13.2955C1.34091 13.4318 1.51515 13.5 1.72727 13.5ZM7.50395 11.5455C8.09223 11.5455 8.625 11.375 9.10227 11.0341C9.57955 10.6932 9.93182 10.25 10.1591 9.70455H14V1.22727C14 1.01515 13.9318 0.840909 13.7955 0.704545C13.6591 0.568182 13.4848 0.5 13.2727 0.5H1.72727C1.51515 0.5 1.34091 0.568182 1.20455 0.704545C1.06818 0.840909 1 1.01515 1 1.22727V9.70455H4.84091C5.06818 10.25 5.42177 10.6932 5.90168 11.0341C6.38159 11.375 6.91568 11.5455 7.50395 11.5455ZM7.5 7.84091L4.72727 5.06818L5.09091 4.72727L7.25 6.88636V2.31818H7.75V6.88636L9.90909 4.72727L10.2727 5.06818L7.5 7.84091ZM1.72727 13.5H1H14H1.72727Z"
                    fill={router.pathname === "/dashboard/newrequest" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_128">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/dashboard/newrequest"><h1 style={Text3} className={`pl-[10px] text-[14px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/newrequest" ? "text-[#0F52BA]" : ""}`}>New Requests</h1></Link>
              <div className={`${router.pathname === "/dashboard/newrequest" ? "invisible" : "visible	"} flex justify-center relative 2xl:left-[50px] xl:left-[40px]`}>
                <div className='grid place-items-center w-[24px] h-[24px] bg-[#17C270] rounded-[50px]'>
                  <h1 style={NotificationText} className='text-[white]'>06</h1>
                </div>
              </div>
            </li>


            <li className='pt-[8px] flex items-center '>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_176)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7399 3.5023L13.8866 4.22619C14.701 4.41452 15.2086 5.22747 15.0202 6.04193C14.9599 6.30248 14.8317 6.54237 14.6486 6.73729L12.5704 9.12543L12.8545 12.3518V12.3656C12.9183 13.197 12.2999 13.9244 11.469 13.9952C11.1789 14.0182 10.8881 13.9581 10.6308 13.822L7.77338 12.6098L4.7947 13.8723C4.02821 14.1962 3.1443 13.8374 2.82037 13.0709L2.81872 13.067C2.77162 12.9559 2.73789 12.8396 2.71828 12.7206C2.70244 12.6204 2.69663 12.5189 2.70096 12.4176C2.69919 12.3974 2.69919 12.3771 2.70096 12.357L2.98498 9.12716L0.868727 6.6888C0.32265 6.05838 0.391012 5.10468 1.02139 4.55861C1.19894 4.40478 1.40996 4.29455 1.63764 4.23658L1.67228 4.22619H1.68613L4.82068 3.50057L6.4832 0.729701C6.91528 0.0152499 7.84473 -0.213693 8.55923 0.218389C8.77436 0.34849 8.95364 0.530155 9.08088 0.747019L9.09128 0.762605L10.7399 3.5023ZM14.1378 6.25944C14.1875 6.20761 14.23 6.14938 14.2642 6.08626C14.4765 5.68998 14.3273 5.19668 13.9311 4.98441C13.8674 4.95029 13.7995 4.92483 13.7291 4.90864L10.4387 4.14665C10.3458 4.1257 10.2656 4.06746 10.217 3.98559V3.98386L8.49385 1.10909L8.48346 1.09177C8.25214 0.706317 7.75217 0.581368 7.36672 0.812692C7.2522 0.881401 7.15635 0.977256 7.08764 1.09177L5.35585 3.97174C5.30827 4.0598 5.22488 4.12293 5.12725 4.14492L1.84897 4.90171H1.82819C1.39039 5.00371 1.1182 5.44134 1.2202 5.87914C1.25012 6.00755 1.31077 6.12674 1.39697 6.22653L3.59288 8.76188C3.66709 8.83474 3.70458 8.93713 3.69506 9.04069L3.40758 12.3657C3.40897 12.3836 3.40897 12.4015 3.40758 12.4194C3.39966 12.4844 3.39966 12.5501 3.40758 12.6151C3.41628 12.6707 3.43079 12.7253 3.45088 12.7779C3.45902 12.7935 3.46599 12.8097 3.47166 12.8264C3.65116 13.2147 4.1006 13.3978 4.50034 13.2455C4.51757 13.2365 4.53554 13.2289 4.55403 13.223L7.64008 11.9155C7.72641 11.8789 7.82391 11.8789 7.91024 11.9155L10.908 13.1797C10.9271 13.1861 10.9456 13.1942 10.9634 13.2039C11.0989 13.2774 11.2532 13.3093 11.4067 13.2957H11.4171C11.8579 13.2562 12.1859 12.8712 12.1549 12.4298V12.4125L11.8639 9.04069C11.8554 8.94696 11.8854 8.85379 11.947 8.78266L14.1187 6.28022L14.1378 6.25944Z"
                    fill={router.pathname === "/dashboard/shortlists" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_176">
                    <rect width="15" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/dashboard/shortlists">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/shortlists" ? "text-[#0F52BA]" : ""}`}>Shortlists</h1>
              </Link>

            </li>


            <li className='pt-[8px] flex items-center '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_132)">
                  <path d="M13.9296 14L9.98889 9.9037C9.4772 10.3717 8.88046 10.7263 8.19868 10.9677C7.51689 11.209 6.84326 11.3296 6.17778 11.3296C4.5909 11.3296 3.24789 10.7823 2.14873 9.68756C1.04958 8.59283 0.5 7.25332 0.5 5.66904C0.5 4.08474 1.04736 2.74383 2.14207 1.6463C3.2368 0.548765 4.57435 0 6.1547 0C7.73506 0 9.08029 0.547772 10.1904 1.64332C11.3005 2.73884 11.8556 4.07751 11.8556 5.65932C11.8556 6.36298 11.7259 7.05617 11.4667 7.73889C11.2074 8.42161 10.8531 9.00494 10.4037 9.48889L14.3444 13.5593L13.9296 14ZM6.17778 10.7593C7.61378 10.7593 8.82402 10.271 9.8085 9.29445C10.793 8.3179 11.2852 7.10802 11.2852 5.66481C11.2852 4.2216 10.793 3.01173 9.8085 2.03519C8.82402 1.05864 7.61378 0.57037 6.17778 0.57037C4.74178 0.57037 3.53154 1.05864 2.54706 2.03519C1.5626 3.01173 1.07037 4.2216 1.07037 5.66481C1.07037 7.10802 1.5626 8.3179 2.54706 9.29445C3.53154 10.271 4.74178 10.7593 6.17778 10.7593Z"
                    fill={router.pathname === "/dashboard/sent" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_132">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/dashboard/sent">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/sent" ? "text-[#0F52BA]" : ""}`}>Sent</h1>
              </Link>
            </li>

          </ul>
          <ul class=" pb-[20px] pt-2 mt-0 p-[10px] space-y-[10px] font-medium border-t border-gray-200 dark:border-gray-700">

            <li className='pt-[8px] flex items-center '>

              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_100)">
                  <path d="M4.26439 0H12.6376V8.86238L7.45719 14L7.37117 13.9538C7.30008 13.8847 7.24312 13.8038 7.20031 13.711C7.15749 13.6182 7.13609 13.5219 7.13609 13.422V13.3792L7.99235 8.86238H1.65596C1.36198 8.86238 1.09582 8.74322 0.857492 8.50489C0.619164 8.26656 0.5 8.00041 0.5 7.70642V6.59327C0.5 6.50765 0.514271 6.42915 0.542813 6.3578L2.85474 0.920489C2.9529 0.660041 3.14267 0.441514 3.42405 0.264908C3.70542 0.0883027 3.98554 0 4.26439 0ZM12.1667 0.470948H4.18196C4.02497 0.470948 3.86442 0.513761 3.70031 0.599388C3.53619 0.685015 3.41131 0.827727 3.32569 1.02752L0.970948 6.59327V7.70642C0.970948 7.89195 1.03517 8.0525 1.16361 8.18807C1.29205 8.32365 1.45617 8.39144 1.65596 8.39144H8.54893L7.60703 13.2294L12.1667 8.64832V0.470948ZM12.6376 8.86238V8.39144H15.763V0.470948H12.6376V0H16.2339V8.86238H12.6376Z"
                    fill={router.pathname === "/dashboard/cancelled" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_100">
                    <rect width="16" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>

              <Link href="/dashboard/cancelled">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/cancelled" ? "text-[#0F52BA]" : ""}`}>Cancelled</h1>
              </Link>
            </li>

            <li className='pt-[8px] flex items-center '>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_130)">
                  <path d="M7.5035 14C6.53565 14 5.62557 13.8163 4.77326 13.449C3.92093 13.0817 3.17953 12.5832 2.54905 11.9535C1.91858 11.3238 1.41945 10.5834 1.05167 9.73213C0.683891 8.88089 0.5 7.97135 0.5 7.0035C0.5 6.03565 0.683656 5.12557 1.05097 4.27326C1.41829 3.42094 1.9168 2.67954 2.54647 2.04907C3.17617 1.41859 3.91663 0.919455 4.76787 0.551673C5.61911 0.183891 6.52865 0 7.4965 0C8.46435 0 9.37443 0.183656 10.2267 0.550968C11.0791 0.918294 11.8205 1.4168 12.4509 2.04647C13.0814 2.67617 13.5805 3.41663 13.9483 4.26787C14.3161 5.11911 14.5 6.02865 14.5 6.9965C14.5 7.96435 14.3163 8.87443 13.949 9.72674C13.5817 10.5791 13.0832 11.3205 12.4535 11.951C11.8238 12.5814 11.0834 13.0805 10.2321 13.4483C9.38089 13.8161 8.47135 14 7.5035 14ZM7.5 13.5575C9.32878 13.5575 10.8789 12.9218 12.1503 11.6503C13.4218 10.3789 14.0575 8.82878 14.0575 7C14.0575 6.16023 13.9033 5.36024 13.5948 4.60005C13.2864 3.83986 12.8506 3.14464 12.2874 2.51437L3.01437 11.7874C3.63123 12.364 4.32193 12.8032 5.08647 13.1049C5.85101 13.4066 6.65552 13.5575 7.5 13.5575ZM2.71264 11.4856L11.9856 2.21264C11.3822 1.63602 10.6948 1.19684 9.92359 0.895115C9.15234 0.593391 8.34448 0.442529 7.5 0.442529C5.67122 0.442529 4.12111 1.07824 2.84967 2.34967C1.57824 3.62111 0.942529 5.17122 0.942529 7C0.942529 7.84448 1.09674 8.64899 1.40517 9.41353C1.7136 10.1781 2.14943 10.8688 2.71264 11.4856Z"
                    fill={router.pathname === "/dashboard/blocked" ? "#0F52BA" : "black"} />
                </g>
                <defs>
                  <clipPath id="clip0_576_130">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>

              <Link href="/dashboard/blocked">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/blocked" ? "text-[#0F52BA]" : ""}`}>Blocked Profile</h1>
              </Link>
            </li>

            <li className='pt-[8px] flex items-center '>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_576_112)">
                  <path d="M2.67881 14C2.34272 14 2.05008 13.8754 1.80091 13.6262C1.55174 13.3771 1.42715 13.0844 1.42715 12.7483V1.0894H0.5V0.57947H3.83775V0H9.58609V0.57947H12.9238V1.0894H11.9967V12.7483C11.9967 13.1003 11.8761 13.3969 11.6348 13.6381C11.3936 13.8794 11.097 14 10.745 14H2.67881ZM11.4868 1.0894H1.93709V12.7483C1.93709 12.9647 2.01049 13.1424 2.15728 13.2815C2.30408 13.4205 2.47792 13.4901 2.67881 13.4901H10.745C10.9305 13.4901 11.1004 13.4128 11.255 13.2583C11.4095 13.1038 11.4868 12.9338 11.4868 12.7483V1.0894ZM4.95033 11.5894H5.46027V2.96689H4.95033V11.5894ZM7.96358 11.5894H8.47351V2.96689H7.96358V11.5894Z"
                    fill={router.pathname === "/dashboard/deleted" ? "#0F52BA" : "black"}/>
                </g>
                <defs>
                  <clipPath id="clip0_576_112">
                    <rect width="13" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/dashboard/deleted">
                <h1 style={Text3} className={`text-[14px] pl-[10px] hover:text-[#0F52BA] ${router.pathname === "/dashboard/deleted" ? "text-[#0F52BA]" : ""}`}>Deleted</h1>
              </Link>
            </li>
          </ul>

        </div>
      </aside>


    </>
  )
}

export default SideBar