import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function RecordingInput({ recordingDuration, HanldeVoiceChat, handleStopVoice }) {
    return (
        <>
            <Box sx={{ backgroundColor: "#FFF" }}>
                <Stack fullWidth direction="row" sx={{ border: "1px solid #DADADA", borderRadius: "25px", paddingBottom: "8px", paddingTop: "8px", background: "#FFF" }}>

                    <IconButton
                        sx={{ marginLeft: "20px" }}
                        className='animate-pulse'

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                            <path d="M5.89474 10.1053C7.29263 10.1053 8.41263 8.97684 8.41263 7.57895L8.42105 2.52632C8.42105 1.12842 7.29263 0 5.89474 0C4.49684 0 3.36842 1.12842 3.36842 2.52632V7.57895C3.36842 8.97684 4.49684 10.1053 5.89474 10.1053ZM10.3579 7.57895C10.3579 10.1053 8.21895 11.8737 5.89474 11.8737C3.57053 11.8737 1.43158 10.1053 1.43158 7.57895H0C0 10.4505 2.29053 12.8253 5.05263 13.2379V16H6.73684V13.2379C9.49895 12.8337 11.7895 10.4589 11.7895 7.57895H10.3579Z" fill="#FF0000" />
                        </svg>
                    </IconButton>


                    <Typography variant="p" sx={{ display: "grid", width: "50px", placeItems: "center", paddingLeft: "10px" , position:"relative" , top:"1px" }}>
                        0:{recordingDuration}
                    </Typography>


                    <IconButton
                        sx={{ marginRight: "auto", position: "absolute", right: "100px" }}
                        className='   w-[35px] h-[35px]'
                        onClick={handleStopVoice}
                    >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                        </svg> */}
                        <Image width={30} height={30} alt='stop' src={"/assests/chat/stop-red-icon.png"} />
                    </IconButton>

                </Stack>
            </Box>
        </>
    )
}

export default RecordingInput