import React from "react";
import HeaderComponent from "../../../Components/HeaderComponent";
import { history_acc_data } from "../../../Datas/account_history_data";
import './historyAccount.scss'

function HistoryAccount() {
    return(
        <div className="korobka_hist_account">
            <HeaderComponent title='История аккаунта'/>
<div className="body_hist_account">

            {history_acc_data.map((item) => (
                <div className="div_datas" key={item.id}>
                    <div className="div_stroka">
                        <h3>Дата</h3> <p>{item.date}</p>
                    </div>
                    <div className="div_stroka">
                        <h3>Действие</h3> <p>{item.action}</p>
                    </div>
                    <div className="div_stroka">
                        <h3>IP Адрес</h3> <p>{item.ip_address}</p>
                    </div>
                    <div className="div_stroka">
                        <h3>Браузер</h3> <p>{item.browser}</p>
                    </div>
                </div>
             ))}
</div>
        </div>
    )
}

export default HistoryAccount