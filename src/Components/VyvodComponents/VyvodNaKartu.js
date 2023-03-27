import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import HeaderComponent from "../HeaderComponent";
import './vyvodNaKartu.scss'
import { clickedCriptoName } from "./WalletComponentVyvod";
import { clickedCriptoSign } from "./WalletComponentVyvod";
import { clickedCriptoCoin } from "./WalletComponentVyvod";

const seti = [
    { value: '1', label: 'Tether US (BEP 20)' },
    { value: '2', label: 'Tether US (BEP 20)' },
  ];

function VyvodNaKartu(props){
  const navigation = useNavigate()
const [cardName, SetCardName] = useState('VISA Казахстан')
const [walletName, SetWalletName] = useState({clickedCriptoName})
const [walletValue, SetWalletValue] = useState({clickedCriptoCoin})

const [selectedSeti, setSelectedSeti] = useState(null);

const {register, handleSubmit,formState:{ errors, isValid }, formState}=useForm({
    mode: 'OnChange'
})

const onSubmit = () => {console.log({clickedCriptoName}, {clickedCriptoCoin}); navigation(-1)};
    return(
        <div className="korobka_na_kartu">
            <HeaderComponent title = {cardName}/>
<div className="body_vyvod_na_kartu">
            <div className='div_title_card'>
                <h1>Вывести средства с {clickedCriptoSign} кошелька</h1>
                <p>Доступная сумма: {clickedCriptoCoin} {clickedCriptoSign}</p>
            </div>
    <div className='div_card_info'>

            <div className='min_sum'>
            <img className='icon_card_info' src='./img/min_sum_icon.png'/>
                <div className='div_txt_info'>
                <h3>Мин. сумма</h3>
                <p> 10 USDT</p>
                </div>
            </div>
           
    <div className='nasha_komis'>  
            <img className='icon_card_info' src='./img/procent.png'/>
                <div className='div_txt_info'>
                <h3>Наша комиссия</h3>
                <p>0.00 %</p>
                </div>
    </div>

    <div  className ='komis_seti'>
           <img className='icon_card_info' src='./img/procent.png'/>
                   <div className='div_txt_info'>
                   <h3>Комиссия сети</h3>
                   <p>1 USDT</p>
                   </div>
    </div>


    </div>

    <div className="div_sposob_card">
        <div className="div_t">
            <h1>Выберите способ пополнения</h1>
        </div>
        <form className="div_sposob_info">
            <p className="p1">Сеть</p>
        <div className="div_select_seti">
        <Select className="select_seti"
        defaultValue={selectedSeti}
        onChange={setSelectedSeti}
        options={seti}
        placeholder='Выбрать'
        styles={{
            control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            height: '48px',
            }),
          }}
        />
        </div>

          <p className="p1">Сумма отправления</p>
          <input className="inp1" defaultValue={clickedCriptoCoin} />
          <p className="p2">{clickedCriptoSign}</p>

          <p className="p1">Сумма к получению</p>
          <input className="inp1" defaultValue={clickedCriptoCoin} />
          <p className="p2">{clickedCriptoSign}</p>

          <p className="p1">Номер {clickedCriptoSign} кошелька</p>
          <input className="inp1" 
          placeholder="00000000000000000000000000"
          />
        <div className="pustoi_div"></div>
          <button 
          className="btn_prodolzhit"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          >Продолжить
          </button>

        </form>

    </div>

    </div>
        </div>
    )
}

export default VyvodNaKartu