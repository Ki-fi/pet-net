import './CardContent.css';

function CardContent({ children }) {
    return (
        <div className="card-content">
            {children}
        </div>
    )
}

export default CardContent;