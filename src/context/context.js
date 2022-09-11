import React, { createContext, useState } from 'react'

const defaultValue = {
    cart : [],
    setCart: () => {},
    clientInfo: {},
    setClientInfo: {
        contactInfo: {
            name: '',
            phone: '',
            email: '',
        },
        adressInfo: {
            city: '',
            direction1: '',
            direction2: '',
            references: '',
            coords: ''
        },
        paymentInfo: {}
    }

}

export const Context = createContext(defaultValue);

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [clientInfo, setClientInfo] = useState({
        city: '',
        direction1: '',
        direction2: '',
        references: '',
        coords: ''
    })

    return(
        <Context.Provider value={{ cart, setCart, clientInfo, setClientInfo }}>
            { children }
        </Context.Provider>
    )
}
