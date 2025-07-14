import './LoadingState.css';
import ZzZ from '/src/assets/ZzZ.gif';

function LoadingState(){
    return(
        <article className="loading-state">
            <img src={ZzZ} alt="image for loading state"/>
            <p className="subtitle">Data inladen...</p>
        </article>
    )
}

export default LoadingState;