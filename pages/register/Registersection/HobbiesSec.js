import React, { useState } from "react";

const Text1 = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "normal",
};

const TitleText = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}

const btnText = {
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  border: "1px solid #E8E8E8",
};

const doItlater = {
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}

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

function HobbiesSec({HandleTabclick,activeTab}) {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const HobbySection = ({ title, hobbies }) => {
    return (
      <>

        <div className="flex justify-between relative top-[3px] mt-[16px]  ">

          <h1 className="relative font-semibold top-[-15px]" style={Text1}>{title}</h1>
        </div>
        <div className="flex flex-wrap lg:w-[680px] w-full  mt-[10px] relative top-[-10px] ">
          {hobbies.map((res) => {
            return (
              <>
                <div className="">
                  <button
                    className={`pl-[18px] md:mr-[8px] mr-[10px] mt-[8px] text-left pl-[10px] duration-500 w-[160px] 2xl:w-[216px] xl:w-[216px] lg:w-[207px] md:w-[210px] h-[40px] rounded-[8px] hover:bg-[#0F52BA] hover:text-white ${selectedHobbies.includes(res)
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
      <div className='pt-[33px] gap-y-[30px] flex flex-col'>
        <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full w-full'>
          <div>
            <h1 className='text-[#000]' style={Text1}>Hobbies and Interest</h1>
          </div>
          <div>
            <h1 onClick={()=>HandleTabclick(activeTab + 1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
          </div>
        </div>
        <div>
          <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
            <div className='h-[1px] w-[100%] bg-[#17C270]'></div>
          </div>
        </div>
      </div>

      <div className='2xl:w-[664px] xl:w-[664px] w-full'>
        <div className=" lg:w-[664px] flex justify-between mt-[30px]">
          <h1 className="font-semibold" style={Text1}>Creative</h1>
          <h1 className="md:mr-[-55px] lg:mr-[0px] 2xl:ml-[0px] xl-mr-[0px]" style={Text1}>
            Selected :{" "}
            <span className="w-full font-bold">{selectedHobbies.length}/5</span>
          </h1>
        </div>

        <div style={{ paddingBottom: "190px" }}>
          {sections.map((section) => (
            <>
              <HobbySection
                key={section.title}
                title={section.title}
                hobbies={section.hobbies}
                selectedHobbies={selectedHobbies}
                handleHobbyClick={handleHobbyClick}
              />
              <hr className="w-[90%]  lg:w-[664px] h-[1px] bg-[#ECECEC]"></hr>
              <div className="pb-[12px]"></div>
            </>
          ))}
        </div>

      </div>
    </>
  );
}

export default HobbiesSec;
