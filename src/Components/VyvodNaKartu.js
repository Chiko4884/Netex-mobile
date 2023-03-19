import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import HeaderComponent from "./HeaderComponent";
import './vyvodNaKartu.scss'
import WalletComponentVyvod from "./WalletComponentVyvod";


const seti = [
    { value: '1', label: 'Tether US (BEP 20)' },
    { value: '2', label: 'Tether US (BEP 20)' },
  ];

function VyvodNaKartu(props){
  
const [cardName, SetCardName] = useState('VISA Казахстан')
const [walletName, SetWalletName] = useState('USDT')
const [walletValue, SetWalletValue] = useState(0.06)

const [selectedSeti, setSelectedSeti] = useState(null);

const {register, handleSubmit,formState:{ errors, isValid }, formState}=useForm({
    mode: 'OnChange'
})

const onSubmit = () => {console.log(walletName, walletValue)};
    return(
        <div className="korobka_na_kartu">
            <HeaderComponent title = {cardName}/>
<div className="body_vyvod_na_kartu">
            <div className='div_title_card'>
                <h1>Вывести средства с {walletName} кошелька</h1>
                <p>Доступная сумма: {walletValue} {walletName}</p>
            </div>
    <div className='div_card_info'>

            <div className='min_sum'>
            <img className='icon_card_info' src='./img/min_sum_icon.png'/>
                <div className='div_txt_info'>
                <h3>Мин. сумма</h3>
                <p> 10 {walletName}</p>
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
          <input className="inp1" defaultValue={walletValue} />
          <p className="p2">{walletName}</p>

          <p className="p1">Сумма к получению</p>
          <input className="inp1" defaultValue={walletValue} />
          <p className="p2">{walletName}</p>

          <p className="p1">Номер {walletName} кошелька</p>
          <input className="inp1" 
          placeholder="00000000000000000000000000"
          />

          <button 
          className="btn_prodolzhit"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          >
          Продолжить
          </button>
        </form>

    </div>

    </div>
        </div>
    )
}

export default VyvodNaKartu