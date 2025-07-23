import './SideMenu.css';
import Icon from "../icon/Icon.jsx";
import logo from '/src/assets/logo_S.png';
import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';

function SideMenu() {

    const navigate = useNavigate();
    const location = useLocation();

    const selected = location.pathname.startsWith('/buurtgroep') ? 'buurtgroep'
        : location.pathname.startsWith('/profiel') ? 'profiel'
        : 'buurtgroep';

    const handleItem = (path) => {
        navigate(path);
    };

    return (
        <>
{/*For desktop view*/}
        <nav className="side-menu">
            <img src={logo} alt="logo" />
            <ul>
                <li
                    className={`menu-item ${selected === 'buurtgroep' ? 'active' : ''}`}
                    onClick={() => handleItem('/buurtgroep')}
                >
                    <Icon iconName={"view_list"} />
                    <span className="subtitle">Buurtgroep</span>
                </li>
                <li
                    className={`menu-item ${selected === 'profiel' ? 'active' : ''}`}
                    onClick={() => handleItem('/profiel')}
                >
                    <Icon iconName={"account_circle"} />
                    <span className="subtitle">Profiel</span>
                </li>
            </ul>
        </nav>
{/*For mobile view*/}
        <nav className="bottom-menu">
            <ul>
                <li
                    className={`menu-item ${selected === 'buurtgroep' ? 'active' : ''}`}
                    onClick={() => handleItem('/buurtgroep')}
                >
                    <Icon iconName={"view_list"} />
                </li>
                <li
                    className={`menu-item ${selected === 'profiel' ? 'active' : ''}`}
                    onClick={() => handleItem('/profiel')}
                >
                    <Icon iconName={"account_circle"} />
                </li>
            </ul>
        </nav>
        </>
    )
}

export default SideMenu;