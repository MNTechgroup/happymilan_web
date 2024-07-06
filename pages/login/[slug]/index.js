"use client";
import React from "react";
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
