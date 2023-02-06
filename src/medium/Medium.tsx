import React, {useLayoutEffect, useRef} from 'react';
import s from './mediun.module.css';
import rings from "../pictures/rings.png"
import panama from "../pictures/facePanama.png"
import a from "../pictures/1.png";
import b from "../pictures/3.png";
import c from "../pictures/4.png";
import d from "../pictures/5.png";
import e from "../pictures/6.png";
import f from "../pictures/7.png";
import {gsap} from "gsap";
const Medium = () => {
    // const ref = useRef(null);
    // const slidesRef = useRef(null);
    //
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         let sections = gsap.utils.toArray(".slide");
    //
    //         let scrollTween = gsap.from(sections, {
    //             xPercent: -100 * (sections.length - 1),
    //             ease: "none", // <-- IMPORTANT!
    //             scrollTrigger: {
    //                 trigger: slidesRef.current,
    //                 pin: true,
    //                 scrub: .2,
    //                 snap: (1 / (sections.length - 1)),
    //                 markers: true,
    //                 end: () => "+=" + document?.querySelector(".slides")
    //             }
    //         });
    //     }, slidesRef);
    //     return () => ctx.revert();
    // }, []);
    return (
        <div>

        </div>
    );
};

export default Medium;