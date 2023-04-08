
import { createContext, useEffect, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {

    const [user, SetUser] =useState({
        email : ''
    })

    const [statusVerification, SetStatusVerification] = useState(false)

    useEffect( () => {
        if (localStorage.getItem('user') != null) {
            SetUser(JSON.parse(localStorage.getItem('user')))
        }
      
      }, [])


      const [uslugaName, setUslugaName] = useState('')
      useEffect(() => {
        if (localStorage.getItem('uslugaName') != ''){
            setUslugaName(localStorage.getItem('uslugaName'))};
      }, [uslugaName]);

      const [uslugaItemId, setUslugaItemId] = useState('')
      useEffect(() => {
        if (localStorage.getItem('uslugaItemId') != ''){
            setUslugaItemId(localStorage.getItem('uslugaItemId'))};
      }, [uslugaItemId]);

    return <CustomContext.Provider value = {
        {
        user, SetUser, 
        statusVerification, SetStatusVerification,
        uslugaName, setUslugaName,
        uslugaItemId, setUslugaItemId
        }
        }>
            {props.children}
           </CustomContext.Provider>

}

