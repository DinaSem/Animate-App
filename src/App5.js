import React, {useLayoutEffect, useRef} from 'react';
import {gsap} from "gsap";
import './App5.scss';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import a from './pictures/1.png';
import b from './pictures/3.png';
import c from './pictures/4.png';
import d from './pictures/5.png';
import e from './pictures/6.png';
import f from './pictures/7.png';
import g from './pictures/8.png';
import h from './pictures/9.png';
import i from './pictures/10.png';
import j from './pictures/11.png';

import Header from "./header/Header";
import Top from "./top/Top";
import Footer from "./footer/Footer";
import Bottom from "./bottom/Bottom";

gsap.registerPlugin(ScrollTrigger);

export const App5 = () => {
    const ref = useRef(null);
    const slidesRef = useRef(null);
    const slideRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let sections = gsap.utils.toArray(".slide");

            gsap.from(sections, {
                xPercent: -100 * (sections.length - 4.2),
                ease: "none",
                scrollTrigger: {
                    trigger: slidesRef.current,
                    pin: true,
                    scrub: 1,
                    // snap: (1 / (sections.length - 1)),
                    snap:1,
                    //toggleActions: "play pause resume reset",
                   // markers: true,
                    end: () => "+=" + document.querySelector(".slides").offsetWidth-1,
                }
            });
        }, slidesRef);
        return () => ctx.revert();
    }, []);
    return (
        <div className="App" ref={ref}>
            <Header/>
            <Top/>
            <div ref={slidesRef} id='block1'>
                <h1 className='title'>Lorem ipsum dolor sit amet</h1>
                <div ref={slideRef} className="slides">
                    <img className="slide" src={a} alt=""/>
                    <img className="slide" src={b} alt=""/>
                    <img className="slide" src={c} alt=""/>
                    <img className="slide" src={d} alt=""/>
                    <img className="slide" src={e} alt=""/>
                    <img className="slide" src={f} alt=""/>
                    <img className="slide" src={g} alt=""/>
                    <img className="slide" src={h} alt=""/>
                    <img className="slide" src={i} alt=""/>
                    <img className="slide" src={j} alt=""/>
                </div>
            </div>
            <Bottom/>
            <Footer/>
        </div>
    );
}

