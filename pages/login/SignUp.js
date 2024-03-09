import Image from "next/image";

function SignUp() {
    const TextStyle = {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const ContinueWith = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const BtnText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
 

    return (
        <>

            <div className="flex flex-col items-center justify-center 2xl:gap-y-[18px] xl:gap-y-[10px] gap-y-[8px]">
                

                    <div className='2xl:pt-[15px] pt-[10px] xl:pt-[17px] relative'>


                        <input
                            placeholder='First Name'
                            type='text'
                            className='outline-none focus:border-[1px] focus:border-[#000] pl-[50px] w-[300px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                        />

                        <Image width={20} height={20}
                            src='/assests/common/profile-icon.svg'
                            className='w-[20px] h-[20px] absolute left-4 2xl:top-[40px] xl:top-[36px] top-[35px] transform -translate-y-1/2'
                            alt='Email Icon'
                        />

                        <input
                            placeholder='Enter Your Email'
                            type='email'
                            className='outline-none focus:border-[1px] mt-[10px] focus:border-[#000] pl-[50px] w-[300px] h-[50px] 2xl:h-[50px] xl:h-[40px] rounded-[8px] bg-[#FFF] border-[1px] border-[#E6E6E6]'
                        />
                        <Image width={20} height={20}
                            src='/assests/Blue/Message.svg'
                            className='w-[20px] h-[20px] absolute left-4 2xl:top-[100px] xl:top-[85px] top-[35px] transform -translate-y-1/2'
                            alt='Email Icon'
                        />



                    </div>
                    <div className='w-[302px]'>
                        <h1 className='' style={TextStyle}>By signing up, I accept the Happy Milan <span className='text-[#0F52BA]'>Term of Services</span> and acknowledge the <span className='text-[#0F52BA]'>Privacy Policy</span></h1>
                    </div>
                    <div>
                        <button style={BtnText} className='w-[300px] h-[50px] 2xl:w-[300px] 2xl:h-[50px] xl:w-[300px] xl:h-[45px]  bg-[#0F52BA] rounded-[10px] text-[#FFF]'>Send Code <Image width={18} height={20} className='inline relative left-[60px]' src='/vector.svg' /></button>
                    </div>

                


                <div className='flex items-center justify-center'>

                    <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                    <div className='p-[12px]'>
                        <h1 className='text-[#000]' style={ContinueWith}>or continue with</h1>
                    </div>
                    <div className='w-[79px] h-[1px]  bg-[#EBEBEB]'> </div>
                </div>

                <div className='flex items-center justify-center gap-x-[30px]'>
                    <div className="xl:w-[40px] xl:h-[40px] 2xl:w-[50px] 2xl:h-[50px]">
                        <Image width={50} height={50} src='/assests/social/google-icon-btn.svg' />
                    </div>
                    <div className="xl:w-[40px] xl:h-[40px] 2xl:w-[50px] 2xl:h-[50px]">
                        <Image width={50} height={50} src='/assests/social/facebook-icon-btn.svg' />
                    </div>
                    <div className="xl:w-[40px] h-[30px] xl:h-[40px] h-[50px] w-[50px] 2xl:w-[50px] 2xl:h-[50px]">
                            <div  className="2xl:w-[50px]  h-[50px] w-[50px] 2xl:h-[50px] xl:w-[40px] xl:h-[40px] border-[1px] rounded-[50px] border-[#D4D4D4] grid place-items-center">


                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5714 20C16.6017 20 14.5238 19.4589 12.3377 18.3766C10.1515 17.2944 8.08983 15.7792 6.1526 13.8312C4.21537 11.8831 2.70563 9.82143 1.62338 7.6461C0.541126 5.47078 0 3.39827 0 1.42857C0 1.02041 0.132965 0.68027 0.398896 0.408149C0.664805 0.136049 0.997208 0 1.3961 0H3.75737C4.15289 0 4.48052 0.113636 4.74026 0.340909C5 0.568182 5.18398 0.876623 5.29221 1.26623L5.90679 3.78705C5.95161 4.14114 5.93074 4.45887 5.84416 4.74026C5.75758 5.02165 5.6144 5.25136 5.41464 5.42942L2.62987 7.95455C3.23593 9.01515 3.87446 9.98918 4.54545 10.8766C5.21645 11.7641 5.91991 12.5866 6.65584 13.3442C7.47835 14.1883 8.3658 14.9567 9.31818 15.6494C10.2706 16.342 11.3203 17.0022 12.4675 17.6299L15.1948 14.8377C15.4113 14.5996 15.6403 14.4426 15.8819 14.3669C16.1235 14.2911 16.4032 14.2749 16.7208 14.3182L18.7338 14.7727C19.1234 14.8377 19.4318 15.0175 19.6591 15.3123C19.8864 15.607 20 15.9466 20 16.3312V18.6039C20 19.0028 19.864 19.3352 19.5919 19.6011C19.3197 19.867 18.9796 20 18.5714 20ZM2.27273 7.33766L5.03247 4.83766C5.11905 4.75108 5.17857 4.63203 5.21104 4.48052C5.24351 4.329 5.24892 4.18831 5.22727 4.05844L4.57792 1.23377C4.55628 1.06061 4.48593 0.930736 4.36688 0.844156C4.24784 0.757576 4.10173 0.714286 3.92857 0.714286H1.16883C1.03896 0.714286 0.930736 0.757576 0.844156 0.844156C0.757576 0.930736 0.714286 1.03896 0.714286 1.16883C0.692641 2.05628 0.822511 3.01948 1.1039 4.05844C1.38528 5.0974 1.77489 6.19048 2.27273 7.33766ZM13.1818 17.9545C14.0693 18.4307 15.0541 18.7771 16.1364 18.9935C17.2186 19.21 18.1169 19.3182 18.8312 19.3182C18.961 19.3182 19.0693 19.2749 19.1558 19.1883C19.2424 19.1017 19.2857 18.9935 19.2857 18.8636V16.1364C19.2857 15.9632 19.2424 15.8171 19.1558 15.6981C19.0693 15.579 18.9394 15.5087 18.7662 15.487L16.461 15C16.3312 14.9784 16.2175 14.9838 16.1201 15.0162C16.0227 15.0487 15.9199 15.1082 15.8117 15.1948L13.1818 17.9545Z" fill="#0F52BA" />
                                </svg>

                            </div>
                            
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp;