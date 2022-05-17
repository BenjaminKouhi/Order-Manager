import React from 'react';
import Style from './Style/AsideBarBtn.module.css';

const AsideBarBtn = ({Title, Color}) => {
    return (
        <div className={Style.Container}>
            <div className={Style.Color} style={{background: Color}}></div>
            <div className={Style.Title}>{Title}</div>
        </div>
    );
};

export default AsideBarBtn;