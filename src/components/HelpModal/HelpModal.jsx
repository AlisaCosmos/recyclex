import "./HelpModal.scss";
import * as cx from "classnames";
import HelpInput from "../HelpInput/HelpInput";
import { helpFields } from "./helpFields";
import { Link } from "react-router-dom";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert_icon.svg";
import { ReactComponent as AlertIconWhite } from "../../assets/imgs/alert_icon_white.svg";
import { ReactComponent as LogoBlack } from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite } from "../../assets/imgs/logo_white.svg";
import { ReactComponent as CloseIcon } from "../../assets/imgs/close_icon.svg";
import { initialState } from "./initialState";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import ButtonSend from "../ButtonSend/ButtonSend";
import { useEffect, useState, useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import ReactFocusLock from 'react-focus-lock';


export default function HelpModal({ handleModal, opened, theme }) {
  const [focus, setFocus] = useState(false);
  const [focusIcon, setFocusIcon] = useState(false);
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

  const Class_help__cross = cx("help__cross", {
    "help__cross_focus": focusIcon,
  });
  const classModal = cx("help", {
    "help help_show": opened,
  });

  const onHandleRightClick = (event) => {
    event.preventDefault();
  }

  const [state, setState] = useState(initialState)
  const [phoneValue, setPhoneValue] = useState('');
  const [valid, setValid] = useState(false);
  const { helpSurname, helpName, helpMiddle, helpCompany, helpEmail, helpQuestion } = state;

  useEffect(() => {
    if (!opened) {
      setState(initialState);
      setPhoneValue('');
      setFocusIcon(false);
    }
  }, [opened])

  const handleChange = (e, id) => {
    // const value = e.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [id]: {
        ...state[id],
        value: e.target.value
      }
    });
  };

  const blurHandler = (type) => {
    setState((state) => ({
      ...state,
      [type]: {
        ...state[type],
        isDirty: true
      }
    }));
    validateForm()
  }

  const validateForm = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const serchPunycode = /\b@xn--\b/giu;
    const regEmail = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,63}$/;
    /* const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i; */
    const regEmailFirstSign = /^[a-zA-Z0-9]/;

    for (const field of helpFields) {
      const { rule, id } = field;
      const value = state[id].value.trimStart().replace(/ +/g, " ");
      let error;

      switch (rule) {
        case 'name':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          if (!regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          break;
        case 'middle':
          if (value.length !== 0 && value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          if (value.length !== 0 && !regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          break;
        case 'company':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'phone':
          if (phoneValue === undefined) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (phoneValue.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!isPossiblePhoneNumber(phoneValue)) {
            error = 'Недопустимая длина';
            setValid(false);
            break;
          }
          break;
        case 'email':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (value.length < 5) {
            error = 'Минимум 5 символов';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          if (!regEmailFirstSign.test(Array.from(value)[0])) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if (serchPunycode.test(value)) {
            error = "Недопустимый формат";
            setValid(false);
            break;
          }
          if (!regEmail.test(value)) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          break;
        case 'question':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (value.length > 5000) {
            error = 'Максимум 5000 символов';
            setValid(false);
            break;
          }
          break;
        default:
          error = '';
      }

      setState((state) => ({
        ...state,
        [id]: {
          ...state[id],
          error: error ? error : ''
        }
      }));
    }
  }

  const handleClick = () => {
    validateForm();

    for (let key in state) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
      setState((state) => ({
        ...state,
        [key]: {
          ...state[key],
          isDirty: true
        }
      }));
    }

    if (valid) {
      // console.log(`Фамилия: ${data.surname}
      //           Имя: ${data.name}
      //           Отчество: ${data.patronymic}
      //           Название компании:${data.companyName}
      //           Телефон: ${data.mobileMumber}
      //           Почта: ${data.email}
      //           Вопрос: ${data.question}`)
      sendData();
      setState(initialState); // возвращаем состояние к началу
      setPhoneValue('');
      setValid(false);
    }
  };

  const sendData = () => {
    const URL = process.env.REACT_APP_API_ADDRESS_SUPPORT;
    const data = {
      companyName: helpCompany.value.trimStart().replace(/ +/g, " "),
      email: helpEmail.value.trimStart().replace(/ +/g, " "),
      mobileMumber: phoneValue.trimStart().replace(/ +/g, " "),
      name: helpName.value.trimStart().replace(/ +/g, " "),
      patronymic: helpMiddle.value.trimStart().replace(/ +/g, " "),
      question: helpQuestion.value.trimStart().replace(/ +/g, " "),
      surname: helpSurname.value.trimStart().replace(/ +/g, " ")
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_name: data.companyName,
        email: data.email,
        mobile_number: data.mobileMumber,
        name: data.name,
        patronymic: data.patronymic,
        question: data.question,
        surname: data.surname
      }),
      mode: 'cors'
    })

      .then((response) => {
        console.log(response)
      })

      .catch((e) => console.log(e))
  }

  if (!opened) {
    return null
  }

  return (
    <RemoveScroll removeScrollBar allowPinchZoom={true}>
      <div className={classModal}>
        <ReactFocusLock>
          <div className="help__inner">
            <div className="help__content">
              <div className="help__header">
                <a href="#" className="help__focusReset" ref={logoReference}>
                  {theme === "light" ? (
                    <LogoBlack className="help__logo" />
                  ) : (
                    <LogoWhite className="help__logo" />
                  )}
                </a>
                <button className="help__close"
                  onClick={handleModal}
                  onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
                  onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
                  <CloseIcon className={Class_help__cross} />
                </button>
              </div>
              <div className="help__form">
                <div className="help__rows">
                  {helpFields.map((item) => (
                    <HelpInput
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      name={item.name}
                      value={state[item.id].value}
                      type={item.type}
                      view={item.view}
                      theme={theme}
                      blurHandler={blurHandler}
                      phoneValue={phoneValue}
                      handlePhoneValue={setPhoneValue}
                      handleChange={handleChange}
                      handleClick={handleClick}
                      errorMessage={state[item.id].error}
                      isDirty={state[item.id].isDirty}
                    />
                  ))}
                </div>
                <div className="help__footer">
                  <div className="help__helper"></div>
                  <div className="help__alertAndButton">
                    <div className="help__alert">
                      {theme === "light" ? (
                        <AlertIcon className="help__alertIcon" />
                      ) : (
                        <AlertIconWhite className="help__alertIcon" />
                      )}
                      <span>
                        Нажимая «Отправить», вы даете{" "}
                        <br className="help__space"></br><Link
                          to="/agreement"
                          onClick={() => handleFocus()}
                          onMouseDown={onHandleRightClick}
                          target="_blank"
                          rel="noreferrer"
                          className="help__agreement">
                          согласие на обработку персональных данных
                        </Link>
                      </span>
                    </div>
                    <ButtonSend handleSendForm={handleClick} isValid={valid} handleModal={handleModal}>Отправить</ButtonSend>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactFocusLock>
      </div>
    </RemoveScroll>
  );
}