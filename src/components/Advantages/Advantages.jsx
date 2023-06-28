import ButtonJoin from '../ButtonJoin/ButtonJoin';
import Partrers from "../../assets/imgs/partners.svg";
import Money from "../../assets/imgs/money.svg";
import Deals from "../../assets/imgs/deals.svg";
import Community from "../../assets/imgs/community.svg";

import "./Advantages.scss";


export default function Advantages() {
    return (
        <section className="advantages">
            <div className="advantages__inner">
                <h1 className="advantages__title">Здесь все необходимое</h1>
                <div className="advantages__items">
                    <div className="advantages__item">
                        <div className="advantages__item_row item__img">
                            <img src={Partrers}  width="60px" alt="img partrers"/>
                        </div>
                        <div className="advantages__item_row item__wrapper">
                            <h4 className="item__title">База партнеров</h4>
                            <p className="item__text">Удобный бизнес-каталог</p>
                        </div>
                    </div>
                    <div className="advantages__item">
                        <div className="item__img">
                            <img src={Money}  width="60px" alt="img money"/>
                        </div>
                        <div className="item__wrapper">
                            <h4 className="item__title">Лучшие цены</h4>
                            <p className="item__text">Анализ актуальных цен на <br/> вторсырье</p> 
                        </div>
                        
                    </div>
                    <div className="advantages__item">
                        <div className="item__img">
                            <img src={Deals} width="60px"  alt="img deals"/>
                        </div>
                        <div className="item__wrapper">
                            <h4 className="item__title">Безопасные сделки</h4>
                            <p className="item__text">Прозрачные соглашения</p>
                        </div>
                    </div>
                    <div className="advantages__item">
                        <div className="item__img">
                            <img src={Community} width="60px"  alt="img community"/>
                        </div>
                        <div className="item__wrapper">
                            <h4 className="item__title">Сообщество</h4>
                            <p className="item__text">Предприятия, организации и заинтересованные лица на одной площадке</p>
                        </div>
                    </div>
                </div>
                <div className="advantages__btn">
                    <ButtonJoin>Присоединиться</ButtonJoin>
                </div>
            </div>
        </section>
    );
}