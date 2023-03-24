import React from "react";
import './variantFiat.scss';
import { fiatVar } from "../../Datas/fiatVar";
import { useState } from "react";
import {useForm} from 'react-hook-form'

function VariantFiat(){
const[sumZachisleniya, SetSumZachisleniya] = useState()

const [fiatPopolnenie, setFiatPopolnenie] = useState(false)
const toggleFiatPop= () => {
    setFiatPopolnenie(!fiatPopolnenie)
}
const [fiatPodtver, setFiatPodtver] = useState(false)
const toggleFiatPodtver= () => {
    setFiatPodtver(!fiatPodtver)
}

let [clickFiatIcon, SetClickFiatIcon] = useState()
let [clickFiatTitle, SetClickFiatTitle] = useState()
let [clickFiatDesc, SetClickFiatDesc] = useState()
let [clickFiatProcent, SetClickFiatProcent] = useState()
let [clickFiatValuta, SetClickFiatValuta] = useState()

let clickedFiat  = (e)=> {
    SetClickFiatIcon(clickFiatIcon = e.icon);
    SetClickFiatTitle(clickFiatTitle = e.title);
    SetClickFiatDesc(clickFiatDesc = e.desc);
    SetClickFiatProcent(clickFiatProcent = e.procent);
    SetClickFiatValuta(clickFiatValuta = e.valuta);
    console.log({clickFiatIcon},
        {clickFiatTitle},
        {clickFiatDesc},
        {clickFiatProcent}
        )  
        setFiatPopolnenie(!fiatPopolnenie)
 
}

const {register, handleSubmit,formState:{ errors, isValid }, formState}=useForm({
    mode: 'OnChange'
})
let [sumOplata, SetSumOplata] = useState()
// const funcOplata = (e) => {
//     SetSumOplata(Number(e + ((clickFiatProcent * e) / 100)))
// }


let [sumNashaKomissiya, SetSumNashaKomissiya] = useState()
// const funcNashaKomissiya = (e) => {
//     SetSumNashaKomissiya (Number((clickFiatProcent * e) / 100))
// }

const[primechanie, SetPrimechanie] = useState('Примечание')

const onSubmit_popol = (data) => {
    SetSumZachisleniya(Number(data.summa_pop_fiat)); 
    SetSumOplata(Number(data.summa_pop_fiat) + ((clickFiatProcent * Number(data.summa_pop_fiat)) / 100));
    SetSumNashaKomissiya ((clickFiatProcent * Number(data.summa_pop_fiat)) / 100);
                                    toggleFiatPodtver(); 
                                    toggleFiatPop();
                                };
const onSubmit_podtver = () => {
    toggleFiatPodtver();
    console.log({sumZachisleniya});
    console.log({sumOplata});
    console.log({sumNashaKomissiya});
    console.log({primechanie})
};

    return(

        <div className="div_variantt">
            {fiatVar.map((item) => (
            <div key={item.id} className='div_fiat_var' onClick={() => {clickedFiat(item)}}>
            <img className='logo_' src={item.icon}/>
                <div className='div_txt'>
                <h3>{item.title}</h3>
               <div> <p>{item.desc}</p> <p>{item.procent}%</p></div>
                </div>
        </div>
            ))}

{fiatPopolnenie && 
                <div className="container_fiat_popolnenie">
                <div className='div_line'></div>
                   
                        <h3 className="fiat_title"> Пополнить через "Оплата картой"</h3>
                    
                    <div className="div_fiat_var2">
                    <img className='logo_' src={clickFiatIcon}/>
                        <div className='div_txt'>
                        <h3>{clickFiatTitle}</h3>
                    <div> <p>{clickFiatDesc}</p> <p>{clickFiatProcent}%</p></div>
                    </div>
                    </div>

                    <div className="div_fiat_var2">
                    <img className='logo_' src="./img/procent.png"/>
                        <div className='div_txt'>
                        <h3>"Комиссия"</h3>
                    <div> <p>{clickFiatProcent}%</p> </div>
                    </div>
                    </div>

            <form onSubmit={handleSubmit(onSubmit_popol)} className='form_fiat_sum'>

                    <p className="txt_sum">Введите сумму {clickFiatValuta}</p>
                    <div className="div_inp">
                    <input {...register ('summa_pop_fiat',{
                             required: 'Введите пожалуйста сумму!',}
                     )}
                 type= 'number'
                 className='inp_sum' 
                  placeholder="Сумма"/>
    {errors?.summa_pop_fiat && (
        <label className="err_message" style={{color:'red'}}>{errors.summa_pop_fiat.message}</label>
    )}
                    <p className="valuta_txt">{clickFiatValuta}</p>
                    </div>
                    <button
                    className="submit_pop_fiat" 
                    onClick={handleSubmit(onSubmit_popol)}
                    type="submit"
                    disabled={!isValid}
                    >   
                     Пополнить баланс</button>
            </form>
                </div>
    }
       {fiatPopolnenie &&  <div onClick={toggleFiatPop} className="back_blur">  </div>}
       {fiatPodtver &&  <div onClick={toggleFiatPodtver} className="back_blur">  </div>}

       {fiatPodtver && 
                <div className="container_fiat_popolnenie">
                <div className='div_line'></div>
                        <h3 className="fiat_title"> Подтверждение платежа</h3>
                    <div className="div_fiat_var2">
                    <img className='logo_' src={clickFiatIcon}/>
                        <div className='div_txt'>
                        <h3>{clickFiatTitle}</h3>
                    <div> <p>{clickFiatDesc}</p> <p>{clickFiatProcent}%</p></div>
                    </div>
                    </div>

            <div className='form_fiat_sum'>
                    <div className="div_calculate">
<div className="calc_divs"> 
    <h5>Сумма к зачислению</h5> 
    <p >{sumZachisleniya}</p>
    <p className="val">{clickFiatValuta}</p>
</div>

<div className="calc_divs"> 
    <h5>Сумма к оплате</h5> 
    <p >{sumOplata}</p>
    <p className="val">{clickFiatValuta}</p>
</div>

<div className="calc_divs"> 
    <h5>Наша комиссия</h5> 
    <p >{sumNashaKomissiya}</p>
    <p className="val">{clickFiatValuta}</p>
</div>

<div className="calc_divs"> 
    <h5>Примечание</h5> 
    <p >{primechanie}</p>
</div>
                    </div>
                    <button
                    className="submit_pop_fiat" 
                    onClick={onSubmit_podtver}
                    type="button"
                    > 
                     Подтвердить</button>
            </div>
                </div>
    }


</div>

    )
}

export default VariantFiat;