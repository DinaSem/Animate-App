import React, {useEffect, useState} from 'react';
import style from './Modal.module.scss';

export const Plus = ({isOpen}) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={isOpen}>
            <circle cx="16" cy="16" r="15.744" stroke="white" stroke-width="0.512"/>
            <path d="M13.5 16.0024H19.5" stroke="white" stroke-width="0.64" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.5 19V13" stroke="white" stroke-width="0.64" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export const Modal = ({visible, content, onClose,}) => {
    let [zoomStyles, handlers] = useImageZoom();

    // если компонент невидим, то не отображаем его
    if (!visible) return null;
    // или возвращаем верстку модального окна
    return (

        <div className={style.modal} onClick={onClose}>
            {/*<img src={content}*/}
            {/*     alt=""*/}
            {/*     className={style.modalPicture}*/}
            {/*     id={"myImage"}*/}
            {/*    // onMouseMove={()=>{magnify("myImage", 1.5)}}*/}
            {/*     onMouseMove={() => console.log('kjkjh')}*/}
            {/*     width={'500'} height={'500'}*/}
            {/*/>*/}
            <div className="App">
                <ImageMagnifier
                    width={"440px"}
                    src="https://images-na.ssl-images-amazon.com/images/I/616HiOFb1VL._AC_UX679_.jpg"
                />
            </div>
        </div>
    )
}


export const useImageZoom = (maxZoomLevel = 5) =>{
    const minZoomLevel = 1;


    let [zoomLevel, setZoomLevel] = useState(minZoomLevel);


    function zoomIn() {
        setZoomLevel(zoomLevel =>
            zoomLevel < maxZoomLevel ? zoomLevel + 1 : zoomLevel
        );
    }

    function zoomOut() {
        setZoomLevel(zoomLevel =>
            zoomLevel > minZoomLevel ? zoomLevel - 1 : minZoomLevel
        );
    }

    function resetZoom() {
        setZoomLevel(minZoomLevel);
    }

    let zoomStyles = {
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        position: zoomLevel > 1 ? "absolute" : undefined,
        top: zoomLevel > 1 ? 0 : undefined,
        left: zoomLevel > 1 ? 0 : undefined
    };

    const handlers = {
        zoomIn,
        zoomOut,
        resetZoom
    }

    return [zoomStyles, handlers];
}



export default function ImageMagnifier({
                            src,
                            width,
                            height,
                            magnifierHeight = 100,
                            magnifieWidth = 100,
                            zoomLevel = 1.5
                        }) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    return (
        <div
            style={{
                position: "relative",
                height: height,
                width: width
            }}
        >
            <img
                src={src}
                style={{ height: height, width: width }}
                onMouseEnter={(e) => {
                    // update image size and turn-on magnifier
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onTouchMove  ={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    // close magnifier
                    setShowMagnifier(false);
                }}
                alt={"img"}
            />

            <div className='zoomStyle'
                 style={{
                     display: showMagnifier ? "" : "none",
                     position: "absolute",

                     // prevent maginier blocks the mousemove event of img
                     pointerEvents: "none",
                     // set size of magnifier
                     height: `${magnifierHeight}px`,
                     width: `${magnifieWidth}px`,
                     // move element center to cursor pos
                     top: `${y - magnifierHeight / 2}px`,
                     left: `${x - magnifieWidth / 2}px`,
                     opacity: "1", // reduce opacity so you can verify position
                     border: "1px solid lightgray",
                     backgroundColor: "white",
                     backgroundImage: `url('${src}')`,
                     backgroundRepeat: "no-repeat",

                     //calculate zoomed image size
                     backgroundSize: `${imgWidth * zoomLevel}px ${
                         imgHeight * zoomLevel
                     }px`,

                     //calculete position of zoomed image.
                     backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                     backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                 }}
            ></div>
        </div>
    );
}

// export default function App() {
//     return (
//         <div className="App">
//             <ImageMagnifier
//                 width={"440px"}
//                 src="https://images-na.ssl-images-amazon.com/images/I/616HiOFb1VL._AC_UX679_.jpg"
//             />
//         </div>
//     );
// }


