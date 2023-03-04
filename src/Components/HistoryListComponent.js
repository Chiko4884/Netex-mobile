import React from "react";
import './historyListComponent.scss';
import { historyData } from "../Datas/historyData";
import { useState } from "react";
import {useForm} from 'react-hook-form';
import { useEffect } from "react";

function HistoryListComponent(){

    const DrawStatus = (e) =>{
        if (e == 'completed'){
            return "../img/oper_completed.png" 
        }
        if (e == 'not_completed'){
            return '../img/oper_not_completed.png'
        }
        if (e == 'blocked'){
          return '../img/oper_blocked.png' 
        }

    }

    return(
        <div className="history_list">
                        {historyData.map((item) => (
            <div key={item.id} className='history_item' > 
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
        </div>

    )
}

export default HistoryListComponent;