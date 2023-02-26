import React from 'react'
import './main_page.scss'
import FooterTab from './Components/FooterTab';
import Main_component from './Components/Main_component';

function Main_page(){

return (
    <div className="main_container">
        <Main_component/>
        <FooterTab/>
    </div>
    
  
    )
}

export default Main_page;