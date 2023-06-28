import "./BorderThin.scss";

export default function BorderThin(props) {
    return (
        <div className="borderThin">
            <div className="borderThin__inner">{props.children}</div>
        </div>
    )
}