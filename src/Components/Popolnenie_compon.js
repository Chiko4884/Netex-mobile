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
import UserComponentCurr from "./UserComponentCurr";


function Popolnenie_compon(){
    const [clickedVariant, SetClickedVariant] = useState(<VariantCripto/>);


    return(
            <div className="korobka_popolnenie">
        <div className='pop_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/">Назад</Link>
            <h3>Пополнение</h3>
        </div>
        <UserComponentCurr/>
    

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
            onChange={()=>{SetClickedVariant(<VariantCripto/>) }}  defaultChecked />
            <label className="lbl" htmlFor="ar1">
            <div className="fon_svg"><Cripto_svg className='svg' width='10' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Криптовалюты</h3>
            <p>Криптовалюты</p>
            </div>
            </label>

        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar2" name="check-ar" 
            onChange={()=>{SetClickedVariant(<VariantFiat/>) }}  />
            <label className="lbl" htmlFor="ar2">
            <div className="fon_svg"><Fiat_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Фиат</h3>
            <p>Фиат</p>
            </div>
            </label>
        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar3" name="check-ar" 
            onChange={()=>{SetClickedVariant(<VariantTerminal/>) }}  />
            <label className="lbl" htmlFor="ar3">
            <div className="fon_svg"><Terminal_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Терминалы</h3>
            <p>Терминалы</p>
            </div>
            </label>
        </div>

        <div className="div_sposob">
            <input className="btns" type="radio" id="ar4" name="check-ar" 
            onChange={()=>{SetClickedVariant(<VariantNalichka/>) }}  />
            <label className="lbl" htmlFor="ar4">
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
        {clickedVariant} 

        </div>
    </div>

    )
}

export default Popolnenie_compon;