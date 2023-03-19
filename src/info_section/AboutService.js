import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import './aboutService.scss'

function AboutService(){
    return(
        <div className="korobka_service">
            <HeaderComponent title = 'О сервисе' />
        <div className="div_about_text">
            Netex - Ваш персональный обменный сервис. Netex позволяет совершать обмены электронных валют в огромное количество направлений. Совершать обмены с Netex можно с любого устройства: мобильный телефон, планшет или компьютер.<br/><br/>

Netex - система, созданная на базе современного программного обеспечения и содержащая весь набор необходимых функций для удобной и безопасной конвертации наиболее распространенных видов электронных денег.<br/><br/>

Наш обменник электронных валют создан для тех, кто хочет быстро, безопасно и по выгодному курсу обменять такие виды электронных валют как: Perfect Money, Payeer, AdvCash, Qiwi, Yandex, криптовалюты Bitcoin, Bitcoin Cash, Ethereum, Litecoin и другие.<br/><br/>

Преимуществом сервиса Netex является не только его надежность, но и привлекательность курсов практически по всем направлениям обмена. На сайте круглосуточно работает онлайн-чат, где на любые вопросы отвечает служба поддержки. Кроме того с консультантами можно связаться по телефону.<br/>
Репутация превыше всего! Главное кредо сервиса - абсолютная прозрачность и честность. Вы можете быть уверены в безопасности своих средств, производя обмен в Netex.
        </div>
        <div className="oracle">
        Разработано в Oracle Digital
        </div>
        </div>
    )
}

export default AboutService