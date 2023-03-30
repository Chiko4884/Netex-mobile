import React, { useState } from "react";
import './historyComponent.scss';
import Select from 'react-select';
import HistoryListComponent from "./HistoryListComponent";
import HeaderComponenent from '../HeaderComponent'
import { historyData } from "../../Datas/historyData";
import { useEffect } from "react";

export let listHistDataExp ;

const listOfOperations = [
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

  const filterFuncOp= (searchOp, listOp)=>{
    if(!searchOp) {
        return listOp;
    }
    if(searchOp == "Все операции") {
      return listOp;
  }
    return listOp.filter(({ oper_type }) => 
    oper_type.toLowerCase().includes(searchOp.toLowerCase())
    );
}



function HistoryComponent(){
  const [listHistData, setListHistData] = useState(historyData)

const today = new Date();
const year = today.getFullYear(); // получение года
const month = today.getMonth() + 1; // получение месяца (смещение на 1, т.к. январь = 0)
const day = today.getDate(); // получение дня
const formattedToday = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; // форматирование даты

  const [selectedOption, setSelectedOption] = useState({ value: '1', label: 'Все операции' });
let selectedOperation = selectedOption.label
listHistDataExp = listHistData

const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const func1 = (e)=>{
  setStartDate(e.target.value)
}
const func2 = (e)=>{
  setEndDate(e.target.value)
}

  useEffect(()=>{
    if (selectedOperation !== "Все операции" && !startDate && !endDate){
    const filteredOp = filterFuncOp(selectedOperation, historyData);//фильтр по значению операции
    setListHistData(filteredOp)}

    if(selectedOperation == "Все операции" && !startDate && !endDate) { return setListHistData(historyData)}

    if(startDate && endDate) {
      const filtered = filterFuncOp(selectedOperation, historyData);
    const filteredByDate = filtered.filter(item => { // фильтр по дате
      const itemDate = new Date(item.date.split(".").reverse().join("-"));
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate)});
      setListHistData(filteredByDate)}

      }, [selectedOperation])


    return(
        <div className="korobka_history">
      <HeaderComponenent title = 'История' />
      <div className="history_body">
        <div className="div_select">
        <Select className="select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={listOfOperations}
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
        <div className="div_date" >
        <input id="start_date" type='date' value={startDate} onChange = {(e) => setStartDate(e.target.value)} /> 
        <input id="end_date" type='date'  value={endDate} onChange={(e) => setEndDate(e.target.value)} />
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