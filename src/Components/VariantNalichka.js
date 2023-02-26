import React from "react";
import './variantNalichka.scss';
import { nalichkaVar } from "../Datas/nalichkaVar";


function VariantNalichka(){
    return(
        <div className="div_variantt">
            {nalichkaVar.map((item) => (
            <div key={item.id} className='div_nalichka_var'>
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

export default VariantNalichka;