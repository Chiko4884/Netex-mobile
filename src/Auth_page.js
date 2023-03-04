import React, { useContext, useState } from 'react'
import './auth_page.scss'
import { useForm, NavLink } from 'react-hook-form'; 
import { Link } from 'react-router-dom';
import { ForgotPassModal } from "./Components/ForgotPassModal";
import { useNavigate } from "react-router"
import { CustomContext } from './Context';
import axios, { Axios } from 'axios';

function Auth_page(){
    const { register, handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
})
const navigate = useNavigate();
const {user, SetUser} = useContext(CustomContext)
const loginUser = (e) => {
    let aUser ={
        email: e.email,
        password: e.password
    }
     axios.post("http://localhost:3030/login", aUser)
    .then(({data}) => 
    {
        SetUser( {
            token: data.accessToken,
            ...data.user
        })
        localStorage.setItem('user', JSON.stringify({
            token: data.accessToken,
            ...data.user
        }))
        navigate('/')
    }
    )
    .catch((err) => console.log(err.message))
}
    const onSubmit = data => {console.log(data); {loginUser(data)}};

    const [toggleIconState, SetToggleIconState] = useState(false)
    const togglePass  = () => {
        SetToggleIconState(!toggleIconState)
    }
    // console.log(window.innerWidth);
    return (

    <div className="auth_container">
        <div className='auth_head'> </div>
        <div className='under_head'><h3>Авторизация</h3></div>
        <img className='auth_foto' src= './img/B-img.png'/>
        {/* <Login className='import_login'/> */}

        <div className='div_login_form'>
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


        <div className="div_no_acc_reg">
        <h5 className="no_account">Еще нет аккаунта?</h5>
        <Link className='link-reg'
                to="/reg_page"><h6 className="register">зарегистрироваться</h6></Link>
        </div>

    </form>
        <div className='link_forgot'>
        <ForgotPassModal/>
        </div>
        </div>
    </div>
    )
}

export default Auth_page;