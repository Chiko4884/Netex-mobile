import React from 'react'
import './main_page.scss'
import './Components/footerTab.scss'
import Main_component from './Components/MainComponents/Main_component';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';



function Main_page(){
    const navigate = useNavigate()

        useEffect(() => {
            if (localStorage.getItem('user') == null){
                navigate('/auth_page')
            }
        }, [])
    

return   (
    
    <div className="main_container">

        <Main_component/>
    
    </div>

  
    )

}
export default Main_page;
