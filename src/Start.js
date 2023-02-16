import React, { useState, useEffect } from 'react'
import Auth_page from './Auth_page';
import Zastavka from './Components/Zastavka';


function Start() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // If show is false the component will return auth_page
  if (!show) {
    return (
    <Auth_page/>
    );
  }
  // If show is true this will be returned
  return (
      <Zastavka/>
  )
}
export default Start;