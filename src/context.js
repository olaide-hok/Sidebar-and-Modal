import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value='hello'>
            {children}
        </AppContext.Provider>
    )
}

// Custom Hook
export const useGlobalContent = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}