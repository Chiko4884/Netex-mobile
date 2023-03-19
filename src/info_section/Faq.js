import HeaderComponent from '../Components/HeaderComponent';
import './faq.scss'
import { ReactComponent as Cripto_svg } from "../svg/sposob_cripto2.svg";
import { ReactComponent as Fiat_svg } from "../svg/sposob_fiat2.svg";
import { ReactComponent as Terminal_svg } from "../svg/sposob_terminal2.svg";
import { useState } from 'react';
import FaqObshie from './FaqObshie';
import FaqFinance from './FaqFinance';
import FaqMarketplace from './FaqMarketplace';

function Faq(){
    const [clickedFaq, SetClickedFaq] = useState(<FaqObshie/>);

    return(
        <div className='korobka_faq'>
            <HeaderComponent title = 'FAQ'/>
        <div className='faq_body'>
            <div className='div_btns_faq'>

        <div className="div_faqs">
            <input className="btns" type="radio" id="ar1" name="check-ar" 
            onChange={()=>{SetClickedFaq(<FaqObshie/>) }}  defaultChecked />
            <label className="lbl" htmlFor="ar1">
            <div className="fon_svg"><Cripto_svg className='svg' width='10' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Общие</h3>
            <p>Общие</p>
            </div>
            </label>
        </div>

        <div className="div_faqs">
            <input className="btns" type="radio" id="ar2" name="check-ar" 
            onChange={()=>{SetClickedFaq(<FaqFinance/>) }}  />
            <label className="lbl" htmlFor="ar2">
            <div className="fon_svg"><Fiat_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Финансовые</h3>
            <p>Финансовые</p>
            </div>
            </label>
        </div>

        <div className="div_faqs2">
            <input className="btns" type="radio" id="ar3" name="check-ar" 
            onChange={()=>{SetClickedFaq(<FaqMarketplace/>) }}  />
            <label className="lbl2" htmlFor="ar3">
            <div className="fon_svg"><Terminal_svg className='svg' width='16' height='16'/></div>
            <div className='div_txt_func'>
            <h3>Маркетплейс</h3>
            <p>Маркетплейс</p>
            </div>
            </label>
        </div>

            </div>

            <div className="div_list_quest_answ">
        <div className="div_t">
            <h1>Список вопросов и ответов</h1>
        </div>

            {clickedFaq}

        </div>

        </div>

        </div>
    )
}

export default Faq;