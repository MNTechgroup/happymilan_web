
import React from 'react'
import UpgradeButton from '../../_components/common/Buttons/UpgradeButton'
import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { checkUserPlan } from '../../../store/reducers/Authreducer'

function UpgradeValidation(WrappedComponent) {

    const Text = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }


    return (props) => {
        const dispatch = useDispatch();
        const router = useRouter();
        const { hasPlan, status } = useSelector((state) => state.auth);
      
        useEffect(() => {
            if (status === 'idle') {
                dispatch(checkUserPlan());
                console.log("2")
            }
        }, [dispatch, status]);

        // useEffect(() => {
        //     if (status === 'succeeded' && !hasPlan) {

        //     }
        // }, [hasPlan, router, status]);

        if (status === 'loading') {
            console.log("3")
            return <p>Loading...</p>;
        }

        return hasPlan ? <WrappedComponent {...props} /> :
            <>
                <Stack className='bg-[#FFF] w-full h-full grid place-items-center'>
                    <Box className="grid place-items-center space-y-[10px]">
                        <Image width={0} height={0} alt="lock" src={"/assests/profile/Lock-gradient.svg"} loading="lazy" className="w-[18.151px] h-[24px]" />

                        <h1 style={Text}>Upgrade to send & receive messages.</h1>
                        <UpgradeButton IconSize={17} BtnSizeH={40} BtnSizeW={110} />

                    </Box>
                </Stack>
            </>
    }
}




export default UpgradeValidation