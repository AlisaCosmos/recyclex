import "./PersonalDataInput.scss";
import * as cx from "classnames";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru";

export default function PersonalDataInput({
  id,
  name,
  value,
  type,
  handleChange,
  blurHandler,
  errorMessage,
  isDirty,
  phoneValue,
  handlePhoneValue,
}) {
  const classInput = cx("personalDataInput__input", {
    "personalDataInput__input_error": errorMessage && isDirty,
  });

  return (
    <div className="personalDataInput_inputWrapper">
      <label className="personalDataInput__label" htmlFor={id}>
        {name}
      </label>
      {type === "tel" && (
        <PhoneInput
          labels={ru}
          international
          defaultCountry="RU"
          value={phoneValue}
          type={type}
          name={id}
          onBlur={() => blurHandler(id)}
          onChange={handlePhoneValue}
          className={classInput}
          maxLength={25}
          smartCaret={false}
        />
      )}

      {type !== "tel" && (
        <input
          className={classInput}
          onChange={(e) => handleChange(e, id)}
          onBlur={() => blurHandler(id)}
          value={value}
          type={type}
          name={id}
        />
      )}
      {errorMessage && isDirty && (
        <div className="personalDataInput__error">
          <span className="personalDataInput__errorText">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
