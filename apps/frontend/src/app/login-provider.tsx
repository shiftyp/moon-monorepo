'use client'

import React from 'react'
import { LoginState, LoginContext } from '@moon-app/components/src/header/header'

export const LoginProvider = ({ children }: React.PropsWithChildren) => {
    const [userName, setUserName] = React.useState('')
    const [loginState, setLoginState] = React.useState<LoginState>(LoginState.LoggedOut)

    const doLogin = (username: string, passwor: string) => {
        setUserName(username)
        setLoginState(LoginState.LoggedIn)
    }

    const doLogout = () => {
        setUserName('')
        setLoginState(LoginState.LoggedOut)
    }

    return (
        <LoginContext.Provider value={{
            userName,
            loginState,
            doLogin,
            doLogout,
            loginError: ''
        }}>
            {children}
        </LoginContext.Provider>
    )
}