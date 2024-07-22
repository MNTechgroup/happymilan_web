import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function UpgradeButton({ IconSize, BtnSizeH, BtnSizeW }) {

    const router = useRouter()
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        height: BtnSizeH,
        width: BtnSizeW
    }
    return (
        <>
            <button id="grad-btn" onClick={() => router.push("/longterm/dashboard/upgrade")} style={Text2} className={`hover:opacity-90 text-[#FFF] mr-[2px] text-center flex items-center justify-center w-[${BtnSizeW}px] h-[${BtnSizeH}px] bg-[#0F52BA] rounded-[22px]`}>Upgrade<Image loading='lazy' alt="img" width={IconSize} height={IconSize} className="pl-[5px]" src="/assests/dashboard/icon/crown-icon.svg" /></button>
        </>
    )
}

export default UpgradeButton