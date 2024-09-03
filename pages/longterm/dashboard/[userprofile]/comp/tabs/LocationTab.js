import React from 'react'
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize';
import UpgradeValidation from '../../../../../_security/Chat/withUpgradeValidation';

function LocationTab({ data }) {


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
                <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 2xl:gap-[32px] xl:gap-[32px] lg:gap-[32px] md:gap-[32px] gap-[30px]">
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Current Residing Address
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            {data && data.address?.currentResidenceAddress
                                ? capitalizeFirstLetter(data?.address?.currentResidenceAddress)
                                : "NA"}
                        </h1>
                    </div>
                    <div className=" ">
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[14px]"
                        ></p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        ></h1>
                    </div>
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Current City
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            {data && data.address?.currentCity
                                ? capitalizeFirstLetter(data?.address?.currentCity)
                                : "NA"}
                        </h1>
                    </div>
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Current Residing Country
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            {data && data.address?.currentCountry
                                ? capitalizeFirstLetter(data?.address?.currentCountry)
                                : "NA"}
                        </h1>
                    </div>
                    <div>
                        <p
                            style={Text2}
                            className="2xl:text-[14px] xl:text-[12px] text-[12px]"
                        >
                            Permanent Address
                        </p>
                        <h1
                            style={Text5}
                            className="2xl:text-[16px]  xl:text-[14px] text-[14px]"
                        >
                            {"NA"}
                        </h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpgradeValidation(LocationTab)