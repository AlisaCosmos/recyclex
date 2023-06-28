
import "./FormThankYouPage.scss";
import { ReactComponent as Thanks} from "../../assets/imgs/thanks.svg";


export default function FormThankYouPage() {
    return (
        <div className="thanks container__row">
            <h1 className="thanks__header">Спасибо!</h1>
            <Thanks className="thanks__image"/>
            <p className="thanks__description">Ваша заявка успешно отправлена!<br/>Ожидайте сообщения!</p>
        </div>
    );
}