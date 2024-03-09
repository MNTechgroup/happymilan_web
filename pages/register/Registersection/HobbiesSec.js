import React, { useState } from "react";
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData } from "../../../store/actions/registerUser";
import { connect } from 'react-redux';

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



function HobbiesSec({ formData, updateFormData , HandleTabclick, activeTab }) {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedCreative, setSelectedCreative] = useState();
  const [selectedFun, setSelectedFun] = useState();
  const [SelectedFitness, setSelectedFitness] = useState();

  const FitnessDataoption = [
    { value: "Running", label: "Running" },
    { value: "Cycling", label: "Cycling" },
    { value: "Yoga", label: "Yoga" },
    { value: "Walking", label: "Walking" },
    { value: "Working Out", label: "Working Out" },
    { value: "Trekking", label: "Trekking" },
    { value: "Aerobics/Zumba", label: "Aerobics/Zumba" },
    { value: "Swimming", label: "Swimming" },

  ]
  const creativeOption = [
    { value: "Writing", label: "Writing" },
    { value: "PlayInstrument", label: "Play Instrument" },
    { value: "Poetry", label: "Poetry" }
  ]
  const ReligionOptions = [
    { value: 1, label: "Hinduism" },
    { value: 2, label: "Judaism" },
    { value: 3, label: "Christianity" },
    { value: 4, label: "Buddhism" },
    { value: 5, label: "Islam" },
    // Add more religions as needed
  ];

  const FunOptions =
    [
      { value: "Movie", label: "Movie" },
      { value: "Sports", label: "Sports" },
      { value: "Biking", label: "Biking" },
      { value: "Music", label: "Music" },
      { value: "SocialMedia", label: "Social Media" }
    ]

  const customStyle = {
    control: (provided, state) => ({
      ...provided,
      paddingRight: '10px',
      paddingLeft: "8px",
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

  const handleReligion = (data) => {
    setSelectedReligion(data)
  }

  const [allData,SetallData] = useState({
    creative :"",
    fun : "",
    fitness : ""
  })
  const handleInputChange = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    if (name == "creative") {

      
      const  funData = creativeOption.find((option) => option.value === value);
      setSelectedFun(funData)
      SetallData(prev=>{ return {...prev , creative : funData}})
      // SetallData(prev=>{return {...prev , creative : actdata}})


    } else if (name == "fun") {
      const  funData = FunOptions.find((option) => option.value === value);
      setSelectedFun(funData)
      SetallData(prev=>{ return {...prev , fun : funData}})
    }
    else if (name == "fitness") {
      const  fitData = FitnessDataoption.find((option => option.value === value))
      setSelectedFitness(fitData)
      SetallData(prev=>{return {...prev,fitness:fitData}})
     }
    SetallData((prev)=>{
      
        return { ...prev ,[name]: value}
    })

    const dataArray = Object.entries(allData).map(([value, label]) => ({ value, label }));

    const labelValuesArray = dataArray.flatMap(item => {
      // Extract the value property from each object in the label array
      const labelValues = item.label.map(labelItem => labelItem.value);
      return labelValues;
    });
    updateFormData({
      allhobbies: { ...formData.allhobbies, hobbies: labelValuesArray },
    });
  }

  const Subdata = () =>{
    const dataArray = Object.entries(allData).map(([value, label]) => ({ value, label }));

    const labelValuesArray = dataArray.flatMap(item => {
      // Extract the value property from each object in the label array
      const labelValues = item.label.map(labelItem => labelItem.value);
      return labelValues;
    });

    updateFormData({
      allhobbies: { ...formData.allhobbies, hobbies: labelValuesArray },
    });
   
  }

  return (
    <>

      <div className='pt-[33px] gap-y-[30px] flex flex-col'>
        <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full w-full'>
          <div>
            <h1 onClick={Subdata} className='text-[#000]' style={Text1}>Hobbies and Interest</h1>
          </div>
          <div>
            <h1 onClick={() => HandleTabclick(activeTab + 1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
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
          <div className="space-y-[20px]">

            <div>
              <div>
                <DynamicSelect

                  options={creativeOption}
                  placeholder="Select.."
                  styles={customStyle}
                  value={selectedCreative}
                  onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption } })}
                  isSearchable={true}
                  isMulti />
              </div>
            </div>

            <div>
              <h1 className="font-semibold" style={Text1}>Fun</h1>
              <div>
                <DynamicSelect

                  options={FunOptions}
                  placeholder="Select.."
                  styles={customStyle}
                  value={selectedFun}
                  onChange={(selectedOption) => handleInputChange({ target: { name: "fun" ,value: selectedOption }})}
                  isSearchable={true}
                  isMulti />
              </div>
            </div>

            <div>
              <h1 className="font-semibold" style={Text1}>Fitness</h1>
              <div>
                <DynamicSelect

                  options={FitnessDataoption}
                  placeholder="Select.."
                  styles={customStyle}
                  value={SelectedFitness}
                  onChange={(selectedOption) => handleInputChange({ target: { name: "fitness", value: selectedOption } })}
                  isSearchable={true}
                  isMulti />
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default connect((state) => ({ formData: state.form.formData }), { updateFormData })(HobbiesSec);
