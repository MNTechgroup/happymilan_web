import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { useDarkMode } from '../../../ContextProvider/DarkModeContext';
import { fetchAllUsers } from '../../../store/actions/GetingAlluser';
import { fetchAllUsersdata, loadMoreUsers } from '../../../utils/API/MoreSuggestion';
import { sendRequest } from '../../../store/actions/UsersAction';

function MoreSuggestion() {
    const dispatch = useDispatch();
    const { darkMode } = useDarkMode();
    const { users, loading } = useSelector((state) => state.alluser);

    const [usersdata, setUsers] = useState([]);
    const [visibleUsers, setVisibleUsers] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [sentrequest, setsentRequest] = useState({});

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    useEffect(() => {
        fetchAllUsersdata(users, setUsers, setVisibleUsers);
    }, [users]);

    const handleLoadMoreUsers = () => {
        loadMoreUsers(startIndex, usersdata, setStartIndex, setVisibleUsers, setIsLoading);
    };

    const handleRequestModal = async (user) => {
        try {
            await dispatch(sendRequest(user.id));
            setsentRequest((prevState) => ({
                ...prevState,
                [user.id]: !prevState[user.id],
            }));
        } catch (error) {
            console.error("Error sending request:", error);
        }
    };

    const LikeUserBtn = React.memo(({ requestId, handleRequestModal }) => {
        const [sent, setSent] = useState(false);
        const [onHover, setOnHover] = useState(false);

        return (
            <div>
                <Image
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                    onClick={handleRequestModal}
                    quality={25}
                    loading='lazy'
                    alt='suggestion'
                    width={27}
                    height={27}
                    src={
                        requestId || sent
                            ? "/assests/common/suggestion-mark-icon.svg"
                            : onHover
                            ? "/assests/dashboard/icon/send-icon-2.svg"
                            : "/assests/gridSection/Grid-before-sent.svg"
                    }
                />
            </div>
        );
    });

    const Text7 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };

    const Text8 = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const RequestBox = {
        borderRadius: "10px",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
    };

    const ImagenotFound = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "6px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    };

    return (
        <div className='p-[20px] 2xl:w-[300px] xl:w-[280px] h-full bg-[#FFF] dark:bg-[#242526]' style={RequestBox}>
            <h1 style={Text8} className='text-[#000] dark:text-[#FFF]'>More Suggestion</h1>
            <div className='pt-[25px]'>
                <div>
                    <ul className='flex flex-col space-y-[22px]'>
                        {loading ? (
                            [1, 2, 3].map((res, index) => (
                                <li key={index}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-[20px]'>
                                            <div>
                                                <Skeleton
                                                    variant="circular"
                                                    animation="wave"
                                                    className='rounded-[50%] animate-pulse'
                                                    style={{ height: "42px", width: "40px", borderRadius: "50%", objectFit: "cover" }}
                                                    width={42}
                                                    height={42}
                                                    alt='request-1'
                                                />
                                            </div>
                                            <div className='space-y-[2px]'>
                                                <Skeleton
                                                    variant='h3'
                                                    className='w-[100px] h-[20px]'
                                                    style={Text7}
                                                >
                                                    <span>Rohan Patel</span>
                                                </Skeleton>
                                                <Skeleton
                                                    variant='h4'
                                                    className='h-[18px]'
                                                    style={Text7}
                                                />
                                                <Skeleton
                                                    variant='h4'
                                                    className='h-[15.5px]'
                                                    style={Text7}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            visibleUsers.map((res, index) => (
                                <li key={res.id}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-[20px]'>
                                            <div>
                                                {res?.profilePic ? (
                                                    <Image
                                                        quality={40}
                                                        loading='lazy'
                                                        className='rounded-[50%]'
                                                        style={{ height: "42px", width: "40px", borderRadius: "50%", objectFit: "cover" }}
                                                        width={42}
                                                        height={42}
                                                        alt='request-1'
                                                        src={res.profilePic}
                                                    />
                                                ) : (
                                                    <div
                                                        className='bg-[#F8FBFF] grid place-items-center'
                                                        style={{ height: "42px", width: "40px", borderRadius: "50%", objectFit: "cover" }}
                                                    >
                                                        <Image
                                                            quality={25}
                                                            loading='lazy'
                                                            alt='not-found'
                                                            width={18}
                                                            height={18}
                                                            src={"/assests/dashboard/icon/NotFound-img.svg"}
                                                        />
                                                        <h1 className='relative top-[-5px]' style={ImagenotFound}>
                                                            No Image
                                                        </h1>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h1 className='text-[#000] dark:text-[#FFF]' style={Text7}>{res.name}</h1>
                                                <h1 className='text-[#000] dark:text-[#FFF]' style={Text8}>
                                                    {res?.gender === "male" ? "M" : res?.gender === "female" ? "F" : "NA"}, 29, {res?.userProfessional ? res?.userProfessional?.jobTitle : "NA"}
                                                </h1>
                                                <h1 className="text-[#AEAEAE] dark:text-[#FFF]" style={Text8}>
                                                    {res?.address ? res?.address?.currentCity : "NA"}, {res?.address ? res?.address?.currentCountry : "NA"}
                                                </h1>
                                            </div>
                                        </div>
                                        <LikeUserBtn
                                            requestId={sentrequest[res?.id]}
                                            handleRequestModal={() => handleRequestModal(res)}
                                            user={res}
                                        />
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div>
                    <button
                        id={darkMode ? 'Gradient-btn-2' : ''}
                        onClick={handleLoadMoreUsers}
                        disabled={isLoading}
                        className={`${darkMode ? "" : "border-[1px] border-[#8225AF]"} hover:bg-[#F3F8FF] mt-[20px] w-[100%] h-[40px] rounded-[22px] text-[#000] dark:text-[#FFF]`}
                    >
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MoreSuggestion;
