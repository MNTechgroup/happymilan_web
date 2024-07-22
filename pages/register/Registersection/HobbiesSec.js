import React, { useState } from "react";
import dynamic from "next/dynamic";
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { updateFormData, updateHobbies } from "../../../store/actions/registerUser";
import { connect, useDispatch } from 'react-redux';
import { HobbycustomStyle } from "../../../utils/options/styles/SelectBoxStyle";
import { FitnessDataoption, FunOptions, creativeOption } from "../../../utils/options/Register/HobbySectionOptions";


function HobbiesSec({ formData, updateFormData, HandleTabclick, activeTab }) {
  const [selectedCreative, setSelectedCreative] = useState();
  const [selectedFun, setSelectedFun] = useState();
  const [SelectedFitness, setSelectedFitness] = useState();



  const [allData, SetallData] = useState([
    {
      category: "Creative",
      value: [],
    },
    {
      category: "Fun",
      value: [],
    },
    {
      category: "Fitness",
      value: [],
    },
  ])


  const dispatch = useDispatch();

  const [savedData, setSavedData] = useState([]);


  const handleInputChange = (event) => {


    const value = event.target.value;

    const name = event.target.name

    const values = value.map(item => item.value);


    const combinedValues = [...new Set([...savedData, ...values])];

    // Check if the combined values length is more than 5
    if (combinedValues.length > 5) {
      alert("You can only select up to 5 values.");
      return;
    }

    // Update the state with the new values
    setSavedData(combinedValues);



    SetallData(prevData =>
      prevData.map(data =>
        data.category.toLowerCase() === name.toLowerCase()
          ? { ...data, value: [...new Set([...data.value, ...values])] }
          : data
      )
    );

    dispatch(updateHobbies(name, values));;


    console.log("name", name)
    if (name == "creative") {
      setSelectedCreative(value)
    }
    else if (name == "fun") {
      setSelectedFun(value)
    }
    else if (name == "fitness") {
      setSelectedFitness(value)
    }
  }




  const Text1 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "normal",
  };

  const doItlater = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }


  return (
    <>

      <div className='pt-[33px] gap-y-[30px] flex flex-col'>
        <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full w-full'>
          <div>
            <h1 className='text-[#000]' style={Text1}>Hobbies and Interest</h1>
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
        <div className=" lg:w-[664px] flex justify-between mt-[20px] pb-[10px]">
          <h1 className="font-semibold" style={Text1}>Creative</h1>
          <h1 className="md:mr-[-55px] lg:mr-[0px] 2xl:ml-[0px] xl-mr-[0px]" style={Text1}>
            Selected :{" "}
            <span onClick={() => console.log(allData)} className="w-full font-bold">{savedData.length}/5</span>
          </h1>
        </div>

        <div style={{ paddingBottom: "190px" }}>
          <div className="space-y-[20px]">

            <div>
              <div>
                <DynamicSelect

                  options={creativeOption}
                  placeholder="Select.."
                  styles={HobbycustomStyle}
                  value={selectedCreative}
                  onChange={(selectedOption) => handleInputChange({ target: { name: "creative", value: selectedOption } })}
                  isSearchable={true}
                  isMulti />
              </div>
            </div>

            <div>
              <h1 className="font-semibold" style={Text1}>Fun</h1>
              <div className="pt-[10px]">
                <DynamicSelect

                  options={FunOptions}
                  placeholder="Select.."
                  styles={HobbycustomStyle}
                  value={selectedFun}
                  onChange={(selectedOption) => handleInputChange({ target: { name: "fun", value: selectedOption } })}
                  isSearchable={true}
                  isMulti />
              </div>
            </div>

            <div>
              <h1 className="font-semibold" style={Text1}>Fitness</h1>
              <div className="pt-[10px]">
                <DynamicSelect

                  options={FitnessDataoption}
                  placeholder="Select.."
                  styles={HobbycustomStyle}
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
