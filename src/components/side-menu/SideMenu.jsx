import './SideMenu.css';
import Icon from "../icon/Icon.jsx";
import logo from '/src/assets/logo_S.png';
import React from "react";
import {useNavigate} from 'react-router-dom';

function SideMenu() {

    const [selected, setSelected] = React.useState('buurtgroep');
    const navigate = useNavigate();

    const handleItem = (item, path) => {
        setSelected(item);
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
                    onClick={() => handleItem('buurtgroep', '/buurtgroep')}
                >
                    <Icon iconName={"view_list"} />
                    <span className="subtitle">Buurtgroep</span>
                </li>
                <li
                    className={`menu-item ${selected === 'profiel' ? 'active' : ''}`}
                    onClick={() => handleItem('profiel', '/profiel')}
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
                    onClick={() => handleItem('buurtgroep', '/buurtgroep')}
                >
                    <Icon iconName={"view_list"} />
                </li>
                <li
                    className={`menu-item ${selected === 'profiel' ? 'active' : ''}`}
                    onClick={() => handleItem('profiel', '/profiel')}
                >
                    <Icon iconName={"account_circle"} />
                </li>
            </ul>
        </nav>
        </>
    )
}

export default SideMenu;