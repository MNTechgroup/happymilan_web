import React from 'react'

function PrivacyOptions() {
    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const Text2 = {
        color: "#AAA",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    return (
        <>

            <div className='mt-[21px]'>
                <div>
                    <p style={Title}>Select Profile Privacy Option</p>
                </div>
                <div className='mt-[26px]'>
                    <ul className='space-y-[26px]'>
                        <li className='flex '>
                            <input
                                className="mt-[3px] w-[16px] xl:w-[16px] h-[16px] xl:h-[16px]"
                                type="radio"
                                id={"privateprofile"}
                                name="os"
                                value={"privateprofile"}
                                defaultChecked
                            />
                            <div className='flex flex-col'>
                                <label
                                    htmlFor={"privateprofile"}
                                    style={Text}
                                    className="ml-[10px] text-[13px] xl:text-[14px]"
                                > Private Profile
                                </label>
                                <label className='ml-[10px] text-[13px] xl:text-[14px]' style={Text2}>Only Full Name will be visible</label>
                            </div>
                        </li>
                        <li className='flex '>
                            <input
                                className="mt-[3px] w-[16px] xl:w-[16px] h-[16px] xl:h-[16px]"
                                type="radio"
                                id={"PremiumMembersOnly"}
                                name="os"
                                value={"PremiumMembersOnly"}

                            />
                            <div className='flex flex-col'>
                                <label
                                    htmlFor={"PremiumMembersOnly"}
                                    style={Text}
                                    className="ml-[10px] text-[13px] xl:text-[14px]"
                                > Visible to Premium Members Only
                                </label>
                                <label className='ml-[10px] text-[13px] xl:text-[14px]' style={Text2}>Full Name, Photo Gallery, Contact, Address will be hidden to unregistered members.</label>
                            </div>
                        </li>
                        <li className='flex '>
                            <input
                                className="mt-[3px] w-[16px] xl:w-[16px] h-[16px] xl:h-[16px]"
                                type="radio"
                                id={"OnlyAcceptedMembers"}
                                name="os"
                                value={"OnlyAcceptedMembers"}

                            />
                            <div className='flex flex-col'>
                                <label
                                    htmlFor={"OnlyAcceptedMembers"}
                                    style={Text}
                                    className="ml-[10px] text-[13px] xl:text-[14px]"
                                >Only Accepted Members
                                </label>
                                <label className='ml-[10px] text-[13px] xl:text-[14px]' style={Text2}>Full Name and Photos will be visible and contact, address will not be visible</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default PrivacyOptions