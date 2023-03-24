import React, { useState } from "react";
import './historyComponent.scss';
import Select from 'react-select';
import HistoryListComponent from "./HistoryListComponent";
import HeaderComponenent from '../HeaderComponent'

const options = [
    { value: '1', label: 'Все операции' },
    { value: '2', label: 'Пополнение' },
    { value: '3', label: 'Возврат' },
    { value: '4', label: 'Покупка' },
    { value: '5', label: 'Продажа' },
    { value: '6', label: 'Вывод' },
    { value: '7', label: 'Блокировка' },
    { value: '8', label: 'Перевод' },
    { value: '9', label: 'Обмен' },
    { value: '10', label: 'Оплата' },
    { value: '11', label: 'Депозит' },
  ];

function HistoryComponent(){

      const [selectedOption, setSelectedOption] = useState(null);
    return(
        <div className="korobka_history">
      <HeaderComponenent title = 'История' />
      <div className="history_body">
        <div className="div_select">
        <Select className="select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
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
        <div className="div_date">
        <input id="start_date" type='date'/> 
        <input id="end_date" type='date'/>
        </div>

        <div className="div_list_oper">
            <h1>Список операций</h1>
        </div>
        <HistoryListComponent/>
        </div>
    </div>

    )
}

export default HistoryComponent;