import "./BorderBold.scss";

export default function BorderBold(props) {
    return (
        <div className="borderBold">
            <div className="borderBold__inner">{props.children}</div>
        </div>
    )
}