
import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Auth_page from "./Auth_page";
import { ConfirmPinModal } from "./Components/ConfirmPinModal";
import ConfirmRegis from "./Components/ConfirmRegis";
import Zastavka from './Components/Zastavka';
import { Register_page } from "./Register_page";
import Main_page from './Main_page';
import Wallets from './Wallets';
import News from './News';
import NewsOne from './NewsOne';
import Popolnenie from './Popolnenie';
import CurrencyRates from './Components/CurrencyRates';
import Vyvod from './Vyvod';
import Profile from './Profile';
import History from './History';
import FooterTab from './Components/FooterTab';
import VyvodNaKartu from './Components/VyvodNaKartu';
import AboutService from './info_section/AboutService';
import Faq from './info_section/Faq';
import KakNachat from './info_section/KakNachat';
import Contacts from './info_section/Contacts';
import Verification from './ProfileSettings/Verification';
import HistoryAccount from './ProfileSettings/HistoryAccount';
import Security from './ProfileSettings/Security';
import TwoFactorAuth from './ProfileSettings/TwoFactorAuth';
import SecurityEdit from './ProfileSettings/SecurityEdit';

function App(){
  const location = useLocation()
      return (
        <div>
          <Zastavka/>
            <Routes>
                <Route path='/' element={<Main_page/>}/>
                <Route path='/auth_page' element= {<Auth_page/>}/>
                <Route path='/reg_page' element= {<Register_page/>}/>
                <Route path="/enter_pin" element= {<ConfirmPinModal/>}/>
                <Route path="/confirm_regis" element= {<ConfirmRegis/> }/>

                <Route path='/wallets' element= {<Wallets/>} />
                <Route path='/news/:id' element= {<NewsOne/>}/>
                <Route path='/news' element= {<News/>}/>
                <Route path='/popolnenie/:currency_rates' element = {<CurrencyRates/>}/>
                <Route path='/popolnenie' element= {<Popolnenie/>}/>
                <Route path='/vyvod/:id' element={<VyvodNaKartu/>}/>
                <Route path='/vyvod' element= {<Vyvod/>}/>
                <Route path='/profile/about' element= {<AboutService/>}/>
                <Route path='/profile/faq' element= {<Faq/>}/>
                <Route path='/profile/kak_nachat' element= {<KakNachat/>}/>
                <Route path='/profile/contacts' element= {<Contacts/>}/>
                <Route path='/profile/verification' element= {<Verification/>}/>
                <Route path='/profile/history_account' element= {<HistoryAccount/>}/>
                <Route path='/profile/security/two_factor' element= {<TwoFactorAuth/>}/>
                <Route path='/profile/security/edit' element= {<SecurityEdit/>}/>
                <Route path='/profile/security' element= {<Security/>}/>
                <Route path='/profile' element= {<Profile/>}/>
                <Route path='/history' element= {<History/>} />
            </Routes>
         {location.pathname == '/' || 
          location.pathname == '/vyvod' ||
          location.pathname == '/popolnenie' ||
          location.pathname == '/history' ||
          location.pathname == '/profile' ? <FooterTab/> : ''}
        </div>

      );
    

}
export default App;