import React, { useState, useContext } from 'react'
import './register_page.scss'
import { useForm, useWatch } from 'react-hook-form'; 
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import  {Context, CustomContext}  from './Context';
import HeaderComponent from './Components/HeaderComponent';

function Register_page(){
    const [email, SetEmail] = useState('')
    const navigate = useNavigate();
    const {user, SetUser} = useContext(CustomContext)

    const registerUser = (e) => {
        // e.preventDefault()
        let newUser ={
            name: e.name,
            lastname: e.lastname,
            email: e.email,
            password: e.password,
        }
         axios.post("http://localhost:3030/register", newUser)
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

        }
        )
        .catch((err) => console.log(err.message))
    }
    // console.log(user)
    const {register, handleSubmit,formState:{ errors, isValid }, getValues, watch, formState}=useForm({
        mode: 'onBlur'
    })

    const onSubmit = data => { registerUser(data); navigate('/confirm_regis')}; //
    
    const [toggleIconState1, SetToggleIconState1] = useState(false)
    const togglePass1  = () => {
        SetToggleIconState1(!toggleIconState1)
    }
    
    const [toggleIconState2, SetToggleIconState2] = useState(false)
    const togglePass2  = () => {
        SetToggleIconState2(!toggleIconState2)
    }
    
    const [checked, setChecked] = useState(false);
    

    return (
    <div className="register_container">
<HeaderComponent title = 'Регистрация'/>
        <img className='B_foto' src= './img/B-img.png'/>
        {/* <Regis className='import_register'/> */}
<form onSubmit={handleSubmit(onSubmit)} className='regis_form'>
    <div className="h1_">
    <h1>Регистрация</h1>
    <p>Введите свои данные для регистрации</p>
    </div>

    <div className="div_name">
    <h3>Имя</h3>       
    <input {...register ('name', {
        required: 'Поле обязательное к заполнению!',
    } )}
    placeholder = 'Артем'
    className='inp_name'
    />
        {errors?.name && (
        <label className="err_message" style={{color:'red'}}>{errors.name.message}</label>
    )} 
    </div>

    <div className="div_lastname">
    <h3>Фамилия</h3>       
    <input {...register ('lastname', {
        required: 'Поле обязательное к заполнению!',
    } )}
    placeholder = 'Конкин'
    className='inp_lastname'
    />
        {errors?.lastname && (
        <label className="err_message" style={{color:'red'}}>{errors.lastname.message}</label>
    )} 
    </div>

    <div className="div_mail">
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

    <div className="div_pas">
    <h3>Пароль</h3>
    <input {...register ('password', {
        required: 'Введите пароль (не менее 8 символов)!',
        minLength: {
            value: 8,
            message: 'Не менее 8 символов!'
        }
    } )}
    type= {toggleIconState1 ? 'text' : 'password' }
    className='inp_password' 
    placeholder="**************"/>
    {errors?.password && (
        <label className="err_message" style={{color:'red'}}>{errors.password.message}</label>
    )} 
    
    <button type='button' onClick={togglePass1} className="toggle_icon_close1"/>
        {toggleIconState1 && 
            <button type='button' onClick={togglePass1} className="toggle_icon_open1"/> 
            
        }
    </div>

    <div className="div_pas2">
    <h3>Повторите пароль</h3>
    <input {...register ('password2', {
        required: 'Повторите пароль!',
        validate: (value) => {
            return watch('password') === value  || "Пароли не совпадают";
          }
    } )}
    type= {toggleIconState2 ? 'text' : 'password' }
    className='inp_password' 
    placeholder="**************"/>
    {errors?.password2 && (
        <label className="err_message" style={{color:'red'}}>{errors.password2.message}</label>
    )} 
    
    <button type='button' onClick={togglePass2} className="toggle_icon_close2"/>
        {toggleIconState2 && 
            <button type='button' onClick={togglePass2} className="toggle_icon_open2"/> 
        }
    </div>

    <div className="div_agree">
    <input onChange={() => setChecked(!checked)} className="chb_agree" defaultChecked type="checkbox" id="chek_id" name="user_agree"/>
            <label  className="agree_lbl" htmlFor="chek_id">
             Нажимая на кнопку “Регистрация” я принимаю условия
             <a href="" className="ssylka_agree" > Пользовательского соглашения</a>
            </label>
</div>

    <button 
    onClick={handleSubmit(onSubmit)}
    className="submit_btn" 
    type="submit" 
    disabled = {checked || !isValid}>
        <p>ЗАРЕГИСТРИРОВАТЬСЯ</p>
    </button>

</form>

    </div>
    )
}

export {Register_page};