import React from 'react'
import { Header, LoginState } from './header'
import './header.css'

export default {
    'Logged Out Header': (
        <Header
            loginState={LoginState.LoggedOut}
            doLogin={(username, password) => { console.log('doLogin', username, password) }}
            doLogout={() => { console.log('doLogout') }}
        />
    ),
    'Login In Progress Header': (
        <Header
            loginState={LoginState.LoginInProgress}
            doLogin={(username, password) => { console.log('doLogin', username, password) }}
            doLogout={() => { console.log('doLogout') }}
        />
    ),
    'Logged In Header': (
        <Header
            username='rkahn'
            loginState={LoginState.LoggedIn}
            doLogin={(username, password) => { console.log('doLogin', username, password) }}
            doLogout={() => { console.log('doLogout') }}
        />
    ),
    'Login Error Header': (
        <Header
            loginError="Bad Username Or Password"
            loginState={LoginState.LoggedOut}
            doLogin={(username, password) => { console.log('doLogin', username, password) }}
            doLogout={() => { console.log('doLogout') }}
        />
    ),
}