// components/UIbuttons.js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const UIbuttons = {
    ExploreBTN: (props) => {
        const router = useRouter();

        const Text = {
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        }
        return (
            <button
                onClick={() => router.push("/successstories")}
                id='grad-button'
                style={{ width: "199px", height: "60px", borderRadius: "24px" }}
                className='text-[#FFF] mt-[10%] md:mt-[10%] lg:mt-[18.5%] 2xl:mt-[15.5%] xl:mt-[15.5%]'
            >
                <span style={Text}>Explore All Stories</span>
            </button>
        );
    },
    CreateNewProfileBTN: ({ Textstyle }) => {
        const router = useRouter();
        return (
            <button id='grad-button' style={{ width: "199px", height: "60px", borderRadius: "22px" }} onClick={() => router.push("/login")}>
                <span style={Textstyle} >Create New Profile</span>
            </button>
        )
    },
    GooglePlayBTN: () => {
        return (
            <Image quality={40} loading='lazy' alt='Google-Play' width={244} height={73} className='m-2 w-[244px] h-[73px]' src='/image-1@2x.png' />
        )
    },
    AppStoreBTN: () => {
        return (
            <Image quality={40} loading='lazy' alt='App-Store' width={244} height={74} className='m-2 w-[244px] h-[74px]' src='/image-2@2x.png' />
        )
    },
    SendCVBTN: ({BtnStyle}) => {
        return (
            <button id='grad-button' style={BtnStyle} className='w-[148px] h-[40px] rounded-[22px] text-[#FFF]'>Send you CV</button>

        )
    }
};

export default UIbuttons;
