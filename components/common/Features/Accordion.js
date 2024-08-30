import Image from 'next/image';
import React, { useState } from 'react'

function Accordion({ title, children }) {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div onClick={() => setAccordionOpen(!accordionOpen)} className='list-none group w-[full] h-[full] border-[1px] hover:border-[#000] border-[#ECECEC] rounded-[18px] pr-[20px] pl-[20px]'>
            <div className="py-[20px]">
                <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full items-center"
                >
                    <span>{title}</span>

                    {accordionOpen ? <Image className={`opacity-50  group-hover:opacity-100 transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                        }`} width={14} height={14} alt='plus' src={"/assests/animation/minus-img.png"} /> : <Image className={`opacity-50 group-hover:opacity-100 transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`} width={14} height={14} alt='plus' src={"/assests/animation/plus-img.png"} />}
                </button>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                        ? "grid-rows-[1fr] opacity-100 mt-[30px]"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        {children}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion