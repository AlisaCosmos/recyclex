import "./WorkScheme.scss";
import Recycling from "../../assets/imgs/recycling.png";



export default function WorkScheme() {
    return (
            <section className="scheme container__row">
                <h1 className="scheme__title"> Схема работы </h1>
                        <div className="scheme__content">
                            <div>
                                <p className="scheme__list-title">Наша биржа вторсырья подобна маркетплейсу. Это <span className="scheme_textUp">ПЛОЩАДКА</span>, которая поможет вам:</p>
                                <ul className="scheme__list"> 
                                    <li className="scheme__list-item list-item_bottom">выгодно <span className="scheme_textUp">ПРОДАТЬ</span> или <span className="scheme_textUp">КУПИТЬ</span> уже переработанную вторичку, само вторсырье, макулатуру, металлолом, отходы полиэтилена и пластика, стеклобой и многое другое</li>
                                    <li className="scheme__list-item list-item_bottom">найти <span className="scheme_textUp">ПРИЁМНЫЕ ПУНКТЫ</span> макулатуры, организации по вывозу различного ТБО, мусора</li>
                                    <li className="scheme__list-item list-item_bottom">найти <span className="scheme_textUp">ПРИЁМЩИКОВ</span> металлолома по высокой цене, равно как и сдать цветной лом </li>
                                    <li className="scheme__list-item">получить <span className="scheme_textUp">ИНТЕРЕСНЫЕ ПРЕДЛОЖЕНИЯ</span> от поставщиков оборудования или самому предложить свои услуги для участников биржи</li>
                                </ul>
                            </div>
                            <p className="scheme__text text_bottom">Специально для комфортного использования нашего сервиса вы создаете личный кабинет путем регистрации, выбираете нужную категорию и становитесь участником биржи.</p>
                            <p className="scheme__text text_bottom">Помните, что в данный момент идет отработка всех функционалов сайта, поэтому мы предлагаем вам стать первыми участниками и 2 <span className="scheme_textUp">МЕСЯЦА</span> тестировать площадку абсолютно <span className="scheme_textUp">БЕСПЛАТНО</span>!</p>
                            <p className="scheme__text text_bottom">Более того, мы хотим сделать её максимально удобной, поэтому <span className="scheme_textUp"> ЖДЁМ ОТ ВАС </span>отзывы, предложения, идеи и вопросы.</p>
                            <p className="scheme__text">Ваш помощник в мире отходов, Recyclex<img className="scheme__icon" src={Recycling} width="30px" alt="img recycling"/></p>
                        </div>
        </section>
    );
}