import './EmptyState.css';
import box from '/src/assets/Empty_State.png';

function EmptyState({ message }){
    return(
        <article className="empty-state">
            <img src={box} alt="image for empty state"/>
            <p className="subtitle">{message}</p>
        </article>
    )
}

export default EmptyState;