import ButtonJoin from "../ButtonJoin/ButtonJoin";

import "./BecomeMember.scss";


export default function BecomeMember() {
    return (  
        <section className="member">
            <div className="member__inner">
                <div className="member__steps">
                    <div className="step__wrapper">
                        <div className="step__first step__first_color">1</div>
                    </div>
                    <div className="step__wrapper">
                        <div className="step__second">2</div>
                    </div>
                    <div className="step__wrapper">
                        <div className="step__third">3</div>
                    </div>
                    <div className="step__wrapper">
                        <div className="step__fourth">4</div>
                    </div>
                </div>
                <h1 className="member__title">Становитесь участником за 4 шага</h1>
                <div className="member__subTitle">Ответьте на простые вопросы и станьте участником Recyclex</div>
                <div className="member__btn">
                    <ButtonJoin>Присоединиться</ButtonJoin>
                </div>
            </div>
        </section>  
    );
}