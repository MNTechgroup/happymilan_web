import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import GeneralSection from './tabs/GeneralSection';
import HobbySection from './tabs/HobbySection';
import Image from 'next/image';

function index() {

    const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const options2 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    
    const router = useRouter();


    const customStyles = {
        control: (provided,state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft:"8px",
            width: "300px",
            height: "50px",
            borderRadius: "8px",
            border:"1px solid #e6e6e6",
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

    const TitleText = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
   
    const btnstyle = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [activeTab, setActiveTab] = useState(1);

    const HandleTabclick = () => {
        if(activeTab === 2)
        {
            setActiveTab(2)
        }
        else
        {
        setActiveTab(activeTab + 1)
        }
    }

    const [selectedGender, setSelectedGender] = useState("male");
    const HandleGendertab = (text) => {
        setSelectedGender(text)

    }

    const [selectedInterest,setSelectInterest] = useState("")
    const HandleInterestedrtab = (text) =>{
        setSelectInterest(text)
    }


//  Hobbies Section Data  <img


const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "normal",
  };
    
  

  const RenderTab = () =>{
    switch(activeTab)
    {
        case 1 : return <GeneralSection/>;
        case 2 : return <HobbySection/>;
        default : "";
    }
  }

  


    return (
        <>

            <Navbar />

          

            <div className='w-full h-full grid place-items-center pt-[100px]'>

                <div className='block lg:flex  2xl:gap-x-[70px] xl:gap-x-[0px]'>

                    <div className='lg:block hidden 2xl:mr-0 xl:mr-0 lg:ml-0 2xl:w-[400px] xl:w-[400px] lg:w-[300px] w-full  h-[600px] 2xl:ml-0 xl:ml-[100px] '>
                        <div className='fixed'>

                            <div className='pb-[17px]'>
                                <h1 className='text-[#000]' style={Text1}>Welcome to Happy Milan!</h1>
                            </div>
                            <Image width={0} height={0} style={{width:"auto",height:"auto"}} src='/assests/dating/Dating-register-1.svg' onClick={()=>router.push("/successstories/1")} className='cursor-pointer 2xl:h-auto xl:h-[300px]' />
                        </div>
                    </div>
                    <div className='lg:pb-0 2xl:pb-0 xl:pb-0 w-[300px] md:w-[700px] lg:w-[700px] h-screen '>
                        <div className='w-full h-full pt-[40px] ml-[10px]'>

                            <div className='flex gap-x-[20px]'>
                                <div
                                    onClick={() => HandleTabclick(1)}
                                    className={` rounded-[10px] w-[54px] h-[54px] grid place-items-center bg-[#0F52BA] ${activeTab === 2
                                        // activeTab === 3 ||
                                        // activeTab === 4 ||
                                        // activeTab === 5 ||
                                        // activeTab === 6
                                        ? "bg-green-500"
                                        : ""
                                         } 
                                        ${activeTab === 1 ? "bg-[#0F52BA]" : ""}`}
                                >
                                    <Image width={19} height={18} src="/loginassests/register-icons/profile-icon-white.svg" />
                                </div>

                                {/* Tab 2 */}

                                <div
                                    onClick={() => HandleTabclick(2)}
                                    className={` ${activeTab === 1 ? "bg-[#EAEAEA]" : ""} rounded-[10px] w-[54px] h-[54px] flex items-center justify-center 

                                         ${activeTab === 2 ? "bg-[#0F52BA]" : ""}`}
                                >
                                    {
                                        activeTab === 2 ||
                                            activeTab === 3 ||
                                            activeTab === 4 ||
                                            activeTab === 5 ||
                                            activeTab === 6 ?
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.08945 8.46256H4.47997C4.38767 7.6743 4.16965 6.92035 3.82591 6.20071C3.48219 5.48107 3.04737 4.86132 2.52145 4.34147C2.11579 4.92448 1.78208 5.56092 1.52034 6.2508C1.2586 6.94069 1.11497 7.67794 1.08945 8.46256ZM13.52 8.46256H16.9105C16.885 7.68401 16.7414 6.95131 16.4797 6.26447C16.2179 5.57762 15.8842 4.9427 15.4785 4.35971C14.8992 4.92691 14.451 5.55546 14.134 6.24535C13.817 6.93523 13.6123 7.6743 13.52 8.46256ZM2.52145 13.6257C3.08259 13.0585 3.52622 12.4324 3.85234 11.7474C4.17846 11.0623 4.38767 10.3257 4.47997 9.53744H1.08945C1.12103 10.3221 1.26618 11.0538 1.52489 11.7328C1.7836 12.4118 2.11579 13.0427 2.52145 13.6257ZM15.4785 13.6257C15.8842 13.0427 16.2179 12.4102 16.4797 11.7282C16.7414 11.0463 16.885 10.316 16.9105 9.53744H13.52C13.6123 10.3257 13.817 11.0623 14.134 11.7474C14.451 12.4324 14.8992 13.0585 15.4785 13.6257ZM5.56031 8.46256H8.46256V1.08945C7.4411 1.16962 6.48827 1.42073 5.60405 1.8428C4.71982 2.26487 3.93217 2.82874 3.24107 3.5344C3.89452 4.18177 4.42043 4.92874 4.8188 5.77531C5.21719 6.62187 5.46436 7.51762 5.56031 8.46256ZM9.53744 8.46256H12.4397C12.5356 7.51762 12.7837 6.62035 13.1839 5.77074C13.5841 4.92116 14.114 4.17571 14.7735 3.5344C14.0885 2.82874 13.2999 2.26487 12.4078 1.8428C11.5157 1.42073 10.5589 1.16962 9.53744 1.08945V8.46256ZM8.46256 16.9105V9.53744H5.56031C5.46436 10.4945 5.21871 11.3894 4.82337 12.222C4.42802 13.0546 3.90059 13.7915 3.24107 14.4328C3.93217 15.1385 4.70312 15.7078 5.55394 16.1408C6.40476 16.5738 7.3743 16.8304 8.46256 16.9105ZM9.53744 16.9105C10.6196 16.8304 11.5916 16.5768 12.4533 16.1499C13.3151 15.723 14.0885 15.1567 14.7735 14.451C14.114 13.8097 13.5841 13.0697 13.1839 12.2311C12.7837 11.3924 12.5356 10.4945 12.4397 9.53744H9.53744V16.9105ZM9 18C7.75627 18 6.58694 17.7635 5.492 17.2904C4.39706 16.8173 3.44454 16.1757 2.63442 15.3656C1.8243 14.5555 1.1827 13.6029 0.709628 12.508C0.236543 11.4131 0 10.2437 0 9C0 7.75628 0.236543 6.58694 0.709628 5.492C1.1827 4.39706 1.8243 3.44454 2.63442 2.63443C3.44454 1.8243 4.39706 1.1827 5.492 0.709629C6.58694 0.236544 7.75627 0 9 0C10.2437 0 11.4131 0.236544 12.508 0.709629C13.6029 1.1827 14.5555 1.8243 15.3656 2.63443C16.1757 3.44454 16.8173 4.39706 17.2904 5.492C17.7635 6.58694 18 7.75628 18 9C18 10.2437 17.7635 11.4131 17.2904 12.508C16.8173 13.6029 16.1757 14.5555 15.3656 15.3656C14.5555 16.1757 13.6029 16.8173 12.508 17.2904C11.4131 17.7635 10.2437 18 9 18Z" fill="white" />
                                            </svg> : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.08945 8.46256H4.47997C4.38767 7.6743 4.16965 6.92035 3.82591 6.20071C3.48219 5.48107 3.04737 4.86132 2.52145 4.34147C2.11579 4.92448 1.78208 5.56092 1.52034 6.2508C1.2586 6.94069 1.11497 7.67794 1.08945 8.46256ZM13.52 8.46256H16.9105C16.885 7.68401 16.7414 6.95131 16.4797 6.26447C16.2179 5.57762 15.8842 4.9427 15.4785 4.35971C14.8992 4.92691 14.451 5.55546 14.134 6.24535C13.817 6.93523 13.6123 7.6743 13.52 8.46256ZM2.52145 13.6257C3.08259 13.0585 3.52622 12.4324 3.85234 11.7474C4.17846 11.0623 4.38767 10.3257 4.47997 9.53744H1.08945C1.12103 10.3221 1.26618 11.0538 1.52489 11.7328C1.7836 12.4118 2.11579 13.0427 2.52145 13.6257ZM15.4785 13.6257C15.8842 13.0427 16.2179 12.4102 16.4797 11.7282C16.7414 11.0463 16.885 10.316 16.9105 9.53744H13.52C13.6123 10.3257 13.817 11.0623 14.134 11.7474C14.451 12.4324 14.8992 13.0585 15.4785 13.6257ZM5.56031 8.46256H8.46256V1.08945C7.4411 1.16962 6.48827 1.42073 5.60405 1.8428C4.71982 2.26487 3.93217 2.82874 3.24107 3.5344C3.89452 4.18177 4.42043 4.92874 4.8188 5.77531C5.21719 6.62187 5.46436 7.51762 5.56031 8.46256ZM9.53744 8.46256H12.4397C12.5356 7.51762 12.7837 6.62035 13.1839 5.77074C13.5841 4.92116 14.114 4.17571 14.7735 3.5344C14.0885 2.82874 13.2999 2.26487 12.4078 1.8428C11.5157 1.42073 10.5589 1.16962 9.53744 1.08945V8.46256ZM8.46256 16.9105V9.53744H5.56031C5.46436 10.4945 5.21871 11.3894 4.82337 12.222C4.42802 13.0546 3.90059 13.7915 3.24107 14.4328C3.93217 15.1385 4.70312 15.7078 5.55394 16.1408C6.40476 16.5738 7.3743 16.8304 8.46256 16.9105ZM9.53744 16.9105C10.6196 16.8304 11.5916 16.5768 12.4533 16.1499C13.3151 15.723 14.0885 15.1567 14.7735 14.451C14.114 13.8097 13.5841 13.0697 13.1839 12.2311C12.7837 11.3924 12.5356 10.4945 12.4397 9.53744H9.53744V16.9105ZM9 18C7.75627 18 6.58694 17.7635 5.492 17.2904C4.39706 16.8173 3.44454 16.1757 2.63442 15.3656C1.8243 14.5555 1.1827 13.6029 0.709628 12.508C0.236543 11.4131 0 10.2437 0 9C0 7.75628 0.236543 6.58694 0.709628 5.492C1.1827 4.39706 1.8243 3.44454 2.63442 2.63443C3.44454 1.8243 4.39706 1.1827 5.492 0.709629C6.58694 0.236544 7.75627 0 9 0C10.2437 0 11.4131 0.236544 12.508 0.709629C13.6029 1.1827 14.5555 1.8243 15.3656 2.63443C16.1757 3.44454 16.8173 4.39706 17.2904 5.492C17.7635 6.58694 18 7.75628 18 9C18 10.2437 17.7635 11.4131 17.2904 12.508C16.8173 13.6029 16.1757 14.5555 15.3656 15.3656C14.5555 16.1757 13.6029 16.8173 12.508 17.2904C11.4131 17.7635 10.2437 18 9 18Z" fill="black" />
                                            </svg>
                                    }
                                </div>
                            </div>
                            {/* <GeneralSection/> */}

                            <div className='2xl:ml-[5px] xl:ml-[5px]'>

                            {RenderTab()}

                            </div>

                        </div>
                    </div>

                </div>

{/* <img  */}

            </div>


            <div className=' w-full h-full grid place-items-center'>
                <div className='fixed bottom-0 flex justify-center bg-[#FFF] border-[1px] border-[#ECECEC] w-full 2xl:h-[100px] xl:h-[100px] lg:h-[80px] h-[80px]'>

                    <div className="m-5 flex justify-end lg:w-full 2xl:w-[1130px] xl:w-[1162px] md:w-full ">
                        <div className="flex lg:gap-5 ml-[5px]">
                            <button
                                style={btnstyle}
                                onClick={() => activeTab === 1 ? router.back() : setActiveTab(activeTab - 1)}
                                className="text-[#000]  relative lg:right-[8px] right-[14%] mr-[5%] lg:mr-0 border-[1px] border-[#000] rounded-[10px] w-[120px] sm:w-[120px] md:w-[120px] lg:w-[120px] h-[49px]"
                            >
                                Back
                            </button>
                            <button
                                style={btnstyle}
                                onClick={HandleTabclick}
                                className="text-[#FFF] bg-[#0F52BA] rounded-[10px] w-[130px] md:w-[100px]  relative right-[20px] lg:left-[0px]
                                               lg:w-[125px] h-[49px]"
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default index