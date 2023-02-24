
import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Auth_page from "./Auth_page";
import { ConfirmPinModal } from "./Components/ConfirmPinModal";
import ConfirmRegis from "./Components/ConfirmRegis";
import { ForgotPassModal } from "./Components/ForgotPassModal";
import Zastavka from './Components/Zastavka';
import { Register_page } from "./Register_page";
import FormCodeInput from './Components/FormCodeInput';
import Main_page from './Main_page';
import Wallets from './Wallets';
import News from './News';
import NewsOne from './NewsOne';
import Popolnenie from './Popolnenie';
import CurrencyRates from './Components/CurrencyRates';

function App(){
      return (
        <div>
          <Zastavka/>
            <Routes>
                <Route path='/' element= {<Auth_page/>}/>
                <Route path='reg_page' element= {<Register_page/>}/>
                <Route path="forgot" element={<ForgotPassModal/>}/>
                <Route path="enter_pin" element= {<ConfirmPinModal/>}/>
                <Route path="confirm_regis" element= {<ConfirmRegis/> }/>
                <Route path='/main_page' element={<Main_page/>}/>
                <Route path='wallets' element= {<Wallets/>} />
                <Route path='news' element= {<News/>}/>
                <Route path='news_one' element= {<NewsOne/>}/>
                <Route path='popolnenie' element= {<Popolnenie/>}/>
                <Route path='currency_rates' element = {<CurrencyRates/>}/>
            </Routes>
        </div>

      );
    

}
export default App;