import Image from "next/image";

function RequestCard({ user, onAccept, onReject, loadingdata }) {
  const Username = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "21px",
  };

  const Activity = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
  };

  const ImagenotFound = {
    color: "#B3CBF1",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "6px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }

  return (
    <>
      <div
        id="sidebarScroll"
        className="w-[286px] flex flex-col space-y-[20px]"
      >
        <div id="sidebarScroll" className="flex pl-[6px]  items-center">
          {user?.profilePic ? <>
            <div>
              <Image
                alt="Profile"
                width={47}
                height={47}
                loading='lazy'
                src={user?.profilePic}
                className="rounded-[50px] h-[50px] w-[50px]"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </>
            :
            <>
              <div className='bg-[#F8FBFF] grid place-items-center' style={{ height: "44px", width: "44px", borderRadius: "50%", objectFit: "cover" }}>
                <Image loading='lazy' alt='not-found' width={16} height={16} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                <h1 className='relative top-[-5px]' style={ImagenotFound}>No Image</h1>
              </div>
            </>
          }

          <div className="pl-[20px]">
            <h1 className="dark:text-[#FFF] text-[#000]" style={Username}>{user?.name}</h1>
            <h1 className="dark:text-[#FFF] text-[#000]" style={Activity}>Sent you a following request</h1>
          </div>
        </div>
        <div className="flex justify-center relative top-[-10px] left-[-20px]">
          <div className="w-[100px] flex space-x-[20px]">
            <Image
            loading='lazy'
              alt="accept"
              className="cursor-pointer"
              onClick={onReject}
              width={28}
              height={28}
              src="/assests/dashboard/request/ignore-req-icon.svg"
            />
            <Image
            loading='lazy'
              alt="reject"
              className="cursor-pointer"
              onClick={onAccept}
              width={28}
              height={28}
              src="/assests/dashboard/request/accept-req-icon.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestCard;