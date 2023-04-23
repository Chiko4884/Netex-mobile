import React, { useContext, useEffect, useState } from "react";
import './p2p.scss';
import UserComponent from "../UserComponent";
import HeaderComponent from "../../HeaderComponent";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CustomContext } from "../../../Context";

function P2P(){
    const navigate = useNavigate()
    // const [vnimanie, setVnimanie] = useState(true)
    const {vnimanie, setVnimanie} = useContext(CustomContext)

    const modalVnimanie = () =>{
        setVnimanie(!vnimanie)
    }

        const [isChecked, setIsChecked] = useState(false);
      
        const handleCheckBoxChange = () => {
          setIsChecked(!isChecked);
          localStorage.setItem('modalShown', 'agree');
        };

        useEffect(() => {
            const modalShown = localStorage.getItem('modalShown');
            if (modalShown) {
                setVnimanie(false);
            }
          }, [setVnimanie]);

    return(

        <div className="korobka_usluga">
<HeaderComponent title ='P2P'/>
<div className="_body">
        <UserComponent/>

        <div className="div_h1">
            <h1>P2P</h1>
        </div>

        <div className='div_sdelki' onClick={() => { navigate('/p2p/sdelki')}}>
            <img className='img_u' src='./img/sdelki.png' alt="sdelki"/>
                <div className='div_txt_'>
                <h3>Сделки</h3>
                <p>Сделки</p>
                </div>
        </div>

        <div className='div_sdelki' onClick={() => { navigate('/p2p/sozdat_sdelku')}}>
            <img className='img_u' src='./img/sozdat_sdelku.png' alt="sozdat"/>
                <div className='div_txt_'>
                <h3>Создать сделку</h3>
                <p>Создать сделку</p>
                </div>
        </div>

  </div>
  {vnimanie &&  <div onClick={modalVnimanie} className="back_blur">  </div>}
        {vnimanie && 
        <div className="div_vnimanie">
            <h1>Внимание!</h1>
            <h3>Держите свои данные в безопасности!</h3>
            <p>Чтобы не стать жертвой мошенников, никогда не переводите криптовалюту до фактического получения оплаты! Не верьте никому кто представляется службой поддержки и убеждает Вас завершить сделку до того, как вы получили платеж - это мошенники. Как только продавец подтверждает ордер и переводит активы покупателю, сделка считается завершенной и не может быть оспорена. Netex не несет никакой ответсвенности за сделки совершенные вне платформы.</p>

            <label >
                <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckBoxChange}
                style={{ display: 'none' }}
                />
                <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                style={isChecked ? {color: '#49D632'} : {color: '#dddfff'}}
                />
                <span className="cl_span">Я прочитал и согласен с указанной выше информацией </span>
            </label>
            <button className="podtv_vnimanie"
            onClick={modalVnimanie}
            disabled={!isChecked}
            >Подтвердить</button>
        </div>
        }

    </div>

    )
}

export default P2P;