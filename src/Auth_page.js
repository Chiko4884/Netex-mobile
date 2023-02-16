import React, { useState } from 'react'
import './auth_page.scss'
import { useForm, NavLink } from 'react-hook-form'; 
import { Link } from 'react-router-dom';
import { ForgotPassModal } from "./Components/ForgotPassModal";
import { useNavigate } from "react-router"


function Auth_page(){
    const { register, handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
})
const navigate = useNavigate();

    const onSubmit = data => {console.log(data); navigate('/main_page')};

    const [toggleIconState, SetToggleIconState] = useState(false)
    const togglePass  = () => {
        SetToggleIconState(!toggleIconState)
    }

    return (
    <div className="auth_container">
        <div className='auth_head'> </div>
        <div className='under_head'><h3>Авторизация</h3></div>
        <img className='auth_foto' src= './img/B-img.png'/>
        {/* <Login className='import_login'/> */}
        <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
        <div className="h1_">
        <h1>Войти в аккаунт</h1>
        <p>Введите свои данные для авторизации</p>
        </div>


        <div className="div_email">
        <h3>EMAIL</h3>       
        <input {...register ('email', {
            required: 'Поле обязательное к заполнению!',
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Введите корректный Email'
            }
        } )}
        placeholder = 'temakonkin@gmail.com'
        className='inp_email'
        />
            {errors?.email && (
            <label className="err_message" style={{color:'red'}}>{errors.email.message}</label>
        )} 


        </div>

        <div className="div_pass">
        <h3>Пароль</h3>
        <input {...register ('password', {
            required: 'Введите пароль (не менее 8 символов)!',
            minLength: {
                value: 8,
                message: 'Не менее 8 символов!'
            }
        } )}
        type= {toggleIconState ? 'text' : 'password' }
        className='inp_password' 
        placeholder="**************"/>
        {errors?.password && (
            <label className="err_message" style={{color:'red'}}>{errors.password.message}</label>
        )} 
        
        <button type='button' onClick={togglePass} className="toggle_icon_close"/>
            {toggleIconState && 
                <button type='button' onClick={togglePass} className="toggle_icon_open"/> 
                
            }
        </div>


        <button 
        onClick={handleSubmit(onSubmit)}
        className="submit_btn" 
        type="submit" 
        disabled={!isValid}>
            <p>ВОЙТИ В АККАУНТ</p>
        </button>

        <div className='link_forgot'> 
        <ForgotPassModal/>
        </div>
        <div className="div_no_acc_reg">
        <p className="no_account">Еще нет аккаунта?</p>
        <Link className='link-reg'
                to="./reg_page"><p className="register">зарегистрироваться</p></Link>
        </div>

    </form>
    </div>
    )
}

export default Auth_page;