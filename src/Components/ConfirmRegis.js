import React from "react";
import { Register_page } from "../Register_page";
import { Link } from 'react-router-dom';
import { useForm, NavLink } from 'react-hook-form'; 
import { useState, useRef } from "react";
import './confirmRegis.scss'
import PinCodeInput from './PinCodeInput';
import { useNavigate } from "react-router"

const initDigits = ['', '', '', ''];

function ConfirmRegis(){
    const [digits, setDigits] = useState(initDigits);
    const firstInputRef = useRef();
    const navigate = useNavigate();
    const { handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
})
const onSubmit = data => {console.log(digits); navigate("/")};
    return(
        <div className="register_container">
        <div className='register_head'> </div>
        <div className='under_head'>
        <Link className='back_auth'
                to="/">Назад</Link>
            <h3>Регистрация</h3>
        </div>
        <img className='B_foto' src= './img/B-img.png'/>



    <div className="div_confirm">

 <form className="form_confirm">
             <h3>Подтверждение</h3>
             <p>Вам на почту пришел код подтверждения, введите его в поле ниже.</p>

<div className="div_pin">

            <PinCodeInput
            digits={digits} 
            changeHandler={setDigits} 
            ref={firstInputRef}
            />
            {/* <button onClick={event => clear(event)}>Очистить</button> */}
        
</div>

    <button 
    onClick={handleSubmit(onSubmit)}
    className="submit_btn_pin" 
    type="submit" 
    >
        <p>ОТПРАВИТЬ</p>
    </button>
            </form>
    </div>





    </div>
    )
}

export default ConfirmRegis;