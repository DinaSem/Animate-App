import React, {useRef, useEffect, useState, useLayoutEffect} from 'react';
import {gsap} from "gsap";
import workout from '../pictures/workout.svg';
import happy from '../pictures/happy.svg';
import './App4.scss';
import {ScrollTrigger} from "gsap/ScrollTrigger";


import greensocklogo from '../pictures/greensocklogo.svg';

gsap.registerPlugin(ScrollTrigger);

export const App4 = () => {
    const ref = useRef(null);
    const slidesRef = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(".first-paragraph",
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".first",
                    start: "20px top",
                    end: "bottom center",
                    scrub: true,
                    markers: true
                }
            }
        );
    }, []);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo("#gsap-logo",
            {
                opacity: 0,
                scale: 0.2,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".first",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                    markers: true
                }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(".line",
            {
                scale: 0,
            }, {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    duration: 2,
                    trigger: ".third",
                    scrub: true,
                    start: "top bottom",
                    end: "top top",
                    markers: true
                }
            });
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        let sections = gsap.utils.toArray(".slide");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: ".slides",
                pin: true,
                scrub: 1,
                onScrubComplete: 1,
                snap: (1 / (sections.length - 1)),
                markers: true,
                end:  ()=> "+=" + document.querySelector(".slides").offsetWidth
            }
        });
        }, slidesRef);
        return () => ctx.revert();
    }, []);
    return (
        <div className="App" ref={ref}>
            <div className="first">
                <h1>ScrollTrigger</h1>
                <p className="first-paragraph">
                    is the coolest Greensock plugin.
                    <span role="img" aria-label="celebrating"></span>
                </p>
                <div className="logo-main">
                    <img src={workout} id="workout-logo" alt="workout"/>
                </div>
            </div>
            <div className="second">
                <div className="logo-main">
                    <img src={greensocklogo} id="gsap-logo" alt="greensocklogo"/>
                </div>
            </div>
            <div className="description">START</div>
            <div id='block1'>
                <div ref={slidesRef} className="slides">
                    <div className="slide">Slide 1</div>
                    <div className="slide">Slide 2</div>
                    <div className="slide">Slide 3</div>
                    <div className="slide">Slide 4</div>
                    <div className="slide">Slide 5</div>
                </div>
            </div>
            <div className="final">END</div>
            <div className="third">
                <p>
                    <span className="line"/>
                </p>
                <div className="logo-main">
                    <img src={happy} id="happy-logo" alt="happy"/>
                </div>
            </div>
        </div>
    );
}

