import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getprivacyquestions } from "../../../../../store/actions/UserSettingAction";
import { getCookie } from "cookies-next";

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




  const postDataToApi = () => {
    setTimeout(() => {
      setshowbtn(false);
    }, 1000);
    const changedFields = formData.map((question) => ({
      id: question.id,
      question: question.question,
      options: question.options,
    }));

    console.log('Changed fields:', changedFields);
    // Replace the console.log with your logic to post the changed fields to the API


    try {
      // Iterate over each question in formData
      for (const question of formData) {
        // Prepare the data object for the PUT request
        const requestData = {
          question: question.question,
          options: question.options,
        };

        let updatedOptions = question.options.map(({ _id, option, isSelected }) => ({ option, isSelected }));
        // console.log("Question id :" ,question.id , question.question)
        // Make the PUT request to the API for the current question


        // Check if the request was successful
        const axios = require('axios');
        const token = getCookie('authtoken')
        let data = JSON.stringify({
          "question": question.question,
          "options": updatedOptions
        });
        console.log("🚀 ~ postDataToApi ~ data:", data)



        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: `https://happymilan.tech/api/v1/user/privacy/update-privacy/${question.id}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          data: data
        };

        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            dispatch(Getprivacyquestions())
          })
          .catch((error) => {
            console.log(error);
          });

      }
    } catch (error) {
      console.error('Error occurred while making PUT request:', error);
    }
  }
  const TextHeading = {
    color: "#6A6A6A",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }

  const UserNames = useSelector((state) => state.myprofile?.data);

  const firstLetterOfName = UserNames?.name ? UserNames.name.charAt(0) : '';

  console.log("🚀 ~ PrivacySeting ~ UserNames:", UserNames)


  const HandleChangeUserName = (e) =>{
    setshowbtn(true)
    console.log("🚀 ~ HandleChangeUserName ~ e:", e.target.id)
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
        <div className="mt-[20px]">
          <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
            Select Display Name
          </h1>

          <div className="mt-[20px] flex place-items-center">
            <input
              className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
              type="radio"
              id={UserNames?.name?.charAt(0) + " " + UserNames?.cast}
              name="os"
              onChange={HandleChangeUserName}
            ></input>
            <label
              for={UserNames?.name?.charAt(0) + " " + UserNames?.cast}
              className="ml-[10px] text-[13px] xl:text-[14px]  "
            >
            {UserNames?.name?.charAt(0) + " " + UserNames?.cast}
            </label>
          </div>
          <div className=" mt-[15px] flex place-items-center ">
            <input
              className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
              type="radio"
              id={UserNames?.cast + " " + UserNames?.name}
              name="os"
              onChange={HandleChangeUserName}
            ></input>
            <label
              for={UserNames?.cast + " " + UserNames?.name}
              className="ml-[10px] text-[13px] xl:text-[14px]  "
            >
              {UserNames?.cast + " " + UserNames?.name}
            </label>
          </div>



          <div className=" mt-[15px] flex place-items-center">
            <input
              className="w-[15.5px]  xl:w-[16px] h-[15.5px] xl:h-[16px]"
              type="radio"
              id="Profile ID"
              name="os"
            ></input>
            <label
              for="Profile ID"
              className="ml-[10px] text-[13px] xl:text-[14px]  "
            >
              Profile ID: SH00289943
            </label>
          </div>


        </div>
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


    </>
  );
}

export default PrivacySeting;
