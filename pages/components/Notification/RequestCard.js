import Image from "next/image";

function RequestCard  ({ user, onAccept, onReject }){

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

  return(
    <div className="w-[286px] flex flex-col space-y-[20px]">
      <div className="flex pl-[6px]  items-center">
        <div>
          <Image alt="Profile" width={47} height={47} src={user?.profilePic} className="rounded-[50%] h-[45px] w-[45px]" />
        </div>
        <div className="pl-[40px]">
          <h1 style={Username}>{user?.name}</h1>
          <h1 style={Activity}>Sent you a following request</h1>
        </div>
      </div>
      <div className="flex justify-center relative top-[-10px]">
        <div className="w-[100px] flex space-x-[20px]">
          <Image alt="accept" className='cursor-pointer' onClick={onReject} width={28} height={28} src="/assests/dashboard/request/ignore-req-icon.svg" />
          <Image alt="reject" className='cursor-pointer' onClick={onAccept} width={28} height={28} src="/assests/dashboard/request/accept-req-icon.svg" />
        </div>
      </div>
    </div>
  )
};

  export default RequestCard;