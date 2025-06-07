import './Card.css';

function Card({ title, hasSubtitle, subtitle, children, buttons }) {
    return (
            <section className="card">
                <h2 className="subheading">{title}</h2>
                {hasSubtitle && (<p className="subtitle">{subtitle}</p>)}
                {children}
                {buttons}
            </section>
    )
}

export default Card;