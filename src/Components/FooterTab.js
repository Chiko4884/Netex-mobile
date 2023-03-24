import React from 'react'
import { NavLink } from 'react-router-dom';
import './footerTab.scss'


function FooterTab(){

    return(
        
    <div className='div_footer'>
    <div className="div_footer_btns">
        <NavLink className="link_foot" 
         to='/'> <img src='./img/domik_logo.png'/><p>Главная</p></NavLink>
        
        <NavLink className="link_foot" 
         to='vyvod'> <img src='./img/vyvod_logo.png'/><p>Вывод</p></NavLink>

        <NavLink className="link_foot" 
         to='popolnenie'> <img src='./img/torgolya_logo.png'/><p>Торговля</p></NavLink>

        <NavLink className="link_foot" 
         to='history'> <img src='./img/history_logo.png'/><p>История</p></NavLink>

        <NavLink className="link_foot" 
         to='profile'> <img src='./img/profile_logo.png'/><p>Профиль</p></NavLink>

    </div>
</div>
    )
}

export default FooterTab;