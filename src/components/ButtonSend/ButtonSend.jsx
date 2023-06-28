import "./ButtonSend.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow} from "../../assets/imgs/arrow_button.svg";
import { ReactComponent as Check} from "../../assets/imgs/check_button.svg";
import { useState } from "react";

function ButtonSend({ handleSendForm, isValid, handleModal, children }) {
  const [arrowMove, setArrowMove] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);

  const classArrowWrapper = cx("buttonSend__arrowWrapper", {
    buttonSend__arrowWrapper_active: arrowMove,
  });

  const classArrow = cx("buttonSend__arrow", {
    buttonSend__arrow_active: arrowMove,
  });

  const classCheckWrapper = cx("buttonSend__checkWrapper", {
    buttonSend__checkWrapper_active: checkVisible,
  });

  const handleClick = () => {
    handleSendForm();

    if (isValid) {
      setArrowMove(true);

      setTimeout(() => {
        setCheckVisible(true);
      }, 100);

      setTimeout(() => {
        handleModal()
        setArrowMove(false);
        setCheckVisible(false);
      }, 1500);
    }
  };

  return (
    <button className="buttonSend btn btn_modal" onClick={handleClick}>
      <div className="buttonSend__inner">
        {arrowMove ? <div className="buttonSend__sendedText">Отправлено</div> : children}
        <div className={classArrowWrapper}>
          <Arrow className={classArrow} />
        </div>
        <div className={classCheckWrapper}>
        <Check className="buttonSend__check" />
        </div>
      </div>
    </button>
  );
}

export default ButtonSend;
