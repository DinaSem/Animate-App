import React, {useRef, useEffect, useLayoutEffect, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import '../App.scss';
// import tween, {pause, play} from "react-gsap/src/Tween";


gsap.registerPlugin(ScrollTrigger);

function Box({ children }) {
    return <div className="box">{children}</div>;
}

function Circle({ children }) {
    return <div className="circle">{children}</div>;
}

export function App1() {
    const [isPlaying, setIsPlaying] = useState(true);
    const app = useRef();
    const circle = useRef();
    const start = useRef();
    const pause = useRef();
    const tl = useRef();

    console.log(isPlaying)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // use scoped selectors
            tl.current && tl.current.progress(0).kill();
            tl.current = gsap
                .timeline()
                .to(".box", {
                x:50,
                y:100,
                rotation: 360,
                background: 'grey',
                opacity:.5,//прозрачность
                delay: 1,
                duration: 2,//продолжительность анимации в течении секунд
                repeatDelay: 1,// паузы между поворениями
                scale:.5,//изменение масштаба
                stagger: {
                    each: .5,
                    from:'center',// откуда начало анимации
                    yoyo:true,
                    repeat: 3,// количество повторений (-1 - бесконечно)
                    //paused:setIsPlaying()// не заработало
                },//колебание, шатание
                onComplete: function () {
                    alert('Ура!')
                },

                })
            // or refs
       .to('.circle', {
                background: 'red',
                rotation: 360,
                repeat: 1,
                delay: 1,
                duration: 2,//
                repeatDelay: 1,
                stagger: {
                    each: .5,
                    from:'center',
                },
                paused: true,
            });
        }, app);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        isPlaying
            ?  tl.current.play()
            : tl.current.pause()
    }, [isPlaying]);

    return (
        <div ref={app} className="App">
            <div>
                <button onClick={() => setIsPlaying(!isPlaying)}>toggle</button>

            </div>
            <div className="box">selector</div>
            <div className="box">selector</div>
            <div className="box">selector</div>
            <div className="circle" ref={circle}>Ref</div>
            <Box>box</Box>
            <Circle>circle</Circle>
        </div>

    );
}


