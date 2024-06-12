import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

function GoogleLoginButton() {
  return (
    <div className="xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]">
      <Image
        alt="google-icon"
        width={50}
        height={50}
        onClick={() => signIn("google")}
        className="cursor-pointer"
        src="/assests/social/google-icon-btn.svg"
        loading="lazy"
        quality={25}
      />
    </div>
  );
}

export default GoogleLoginButton;
