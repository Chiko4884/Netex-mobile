import React from "react";
import './variantTerminal.scss';
import { terminalVar } from "../Datas/terminalVar";
import { useState } from "react";

function VariantTerminal(){
    const [terminalPopolnenie, setTerminalPopolnenie] = useState(false)
    const toggleTerminalPop= () => {
        setTerminalPopolnenie(!terminalPopolnenie)
    }
    return(
        <div className="div_variantt">
            {terminalVar.map((item) => (
            <div key={item.id} className='div_terminal_var' onClick={toggleTerminalPop}>
            <img className='logo_' src={item.icon}/>
                <div className='div_txt'>
                <h3>{item.title}</h3>
               <div> <p>{item.desc}</p> <p>{item.procent}</p></div>
                </div>
        </div>
            ))}
            {terminalPopolnenie &&  <div onClick={toggleTerminalPop} className="back_blur_term">  </div>}
            {terminalPopolnenie && 
                <div className="container_terminal_popolnenie">
                    <h3 className="terminal_title"> Пополнить через "Pay24"</h3>
                        <img src="./img/pay24-1.png"/>
                        <img src="./img/pay24-2.png"/>
                        <img src="./img/pay24-3.png"/>
                    </div>

}
</div>
    )
}

export default VariantTerminal;