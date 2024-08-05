import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../../../../../utils/form/Captitelize';

function DisplayNameSelect({ HandleChangeUserName }) {

    const UserNames = useSelector((state) => state.myprofile?.data);


    const getInitials = (firstName, lastName) => {

        if (UserNames?.name === `${firstName?.charAt(0)} ${lastName}`) {
            console.log("Namess 1 == ")
            return `${lastName?.charAt(0)} ${firstName}`;
        } else {
            console.log("Namess 2 == ")
            return `${firstName?.charAt(0)} ${lastName}`;

        }
    };
    const generateRandomName = (firstName, lastName, cast) => {
        const names = [firstName, lastName, cast];
        const randomFirst = names[Math.floor(Math.random() * names.length)];
        const randomLast = names[Math.floor(Math.random() * names.length)];
        return `${randomFirst} ${randomLast}`;
    };

    const [randomName, setRandomName] = useState('');

    useEffect(() => {
        if (UserNames) {
            const defaultRandomName = generateRandomName(UserNames?.firstName, UserNames?.lastName, UserNames?.cast);
            setRandomName(defaultRandomName);
        }
    }, [UserNames]);

    const handleRandomNameClick = () => {
        const newRandomName = generateRandomName(UserNames?.firstName, UserNames?.lastName, UserNames?.cast);
        setRandomName(newRandomName);
    };

    return (
        <>
            <div className="mt-[20px]">
                <h1 className="text-[15px] xl:text-[16px] font-medium mb-[5px]">
                    Select Display Name
                </h1>

                <div className="mt-[20px] flex place-items-center">
                    <input
                        className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id={UserNames?.name}
                        name="os"
                        value={UserNames?.name}
                        onChange={HandleChangeUserName}
                        defaultChecked
                    />
                    <label
                        htmlFor={UserNames?.name}
                        className="ml-[10px] text-[13px] xl:text-[14px]"
                    >
                        {capitalizeFirstLetter(UserNames?.name)}
                    </label>
                </div>

                <div className="mt-[15px] flex place-items-center">
                    <input
                        className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id={`${getInitials(UserNames?.firstName, UserNames?.lastName)}`}
                        value={`${getInitials(UserNames?.firstName, UserNames?.lastName)}`}
                        name="os"
                        onChange={HandleChangeUserName}

                    />
                    <label
                        htmlFor={`${getInitials(UserNames?.firstName, UserNames?.lastName)}`}
                        className="ml-[10px] text-[13px] xl:text-[14px]"
                    >
                        {`${getInitials(UserNames?.firstName, UserNames?.lastName)}`}
                    </label>
                </div>

                <div className="mt-[15px] flex place-items-center">
                    <input
                        className="w-[15.5px] xl:w-[16px] h-[15.5px] xl:h-[16px]"
                        type="radio"
                        id={randomName}
                        value={randomName}
                        name="os"
                        onChange={HandleChangeUserName}
                    />
                    <label
                        htmlFor={randomName}
                        className="ml-[10px] text-[13px] xl:text-[14px]"
                    >
                        {randomName}
                    </label>
                    <span className='w-[15px] ml-[10px]'>
                        <svg className='cursor-pointer' onClick={handleRandomNameClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
                        </svg>
                    </span>
                </div>

            </div>
        </>
    )
}

export default DisplayNameSelect