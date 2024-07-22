import { useRouter } from 'next/router'
import React from 'react'

function index() {
    
    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }


    const router = useRouter();


    return (
        <>

            <div className='w-full h-full grid place-items-center'>
                <div className='w-full h-full flex justify-center items-center mt-[100px]'>
                    <div className='grid place-items-center w-[896px] h-[490px] 2xl:w-[896px] 2xl:h-[490px] xl:w-[796px] xl:h-[390px] lg:w-[700px] lg:h-[300px] md:w-[600px] md:h-[300px] rounded-[8px] border-[1px] border-[#0F52BA]'>

                        <div className='space-y-[20px] '>
                            <div className='flex flex-col justify-center w-full items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M34.4036 20.7319C35.1876 20.7319 35.8641 20.4432 36.433 19.8659C37.0019 19.2886 37.2863 18.608 37.2863 17.824C37.2863 17.04 36.9977 16.3635 36.4204 15.7946C35.8431 15.2257 35.1625 14.9412 34.3785 14.9412C33.5944 14.9412 32.918 15.2299 32.3491 15.8072C31.7802 16.3845 31.4957 17.0651 31.4957 17.8491C31.4957 18.6331 31.7844 19.3096 32.3617 19.8785C32.9389 20.4474 33.6196 20.7319 34.4036 20.7319ZM15.6215 20.7319C16.4056 20.7319 17.082 20.4432 17.6509 19.8659C18.2198 19.2886 18.5043 18.608 18.5043 17.824C18.5043 17.04 18.2156 16.3635 17.6383 15.7946C17.0611 15.2257 16.3804 14.9412 15.5964 14.9412C14.8124 14.9412 14.1359 15.2299 13.567 15.8072C12.9981 16.3845 12.7137 17.0651 12.7137 17.8491C12.7137 18.6331 13.0023 19.3096 13.5796 19.8785C14.1569 20.4474 14.8375 20.7319 15.6215 20.7319ZM25 38.5524C27.6282 38.5524 30.049 37.8463 32.2623 36.4343C34.4756 35.0223 36.1432 33.1357 37.265 30.7746H12.735C13.8675 33.1357 15.5377 35.0223 17.7457 36.4343C19.9537 37.8463 22.3718 38.5524 25 38.5524ZM25.0093 50C21.5522 50 18.302 49.344 15.2586 48.032C12.2152 46.72 9.56789 44.9394 7.3166 42.6902C5.06535 40.441 3.2831 37.7962 1.96986 34.7557C0.65662 31.7151 0 28.4663 0 25.0093C0 21.5522 0.655996 18.302 1.96799 15.2586C3.28002 12.2152 5.06063 9.56789 7.30979 7.3166C9.55896 5.06535 12.2038 3.2831 15.2443 1.96986C18.2849 0.656622 21.5337 0 24.9907 0C28.4478 0 31.698 0.655995 34.7414 1.96799C37.7848 3.28002 40.4321 5.06062 42.6834 7.30979C44.9347 9.55896 46.7169 12.2038 48.0301 15.2443C49.3434 18.2849 50 21.5337 50 24.9907C50 28.4478 49.344 31.698 48.032 34.7414C46.72 37.7848 44.9394 40.4321 42.6902 42.6834C40.441 44.9347 37.7962 46.7169 34.7557 48.0301C31.7151 49.3434 28.4663 50 25.0093 50ZM24.9948 47.8633C31.376 47.8633 36.7828 45.6489 41.2149 41.2201C45.6472 36.7914 47.8633 31.3864 47.8633 25.0052C47.8633 18.624 45.6489 13.2172 41.2201 8.78507C36.7914 4.35285 31.3864 2.13673 25.0052 2.13673C18.624 2.13673 13.2172 4.35111 8.78507 8.77986C4.35285 13.2086 2.13674 18.6136 2.13674 24.9948C2.13674 31.376 4.35111 36.7828 8.77986 41.2149C13.2086 45.6472 18.6136 47.8633 24.9948 47.8633Z" fill="#0F52BA" />
                                </svg>
                            </div>
                            <div className='w-full text-center'>
                                <p style={Text2} className='text-[24px] 2xl:text-[34px] xl:text-[34px] lg:text-[25px] md:text-[22px]'>Congratulation <br /> Now reach to the millions</p>
                            </div>
                            <div>

                                <ul className='flex space-x-[20px] justify-center'>
                                    <li className='text-[#000]'>Your order ID #01132331</li>
                                    <li className='text-[#B7B7B7]'>  | </li>
                                    <li className='text-[#000]'>Upgraded On : 27 Jul, 2023</li>
                                </ul>
                            </div>
                            <div className='flex justify-center pt-[20px]'>
                                <button onClick={() => router.push("/longterm/dashboard")} className='w-[184px] h-[49px] 2xl:w-[184px] 2xl:h-[49px] xl:w-[184px] xl:h-[49px] lg:w-[180px] lg:h-[45px] bg-[#FFF] border-[1px] border-[#0F52BA] rounded-[22px] hover:bg-[#F2F7FF]'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index