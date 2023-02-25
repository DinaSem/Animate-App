import React, {useState} from 'react';
import s from './top.module.css';
import rings from "../pictures/rings.png"
import panama from "../pictures/facePanama.png"
import {Modal, Plus} from '../modal-picture-open/Modal';

const Top = () => {
    const [isModal, setModal] = useState(true)
    const onClose = () => setModal(false)
    const isOpen = () => setModal(true)
    return (
        <div className={s.topWrapper}>
            <h1 className={s.title}>ut aliquip ex ea commodo consequat</h1>
            <div className={s.topMainSectionOne}>
                <div className={s.ringsImg}><img src={rings} alt="rings"/></div>
                <div className={isModal ? s.plusNonActive : s.plusActive}>
                    <Plus isOpen={isOpen}/>
                </div>
                <Modal
                    visible={isModal}
                    content={rings}
                    onClose={onClose}
                />
                <div className={s.topTextSectionOne}>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <p className={s.topText}>
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum
                    </p>
                </div>
            </div>

            <div className={s.topMainSectionTwo}>

                <div className={s.topTextSectionTwo}>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <p className={s.topText}>
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum
                    </p>
                </div>
                <div className={s.panama}><img src={panama} alt="panama"/></div>
            </div>

        </div>

    );
};

export default Top;