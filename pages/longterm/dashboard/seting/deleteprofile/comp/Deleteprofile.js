import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Hidemyprofile, Hidemyprofileclosemodel } from "../../../../../../store/actions/UserSettingAction";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

function DeleteProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: "10px",
      paddingLeft: "8px",
      width: "300px",
      height: "50px",
      borderRadius: "8px", // Add padding on the right side
      border: "1px solid #e6e6e6",
      borderColor: state.isFocused ? "black" : provided.borderColor,
      "&:hover": {
        borderColor: "black",
      },
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
      paddingRight: "20px",
      // Hide the vertical line behind the arrow
    }),
  };

  const options1 = [
    { value: "oneWeek", label: "1 Week" },
    { value: "twoWeek", label: "2 Week" },
    { value: "oneMonth", label: "1 Week" },
    { value: "threeMonth", label: "3 Week" },
    { value: "sixMonth", label: "6 Week" },
  ];
  const options2 = [
    { value: "found-my-match", label: "Found My Match" },
    { value: "wants-to-take-break", label: "Wants to take a break" },
    { value: "not-satisfied-by-matches", label: "Not Satisfied by matches" },
    { value: "other-reason", label: "Other Reason" },
  ];


  const [openModel, setOpenModel] = useState(false);
  const handleModelOpen = () => {
    setOpenModel(true);
  };
  const handleModelClose = () => {
    setOpenModel(false);
  };

  const [modelShow, setModelShow] = useState(false);
  const handleModelShow = () => {
    setModelShow(true);
  };
  const handleModelHide = () => {
    setModelShow(false);
  };


  const dispatch = useDispatch();

  const { loading, data, closemodal } = useSelector((state) => state.userseting.Profilehide)

  const router = useRouter();

  useEffect(() => {

    if (getCookie("authtoken")) {

    } else {
      router.push("/login")
    }


  }, [data])

  useEffect(() => {
    if (closemodal) {
      setOpenModel(false);
      setModelShow(false);
      dispatch(Hidemyprofileclosemodel());
      // console.log("Calling....")
    }
  }, [closemodal])


  const [SelectHideDuration, SetselectHideduration] = useState({
    isProfileHide: true,
    timeForProfileHide: "",
  })

  const HandleSelectHideDuration = (data) => {
    SetselectHideduration((prev) => ({
      ...prev,
      timeForProfileHide: data.value
    }))
  }

  const HanldeHideProfile = () => {

    dispatch(Hidemyprofile(SelectHideDuration))
    console.log(SelectHideDuration)

  }



  const [SelectDeleteReason, SetselectDeleteReason] = useState({
    isProfileDelete: true,
    reasonForProfileDelete: ""
  })

  const HanldeSelectDeleteReason = (data) => {
    SetselectDeleteReason((prev) => ({
      ...prev,
      reasonForProfileDelete: data.value
    }))
  }

  const HanldeDeleteProfile = () => {
    dispatch(Hidemyprofile(SelectDeleteReason))
    console.log(SelectDeleteReason)
  }
  const TextHeading = {
    color: "#6A6A6A",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }

  return (
    <>
      <div className="flex mt-[-17px]">
        <h1 id="setting-text-grad" className="text-[15px] xl:text-[16px]  ml-[0px]">Profile Setting</h1>
      </div>
      <div className="w-[500px] lg:w-[640px] xl:w-[700px]">
        <h1 style={TextHeading} className=" mt-[20px]">
          This menu enables users to conceal or delete their profile from public visibility
        </h1>
      </div>

      <div className="mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
      <div className="">
        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Hide Profile
          </h1>
          <h1 className="text-[12px] xl:text-[14px] text-[#7C7878] font-medium mt-[1.5%]">
            Taking this action makes your profile temporarily invisible. Invites
            or chats are inaccessible
          </h1>
          <div className="flex mt-[5%] justify-between place-items-center">
            <div className="w-[300px]">
              <DynamicSelect
                className="w-[100%] h-[40px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]"
                styles={customStyles}
                placeholder=" Select Duration"
                options={options1}
                onChange={HandleSelectHideDuration}
              />
            </div>
            <div>
              <button
                onClick={handleModelOpen}
                id={SelectHideDuration?.timeForProfileHide ? "grad-button" : "DisableBTN"}
                disabled={!SelectHideDuration?.timeForProfileHide}
                className="text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[120px] h-[40px] xl:h-[50px] rounded-[25px]"
              >

                Hide
              </button>
              <Modal
                className=""
                BackdropProps={{ style: { opacity: 1 } }}
                open={openModel}
                onClose={() => handleModelOpen(false)}
              >
                <Box
                  position="absolute"
                  className=" focus:outline-none"
                  top="32%"
                  left="38%"
                >
                  <Typography className="bg-[#fff]    w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD]">
                    <div className="w-[100%] h-[100%] ">
                      <div className="text-center p-[50px]">
                        <div className="mt-[10px]">
                          <h1 className="text-[20px]">Are you sure want</h1>
                          <p className="text-[14px]">Hide Your Profile?</p>
                        </div>
                        <div className="flex gap-[15px] mt-[40px]">
                          <button
                            onClick={handleModelClose}
                            className="text-[16px] w-[126px] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-[23px]"
                          >
                            Not Now
                          </button>
                          <button
                            id="grad-button"
                            onClick={HanldeHideProfile}
                            className="text-[16px] text-[#fff] w-[126px] h-[40px] xl:h-[50px]  rounded-[23px]"
                          >
                            {loading ?
                              <>
                                <Image alt="loader" width={25} height={25} className='animate-spin inline ' src='/assests/animation/loaderIcon.svg' />

                              </>
                              :
                              <>
                                Yes, Hide{" "}
                              </>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[30px] xl:mt-[40px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
      <div className="">
        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Delete your profile
          </h1>
          <h1 className="text-[12px] xl:text-[14px] text-[#7C7878] font-medium mt-[1.5%]">
            You'll lose all profile details, Match interactions, and paid
            memberships permanently.
          </h1>
          <div className="flex mt-[5%] justify-between place-items-center">
            <div className="w-[300px]">
              <DynamicSelect
                className="w-[100%] h-[40px] xl:h-[50px]  mt-[10px]  text-[16px] placeholder:text-[black]"
                styles={customStyles}
                placeholder=" Select Reason"
                options={options2}
                onChange={HanldeSelectDeleteReason}
              />
            </div>
            <div>
              <button
                onClick={handleModelShow}
                id={SelectDeleteReason?.reasonForProfileDelete ? "grad-button" : "DisableBTN"}
                disabled={!SelectDeleteReason?.reasonForProfileDelete}
                className=" text-[12px] lg:text-[14px] xl:text-[16px] text-[white] w-[120px] h-[40px] xl:h-[50px] rounded-[25px]"
              >
                Delete
              </button>
              <Modal
                className=""
                BackdropProps={{ style: { opacity: 1 } }}
                open={modelShow}
                onClose={() => handleModelShow(false)}
              >
                <Box
                  position="absolute"
                  className=" focus:outline-none"
                  top="32%"
                  left="38%"
                >
                  <Typography className="bg-[#fff]    w-[370px] h-[264px] rounded-[10px] border-[1px] border-[#DDD]">
                    <div className="w-[100%] h-[100%] ">
                      <div className="text-center p-[50px]">
                        <div className="mt-[10px]">
                          <h1 className="text-[20px]">Are you sure want</h1>
                          <p className="text-[14px]">Delete Your Profile?</p>
                        </div>
                        <div className="flex gap-[15px] mt-[40px]">
                          <button
                            onClick={handleModelHide}
                            className="hover:bg-[#EFF5FF] text-[16px] w-[126px] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-[23px]"
                          >
                            Not Now
                          </button>
                          <button
                            id="grad-button"
                            onClick={HanldeDeleteProfile}
                            className="text-[16px] text-[#fff] w-[126px] h-[40px] xl:h-[50px]  rounded-[23px]"
                          >{loading ?
                            <>
                              <Image alt="loader" width={25} height={25} className='animate-spin inline ' src='/assests/animation/loaderIcon.svg' />

                            </>
                            :
                            <>
                              Yes, Delete{" "}
                            </>
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteProfile;
