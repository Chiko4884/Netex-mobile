
import { createContext, useEffect, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {

    const [user, SetUser] =useState({
        email : ''
    })

    useEffect( () => {
        if (localStorage.getItem('user') != null) {
            SetUser(JSON.parse(localStorage.getItem('user')))
        }
      }, [])




    const [statusVerification, SetStatusVerification] = useState(false)

    const [vnimanie, setVnimanie] = useState(true)


      const [uslugaName, setUslugaName] = useState('')
      useEffect(() => {
        if (localStorage.getItem('uslugaName') !== ''){
            setUslugaName(localStorage.getItem('uslugaName'))};
      }, [uslugaName]);

      const [clickedItemId, setClickedItemId] = useState('')
      useEffect(() => {
        if (localStorage.getItem('clickedItemId') !== ''){
            setClickedItemId(localStorage.getItem('clickedItemId'))};
      }, [clickedItemId]);

    return <CustomContext.Provider value = {
        {
        user, SetUser,
        statusVerification, SetStatusVerification,
        uslugaName, setUslugaName,
        clickedItemId, setClickedItemId,
        vnimanie, setVnimanie
        }
        }>
            {props.children}
           </CustomContext.Provider>

}

