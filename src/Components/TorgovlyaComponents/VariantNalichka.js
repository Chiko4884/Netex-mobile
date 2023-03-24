import React from "react";
import './variantNalichka.scss';
import { nalichkaVar } from "../../Datas/nalichkaVar";
import { useState } from "react";

function VariantNalichka(){
    const [nalichkaPopolnenie, setNalichkaPopolnenie] = useState(false)
const toggleNalichkaPop= () => {
    setNalichkaPopolnenie(!nalichkaPopolnenie)
}


    return(
        <div className="div_variantt">
            {nalichkaVar.map((item) => (
            <div key={item.id} className='div_nalichka_var' onClick={toggleNalichkaPop}>
            <img className='logo_' src={item.icon}/>
                <div className='div_txt'>
                <h3>{item.title}</h3>
               <div> <p>{item.desc}</p> <p>{item.procent}</p></div>
                </div>
        </div>
            ))}

{nalichkaPopolnenie &&  <div onClick={toggleNalichkaPop} className="back_blur">  </div>}
{nalichkaPopolnenie && 
                <div className="container_nal_popolnenie">
                <div className='div_line'></div>
                    <h3 className="nal_title"> Для оплаты <br/>"Оплата наличными"</h3>
                    <p>Вам необходимо связаться с нами по WhatsApp</p>
                    <a href='https://wa.me/+996508241111?text=Здравствуйте%2C+у+меня+есть+вопрос' title="WhatsApp" target='_blank'>+996 508 24 11 11</a>
                    <button
                    className="btn_nal" 
                    onClick={toggleNalichkaPop}
                    type="button"
                    > 
                     Понятно</button>
                    </div>

}
</div>
    )
}

export default VariantNalichka;