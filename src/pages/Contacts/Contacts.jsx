import "./Contacts.scss";
// import Worker from "../../components/Worker/Worker";
// import WorkerPhoto from "../../assets/imgs/worker.png";
// import WorkerPhotoForRetina from "../../assets/imgs/worker_2x.png";
import { useState, useEffect, useRef } from "react";

export default function Contacts() {
    const [focus, setFocus] = useState(false);
    const logoReference = useRef(null);
    useEffect(() => {
        if (focus === true) {
            logoReference.current.focus();
            setFocus(false);
        }
    }, [focus]);

    const handleFocus = () => {
        console.log("focus on logo");
        setFocus(true);
    };
    const onHandleRightClick = (event) => {
        event.preventDefault();
    }
    return (
        <section className="contacts container__row">
            <h1 className="contacts__header">Контакты</h1>
            <div className="contacts__info">
                <div className="contacts__city contacts__column">
                    <span className="contacts__subtitle contacts__subtitle_bigger">Россия</span>
                </div>
                <div className="contacts__address contacts__column">
                    <span className="contacts__subtitle">Адрес</span>
                    <span className="contacts__description contacts__adress">Краснодар,<br />ул. Уральская,<br />д. 75/1, помещ.307</span>
                </div>
                <div className="contacts__contacts contacts__column">
                    <span className="contacts__subtitle">Для связи<a href="#" className="contacts__focusReset" ref={logoReference}></a></span>
                    <div className="contacts__numbers contacts__description">
                        <span><a href="tel:+78003330816" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>+7 (800) 333-08-16</a></span>
                    </div>
                </div>
                {/* <div className="contacts__director contacts__column">
                    <span className="contacts__subtitle contacts__description">Директор</span>
                    <span>Коверда <br className="contacts__tablet_hidden"/>Вадим Николаевич</span>
                </div> */}
            </div>
            <div className="contacts__mapWrapper">
                {/* <iframe className="contacts__map"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5081828838265!2d37.53745771007338!3d55.74967387708095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcbfd1b72d%3A0x433d48214f76b256!2z0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAxMiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyMzMxNw!5e0!3m2!1sru!2sge!4v1669406101341!5m2!1sru!2sge" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  */}
                <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.8573826728434!2d39.04708942961293!3d45.032965482193866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f05aac19194549%3A0x14a99157224e7e5b!2sUlitsa%20Ural&#39;skaya%2C%2075%2F1%2C%20Krasnodar%2C%20Krasnodarskiy%20kray%2C%20350059!5e0!3m2!1sen!2sru!4v1675181512272!5m2!1sen!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            {/* <div className="contacts__workers">
                <Worker
                position='Главный специалист отдела закупок и контроля затрат'
                surname='Иванова'
                name='Алиса Ивановна'
                phone='+7(495) 783-35-34'
                email='AASirotenko@vtbf.ru'
                src={WorkerPhoto}
                srcRetina={WorkerPhotoForRetina}/>
                <Worker
                position='Главный специалист отдела закупок и контроля затрат'
                surname='Иванова'
                name='Алиса Ивановна'
                phone='+7(495) 783-35-34'
                email='AASirotenko@vtbf.ru'
                src={WorkerPhoto}
                srcRetina={WorkerPhotoForRetina}/>
            </div> */}
        </section>
    );
}



