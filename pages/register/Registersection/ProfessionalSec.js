import React from 'react'

import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style For Select Box

const customStyles = {
    control: (provided) => ({
      ...provided,
      paddingRight: '10px',
      width:"300px",
      height:"50px",
      borderRadius:"8px" // Add padding on the right side
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
      paddingRight:"20px"
      // Hide the vertical line behind the arrow
    }),
  };
  

const Text1 = {
    color: "#0F52BA",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}
const Spanstyle = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    position: "relative",
    top: "-10px",
    left: "4px"
}

function ProfessionalSec() {

    const options1 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const options2 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    const options3 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const options4 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const options5 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

    return (
        <>

            <div className="lg:relative  top-[-15px] left-[-30px]">
                <div className='pb-[100px] lg:pb-[0px] md:pb-[0px]'>
                    <div className="m-5 flex justify-between">
                        <h1 id="register-text">Professional Details</h1>
                        <h1 className='cursor-pointer lg:mr-[27%]' style={Text1}>I{`’`}ll do it later</h1>
                    </div>
                    <div className="m-5 my-5 md:w-auto w-[300px] lg:w-[630px]" id="progress-container">
                        <div className=" w-[250px] lg:w-[70%]" id="progress-inner"></div>
                    </div>

                    <div className="ml-[6px]">
                        <div className='flex flex-wrap gap-3'>
                            <div className='m-3'>
                                <span style={Spanstyle}>Current Designation (Job Title)</span>
                                <div class="flex items-center space-x-2">
                                    <DynamicSelect styles={customStyles} options={options1} />
                                </div>
                            </div>
                            <div className='m-3'>
                                <span style={Spanstyle}>Job Type</span>
                                <div class="flex items-center space-x-2">
                                    <DynamicSelect styles={customStyles} options={options2} />
                                </div>
                            </div>
                            <div className='m-3'>
                                <span style={Spanstyle}>Company Name</span>

                                <input placeholder='Name' label="Name" id="register-input-box" className='block pl-[10px] border-2 border-[#c7c7c7]' />

                            </div>
                            <div className='m-3'>
                                <span style={Spanstyle}>Annual Salary</span>
                                <div class="flex items-center space-x-2">
                                    <DynamicSelect  styles={customStyles} options={options3} />
                                </div>
                            </div>

                            <div className='m-3'>
                                <span style={Spanstyle}>Working In Country</span>

                                <div class="flex items-center space-x-2">
                                    <DynamicSelect  styles={customStyles} options={options4}/>
                                </div>
                            </div>
                            <div className='m-3'>
                                <span style={Spanstyle}>Working In City</span>
                                <div class="flex items-center space-x-2">
                                    <DynamicSelect styles={customStyles} options={options5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfessionalSec