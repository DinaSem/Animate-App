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
        <>
            <div className="buttons">
                <button onClick={handlers.zoomIn}>Zoom in</button>
                <button onClick={handlers.zoomOut}>Zoom out</button>
            </div>
            <div className="preview">
                <img
                    style={{...zoomStyles}}
                    onClick={handlers.resetZoom}
                    src={content}
                    alt="preview box"
                />
            </div>
        </>
        // <div className={style.modal} onClick={onClose}>
        //     <img src={content}
        //          alt=""
        //          className={style.modalPicture}
        //          id={"myImage"}
        //         // onMouseMove={()=>{magnify("myImage", 1.5)}}
        //          onMouseMove={() => console.log('kjkjh')}
        //          width={'500'} height={'500'}
        //     />
        // </div>
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





