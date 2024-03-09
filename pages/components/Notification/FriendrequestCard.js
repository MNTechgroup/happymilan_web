import Image from "next/image"
import Link from "next/link"

function FriendRequestCard({ res, isCurrentUser, user, friend }) {

    const Username = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const Text2 = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Activity = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    return (
        <div className="w-[286px] flex flex-col space-y-[20px]">
            <div className=" flex pl-[6px] items-center">
                <div>
                    <Image width={47} height={47} src={friend?.id === isCurrentUser ? user?.profilePic : friend?.profilePic} className="rounded-[50%] h-[45px] w-[45px]" />
                </div>
                <div className="pl-[38px]">
                    <Link href={`/dashboard/${friend?.id === isCurrentUser ? user?.id : friend?.id}`}> <h1 style={Username}>
                        {friend?.id === isCurrentUser ? user?.name : friend?.name}
                    </h1></Link>
                    <h1 style={Activity} >started following you!</h1>
                </div>
            </div>
        </div>
    )
}

export default FriendRequestCard