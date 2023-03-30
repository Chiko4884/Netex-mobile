import React from "react";
import './historyListComponent.scss';
import { historyData } from "../../Datas/historyData";
import { useState } from "react";
import {useForm} from 'react-hook-form';
import { useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { listHistDataExp } from "./HistoryComponent";

function HistoryListComponent(){

    const DrawStatus = (e) =>{
        if (e == 'completed'){
            return "./img/oper_completed.png" 
        }
        if (e == 'not_completed'){
            return './img/oper_not_completed.png'
        }
        if (e == 'blocked'){
          return './img/oper_blocked.png' 
        }
    }


    const [paymentToggle, setPaymentToggle] = useState(false)
    const toggleFunc= () => {
        setPaymentToggle(!paymentToggle)
    }


    let [payType, SetPayType] = useState()
    let [payDate, SetPayDate] = useState()
    let [payTime, SetPayTime] = useState()
    let [payRashod, SetPayRashod] = useState()
    let [payPrihod, SetPayPrihod] = useState()
    let [payValuta, SetPayValuta] = useState()
    let [payKomis, SetPayKomis] = useState()
    let [payRekvisit, SetPayRekvisit] = useState()
    let [payNote, SetPayNote] = useState()
    let [payStatus, SetPayStatus] = useState()
if (payStatus == 'completed'){
    SetPayStatus('Завершено')
}
if (payStatus == 'not_completed'){
    SetPayStatus('Не завершено')
}
if (payStatus == 'blocked'){
    SetPayStatus('Заблокировано')
}
    
        
let clickedPayment  = (e)=> {
    SetPayType(e.oper_type);
    SetPayDate(e.date);
    SetPayTime(e.time);
    SetPayRashod(Number(e.rashod).toFixed(2));
    SetPayPrihod(Number(e.prihod).toFixed(2));
    SetPayValuta(e.valuta)
    SetPayKomis(Number(e.komissiya).toFixed(2));
    SetPayStatus(e.status)
    SetPayRekvisit(e.rekvisit)
    SetPayNote(e.note)
    SetPayNote(e.note + 'на сумму "' + e.rashod*88 + ' ' + 'СОМ' +
    '", реквизит "' + e.rekvisit + '"')

    setPaymentToggle(!paymentToggle)   
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
        setPaymentToggle(!paymentToggle)  
    }
    setTouchPosition(null);
  }

    return(
        <div className="history_list">
        {listHistDataExp.map((item) => (
            <div key={item.id} className='history_item' onClick= {() => {clickedPayment(item)}}> 
<div className="icon_title_type_status">
    <div className="icon_title">  <img className='logo_hist' src={item.icon} alt='visa'/> <h3>{item.title}</h3> </div>
    <div className="op-type_status"> <h6>{item.oper_type}</h6> <img className="status_icon" src={DrawStatus(item.status)} alt='status' /> </div>
</div>
<div className="prihod_rashod">
    <div className="prihod"> <p>Приход:</p><h6>{item.prihod}</h6> </div> 
    <div className="rashod"><p>Расход:</p> <h5>{item.rashod}</h5> <h6> {item.valuta}</h6></div>   
</div>
        </div>
            ))}
<AnimatePresence>
{paymentToggle && 
                <motion.div  
                className="payment_toggle"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            
                initial={{bottom: '-800px'}}
                animate={{bottom: '0px'}}
                exit={{bottom: '-800px'}}
                transition={{duration: 0.3}} 
                >
                <div className='div_line'></div>
                   
                 <h3 className="payment_title">Квитанция об оплате</h3>
                    
                <div className="payment_datas">
<div className="pay_list"> <h5>Тип операции:</h5>   <h6>{payType}</h6> </div>
<div className="pay_list"> <h5>Дата и время:</h5>   <h6>{payDate} {payTime}</h6> </div>
<div className="pay_list"> <h5>Сумма к списанию:</h5>   <div className="pay_div2"><h6>{payRashod}</h6> <p> {payValuta}</p> </div> </div>
<div className="pay_list"> <h5>Комиссия:</h5>   <div className="pay_div2"><h6>{payKomis} </h6> <p> {payValuta}</p> </div> </div>
<div className="pay_list"> <h5>Валюта:</h5>   <p> {payValuta}</p> </div>
<div className="pay_list"> <h5>Статус:</h5>   <p> {payStatus}</p> </div>
                </div>
<h3>Реквизит</h3>
<div className="div_rekvisit"> <p>{payRekvisit}</p> 
        <img src="./img/copy_sign.png"  onClick={() =>  {navigator.clipboard.writeText(payRekvisit); console.log('реквизит скопирован')}}/> </div>

<h3>Примечание</h3>
<div className="div_note"> <p>{payNote}</p> 
        <img src="./img/copy_sign.png" onClick={() =>  {navigator.clipboard.writeText(payNote); console.log('примечание скопировано')}}/> </div>

<button className="btn_close_pay" onClick={toggleFunc}>Закрыть</button>
                </motion.div >
    }
    </AnimatePresence>
{paymentToggle &&  <div onClick={toggleFunc} className="back_blur_pay">  </div>}

        </div>

    )
}

export default HistoryListComponent;