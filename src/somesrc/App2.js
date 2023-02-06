import React, {useRef, useEffect, useState} from 'react';
import {gsap} from "gsap";
import logo from '../pictures/2.png';
import './App2.scss';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import a from '../pictures/1.png';
import b from '../pictures/3.png';
import c from '../pictures/4.png';
import d from '../pictures/5.png';
import e from '../pictures/6.png';
import f from '../pictures/7.png';


gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'Architecto aliquam',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
    },
    {
        title: 'Ceritatis placeat',
        subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
    },
    {
        title: 'Vitae voluptates',
        subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
    }
];

export const App2 = () => {

    const [background, setBackground] = useState('#262626');
    const headerRef = useRef(null);
    const tl = useRef(null);
    const photos = useRef(null);
    const revealRefs = useRef([]);
    revealRefs.current = [];

    const toggleBackground = () => {
        const color = background !== '#262626' ? '#262626' : '#1b4943';
        setBackground(color);
    }

    useEffect(() => {
        tl.current = gsap
            .timeline()
            .to(headerRef.current, {
                    backgroundColor: background, duration: 1, ease: 'none'
                })
                .to(photos.current, {
                   scrollTrigger:{
                       horizontal:true
                   }
                })



    }, [background]);

    useEffect(() => {

        gsap.to(headerRef.current, {
            // autoAlpha: 0,
            ease: 'none',
            delay: 1
        });

        revealRefs.current.forEach((el, index) => {

            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });

        });

    }, []);

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <div className="App">
            <header ref={headerRef} className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={() => toggleBackground()}>Change background</button>
                <p>
                    Scroll down to see sections being revealed by ScrollTrigger.
                </p>
            </header>
            <div ref={photos} style={{background: 'blue', flexWrap: "nowrap",}}>
                <img src={a} alt=""/>
                <img src={b} alt=""/>
                <img src={c} alt=""/>
                <img src={d} alt=""/>
                <img src={e} alt=""/>
                <img src={f} alt=""/>
            </div>
            <main className="App-main">

                {
                    sections.map(({title, subtitle}) => (
                        <div className="App-section" key={title} ref={addToRefs}>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    ))
                }
            </main>
        </div>
    );
}

