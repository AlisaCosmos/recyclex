import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack } from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite } from "../../assets/imgs/logo_white.svg";
import { ReactComponent as BurgerBlack } from "../../assets/imgs/burger_menu.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { useState, useEffect, useRef } from "react";
import * as cx from "classnames";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { scrollbarWidth } from '../../hooks/useDisableBodyScroll';
import { useNavigate } from "react-router-dom";
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Header({ toggleTheme, theme, resetState }) {
  const [focus, setFocus] = useState(false);
  const logoReference = useRef(null);
  useEffect(() => {
    if (focus === true) {
      logoReference.current.focus();
      setFocus(false);
    }
  }, [focus]);

  const handleFocus = () => {
    console.log(`focus on logo ${focus}`);
    setFocus(true);
  };

  let [opened, setOpened] = useState(false);
  useDisableBodyScroll(opened);
  //разрешать скрол при активной новигации
  const { width } = useWindowDimensions();
  let toggleOveflowHidden = () => {
    if (width > 651 && opened) {
      document.body.style.paddingRight = `${scrollbarWidth()}px`;
      document.body.style.removeProperty('overflow');
      document.body.style.overflow = 'scroll';
      console.log("Больше");
    }
    if (width < 651 && opened) {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = '';
      console.log("Меньше");
    }
  };
  toggleOveflowHidden();

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": (opened && (width <= 650)),
  });

  const handleClick = (url) => {
    console.log(url);
    if (opened) {
      setOpened(false);
    }
    if (url === "/form?index=0") {
      resetState();
    }
    if (url === "/form") {
      resetState();
    }
  }


  const onHandleRightClick = (event) => {
    event.preventDefault();
  }

  return (
    <header className="header container">
      <div className="header__inner container__row_wide">
        <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger" />
        <Link to="/" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} ref={logoReference} onKeyDown={(e) => e.key === "Enter" && handleClick("/")} tabIndex={"0"} className="header__logoWrapper">{theme === 'light' ? <LogoBlack className="header__logo" /> : <LogoWhite className="header__logo" />}</Link>
        <div className={classOverlay}></div>
        <nav className={classNav} onClick={handleClick}>
          <div className="header__navInner" onClick={e => e.stopPropagation()}>
            {opened && (
              <button className="header__close" onClick={handleClick}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__links">
              <Link to="/about-project" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/about-project")} tabIndex={"0"} className="header__link">О проекте</Link>
              <Link to="/work-scheme" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/work-scheme")} tabIndex={"0"} className="header__link">Схема работы</Link>
              <Link to="/contacts" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/contacts")} tabIndex={"0"} className="header__link">Контакты</Link>
              <Link to="/form?index=0" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/form?index=0")} tabIndex={"0"} className="header__link ">Присоединиться</Link>
            </div>
          </div>
        </nav>
        <SwitchTheme toggleTheme={toggleTheme} theme={theme} tabindex={"0"} />
      </div>
    </header>
  );
}