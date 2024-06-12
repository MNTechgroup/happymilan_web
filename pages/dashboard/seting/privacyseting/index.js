import React, { useEffect } from "react";
import NavBar from "../../NavBar";
import SideBar from "../comp/Sidebar";
import { useDispatch } from "react-redux";
import { Getprivacyquestions } from "../../../../store/actions/UserSettingAction";
import dynamic from "next/dynamic";
const BackButton = dynamic(() => import("../comp/BackButton"));
const PrivacySeting = dynamic(() => import("./comp/PrivacySeting"));
const Sidebar2 = dynamic(() => import("../comp/Sidebar2"));


function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getprivacyquestions())
  }, [])

  const handleSearch = (searchTerm) => { }

  return (
    <>

      <SideBar />
      <div className='w-full h-full grid place-items-center'>

        <div className='hidden md:block w-[90%] mt-[120px] '>

          <h1 className='fixed left-10 text-[16px] text-[#716969] font-medium'>Account Setting</h1>
          <div className='fixed right-10'>
            <BackButton />
          </div>
          <div className='flex mt-[20px]'>

            <div className='fixed w-[1px] ml-[20%] lg:ml-[18%] xl:ml-[250px] mt-[-17px] h-[185px] bg-[#ECECEC]'></div>


            <main className=' absolute ml-[25%] lg:ml-[23%] xl:ml-[330px]'><PrivacySeting /></main>
          </div>
        </div>

        <div className='block md:hidden w-[90% mt-[120px]'>
          <Sidebar2 />
        </div>

      </div>

    </>
  );
}

export default index;
