import "./Checkbox.scss";

export default function Checkbox({ id, value, handleChange }) {
  return (
    <div className="checkboxWrapper">
      <div className="checkbox">
        <input
          className="checkbox__input"
          onChange={(e) => handleChange(e)}
          id={id}
          type="checkbox"
          value={value}
        />
        <label className="checkbox__label" htmlFor={id}>
          <div className="checkbox__mark"></div>
          <span className="checkbox__text">{value}</span>
        </label>
      </div>
    </div>
  );
}
