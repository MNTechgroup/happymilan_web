import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoutes from '../../../routes/ProtectedRoutes';
import dynamic from 'next/dynamic';
import { getCookie } from 'cookies-next';
import NavBar from '../../../_components/layout/Navbar';
import { capitalizeFirstLetter } from '../../../../utils/form/Captitelize';
import { useDispatch } from 'react-redux';
import { getPlansByID } from '../../../../store/actions/UpgradeAction';
import BodySection from './comp/BodySection';
import useUserActivity from '../../../../utils/hooks/UserActivity';

const PricingBox = dynamic(() => import('./comp/PricingBox'));
const PricingBox2 = dynamic(() => import('./comp/PricingBox2'));

const PricingPage = () => {

    useUserActivity();
    
    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "520",
        lineHeight: "normal",
    }


    const [currentTab, setCurrentTab] = useState(1);
    const [userName, setUserName] = useState('User');
    const router = useRouter();

    useEffect(() => {
        const name = getCookie('userName');
        if (name) setUserName(name);
    }, []);

    const dispatch = useDispatch();

    const handleCheckout = async (e) => {
        console.log("<== E ==>", e)
        // console.log("<== RES ==>",res)
        if (e?.planId) {
            dispatch(getPlansByID(e?.planId))
            router.push(`/longterm/dashboard/upgrade/${e?.planId}`);
        }
    };

    const data = [
        {
            label: 'Silver',
            value: 'dashboard',
            desc: <PricingBox handleCheckout={handleCheckout} />,
        },
        {
            label: 'Gold',
            value: 'profile',
            desc: <PricingBox />,
        },
        {
            label: 'Platinum',
            value: 'settings',
            desc: <PricingBox />,
        },
    ];

    const handleSearch = (searchTerm) => {
        // Implement search functionality z-
    };

    return (
        <>
            <ProtectedRoutes />
            <NavBar handleSearch={handleSearch} />
            <div id="PriceBox">
                <button
                    onClick={() => router.back()}
                    className="absolute bottom-10 right-10 top-24 cursor-pointer border-[1px] border-[#8225AF] rounded-[23px] hover:bg-[#F3F8FF] w-[95px] h-[27px]"
                >
                    <span className="text-[12px]">I’ll do it later</span>
                </button>
                <div className="grid place-items-center w-full h-full">
                    <div className="text-center bg-[#FFF]">
                        <div className="flex flex-col justify-center items-center relative top-[90px] w-full h-full">
                            <div className="flex justify-between">
                                <h1 style={Title} className="2xl:text-[20px] xl:text-[18px] text-[#000]">
                                    Hi {capitalizeFirstLetter(userName)}, Upgrade Your Profile
                                </h1>
                            </div>
                            <div className="pt-[40px]">
                                <div className="flex justify-center">
                                    <div className="bg-[#F5FAFF] rounded-[25px] w-[387px] lg:h-[30px] xl:h-[40px] 2xl:h-[50px]">
                                        <div className="flex justify-between items-center">
                                            {data.map((tab, index) => (
                                                <div
                                                    key={index}
                                                    id={currentTab === index + 1 ? "grad-button" : ""}
                                                    onClick={() => setCurrentTab(index + 1)}
                                                    className={`cursor-pointer flex items-center justify-center rounded-[25px] w-[131px] 2xl:h-[50px] xl:h-[40px] lg:h-[35px] text-black`}
                                                >
                                                    {tab.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div id="pricing-box" className="mt-[40px]">
                                    {data[currentTab - 1].desc}
                                </div>
                            </div>
                        </div>
                    </div>


                    <BodySection />
                </div>


            </div>

            <div id="PriceBox2" className="pt-[50px]">
                <PricingBox2 />
            </div>
        </>
    );
};

export default PricingPage;
