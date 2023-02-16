import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import './variantCripto.scss';
import { criptoVar } from "../Datas/criptoVar";
import {PopolnenieCripto} from './PopolnenieCripto';
import { useState } from "react";


export let clickCriptoTitle;
export let clickCriptoText;
export const clickedCripto  = (e)=> {
    clickCriptoTitle = e.title;
    clickCriptoText = e.text;
    
    console.log({clickCriptoTitle},
                {clickCriptoText}
                )
}

function VariantCripto(){
    // const [checkedCripto, SetCheckedCripto] = useState();
    return(
        <div className="div_variantt">
{criptoVar.map((item) => (
    <div className='div_crip1' onClick={()=>{clickedCripto(item) }}>
            <img className="img1" src={item.image} alt='var'/>
            <div className='div_txt_crip'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
    </div>
    ))}
</div>
    )
}

export default VariantCripto;