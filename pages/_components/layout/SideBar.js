import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { markshortlistseen } from "../../../store/reducers/NotificationReducer";
import ProfileImage from "../common/profile/ProfileImage";
import { useDarkMode } from "../../../ContextProvider/DarkModeContext";
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '../../../utils/firebase/firebase';
import Image from "next/image";

function SideBar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const Text2 = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
  };

  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const router = useRouter();

  const notificatindot = useSelector((state) => state.notificatin);
  const myProfile = useSelector((state) => state.myprofile?.data);
  const dispatch = useDispatch();



  const HandleGOTO = () => {
    dispatch(markshortlistseen());
  };



  const [notificationCount, setNotificationCount] = useState(0);

  if (typeof window !== 'undefined') {
    const messaging = getMessaging(firebaseApp);

    // Listen for incoming messages
    onMessage(messaging, (payload) => {
      console.log('Message received:', payload);

      // Display the message as a toast notification
      setNotificationCount((prevCount) => prevCount + 1);
    });
  }



  return (
    <>
      <aside
        id="separator-sidebar"
        className="hidden lg:block w-[250px] pb-[100px] fixed top-[80px] 2xl:left-[15px] 2xl:pl-0 xl:pl-[10px] xl:left-0 bg-[#FFF] dark:bg-[#18191a] z-40 w-64 h-full transition-transform translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div id="sidebarScroll" className="h-full px-3 py-4 overflow-y-auto bg-[#FFF] dark:bg-[#18191A] dark:border-r dark:border-[#292929]">
          <div className="p-[10px] space-y-[20px]">
            <div onClick={() => router.push("/longterm/dashboard/profile")} className="cursor-pointer w-[50px] hover:opacity-90 duration-100">
              <ProfileImage size={47} />
            </div>
            <div>
              <div onClick={() => router.push("/longterm/dashboard/profile")} className="group cursor-pointer duration-100 inline-block">
                <h1 className="group-hover:opacity-75 text-[#000] dark:text-[#FFF]" style={Text2}>{myProfile?.name}</h1>
              </div>
              <div className="pt-[10px]">
                <span style={Text3} className="text-[14px] text-[#50545A] dark:text-[#616161]">
                  {/* ID: HM1002021 */}
                  ID: {myProfile?.userUniqueId?.toUpperCase()}
                </span>{" "}
                <span className="text-[#E3E3E3]">|</span>{" "}
                <Link href="/longterm/dashboard/profile">
                  <span className="text-[14px] text-[#0F52BA] dark:text-[#FFF]">My Profile</span>
                </Link>
              </div>
            </div>
          </div>

          <ul className="relative left-[-10px] space-y-[10px] pb-[20px] font-medium border-t  border-gray-200 dark:border-[#292929] p-[10px]">
            <li name="dashboard" className={`duration-100 ${darkMode ? "" : "hover:bg-[#F2F7FF]"} rounded-[17px] p-[5px] pl-[10px] flex items-center`}>
              <span>
                {router.pathname === "/longterm/dashboard" ?
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <path d="M0.647934 13.3521H4.25785V7.93719H8.14545V13.3521H11.7554V5.02149L6.20165 0.809917L0.647934 5.02149V13.3521ZM0 14V4.69752L6.20165 0L12.4033 4.69752V14H7.49752V8.58512H4.90579V14H0Z" fill="url(#paint0_linear_1273_667)" />
                      <defs>
                        <linearGradient id="paint0_linear_1273_667" x1="1.93802" y1="-0.875" x2="10.7462" y2="13.0894" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0F52BA" />
                          <stop offset="1" stopColor="#8225AF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </> :
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <path d="M0.647934 13.3521H4.25785V7.93719H8.14545V13.3521H11.7554V5.02149L6.20165 0.809917L0.647934 5.02149V13.3521ZM0 14V4.69752L6.20165 0L12.4033 4.69752V14H7.49752V8.58512H4.90579V14H0Z"

                        fill={darkMode ? "#FFF" : "black"} />
                    </svg>
                  </>}

              </span>
              <Link href="/longterm/dashboard">
                {" "}
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] pl-[10px] dark:hover:text-[#FFF] 
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard"
                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard"
                        ? ""
                        : ""}`}
                >
                  Home
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center`}>
              {router.pathname === "/longterm/dashboard/searchmember" ? <>
                <Image width={14} height={14} alt="search-icon" src="/assests/sidebar/search-member-icon.svg" />

              </> : <>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_576_132)">
                    <path
                      d="M13.9296 14L9.98889 9.9037C9.4772 10.3717 8.88046 10.7263 8.19868 10.9677C7.51689 11.209 6.84326 11.3296 6.17778 11.3296C4.5909 11.3296 3.24789 10.7823 2.14873 9.68756C1.04958 8.59283 0.5 7.25332 0.5 5.66904C0.5 4.08474 1.04736 2.74383 2.14207 1.6463C3.2368 0.548765 4.57435 0 6.1547 0C7.73506 0 9.08029 0.547772 10.1904 1.64332C11.3005 2.73884 11.8556 4.07751 11.8556 5.65932C11.8556 6.36298 11.7259 7.05617 11.4667 7.73889C11.2074 8.42161 10.8531 9.00494 10.4037 9.48889L14.3444 13.5593L13.9296 14ZM6.17778 10.7593C7.61378 10.7593 8.82402 10.271 9.8085 9.29445C10.793 8.3179 11.2852 7.10802 11.2852 5.66481C11.2852 4.2216 10.793 3.01173 9.8085 2.03519C8.82402 1.05864 7.61378 0.57037 6.17778 0.57037C4.74178 0.57037 3.53154 1.05864 2.54706 2.03519C1.5626 3.01173 1.07037 4.2216 1.07037 5.66481C1.07037 7.10802 1.5626 8.3179 2.54706 9.29445C3.53154 10.271 4.74178 10.7593 6.17778 10.7593Z"
                      fill={darkMode ? "#FFF" : "black"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_576_132">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </>}
              <Link href="/longterm/dashboard/searchmember">
                {" "}
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/searchmember" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px]  dark:hover:text-[#FFF] pl-[10px]  
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/searchmember"
                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/searchmember"
                        ? ""
                        : ""}`}
                >
                  Search Member
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center `}>

              {router.pathname === "/longterm/dashboard/accepted" ? <>
                <Image width={14} height={14} alt="search-icon" src="/assests/sidebar/accepted-icon.svg" />

              </> :
                <>
                  <svg width="25" height="24" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_576_184)">
                      <path d="M6.35278 10.0154L11.3321 5.03611L10.8714 4.57991L6.35278 9.11346L4.07928 6.83995L3.63802 7.29616L6.35278 10.0154ZM7.50261 14C6.53762 14 5.63154 13.8163 4.78439 13.449C3.93722 13.0816 3.19521 12.5798 2.55837 11.9435C1.92154 11.3073 1.41927 10.566 1.05156 9.71962C0.683854 8.87325 0.5 7.96758 0.5 7.00261C0.5 6.03462 0.683679 5.12456 1.05104 4.27241C1.41841 3.42026 1.92022 2.67901 2.55646 2.04865C3.19271 1.4183 3.93402 0.919269 4.78038 0.551562C5.62675 0.183854 6.53242 0 7.49739 0C8.46538 0 9.37544 0.183679 10.2276 0.551036C11.0797 0.918406 11.821 1.41697 12.4514 2.04674C13.0817 2.67651 13.5807 3.41706 13.9484 4.26841C14.3161 5.11976 14.5 6.02942 14.5 6.99739C14.5 7.96238 14.3163 8.86846 13.949 9.71561C13.5816 10.5628 13.083 11.3048 12.4533 11.9416C11.8235 12.5785 11.0829 13.0807 10.2316 13.4484C9.38024 13.8161 8.47058 14 7.50261 14ZM7.5 13.4017C9.28092 13.4017 10.7931 12.7792 12.0365 11.5343C13.28 10.2894 13.9017 8.77792 13.9017 7C13.9017 5.21908 13.28 3.7069 12.0365 2.46346C10.7931 1.22001 9.28092 0.598286 7.5 0.598286C5.72208 0.598286 4.21065 1.22001 2.96571 2.46346C1.72076 3.7069 1.09829 5.21908 1.09829 7C1.09829 8.77792 1.72076 10.2894 2.96571 11.5343C4.21065 12.7792 5.72208 13.4017 7.5 13.4017Z"
                        fill={darkMode ? "#FFF" : "black"} />
                    </g>
                    <defs>
                      <clipPath id="clip0_576_184">
                        <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </>}



              <Link href="/longterm/dashboard/accepted">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/accepted" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] dark:hover:text-[#FFF] pl-[10px] 
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/accepted"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/accepted"

                        ? ""
                        : ""}`}
                >
                  Accepted
                </h1>
              </Link>
              <div
                className={`${router.pathname === "/longterm/dashboard/accepted" ? "invisible" : "visible	"} flex justify-end  w-full pr-[10px]`}
              >
                {/* <div
                  id="grad-btn"
                  className="grid place-items-center w-[24px] h-[24px] bg-[#0F52BA] rounded-[50px]"
                >
                  <h1 style={NotificationText} className="text-[white]">
                    03
                  </h1>
                </div> */}
              </div>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center relative left-[-1px] `}>
              {
                router.pathname === "/longterm/dashboard/recentlyviewed" ? <>
                  <Image width={19} height={12} alt="recentView" src={"/assests/sidebar/recently-view-icon.svg"} />
                </> : <>

                  <svg
                    width="20"
                    height="13"
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M9.60588 9.6C10.552 9.6 11.3542 9.26888 12.0125 8.60663C12.6708 7.94436 13 7.14019 13 6.19413C13 5.24804 12.6689 4.44583 12.0066 3.7875C11.3444 3.12917 10.5402 2.8 9.59413 2.8C8.64804 2.8 7.84583 3.13112 7.1875 3.79337C6.52917 4.45564 6.2 5.25981 6.2 6.20587C6.2 7.15196 6.53112 7.95417 7.19337 8.6125C7.85564 9.27083 8.65981 9.6 9.60588 9.6ZM9.6 8.9C8.85 8.9 8.2125 8.6375 7.6875 8.1125C7.1625 7.5875 6.9 6.95 6.9 6.2C6.9 5.45 7.1625 4.8125 7.6875 4.2875C8.2125 3.7625 8.85 3.5 9.6 3.5C10.35 3.5 10.9875 3.7625 11.5125 4.2875C12.0375 4.8125 12.3 5.45 12.3 6.2C12.3 6.95 12.0375 7.5875 11.5125 8.1125C10.9875 8.6375 10.35 8.9 9.6 8.9ZM9.60358 12.4C7.51786 12.4 5.61667 11.8375 3.9 10.7125C2.18333 9.5875 0.883333 8.08333 0 6.2C0.883333 4.31667 2.18214 2.8125 3.89643 1.6875C5.61071 0.5625 7.51071 0 9.59643 0C11.6821 0 13.5833 0.5625 15.3 1.6875C17.0167 2.8125 18.3167 4.31667 19.2 6.2C18.3167 8.08333 17.0179 9.5875 15.3036 10.7125C13.5893 11.8375 11.6893 12.4 9.60358 12.4ZM9.6 11.7C11.4833 11.7 13.2125 11.2042 14.7875 10.2125C16.3625 9.22083 17.5667 7.88333 18.4 6.2C17.5667 4.51667 16.3625 3.17917 14.7875 2.1875C13.2125 1.19583 11.4833 0.7 9.6 0.7C7.71667 0.7 5.9875 1.19583 4.4125 2.1875C2.8375 3.17917 1.63333 4.51667 0.8 6.2C1.63333 7.88333 2.8375 9.22083 4.4125 10.2125C5.9875 11.2042 7.71667 11.7 9.6 11.7Z"
                      fill={darkMode ? "#FFF" : "black"}
                    />
                  </svg>
                </>
              }


              <Link href="/longterm/dashboard/recentlyviewed">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/recentlyviewed" ? "sidebar-navlink-grad" : ""}

                  className={`text-[14px]  dark:hover:text-[#FFF] pl-[6px]  
                   ${darkMode
                      ? router.pathname === "/longterm/dashboard/recentlyviewed"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/recentlyviewed"
                        ? ""
                        : ""}`}
                >
                  Recently Viewed
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center `}>
              {router.pathname === "/longterm/dashboard/newrequest" ?
                <>
                  <Image width={15} height={14} alt="newrequest" src={"/assests/sidebar/new-request-icon.svg"} />
                </>
                :
                <>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_576_128)">
                      <path
                        d="M1.72727 14C1.3822 14 1.09139 13.8817 0.854841 13.6452C0.61828 13.4086 0.5 13.1178 0.5 12.7727V1.22727C0.5 0.882197 0.61828 0.591379 0.854841 0.354818C1.09139 0.118273 1.3822 0 1.72727 0H13.2727C13.6178 0 13.9086 0.118273 14.1452 0.354818C14.3817 0.591379 14.5 0.882197 14.5 1.22727V12.7727C14.5 13.1178 14.3817 13.4086 14.1452 13.6452C13.9086 13.8817 13.6178 14 13.2727 14H1.72727ZM1.72727 13.5H13.2727C13.4848 13.5 13.6591 13.4318 13.7955 13.2955C13.9318 13.1591 14 12.9848 14 12.7727V10.2045H10.4091C10.1364 10.7955 9.73331 11.25 9.19993 11.5682C8.66654 11.8864 8.09836 12.0455 7.49539 12.0455C6.8924 12.0455 6.32576 11.8864 5.79545 11.5682C5.26515 11.25 4.86364 10.7955 4.59091 10.2045H1V12.7727C1 12.9848 1.06818 13.1591 1.20455 13.2955C1.34091 13.4318 1.51515 13.5 1.72727 13.5ZM7.50395 11.5455C8.09223 11.5455 8.625 11.375 9.10227 11.0341C9.57955 10.6932 9.93182 10.25 10.1591 9.70455H14V1.22727C14 1.01515 13.9318 0.840909 13.7955 0.704545C13.6591 0.568182 13.4848 0.5 13.2727 0.5H1.72727C1.51515 0.5 1.34091 0.568182 1.20455 0.704545C1.06818 0.840909 1 1.01515 1 1.22727V9.70455H4.84091C5.06818 10.25 5.42177 10.6932 5.90168 11.0341C6.38159 11.375 6.91568 11.5455 7.50395 11.5455ZM7.5 7.84091L4.72727 5.06818L5.09091 4.72727L7.25 6.88636V2.31818H7.75V6.88636L9.90909 4.72727L10.2727 5.06818L7.5 7.84091ZM1.72727 13.5H1H14H1.72727Z"
                        fill={darkMode ? "#FFF" : "black"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_576_128">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>}

              <Link href="/longterm/dashboard/newrequest">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/newrequest" ? "sidebar-navlink-grad" : ""}
                  className={`pl-[10px] text-[14px]  dark:hover:text-[#FFF] 
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/newrequest"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/newrequest"
                        ? ""
                        : ""}`}
                >
                  New Requests
                </h1>
              </Link>
              <div
                className={`${router.pathname === "/longterm/dashboard/newrequest" ? "invisible" : "visible	"} flex justify-center relative 2xl:left-[50px] lg:left-[50px] xl:left-[40px]`}
              >
                {/* <div className="grid place-items-center w-[24px] h-[24px] bg-[#17C270] rounded-[50px]">
                  <h1 style={NotificationText} className="text-[white]">
                    {notificationCount}
                  </h1>
                </div> */}
              </div>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center `}>
              {router.pathname === "/longterm/dashboard/shortlists" ?
                <>
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7399 3.5023L13.8866 4.22619C14.701 4.41452 15.2086 5.22747 15.0202 6.04193C14.9599 6.30248 14.8317 6.54237 14.6486 6.73729L12.5704 9.12543L12.8545 12.3518V12.3656C12.9183 13.197 12.2999 13.9244 11.469 13.9952C11.1789 14.0182 10.8881 13.9581 10.6308 13.822L7.77338 12.6098L4.7947 13.8723C4.02821 14.1962 3.1443 13.8374 2.82037 13.0709L2.81872 13.067C2.77162 12.9559 2.73789 12.8396 2.71828 12.7206C2.70244 12.6204 2.69663 12.5189 2.70096 12.4176C2.69919 12.3974 2.69919 12.3771 2.70096 12.357L2.98498 9.12716L0.868727 6.6888C0.32265 6.05838 0.391012 5.10468 1.02139 4.55861C1.19894 4.40478 1.40996 4.29455 1.63764 4.23658L1.67228 4.22619H1.68613L4.82068 3.50057L6.4832 0.729701C6.91528 0.0152499 7.84473 -0.213693 8.55923 0.218389C8.77436 0.34849 8.95364 0.530155 9.08088 0.747019L9.09128 0.762605L10.7399 3.5023ZM14.1378 6.25944C14.1875 6.20761 14.23 6.14938 14.2642 6.08626C14.4765 5.68998 14.3273 5.19668 13.9311 4.98441C13.8674 4.95029 13.7995 4.92483 13.7291 4.90864L10.4387 4.14665C10.3458 4.1257 10.2656 4.06746 10.217 3.98559V3.98386L8.49385 1.10909L8.48346 1.09177C8.25214 0.706317 7.75217 0.581368 7.36672 0.812692C7.2522 0.881401 7.15635 0.977256 7.08764 1.09177L5.35585 3.97174C5.30827 4.0598 5.22488 4.12293 5.12725 4.14492L1.84897 4.90171H1.82819C1.39039 5.00371 1.1182 5.44134 1.2202 5.87914C1.25012 6.00755 1.31077 6.12674 1.39697 6.22653L3.59288 8.76188C3.66709 8.83474 3.70458 8.93713 3.69506 9.04069L3.40758 12.3657C3.40897 12.3836 3.40897 12.4015 3.40758 12.4194C3.39966 12.4844 3.39966 12.5501 3.40758 12.6151C3.41628 12.6707 3.43079 12.7253 3.45088 12.7779C3.45902 12.7935 3.46599 12.8097 3.47166 12.8264C3.65116 13.2147 4.1006 13.3978 4.50034 13.2455C4.51757 13.2365 4.53554 13.2289 4.55403 13.223L7.64008 11.9155C7.72641 11.8789 7.82391 11.8789 7.91024 11.9155L10.908 13.1797C10.9271 13.1861 10.9456 13.1942 10.9634 13.2039C11.0989 13.2774 11.2532 13.3093 11.4067 13.2957H11.4171C11.8579 13.2562 12.1859 12.8712 12.1549 12.4298V12.4125L11.8639 9.04069C11.8554 8.94696 11.8854 8.85379 11.947 8.78266L14.1187 6.28022L14.1378 6.25944Z" fill="url(#paint0_linear_79_7)" />
                    <defs>
                      <linearGradient id="paint0_linear_79_7" x1="5.23243" y1="-2" x2="10.0197" y2="16.1244" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0F52BA" />
                        <stop offset="1" stopColor="#8225AF" />
                      </linearGradient>
                    </defs>
                  </svg>

                </>
                :
                <>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_576_176)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.7399 3.5023L13.8866 4.22619C14.701 4.41452 15.2086 5.22747 15.0202 6.04193C14.9599 6.30248 14.8317 6.54237 14.6486 6.73729L12.5704 9.12543L12.8545 12.3518V12.3656C12.9183 13.197 12.2999 13.9244 11.469 13.9952C11.1789 14.0182 10.8881 13.9581 10.6308 13.822L7.77338 12.6098L4.7947 13.8723C4.02821 14.1962 3.1443 13.8374 2.82037 13.0709L2.81872 13.067C2.77162 12.9559 2.73789 12.8396 2.71828 12.7206C2.70244 12.6204 2.69663 12.5189 2.70096 12.4176C2.69919 12.3974 2.69919 12.3771 2.70096 12.357L2.98498 9.12716L0.868727 6.6888C0.32265 6.05838 0.391012 5.10468 1.02139 4.55861C1.19894 4.40478 1.40996 4.29455 1.63764 4.23658L1.67228 4.22619H1.68613L4.82068 3.50057L6.4832 0.729701C6.91528 0.0152499 7.84473 -0.213693 8.55923 0.218389C8.77436 0.34849 8.95364 0.530155 9.08088 0.747019L9.09128 0.762605L10.7399 3.5023ZM14.1378 6.25944C14.1875 6.20761 14.23 6.14938 14.2642 6.08626C14.4765 5.68998 14.3273 5.19668 13.9311 4.98441C13.8674 4.95029 13.7995 4.92483 13.7291 4.90864L10.4387 4.14665C10.3458 4.1257 10.2656 4.06746 10.217 3.98559V3.98386L8.49385 1.10909L8.48346 1.09177C8.25214 0.706317 7.75217 0.581368 7.36672 0.812692C7.2522 0.881401 7.15635 0.977256 7.08764 1.09177L5.35585 3.97174C5.30827 4.0598 5.22488 4.12293 5.12725 4.14492L1.84897 4.90171H1.82819C1.39039 5.00371 1.1182 5.44134 1.2202 5.87914C1.25012 6.00755 1.31077 6.12674 1.39697 6.22653L3.59288 8.76188C3.66709 8.83474 3.70458 8.93713 3.69506 9.04069L3.40758 12.3657C3.40897 12.3836 3.40897 12.4015 3.40758 12.4194C3.39966 12.4844 3.39966 12.5501 3.40758 12.6151C3.41628 12.6707 3.43079 12.7253 3.45088 12.7779C3.45902 12.7935 3.46599 12.8097 3.47166 12.8264C3.65116 13.2147 4.1006 13.3978 4.50034 13.2455C4.51757 13.2365 4.53554 13.2289 4.55403 13.223L7.64008 11.9155C7.72641 11.8789 7.82391 11.8789 7.91024 11.9155L10.908 13.1797C10.9271 13.1861 10.9456 13.1942 10.9634 13.2039C11.0989 13.2774 11.2532 13.3093 11.4067 13.2957H11.4171C11.8579 13.2562 12.1859 12.8712 12.1549 12.4298V12.4125L11.8639 9.04069C11.8554 8.94696 11.8854 8.85379 11.947 8.78266L14.1187 6.28022L14.1378 6.25944Z"
                        fill={darkMode ? "#FFF" : "black"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_576_176">
                        <rect
                          width="15"
                          height="14"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>}
              <Link href="/longterm/dashboard/shortlists">
                {notificatindot.newShortlists > 0 && (
                  <div className="relative left-[-8px]">
                    <span className="inline absolute flex h-2.5 w-2.5">
                      <span

                        className="bg-custom-gradient animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"
                      ></span>
                      <span

                        className="bg-custom-gradient absolute inline-flex rounded-full h-2.5 w-2.5 "
                      ></span>
                    </span>
                  </div>
                )}
                <h1
                  onClick={HandleGOTO}
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/shortlists" ? "sidebar-navlink-grad" : ""}
                  className={` ${notificatindot.newShortlists > 0 && "inline relative left-[0px]"}  text-[14px] pl-[10px]  dark:hover:text-[#FFF]
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/shortlists"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/shortlists"
                        ? ""
                        : ""}`}
                >
                  Shortlists
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center `}>
              {router.pathname === "/longterm/dashboard/sent" ?
                <>
                  <Image width={16} height={14} alt="sent" className="relative left-[2px]" src={"/assests/sidebar/sent-icon.svg"} />
                </>
                :
                <>
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M0 14V0L16.6033 7L0 14ZM0.636364 13.0165L14.9545 7L0.636364 0.954545V5.81405L5.8719 7L0.636364 8.15702V13.0165Z"
                      fill={darkMode ? "#FFF" : "black"}
                    />
                  </svg>
                </>
              }

              <Link href="/longterm/dashboard/sent">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/sent" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] dark:hover:text-[#FFF] pl-[10px] 
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/sent"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/sent"
                        ? ""
                        : ""}`}
                >
                  Sent
                </h1>
              </Link>
            </li>
          </ul>
          <ul className="relative left-[-10px] pb-[20px]  pt-2 mt-0 p-[10px] space-y-[10px] font-medium border-t border-gray-200 dark:border-[#292929]">
            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center`}>
              {router.pathname === "/longterm/dashboard/cancelled" ?
                <>
                  <Image className="relative top-[3px]" width={15} height={14} alt="cancel" src={"/assests/sidebar/cancel-icon.svg"} />
                </>
                :
                <>
                  <svg className="relative top-[3px]" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.76439 0H12.1376V8.86238L6.95719 14L6.87117 13.9538C6.80008 13.8847 6.74312 13.8038 6.70031 13.711C6.65749 13.6182 6.63609 13.5219 6.63609 13.422V13.3792L7.49235 8.86238H1.15596C0.861978 8.86238 0.59582 8.74322 0.357492 8.50489C0.119164 8.26656 0 8.00041 0 7.70642V6.59327C0 6.50764 0.0142712 6.42915 0.0428135 6.3578L2.35474 0.920489C2.4529 0.660041 2.64267 0.441514 2.92405 0.264908C3.20542 0.0883027 3.48554 0 3.76439 0ZM11.6667 0.470948H3.68196C3.52497 0.470948 3.36442 0.513761 3.20031 0.599388C3.03619 0.685015 2.91131 0.827727 2.82569 1.02752L0.470948 6.59327V7.70642C0.470948 7.89195 0.535168 8.0525 0.663609 8.18807C0.792049 8.32365 0.956167 8.39144 1.15596 8.39144H8.04893L7.10703 13.2294L11.6667 8.64832V0.470948ZM12.1376 8.86238V8.39144H15.263V0.470948H12.1376V0H15.7339V8.86238H12.1376Z"
                      fill={darkMode ? "#FFF" : "black"} />
                  </svg>

                </>}


              <Link href="/longterm/dashboard/cancelled">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/cancelled" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] dark:hover:text-[#FFF] pl-[10px]  
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/cancelled"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/cancelled"
                        ? ""
                        : ""}`}
                >
                  Cancelled
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center`}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_576_130)">
                  <path
                    d="M7.5035 14C6.53565 14 5.62557 13.8163 4.77326 13.449C3.92093 13.0817 3.17953 12.5832 2.54905 11.9535C1.91858 11.3238 1.41945 10.5834 1.05167 9.73213C0.683891 8.88089 0.5 7.97135 0.5 7.0035C0.5 6.03565 0.683656 5.12557 1.05097 4.27326C1.41829 3.42094 1.9168 2.67954 2.54647 2.04907C3.17617 1.41859 3.91663 0.919455 4.76787 0.551673C5.61911 0.183891 6.52865 0 7.4965 0C8.46435 0 9.37443 0.183656 10.2267 0.550968C11.0791 0.918294 11.8205 1.4168 12.4509 2.04647C13.0814 2.67617 13.5805 3.41663 13.9483 4.26787C14.3161 5.11911 14.5 6.02865 14.5 6.9965C14.5 7.96435 14.3163 8.87443 13.949 9.72674C13.5817 10.5791 13.0832 11.3205 12.4535 11.951C11.8238 12.5814 11.0834 13.0805 10.2321 13.4483C9.38089 13.8161 8.47135 14 7.5035 14ZM7.5 13.5575C9.32878 13.5575 10.8789 12.9218 12.1503 11.6503C13.4218 10.3789 14.0575 8.82878 14.0575 7C14.0575 6.16023 13.9033 5.36024 13.5948 4.60005C13.2864 3.83986 12.8506 3.14464 12.2874 2.51437L3.01437 11.7874C3.63123 12.364 4.32193 12.8032 5.08647 13.1049C5.85101 13.4066 6.65552 13.5575 7.5 13.5575ZM2.71264 11.4856L11.9856 2.21264C11.3822 1.63602 10.6948 1.19684 9.92359 0.895115C9.15234 0.593391 8.34448 0.442529 7.5 0.442529C5.67122 0.442529 4.12111 1.07824 2.84967 2.34967C1.57824 3.62111 0.942529 5.17122 0.942529 7C0.942529 7.84448 1.09674 8.64899 1.40517 9.41353C1.7136 10.1781 2.14943 10.8688 2.71264 11.4856Z"
                    fill={darkMode ?
                      router.pathname === "/longterm/dashboard/blocked"
                        ? "#FFF"
                        : "#7D7F86"
                      :
                      router.pathname === "/longterm/dashboard/blocked"
                        ? "#0F52BA"
                        : "black"
                    }
                  />
                </g>
                <defs>
                  <clipPath id="clip0_576_130">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <Link href="/longterm/dashboard/blocked">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/blocked" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] dark:hover:text-[#FFF] pl-[10px] 
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/blocked"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/blocked"
                        ? ""
                        : ""}`}
                >
                  Blocked Profile
                </h1>
              </Link>
            </li>

            <li className={`${darkMode ? "" : "hover:bg-[#F2F7FF]"} duration-100 rounded-[17px] p-[5px] pl-[10px] flex items-center`}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_576_112)">
                  <path
                    d="M2.67881 14C2.34272 14 2.05008 13.8754 1.80091 13.6262C1.55174 13.3771 1.42715 13.0844 1.42715 12.7483V1.0894H0.5V0.57947H3.83775V0H9.58609V0.57947H12.9238V1.0894H11.9967V12.7483C11.9967 13.1003 11.8761 13.3969 11.6348 13.6381C11.3936 13.8794 11.097 14 10.745 14H2.67881ZM11.4868 1.0894H1.93709V12.7483C1.93709 12.9647 2.01049 13.1424 2.15728 13.2815C2.30408 13.4205 2.47792 13.4901 2.67881 13.4901H10.745C10.9305 13.4901 11.1004 13.4128 11.255 13.2583C11.4095 13.1038 11.4868 12.9338 11.4868 12.7483V1.0894ZM4.95033 11.5894H5.46027V2.96689H4.95033V11.5894ZM7.96358 11.5894H8.47351V2.96689H7.96358V11.5894Z"
                    fill={darkMode ?
                      router.pathname === "/longterm/dashboard/deleted"
                        ? "#FFF"
                        : "#7D7F86"
                      :
                      router.pathname === "/longterm/dashboard/deleted"
                        ? "#0F52BA"
                        : "black"
                    }
                  />
                </g>
                <defs>
                  <clipPath id="clip0_576_112">
                    <rect
                      width="13"
                      height="14"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Link href="/longterm/dashboard/deleted">
                <h1
                  style={Text3}
                  id={router.pathname === "/longterm/dashboard/deleted" ? "sidebar-navlink-grad" : ""}
                  className={`text-[14px] dark:hover:text-[#FFF] pl-[10px]
                  ${darkMode
                      ? router.pathname === "/longterm/dashboard/deleted"

                        ? "text-[#FFF]"
                        : "text-[#7D7F86]"
                      :
                      router.pathname === "/longterm/dashboard/deleted"
                        ? ""
                        : ""}`}
                >
                  Deleted
                </h1>
              </Link>
            </li>
          </ul>
        </div>

      </aside >
    </>
  );
}

export default SideBar;
