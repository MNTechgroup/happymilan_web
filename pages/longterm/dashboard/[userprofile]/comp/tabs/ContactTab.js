import UpgradeValidation from "../../../../../_security/Chat/withUpgradeValidation";

const ContactTab = ({ data }) => {


    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal",
    };

    return (
        <>


            <div className="grid place-items-center">
                <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Mobile Number
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            +{" "}
                            {data && data?.mobileNumber
                                ? data?.mobileNumber && data.mobileNumber
                                : "NA"}
                        </h1>
                    </div>
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Home Number
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            +{" "}
                            {data && data?.homeMobileNumber
                                ? data?.homeMobileNumber && data.homeMobileNumber
                                : "NA"}
                        </h1>
                    </div>
                    <div className="w-full">
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Email Address
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            {data && data?.email ? data?.email && data.email : "NA"}
                        </h1>
                    </div>
                </div>
            </div>



        </>
    );
};

export default UpgradeValidation(ContactTab);