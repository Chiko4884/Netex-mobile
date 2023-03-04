import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CustomContext } from "../Context";
import './userComponentCurr.scss';
import './userComponent_img.scss';

function UserComponent_img(){
    const {user, SetUser} = useContext(CustomContext)
    return(
        <div className='user_block'>
        <div className='div_name_balance'>
        <img className="avatar" src="./img/artem.png" alt="foto"/>
            <div className='div_name'>
            <h3>{user.name} {user.lastname}</h3>
                <p>{user.email}</p>
            </div>
            <div className='separator'></div>
            <div className='div_balance1'>
                <div className='bal1'>
                <h3>Ваш баланс</h3>
                <p>0.000000</p>
                </div>
                <img className='logo_tether' src='./img/tetherIcon1.png'/>
            </div>
        </div>

        <div className='div_vyvod_popolnit'>

            <Link to='/vyvod' className='btn_vyvod'>
            <img className='logo_vyvod_popolnit' src='./img/vyvod1.png'/>
                <div className='div_txt'>
                <h3>Вывод</h3>
                <p>Вывод на карту</p>
                </div>
            </Link>
           
    <Link to='/popolnenie' className='btn_popolnenie'>  
            <img className='logo_vyvod_popolnit' src='./img/popolnit1.png'/>
                <div className='div_txt'>
                <h3>Пополнить</h3>
                <p>Пополнить баланс</p>
                </div>
    </Link>
        </div>

        <h1 className="limit_title">Лимиты за текущий день</h1>

        <div className="div_lim">
            <div className="limit"> <h3>Пополнение</h3><p>0.000000</p></div>
            <div className="limit"> <h3>Продажа</h3><p>0.000000</p></div>
            <div className="limit"> <h3>Покупка</h3><p>0.000000</p></div>
        </div>

        <div className="div_verification">
            <img src="./img/verific_ok.png"/>
            <div className="verif_txt">
                <h1>Верификация аккаунта</h1>
                <h3>Верифицирован</h3>
            </div>
        </div>

    </div>
    )
}

export default UserComponent_img;