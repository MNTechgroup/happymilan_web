import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Pagination = ({ URL, currentPage, totalPages, onPageChange, darkMode }) => {
    const renderButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                // <Link key={i} href={`${URL}?page=${i}`} className='inline-block'>
                    <div
                        id={currentPage === i ? "grid-active-btn" : (darkMode ? "DarkPagination" : "pagination-count")}
                        onClick={() => onPageChange(i)}
                        className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>
                        {i}
                    </div>
                // </Link>
            );
        }

        return buttons;
    };

    return (

        <div className=' relative left-[-5px] lg:left-[0px] flex pt-[50px] space-x-[40px] justify-center items-center w-[90%] 2xl:w-full xl:w-full'>

            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)} className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full'>
                    {darkMode ?
                        <Image width={7} height={14} alt='prev-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                        :
                        <Image width={7} height={14} alt='prev-light' src="/assests/gridSection/Prev-Data.svg" />
                    }
                </button>
            )}
            {renderButtons()}
            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)} className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] dark:border-[#FFF] border-[black] grid place-items-center rounded-full'>
                    {darkMode ?
                        <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-dark' src="/assests/gridSection/Prev-Data-dark.svg" />
                        :
                        <Image width={7} height={14} className='transform scale-x-[-1]' alt='next-light' src="/assests/gridSection/Prev-Data.svg" />}
                </button>
            )}
        </div>

    );
};

export default Pagination;
