import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Image from "next/image";

function index() {
  const router = useRouter();
  const imgdata = [
    {
      id: 1,
      img: "/assests/stories/stories-1.svg",
      username: "Riya & Rohan",
      date: "(Married on 19 Apr 2023)",
    },
    {
      id: 2,
      img: "/assests/stories/stories-2.svg",
      username: "Mahesh & Priya",
      date: "(Married on 02 March 2023)",
    },
    {
      id: 3,
      img: "/assests/stories/stories-3.svg",
      username: "Jigar & Hiteshi ",
      date: "(Married on 19 Apr 2023)",
    },
    {
      id: 4,
      img: "/assests/stories/stories-4.svg",
      username: "Kaushal & Jiya",
      date: "(Married on 30 Apr 2023)",
    },
    {
      id: 5,
      img: "/assests/stories/stories-5.svg",
      username: "Jiyan & Jigisha",
      date: "(Married on 19 Apr 2023)",
    },
    {
      id: 6,
      img: "/assests/stories/stories-6.svg",
      username: "Rohan & Joya",
      date: "(Married on 01 June 2023)",
    },
    {
      id: 7,
      img: "/assests/stories/stories-7.svg",
      username: "Ramesh & Shivali",
      date: "(Married on 23 Feb 2023)",
    },
    {
      id: 8,
      img: "/assests/stories/stories-8.svg",
      username: "Vishal & Heena",
      date: "(Married on 19 Apr 2023)",
    },
  ];

  const TitleText = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Text = {
    color: "#FFF",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  const Text2 = {
    color: "#FFF",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full grid place-items-center">
        <div className="  mt-[100px] w-full md:w-full 2xl:w-[1200px] xl:w-[1200px]  lg:w-full">
          <div className="w-full grid place-items-center">
            <div className="  2xl:w-[1110px] lg:w-full xl:w-[1110px] md:w-full flex flex-col lg:flex-row w-full justify-between">
              <div className="2xl:w-auto xl:w-auto w-full grid place-items-center">
                <h1 className="text-[18px]" style={TitleText}>
                  Happy Milan Stories
                </h1>
              </div>
              <div className="hidden lg:block w-full 2xl:w-auto xl:w-auto  lg:w-full lg:block grid place-items-end lg:mt-[0px] mt-[10px]">
                
                <button
                  id="success-story-btn-style"
                  onClick={() => router.push("/successstories/addstories")}
                  className="w-[144px]  h-[40px] rounded-[10px]   border-[1px] border-[#0F52BA]"
                  style={TitleText}
                >

                  <span className=" text-[14px] mr-[5px]" style={TitleText}>
                    Share Your Story
                  </span>

                </button>
              </div>
              <div className="lg:hidden flex w-full justify-end mt-[10px] pr-[25px]">
                <button
                  onClick={() => router.push("/successstories/addstories")}
                  className="w-[50px]  h-[50px] rounded-[10px]   border-[1px] border-[#0F52BA]"
                  style={TitleText}
                >
                  {" "}
                  <Image
                    loading="lazy"
                    alt="img"
                    width={24}
                    height={24}
                    className="inline"
                    src="/assests/stories/Add.svg"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="inline-flex justify-center items-center lg:flex md:justify-center  flex-wrap gap-y-[46px] gap-x-[26px]">
            {imgdata.map((res, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="lg:my-10 cursor-pointer"
                    onClick={() => router.push("/successstories/story")}
                  >
                    <Image
                      alt={`story-${index + 1}`}
                      loading="lazy"
                      width={260}
                      height={381}
                      src={res.img}
                      className="rounded-[10px] md:rounded-none relative  top-[50px] lg:top-[0px] w-[150px] md:w-[180px] lg:w-[260px] h-[270px] md:h-[320px] lg:h-[381px] object-cover"
                    />
                    <div className=" lg:my-[-100px] my-[-50px] rounded-[10px] md:rounded-t-none md:rounded-b-3xs [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] w-[150px] md:w-[180px] lg:w-[260px] h-[100px] opacity-[0.9]">
                      <div className="flex justify-between">
                        <div className="relative left-[18px]  md:left-[10px] lg:left-[28px] top-[20px] border-black text-white font-poppins">
                          <p className="m-0">
                            <span>
                              <span
                                style={Text}
                                className="text-[9px] md:text-[12px] lg:text-[18px] font-semibold"
                              >{`${res.username}`}</span>
                              <b className="font-poppins">{` `}</b>
                            </span>
                          </p>
                          <p
                            style={Text2}
                            className="m-0 text-[8px] md:text-[12px]"
                          >
                            Read story
                          </p>
                        </div>
                        <div className="m-5 relative top-[30px]">
                          <Image
                            loading="lazy"
                            alt="img"
                            width={8}
                            height={8}
                            className="cursor-pointer w-[18px] h-[18px]"
                            src="/group-1061.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div id="footer-section" className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
