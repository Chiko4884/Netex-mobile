import React from "react";
import './variantFiat.scss';
import { fiatVar } from "../Datas/fiatVar";


function VariantFiat(){
    return(
        <div className="div_variantt">
            {fiatVar.map((item) => (
            <div className='div_fiat_var'>
            <img className='logo_' src={item.icon}/>
                <div className='div_txt'>
                <h3>{item.title}</h3>
               <div> <p>{item.desc}</p> <p>{item.procent}</p></div>
                </div>
        </div>
            ))}
</div>
    )
}

export default VariantFiat;