import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Style/AsideBar.module.css';

import AsideBarBtn from './AsideBarBtn/AsideBarBtn'

const AsideBar = () => {
    return (
        <div className={Style.Container}>
            <Link to="/"><AsideBarBtn Title="Dashboard" Color="blue" /></Link>
            <Link to="/orders"><AsideBarBtn Title="Orders" Color="red" /></Link>
            <Link to="/employees"><AsideBarBtn Title="Employees" Color="green" /></Link>
        </div>
    );
};

export default AsideBar;