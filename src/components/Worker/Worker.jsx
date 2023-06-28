import "./Worker.scss";

export default function Worker({position, surname, name, phone, email, src, srcRetina}) {
    return (
        <div className="worker">
            <div className="worker__imgWrapper">
                <img className="worker__img" alt="Worker"
                src={src} srcSet={`${srcRetina} 2x`}/>
            </div>
            <div className="worker__info">
                <span className="worker__position">{position}</span>
                <div className="worker__name">
                    <span className="worker__surname">{surname}</span>
                    <span className="worker__firstname">{name}</span>
                </div>
                <div className="worker__contacts">
                    <a href={`tel:${phone}`}>{phone}</a>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        </div>
    );
}