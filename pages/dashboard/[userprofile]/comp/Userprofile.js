import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../../../store/actions/GetingUserById";
import SkeletonProfileSec from "./SkeletonProfileSec";
import { Dialog, Popover } from "@mui/material";
import moment from "moment";
// import UserLikesbtn from "../../../components/Buttons/UserLikesbtn";
import { addToShortlist } from "../../../../store/actions/GetingAlluser";
import { sendRequest } from "../../../../store/actions/UsersAction";
import RegisterAlertModal from "../../../components/Models/RegisterAlertModal";
import GridLikeUser from "../../../components/Buttons/GridLikeUser";
import UpgradeButton from "../../../components/Buttons/UpgradeButton";
import calculateAge from "../../../../utils/helpers/CalculateAge";

function Userprofile({ toggleDrawer }) {
  const Username = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const Text2 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const Text4 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
  };
  const Text5 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "505",
    lineHeight: "normal",
  };



  const Urlmodaltext = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  const RulesText = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  //   color: #000;
  // text-align: center;
  // font-family: Poppins;
  // font-size: 14px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: normal;


  const upgradeDone = true

  const GeneralTab = ({ data }) => {

    let formattedDateOfBirth;

    if (data && data.dateOfBirth) {
      formattedDateOfBirth = moment(data?.dateOfBirth).format('YYYY-MM-DD');
    } else {
      formattedDateOfBirth = 'NA';
    }

    let formattedDateOfBirthTime;

    // Assemble the date and time in a readable format
    if (data && data.birthTime) {

      formattedDateOfBirthTime = moment(data?.birthTime).format('HH:mm:ss');

    } else {
      formattedDateOfBirthTime = 'NA'
    }




    return (
      <>
        <div
          className={`w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}
        >
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  {"General Information"}
                </h1>
              </li>
              <li></li>
            </ul>
          </div>

          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>



          <div className="grid place-items-center">


            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Date of Birth
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {formattedDateOfBirth ? formattedDateOfBirth
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Birth of Time
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {formattedDateOfBirthTime
                    ? formattedDateOfBirthTime
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Religion
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {data && data.religion
                    ? data.religion.charAt(0).toUpperCase() + data.religion.slice(1)
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Caste/Sub Caste
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {data && data.cast ? data?.cast && data.cast : "NA NA"}
                </h1>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          <div className="grid place-items-center">
            <div class="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Current City
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {data && data.address?.currentCity
                    ? data.address.currentCity.charAt(0).toUpperCase() + data.address.currentCity.slice(1)
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Country of Living
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px] xl:text-[14px] text-[14px]"
                >
                  {data && data.address?.currentCountry
                    ? data.address.currentCountry.charAt(0).toUpperCase() + data.address.currentCountry.slice(1)
                    : "NA"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const LocationTab = ({ data }) => {
    return (
      <>
        <div
          className={upgradeDone ? `w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]` : `w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}
        >
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  Address Details
                </h1>
              </li>
              <li></li>
            </ul>
          </div>

          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          {
            upgradeDone
              ?
              <>
                <div className="grid place-items-center">
                  <div className="text-center mt-[10%]">
                    <ul className="flex flex-col justify-center items-center w-full space-y-[10px]">
                      <li>
                        <Image width={0} height={0} alt="lock" src={"/assests/profile/Lock-gradient.svg"} loading="lazy" className="w-[18.151px] h-[24px]" />
                      </li>
                      <li>
                        <h1 style={RulesText} className="text-[14px] text-center text-[#000] dark:text-[#FFF]]">Only for Premium Member. Unlock now!</h1>
                      </li>
                      <li>
                        <div>
                          <UpgradeButton IconSize={17} BtnSizeH={40} BtnSizeW={110} />
                        </div>
                      </li>
                    </ul>

                  </div>
                </div>
              </>
              : <>
                <div className="grid place-items-center">
                  <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]">
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Current Residing Address
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        {data && data.address?.currentResidenceAddress
                          ? data.address.currentResidenceAddress.charAt(0).toUpperCase() + data.address.currentResidenceAddress.slice(1)
                          : "NA"}
                      </h1>
                    </div>
                    <div className=" ">
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[14px]"
                      ></p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      ></h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Current City
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        {data && data.address?.currentCity
                          ? data.address.currentCity.charAt(0).toUpperCase() + data.address.currentCity.slice(1)
                          : "NA"}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Current Residing Country
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        {data && data.address?.currentCountry
                          ? data.address.currentCountry.charAt(0).toUpperCase() + data.address.currentCountry.slice(1)
                          : "NA"}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Permanent Address
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        {"NA"}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
          }
        </div>
      </>
    );
  };
  const ContactTab = ({ data }) => {
    return (
      <>
        <div className={upgradeDone ? `w-full 2xl:h-[353px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px] border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]` : `w-full h-[270px] lg:h-[369px]  border-[1px] border-[#F1F1F1] rounded-[10px] 2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1
                  style={Text2}
                  className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  Contact Details
                </h1>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>

          {
            upgradeDone
              ?
              <>
                <div className="grid place-items-center">
                  <div className="text-center mt-[10%]">
                    <ul className="flex flex-col justify-center items-center w-full space-y-[10px]">
                      <li>
                        <Image width={0} height={0} alt="lock" src={"/assests/profile/Lock-gradient.svg"} loading="lazy" className="w-[18.151px] h-[24px]" />
                      </li>
                      <li>
                        <h1 style={RulesText} className="text-[14px] text-center text-[#000] dark:text-[#FFF]]">Only for Premium Member. Unlock now!</h1>
                      </li>
                      <li>
                        <div>
                          <UpgradeButton IconSize={17} BtnSizeH={40} BtnSizeW={110} />
                        </div>
                      </li>
                    </ul>

                  </div>
                </div>
              </>
              :
              <>
                <div className="grid place-items-center">
                  <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Mobile Number
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        +{" "}
                        {data && data?.mobileNumber
                          ? data?.mobileNumber && data.mobileNumber
                          : "NA"}
                      </h1>
                    </div>
                    <div>
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Home Number
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        +{" "}
                        {data && data?.homeMobileNumber
                          ? data?.homeMobileNumber && data.homeMobileNumber
                          : "NA"}
                      </h1>
                    </div>
                    <div className="w-full">
                      <p
                        style={Text2}
                        className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                      >
                        Email Address
                      </p>
                      <h1
                        style={Text5}
                        className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                      >
                        {data && data?.email ? data?.email && data.email : "NA"}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
          }

        </div>
      </>
    );
  };
  const EducationTab = ({ data }) => {
    return (
      <>
        <div
          className={`w-full  h-[369px]  border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}
        >
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  {"Education Details"}
                </h1>
              </li>

              <li></li>
            </ul>
          </div>

          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          <div className="grid place-items-center">
            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Degree
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userEducation?.degree
                    ? data.userEducation.degree.charAt(0).toUpperCase() + data.userEducation.degree.slice(1)
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  College/University
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userEducation?.collage
                    ? data.userEducation.collage.charAt(0).toUpperCase() + data.userEducation.collage.slice(1)
                    : "NA"}

                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  City
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userEducation?.city
                    ? data.userEducation.city.charAt(0).toUpperCase() + data.userEducation.city.slice(1)
                    : "NA"}

                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  State
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userEducation?.state
                    ? data.userEducation.state.charAt(0).toUpperCase() + data.userEducation.state.slice(1)
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Country
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userEducation?.country
                    ? data.userEducation.country.charAt(0).toUpperCase() + data.userEducation.country.slice(1)
                    : "NA"}

                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ProfessionalTab = ({ data }) => {
    return (
      <>
        <div className="w-full h-[369px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]">
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  Professional Details
                </h1>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          <div className="grid place-items-center">
            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Current Designation
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  Software Designer
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Job Type
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userProfessional?.jobType
                    ? data.userProfessional?.jobType &&
                    data.userProfessional.jobType
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Company Name
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userProfessional?.companyName
                    ? data.userProfessional.companyName.charAt(0).toUpperCase() + data.userProfessional.companyName.slice(1)
                    : "NA"}

                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Annual Salary
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  INR{" "}
                  {data && data.userProfessional?.currentSalary
                    ? data.userProfessional?.currentSalary &&
                    data.userProfessional.currentSalary
                    : "NA"}

                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Work in City
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {/* {data && data.userProfessional?.workCity
                    ? data.userProfessional?.workCity &&
                    data.userProfessional.workCity
                    : "NA"} */}
                  {data && data.userProfessional?.workCity
                    ? data.userProfessional.workCity.charAt(0).toUpperCase() + data.userProfessional.workCity.slice(1)
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Work in Country
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {/* {data && data.userProfessional?.workCountry
                    ? data.userProfessional?.workCountry &&
                    data.userProfessional.workCountry
                    : "NA"} */}
                  {data && data.userProfessional?.workCountry
                    ? data.userProfessional.workCountry.charAt(0).toUpperCase() + data.userProfessional.workCountry.slice(1)
                    : "NA"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const HobbiesTab = () => {
    return (
      <>
        <div className="w-full h-[369px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]">
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  Hobbies and Interests
                </h1>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          <div className="grid place-items-center">
            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Creative
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  Writing, Painting
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                ></p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                ></h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Fun
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  Movie
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                ></p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                ></h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Fitness
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  Walking
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const PartnerPreferenceTab = ({ data }) => {
    return (
      <>
        <div
          className={`w-full h-[400px] border-[1px] border-[#F1F1F1] rounded-[10px] space-y-[20px]`}
        >
          <div className="pt-[10px] grid place-items-center">
            <ul className="w-[90%] flex justify-between items-center m-[10px]">
              <li>
                <h1 style={Text2} className="text-[16px]">
                  Partner Preference
                </h1>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="flex justify-center ">
            <div className="grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]"></div>
          </div>
          <div className="grid place-items-center">
            <div class="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Age
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.age
                    ? `${data.userPartner?.age.min && data.userPartner.age.min} - ${data.userPartner?.age.max && data.userPartner.age.max}`
                    : "NA - NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Prefer Height
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.height
                    ? `${data.userPartner?.height.min && data.userPartner.height.min} to ${data.userPartner?.height.max && data.userPartner.height.max} ft`
                    : "NA - NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Prefer City State
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.city
                    ? `${data.userPartner?.city && data.userPartner.city},  ${data.userPartner?.state && data.userPartner.state}`
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Prefer Country
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.country
                    ? data.userPartner?.country && data.userPartner.country
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Prefer Income
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  INR{" "}
                  {data && data.userPartner?.income
                    ? data.userPartner?.income && data.userPartner.income
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Creative
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.creative
                    ? data.userPartner?.creative && data.userPartner.creative
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Fun
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.fun
                    ? data.userPartner?.fun && data.userPartner.fun
                    : "NA"}
                </h1>
              </div>
              <div>
                <p
                  style={Text2}
                  className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                >
                  Prefer Diet
                </p>
                <h1
                  style={Text5}
                  className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                >
                  {data && data.userPartner?.diet
                    ? data.userPartner?.diet && data.userPartner.diet
                    : "NA"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const router = useRouter();

  const { userprofile } = router.query;
  console.log("🚀 ~ Userprofile ~ userprofile:", userprofile);

  const { user, loading } = useSelector((state) => state.userById);

  const [ActiveTab, SetActiveTab] = useState(1);

  const RenderTab = () => {
    switch (ActiveTab) {
      case 1:
        return <GeneralTab data={user} />;
        break;
      case 2:
        return <LocationTab data={user} />;
        break;
      case 3:
        return <ContactTab data={user} />;
        break;
      case 4:
        return <EducationTab data={user} />;
        break;
      case 5:
        return <ProfessionalTab data={user} />;
        break;
      case 6:
        return <HobbiesTab />;
        break;
      case 7:
        return <PartnerPreferenceTab data={user} />;
        break;
    }
  };

  console.log("userdata : ", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(userprofile));
  }, [userprofile, dispatch]);

  const ImageNotFoundText = {
    color: "#B3CBF1",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    position: "relative",
    top: "-25px",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [blockprofile, setblockprofile] = useState(false);

  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const handleClick = (event) => {
    // console.log("🚀 ~ handleClick ~ res:", res)
    setAnchorEl(event.currentTarget);
  };

  const [sentrequest, setsentRequest] = useState({});
  const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);

  const OpenRegisterModal = (res) => {
    setData(res);
    setisRegisterModalOpen(true);
  };

  const CloseRegisterModal = () => {
    setisRegisterModalOpen(false);
  };

  const thedata = useSelector((state) => state.myprofile);


  const HandleRequestModal = (res) => {
    if (thedata.data.userProfileCompleted) {
      console.log("Done")
      dispatch(sendRequest(res.id));

      setsentRequest((prevState) => ({
        ...prevState,
        [res.id]: !prevState[res.id], // Update the sentRequests state for the specific user ID
      }));

      if (!sentrequest[res.id]) {
        setshortlistText("Request Sent..");
        setopenShortlistModal(true);
      } else {
        setshortlistText("Request Removed..");
        setopenShortlistModal(true);
      }

      setTimeout(() => {
        setopenShortlistModal(false);
      }, 800);
    } else {
      OpenRegisterModal();
    }
  };



  const [openShortlistModal, setopenShortlistModal] = React.useState(false)
  const [shortlistText, setshortlistText] = useState();


  const HandleShortlistUser = (res) => {
    dispatch(addToShortlist(res)); // Dispatch the action with the shortlist ID

    setshortlistText("Profile has been shortlisted");
    setopenShortlistModal(true);
    setTimeout(() => {
      setopenShortlistModal(false);
    }, 800);
  }

  if (loading === true) {
    return <SkeletonProfileSec />;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div className="2xl:pl-0 2xl:pr-0 xl:pl-0 xl:pr-0 lg:pl-[0px] lg:pr-[30px] pl-[0px] pr-[20px] relative 2xl:left-[40px] xl:left-[45px] lg:left-0 left-[0px]">
        <div
          className={`flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:w-full w-full bg-[#FFF]`}
        >
          <div
            id='profile-background-grad'
            className="w-full h-[100px] 2xl:h-[138px] xl:h-[138px] md:h-[138px] lg:h-[138px] bg-[#0F52BA] rounded-[10px]"
          >
            <div>
              <div className="absolute right-[25px] pt-[10px]">
                <ul className="flex space-x-[20px] items-center">
                  {/* <li><Image loading="lazy" alt="share" width={15} height={16} src='/assests/Black/Share-icon-2.svg' /></li> */}
                  <li>
                    {/* <Image loading="lazy" alt="Download" width={33} height={32} src='/assests/Black/Download-2.svg' /> */}

                    <Image loading="lazy"
                      width={3}
                      height={16}
                      alt="more"
                      src="/assests/Black/3Dots2.svg"
                      className="cursor-pointer"
                      aria-describedby={id}
                      variant="contained"
                      onClick={(event) => handleClick(event)}
                    />
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        style: {
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                          borderRadius: "10px",
                          marginLeft: "-10px",
                        }, // Add this to remove the shadow
                      }}
                    >
                      <div className="bg-[#FFF] rounded-[10px] w-[128px] h-[210px]">
                        <ul className="flex flex-col justify-center space-y-[12px] ml-[12px] ">
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[15px]"
                          >
                            {" "}
                            <Image loading="lazy"
                              alt="share"
                              width={13}
                              height={14}
                              src="/assests/dashboard/icon/share-icon.svg"
                            />{" "}
                            <p>Share</p>
                          </li>
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px]"
                          >
                            {" "}
                            {blockprofile ? (
                              <>
                                {" "}
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    id="Vector"
                                    d="M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z"
                                    fill="red"
                                  />
                                </svg>
                                <p className="text-[red]">Unblock</p>{" "}
                              </>
                            ) : (
                              <>
                                {" "}
                                <Image loading="lazy"
                                  alt="block-icon"
                                  width={14}
                                  height={14}
                                  src="/assests/dashboard/icon/block-icon.svg"
                                />
                                <p>Block</p>{" "}
                              </>
                            )}{" "}
                          </li>
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px]"
                          >
                            {" "}
                            <Image loading="lazy"
                              alt="report-icon"
                              width={14}
                              height={14}
                              src="/assests/dashboard/icon/report-icon.svg"
                            />
                            <p> Report</p>
                          </li>
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px]"
                          >
                            {" "}
                            <Image loading="lazy"
                              alt="copy"
                              width={12}
                              height={14}
                              src="/assests/dashboard/icon/copy-icon.svg"
                            />{" "}
                            <p>Copy URL</p>
                          </li>
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px]"
                          >
                            {" "}
                            <Image loading="lazy"
                              alt="Download"
                              width={14}
                              height={14}
                              src="/assests/Black/Download3.svg"
                            />{" "}
                            <p>Download</p>
                          </li>
                          <li
                            style={Text3}
                            className="cursor-pointer flex  items-center space-x-[12px] text-[14px]"
                          >
                            {" "}
                            <Image loading="lazy"
                              alt="copy"
                              width={14}
                              height={14}
                              src="/assests/Black/UnfriendUser.svg"
                            />{" "}
                            <p>Unfriend</p>
                          </li>
                        </ul>
                      </div>
                    </Popover>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <Image loading="lazy"
                  alt="arrow"
                  width={32}
                  height={32}
                  onClick={() => router.back()}
                  className="cursor-pointer m-[10px] w-[30px] h-[30px] md:w-[32px] md:h-[32px]"
                  src="/assests/dashboard/story/arrow-left.svg"
                />
              </div>
            </div>
            <div></div>
            <div className="grid place-items-center">
              {user?.profilePic ? (
                <Image loading="lazy"
                  alt="img"
                  style={{ objectFit: "cover" }}
                  width={184}
                  height={184}
                  className="rounded-[50%] mt-[5px] lg:mt-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[184px] lg:h-[184px] 2xl:w-[184px] 2xl:h-[184px] xl:w-[160px] xl:h-[160px]"
                  src={user?.profilePic}
                />
              ) : (
                <div
                  style={{
                    width: "184px",
                    height: "184px",
                    backgroundColor: "#F8FBFF",
                    borderRadius: "50%",
                  }}
                  className="grid place-items-center"
                >
                  <Image loading="lazy"
                    alt="not-found"
                    style={{ position: "relative", top: "30px" }}
                    width={45}
                    height={45}
                    src={"/assests/dashboard/icon/NotFound-img.svg"}
                  />
                  <h1 className="inline" style={ImageNotFoundText}>
                    No Image
                  </h1>
                </div>
              )}

              <div className="pb-[10px] pt-[15px]">
                <h1
                  style={Username}
                  className="text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px]"
                >
                  {user && user?.name ? user?.name && user.name : "Rohan Patel"}
                </h1>
              </div>
            </div>
            <div className="space-y-[5px]">
              <div className="pt-[10px]">
                <ul className="flex justify-center items-center space-x-[8px] md:space-x-[40px]">
                  <li>
                    <div className="flex items-center space-x-[10px]">
                      <h1
                        style={Text2}
                        className="lg:text-[12px] md:text-[12px] text-[11px]"
                      >
                        {user && user?.gender
                          ? user?.gender && user.gender
                          : "NA"}
                        , {calculateAge(user?.dateOfBirth)}
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-[10px]">
                      <Image loading="lazy"
                        alt="bag-icon"
                        width={14}
                        height={12}
                        src="/assests/dashboard/icon/bag-icon.svg"
                      />
                      <h1
                        style={Text2}
                        className="lg:text-[12px] md:text-[12px] text-[11px]"
                      >
                        Software Engineer
                      </h1>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-[10px]">
                      <Image loading="lazy"
                        alt="loaction-icon"
                        width={10}
                        height={12}
                        src="/assests/dashboard/icon/location-icon.svg"
                      />
                      <h1
                        style={Text2}
                        className="lg:text-[12px] md:text-[12px] text-[11px]"
                      >
                        {user && user.address?.currentCountry
                          ? `${user?.address.currentCountry && user.address.currentCountry} `
                          : "NA"}
                        , United States
                      </h1>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {/* <UserLikesbtn
                  RequestId={sentrequest[user?.id]}
                  HandleRequestModal={() => HandleRequestModal(user)}
                  HandleShortlistUser={() => HandleShortlistUser(user?.id)}
                  user={user} /> */}
                <GridLikeUser toggleDrawer={toggleDrawer} from={"UserProfile"} user={user} theid={user?.id} />
              </div>
              <div className="text-center pt-[10px]">
                <p
                  className="text-[12px] lg:text-[14px] md:text-[14px] 2xl:text-[14px] xl:text-[12px]"
                  style={Text2}
                >
                  {user && user?.writeBoutYourSelf
                    ? user?.writeBoutYourSelf && user.writeBoutYourSelf
                    : "NA"}
                </p>
              </div>

              <div className="relative left-[5px] hidden lg:flex space-x-[25px] 2xl:space-x-[20px] xl:space-x-[20px] lg:space-x-[35px] pt-[20px]">
                <div id={ActiveTab === 1 ? "grad-btn" : ""} onClick={() => SetActiveTab(1)} className={`${ActiveTab === 1 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer  flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z" fill={ActiveTab === 1 ? "white" : "black"} />
                  </svg>
                </div>
                <div id={ActiveTab === 2 ? "grad-btn" : ""} onClick={() => SetActiveTab(2)} className={`${ActiveTab === 2 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="18" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.15162 8.69498C7.57598 8.69498 7.93778 8.54389 8.23702 8.2417C8.53627 7.9395 8.68589 7.57623 8.68589 7.15188C8.68589 6.72751 8.53479 6.36571 8.23259 6.06648C7.93039 5.76723 7.56711 5.61761 7.14276 5.61761C6.7184 5.61761 6.3566 5.76871 6.05737 6.07091C5.75812 6.37311 5.60849 6.73638 5.60849 7.16073C5.60849 7.5851 5.75959 7.9469 6.06179 8.24613C6.36399 8.54537 6.72727 8.69498 7.15162 8.69498ZM7.14719 16.5761C9.12473 14.8122 10.6313 13.1302 11.6668 11.5302C12.7023 9.93022 13.22 8.53234 13.22 7.33657C13.22 5.50894 12.6396 4.00681 11.4787 2.83019C10.3178 1.65355 8.87396 1.06523 7.14719 1.06523C5.42042 1.06523 3.97659 1.65355 2.8157 2.83019C1.6548 4.00681 1.07434 5.50894 1.07434 7.33657C1.07434 8.53234 1.6009 9.93022 2.65402 11.5302C3.70714 13.1302 5.20486 14.8122 7.14719 16.5761ZM7.14719 18C4.76419 15.935 2.97724 14.0134 1.78634 12.2349C0.595445 10.4565 0 8.82368 0 7.33657C0 5.15146 0.706831 3.38242 2.12049 2.02945C3.53414 0.676484 5.20971 0 7.14719 0C9.08467 0 10.7602 0.676484 12.1739 2.02945C13.5876 3.38242 14.2944 5.15146 14.2944 7.33657C14.2944 8.82368 13.6989 10.4565 12.508 12.2349C11.3171 14.0134 9.53019 15.935 7.14719 18Z" fill={ActiveTab === 2 ? "white" : "black"} />
                  </svg>
                </div>
                <div id={ActiveTab === 3 ? "grad-btn" : ""} onClick={() => SetActiveTab(3)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 3 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8456 18C14.8692 18 12.8806 17.4926 10.8797 16.4779C8.87876 15.4631 7.07263 14.1518 5.46128 12.5438C3.84994 10.9359 2.53689 9.13314 1.52212 7.13564C0.507374 5.13815 0 3.1512 0 1.17481C0 0.839154 0.111883 0.559442 0.335649 0.335676C0.559415 0.111892 0.839127 0 1.17479 0H4.2088C4.47972 0 4.71601 0.0875181 4.91768 0.262554C5.11933 0.43759 5.25012 0.673573 5.31006 0.970506L5.94548 3.82678C5.98771 4.0883 5.98158 4.32598 5.9271 4.53983C5.87261 4.75368 5.76831 4.93087 5.61419 5.07139L3.10961 7.52078C4.12846 9.21521 5.25832 10.6767 6.49919 11.9054C7.74006 13.134 9.17025 14.1903 10.7898 15.0743L13.1905 12.5837C13.3675 12.3889 13.5661 12.2534 13.786 12.1771C14.006 12.1008 14.2345 12.0892 14.4715 12.1424L17.0499 12.7104C17.3415 12.7701 17.5761 12.9083 17.7538 13.125C17.9315 13.3416 18.0204 13.6012 18.0204 13.9036V16.8252C18.0204 17.1608 17.9085 17.4406 17.6847 17.6643C17.461 17.8881 17.1813 18 16.8456 18ZM2.49669 6.42772L4.68897 4.30081C4.71622 4.27356 4.73495 4.2361 4.74517 4.18843C4.75539 4.14074 4.75709 4.09648 4.75027 4.05562L4.17002 1.36889C4.1632 1.31441 4.14107 1.27355 4.10362 1.24631C4.06615 1.21906 4.02017 1.20544 3.96569 1.20544H1.34844C1.30757 1.20544 1.27352 1.21906 1.24629 1.24631C1.21903 1.27355 1.20541 1.3076 1.20541 1.34847C1.19179 2.04587 1.29634 2.81307 1.51904 3.65007C1.74174 4.48707 2.06763 5.41295 2.49669 6.42772ZM11.9196 15.6402C12.6456 15.9971 13.4404 16.2749 14.304 16.4738C15.1675 16.6727 15.9569 16.783 16.672 16.8048C16.7128 16.8048 16.7469 16.7912 16.7741 16.7639C16.8014 16.7367 16.815 16.7026 16.815 16.6618V14.0547C16.815 14.0002 16.8014 13.9543 16.7741 13.9168C16.7469 13.8793 16.706 13.8572 16.6515 13.8504L14.2427 13.3539C14.2018 13.3471 14.166 13.3488 14.1354 13.359C14.1047 13.3692 14.0724 13.388 14.0383 13.4152L11.9196 15.6402Z" fill={ActiveTab === 3 ? "white" : "black"} />
                  </svg>
                </div>

                <div id={ActiveTab === 4 ? "grad-btn" : ""} onClick={() => SetActiveTab(4)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 4 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="28" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0043 18L3.61065 13.9532V7.95319L0 5.99999L11.0043 0L22.0426 5.99999V13.8957H20.7873V6.73403L18.3979 7.95319V13.9532L11.0043 18ZM11.0043 10.5766L19.3979 5.99999L11.0043 1.48508L2.64466 5.99999L11.0043 10.5766ZM11.0043 16.5766L17.1426 13.2021V8.71486L11.0043 12L4.86594 8.67018V13.2021L11.0043 16.5766Z" fill={ActiveTab === 4 ? "white" : "black"} />
                  </svg>
                </div>
                <div id={ActiveTab === 5 ? "grad-btn" : ""} onClick={() => SetActiveTab(5)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 5 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="18" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.48354 18C1.08019 18 0.73209 17.8536 0.439254 17.5607C0.146418 17.2679 0 16.9198 0 16.5165V4.91141C0 4.50807 0.146418 4.15998 0.439254 3.86714C0.73209 3.57431 1.08019 3.42789 1.48354 3.42789H6.35939V1.48352C6.35939 1.08016 6.5058 0.732074 6.79864 0.439255C7.09146 0.146419 7.43955 0 7.8429 0H11.7C12.1034 0 12.4515 0.146419 12.7443 0.439255C13.0371 0.732074 13.1835 1.08016 13.1835 1.48352V3.42789H18.0594C18.4627 3.42789 18.8108 3.57431 19.1037 3.86714C19.3965 4.15998 19.5429 4.50807 19.5429 4.91141V16.5165C19.5429 16.9198 19.3965 17.2679 19.1037 17.5607C18.8108 17.8536 18.4627 18 18.0594 18H1.48354ZM7.52641 3.42789H12.0165V1.48352C12.0165 1.40439 11.9835 1.33185 11.9176 1.26592C11.8517 1.19997 11.7792 1.167 11.7 1.167H7.8429C7.76377 1.167 7.69124 1.19997 7.62531 1.26592C7.55938 1.33185 7.52641 1.40439 7.52641 1.48352V3.42789ZM18.3759 11.8819H11.795V13.3061H7.77959V11.8819H1.16702V16.5165C1.16702 16.5956 1.19999 16.6681 1.26592 16.7341C1.33187 16.8 1.40441 16.833 1.48354 16.833H18.0594C18.1385 16.833 18.2111 16.8 18.277 16.7341C18.3429 16.6681 18.3759 16.5956 18.3759 16.5165V11.8819ZM8.94662 12.1391H10.628V10.4578H8.94662V12.1391ZM1.16702 10.7149H7.77959V9.29078H11.795V10.7149H18.3759V4.91141C18.3759 4.83229 18.3429 4.75976 18.277 4.69381C18.2111 4.62788 18.1385 4.59491 18.0594 4.59491H1.48354C1.40441 4.59491 1.33187 4.62788 1.26592 4.69381C1.19999 4.75976 1.16702 4.83229 1.16702 4.91141V10.7149Z" fill={ActiveTab === 5 ? "white" : "black"} />
                  </svg>
                </div>
                <div id={ActiveTab === 6 ? "grad-btn" : ""} onClick={() => SetActiveTab(6)} className={`w-[50px] h-[50px] 2xl:w-[54px] 2xl:h-[54px] xl:w-[45px] xl:h-[45px] cursor-pointer   ${ActiveTab === 6 ? "bg-[#0F52BA]" : "bg-[#F8F8F8]"} flex items-center justify-center rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.08945 8.46256H4.47997C4.38767 7.6743 4.16965 6.92035 3.82591 6.20071C3.48219 5.48107 3.04737 4.86132 2.52145 4.34147C2.11579 4.92448 1.78208 5.56092 1.52034 6.2508C1.2586 6.94069 1.11497 7.67794 1.08945 8.46256ZM13.52 8.46256H16.9105C16.885 7.68401 16.7414 6.95131 16.4797 6.26447C16.2179 5.57762 15.8842 4.9427 15.4785 4.35971C14.8992 4.92691 14.451 5.55546 14.134 6.24535C13.817 6.93523 13.6123 7.6743 13.52 8.46256ZM2.52145 13.6257C3.08259 13.0585 3.52622 12.4324 3.85234 11.7474C4.17846 11.0623 4.38767 10.3257 4.47997 9.53744H1.08945C1.12103 10.3221 1.26618 11.0538 1.52489 11.7328C1.7836 12.4118 2.11579 13.0427 2.52145 13.6257ZM15.4785 13.6257C15.8842 13.0427 16.2179 12.4102 16.4797 11.7282C16.7414 11.0463 16.885 10.316 16.9105 9.53744H13.52C13.6123 10.3257 13.817 11.0623 14.134 11.7474C14.451 12.4324 14.8992 13.0585 15.4785 13.6257ZM5.56031 8.46256H8.46256V1.08945C7.4411 1.16962 6.48827 1.42073 5.60405 1.8428C4.71982 2.26487 3.93217 2.82874 3.24107 3.5344C3.89452 4.18177 4.42043 4.92874 4.8188 5.77531C5.21719 6.62187 5.46436 7.51762 5.56031 8.46256ZM9.53744 8.46256H12.4397C12.5356 7.51762 12.7837 6.62035 13.1839 5.77074C13.5841 4.92116 14.114 4.17571 14.7735 3.5344C14.0885 2.82874 13.2999 2.26487 12.4078 1.8428C11.5157 1.42073 10.5589 1.16962 9.53744 1.08945V8.46256ZM8.46256 16.9105V9.53744H5.56031C5.46436 10.4945 5.21871 11.3894 4.82337 12.222C4.42802 13.0546 3.90059 13.7915 3.24107 14.4328C3.93217 15.1385 4.70312 15.7078 5.55394 16.1408C6.40476 16.5738 7.3743 16.8304 8.46256 16.9105ZM9.53744 16.9105C10.6196 16.8304 11.5916 16.5768 12.4533 16.1499C13.3151 15.723 14.0885 15.1567 14.7735 14.451C14.114 13.8097 13.5841 13.0697 13.1839 12.2311C12.7837 11.3924 12.5356 10.4945 12.4397 9.53744H9.53744V16.9105ZM9 18C7.75627 18 6.58694 17.7635 5.492 17.2904C4.39706 16.8173 3.44454 16.1757 2.63442 15.3656C1.8243 14.5555 1.1827 13.6029 0.709628 12.508C0.236543 11.4131 0 10.2437 0 9C0 7.75628 0.236543 6.58694 0.709628 5.492C1.1827 4.39706 1.8243 3.44454 2.63442 2.63443C3.44454 1.8243 4.39706 1.1827 5.492 0.709629C6.58694 0.236544 7.75627 0 9 0C10.2437 0 11.4131 0.236544 12.508 0.709629C13.6029 1.1827 14.5555 1.8243 15.3656 2.63443C16.1757 3.44454 16.8173 4.39706 17.2904 5.492C17.7635 6.58694 18 7.75628 18 9C18 10.2437 17.7635 11.4131 17.2904 12.508C16.8173 13.6029 16.1757 14.5555 15.3656 15.3656C14.5555 16.1757 13.6029 16.8173 12.508 17.2904C11.4131 17.7635 10.2437 18 9 18Z" fill={ActiveTab === 6 ? "white" : "black"} />
                  </svg>
                </div>

                <div id={ActiveTab === 7 ? "grad-btn" : ""} onClick={() => SetActiveTab(7)} className={`w-[200px] h-[50px] cursor-pointer  ${ActiveTab === 7 ? "bg-[#0F52BA] text-[#FFF]" : "bg-[#F8F8F8] Text-[#000]"} flex justify-center items-center space-x-[15px] rounded-[27px] hover:bg-[#F3F8FF]`}>
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.46349 8.3715C8.24903 8.3715 7.24779 7.97749 6.45977 7.18947C5.67175 6.40145 5.27774 5.39819 5.27774 4.17969C5.27774 2.96117 5.67175 1.95992 6.45977 1.17594C7.24779 0.39198 8.24903 0 9.46349 0C10.678 0 11.6792 0.39198 12.4672 1.17594C13.2552 1.95992 13.6492 2.96117 13.6492 4.17969C13.6492 5.39819 13.2552 6.40145 12.4672 7.18947C11.6792 7.97749 10.678 8.3715 9.46349 8.3715ZM0 18V15.605C0 14.9272 0.179565 14.3368 0.538695 13.8337C0.897825 13.3306 1.36453 12.944 1.93882 12.6738C3.26693 12.0833 4.5472 11.6385 5.77963 11.3392C7.01207 11.0399 8.2399 10.8903 9.46311 10.8903C10.6863 10.8903 11.9111 11.0432 13.1373 11.3489C14.3635 11.6546 15.638 12.0991 16.9609 12.6824C17.5576 12.9518 18.0344 13.3368 18.3914 13.8374C18.7485 14.338 18.927 14.9272 18.927 15.605V18H0ZM1.43164 16.5684H17.4953V15.605C17.4953 15.2766 17.3914 14.962 17.1835 14.6611C16.9757 14.3602 16.7043 14.124 16.3694 13.9525C15.1287 13.3491 13.9583 12.9265 12.8584 12.6847C11.7585 12.4428 10.6268 12.3219 9.46349 12.3219C8.30015 12.3219 7.16003 12.4428 6.04312 12.6847C4.92622 12.9265 3.75789 13.3491 2.53815 13.9525C2.20329 14.124 1.93515 14.3602 1.73375 14.6611C1.53234 14.962 1.43164 15.2766 1.43164 15.605V16.5684ZM9.46349 6.93989C10.2513 6.93989 10.9073 6.67781 11.4314 6.15366C11.9555 5.62952 12.2176 4.97356 12.2176 4.18575C12.2176 3.39794 11.9555 2.74197 11.4314 2.21784C10.9073 1.69371 10.2513 1.43164 9.46349 1.43164C8.67568 1.43164 8.01972 1.69371 7.49558 2.21784C6.97145 2.74197 6.70938 3.39794 6.70938 4.18575C6.70938 4.97356 6.97145 5.62952 7.49558 6.15366C8.01972 6.67781 8.67568 6.93989 9.46349 6.93989Z" fill={ActiveTab === 7 ? "white" : "black"} />
                  </svg>
                  <p style={Text4} className='text-[14px] 2xl:text-[14px] xl:text-[13px]'>Partner Preference</p>
                </div>
              </div>

              <div className="hidden lg:block pt-[10px] pb-[30px]">
                {RenderTab()}
              </div>
              <div className="block lg:hidden pt-[10px] pb-[30px]">
                <div className="flex flex-col space-y-[30px] pb-[50px]">
                  <div>
                    <GeneralTab />
                  </div>

                  <div>
                    <LocationTab />
                  </div>

                  <div>
                    <ContactTab />
                  </div>

                  <div>
                    <EducationTab />
                  </div>

                  <div>
                    <ProfessionalTab />
                  </div>

                  <div>
                    <HobbiesTab />
                  </div>

                  <div>
                    <PartnerPreferenceTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <React.Fragment>
        <Dialog
          open={openShortlistModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              backgroundColor: "transparent", // or 'none' if you prefer
              boxShadow: "none",
            },
          }}
          BackdropProps={{
            style: { opacity: 0, backgroundColor: "none", boxShadow: "none" },
          }}
        >
          <div
            style={{ padding: "17px 19px 17px 20px" }}
            className="bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center"
          >
            <div className="text-[14px]" style={Urlmodaltext}>
              <span className="text-[#fff]"> {shortlistText}</span>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <RegisterAlertModal
        title={""}
        isOpen={isRegisterModalOpen}
        onClose={CloseRegisterModal}
      />
    </>
  );
}

export default Userprofile;
