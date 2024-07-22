import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function FriendRequestCard({ res, loading }) {
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

  if (loading) {
    return (
      <>
        <div className="flex pl-[6px] items-center">
          <div>
            <Skeleton variant="circular" width={47} height={47} />
          </div>
          <div className="pl-[20px]">
            <Skeleton width={120} height={20} />
            <Skeleton width={200} height={20} />
          </div>
        </div>
      </>
    );
  }

  const ImagenotFound = {
    color: "#B3CBF1",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "6px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }

  // const IsProfilepic = friend?.id === isCurrentUser ? user?.profilePic : friend?.profilePic


  return (

    <div className="w-[286px] flex flex-col space-y-[20px]">
      <div className=" flex pl-[6px] items-center">

        {
          res?.profilePic ?
            <>
              <Image
                width={47}
                height={47}
                src={
                  res?.profilePic
                }
                loading='lazy'
                className="rounded-[50px] h-[50px] w-[50px]"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
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
          <Link
            href={`/longterm/dashboard/${res?.id}`}
          >
            {" "}
            <h1 className="dark:text-[#FFF] text-[#000]" style={Username}>
              {res?.name}
            </h1>
          </Link>
          <h1 className="dark:text-[#FFF] text-[#000]" style={Activity}>accepted you request !</h1>
        </div>
      </div>
    </div>
  );
}

export default FriendRequestCard;
