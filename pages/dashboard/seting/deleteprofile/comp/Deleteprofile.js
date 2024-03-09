import React, { useState } from "react";
import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import Dialog from '@mui/material/Dialog';
import Image from "next/image";


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

  return (
    <>
      <div className="flex mt-[-17px]">
        <Image width={22} height={14} src='/assests/dashboard/seting/delete-profile-icon.svg' />
        <h1 className="text-[15px] xl:text-[16px] font-medium ml-[15px]">Hide/Delete Profile</h1>
      </div>
      <h1 className="w-[580px] lg:w-[650px] xl:w-[700px] text-[11px] xl:text-[12px] text-[#484848] font-medium mt-[20px]">
        See information about your account, download an archive of your data, or
        learn about your account deactivation options
      </h1>
      <div className="mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
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
            <div className='relative flex left-[80px]'>
              <button onClick={() => settoggle("hide")} className={`${toggle === "hide" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"}  w-[100px] h-[50px] rounded-[8px] `}>Hide</button>
              <button onClick={() => settoggle("show")} className={`${toggle === "show" ? "bg-[#0F52BA] text-[white]" : "bg-[#F9F9F9] text-[black]"} w-[100px] h-[50px] rounded-[8px] `}>Show</button>
            </div>
          </div>
        </div>

      </div>
      {toggle == "hide" ?
        <div className="mt-[50px]">

          <h1 className="text-[14px] xl:text-[16px]  font-medium">
            How long would you like to hide your Profile for?
          </h1>
          <p className="w-[580px] lg:w-[640px] xl:w-[698px] mt-[10px] text-[12px] font-medium text-[#949494]">
            Hiding your Profile will make it invisible temporarily. Other
            members will not be able to send you Invitations or Messages or
            chat.
          </p>
          <div className="mt-[10px] w-[340px] h-[50px]">

          <DynamicSelect
              className="bg-[#F9F9F9] h-[50px] w-[300px] flex justify-end"
              styles={customStyles}
              Label="S"
               options={options}
            />

          </div>
        </div>
        : ""}
      <div className=" mt-[30px] xl:mt-[40px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
      <div className="mt-[20px] flex place-items-center mb-[300px]">

        <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px] ">Hide Profile</h1>
        <div className="absolute right-2 xl:right-0">


          <button onClick={() => setdeleteToggle(!deleteToggle)} className={`text-[14px] xl:text-[16px] font-medium w-[160px] xl:w-[190px] h-[50px] mt-[5px]  rounded-[10px] ${!deleteToggle ? "bg-[#D90202] text-[#FFF]" : "bg-[#F9F9F9] text-[#000]"}`}>
            Delete My Profile</button>
        </div>
        <div className="absolute mt-[200px] ">
          {

            deleteToggle ? <div> <p className="text-[13px] xl:text-[14px] font-medium"> Let us know why you wish to delete your Profile? </p>


              <select
                className="select mt-[25px] relative  px-[20px] focus:outline-none border-1 bg-[#F9F9F9]  border-[#CDCDCD] w-[570px] lg:w-[640px] xl:w-[700px]  h-[50px] rounded-[8px]"
                variant="static"
                Label="Select"
              >
                <option>Found my Match on RishtaForever.com</option>
              </select>
              <div className=" mt-[20px] xl:mt-[30px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
              <div className="absolute  right-0">
                <button onClick={handleClickOpen} className=" w-[160px] xl:w-[190px] h-[50px] mt-[30px] rounded-[10px] bg-[#0F52BA]">

                  <h1 className=" text-[14px] xl:text-[16px] font-medium text-[#fff]">
                    Proceed to Delete

                  </h1>
                </button>
                <Dialog
                  open={open}
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


    </>
  );
}

export default DeleteProfile;
