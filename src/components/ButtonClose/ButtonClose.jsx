import "./ButtonClose.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_button.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ButtonClose({ handleModal }) {
  const [isActive, setIsActive] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const navigate = useNavigate();

  const classButton = cx("buttonClose", {
    buttonClose_active: isActive,
  });

  const handleClick = () => {
    setIsActive(true);
    setDisabledButton(true);

    setTimeout(() => {
      handleModal();
      navigate('/');
      setIsActive(false);
    }, 250);

    setTimeout(() => {
      setDisabledButton(false);
    }, 500);
  };

  return (
    <button
      className="buttonCloseWrapper btn btn_smaller"
      onClick={handleClick}
      disabled={disabledButton}>
      <div className={classButton}>
        Закрыть
        <div className="buttonClose__arrowWrapper">
          <Arrow className="buttonClose__arrow" />
        </div>
      </div>
    </button>
  );
}
