import React, { useState } from "react";

const Text1 = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const btnText = {
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  border: "1px solid #E8E8E8",
};

const sections = [
  {
    hobbies: [
      "Writing",
      "Play Instrument",
      "Poetry",
      "Cooking",
      "Painting",
      "Gardening",
      "Singing",
      "DIY crafts",
      "Blogging",
      "Photography",
      "Dancing",
      "Content Creation",
    ],
  },
  {
    title: "Fun",
    hobbies: [
      "Movie",
      "Sports",
      "Biking",
      "Music",
      "Social Media",
      "Clubbing",
      "Travelling",
      "Shopping",
      "Gaming",
      "Reading",
      "Binge-Watching",
      "Theater & Events",
    ],
  },
  {
    title: "Fitness",
    hobbies: [
      "Running",
      "Cycling",
      "Yoga",
      "Walking",
      "Working Out",
      "Trekking",
      "Aerobics/Zumba",
      "Swimming",
    ],
  },
];

function HobbiesSec() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const HobbySection = ({ title, hobbies }) => {
    return (
      <>
       
        <div className="flex justify-between  mt-[1%] mr-[20%] ml-[2%]">
          <h1 style={Text1}>{title}</h1>
        </div>
        <div className="flex flex-wrap lg:ml-[12px] lg:w-[680px]  mt-[10px]">
          {hobbies.map((res) => {
            return (
              <>
                <div className="m-1 ml-[10px] lg:ml-[4px]">
                  <button
                    className={` text-left pl-[10px] duration-500 w-[170px] lg:w-[207px] md:w-[210px] h-[40px] rounded-[8px] hover:bg-[#0F52BA] hover:text-white ${
                      selectedHobbies.includes(res)
                        ? "bg-[#0F52BA] text-white"
                        : ""
                    }`}
                    style={btnText}
                    onClick={() => handleHobbyClick(res)}
                  >
                    {res}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const handleHobbyClick = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
    } else {
      if (selectedHobbies.length < 5) {
        setSelectedHobbies([...selectedHobbies, hobby]);
      }
    }

    console.log(selectedHobbies);
  };
  return (
    <>
       <div className="lg:relative  top-[-15px] left-[-30px]"> 
        <div className="m-5">
          <h1 id="register-text">Hobbies and Interest</h1>
        </div>
        <div className="m-5 my-5 md:w-auto w-[90%] lg:w-[630px]" id="progress-container">
          <div className="w-[100%]" id="progress-inner"></div>
        </div>
        <div className=" lg:w-[630px] flex justify-between mr-[20%] ml-[2%]">
          <h1 style={Text1}>Creative</h1>
          <h1 className="" style={Text1}>
            Selected :{" "}
            <span className="w-full font-bold">{selectedHobbies.length}/5</span>
          </h1>
        </div>

        <div  style={{ paddingBottom: "100px" }}>
          {sections.map((section) => (
            <HobbySection
              key={section.title}
              title={section.title}
              hobbies={section.hobbies}
              selectedHobbies={selectedHobbies}
              handleHobbyClick={handleHobbyClick}
            />
          ))}
        </div>
      </div>
      </>
  );
}

export default HobbiesSec;
