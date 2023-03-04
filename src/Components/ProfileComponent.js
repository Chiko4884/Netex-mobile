import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './profileComponent.scss';
import UserComponent_img from "./UserComponent_img";
import { useContext } from "react";
import { CustomContext } from "../Context";


function ProfileComponent(){
const navigate = useNavigate()
const {user, SetUser} = useContext(CustomContext)
const logOut = () => {
    SetUser({
        email: ''
    })
    localStorage.removeItem('user')
    navigate('/auth_page')
}
    return(
        <div className="korobka_profile">
        <div className='vyvod_head'> </div>
        <div className='under_head_prof'>
        <Link className='back_main_prof'
                to="/">Назад</Link>
            <h3>Профиль</h3>
            <p className='logout' onClick={logOut}
                >Выйти</p>
        </div>
        <UserComponent_img/>
    
        <h1 className="info_razdely">Информационные разделы</h1>


           
                <div className='info_item1' >
                    <img className="info_logo" src="./img/o_servise.png"/>
                    <div className="info_content"> <h3>О сервисе</h3><p>О сервисе</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                    <img className="info_logo" src="./img/faq.png"/>
                    <div className="info_content"> <h3>FAQ</h3><p>FAQ</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                    <img className="info_logo" src="./img/kak_nachat.png"/>
                    <div className="info_content"> <h3>Как начать?</h3><p>Как начать?</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item3' >
                    <img className="info_logo" src="./img/kontakty.png"/>
                    <div className="info_content"> <h3>Контакты</h3><p>Контакты</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
           


        <h1 className="info_razdely">Настройки профиля</h1>

                <div className='info_item1' >
                    <img className="info_logo" src="./img/nastr_profile_1.png"/>
                    <div className="info_content"> <h3>Настройки профиля</h3><p>Настройки профиля</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_2.png"/>
                    <div className="info_content"> <h3>Сменить пароль</h3><p>Сменить пароль</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_3.png"/>
                    <div className="info_content"> <h3>Верификация аккаунта</h3><p>Верификация аккаунта</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_4.png"/>
                    <div className="info_content"> <h3>Безопасность</h3><p>Безопасность</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_5.png"/>
                    <div className="info_content"> <h3>История аккаунта</h3><p>История аккаунта</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_6.png"/>
                    <div className="info_content"> <h3>Уведомления</h3><p>Уведомления</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item2' >
                <img className="info_logo" src="./img/nastr_profile_7.png"/>
                    <div className="info_content"> <h3>Язык</h3><p>Язык приложения</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
                <div className='info_item3' >
                <img className="info_logo" src="./img/nastr_profile_8.png"/>
                    <div className="info_content"> <h3>Выйти из учётной записи</h3><p>Уведомления</p></div>
                    <img className="arrow" src="./img/arrow_right.png"/>
                </div>
        
    </div>

    )
}

export default ProfileComponent;