import './Card.css';

function Card({ avatar, title, hasSubtitle, subtitle, children, buttons, contentClass }) {
    return (
            <article className="card">
                <div className="card-header">
                    {avatar}
                    <h2 className="subheading">{title}</h2>
                </div>
                <div className={`card-content ${contentClass}`}>
                {hasSubtitle && (<p className="subtitle">{subtitle}</p>)}
                {children}
                </div>
                <div className="card-footer">
                {buttons}
                </div>
            </article>
    )
}

export default Card;