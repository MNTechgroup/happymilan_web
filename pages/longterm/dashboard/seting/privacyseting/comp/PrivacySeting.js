import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getprivacyquestions, UpdateDisplayName } from "../../../../../../store/actions/UserSettingAction";
import { getCookie } from "cookies-next";
import { capitalizeFirstLetter } from "../../../../../../utils/form/Captitelize";
import DisplayNameSelect from "./function/DisplayNameSelect";
import { Dialog } from "@mui/material";
import { UPDATE_DISPLAY_STATUS } from "../../../../../../store/type";

function PrivacySeting() {


  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.userseting.privacyquestions)
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    dispatch(Getprivacyquestions());
  }, [dispatch]);

  useEffect(() => {
    // Update local state when 'data' changes
    setFormData(data);
  }, [data]);


  // const [originalFormData, setOriginalFormData] = useState(data);
  //  const [Loading, setLoading] = useState(false);
  const [changedQuestionId, setChangedQuestionId] = useState(null);
  const [showbtn, setshowbtn] = useState(false)

  const handleOptionChange = (questionIndex, optionIndex) => {
    setshowbtn(true);
    // Update the selected option in the state
    const updatedFormData = [...formData];
    updatedFormData[questionIndex].options.forEach((option, index) => {
      option.isSelected = index === optionIndex;
    });
    setFormData(updatedFormData);

    // Set the ID of the changed question
    setChangedQuestionId(updatedFormData[questionIndex].id);
  };


  const { NameChangeloading, status, error } = useSelector((state) => state?.userseting.DisplayName)
  const [openShortlistModal, setopenShortlistModal] = React.useState(false);

  const [shortlistText, setshortlistText] = useState();
  const Urlmodaltext = {
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };



  useEffect(() => {
    console.log("start")
    if (status != "") {
      console.log("done")
      setshowbtn(false)

      setopenShortlistModal(true);


      setTimeout(() => {
        setopenShortlistModal(false);
      }, 900);
    }
  }, [status])


  const postDataToApi = () => {

    dispatch(UpdateDisplayName(SelectedDisplayName))
  }
  const TextHeading = {
    color: "#6A6A6A",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }

  const [SelectedDisplayName, SetSelectedDisplayName] = useState()

  const HandleChangeUserName = (e) => {
    // dispatch(UpdateDisplayName(e.target.value))
    SetSelectedDisplayName(e.target.value)
    setshowbtn(true)
  }


  return (
    <>

      <div className="mb-[80px]">
        <div className="flex mt-[-17px]">
          <h1 id="setting-text-grad" className="text-[15px] xl:text-[16px]  ml-[0px]">Privacy Setting</h1>
        </div>
        <div className="w-[500px] lg:w-[640px] xl:w-[700px]">
          <h1 style={TextHeading} className=" mt-[20px]">
            This menu enables users to conceal or delete their profile from public visibility
          </h1>
        </div>
        <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        <DisplayNameSelect HandleChangeUserName={HandleChangeUserName} />
        <div className=" mt-[10px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
        {loading ? " " :
          <>
            <div>
              {formData?.map((question, questionIndex) => (
                <div key={questionIndex} className="mt-[20px]">
                  <h1 className="text-[15px] xl:text-[16px] font-medium mb-[20px]">
                    {question.question}
                  </h1>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="mt-[15px] flex">
                      <div className="flex justify-center items-center">
                        <input
                          className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
                          type="radio"
                          id={`${questionIndex}-${optionIndex}`}
                          name={`question-${questionIndex}`}
                          checked={option.isSelected} // Apply default selection based on isSelected property
                          onChange={() => handleOptionChange(questionIndex, optionIndex)}
                        />
                        <label
                          htmlFor={`${questionIndex}-${optionIndex}`}
                          className="ml-[10px] text-[13px] xl:text-[14px]"
                        >
                          {option.option}
                        </label>
                      </div>
                    </div>
                  ))}
                  <div className=" mt-[20px] xl:mt-[25px] w-[570px] lg:w-[640px] xl:w-[700px] h-[1px] bg-[#ECECEC]"></div>
                </div>
              ))}
              {/* <button onClick={postDataToApi}>Submit</button> */}

              <div className="w-full">
                <div className="flex justify-end mt-[10px]">
                  {showbtn ?
                    <button onClick={postDataToApi} id="grad-button" className="w-[100px] h-[40px] rounded-[22px]">Save</button> : ""}
                </div>
              </div>
            </div>
          </>}
      </div>

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
          className="bg-[#333333] w-[full] rounded-[100px] text-center grid place-items-center"
        >
          <div className="text-[14px]" style={Urlmodaltext}>
            <span className="text-[#fff]"> {"Your Display Name Has Been Updated!"}</span>
          </div>
        </div>
      </Dialog>

    </>
  );
}

export default PrivacySeting;
