import ButtonJoin from "../ButtonJoin/ButtonJoin";
import "./FirstScreen.scss";


export default function FirstScreen() {
    return (
        
            
        <section className="firstScreen">
            <div className="firstScreen__inner">
                <h1 className="firstScreen__title">Строим бизнес на мусоре</h1>
                <div className="firstScreen__subTitle">Recyclex - это биржа <br/> участников рынка вторсырья</div>
                <div className="firstScreen__btn">
                    <ButtonJoin>Присоединиться</ButtonJoin>
                </div>
            </div>
        </section>
        
        
    );
}