import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import './variantCripto.scss';
import { criptoVar } from "../Datas/criptoVar";
import { useState } from "react";
import {useForm} from 'react-hook-form'




function VariantCripto(){
const[criptoAddress, SetCriptoAddress] = useState('bc1qunpcyf5c8z4kuxtegkngjak5hkz885j7k0wc6e')
const [criptoPopolnenie, setCriptoPopolnenie] = useState(false)
const toggleCriptoPop= () => {
setCriptoPopolnenie(!criptoPopolnenie)
}

let [clickCriptoTitle, SetClickCriptoTitle] = useState()
let [clickCriptoText, SetClickCriptoText] = useState()

let clickedCripto  = (e)=> {
    SetClickCriptoTitle(clickCriptoTitle = e.title);
    SetClickCriptoText(clickCriptoText = e.text);
    console.log({clickCriptoTitle},
        {clickCriptoText}
        )  
        setCriptoPopolnenie(!criptoPopolnenie)   
}


const { register, handleSubmit, formState: { isValid }}=useForm({
    mode: 'onBlur'
})
const onSubmit = () => {console.log({criptoAddress})};
    return(

        <div className="div_variantt">
{criptoVar.map((item) => (
    <div key={item.id} className='div_crip1' onClick= {() => {clickedCripto(item)}} >
            <img className="img1" src={item.image} alt='var'/>
            <div className='div_txt_crip'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>

    </div>
    ))}

    {criptoPopolnenie && 
                <div className="container_popolnenie">
                <div className='div_line'></div>
                   
                        <h3 className="crip_title"> {clickCriptoText} депозитный адрес</h3>
                    
                    <div className="block_predup">
                        <img src="./img/znak_predup.png"/>
                        <p>Если отправить криптовалюту на неверный адрес (например, биткойн на адрес Bitcoin Cash), криптовалюта будет потеряна</p>
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
                    <p className="cripto_address" {...register ('address_' )}>
                        {criptoAddress}</p>
                    </div>
                    <button
                    className="submit_copy" 
                    onClick={handleSubmit(onSubmit)}
                    type="submit"> 
                    <img src="./img/copy_sign.png"/> Скопировать адрес</button>
            </form>
                </div>
    }
       {criptoPopolnenie &&  <div onClick={toggleCriptoPop} className="back_blur">  </div>}
</div>



    )
}

export default VariantCripto;