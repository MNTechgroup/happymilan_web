import React from 'react'
import Avatar from 'react-avatar'

function ProfileImageDating({ Username, Size }) {
    return (
        <div>
            <Avatar name={Username} size={Size} round />
        </div>
    )
}

export default ProfileImageDating