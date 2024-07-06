import { Skeleton } from "@mui/material";
import Image from "next/image";
import React from "react";

function UserprofileSkeleton() {

  const Box = {
    borderRadius: "10px",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
};

  return (
    <>
      <div className="">
        <div className="">
          <div
            className={`ml-[50px] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF] dark:bg-[#242526]`}
            style={Box}        
          >
            <div className="w-[350px]">
              <div className="p-[15px] w-full ">
                <Skeleton
                  className="relative top-[-70px]"
                  width={197}
                  height={400}
                ></Skeleton>
              </div>
            </div>
            <div className="w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]">
              <div className="flex justify-between  h-[50px]">
                <div>
                  <Skeleton variant="text">
                    <h1 className="2xl:text-[20px] xl:text-[15px] text-[15px]">
                      {"Rohan Patel"}
                    </h1>
                  </Skeleton>
                </div>
                <div className="pr-[8px]">
                  <ul className="flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]">
                    <Skeleton className="relative left-[10px]">
                      <Image
                        alt="couple-icon"
                        width={17}
                        height={14}
                        src="/assests/Black/Couple2.svg"
                      />
                    </Skeleton>
                    <Skeleton className="text-[10px]">
                      <span>You & Her</span>
                    </Skeleton>
                    <Skeleton className="cursor-pointer">
                      <Image
                        width={15}
                        height={14}
                        alt="star"
                        loading='lazy'
                        src={"/assests/Black/filled-star.svg"}
                      />
                    </Skeleton>
                    <Skeleton>
                      <Image
                        loading='lazy'
                        width={3}
                        height={14}
                        alt="more"
                        src="/assests/Black/3Dots.svg"
                        className="cursor-pointer"
                        variant="contained"
                      />
                    </Skeleton>
                  </ul>
                </div>
              </div>
              <div className="mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]">
                <div id="user-card">
                  <ul id="user-card-grid">
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{`'32,5'3`}</span>
                    </Skeleton>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{`Hindu,Patel`}</span>
                    </Skeleton>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{"Gujarati, Hindi"}</span>
                    </Skeleton>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{"Never Married"}</span>
                    </Skeleton>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{"Ahmedabad,Gujarat"}</span>
                    </Skeleton>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "14px" }}
                      className="text-[14px] 2xl:text-[14px] xl:text-[13px]"
                    >
                      <Image
                        loading='lazy'
                        alt="mark"
                        width={15}
                        height={14}
                        src="/assests/Black/RightTick.svg"
                        className="inline pr-[5px]"
                      />
                      <span>{"Software Engineer"}</span>
                    </Skeleton>
                  </ul>
                </div>
                <div className="mt-[30px] 2xl:mt-[20px] xl:mt-[15px]">
                  <Skeleton
                    variant="p"
                    className="text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] "
                  >
                    <span>
                      {"I'd describe myself as someone who's reliable, trendy,"}
                    </span>
                  </Skeleton>
                </div>
              </div>
              <div className="flex justify-end items-center mt-[20px] 2xl:mt-[20px] lg:mt-0 xl:mt-[20px] mr-[20px] space-x-[10px]">
                <Skeleton
                  variant="p"
                  className="text-[16px] 2xl:text-[16px] xl:text-[14px]"
                >
                  <span>{"Are you impressed?"}</span>
                </Skeleton>
                <Skeleton
                  height={50}
                  className={`w-[134px] h-[40px] rounded-[10px]   text-[#000]`}
                >
                  <span>{"Send Request"} </span>
                </Skeleton>
              </div>
            </div>
          </div>
          <div className="flex pb-[20px] space-x-[20px] justify-center pt-[10px]">
            <Skeleton className="">
              <Image
                loading='lazy'
                width={51}
                height={50}
                alt="like"
                className="cursor-pointer"
                src="/assests/animation/After-Like.svg"
              />
            </Skeleton>

            <Skeleton className="">
              <Image
                loading='lazy'
                width={51}
                height={50}
                alt="like"
                className="cursor-pointer"
                src="/assests/animation/After-Like.svg"
              />
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserprofileSkeleton;
