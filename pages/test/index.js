import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends, incrementPage } from '../../store/matrimoney-services/slices/UserSentRequestPagination';
import Image from 'next/image';

function index() {
    const dispatch = useDispatch();
    const { userData, status, currentPage, totalPages, loading } = useSelector((state) => state.getsentrequestdata);

    useEffect(() => {
        dispatch(fetchFriends(currentPage, 3));  // 3 items per page as an example
    }, [currentPage, dispatch]);

    const handleInfiniteScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight &&
                !loading && // Ensure we're not already loading more data
                currentPage < totalPages // Ensure there are more pages to load
            ) {
                dispatch(incrementPage());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [loading, currentPage, totalPages]);

    return (
        <div className='w-full h-full grid place-items-center'>
            <ul className=''>
                {userData?.map((res, index) => (
                    <li key={index} className='h-[400px] w-[300px] border-[1px] border-[#000]'>
                        {res?.friend?.name}
                        <Image src={res?.friend?.profilePic} height={100} width={100} loading='lazy' alt='image' />
                    </li>
                ))}
                {loading && <p>Loading more...</p>}
            </ul>
        </div>
    );
}

export default index;
