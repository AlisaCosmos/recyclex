import "./ErrorPage.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as ErrorSvg } from "../../assets/imgs/errorPage.svg";


export default function ErrorPage() {
    return (
        <section className="errorPage container__row">
            <div className="errorPage__content">
                <div className="errorPage__container">
                    <h1 className="errorPage__title">404</h1>
                    <div className="errorPage__subTitle">Ошибка!</div>
                    <div className="errorPage__svg">
                        <ErrorSvg width="647" height="596" />
                    </div>
                    <div className="errorPage__text"> Страница, которую вы ищите <br/> не существует либо устарела</div>
                </div>
                <Link to="/"  className="btn  link errorPage__btn">Вернуться на главную</Link>
            </div>
        </section>
    );
}
