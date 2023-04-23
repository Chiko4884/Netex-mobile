import React, { useContext, useEffect, useState } from "react";
import './formaOplaty.scss';
import HeaderComponent from "../../HeaderComponent";
import { useNavigate } from "react-router-dom";
import {dataSvet} from '../../../Datas/Uslugi/dataSvet';

import { CustomContext } from "../../../Context";


function FormaOplaty(){
    const{uslugaName, clickedItemId, setClickedItemId} = useContext(CustomContext)
    const navigate = useNavigate()

const [oplataPodtver, setOplataPodtver] = useState(false)
const toggleOplataPodtver= () => {
    setOplataPodtver(!oplataPodtver)
}

const [spisokUslug, setSpisokUslug] = useState([])
const [uslugaItem, SetUslugaItem] = useState([])

    useEffect(()=>{
        if(uslugaName == 'Свет'){
            setSpisokUslug(dataSvet)
            SetUslugaItem(spisokUslug.filter(item => item.title === clickedItemId));
        }
    },[uslugaName, clickedItemId, spisokUslug])
    
    const [comment, setComment] = useState('Комментарий');
    const handleInputChange = (event) => {
        setComment(event.target.value);
      };


    //   пустой слайдер
    const [currentPage, setCurrentPage] = useState(0); // текущая страница слайдера

    const handlePreviousPage = () => {
      setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
    };
  
    const handleNextPage = () => {
      setCurrentPage(currentPage < 2 ? currentPage + 1 : 2);
    };
  
    const handleDotClick = (pageIndex) => {
      setCurrentPage(pageIndex);
    };

    return(

        <div className="korobka_forma">
<HeaderComponent title = {uslugaName}/>
<div className="oplata_body">

            {uslugaItem.length > 0 && (
            <div className='div_item'>
                <img className='img_u' src={uslugaItem[0].image}/>
                <div className='div_txt_'>
                <h3>{uslugaItem[0].title}</h3>
                <p>{uslugaItem[0].text}</p>
                </div>
            </div>
            )}

        <div className="div_h1">
            <h1>Форма оплаты</h1>
        </div>

        <div className='forma_oplaty'>
        <p>Введите лицевой счёт</p>
        <input className="inp_litsevoi_schet" placeholder="000000000000000" />

        <p>Сумма</p>
        <input className="inp_summa" placeholder="0.000"/>
        
        <div className="div_itogo"> 
            <h3>Итого к оплате:</h3>
            <p>0.0002  USDT</p> 
        </div>

        <p>Комментарий</p>
        <textarea className="inp_comment"
              value={comment}
              onChange={handleInputChange}
        />

        {/* пустой слайдер */}
        <div className="div_pustoy"> 
        {currentPage === 0 && <div className="div_slide" style={{background:'#d8d4d4'}}></div>}
        {currentPage === 1 && <div className="div_slide" style={{background:'#d8d4ff'}}></div>}
        {currentPage === 2 && <div className="div_slide" style={{background:'#d8d4dd'}}></div>}
        </div>
        <div className="div_tochki">
        <span onClick={() => handleDotClick(0)} style={{ cursor: 'pointer', color:'#FFE400', marginRight: 20}}>
          {currentPage === 0 ? '•' : '◦'}
        </span>
        <span onClick={() => handleDotClick(1)} style={{ cursor: 'pointer', color:'#FFE400', marginRight: 20 }}>
          {currentPage === 1 ? '•' : '◦'}
        </span>
        <span onClick={() => handleDotClick(2)} style={{ cursor: 'pointer', color:'#FFE400' }}>
          {currentPage === 2 ? '•' : '◦'}
        </span>
      </div>

         <button className="btn_prod"
         onClick={toggleOplataPodtver}
         >Продолжить</button>  

        </div>
 </div>
        {/* modalnoe okno podtver */}
 {oplataPodtver &&  <div onClick={toggleOplataPodtver} className="back_blur">  </div>}
 {oplataPodtver && 
                <div className="container_podtv">
                <div className='div_line'></div>
                        <h3 className="podtv_title"> Подтверждение платежа</h3>

            <div className='form_sum'>
                    <div className="div_calculate">
<div className="podtver_divs"> 
    <h5>Подтверждение платежа</h5> 
    <p >Абонент найден</p>
</div>

<div className="calc_divs"> 
    <h5>Сумма к списанию</h5> 
    <p >1.29</p>
    <p className="val">USDT</p>
</div>

<div className="calc_divs"> 
    <h5>Сумма к получению</h5> 
    <p >100.00</p>
    <p className="val">KGS</p>
</div>

<div className="calc_divs"> 
    <h5>Комиссия системы</h5> 
    <p >5.00</p>
    <p className="val">KGS</p>
</div>

<div className="calc_divs"> 
    <h5>Наша комиссия</h5> 
    <p >5.00</p>
    <p className="val">KGS</p>
</div>
                    </div>
                    <button
                    className="btn_podtver" 
                    onClick={toggleOplataPodtver}
                    type="button"
                    > 
                     Подтвердить</button>
            </div>
                </div>
    }
    </div>

    )
}

export default FormaOplaty;