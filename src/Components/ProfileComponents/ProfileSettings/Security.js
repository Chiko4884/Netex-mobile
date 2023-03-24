import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent";
import './security.scss'
import { stateTwoFactorAuth } from "./TwoFactorAuth";
import { enableTwoFactorAuth } from "./TwoFactorAuth";
import { disableTwoFactorAuth } from "./TwoFactorAuth";

function Security(){
const navigate = useNavigate()

    return(
        <div className="korobka_security">
        <HeaderComponent title='Безопасность'/>
 <div className="body_security">
    <div className="div_google_auth">
        <img src="./img/google_auth.png"/>
        <h1>Google Authenticator</h1>
    </div>
 <p>Используется для ввода кода подтверждения Google при снятии и изменении настроек безопасности</p>

 {!stateTwoFactorAuth && 
 <button 
 onClick={()=> navigate('/profile/security/two_factor')} 
 className="btn_vkl">Включить
 </button>}

 {stateTwoFactorAuth && 
<>
<button 
  onClick={()=> navigate('/profile/security/edit')} 
  className="btn_edit">Редактировать
  </button>

 <button 
 onClick={()=> {navigate(-1); disableTwoFactorAuth()}} 
 className="btn_otkl">Отключить
 </button>
</>
 }
        </div>

        </div>
    )
}
export default Security