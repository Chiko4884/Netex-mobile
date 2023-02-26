import React from "react";
import { Link } from 'react-router-dom';
import './userComponentCurr.scss';

function UserComponentCurr(){

    return(
        <div className='user_block'>
        <div className='div_name_balance'>
            <div className='div_name'>
                <h3>Artem Konkin</h3>
                <p>temakonkin@gmail.com</p>
            </div>
            <div className='separator'></div>
            <div className='div_balance'>
                <div className='bal'>
                <h3>Ваш баланс</h3>
                <p>0.000000</p>
                </div>
                <img className='logo_tether' src='./img/tetherIcon1.png'/>
            </div>
        </div>

        <div className='div_vyvod_popolnit_kurs'>

            <div className='btn_vyvod'>
            <img className='logo_vyvod_popolnit' src='./img/vyvod1.png'/>
                <div className='div_txt'>
                <h3>Вывод</h3>
                <p>Вывод на карту</p>
                </div>
            </div>
           
    <Link to='/popolnenie' className='btn_popolnenie'>  
            <img className='logo_vyvod_popolnit' src='./img/popolnit1.png'/>
                <div className='div_txt'>
                <h3>Пополнить</h3>
                <p>Пополнить баланс</p>
                </div>
    </Link>

    <Link to='/currency_rates' className ='link_cur_rates'>
           <img className='logo_vyvod_popolnit' src='./img/logo_kurs_valut.png'/>
                   <div className='div_txt'>
                   <h3>Курсы валют</h3>
                   <p>Фиат</p>
                   </div>
    </Link>
        </div>

    </div>
    )
}

export default UserComponentCurr;