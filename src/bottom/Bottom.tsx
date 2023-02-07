import React from 'react';
import s from "./bottom.module.css";
import blackDress from "../pictures/BlackDress.png";
import flowerOnAMouth from "../pictures/flowerOnAMouth.png";

const Bottom = () => {
    return (
        <div className={s.bottomWrapper}>
            <h1 className={s.title}>ut aliquip ex ea commodo consequat</h1>
            <div className={s.topMainSectionOne}>
                <div className={s.blackDressImg}><img src={blackDress} alt="rings"/></div>
                <div className={s.topTextSectionOne}>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <p className={s.bottomText}>
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
                    <p className={s.bottomText}>
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum
                    </p>
                </div>
                <div className={s.flowerOnAMouth}><img src={flowerOnAMouth} alt="rings"/></div>
            </div>

        </div>

    );
};



export default Bottom;