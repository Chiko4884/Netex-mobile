import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent";
import './twoFactorAuth.scss'

export let stateTwoFactorAuth = false;
export const enableTwoFactorAuth = ()=>{
    stateTwoFactorAuth = true;
}
export const disableTwoFactorAuth = ()=>{
    stateTwoFactorAuth = false;
}

function TwoFactorAuth(){
    const navigate = useNavigate()
    return(
        <div className="korobka_security">
        <HeaderComponent title='Безопасность'/>
 <div className="body_security">
    <div className="two_factor">
            <h3>Двухфакторная авторизация</h3>
            <h4>Это дополнительный уровень защиты для Вашего аккаунта.</h4>
            <img src="./img/qrcode.png"/>
            <h5>Загрузите приложение Google Authenticator с Play Market или App Store. Далее, в мобильном приложении отсканируйте этот QR-код. Если Ваше мобильное приложение не поддерживает QR-коды, введите следующий код:</h5>
            <h1>W7QWEGGERE4QKYRTS2D</h1>
            <button className="btn_copycode">Скопировать код</button>

            <p>Введите защитный код</p>
            <input className="inp_security_code"/>
    </div>

    <button className="btn_vkl" onClick={()=> {navigate(-1); enableTwoFactorAuth()}}>Включить</button>
        </div>

        </div>
    )
}
export default TwoFactorAuth