import React, { useContext, useEffect, useState } from "react";
import './sdelki.scss';
import UserComponent from "../UserComponent";
import HeaderComponent from "../../HeaderComponent";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { p2p_sdelki } from "../../../Datas/p2p/p2p_sdelki";
import { moi_sdelki } from "../../../Datas/p2p/moi_sdelki";

function Sdelki(){
    
    const navigate = useNavigate()
    const options1 = [
        { value: 'option1', label: 'Продать' },
        { value: 'option2', label: 'Купить' }
      ];
    const options2 = [
        { value: 'option1', label: 'Bitcoin' },
        { value: 'option2', label: 'Ethereum' },
        { value: 'option3', label: 'Dogecoin' }
      ];

      const getOptionLabel = (option) => (
        <div className="select_label">
          {option.value === 'option1' && (
            <img src="https://cryptoicons.org/api/icon/btc/20" style={{ marginRight: '8px', color:'#F49526'}} /> // Иконка для опции "Option 1"
          )}
          {option.value === 'option2' && (
            <img src="https://cryptoicons.org/api/icon/eth/20" style={{ marginRight: '8px', color:'#F49526' }} /> // Иконка для опции "Option 2"
          )}
                    {option.value === 'option3' && (
            <img src="https://cryptoicons.org/api/icon/doge/20" style={{ marginRight: '8px', color:'#F49526'}} /> // Иконка для опции "Option 3"
          )}
          {option.label}
        </div>
      );

      const [valueOt, setValueOt] = useState(0.06)
      const handleOt = (e)=>{
        setValueOt(e.target.value)
      }

      const [valueDo, setValueDo] = useState(0.06)
      const handleDo = (e)=>{
        setValueDo(e.target.value)
      }

      const[podrobnoSdelki, setPodrobnoSdelki] = useState(false)
        const modalPodrobno = ()=>{
          setPodrobnoSdelki(!podrobnoSdelki)
        }

    return(

        <div className="korobka_usluga">
<HeaderComponent title ='Сделки'/>
<div className="sdelki_body">
        <UserComponent/>

        <div className="div_h1">
            <h1>Список сделок</h1>
        </div>
<div className="d_sdelki">        
    <h3>Способ перевода </h3>
    <Select
      options={options1}
      placeholder='Выбрать'
      styles={{
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        height: '48px',
        // marginBottom: '16px',
        }),
      }}
        />

        <h3 style={{marginTop:'16px'}}>Криптовалюта </h3>
        <Select
      options={options2}
      placeholder='Выбрать'
      getOptionLabel={getOptionLabel} // Передача функции getOptionLabel в пропс компонента Select
      styles={{
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        height: '48px',

        }),
      }}
        />

      <div className="div_summy">
      <div className="div_summy_">  
        <p> Сумма от </p>
        <input value={valueOt} onChange={handleOt}/>
      </div>
      <div className="div_summy_">  
        <p> Сумма до </p>
        <input value={valueDo} onChange={handleDo}/>
      </div>
      </div>

      <div className="div_h111">
            <h1>P2P Сделки</h1>
        </div>
      
      {p2p_sdelki.map((item) => (
        <div className="div_p2p_sdelki" key={item.id}>
          <div className="div_item_sdelki_1"> <h3>Тип сделки</h3> <p>{item.tip_sdelki}</p></div>
          <div className="div_item_sdelki" style={{ marginBottom: '8px'}}> <h3>Получите</h3> <div className="div_item_item"> <p>{item.poluchit}</p> <span>{item.poluchit_valuta}</span> </div></div>
          <div className="div_item_sdelki"> <h3>Отдадите</h3> <div className="div_item_item"> <p>{item.otdat}</p> <span>{item.otdat_valuta}</span> </div></div>
        </div>
      ))}

    <div className="div_h111">
            <h1>Мои Сделки</h1>
        </div>
        {moi_sdelki.map((item) => (
        <div className="div_p2p_sdelki" key={item.id}>
          <div className="div_item_sdelki_1"> <h3>Тип сделки</h3> <p>{item.tip_sdelki}</p></div>
          <div className="div_item_sdelki" style={{ marginBottom: '8px'}}> <h3>Получите</h3> <div className="div_item_item"> <p>{item.poluchit}</p> <span>{item.poluchit_valuta}</span> </div></div>
          <div className="div_item_sdelki"> <h3>Отдадите</h3> <div className="div_item_item"> <p>{item.otdat}</p> <span>{item.otdat_valuta}</span> </div></div>
        </div>
      ))}

</div>
     

 </div>
        
      {podrobnoSdelki && 
      <div className="podrobno_sdelki">
                          <div className='div_line'></div>
                        <h3 className="podtv_title">Подробности сделки</h3>
                    <div className="div_sozdatel">
                      <p>Cоздатель этой сделки</p>
                      <div className="div_sozdatel_data">

                      </div>
                    </div>
        </div>}

    </div>

    )
}

export default Sdelki;