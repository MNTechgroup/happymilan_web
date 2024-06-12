import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateMessageConsentStatus } from '../../../store/actions/safetyConsentActions'
import { getCookie } from 'cookies-next'
import { UserContext } from '../../../ContextProvider/UsersConversationContext'

function Safetytips({ UserDetails }) {

    const Title = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const TipsText = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const [Tab, SetTab] = useState(0)

    const SafetyCheck = useSelector((state) => state.chatSafetyConsent.safetyConsent)
    
    const { userData, updateUser } = useContext(UserContext);

    const dispatch = useDispatch()
    const currentUser = getCookie("userid")
    const HandleNext = () => {
        // SetTab(Tab+1)
        if (Tab >= 2) {
            SetTab(0)
            const data = {
                senderId: currentUser,
                receiverId: userData.id,
                primaryConsent: true
            }

            console.log("Dispatch callleddddd..")
            dispatch(UpdateMessageConsentStatus(data))
        } else {
            SetTab(Tab + 1)
        }
    }

    const RenderTabContent = () => {
        switch (Tab) {
            case 0: return ("Do not share your mobile number, personal details, bank detail or address until trust has been established.");
            case 1: return ("Avoid meeting at unknown places. If you choose to go, inform a trusted person about your plans.");
            case 2: return ("Share your live location with your parents for easy tracking during difficult times.");
        }
    }
    return (
        <>
            <div className='w-full h-full grid place-items-center '>
                <div className='2xl:w-[333px] 2xl:h-[272px] xl:w-[300px] xl:h-[200px] lg:w-[300px] lg:h-[200px] w-[333px] h-[272px]  rounded-[14px] border-[1px] border-[#E5BDF8] bg-[#FAF0FF]'>
                    <div className='w-full h-full flex flex-col items-center space-y-[31px]' id='Tips-content'>
                        <div className='mt-[25px]'>
                            <ul className='flex space-x-[9px]'>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path d="M7.66667 0H7V3H7.66667V0Z" fill="black" />
                                        <path d="M3.9328 0.799967L3.35547 1.1333L4.85547 3.7313L5.4328 3.39797L3.9328 0.799967Z" fill="black" />
                                        <path d="M1.15755 3.38678L0.824219 3.96411L3.42222 5.46411L3.75555 4.88678L1.15755 3.38678Z" fill="black" />
                                        <path d="M3 7H0V7.66667H3V7Z" fill="black" />
                                        <path d="M3.39908 9.23278L0.800781 10.7322L1.13398 11.3096L3.73228 9.81018L3.39908 9.23278Z" fill="black" />
                                        <path d="M11.2435 9.20489L10.9102 9.78223L13.5082 11.2822L13.8415 10.7049L11.2435 9.20489Z" fill="black" />
                                        <path d="M14.668 7H11.668V7.66667H14.668V7Z" fill="black" />
                                        <path d="M13.4925 3.35962L10.8945 4.85962L11.2279 5.43695L13.8259 3.93695L13.4925 3.35962Z" fill="black" />
                                        <path d="M10.7064 0.824552L9.20703 3.42285L9.78443 3.75605L11.2838 1.15775L10.7064 0.824552Z" fill="black" />
                                        <path d="M8.1 15.1L7.86667 15.3333H6.8L6.56667 15.1C6.5 15.0333 6.43333 15 6.33333 15H6V15.6667H6.2L6.43333 15.9C6.5 15.9667 6.56667 16 6.66667 16H8C8.1 16 8.16667 15.9667 8.23333 15.9L8.46667 15.6667H8.66667V15H8.33333C8.23333 15 8.16667 15.0333 8.1 15.1Z" fill="black" />
                                        <path d="M9.33203 12.3335H5.33203V13.0002H9.33203V12.3335Z" fill="black" />
                                        <path d="M9.33203 13.6665H5.33203V14.3332H9.33203V13.6665Z" fill="black" />
                                        <path d="M7.33464 3.6665C5.3013 3.6665 3.66797 5.29984 3.66797 7.33317C3.66797 8.33317 4.06797 9.29984 4.8013 9.99984C5.13464 10.3665 5.33464 10.8332 5.33464 11.3332V11.6665H6.0013V11.3332C6.0013 10.6665 5.76797 9.99984 5.26797 9.49984C4.66797 8.93317 4.33464 8.1665 4.33464 7.33317C4.33464 5.6665 5.66797 4.33317 7.33464 4.33317C9.0013 4.33317 10.3346 5.6665 10.3346 7.33317C10.3346 8.1665 10.0013 8.93317 9.4013 9.49984C8.9013 9.99984 8.66797 10.6665 8.66797 11.3332V11.6665H9.33464V11.3332C9.33464 10.8332 9.53464 10.3665 9.86797 9.99984C10.6013 9.29984 11.0013 8.33317 11.0013 7.33317C11.0013 5.29984 9.36797 3.6665 7.33464 3.6665Z" fill="black" />
                                        <path d="M6.99961 11.6668H7.66628V9.46676L8.56628 8.56676L8.09961 8.1001L7.33294 8.86676L6.56628 8.1001L6.09961 8.56676L6.99961 9.46676V11.6668Z" fill="black" />
                                        <path d="M7.66667 5.33333C7.66667 5.13333 7.53333 5 7.33333 5C6.03333 5 5 6.03333 5 7.33333C5 7.53333 5.13333 7.66667 5.33333 7.66667C5.53333 7.66667 5.66667 7.53333 5.66667 7.33333C5.66667 6.4 6.4 5.66667 7.33333 5.66667C7.53333 5.66667 7.66667 5.53333 7.66667 5.33333Z" fill="black" />
                                    </svg>
                                </li>
                                <li style={Title}>Safety Tips</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='w-[279px]' style={TipsText}>
                                    {RenderTabContent()}
                                    {/* Do not share your mobile number, personal details, bank detail or address until trust has been established. */}
                                </li>
                            </ul>
                        </div>
                        <div className='flex space-x-[9px]'>
                            {
                                [0, 1, 2].map((res) => {
                                    return (
                                        <>
                                            <div className={`rounded-[50%] w-[10px] h-[10px] bg-[#8225AF] ${Tab == res ? "" : "opacity-[0.1]"}`}></div>
                                        </>)
                                })
                            }

                        </div>
                        <div>
                            <button className={`${Tab >= 2 ? "w-[147px]" : "w-[73px]"} h-[34px] bg-[#0F52BA] rounded-[23px] text-[#FFF]`} onClick={HandleNext}>

                                {SafetyCheck?.loading ? "Loading.." : Tab >= 2 ? "I agree, start chat" : "Next"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Safetytips