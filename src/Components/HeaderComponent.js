import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from "../Context";
import './headerComponent.scss'

function HeaderComponent (props){
    const navigate = useNavigate()
    const {user, SetUser} = useContext(CustomContext)

    const logOut = () => {
        SetUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/auth_page')
    }

    const to_back = () => {
        navigate(-1)
    }

    const [logoutWinState, setLogoutWinState] = useState(false)
    const toggleLogout= () => {
        setLogoutWinState(!logoutWinState)
    }
    return(    
         <div className='header'> 
        <div className='nav_block'>

            <div className='divs_nav'> <p className='back_link' onClick={to_back}
                >Назад</p> </div>

            <div className='divs_nav'><h3 className="h3_title">
                {props.title}</h3></div>

            <div className='divs_nav'><p className='logout' onClick={toggleLogout}>
                {props.logout}</p></div>

{logoutWinState && 
        <div className="win_logout">
       
            <img className="img_" alt="img" src="./img/forgot_pass.png"/>
                    <h3 className="h3_exit">Выйти?</h3>
                    <p>Вы действиетельно хотите выйти из своей учётной записи?</p>

<div className="btns_logout">
        <button 
        onClick={logOut} 
        className="exit_btn" 
        type="button" >
            Выйти
        </button>

        <button 
        onClick={toggleLogout} 
        className="cancel_btn" 
        type="button" >
            Остаться
        </button>
</div>
                </div>
}
{logoutWinState &&  <div className="div_blur_logout" onClick={toggleLogout}> </div> }

        </div>
        </div>
       
    )
}
export default HeaderComponent