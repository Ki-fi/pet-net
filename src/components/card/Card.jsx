import './Card.css';

function Card({ avatar, title, hasSubtitle, subtitle, children, buttons }) {
    return (
            <section className="card">
                <div className="card-header">
                    {avatar}
                    <h2 className="subheading">{title}</h2>
                </div>
                {hasSubtitle && (<p className="subtitle">{subtitle}</p>)}
                {children}
                {buttons}
            </section>
    )
}

export default Card;