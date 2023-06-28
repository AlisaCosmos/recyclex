import "./SwitchTheme.scss";
import ReactSwitch from "react-switch";

export default function SwitchTheme({toggleTheme, theme, tabindex}) {
  return (
    <div className="switch" tabIndex={tabindex} onKeyDown={(e) => e.key === "Enter" && toggleTheme()}>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}
      onColor="#000000"
      onHandleColor="#ffffff"
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.2)"
      activeBoxShadow="0px 0px 1px rgba(0, 0, 0, 0.2)"
      className="react-switch"
      id="material-switch"/>
      <span className="switch__label">{theme === 'light' ? "Light mode" : "Dark mode"}</span>
    </div>
  );
}
