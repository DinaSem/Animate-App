import React from 'react';
import s from'./header.module.css';
import flower from "../pictures/flower.png"
import circeya from "../pictures/Circeya.png"
import phone from "../pictures/phone.png"
import iphone from "../pictures/Iphone.png"

const Header = () => {
    const windowsSize =  window.screen.availWidth > 515;
    return (
        <div className={s.headerWrapper}>
          <div className={s.headerItem}>
              <img className={s.flower} src={flower} alt="flower"/>
              <img className={s.circeya} src={circeya} alt="circeya"/>
          </div>
            <div className={s.headerItemPhone}>
                {windowsSize
                    ? <img className={s.phone} src={phone} alt="phone"/>
                    : <a href="tel:555-555-5555"><img className={s.iphone} src={iphone}  alt="Call 555-555-5555" /></a>
                }
          </div>
        </div>
    );
};

export default Header;