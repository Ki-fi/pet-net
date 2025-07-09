
import './CardContent.css';
import Icon from "../icon/Icon.jsx";
import Chip from "../chip/Chip.jsx";

function CardContent({ request, startDate, endDate, service, remarks }) {
    return (
        <div className="card-content-wrapper">
            <span className="subtitle"><Icon iconName="business_center"/>{request}</span>
            <span className="subtitle"><Icon iconName="calendar_month"/>{startDate} t/m {endDate}</span>
            {service && <Chip chipText={service}/>}
            {remarks &&
                <>
                <p className="subtitle">Bijzonderheden:</p>
                <p>{remarks}</p>
                </>}
        </div>
    )
}

export default CardContent;