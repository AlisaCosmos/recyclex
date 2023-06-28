import "./RadioButton.scss";

export default function RadioButton({
  id,
  value,
  name,
  handleChange,
  defaultChecked,
}) {
  return (
    <div className="radio">
      <div className="radio__inner">
          <input
            className="radio__input"
            onChange={(e) => handleChange(e)}
            id={id}
            type="radio"
            value={value}
            name={name}
            defaultChecked={defaultChecked}
          />
          <label className="radio__label" htmlFor={id}>
            <span className="radio__mark"></span>
            <div className="radio_text"><span className="radio_text">{value}</span></div>
          </label>
      </div>
    </div>
  );
}
