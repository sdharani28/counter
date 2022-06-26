import React, { useState, useEffect } from "react";

function Clock(){
    const [currentTime, setCurrentTime] = useState(new Date());
    let timerInterval = null;

    useEffect(() => {
        timerInterval = setInterval(() => {
            console.log(`updating time :: ${new Date()}`);
            setCurrentTime(new Date());
        }, 1000);
        
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        }
    }, []);
    
    return (
        <>
            <h3>{currentTime.toLocaleTimeString()}</h3>
        </>
    );
}

export default Clock;

