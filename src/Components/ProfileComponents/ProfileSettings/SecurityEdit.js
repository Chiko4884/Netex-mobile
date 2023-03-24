import React from "react";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent";
import './securityEdit.scss'


function SecurityEdit(){
const navigate = useNavigate()

    return(
        <div className="korobka_security_edit">
        <HeaderComponent title='Безопасность'/>
 <div className="body_security_edit">
    <h3>Настройки профиля</h3>

    <div className="div_security_settings">
        <div className="div_item_settings">
        <p>Авторизация</p> 
        <input className="inp_security" type='checkbox' id="chb_sec" defaultChecked name="chb_sec"/>
                    <label className="lbl_security" htmlFor="chb_sec">
                        <FaCircle className="switch_circle1"/>
                        <FaCircle className="switch_circle2"/>
                    </label>
        </div>
        <div className="div_item_settings1">
        <p>Вывод стредств</p> 
        <input className="inp_security" type='checkbox' id="chb_sec1" defaultChecked name="chb_sec"/>
                    <label className="lbl_security" htmlFor="chb_sec1">
                        <FaCircle className="switch_circle1"/>
                        <FaCircle className="switch_circle2"/>
                    </label>
        </div>

        <div className="div_item_settings">
        <p>Внутренний перевод</p> 
        <input className="inp_security" type='checkbox' id="chb_sec2" name="chb_sec"/>
                    <label className="lbl_security" htmlFor="chb_sec2">
                        <FaCircle className="switch_circle1"/>
                        <FaCircle className="switch_circle2"/>
                    </label>
        </div>

    </div>



</div>

        </div>
    )
}
export default SecurityEdit