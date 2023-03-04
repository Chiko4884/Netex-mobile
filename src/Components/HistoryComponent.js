import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router"
import './historyComponent.scss';
import UserComponent from "./UserComponent";
import WalletComponent from "./WalletComponent";
import Select from 'react-select';
import { type } from "@testing-library/user-event/dist/type";
import HistoryListComponent from "./HistoryListComponent";

const options = [
    { value: '1', label: 'Все операции' },
    { value: '2', label: 'Пополнение' },
    { value: '3', label: 'Покупка' },
    { value: '4', label: 'Блокировка' },
  ];

function HistoryComponent(){

      const [selectedOption, setSelectedOption] = useState(null);
    return(
        <div className="korobka_history">
        <div className='history_head'> </div>
        <div className='under_head'>
        <Link className='back_main'
                to="/">Назад</Link>
            <h3>История</h3>
        </div>
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

    )
}

export default HistoryComponent;