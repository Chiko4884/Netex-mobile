
import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Auth_page from "./Auth_page";
import { ConfirmPinModal } from "./Components/AuthComponents/ConfirmPinModal";
import ConfirmRegis from "./Components/AuthComponents/ConfirmRegis";
import Zastavka from './Components/Zastavka';
import { Register_page } from "./Register_page";
import Main_page from './Main_page';
import Wallets from './Components/MainComponents/Wallets';
import News from './Components/MainComponents/News';
import NewsOne from './Components/MainComponents/NewsOne';
import CurrencyRates from './Components/TorgovlyaComponents/CurrencyRates';
import Vyvod from './Vyvod';
import Profile from './Profile';
import History from './History';
import FooterTab from './Components/FooterTab';
import VyvodNaKartu from './Components/VyvodComponents/VyvodNaKartu';
import AboutService from './Components/ProfileComponents/info_section/AboutService';
import Faq from './Components/ProfileComponents/info_section/Faq';
import KakNachat from './Components/ProfileComponents/info_section/KakNachat';
import Contacts from './Components/ProfileComponents/info_section/Contacts';
import Verification from './Components/ProfileComponents/ProfileSettings/Verification';
import HistoryAccount from './Components/ProfileComponents/ProfileSettings/HistoryAccount';
import Security from './Components/ProfileComponents/ProfileSettings/Security';
import TwoFactorAuth from './Components/ProfileComponents/ProfileSettings/TwoFactorAuth';
import SecurityEdit from './Components/ProfileComponents/ProfileSettings/SecurityEdit';
import Torgovlya from './Torgovlya';
import { AnimatePresence } from 'framer-motion';
import OplataUslug from './Components/MainComponents/OplataUslug/OplataUslug';
import Usluga from './Components/MainComponents/OplataUslug/Usluga';
import FormaOplaty from './Components/MainComponents/OplataUslug/FormaOplaty';


function App(){
  const location = useLocation()
      return (
        <div>
          <Zastavka/>
          <AnimatePresence>
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
                <Route path='/popolnenie' element= {<Torgovlya/>}/>
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
                <Route path='/oplata_uslug' element= {<OplataUslug/>}/>
                <Route path='/oplata_uslug/:usluga' element={<Usluga/>}/>
                <Route path='/oplata_uslug/:usluga/:forma_oplaty' element= {<FormaOplaty/>}/>
            </Routes>
            </AnimatePresence>
         {location.pathname == '/' || 
          location.pathname == '/vyvod' ||
          location.pathname == '/popolnenie' ||
          location.pathname == '/history' ||
          location.pathname == '/profile' ? <FooterTab/> : ''}
        </div>

      );
}
export default App;