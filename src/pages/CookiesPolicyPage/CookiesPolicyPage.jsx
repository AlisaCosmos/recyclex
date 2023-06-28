
import { useState, useEffect, useRef } from "react";

import "./CookiesPolicyPage.scss";

export default function CookiesPolicyPage() {
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
        <section className="сookies container__row">
            <h1 className="сookies__title"> Cookies Policy </h1>
                    <div className="сookies__content">
                        <div>
                        <h2 className="сookies__subtitle">Что такое файлы cookie?</h2>
                        <p className="сookies__text">Файлы cookie – это небольшие файлы, автоматически оставляемые на используемом вами устройстве, которые затем сохраняются в каталогах, используемых веб-браузером пользователя. Фактически они представляют собой безвредные фрагменты данных, хранимые на устройстве пользователя, которые легко посмотреть или удалить. Затем файлы cookie пересылаются обратно на сайт происхождения при каждом последующем посещении или на другой сайт, который распознает этот файл cookie.</p>
                        <h2 className="сookies__subtitle">Использование файлов cookie</h2>
                        <p className="сookies__text"><a href="#" className="cookies__focusReset" ref={logoReference} >Наш</a> <a href="/" className="cookies__links_effect" target="_blank" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>Сайт</a> (recyclex.online) использует файлы cookie для улучшения качества своих сервисов, делая их простыми и эффективными для пользователей, просматривающих страницы <a href="/"  className="cookies__links_effect " target="_blank" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>recyclex.online</a>.<br/> Существуют различные типы файлов cookie: некоторые из которых служат для того, чтобы сделать использование Сайта более эффективным, а другие предназначены для подключения определенных функций.</p>
                        <p className="сookies__list-title">Анализируя более подробно, наши файлы cookie позволяют:</p>
                            <ul className="сookies__list">
                                <li className="сookies__list-item list-item_circleList list-item_bottom">отслеживать просматриваемые страницы, позволяя веб-сайту запоминать ваши действия и предпочтения (такие как логины, язык, размеры шрифтов и другие параметры отображения) в течение определенного периода времени, чтобы вам не приходилось повторно вводить их каждый раз при посещении сайта или во время просмотра различных страниц;</li>
                                <li className="сookies__list-item list-item_circleList ">анализировать использование сервисов и контента, предоставляемых <a href="/" className="cookies__links_effect" target="_blank" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>recyclex.online</a>, чтобы оптимизировать ваше пребывание на сайте и предлагаемые возможности.</li>
                            </ul>
                        </div>
                        <div className="сookies-type__wrapper">
                            <h2 className="сookies__subtitle">Типы файлов cookie</h2>
                            <h4 className="сookies__subtitle_h4">Технические файлы cookie:</h4>
                            <p className="сookies__text">Эти файлы cookie необходимы для обеспечения надлежащего функционирования веб-сайта: они позволяют вам зарегистрироваться/войти в систему и получить доступ к зарезервированным для вас функциям, а также позволяют нам контролировать безопасность сайта и повышать его эксплуатационные характеристики, например, сохраняя ваши предпочтения, чтобы оптимизировать ваши последующие посещения.</p>
                            <p className="сookies__list-title list-title_bottom">Они делятся на две категории:</p>
                                <ul className="сookies__list">
                                    <li className="сookies__list-item list-item_bottom"> <span className="text_weight700">постоянные:</span> после закрытия окна браузера они не уничтожаются, а остаются до заданного срока;</li>
                                    <li className="сookies__list-item"> <span className="text_weight700">сессионные:</span> они уничтожаются при каждом закрытии окна браузера.</li>
                                </ul>
                            <h4 className="сookies__subtitle_h4">Аналитические файлы cookie:</h4>
                            <p className="сookies__text">Эти файлы cookie позволяют нам в анонимной форме собирать и анализировать трафик и использование веб-сайта, чтобы лучше понять и усовершенствовать способ использования сайта посетителями, а также определить, какие страницы и продукты отображаются чаще всего. Этот тип файлов cookie собирает анонимные данные об активности пользователей и о том, как они попадают на Сайт. Эти cookie не являются необходимыми для работы веб-сайта, но обеспечивают лучший опыт просмотра. Аналитические файлы cookie отправляются с самого Сайта или сторонних доменов.<br/> В соответствии с действующим законодательством о конфиденциальности для установки этих файлов cookie не требуется ваше предварительное согласие.</p>
                            <h4 className="сookies__subtitle_h4">Аналитические файлы cookie сторонних сервисов:</h4>
                            <p className="сookies__text">Эти файлы cookie используются для сбора в анонимной форме информации об использовании Сайта пользователями, такой как посещенные страницы, время пребывания, происхождение трафика, географическое положение, возраст, пол и интересы в целях маркетинговых кампаний. Эти cookie отправляются со сторонних доменов, внешних по отношению к Сайту.</p>
                            <h4 className="сookies__subtitle_h4">Файлы cookie для интеграции продуктов и функций стороннего программного обеспечения:</h4>
                            <p className="сookies__text">Этот тип файлов cookie интегрирует функции, разработанные третьими сторонами, в страницы Сайта в виде значков и предпочтений, выраженных в социальных сетях, с целью обмена содержимым сайта или для использования сторонних программных сервисов (например, программного обеспечения для создания карт и других программ, предлагающих дополнительные услуги). Эти файлы cookie поступают со сторонних доменов и партнерских сайтов, которые предлагают свои функции на страницах Сайта. </p>
                            <h4 className="сookies__subtitle_h4">Профилирующие файлы cookie:</h4>
                            <p className="сookies__text"> Эти файлы cookie необходимы для создания профилей пользователей с целью отправки им рекламных сообщений в соответствии с предпочтениями, выраженными пользователем на страницах Сайта.<br/> В соответствии с действующим законодательством о конфиденциальности для установки этих файлов cookie требуется ваше предварительное согласие. По этой причине, когда вы заходите на сайт, на видном месте отображается специальный баннер, информирующий вас о том, что на сайте используются профилирующие файлы cookie и что при закрытии баннера, прокрутке страницы или нажатии на любой элемент страницы вне баннера вы даете согласие на использование cookie.<br/> Конечно, вы в любое время можете запретить установку профилирующих файлов cookie, не лишаясь при этом возможности посещения сайта и использования его содержимого.</p>
                            <h4 className="сookies__subtitle_h4">Сторонние веб-сайты и сервисы:</h4>
                            <p className="сookies__text">Сайт может содержать ссылки на другие веб-сайты, которые имеют собственную политику конфиденциальности, которая может отличаться от политики, принятой <a href="/" className="cookies__links_effect" target="_blank" onClick={() => handleFocus()} onMouseDown={onHandleRightClick}>recyclex.online</a>, а поэтому мы не несем за эти веб-сайты ответственность.</p>
                        </div>
                        <div className="сookies-info__wrapper">
                            <h2 className="сookies__subtitle">Информация о файлах cookie</h2>
                            <h4 className="сookies__subtitle_h4">PREF</h4>
                            <p className="сookies__text">Большинство пользователей Google имеет в браузерах предпочтительный файл cookie, называемый PREF. Браузер посылает этот файл cookie с запросами на сайты Google. Файл cookie PREF может хранить ваши настройки и другую информацию, в частности предпочитаемый вами язык (например, русский), количество желаемых результатов поиска для отображения на каждой странице (например, 10 или 20) и ваши предпочтения по активации фильтра безопасного поиска Google SafeSearch. <br/>
                                <a href="https://policies.google.com/technologies/cookies?hl=ru" 
                                        className="cookies__links_effect"
                                        onClick={() => handleFocus()} 
                                        onMouseDown={onHandleRightClick}
                                        target="_blank"
                                        rel="noreferrer"> google.es › types</a></p>
                            <h4 className="сookies__subtitle_h4">_gat</h4>
                            <p className="сookies__text">Файл cookie _gat является частью сервиса анализа и мониторинга Google Analytics. Это файл cookie, срок действия которого истекает через 10 минут после создания или обновления. Он используется для ограничения частоты запросов аналитических скриптов, чтобы считать посещения пользователя уникальными. <br/>
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" 
                                        className="cookies__links_effect"
                                        onClick={() => handleFocus()} 
                                        onMouseDown={onHandleRightClick}
                                        target="_blank"
                                        rel="noreferrer"> developers.google.com › cookie-usage</a></p>
                            <h4 className="сookies__subtitle_h4">_ga</h4>
                            <p className="сookies__text">Файл cookie _ga является частью сервиса анализа и мониторинга Google Analytics. Это файл cookie, срок действия которого истекает через 2 года после создания или обновления. Он используется для различения пользователей. <br/>
                            <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" 
                                        className="cookies__links_effect"
                                        onClick={() => handleFocus()}
                                        onMouseDown={onHandleRightClick}
                                        target="_blank"
                                        rel="noreferrer"> developers.google.com › cookie-usage</a></p>
                            <h4 className="сookies__subtitle_h4">PHPSESSID</h4>
                            <p className="сookies__text">Файл cookie PHPSESSID очень распространен в проектах, реализованных в средах Linux. Это технический файл cookie, в котором хранится буквенно-цифровое значение, идентифицирующее сеанс пользователя. Этот файл cookie удаляется после закрытия окна браузера и не хранит никакой личной информации. </p>
                        </div>
                        <div className="сookies__items">
                            <div className="сookies__item сookies_divider">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Mozilla Firefox</h4>
                                <a href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas" 
                                    className="сookies__link cookies__links_effect"
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    target="_blank"
                                    rel="noreferrer">https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas</a>
                            </div>
                            <div className="сookies__item сookies_divider">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Google Chrome</h4>
                                <a href="https://support.google.com/chrome/answer/95647?hl=ru" 
                                    className="сookies__link cookies__links_effect"
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    target="_blank"
                                    rel="noreferrer">https://support.google.com/chrome/answer/95647?hl=ru</a>
                            </div>
                            <div className="сookies__item сookies_divider">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Edge</h4>
                                <a href="https://support.microsoft.com/ru-ru/microsoft-edge/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2-cookie-%D0%B2-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09#:~:text=%D0%92%20Microsoft%20Edge%20%D0%B2%D1%8B%D0%B1%D0%B5%D1%80%D0%B8%D1%82%D0%B5%20%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8,cookie%20%D0%B8%20%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2" 
                                    className="сookies__link cookies__links_effect"
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    target="_blank"
                                    rel="noreferrer">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a>
                            </div>
                            <div className="сookies__item сookies_divider">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Safari 6/7 Mavericks</h4>
                                <a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
                                    className="сookies__link cookies__links_effect"
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    target="_blank"
                                    rel="noreferrer">https://support.apple.com/ru-ru/guide/safari/sfri11471/mac</a>
                            </div>
                            <div className="сookies__item сookies_divider">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Safari 8 Yosemite</h4>
                                <a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" 
                                    className="сookies__link cookies__links_effect"
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    target="_blank"
                                    rel="noreferrer">https://support.apple.com/ru-ru/guide/safari/sfri11471/mac</a>
                            </div>
                            <div className="сookies__item">
                                <h4 className="сookies__title-link сookies__subtitle_h4">Safari su iPhone, iPad</h4>
                                <a href="https://support.apple.com/ru-ru/HT201265" 
                                    onClick={() => handleFocus()} 
                                    onMouseDown={onHandleRightClick}
                                    className="сookies__link cookies__links_effect"
                                    target="_blank"
                                    rel="noreferrer">https://support.apple.com/ru-ru/HT201265</a>
                            </div>
                        </div>
                    </div>
            </section>
    );
}