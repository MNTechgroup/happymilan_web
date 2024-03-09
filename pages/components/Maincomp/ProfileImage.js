import { getCookie } from 'cookies-next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchMyProfileData } from '../../../store/reducers/MyProfile';
import { Skeleton } from '@mui/material';

function ProfileImage({ size }) {

    const [Uname, setUname] = useState("")
    const [token, settoken] = useState("")

    // const dispatch = useDispatch();


    // useEffect(() => {
    //     setUname(getCookie("userName"))
    //     settoken(getCookie('authtoken'))
    //     dispatch(fetchMyProfileData())
    // }, [])

    const [isDataFetched, setIsDataFetched] = useState(false);

    const dispatch = useDispatch();

   
    useEffect(() => {
        setUname(getCookie('userName'));
        settoken(getCookie('authtoken'));
        if (!isDataFetched) {
            dispatch(fetchMyProfileData());
            setIsDataFetched(true);
        }
    }, []);




    const { data, status } = useSelector((state) => state.myprofile);

    if (!isDataFetched) {
        return (
            <>
                <Skeleton
                    variant="circular"
                    alt='userProfile'
                    width={size}
                    height={size}
                    style={{ height: "45px", width: "45px" }}
                    className=' rounded-[50%] mt-[5px] lg:mt-0 w-[47px] h-[47px]'

                />
            </>
        )
    }

    return (
        <>
            {
                token ? (
                    <>
                        {data?.profilePic ? (
                            <>
                                <img
                                    alt='userProfile'
                                    style={{ height: size, width: size , objectFit:"cover" }}
                                    className=' rounded-[50%] mt-[5px] lg:mt-0 w-[47px] h-[47px]'
                                    src={data.profilePic}
                                />
                            </>
                        ) : (
                            <Avatar
                                name={getCookie("userName")}
                                size={size}
                                round={true}
                            />
                        )}
                    </>
                ) : (
                    <Avatar
                        name={getCookie("userName")}
                        size={size}
                        round={true}
                    />
                )
            }
        </>
    )
}

export default ProfileImage