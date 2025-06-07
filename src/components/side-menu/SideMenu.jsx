import './SideMenu.css';
import MenuItem from "../menu-item/MenuItem.jsx";
import Icon from "../icon/Icon.jsx";

function SideMenu() {
    return (
        <div className="side-menu">
            <img src="" alt=""/>
            <MenuItem
                icon={<Icon iconName={"view_list"}/>}
                name="Buurtgroep"
            />
            <MenuItem
                icon={<Icon iconName={"account_circle"}/>}
                name="Profiel"
            />
        </div>
    )
}

export default SideMenu;