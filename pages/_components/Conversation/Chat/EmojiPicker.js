import { Box, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react'
const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });


function EmojiPickerInp({pickerRef , HandleEmojiSelect , openPicker}) {
    return (

        <Box ref={pickerRef} sx={{ display: openPicker ? 'inline' : 'none', zIndex: 10, position: 'fixed', bottom: 120, right: 'auto' }}>
            <EmojiPicker onEmojiClick={HandleEmojiSelect} />
        </Box>
    )
}

export default EmojiPickerInp