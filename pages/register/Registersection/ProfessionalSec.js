import React from 'react'

import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

//Style For Select Box

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        paddingRight: '10px',
        paddingLeft: "8px",
        width: "300px",
        height: "50px",
        borderRadius: "8px",
        border: "1px solid #e6e6e6",
        borderColor: state.isFocused ? 'black' : provided.borderColor,
        '&:hover': {
            borderColor: 'black',
        },
        boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
        paddingRight: "20px"
        // Hide the vertical line behind the arrow
    }),
};


// const Text1 = {
//     color: "#0F52BA",
//     fontFamily: "Poppins",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: "400",
//     lineHeight: "normal"
// }

const Text1 = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const Text2 = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}


const Btntextstyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
};


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

function ProfessionalSec({ HandleTabclick, activeTab }) {

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
    const options6 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

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
                <div className='flex justify-between 2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full'>
                    <div>
                        <h1 className='text-[#000]' style={Text1}>Professional Details</h1>
                    </div>
                    <div>
                        <h1 onClick={()=>HandleTabclick(activeTab+1)} className='cursor-pointer text-[#0F52BA]' style={doItlater}>I{"’"}ll do it later</h1>
                    </div>
                </div>
                <div>
                    <div className='2xl:w-[664px] xl:w-[664px] md:w-full lg:w-full h-[1px] bg-[#DCDCDC]'>
                        <div className='h-[1px] md:w-[395px] w-[85%]  bg-[#17C270]'></div>
                    </div>
                </div>
            </div>

            <div className='2xl:pb-[120px] xl:pb-[120px] md:pb-[120px] lg:w-auto md:w-[100%] flex flex-wrap gap-x-[65px] gap-y-[20px] pt-[20px]'>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Current Designation (Job Title)</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options1}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Job Type</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options2}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Company Name</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options3}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Annual Salary</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options4}
                        />
                    </div>
                </div>


                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Work In City</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options5}
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className='text-[#000] pb-[10px]' style={Text2}>Work In Country</h1>

                    <div class="flex items-center space-x-2">
                        <DynamicSelect
                            className="h-[50px] w-[300px] flex justify-end"
                            styles={customStyles}
                            options={options6}
                        />
                    </div>
                </div>



            </div>

        </>
    )
}

export default ProfessionalSec