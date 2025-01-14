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
    doSignUp: (username: string, password: string) => void,
    doLogout: () => void,
    loginState: LoginState
    loginError: string
}>({
    userName: '',
    doLogin: () => { },
    doSignUp: () => { },
    doLogout: () => { },
    loginState: LoginState.LoggedOut,
    loginError: ''
})

export const Header = () => {
    const [modal, setModal] = React.useState<'login' | 'signup' | null>(null)
    const {
        userName,
        loginState,
        loginError,
        doLogin,
        doSignUp,
        doLogout,
    } = useContext(LoginContext)

    useEffect(() => {
        if (loginState === LoginState.LoggedIn && modal !== null) {
            setModal(null)
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
                            <>
                                <Button
                                    aria-haspopup={true}
                                    aria-controls="login-modal"
                                    onClick={() => {
                                        setModal('login')
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    style={{
                                        marginLeft: '1em'
                                    }}
                                    aria-haspopup={true}
                                    aria-controls="login-modal"
                                    onClick={() => {
                                        setModal('signup')
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </>
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
            <ModalContainer onClose={() => setModal(null)} isOpen={modal !== null}>
                <ModalContent heading={modal === 'signup' ? 'Sign Up' : 'Login'} id="login-modal">
                    <LoginForm kind={modal !== null ? modal : 'login'} onSubmit={(username, password) => {
                        if (modal === 'login') {
                            doLogin(username, password)
                        } else if (modal === 'signup') {
                            doSignUp(username, password)
                        }
                    }} showSpinner={loginState === LoginState.LoginInProgress} errorMessage={loginError} />
                </ModalContent>
            </ModalContainer>
        </>
    )
}