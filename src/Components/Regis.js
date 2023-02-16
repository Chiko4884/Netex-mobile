import React, { useState } from "react";
import { useForm } from 'react-hook-form'; 
import './regis.scss'
import { useNavigate } from "react-router"

function Regis(){
const {register, handleSubmit,formState:{ errors, isValid }, formState}=useForm({
    mode: 'OnChange'
})
const navigate = useNavigate();
const onSubmit = data => {console.log(data); navigate('/confirm_regis')};

const [toggleIconState1, SetToggleIconState1] = useState(false)
const togglePass1  = () => {
    SetToggleIconState1(!toggleIconState1)
}

const [toggleIconState2, SetToggleIconState2] = useState(false)
const togglePass2  = () => {
    SetToggleIconState2(!toggleIconState2)
}

const [checked, setChecked] = useState(false);

const [checkPass, setCheckPass] = useState()
// function SimPass(){
//     if(password === password2){
//         setCheckPass = true;
//     }
// }

return(
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
        minLength: {
            value: 8,
            message: 'Не менее 8 символов!'
        }
        // pattern: {
        //     value: {password},
        //     message: 'Пароли не совпадают'
        // }
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
            <label  className="agree_lbl" for="chek_id">
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
)

}
    
export {Regis};
