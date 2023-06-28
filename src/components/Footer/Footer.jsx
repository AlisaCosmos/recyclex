import "./Footer.scss";
import { ReactComponent as TelegramIcon } from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/imgs/whatsapp_icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function Footer({ handleModal }) {
  const [focus, setFocus] = useState(false);
  const logoReference = useRef(null);
  useEffect(() => {
    if (focus === true) {
      logoReference.current.focus();
      setFocus(false);
    }
  }, [focus]);

  const handleFocus = () => {
    console.log("focus on logo");
    setFocus(true);
  };

  const handleClick = (url) => {
    console.log(`click ${url}`);
    window.scrollTo({ // этот код меняет поведение прокрутки на "smooth"
      top: 0,
      behavior: "smooth"
    });
  }
  const onHandleRightClick = (event) => {
    event.preventDefault();
  }

  return (
    <footer className="footer container">
      <div className="footer__inner container__row">
        <div className="footer__requisitesAndRights">
          <div className="footer__requisites">2021, ООО “РЕСАЙКЛЕКС”<br />ИНН: 2309176846 <br className="footer__requisites_spaceMob"/><a href="#" className="footer__focusReset" ref={logoReference} >ТЕЛ: </a><a className="footer__telLink" href="tel:+78003330816" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>+7 (800) 333-08-16</a><br /><div className="footer__address_table">АДРЕС: г. Краснодар, <br/>ул. Уральская,<div className="footer__address"> д. 75/1, помещ.307</div></div>
          </div>
          <div className="footer__rights">Все права защищены</div>
        </div>
        <div className="footer__links">
          <div className="footer__pages">
            <span><Link to="/privacy-policy" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/privacy-policy")} tabIndex={"0"} className="footer__link">Политика конфиденциальности</Link></span>
            <span><Link to="/general-terms" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/general-terms")} tabIndex={"0"} className="footer__link">Общие условия</Link></span>
            <span><Link to="/cookies-policy-page" onClick={(e) => { handleClick(e.target.pathname); handleFocus(); }} onMouseDown={onHandleRightClick} onKeyDown={(e) => e.key === "Enter" && handleClick("/cookies-policy-page")} tabIndex={"0"} className="footer__link">Cookies Policy</Link></span>
          </div>
          <span><button className="footer__manager footer__manager_desktop" onClick={() => { handleModal(); handleFocus(); }}>Связь с менеджером</button></span>
        </div>
        <div className="footer__contacts">
          <div className="footer__email"><a className="footer__emailLink" href="mailto:info@recyclex.online" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>info@recyclex.online</a></div>
          <button className="footer__manager footer__manager_mobile" onClick={() => { handleModal(); handleFocus(); }}>Связь с менеджером</button>
          <div className="footer__social">

            <a
              href='https://t.me/+79585787495'
              target="_blank"
              rel="noreferrer"
              onClick={() => handleFocus()} onMouseDown={onHandleRightClick} >
              <TelegramIcon className="footer__icon" />
            </a>


            <a
              href='https://wa.me/+79585787495'
              target="_blank"
              rel="noreferrer"
              onClick={() => handleFocus()} onMouseDown={onHandleRightClick} >
              <WhatsAppIcon className="footer__icon" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}