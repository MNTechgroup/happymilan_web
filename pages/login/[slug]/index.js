"use client";
import React from "react";
// import Comp from "./Comp";
import dynamic from "next/dynamic";

const Comp = dynamic(()=> import('./Comp'))
function Home() {

    return (
        <>
            <Comp />
        </>
    )
}
export default Home;
