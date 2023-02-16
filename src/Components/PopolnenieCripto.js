import React from "react";
import './popolnenieCripto.scss';
import { useForm } from 'react-hook-form';

import  clickCriptoTitle from './VariantCripto';
import  clickCriptoText from './VariantCripto';


function PopolnenieCripto(){
    const { handleSubmit}=useForm()
    const onSubmit = data => {console.log(data)};
    return (
        <>
            <div className="back_blur">  </div>

            <div className="container_popolnenie">
            <div className='bold_line'></div>
                <div className='div_z'>
                    <h3> {clickCriptoText} депозитный адрес</h3>
                </div> 
                <div className="block_predup">
                    <img src="./img/znak_predup.png"/>
                    <div className="txt_predup"><p>Если отправить криптовалюту на неверный адрес (например, биткойн на адрес Bitcoin Cash), криптовалюта будет потеряна</p></div>
                </div>

        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="block_txt_vyvod">
                <h6>Минимальная сумма на вывод:</h6>
                <p>0.000000</p> <p>{clickCriptoTitle}</p>
                </div>
                <div className="block_graph_kod">
                    <img src="./img/kod.png" />
                </div>
                <div className="block_address">
                <h6>{clickCriptoText} Адрес</h6>
                <p className="btc_address">
                    bc1qunpcyf5c8z4kuxtegkngjak5hkz885j7k0wc6e</p>
                </div>
                <button
                className="submit_copy" 
                onClick={handleSubmit(onSubmit)}
                type="submit"> 
                <img src="./img/copy_sign.png"/> Скопировать адрес</button>
        </form>
            </div>

        </>
    )
}
 export {PopolnenieCripto};