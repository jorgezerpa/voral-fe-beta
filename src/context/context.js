import React, { createContext, useState } from 'react'

const defaultValue = {
    cart : [],
    setCart: () => {},
    clientInfo: {},
    setClientInfo: () => {},
    handleContactInfo: () => {},
    handleAddressInfo: () => {},
    handlePaymentInfo: () => {},

}

export const Context = createContext(defaultValue);

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [clientInfo, setClientInfo] = useState({
        contactInfo: {
            name: '',
            phone: '',
            email: '',
        },
        addressInfo: {
            city: '',
            direction1: '',
            direction2: '',
            references: '',
            coords: ''
        },
        paymentInfo: {
            paymentMethod: '', 
            totalAmount: null,
            bolivaresTransactionCapture: null //only if method is 'bolivares'
        }
    }) 

    const handleContactInfo = (info) => {
        setClientInfo(prev => {
            return({
                ...prev,
                contactInfo: { ...prev.contactInfo, ...info }
            })
        })
    }
    

    const handleAddressInfo = (info) => {
        setClientInfo(prev => {
            return({
                ...prev,
                addressInfo: { ...prev.addressInfo, ...info }
            })
        })
    }

    const handlePaymentInfo = (info) => {
        setClientInfo(prev => {
            return({
                ...prev,
                paymentInfo: { ...prev.paymentInfo, ...info }
            })
        })
    }


    return(
        <Context.Provider value={{ cart, setCart, clientInfo, setClientInfo, handleContactInfo, handleAddressInfo, handlePaymentInfo }}>
            { children }
        </Context.Provider>
    )
}




// setClientInfo: {
//     contactInfo: {
//         name: '',
//         phone: '',
//         email: '',
//     },
//     addressInfo: {
//         city: '',
//         direction1: '',
//         direction2: '',
//         references: '',
//         coords: ''
//     },
//     paymentInfo: {
//         method: '', 
//         totalAmount: null,
//         bolivaresTransactionCapture: null //only if method is 'bolivares'
//     }
// }