import React from 'react';
import s from'./header.module.css';
import flower from "../pictures/flower.png"
import circeya from "../pictures/Circeya.png"
import phone from "../pictures/phone.png"

const Header = () => {
    return (
        <div className={s.headerWrapper}>
          <div className={s.headerItem}>
              <img src={flower} alt=""/>
              <img src={circeya} alt=""/>
          </div>
            <div className={s.headerItem}>
              <img src={phone} alt=""/>

          </div>
        </div>
    );
};

export default Header;