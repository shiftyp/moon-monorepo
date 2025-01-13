import React from 'react'
import { Header, LoginContext, LoginState } from './header'
import './header.css'

export default {
    'Logged Out Header': (
        <LoginContext.Provider value={{
            userName: '',
            doLogin: () => { },
            doLogout: () => { },
            loginState: LoginState.LoggedOut,
            loginError: ''
        }}>
            <Header />
        </LoginContext.Provider>
    ),
    'Login In Progress Header': (
        <LoginContext.Provider value={{
            userName: '',
            doLogin: () => { },
            doLogout: () => { },
            loginState: LoginState.LoginInProgress,
            loginError: ''
        }}>

            <Header />
        </LoginContext.Provider>
    ),
    'Logged In Header': (
        <LoginContext.Provider value={{
            userName: 'rkahn',
            doLogin: () => { },
            doLogout: () => { },
            loginState: LoginState.LoggedIn,
            loginError: ''
        }}>
            <Header />
        </LoginContext.Provider>
    ),
    'Login Error Header': (
        <LoginContext.Provider value={{
            userName: '',
            doLogin: () => { },
            doLogout: () => { },
            loginState: LoginState.LoggedOut,
            loginError: 'Bad Username Or Password'
        }}>
            <Header />
        </LoginContext.Provider>
    ),
}