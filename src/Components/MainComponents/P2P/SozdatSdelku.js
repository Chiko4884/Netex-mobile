import React, { useContext, useEffect, useState } from "react";
import './sozdatSdelku.scss';
import UserComponent from "../UserComponent";
import HeaderComponent from "../../HeaderComponent";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

function SozdatSdelku(){
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

      const getOptionLabel_1 = (option) => (
        <div className="select_label_1">
          {option.value === 'option1' && (
            <img src="https://cryptoicons.org/api/icon/btc/20" style={{ marginRight: '8px'}} /> // Иконка для опции "Option 1"
          )}
          {option.value === 'option2' && (
            <img src="https://cryptoicons.org/api/icon/eth/20" style={{ marginRight: '8px'}} /> // Иконка для опции "Option 2"
          )}
                    {option.value === 'option3' && (
            <img src="https://cryptoicons.org/api/icon/doge/20" style={{ marginRight: '8px'}} /> // Иконка для опции "Option 3"
          )}
          {option.label}
        </div>
      );

      const [valueOtdat, setValueOtdat] = useState(0.06)
      const handleOtdat = (e)=>{
        setValueOtdat(e.target.value)
      }

      const [valuePoluchit, setValuePoluchit] = useState(0.06)
      const handlePoluchit = (e)=>{
        setValuePoluchit(e.target.value)
      }

      const [comment, setComment] = useState('Комментарий');
      const handleInputChange = (event) => {
          setComment(event.target.value);
        };

        const [oplataPodtver, setOplataPodtver] = useState(false)
        const toggleOplataPodtver= () => {
            setOplataPodtver(!oplataPodtver)
        }  

    return(

        <div className="korobka_sd">
<HeaderComponent title ='Новая сделка'/>
<div className="_body">
        <UserComponent/>

        <div className="div_h11">
            <h1>P2P</h1>
        </div>
        <div className="d_sdelki">   
        <h3>Тип сделки</h3>
        <Select
      options={options1}
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

<div className="div_inp_select">
      <div className="div_inp_">  
        <p> Отдадите </p>
        <input type="number" value={valueOtdat} onChange={handleOtdat} />
      </div>
      <div className="div_inp_">  
        <p> Валюта </p>
      <Select
      options={options2}
      placeholder='Выбрать'
      getOptionLabel={getOptionLabel_1} // Передача функции getOptionLabel в пропс компонента Select
      styles={{
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        height: '48px',
        }),
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            height: '46px',
            minHeight:'40px',
            paddingTop: 0,
            paddingBottom: 0,
            alignItems:'center'
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            height: '28px',
            paddingTop: 0,
            paddingBottom: 0,
            alignItems:'center',
            display:'flex'
          }),
      }}
        />
      </div>
      </div>


      <div className="div_inp_select">
      <div className="div_inp_">  
        <p> Получите </p>
        <input type="number" value={valuePoluchit} onChange={handlePoluchit}/>
      </div>
      <div className="div_inp_">  
        <p> Валюта </p>
      <Select
      options={options2}
      placeholder='Выбрать'
      getOptionLabel={getOptionLabel_1} // Передача функции getOptionLabel в пропс компонента Select
      styles={{
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        height: '48px',
        }),
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            height: '46px',
            minHeight:'40px',
            paddingTop: 0,
            paddingBottom: 0,
            alignItems:'center'
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            height: '28px',
            paddingTop: 0,
            paddingBottom: 0,
            alignItems:'center',
            display:'flex'
          }),
      }}
        />
      </div>
      </div>

      <p className="p_comment">Комментарий</p>
        <textarea className="comment"
              value={comment}
              onChange={handleInputChange}
        />
<div className="pustoi">

</div>
<div className="div_btns">
    <button className="btn_predp">Предпросмотр</button>
    <button className="btn_sozd">Создать</button>
</div>
        </div>
        
    </div>

    )
}

export default SozdatSdelku;