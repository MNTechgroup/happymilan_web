"use client";

import React,{ useState } from "react";
import { useRouter } from 'next/router';
import Comp from "./Comp";


function Home() {

    const router = useRouter();

    const [activebtn, setActivebtn] = useState(0);

    const ContinueBtn = () => {

        if (activebtn === 1) {
            router.push("/register")
        }
        else {
            // router.push("/newuser")
            router.push("/dating")
        }
    }

    return (
        <>
            <Comp />
        </>
    )
}
export default Home;
