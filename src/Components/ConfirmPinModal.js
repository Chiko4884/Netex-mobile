import React, { useState, useRef } from "react";
import { useForm, NavLink } from 'react-hook-form'; 
import { Link } from 'react-router-dom';
import './confirmPinModal.scss'
import { useNavigate } from "react-router"
import PinCodeInput from './PinCodeInput';

const initDigits = ['', '', '', ''];

function ConfirmPinModal(){
    const [digits, setDigits] = useState(initDigits);
    const firstInputRef = useRef();
    const navigate = useNavigate();

    const { handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
})
    const onSubmit = data => {console.log(digits); navigate("/auth_page")};

    return(
        <div className="div_modal_conf" >
                <div className="img_blur" >  </div>
                <div className="div_blur" >  </div>
        <div className="form_pin">
            <img className="img_" alt="forgot" src="./img/forgot_pass.png"/>
                 <h3>Подтверждение</h3>
                 <p>Вам на почту пришел код подтверждения, введите его в поле ниже.</p>

<div className="div_pin">

        <div>
            <PinCodeInput
            digits={digits} 
            changeHandler={setDigits} 
            ref={firstInputRef}
            />
            {/* <button onClick={event => clear(event)}>Очистить</button> */}
        </div>

</div>

        <button 
        onClick={handleSubmit(onSubmit)}
        className="submit_btn_pin" 
        type="submit" 
        
        >
            <p>ОТПРАВИТЬ</p>
        </button>
     </div>
        </div>
    )
}

export {ConfirmPinModal};