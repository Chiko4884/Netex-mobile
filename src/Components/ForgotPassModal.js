import React, { useState, useEffect } from "react";
import { useForm, NavLink  } from 'react-hook-form'; 
import { Link } from 'react-router-dom';
import './forgotPassModal.scss'
import { useNavigate } from "react-router"

function ForgotPassModal(){
    const [forgotState, setForgotState] = useState(false)
    const toggleForgot= () => {
        setForgotState(!forgotState)
    }

    const { register, handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
        
})
const navigate = useNavigate();
    const onSubmit = data => {console.log(data); navigate("/enter_pin")};

    return(

        <div className="div_modal">
        <p onClick={toggleForgot} 
        className='open_forgot'>Забыл(а) пароль?</p>
     
{forgotState && 
     <form className="form_forgot_pass">
       
            <img className="img_" alt="forgot" src="./img/forgot_pass.png"/>
                    <h3>Пароль</h3>
                    <p>Мы отправим Вам на почту ссылку на изменение пароля</p>
        <div className="div_email_forgot">    
        <input {...register ('email_for_pin', {
            required: 'Поле обязательное к заполнению!',
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Введите корректный Email'
            }
        })}
        placeholder = 'temakonkin@gmail.com'
        className='inp_email_for_pin'
        />
            {errors?.email_for_pin && (
            <label className="err_message" style={{color:'red'}}>{errors.email_for_pin.message}</label>
        )} 
        </div>

        <button 
        onClick={handleSubmit(onSubmit)} 
        className="submit_btn_forgot" 
        type="submit" 
        id="btnSubmit"
        disabled={!isValid}>
            <p>ОТПРАВИТЬ</p>
        </button>
                </form>
}
{forgotState &&  <div className="div_blur_forgot" onClick={toggleForgot}> </div> }
        </div>
    )
}

export {ForgotPassModal};