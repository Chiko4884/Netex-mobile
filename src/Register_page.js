import React from 'react'
import Auth_page from './Auth_page';
import './register_page.scss'
import { Regis } from './Components/Regis'
import { Link } from 'react-router-dom';

function Register_page(){
    return (
    <div className="register_container">
        <div className='register_head'> </div>
        <div className='under_head'>
        <Link className='back_auth'
                to="/">Назад</Link>
            <h3>Регистрация</h3>
        </div>
        <img className='B_foto' src= './img/B-img.png'/>
        <Regis className='import_register'/>
    </div>
    )
}

export {Register_page};