
import './Avatar.css';
import picture from '/src/assets/avatar_2.png';

function Avatar({ upload }) {
    return (
        <div className="avatar">
            {upload ? <img src={upload} alt="profile-picture"/> : <img src={picture} alt="profile-picture"/>}
        </div>
    )
}

export default Avatar;