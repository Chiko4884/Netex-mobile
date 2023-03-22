
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

    return <CustomContext.Provider value = {{user, SetUser, statusVerification, SetStatusVerification}}>
            {props.children}
           </CustomContext.Provider>

}