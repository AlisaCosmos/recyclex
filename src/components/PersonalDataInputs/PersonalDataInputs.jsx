import "./PersonalDataInputs.scss";
import 'react-phone-number-input/style.css'
import PersonalDataInput from "../PersonalDataInput/PersonalDataInput";

export default function PersonalDataInputs({data, state, blurHandler, handleChangePersonalData, phoneValue, handlePhoneValue}) {
    return (
        <div className="personalData">
            {data.map((item) => (
                <PersonalDataInput
                key={item.id}
                id={item.id}
                name={item.name}
                value={state[item.id].value}
                type={item.type}
                blurHandler={blurHandler}
                handleChange={handleChangePersonalData}
                errorMessage={state[item.id].error}
                isDirty={state[item.id].isDirty}
                phoneValue={phoneValue}
                handlePhoneValue={handlePhoneValue}
                />
            ))}
        </div>
    );
}