import './Chip.css';

function Chip({ chipText }) {
    return (
        <span className="chip body-text-small">{chipText}</span>
    )
}

export default Chip;