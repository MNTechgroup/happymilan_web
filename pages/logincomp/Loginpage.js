const LoginPage = () => {
    return (
        <>
            <div className="grid place-items-center w-full my-10">
                <span className="relative right-[20%]" id="scan-qr-text">
                    Scan QR to Login
                </span>
                <div className="relative right-[10%] my-[10px]">
                    <img src="/loginassests/login-QR.svg" />
                </div>
                <div className="w-[370px] relative my-[10%] right-[9%]">
                    <ul id="login-icons-ul" className="flex justify-evenly">
                        <div id="login-icons-text" className="flex items-center">
                            <img
                                src="/assests/Black/Contact.svg"
                                className="w-[16px] h-[16px]"
                            />{" "}
                            <span className="relative left-[10px]">Sign via Phone</span>
                        </div>
                        <span className="w-[1px] h-[26px] bg-[#E8E8E8]"></span>
                        <div id="login-icons-text" className="flex items-center">
                            <img
                                src="/assests/Black/Message.svg"
                                className="w-[16px] h-[16px] relative "
                            />
                            <span className="relative left-[10px]">Sign in via Email</span>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
