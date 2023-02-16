import React from 'react'
import { Link } from 'react-router-dom';
import './footerTab.scss'
import { useNavigate } from "react-router"


function FooterTab(){

    return(
        
    <div className='div_footer'>
    <div className="div_footer_btns">
        <input className="btns_foot" type="radio" id="foot1" name="check-foot"  defaultChecked/> 
        <label className="lbl-foot" for="foot1"><img src='./img/domik_logo.png'/><p>Главная</p></label>
        
        <input className="btns_foot" type="radio" id="foot2" name="check-foot" />
        <label className="lbl-foot" for="foot2"><img src='./img/vyvod_logo.png'/><p>Вывод</p></label>

        <input className="btns_foot" type="radio" id="foot3" name="check-foot" />
        <label className="lbl-foot" for="foot3"><img src='./img/torgolya_logo.png'/><p>Торговля</p></label>

        <input className="btns_foot" type="radio" id="foot4" name="check-foot" />
        <label className="lbl-foot" for="foot4"><img src='./img/history_logo.png'/><p>История</p></label>

        <input className="btns_foot" type="radio" id="foot5" name="check-foot" />
        <label className="lbl-foot" for="foot5"><img src='./img/profile_logo.png'/><p>Профиль</p></label>

    </div>
</div>
    )
}

export default FooterTab;