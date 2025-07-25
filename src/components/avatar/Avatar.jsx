
import './Avatar.css';
import picture from '/src/assets/avatar_2.png';
import placeholder from "../../assets/Avatar_2.png";

function Avatar({ upload }) {
    return (
        <div className="avatar">
            <img src={upload || picture} alt="profile-picture" onError={(e) => {
                e.target.onerror = null;
                e.target.src = picture;
            }}/>
        </div>
    )
}

export default Avatar;