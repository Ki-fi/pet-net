import './SideMenu.css';
import MenuItem from "../menu-item/MenuItem.jsx";
import Icon from "../icon/Icon.jsx";
import logo from '/src/assets/logo.png';

function SideMenu() {
    return (
        <nav className="side-menu">
            <img src={logo} alt="logo"/>
            <MenuItem
                icon={<Icon iconName={"view_list"}/>}
                name="Buurtgroep"
            />
            <MenuItem
                icon={<Icon iconName={"account_circle"}/>}
                name="Profiel"
            />
        </nav>
    )
}

export default SideMenu;