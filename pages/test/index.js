import React, { useState } from 'react'
import Image from 'next/image';
import ProfileSelection from './comp/ProfileSelection';
import GenralSection from './comp/GenralSection';
import AddressSec from './comp/AddressSec';

function ProfilecreatePage() {

    const [ActiveTab, SetActiveTab] = useState(2)


    const RenderTab = () => {
        switch (ActiveTab) {
            case 0: return <ProfileSelection SetActiveTab={SetActiveTab} />
            case 1: return <GenralSection SetActiveTab={SetActiveTab} />
            case 2: return <AddressSec />
            default: return null
        }

    }

    return (
        <>
            <RenderTab />


            {ActiveTab > 0 ? <>
                <div className=' w-[full] float-right mr-[110px] mt-[-100px]'>
                    <ul className='w-[647px] flex justify-between'>
                        <li className='border-[1px] border-[red]'>
                            <button onClick={() => alert("1")} className='w-[97px] h-[44px] border-[1px] border-[#000] rounded-[22px]'>
                                Back
                            </button>
                        </li>
                        <li>
                            <button className='w-[153px] h-[44px] border-[1px] border-[#000] rounded-[22px]'>
                                Continue
                            </button>
                        </li>
                    </ul>
                </div>
            </> : ""}
        </>



    )
}

export default ProfilecreatePage