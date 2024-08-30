"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Navbar from "../../_components/layout/AuthNavbar";
import Image from "next/image";
import { updateFormData } from "../../../store/actions/registerUser";
import { connect } from "react-redux";
import { getCookie } from "cookies-next";

const profileOptions = [
    {
        id: 1,
        type: "marriage",
        title: "Long Term",
        description: "By creating this profile, you can find compatible partners for marriage and lifelong companionship.",
        defaultImg: "/assests/login/long-term.svg",
        hoverImg: "/assests/login/long-term-white.svg",
    },
    {
        id: 2,
        type: "dating",
        title: "Date",
        description: "By creating this profile, you can discover profiles for casual relationships.",
        defaultImg: "/assests/login/date.svg",
        hoverImg: "/assests/login/dating-white.svg",
    },
    {
        id: 3,
        type: "friendship",
        title: "Friendship",
        description: "By creating this profile, you can find friends and connect with groups for trips and activities.",
        defaultImg: "/assests/login/date.svg",
        hoverImg: "/assests/login/dating-white.svg",
    },
];

function Comp({ formData, updateFormData }) {

    const router = useRouter();
    const [activebtn, setActivebtn] = useState(0);
    const [hover, setHover] = useState(null);

    const Token = getCookie("authtoken")

    useEffect(() => {
        if (!Token) {
            router.push('/login')
        }
    }, [router])

    const handleSubmit = () => {
        if (activebtn === 0) return;

        const selectedOption = profileOptions.find(option => option.id === activebtn);
        const { type } = selectedOption;

        updateFormData({
            ...formData,
            userType: {
                ...formData.userType,
                appUsesType: type,
            },
        });

        localStorage.setItem("UserProfile", type);
        localStorage.setItem("UserRegister", true);
        localStorage.setItem("platform-choose", false);

        if (type === "marriage") {
            router.push("/longterm/dashboard");
        } else {
            router.push("/dating");
        }
    };

    const TitleText = {

        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const Text = {

        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Text2 = {

        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    return (
        <>
            <Navbar />
            <div className="space-y-[50px] w-full h-full grid place-items-center pt-[130px]">
                <div>
                    <h1 style={TitleText} className="text-center font-poppins text-[34px] font-medium">I want to create a profile for</h1>
                </div>
                <div>
                    <ul className="flex space-x-[27px]">
                        {profileOptions.map((option) => (
                            <li
                                key={option.id}
                                onClick={() => setActivebtn(option.id)}
                                onMouseEnter={() => setHover(option.id)}
                                onMouseLeave={() => setHover(null)}
                                className={`${activebtn === option.id ? "bg-custom-gradient" : ""} cursor-pointer duration-150 group hover:bg-custom-gradient w-[230px] h-[230px] rounded-[20px] border-[1px] border-[#8225AF]`}
                            >
                                <div className="flex flex-col justify-evenly items-center h-full w-full text-center">
                                    <div>
                                        <Image
                                            width={45}
                                            height={45}
                                            alt={option.title}
                                            src={hover === option.id || activebtn === option.id ? option.hoverImg : option.defaultImg}
                                        />
                                    </div>
                                    <div>
                                        <h1 style={Text} className={`select-none ${activebtn === option.id ? "text-[#FFF]" : "group-hover:text-[#FFF] text-[#000]"}`}>
                                            {option.title}
                                        </h1>
                                    </div>
                                    <div style={Text2} className="w-[180px]">
                                        <p className={`select-none ${activebtn === option.id ? "text-[#FFF]" : "group-hover:text-[#FFF] text-[#000]"}`}>
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pt-[50px] w-full text-center">
                    {activebtn > 0 && (
                        <button
                            onClick={handleSubmit}
                            className="text-[#FFF] rounded-[20px] w-[147px] h-[50px] bg-custom-gradient"
                        >
                            Start Explore
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(Comp);