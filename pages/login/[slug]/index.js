"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Comp = dynamic(() => import('./Comp'))
function Home() {

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            console.log("🚀 ~ handleBeforeUnload ~ event:", event)
            // Modern browsers require returnValue to be set
            event.preventDefault();
            event.returnValue = ''; // Some browsers require this line for compatibility
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <>
            <Comp />
        </>
    )
}
export default Home;
