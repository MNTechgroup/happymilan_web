import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import Dialog from '@mui/material/Dialog';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Sidebar2() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setopenDialog(false);
  };


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: '10px',
      paddingLeft: "8px",
      width: "300px",
      height: "50px",
      borderRadius: "8px", // Add padding on the right side
      border: "1px solid #e6e6e6",
      borderColor: state.isFocused ? 'black' : provided.borderColor,
      '&:hover': {
        borderColor: 'black',
      },
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
      paddingRight: "20px"
      // Hide the vertical line behind the arrow
    }),
  };


  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [toggle, settoggle] = useState("hide")
  const [deleteToggle, setdeleteToggle] = useState(false)
  
  const Text1 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  const Text2 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  const router = useRouter();
  return (
    <>
      <div className="w-full h-full grid place-items-center ">
        <div className="w-[85%]  xl:mt-[90px]  md:hidden">
          <div className="flex justify-between">
            <div>
          <h1 className=" text-[16px]  text-[#716969] font-medium">
            Account Setting
          </h1>
          </div>
          <div>
          <Image width={30} height={30} onClick={() => router.back()} className='cursor-pointer w-[30px] h-[30px]' src='/assests/common/arrow-back.svg' />

          </div>
          </div>
          <div className="mt-[30px] ">
            <Accordion
              open={open === 1}
              style={{ borderBottom: "1px solid  #E0E0E0" }}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(1)}
              >
                <span className="w-[30px]">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M7.09638 5.82178C6.30995 5.82178 5.64996 5.5471 5.11641 4.99772C4.58286 4.44835 4.31608 3.75274 4.31608 2.91089C4.31608 2.08752 4.58286 1.39653 5.11641 0.83792C5.64996 0.279306 6.30995 0 7.09638 0C7.8828 0 8.54279 0.279306 9.07634 0.83792C9.6099 1.39653 9.87667 2.08752 9.87667 2.91089C9.87667 3.75274 9.6099 4.44835 9.07634 4.99772C8.54279 5.5471 7.8828 5.82178 7.09638 5.82178ZM0 13.6119V12.3089C0 11.8284 0.114742 11.431 0.344227 11.1168C0.573712 10.8026 0.909113 10.5347 1.35043 10.3129C2.32133 9.85083 3.22161 9.49967 4.05129 9.25941C4.88097 9.01914 5.89599 8.89901 7.09638 8.89901H7.29497C7.35675 8.89901 7.42295 8.88977 7.49356 8.87129C7.45826 9.00066 7.43178 9.11155 7.41412 9.20396C7.39647 9.29637 7.37882 9.39802 7.36117 9.50891H7.09638C5.98426 9.50891 5.01336 9.60594 4.18368 9.8C3.35401 9.99406 2.50668 10.3406 1.6417 10.8396C1.21803 11.0614 0.935592 11.2878 0.79437 11.5188C0.653149 11.7498 0.582538 12.0132 0.582538 12.3089V13.002H7.38765C7.4053 13.0944 7.43178 13.196 7.46708 13.3069C7.50239 13.4178 7.53769 13.5195 7.573 13.6119H0ZM13.9544 14L13.875 12.7802C13.522 12.7248 13.1865 12.6046 12.8688 12.4198C12.5511 12.235 12.2863 12.004 12.0744 11.7267L11.0682 12.1426L10.9094 11.8931L11.8096 11.1723C11.6861 10.8766 11.6243 10.5347 11.6243 10.1465C11.6243 9.75842 11.6861 9.40726 11.8096 9.09307L10.9358 8.34455L11.0947 8.09505L12.0744 8.53861C12.2686 8.2429 12.529 8.00726 12.8556 7.83168C13.1821 7.65611 13.522 7.54059 13.875 7.48515L13.9544 6.26535H14.2722L14.3516 7.48515C14.687 7.54059 15.018 7.65611 15.3446 7.83168C15.6712 8.00726 15.9404 8.23366 16.1522 8.51089L17.1319 8.09505L17.2643 8.31683L16.3905 9.06535C16.5317 9.40386 16.6023 9.7611 16.6023 10.1371C16.6023 10.513 16.5317 10.8581 16.3905 11.1723L17.2908 11.8931L17.1584 12.1426L16.1522 11.7267C15.9227 12.004 15.6491 12.235 15.3313 12.4198C15.0136 12.6046 14.687 12.7248 14.3516 12.7802L14.2722 14H13.9544ZM14.0892 12.0871C14.6349 12.0871 15.0798 11.9015 15.424 11.5302C15.7683 11.1589 15.9404 10.6969 15.9404 10.1441C15.9404 9.57277 15.7675 9.10693 15.4217 8.74653C15.0759 8.38614 14.6302 8.20594 14.0845 8.20594C13.5565 8.20594 13.1159 8.38696 12.7629 8.749C12.4098 9.11102 12.2333 9.57769 12.2333 10.149C12.2333 10.7018 12.4106 11.163 12.7652 11.5327C13.1198 11.9023 13.5612 12.0871 14.0892 12.0871ZM7.09638 5.21188C7.71422 5.21188 8.23497 4.99472 8.65864 4.5604C9.0823 4.12607 9.29413 3.57624 9.29413 2.91089C9.29413 2.26403 9.0823 1.71881 8.65864 1.27525C8.23497 0.831683 7.71422 0.609901 7.09638 0.609901C6.47853 0.609901 5.95778 0.831683 5.53411 1.27525C5.11045 1.71881 4.89862 2.26403 4.89862 2.91089C4.89862 3.57624 5.11045 4.12607 5.53411 4.5604C5.95778 4.99472 6.47853 5.21188 7.09638 5.21188Z" fill="#000" />
                  </svg>
                </span>
                Credentials
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                <h1 className="w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]">
                  See information about your account, download an archive of
                  your data, or learn about your account deactivation options
                </h1>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%] h-[1px] bg-[#ECECEC]"></div>

                <div>
                  <div className="mt-[15px] xl:mt-[20px] flex  ">
                    <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[95%]  font-medium">
                      Email
                    </h1>
                    <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />

                  </div>
                  <div className="flex ">
                    <Input
                      className="focus:outline-none  text-[14px] w-[95%] "
                      type="email"
                      variant="static"
                      placeholder="jit*****@gmail.com"
                    />

                  </div>
                </div>
                <div className=" mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div>

                  <div className="mt-[20px] flex  ">
                    <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[95%]  font-medium">
                      Password
                    </h1>
                    <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />

                  </div>

                  <Input
                    className="focus:outline-none text-[14px] w-[95%] "
                    type="passwoed"
                    variant="static"
                    placeholder="***"
                  />
                </div>
                <div className=" mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>

                <div>
                  <div className="mt-[20px] flex  ">
                    <h1 className="text-[15px] xl:text-[16px] mb-[5px] w-[95%] font-medium">
                      Mobile Number
                    </h1>
                    <Image width={20} height={20} src="/assests/dashboard/icon/edit-details-icon.svg" />

                  </div>
                  <div className="flex ">
                    <Input
                      className="text-[14px] w-[95%] focus:outline-none  "
                      type="contact number"
                      variant="static"
                      placeholder="****902"
                    />

                  </div>
                </div>
                <div className=" mt-[15px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
              </AccordionBody>
            </Accordion>

            {/* Hide_delete_profile */}
            <Accordion
              open={open === 2}
              style={{ borderBottom: "1px solid  #E0E0E0" }}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(2)}
              >
                <span className="w-[30px]">
                  <Image width={22} height={14} src='/assests/dashboard/seting/delete-profile-icon.svg' />
                </span>
                Hide/Delete Profile
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                <h1 className="w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]">
                  See information about your account, download an archive of your data, or
                  learn about your account deactivation options
                </h1>
                <div className="relative ">
                <div className="hidden mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>

                <div className="mt-[20px] xl:mt-[25px] w-[270px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
                <div className="">
                  <div className="mt-[20px]">
                    <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">Hide Profile</h1>
                    <h1 className="text-[14px] xl:text-[14px] font-medium">
                      Your Profile is currently{" "}
                      <span className="text-[#0F52BA]">Visible</span>
                    </h1>
                  </div>
                  <div className="mt-[20px]">

                    <div className="h-[32px] lg:h-[45px] xl:h-[50px] rounded-full absolute right-2 xl:right-[80px] mt-[-70px]" >
                      <div className='relative flex left-0 lg:left-[80px]'>
                        <button onClick={() => settoggle("hide")} className={`${toggle === "hide" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"}  w-[90px] h-[40px] rounded-[8px] `}>Hide</button>
                        <button onClick={() => settoggle("show")} className={`${toggle === "show" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"} w-[90px] h-[40px] rounded-[8px] `}>Show</button>
                      </div>
                    </div>
                  </div>

                </div>
                {toggle == "hide" ?
                  <div className="mt-[50px]">

                    <h1 className="text-[14px] xl:text-[16px]  font-medium">
                      How long would you like to hide your Profile for?
                    </h1>
                    <p className="w-full lg:w-[640px] xl:w-[698px] mt-[10px] text-[12px] font-medium text-[#949494]">
                      Hiding your Profile will make it invisible temporarily. Other
                      members will not be able to send you Invitations or Messages or
                      chat.
                    </p>
                    <div className="mt-[10px] w-[250px] h-[50px]">

                      <DynamicSelect
                        className="bg-[#F9F9F9] h-[50px] w-full flex justify-end"
                        styles={customStyles}
                        Label="S"
                        options={options}
                      />

                    </div>
                  </div>
                  : ""}
                <div className=" mt-[30px] xl:mt-[40px] w-[370px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
                <div className="mt-[20px] flex place-items-center mb-[300px]">

                  <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px] ">Hide Profile</h1>
                  <div className="absolute right-2 xl:right-0">


                    <button onClick={() => setdeleteToggle(!deleteToggle)} className={`text-[14px] xl:text-[16px] font-medium w-[150px] xl:w-[190px] h-[45px] mt-[5px]  rounded-[10px] ${!deleteToggle ? "bg-[#D90202] text-[#FFF]" : "bg-[#F9F9F9] text-[#000]"}`}>
                      Delete My Profile</button>
                  </div>
                  <div className="absolute mt-[200px] ">
                    {

                      deleteToggle ? <div> <p className="text-[13px] xl:text-[14px] font-medium"> Let us know why you wish to delete your Profile? </p>


                        <select
                          className="select mt-[25px] relative  px-[20px] focus:outline-none border-1 bg-[#F9F9F9]  border-[#CDCDCD] w-[370px] lg:w-[640px] xl:w-[700px]  h-[50px] rounded-[8px]"
                          variant="static"
                          Label="Select"
                        >
                          <option>Found my Match on RishtaForever.com</option>
                        </select>
                        <div className=" mt-[20px] xl:mt-[30px] w-full lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
                        <div className="absolute  right-0">
                          <button onClick={handleClickOpen} className=" w-[160px] xl:w-[190px] h-[50px] mt-[30px] rounded-[10px] bg-[#0F52BA]">

                            <h1 className=" text-[14px] xl:text-[16px] font-medium text-[#fff]">
                              Proceed to Delete
                          </h1>
                          </button>
                          <Dialog
                            open={openDialog}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <div className="flex flex-col space-y-[40px] justify-center w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD] bg-[#FFF]">
                              <div>
                                <h1 style={Text1}>Are you sure want</h1>
                                <p style={Text2}>Delete Your Profile?</p>
                              </div>
                              <div className="text-center space-x-[20px]">
                                <button className="bg-[#F0F0F0] w-[126px] h-[50px] rounded-[8px]" onClick={handleClose}>Not Now</button>
                                <button className="bg-[#0F52BA] w-[126px] h-[50px] text-[#FFF] rounded-[8px]" onClick={handleClose}>Yes, Delete </button>
                              </div>
                            </div>
                          </Dialog>
                        </div>
                      </div>

                        : null

                    }

                  </div>

                </div>
</div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              style={{ borderBottom: "1px solid  #E0E0E0" }}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(3)}
              >
                <span className="w-[30px]">
                  <Image width={14} height={14} src='/assests/dashboard/seting/email-alert.svg' />

                </span>
                Privacy Setting
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                <h1 className="w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]">
                  See information about your account, download an archive of your data, or
                  learn about your account deactivation options
                </h1>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className="mt-[20px]">
                  <h1 className="text-[15px]  font-medium mb-[5px]">
                    Select Display Name
                  </h1>
                  <div className="flex mt-[20px]">
                    <div className=" flex justify-center items-center">
                      <input
                        className="w-[15.5px]  h-[15.5px] "
                        type="radio"
                        id="Rihan Gajjar"
                        name="os"
                      ></input>
                      <label
                        for="Rihan Gajjar"
                        className="ml-[10px] text-[13px]   "
                      >
                        Rihan Gajjar
                      </label>
                    </div>
                    <div className="ml-[150px] sm:ml-[200px]  flex justify-center items-center">
                      <input
                        className="w-[15.5px]   h-[15.5px] "
                        type="radio"
                        id="Rihan G"
                        name="os"
                      ></input>
                      <label
                        for="Rihan G"
                        className="ml-[10px] text-[13px]   "
                      >
                        R Gajjar
                      </label>
                    </div>
                  </div>
                  <div className="flex mt-[10px]">
                    <div className=" flex justify-center items-center">
                      <input
                        className="w-[15.5px]   h-[15.5px] "
                        type="radio"
                        id="R Gajjar"
                        name="os"
                      ></input>
                      <label
                        for="R Gajjar"
                        className="ml-[10px] text-[13px]   "
                      >
                        Rihan G
                      </label>
                    </div>
                    <div className="ml-[179px] sm:ml-[229px]   flex justify-center items-center">
                      <input
                        className="w-[15.5px]   h-[15.5px] "
                        type="radio"
                        id="Profile ID"
                        name="os"
                      ></input>
                      <label
                        for="Profile ID"
                        className="ml-[10px] text-[13px]   "
                      >
                        Profile ID: SH00289943
                      </label>
                    </div>
                  </div>

                </div>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className="mt-[20px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
                    Who can see your mobile Number?
                  </h1>
                  <div className="mt-[20px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id="mobile1"
                        name="mobile number"
                      ></input>
                      <label
                        for="Profile"
                        className="ml-[10px] text-[13px] xl:text-[14px]  "
                      >
                        Visible to all

                      </label>
                    </div>
                  </div>
                  <div className="mt-[10px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id=" mobile2"
                        name="mobile number"
                      ></input>
                      <label
                        for=" Privacy"
                        className="ml-[10px] text-[13px] xl:text-[14px]  "
                      >
                        Only visible to registered Members
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%] h-[1px] bg-[#ECECEC]"></div>
                <div className="mt-[20px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
                    Who can see your email address?
                  </h1>
                  <div className="mt-[20px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id="email1"
                        name="email address"
                      ></input>
                      <label
                        for="Profile"
                        className="ml-[10px] text-[13px] xl:text-[14px]  "
                      >
                        Visible to all

                      </label>
                    </div>
                  </div>
                  <div className="mt-[10px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id=" email2"
                        name="email address"
                      ></input>
                      <label
                        for=" Privacy"
                        className="ml-[10px] text-[13px] xl:text-[14px]  "
                      >
                        Only visible to registered Members
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className="mt-[20px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
                    Profile Privacy
                  </h1>
                  <div className="mt-[10px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id="Profile"
                        name="profile privacy"
                      ></input>
                      <label
                        for="Profile"
                        className="ml-[10px] text-[13px] xl:text-[14px] mt-[12px] "
                      >
                        Visible to all, including unregistered visitors{" "}
                        <p className="text-[10px]">
                          (Photo and Name will not be visible on Profile)
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="mt-[10px] flex">
                    <div className="flex justify-center items-center">
                      <input
                        className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id=" Privacy"
                        name="profile privacy"
                      ></input>
                      <label
                        for=" Privacy"
                        className="ml-[10px] text-[13px] xl:text-[14px]  "
                      >
                        Only visible to registered Members
                      </label>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>

            {/* Email_sms_alert */}
            <Accordion
              open={open === 4}
              style={{ borderBottom: "1px solid  #E0E0E0" }}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(4)}
              >
                <span className="w-[30px]">
                  <Image width={11} height={14} src='/assests/dashboard/seting/privacy-icon.svg' />
                </span>
                Email/SMS Alert Setting
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                <h1 className="w-[90%]  text-[12px]  text-[#484848] font-medium mt-[20px]">
                  See information about your account, download an archive of
                  your data, or learn about your account deactivation options
                </h1>
                <div className=" mt-[20px] w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className=" mt-[25px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium ">My Alerts Manager</h1>
                </div>
                <h1 className="w-[580px] lg:w-[640px] xl:w-[700px] text-[11px] xl:text-[12px]  font-medium mt-[10px]">
                  Manage your subscriptions to HappyMilan.com alerts on email listed below.
                </h1>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className=" mt-[25px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium ">
                    Match Mail & Photo Match Mail
                  </h1>
                </div>
                <div className="mt-[20px] flex ">
                  <div className="flex justify-center items-center">
                    <input
                      className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
                      type="checkbox"
                      id="send"
                      name="mail"
                    ></input>
                    <label for="send" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium  ">
                      Send me Broader Matches if there are no new Preferred Matches
                    </label>
                  </div>
                </div>
                <div className=" mt-[20px]  w-[90%] sm:w-[100%]  h-[1px] bg-[#ECECEC]"></div>
                <div className=" mt-[25px]">
                  <h1 className="text-[16px] font-medium ">Email Alert</h1>
                </div>
                <div className="mt-[20px]  flex ">
                  <div className=" flex justify-center items-center">
                    <input
                      className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
                      type="radio"
                      id="Daily"
                      name="hello"
                    ></input>
                    <label for="Daily" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px] font-medium ">
                      Daily
                    </label>
                  </div>
                  <div className="ml-[200px]  flex justify-center items-center">
                    <input
                      className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
                      type="radio"
                      id="Tri-Weekly"
                      name="hello"
                    ></input>
                    <label for="Tri-Weekly" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
                      Tri-Weekly
                    </label>
                  </div>
                </div>
                <div className="mt-[20px] flex ">
                  <div className=" flex justify-center items-center">
                    <input
                      className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] "
                      type="radio"
                      id="Weekly"
                      name="hello"
                    ></input>
                    <label for="Weekly" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
                      Weekly
                    </label>
                  </div>

                  <div className="ml-[189px] xl:ml-[188px] flex justify-center items-center">
                    <input
                      className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px] rounded-none "
                      type="radio"
                      id="Unsubscribe"
                      name="hello"
                    ></input>
                    <label for="Unsubscribe" className="ml-[15px] xl:ml-[20px] text-[11px] xl:text-[12px]  font-medium ">
                      Unsubscribe
                    </label>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar2;