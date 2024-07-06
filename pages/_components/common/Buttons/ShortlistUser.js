import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dialog } from '@mui/material'
import { addToShortlist } from '../../../../store/actions/GetingAlluser'

function ShortlistUser({ UserId }) {
    const [shortlistedUser, SetshortlistedUser] = useState(false)

    const dispatch = useDispatch();
    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();




    const HandleShortlist = () => {

        console.log(UserId)
        SetshortlistedUser(!shortlistedUser)
        dispatch(addToShortlist(UserId)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };


    return (
        <>
            <div className='mr-[5px]'>
                <Image loading='lazy' onClick={HandleShortlist} alt='star-icon' className='absolute' width={15} height={14} src={shortlistedUser ? "/assests/Black/filled-star.svg" : '/assests/Black/Stars-2.svg'} />
            </div>
            <React.Fragment>
                <Dialog
                    open={openShortlistModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            backgroundColor: "transparent", // or 'none' if you prefer
                            boxShadow: "none",
                        },
                    }}
                    BackdropProps={{
                        style: { opacity: 0, backgroundColor: "none", boxShadow: "none" },
                    }}
                >
                    <div
                        style={{ padding: "17px 19px 17px 20px" }}
                        className="bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center"
                    >
                        <div className="text-[14px]" style={Urlmodaltext}>
                            <span className="text-[#fff]"> {shortlistText}</span>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>

        </>


    )
}




export default ShortlistUser