import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import("react-select"), { ssr: false });

const Comp1 = ({ handleNextClick, SetSelectedText, onClose }) => {
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const Heading = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: "10px",
      paddingLeft: "8px",
      width: "500px",
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

  const reportReasons = [
    { value: "inappropriate_content", label: "Inappropriate Content" },
    { value: "spam_scam", label: "Spam or Scam" },
    { value: "harassment_bullying", label: "Harassment or Bullying" },
    { value: "impersonation", label: "Impersonation" },
    { value: "privacy_violation", label: "Privacy Violation" },
    { value: "misinformation_fake_news", label: "Misinformation or Fake News" },
    { value: "violence_threats", label: "Violence or Threats" },
    { value: "copyright_infringement", label: "Copyright Infringement" },
    { value: "other", label: "Other" },
    // Add more reasons as needed
  ];

  return (
    <>
      <div
        className={`relative z-10 bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] lg:h-[341px]`}
      >
        <div className="flex justify-between items-center">
          <div className="text-center w-full">
            <h1
              style={Heading}
              onClick={() => SetiscurrentPage(iscurrentPage + 1)}
            >
              Report
            </h1>
          </div>
          <div className="">
            <div>
              <Image
                width={24}
                height={24}
                alt="close-icon"
                className="cursor-pointer"
                onClick={onClose}
                loading='lazy'
                src="/assests/social/close.svg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{ width: "90%", height: "1px", backgroundColor: "#EDEDED" }}
          ></div>
        </div>

        <div className="grid place-items-center space-y-[50px]">
          <div className="w-full space-y-[10px]">
            <div className="relative left-[30px] mt-[30px]">
              <h1 style={TitleText} className="text-[16px] text-[#000]">
                Please select the problems
              </h1>
            </div>
            <div className="w-full grid place-items-center">
              <DynamicSelect
                className="h-[50px] w-[500px] flex justify-end"
                styles={customStyles}
                options={reportReasons}
                onChange={(e) => SetSelectedText(e.label)}
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleNextClick}
              id="grad-button"
              className="rounded-[10px] w-[500px] h-[50px]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Comp2 = ({ handleNextClick, isSelctedText, onClose }) => {
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const ListText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Heading = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <>
      <div
        className={`relative z-10 bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] lg:h-[400px] `}
      >
        <div className="flex justify-between items-center">
          <div className="text-center w-full">
            <h1
              style={Heading}
              onClick={() => SetiscurrentPage(iscurrentPage + 1)}
            >
              Report
            </h1>
          </div>
          <div className="">
            <div>
              <Image
                width={24}
                height={24}
                alt="close-icon"
                className="cursor-pointer"
                onClick={onClose}
                loading='lazy'
                src="/assests/social/close.svg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{ width: "90%", height: "1px", backgroundColor: "#EDEDED" }}
          ></div>
        </div>

        <div className="grid place-items-center space-y-[50px]">
          <div className="w-full space-y-[10px]">
            <div className=" grid place-items-center ">
              <div className="w-[500px] space-y-[20px] pl-[10px]">
                <div className="mt-[20px]">
                  <h1 style={TitleText} className="text-[16px] text-[#000]">
                    {isSelctedText}
                  </h1>
                </div>
                <div style={ListText} className="text-[14px] space-y-[20px]">
                  <h1>We don't allow things such as:</h1>
                  <ul className="list-disc pl-[25px] space-y-[10px]">
                    <li>
                      Encouraging people to engage with content under false
                      pretences
                    </li>
                    <li>
                      Directing people away from HappyMilan through the
                      misleading use of links
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleNextClick}
              id="grad-button"
              className="rounded-[10px] w-[500px] h-[50px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Comp3 = ({ handleNextClick, onClose }) => {
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const ListText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Heading = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <>
      <div
        className={`relative z-10 bg-white rounded-lg shadow-lg p-6 w-[588px] md:h-[80%] lg:h-[438px]`}
      >
        <div className="flex justify-between items-center">
          <div className="text-center w-full">
            <h1
              style={Heading}
              onClick={() => SetiscurrentPage(iscurrentPage + 1)}
            >
              Thanks for letting us know
            </h1>
          </div>
          <div className="">
            <div>
              <Image
                width={24}
                height={24}
                alt="close-icon"
                className="cursor-pointer"
                loading='lazy'
                onClick={onClose}
                src="/assests/social/close.svg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{ width: "90%", height: "1px", backgroundColor: "#EDEDED" }}
          ></div>
        </div>

        <div className="grid place-items-center space-y-[50px]">
          <div className="w-full space-y-[10px]">
            <div className=" grid place-items-center ">
              <div className="w-[500px] space-y-[20px] pl-[10px]">
                <div className="w-[500px] text-center mt-[20px]">
                  <h1 style={ListText} className="text-[14px] text-[#A3A3A3]">
                    We’ll use this information to improve our process. We may
                    also use it to find and remove more spam.
                  </h1>
                </div>
                <div
                  style={ListText}
                  className="text-[14px] space-y-[20px] text-center"
                >
                  <h1 style={TitleText} className="text-[14px]">
                    One More Step You Can Take
                  </h1>
                </div>
                <div className="grid place-items-center">
                  <Image
                    width={34}
                    height={34}
                    loading='lazy'
                    src={"/assests/dashboard/icon/Block-not-found.svg"}
                  />
                </div>
                <div className="text-center">
                  <h1 style={ListText} className="text-[14px]">
                    Block Rohan Patel Profile
                  </h1>
                  <h1 style={ListText} className="text-[12px] text-[#A3A3A3]">
                    You won’t able to see or contact each other
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleNextClick}
              id="grad-button"
              className="rounded-[10px] w-[500px] h-[50px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function ReportModal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  const Heading = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const [iscurrentPage, SetiscurrentPage] = useState(0);

  const [isSelctedText, SetSelectedText] = useState("");

  const handleNextClick = () => {
    if (iscurrentPage >= 2) {
      onClose();
    } else {
      SetiscurrentPage(iscurrentPage + 1);
    }
  };

  const renderTabContent = () => {
    switch (iscurrentPage) {
      case 0:
        return (
          <Comp1
            handleNextClick={handleNextClick}
            onClose={onClose}
            SetSelectedText={SetSelectedText}
          />
        );
      case 1:
        return (
          <Comp2
            handleNextClick={handleNextClick}
            onClose={onClose}
            isSelctedText={isSelctedText}
          />
        );
      case 2:
        return <Comp3 handleNextClick={handleNextClick} onClose={onClose} />;
      default:
        "";
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>

        {renderTabContent()}
      </div>
    </>
  );
}

export default ReportModal;
