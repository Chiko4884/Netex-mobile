import React from "react";
import './variantCripto.scss';
import { criptoVar } from "../../Datas/criptoVar";
import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'


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

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientY;
        setTouchPosition(touchDown);
      }
    
      const handleTouchMove = (e) => {
        if (touchPosition === null) {
          return;
        }
        const currentPosition = e.touches[0].clientY;
        const direction = touchPosition - currentPosition;
        if (direction < -10) {
            setCriptoPopolnenie(!criptoPopolnenie)   ;
        }
        setTouchPosition(null);
      }

    return(

        <div className="div_variantt" >
{criptoVar.map((item) => (
    <div key={item.id} className='div_crip1' onClick= {() => {clickedCripto(item)}} >
            <img className="img1" src={item.image} alt='var'/>
            <div className='div_txt_crip'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>

    </div>
    ))}

    <AnimatePresence>
    {criptoPopolnenie &&  
    <motion.div 
    className="container_popolnenie"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}

    initial={{bottom: '-800px'}}
    animate={{bottom: '0px'}}
    exit={{bottom: '-800px'}}
    transition={{duration: 0.3}}    
    >
                <div className='div_line' ></div>
                        <h3 className="crip_title"> {clickCriptoText} депозитный адрес</h3>
                    <div className="block_predup">
                        <img src="./img/znak_predup.png"/>
                        <p>Если отправить криптовалюту на неверный адрес (например, биткойн на адрес Bitcoin Cash), криптовалюта будет потеряна</p>
                    </div>
    
            <div  >
            <div className="block_txt_vyvod">
                    <h6>Минимальная сумма на вывод:</h6>
                    <p>0.000000</p> <p>{clickCriptoTitle}</p>
            </div>
                    <div className="block_graph_kod">
                        <img src="./img/kod.png" />
                    </div>
                    <div className="block_address">
                    <h6>{clickCriptoText} Адрес</h6>
                    <p className="cripto_address">
                        {criptoAddress}</p>
                    </div>
                    <button
                    className="btn_copy" 
                    onClick={() => { navigator.clipboard.writeText(criptoAddress); console.log('адрес скопирован')}} 
                    > 
                    <img src="./img/copy_sign.png"/> Скопировать адрес</button>
            </div>
                </motion.div>

}
    </AnimatePresence>
       {criptoPopolnenie &&  <div onClick={toggleCriptoPop} className="back_blur">  </div>}
</div>



    )
}

export default VariantCripto;