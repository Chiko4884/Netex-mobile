import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './profileComponent.scss';
import UserComponent_img from "./UserComponent_img";
import { useContext } from "react";
import { CustomContext } from "../Context";
import HeaderComponent from "./HeaderComponent";
import {FaAngleRight, FaCheckCircle, FaCircle} from 'react-icons/fa'
import { useForm } from "react-hook-form";


function ProfileComponent(){
    const {user, SetUser} = useContext(CustomContext);
    const {register, handleSubmit,formState:{ errors, isValid }, getValues, watch, formState}=useForm({
        mode: 'onBlur'
    })
    const [profileSettings, setProfileSettings] = useState(false)
    const toggleSettingsProfile = () => {
        setProfileSettings(!profileSettings)
        }
    const [changePassword, setChangePassword] = useState(false)
    const toggleChangePassword = () => {
        setChangePassword(!changePassword)
        }

        const [toggleIconState0, SetToggleIconState0] = useState(false)
    const togglePass0  = () => {
            SetToggleIconState0(!toggleIconState0)
    }

        const [toggleIconState1, SetToggleIconState1] = useState(false)
    const togglePass1  = () => {
        SetToggleIconState1(!toggleIconState1)
    }
    
    const [toggleIconState2, SetToggleIconState2] = useState(false)
    const togglePass2  = () => {
        SetToggleIconState2(!toggleIconState2)
    }

    const [langWinState, setLangWinState] = useState(false)
    const toggleLang= () => {
        setLangWinState(!langWinState)
    }

    const navigate = useNavigate()
    const logOut = () => {
        SetUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/auth_page')
    }
    const [logoutWinState, setLogoutWinState] = useState(false)
    const toggleLogout= () => {
        setLogoutWinState(!logoutWinState)
    }
    return(
        
        <div className="korobka_profile">
            <HeaderComponent title = 'Профиль' logout = 'Выйти' className = 'profle_header'/>
        <div className="profile_body">
        <UserComponent_img/>
    
        <h1 className="info_razdely">Информационные разделы</h1>

                <Link className='info_item1' to = '/profile/about' >
                    <img className="info_logo" src="./img/o_servise.png"/>
                    <div className="info_content"> <h3>О сервисе</h3><p>О сервисе</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <Link className='info_item2' to = '/profile/faq'  >
                    <img className="info_logo" src="./img/faq.png"/>
                    <div className="info_content"> <h3>FAQ</h3><p>FAQ</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <Link className='info_item2' to = '/profile/kak_nachat'>
                    <img className="info_logo" src="./img/kak_nachat.png"/>
                    <div className="info_content"> <h3>Как начать?</h3><p>Как начать?</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <Link className='info_item3' to = '/profile/contacts'>
                    <img className="info_logo" src="./img/kontakty.png"/>
                    <div className="info_content"> <h3>Контакты</h3><p>Контакты</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
           


        <h1 className="info_razdely">Настройки профиля</h1>

                <div className='info_item1' onClick={toggleSettingsProfile}>
                    <img className="info_logo" src="./img/nastr_profile_1.png"/>
                    <div className="info_content"> <h3>Настройки профиля</h3><p>Настройки профиля</p></div>
                    <FaAngleRight className="arrow" />
                </div>
                <div className='info_item2' onClick={toggleChangePassword} >
                <img className="info_logo" src="./img/nastr_profile_2.png"/>
                    <div className="info_content"> <h3>Сменить пароль</h3><p>Сменить пароль</p></div>
                    <FaAngleRight className="arrow" />
                </div>
                <Link className='info_item2' to = '/profile/verification' >
                <img className="info_logo" src="./img/nastr_profile_3.png"/>
                    <div className="info_content"> <h3>Верификация аккаунта</h3><p>Верификация аккаунта</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <Link className='info_item2' to='/profile/security'>
                <img className="info_logo" src="./img/nastr_profile_4.png"/>
                    <div className="info_content"> <h3>Безопасность</h3><p>Безопасность</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <Link className='info_item2' to='/profile/history_account'>
                <img className="info_logo" src="./img/nastr_profile_5.png"/>
                    <div className="info_content"> <h3>История аккаунта</h3><p>История аккаунта</p></div>
                    <FaAngleRight className="arrow" />
                </Link>
                <div className='info_item2_1' >
                <img className="info_logo" src="./img/nastr_profile_6.png"/>
                    <div className="info_content"> <h3>Уведомления</h3><p>Уведомления</p></div>
                    <input className="inp_uvedom" type='checkbox' id="chb_uv" defaultChecked name="chb_uvedom"/>
                    <label className="lbl_uvedom" htmlFor="chb_uv">
                        <FaCircle className="switch_circle1"/>
                        <FaCircle className="switch_circle2"/>
                    </label>
                </div>
                <div className='info_item2' onClick={toggleLang}>
                <img className="info_logo" src="./img/nastr_profile_7.png"/>
                    <div className="info_content"> <h3>Язык</h3><p>Язык приложения</p></div>
                    <FaAngleRight className="arrow" />
                </div>
                <div className='info_item3' onClick={toggleLogout}>
                <img className="info_logo" src="./img/nastr_profile_8.png"/>
                    <div className="info_content"> <h3>Выйти из учётной записи</h3><p>Уведомления</p></div>
                    <FaAngleRight className="arrow" />
                </div>
        </div>

{/* profile settings */}
{profileSettings && 
 <div className="body_settings_profile"> 
             <div className='div_line'></div>
             <h3 className="settings_title">Настройки профиля</h3>
    <div className="div_inp_settings">
    <h3>Имя</h3>       
    <input 
    defaultValue={user.name}
    placeholder = 'Имя'
    className='inp_settings'
    />
    </div>

    <div className="div_inp_settings">
    <h3>Фамилия</h3>       
    <input 
    defaultValue={user.lastname}
    placeholder = 'Фамилия'
    className='inp_settings'
    />
    </div>

    <div className="div_inp_settings">
    <h3>Номер телефона</h3>       
    <input 
    defaultValue={user.phone}
    placeholder = '+996 XXX XX XX XX'
    className='inp_settings'
    id="inp_phone"
    />
    </div>

    <div className="div_inp_settings">
    <h3>Электронная почта</h3>       
    <input 
    defaultValue={user.email}
    placeholder = 'Электронная почта'
    className='inp_settings'
    id="inp_email"
    disabled={true}
    />
    </div>

    <button type="button" className="btn_save_settings" onClick={toggleSettingsProfile}>
        Сохранить</button>

   </div>
            }
{profileSettings &&  <div onClick={toggleSettingsProfile} className="back_blur">  </div>}

{/* change password */}
{changePassword && 
     <div className="body_change_password"> 
     <div className='div_line'></div>
     <h3 className="settings_title">Сменить пароль</h3>

<div className="div_password">
    <h3>Старый пароль</h3>
    <input {...register ('oldpassword', {
        required: 'Введите пароль (не менее 8 символов)!',
        minLength: {
            value: 8,
            message: 'Не менее 8 символов!'
        }
    } )}
    type= {toggleIconState0 ? 'text' : 'password' }
    className='inp_password' 
    placeholder="**************"/>
    {errors?.oldpassword && (
        <label className="err_message1" style={{color:'red'}}>{errors.oldpassword.message}</label>
    )} 
    
    <button type='button' onClick={togglePass0} className="toggle_icon_close0"/>
        {toggleIconState0 && 
            <button type='button' onClick={togglePass0} className="toggle_icon_open0"/> 
            
        }
</div>

<div className="div_password">
    <h3>Новый пароль</h3>
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
        <label className="err_message1" style={{color:'red'}}>{errors.password.message}</label>
    )} 
    
    <button type='button' onClick={togglePass1} className="toggle_icon_close1"/>
        {toggleIconState1 && 
            <button type='button' onClick={togglePass1} className="toggle_icon_open1"/> 
            
        }
</div>

    <div className="div_password">
    <h3>Введите повторно новый пароль</h3>
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
        <label className="err_message1" style={{color:'red'}}>{errors.password2.message}</label>
    )} 
        <button type='button' onClick={togglePass2} className="toggle_icon_close2"/>
        {toggleIconState2 && 
            <button type='button' onClick={togglePass2} className="toggle_icon_open2"/> 
        }
</div>
<button type="button" id="btn_change" className="btn_save_settings" onClick={toggleChangePassword}>
Сохранить</button>

</div>
}
{changePassword &&  <div onClick={toggleChangePassword} className="back_blur">  </div>}

{/* language */}
{langWinState && 
     <div className="body_language"> 
         <div className='div_line'></div>
         <h3 className="lang_title">Язык приложения</h3>
        <div className="div_lang">
            <h3>Русский</h3> 
<input className="inp_lang" type='radio' id="lang1" name="langs" defaultChecked />
<label className="lbl_lang" htmlFor="lang1"><FaCheckCircle className="check_circle"/></label>
        </div>
        <div className="div_lang">
            <h3>Кыргызский</h3> 
            <input className="inp_lang" type='radio' id="lang2" name="langs" />
<label className="lbl_lang" htmlFor="lang2"><FaCheckCircle className="check_circle"/></label>
        </div>
        <div className="div_lang">
            <h3>Китайский</h3> 
            <input className="inp_lang" type='radio' id="lang3" name="langs" />
<label className="lbl_lang" htmlFor="lang3"><FaCheckCircle className="check_circle"/></label>
        </div>

     </div>
}
{langWinState &&  <div className="div_blur_logout" onClick={toggleLang}> </div> }

{/* logout */}
{logoutWinState && 
        <div className="win_logout">
       
            <img className="img_" alt="img" src="./img/forgot_pass.png"/>
                    <h3 className="h3_exit">Выйти?</h3>
                    <p>Вы действиетельно хотите выйти из своей учётной записи?</p>

<div className="btns_logout">
        <button 
        onClick={logOut} 
        className="exit_btn" 
        type="button" >
            Выйти
        </button>

        <button 
        onClick={toggleLogout} 
        className="cancel_btn" 
        type="button" >
            Остаться
        </button>
</div>
                </div>
}
{logoutWinState &&  <div className="div_blur_logout" onClick={toggleLogout}> </div> }

    </div>

    )
}

export default ProfileComponent;