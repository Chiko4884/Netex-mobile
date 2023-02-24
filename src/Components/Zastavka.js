
import React, { useState, useEffect } from 'react'
import  './zastavka.scss';

function Zastavka(){

    const [show, setShow] = useState(true)

    useEffect(() => {
      const timeId = setTimeout(() => {
        setShow(false)
      }, 3000)
  
      return () => {
        clearTimeout(timeId)
      }
    }, []);


    if (!show){
        return (
            <></>
        )
    }


    return (
        <div className='container'>
        <img className='logo' src= './img/netex_logo.svg'/>
        </div>
    )
    

}

export default Zastavka;