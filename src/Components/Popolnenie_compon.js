import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './popolnenie_compon.scss';
import { ReactComponent as Cripto_svg } from "../svg/sposob_cripto2.svg";
import { ReactComponent as Fiat_svg } from "../svg/sposob_fiat2.svg";
import { ReactComponent as Terminal_svg } from "../svg/sposob_terminal2.svg";
import { ReactComponent as Nalichka_svg } from "../svg/sposob_nalichka2.svg";

import VariantCripto from "./VariantCripto";
import VariantFiat from "./VariantFiat";
import VariantTerminal from "./VariantTerminal";
import VariantNalichka from "./VariantNalichka";

import  clickCriptoTitle from './VariantCripto';
import  clickCriptoText from './VariantCripto';


function Popolnenie_compon(){
    const [checkedVariant, SetCheckedVariant] = useState(VariantCripto);


    return(
            <div className="korobka_popolnenie">
        <div className='pop_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/main_page">Назад</Link>
            <h3>Пополнение</h3>
        </div>
        <div className='user_div'>
            <div className='div_name_balance'>
                <div className='div_name'>
                    <h3>Artem Konkin</h3>
                    <p>temakonkin@gmail.com</p>
                </div>
                <div className='separator'></div>
                <div className='div_balance'>
                    <div className='bal'>
                    <h3>Ваш баланс</h3>
                    <p>0.000000</p>
                    </div>
                    <img className='logo_tether' src='./img/tetherIcon1.png'/>
                </div>
            </div>

            <div className='div_vyvod_popolnit'>

                <div className='div_vyvod1'>
                <img className='logo_vyvod_popolnit' src='./img/vyvod1.png'/>
                    <div className='div_txt'>
                    <h3>Вывод</h3>
                    <p>Вывод на карту</p>
                    </div>
                </div>
               
                <div className='div_vyvod1' > 
                <img className='logo_vyvod_popolnit' src='./img/popolnit1.png'/>
                    <div className='div_txt'>
                    <h3>Пополнить</h3>
                    <p>Пополнить баланс</p>
                    </div>
                    
                </div>
            </div>
            <Link to='/currency_rates' className ='link_cur_rates'>
            <div className="div_kurs">
            <img className='logo_vyvod_popolnit' src='./img/logo_kurs_valut.png'/>
                    <div className='div_txt'>
                    <h3>Курсы валют</h3>
                    <p>Фиат</p>
                    </div>
            </div>
            </Link>
        </div>

        <div className="div_text_info">
            <h3>Пополнить баланс</h3>
            <h6>При пополнении баланса любым из способов, Ваша сумма платежа будет конвертирована в USDT по курсу нашего сайта валюты пополнения. Ваш баланс отображается в USDT (Tether).</h6>
        </div>

        <div className="div_sposob_pop">
        <div className="div_h1">
            <h1>Выберите способ пополнения</h1>
        </div>

        <div className="div_sposoby">

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar1" name="check-ar" 
            onChange={()=>{SetCheckedVariant(VariantCripto) }}  defaultChecked />
            <label className="lbl" for="ar1">
            <div className="fon_svg"><Cripto_svg className='svg' width='10' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Криптовалюты</h3>
            <p>Криптовалюты</p>
            </div>
            </label>
        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar2" name="check-ar" 
            onChange={()=>{SetCheckedVariant(VariantFiat) }}  />
            <label className="lbl" for="ar2">
            <div className="fon_svg"><Fiat_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Фиат</h3>
            <p>Фиат</p>
            </div>
            </label>
        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar3" name="check-ar" 
            onChange={()=>{SetCheckedVariant(VariantTerminal) }}  />
            <label className="lbl" for="ar3">
            <div className="fon_svg"><Terminal_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Терминалы</h3>
            <p>Терминалы</p>
            </div>
            </label>
        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar4" name="check-ar" 
            onChange={()=>{SetCheckedVariant(VariantNalichka) }}  />
            <label className="lbl" for="ar4">
            <div className="fon_svg"><Nalichka_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Наличные</h3>
            <p>Наличные</p>
            </div>
            </label>
        </div>
        </div>
        </div>

        <div className="div_dostupn_varianty">
        <div className="div_h1">
            <h1>Доступные варианты</h1>
        </div>
            {/* способы пополнения */}
        {checkedVariant} 

        </div>
    </div>

    )
}

export default Popolnenie_compon;