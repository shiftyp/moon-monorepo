"use client"

import React, { useEffect, createContext, useContext } from 'react'
import { ModalContainer, ModalContent } from '../modal/modal'
import { LoginForm } from '../login-form/login-form'
import { Button } from '../button/button'

import './header.css'

export enum LoginState {
    LoggedIn,
    LoggedOut,
    LoginInProgress
}

export const LoginContext = createContext<{
    userName: string,
    doLogin: (username: string, password: string) => void,
    doLogout: () => void,
    loginState: LoginState
    loginError: string
}>({
    userName: '',
    doLogin: () => { },
    doLogout: () => { },
    loginState: LoginState.LoggedOut,
    loginError: ''
})

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const {
        userName,
        loginState,
        loginError,
        doLogin,
        doLogout
    } = useContext(LoginContext)

    useEffect(() => {
        if (loginState === LoginState.LoggedIn && isOpen) {
            setIsOpen(false)
        }
    }, [loginState])

    return (
        <>
            <header className="page-header">
                <div>
                    <h1>🌓 Moon</h1>
                    <nav></nav>
                </div>
                <div>
                    {loginState === LoginState.LoggedOut || loginState === LoginState.LoginInProgress
                        ? (
                            <Button
                                aria-haspopup={true}
                                aria-controls="login-modal"
                                onClick={() => {
                                    setIsOpen(true)
                                }}
                            >
                                Login
                            </Button>
                        )
                        : (
                            <>
                                <span className="salutation">Hello {userName}!</span>
                                <Button onClick={doLogout}>Logout</Button>
                            </>
                        )
                    }
                </div>
            </header>
            <ModalContainer onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <ModalContent heading="Login" id="login-modal">
                    <LoginForm onSubmit={(username, password) => {
                        doLogin(username, password)
                    }} showSpinner={loginState === LoginState.LoginInProgress} errorMessage={loginError} />
                </ModalContent>
            </ModalContainer>
        </>
    )
}