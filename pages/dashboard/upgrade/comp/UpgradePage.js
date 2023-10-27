import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


function UpgradePage() {
    const Text4 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }


    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "400px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #e6e6e6",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };

    const [SelectdOption, setSelectdOption] = useState("")

    const router = useRouter();

    const [paymentDone, setpaymentDone] = useState(false)
    const [Animate,setAnimate] = useState(true)

    useEffect(() => {
        // Use setTimeout to make the animation visible for 5 seconds
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    
        // Clean up the timer when the component unmounts
        return () => clearTimeout(timeout);
      }, []);


    if (paymentDone) {

        
        return (
            <>
                <div className='w-full h-full flex justify-center items-center mt-[100px]'>
                    <div className='grid place-items-center w-[896px] h-[490px] 2xl:w-[896px] 2xl:h-[490px] xl:w-[796px] xl:h-[390px] rounded-[8px] border-[1px] border-[#0F52BA]'>
                        
                        {Animate ? <>
                        
                        <img src='/assests/dashboard/menu/payment-done.gif' />

                        </> : <>

                        
                        
                        <div className='space-y-[20px] '>
                            <div className='flex flex-col justify-center w-full items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M34.4036 20.7319C35.1876 20.7319 35.8641 20.4432 36.433 19.8659C37.0019 19.2886 37.2863 18.608 37.2863 17.824C37.2863 17.04 36.9977 16.3635 36.4204 15.7946C35.8431 15.2257 35.1625 14.9412 34.3785 14.9412C33.5944 14.9412 32.918 15.2299 32.3491 15.8072C31.7802 16.3845 31.4957 17.0651 31.4957 17.8491C31.4957 18.6331 31.7844 19.3096 32.3617 19.8785C32.9389 20.4474 33.6196 20.7319 34.4036 20.7319ZM15.6215 20.7319C16.4056 20.7319 17.082 20.4432 17.6509 19.8659C18.2198 19.2886 18.5043 18.608 18.5043 17.824C18.5043 17.04 18.2156 16.3635 17.6383 15.7946C17.0611 15.2257 16.3804 14.9412 15.5964 14.9412C14.8124 14.9412 14.1359 15.2299 13.567 15.8072C12.9981 16.3845 12.7137 17.0651 12.7137 17.8491C12.7137 18.6331 13.0023 19.3096 13.5796 19.8785C14.1569 20.4474 14.8375 20.7319 15.6215 20.7319ZM25 38.5524C27.6282 38.5524 30.049 37.8463 32.2623 36.4343C34.4756 35.0223 36.1432 33.1357 37.265 30.7746H12.735C13.8675 33.1357 15.5377 35.0223 17.7457 36.4343C19.9537 37.8463 22.3718 38.5524 25 38.5524ZM25.0093 50C21.5522 50 18.302 49.344 15.2586 48.032C12.2152 46.72 9.56789 44.9394 7.3166 42.6902C5.06535 40.441 3.2831 37.7962 1.96986 34.7557C0.65662 31.7151 0 28.4663 0 25.0093C0 21.5522 0.655996 18.302 1.96799 15.2586C3.28002 12.2152 5.06063 9.56789 7.30979 7.3166C9.55896 5.06535 12.2038 3.2831 15.2443 1.96986C18.2849 0.656622 21.5337 0 24.9907 0C28.4478 0 31.698 0.655995 34.7414 1.96799C37.7848 3.28002 40.4321 5.06062 42.6834 7.30979C44.9347 9.55896 46.7169 12.2038 48.0301 15.2443C49.3434 18.2849 50 21.5337 50 24.9907C50 28.4478 49.344 31.698 48.032 34.7414C46.72 37.7848 44.9394 40.4321 42.6902 42.6834C40.441 44.9347 37.7962 46.7169 34.7557 48.0301C31.7151 49.3434 28.4663 50 25.0093 50ZM24.9948 47.8633C31.376 47.8633 36.7828 45.6489 41.2149 41.2201C45.6472 36.7914 47.8633 31.3864 47.8633 25.0052C47.8633 18.624 45.6489 13.2172 41.2201 8.78507C36.7914 4.35285 31.3864 2.13673 25.0052 2.13673C18.624 2.13673 13.2172 4.35111 8.78507 8.77986C4.35285 13.2086 2.13674 18.6136 2.13674 24.9948C2.13674 31.376 4.35111 36.7828 8.77986 41.2149C13.2086 45.6472 18.6136 47.8633 24.9948 47.8633Z" fill="#0F52BA" />
                                </svg>
                            </div>
                            <div className='w-full text-center'>
                                <p style={Text2} className='text-[34px]'>Congratulation <br/> Now reach to the millions</p>
                            </div>
                            <div>

                                <ul className='flex space-x-[20px] justify-center'>
                                <li className='text-[#000]'>Your order ID #01132331</li>
                                <li className='text-[#B7B7B7]'>  | </li>  
                                <li className='text-[#000]'>Upgraded On : 27 Jul, 2023</li>
                                </ul>
                            </div>
                            <div className='flex justify-center pt-[20px]'>
                                <button onClick={()=>router.push("/dashboard")} className='w-[184px] h-[49px] bg-[#FFF] border-[1px] border-[#0F52BA] rounded-[10px]'>Send Message</button>
                            </div>
                        </div>
                        </>}
                    </div>
                    
                </div>

            </>
        )
    }

    return (
        <>

            <div className='w-full h-[500px]  mt-[90px] '>

                <div className='text-center'>
                    <h1 style={Text4} className='text-[20px] text-[#000]'>One step away to reach millions</h1>
                </div>
                <div className='flex space-x-[96px] pt-[30px] space-y-[45px] justify-center'>

                    <div className='w-[398px] space-y-[20px]'>

                        <div>
                            <ul style={Text1} className='w-[398px] flex items-center space-x-[20px]'>
                                <li className='space-x-[10px] flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M7.6725 13.095L14.04 6.7275L13.005 5.715L7.6725 11.0475L4.9725 8.3475L3.96 9.36L7.6725 13.095ZM9 18C7.77 18 6.6075 17.7638 5.5125 17.2913C4.4175 16.8188 3.46125 16.1737 2.64375 15.3563C1.82625 14.5388 1.18125 13.5825 0.70875 12.4875C0.23625 11.3925 0 10.23 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.82625 3.4425 2.64375 2.6325C3.46125 1.8225 4.4175 1.18125 5.5125 0.70875C6.6075 0.23625 7.77 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8188 4.395 17.2913 5.49C17.7638 6.585 18 7.755 18 9C18 10.23 17.7638 11.3925 17.2913 12.4875C16.8188 13.5825 16.1775 14.5388 15.3675 15.3563C14.5575 16.1737 13.605 16.8188 12.51 17.2913C11.415 17.7638 10.245 18 9 18ZM9 16.65C11.13 16.65 12.9375 15.9038 14.4225 14.4113C15.9075 12.9188 16.65 11.115 16.65 9C16.65 6.87 15.9075 5.0625 14.4225 3.5775C12.9375 2.0925 11.13 1.35 9 1.35C6.885 1.35 5.08125 2.0925 3.58875 3.5775C2.09625 5.0625 1.35 6.87 1.35 9C1.35 11.115 2.09625 12.9188 3.58875 14.4113C5.08125 15.9038 6.885 16.65 9 16.65Z" fill="#17C270" />
                                    </svg>
                                    <h1 className='text-[#17C270]'>Payment</h1>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z" fill="#E1E1E1" />
                                </svg>
                                </li>
                                <li className='text-[#828282]'>Billing Info</li>
                            </ul>
                        </div>

                        <div>
                            <p style={Text1} className='text-[12px]'>
                                Once added, this card will be charged for all active campaigns, but you can change it at any time from your billing settings.
                            </p>
                        </div>

                        <div className='space-y-[10px]'>
                            <div className=''>
                                <DynamicSelect

                                    value={SelectdOption}
                                    onChange={setSelectdOption}
                                    className="h-[50px] w-[400px] flex justify-end"
                                    styles={customStyles}
                                    options={options}
                                />
                            </div>
                            <div>
                                <input type='text' className='pl-[18px] rounded-[10px] w-[400px] border-[1px] outline-none focus:outline-none focus:border-[1px] focus:border-[black] border-[#e6e6e6] h-[50px]' placeholder='Full Name' />
                            </div>
                            <div>
                                <input type='text' className='pl-[18px] rounded-[10px] w-[400px] border-[1px] outline-none focus:outline-none focus:border-[1px] focus:border-[black] border-[#e6e6e6] h-[50px]' placeholder='Card number' />
                            </div>
                            <div className='space-x-[14px]'>
                                <input type='text' className='pl-[18px] rounded-[10px] w-[192px] border-[1px] outline-none focus:outline-none focus:border-[1px] focus:border-[black] border-[#e6e6e6] h-[50px]' placeholder='Expiration date' />
                                <input type='text' className='pl-[18px] rounded-[10px] w-[192px] border-[1px] outline-none focus:outline-none focus:border-[1px] focus:border-[black] border-[#e6e6e6] h-[50px]' placeholder='Security code' />
                            </div>
                            <div className='flex relative left-[4px]'>
                                <input type='checkbox' /> <span style={Text1} className='pl-[15px] text-[16px]'>Save my details</span>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-[20px]  w-[400px] h-[462px] border-[1px] rounded-[10px] border-[#E4E4E4]'>

                        <h1 style={Text1} className='mt-[10px] text-[14px] pl-[30px] pt-[10px]'>Selected Plan </h1>


                        <div className='pl-[30px] flex justify-between w-[340px]'>

                            <div className='relative left-[10px]'>
                                <h1 style={Text1} className='text-[16px] relative right-[14px] flex'><img className='pr-[10px]' src='/assests/dashboard/menu/verified-mark2.svg' /> Gold : <span style={Text3} className=' text-[16px]'>One Month</span></h1>
                                <p onClick={() => router.back()} style={Text1} className='text-[12px] cursor-pointer relative left-[10px] text-[#0F52BA] flex'>Change Plan <img className='pl-[10px]' src='/assests/dashboard/menu/arrow-upgrade.svg' /></p>
                            </div>
                            <div className='relative left-[30px] text-right'>
                                <h1 style={Text1} className='text-[16px]'>INR 599.00</h1>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='w-[340px] h-[1px] bg-[#E4E4E4]'></div>
                        </div>
                        <div className='pl-[30px]'>
                            <h1 style={Text1} className='text-[#7C7C7C]'>Benefits You’ll Received</h1>
                        </div>

                        <div className='pl-[30px]'>
                            <div className='flex items-center space-x-[20px] space-y-[10px] text-left'>
                                <img className='w-[14px] h-[14px] relative top-[4px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Message to <span className='text-[#0F52BA]'>10 Profiles</span></h1>

                            </div>
                            <div className='flex items-center space-x-[20px] space-y-[10px] text-left'>
                                <img className='w-[14px] h-[14px] relative top-[4px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]' >Send request to <span className='text-[#0F52BA]'>10 Profiles</span></h1>

                            </div>
                            <div className='flex items-center space-x-[20px] space-y-[10px] text-left'>
                                <img className='w-[14px] h-[14px] relative top-[4px]' src="/assests/dashboard/menu/verfied-tick.svg" />
                                <h1 style={Text4} className='w-[185px] text-[black] 2xl:text-[14px] xl:text-[12px]'>Online Support</h1>


                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='w-[340px] h-[1px] bg-[#E4E4E4]'></div>
                        </div>

                        <div className='pl-[30px] flex justify-between w-[340px]'>

                            <div>
                                <h1 style={Text1} className='text-[16px]'>You’ll Pay Only</h1>
                            </div>
                            <div className='relative left-[25px] text-right'>
                                <h1 style={Text2} className='text-[16px]'>INR 599.00</h1>
                                <p style={Text1} className='text-[10px]'>Included All taxes (18% GST)</p>
                            </div>
                        </div>

                        <div className='text-center pt-[10px]'>
                            <button className='w-[340px] h-[44px] rounded-[10px] text-[16px] text-[#FFF] bg-[#0F52BA]' onClick={() => setpaymentDone(true)} style={Text1}>Confirm Payment</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default UpgradePage