import "./FormButton.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow} from "../../assets/imgs/arrow_button.svg";
import { ReactComponent as Check} from "../../assets/imgs/check_button.svg";
import { useState } from "react";


export default function FormButton({ handleForm, step, isValid, firstAnswer, secondAnswer, disabled}) {
    const [arrowMove, setArrowMove] = useState(false);
    const [checkVisible, setCheckVisible] = useState(false);
  
    const classArrowWrapper = cx("formButton__arrowWrapper", {
        formButton__arrowWrapper_active: arrowMove,
    });
  
    const classArrow = cx("formButton__arrow", {
        formButton__arrow_active: arrowMove,
    });
  
    const classCheckWrapper = cx("formButton__checkWrapper", {
    formButton__checkWrapper_active: checkVisible,
    });

    const handleClick = () => {
        handleForm();

        if (step === 0 && firstAnswer.length !== 0) {
            setArrowMove(true)
            setTimeout(() => {
                setArrowMove(false);
              }, 300);
        }

        if (step === 1 && secondAnswer.length !== 0) {
            setArrowMove(true)
            setTimeout(() => {
                setArrowMove(false);
              }, 300);
        }

        if (step === 2 && isValid) {
            setArrowMove(true)
            setTimeout(() => {
                setArrowMove(false);
              }, 300);
        }

        if (step === 3 && isValid) {
            setArrowMove(true)

            setTimeout(() => {
                setCheckVisible(true);
              }, 350);


              setTimeout(() => {
                setArrowMove(false);
                setCheckVisible(false);
              }, 1000);
        }
    }

    return (
        <div className="formButton">
        <button className="formButton__inner btn btn_smaller" onClick={handleClick} disabled={disabled}>
        {arrowMove && step === 3? <div className="formButton__sendedText">Отправлено</div> : <div className="formButton__sendText">Ответить</div>}
        <div className={classArrowWrapper}>
          <Arrow className={classArrow} />
        </div>
        <div className={classCheckWrapper}>
        <Check className="formButton__check" />
        </div>
        </button>
        </div>
    );
}