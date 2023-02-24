import React from 'react';
import Top from "../top/Top";
import Medium from "../medium/Medium";
import Bottom from "../bottom/Bottom";
import Footer from "../footer/Footer";


const Main = () => {
    const [isModal, setModal] = React.useState(true)
    const onClose = () => setModal(false)
    const isOpen = () => setModal(true)
    return (
        <div>
            <Top/>
            <Bottom/>
            <Footer/>

        </div>
    );
};

export default Main;