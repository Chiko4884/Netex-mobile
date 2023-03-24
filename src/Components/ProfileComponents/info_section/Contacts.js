import React from "react";
import HeaderComponent from "../../HeaderComponent";
import './contacts.scss'

function Contacts(){
    return(
        <div className="korobka_contacts">
            <HeaderComponent title = 'Контакты' />
        <div className="body_contacts">
            <img src="./img/contacts_logo.png" className="cont_logo"/>
        <div className="contacts">
            <h1>Контакты</h1>
                <div className="item_contacts">
                <img className="con_icon" src="./img/contact_phone.png" alt="phone"/>
                    <div className="div_nom">
                            <h3>Номер</h3>
                            <p>+996 (508) 24 11 11 (Whatsapp)</p>
                    </div>

                </div>

                <div className="item_contacts">
                <img className="con_icon1" src="./img/contact_mail.png" alt="email"/>
                    <div className="div_nom">
                            <h3>Электронная почта</h3>
                            <p>business@netex.kg</p>
                    </div>
                </div>

                <div className="item_contacts">
                <img className="con_icon2" src="./img/contact_rab_vrem.png" alt="email"/>
                    <div className="div_nom">
                            <h3>Рабочее время</h3>
                            <p>Пн-Пт 10:00-19:00</p>
                    </div>
                </div>

        </div>



        </div>
        <div className="div_karta">
            <div className="div_location">
            <img className="con_icon2" src="./img/location_icon.png" alt="email"/>
                    <div className="div_nom">
                            <h3>Hyatt Regency</h3>
                            <h3>(191 Советская, Бишкек 720011)</h3>
                    </div>  
            </div>
            <img src="./img/contact_map.png" className="map"/>
        </div>
        </div>
    )
}

export default Contacts