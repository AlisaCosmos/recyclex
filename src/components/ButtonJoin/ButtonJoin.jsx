import "./ButtonJoin.scss";
import { Link } from "react-router-dom";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_button.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonJoin(props) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const classButton = cx("buttonJoin", {
    "buttonJoin_active": isActive,
  });
  
  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      navigate('/form?index=0');
    }, 250);
  };

  return (
    <Link to="/form?index=0" className="buttonJoinWrapper btn" onClick={handleClick}>
      <div className={classButton}>
        {props.children}
        <div className="buttonJoin__arrowWrapper">
          <Arrow className="buttonJoin__arrow" />
        </div>
      </div>
    </Link>
  );
}
