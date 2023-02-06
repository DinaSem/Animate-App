import React, {useRef, useEffect, useState} from 'react';
import {gsap} from "gsap";
import logo from '../pictures/2.png';
import './App3.scss';
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const App3 = () => {

    const circleRef = useRef(null);

    useEffect(() => {
        gsap.to("#thirdCircle", {
            x: 600,
            duration: 2,
            ease: 'none',
            delay: 1,
            scrollTrigger: {
                trigger: "#thirdCircle",
                markers: true,
                start: "top center",
                end: "center top",
                scrub: true
            }
        });
    }, []);

    return (
        <div className="App">
            <div id="firstCircle"></div>
            <div id="secondCircle"></div>
            <div ref={circleRef} id="thirdCircle"></div>
            <div id="secondCircle"></div>
            <div id="secondCircle"></div>
            <div id="secondCircle"></div>
        </div>
    );
}

