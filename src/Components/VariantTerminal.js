import React from "react";
import './variantTerminal.scss';
import { terminalVar } from "../Datas/terminalVar";


function VariantTerminal(){
    return(
        <div className="div_variantt">
            {terminalVar.map((item) => (
            <div className='div_terminal_var'>
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

export default VariantTerminal;