import React, { useEffect } from 'react'
import { ModalContainer, ModalContent } from '../modal/modal'
import { LoginForm } from '../login-form/login-form'
import { Button } from '../button/button'

export enum LoginState {
    LoggedIn,
    LoggedOut,
    LoginInProgress
}

export type HeaderProps = {
    username?: string
    loginState: LoginState
    doLogin: (username: string, password: string) => void
    doLogout: () => void
    loginError?: string
}

export const Header = ({ username, loginState, doLogin, doLogout, loginError }: HeaderProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

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
                                <span className="salutation">Hello {username}!</span>
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