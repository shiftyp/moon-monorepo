'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { LoginState, LoginContext } from '@moon-app/components/src/header/header'

import SuperTokens from 'supertokens-web-js';
import Session, { signOut } from 'supertokens-web-js/recipe/session';
import EmailPassword, { signIn, signUp } from 'supertokens-web-js/recipe/emailpassword'
import { User } from 'supertokens-web-js/lib/build/types';

export const LoginProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null)
    const [loginState, setLoginState] = useState<LoginState>(LoginState.LoggedOut)
    const [loginError, setLoginError] = useState<string>('')

    useEffect(() => {
        SuperTokens.init({
            appInfo: {
                apiDomain: document.location.host,
                apiBasePath: "/auth",
                appName: "Moon App",
            },
            recipeList: [
                Session.init(),
                EmailPassword.init(),
            ],
        });
    }, [])

    const doLogin = (email: string, password: string) => {
        signIn({
            formFields: [
                { id: "email", value: email },
                { id: "password", value: password },
            ]
        }).then((res) => {
            if (res.status === 'OK') {
                setUser(res.user)
                setLoginState(LoginState.LoggedIn)
            } else if (res.status === 'WRONG_CREDENTIALS_ERROR') {
                setUser(null)
                setLoginState(LoginState.LoggedOut)
            }
        }).catch((err) => {
            setLoginState(LoginState.LoggedOut)
            setLoginError(err.message)
        })
    }

    const doSignUp = (email: string, password: string) => {
        signUp({
            formFields: [
                { id: "email", value: email },
                { id: "password", value: password },
            ]
        }).then((res) => {
            if (res.status === 'OK') {
                setUser(res.user)
                setLoginState(LoginState.LoggedIn)
            } else if (res.status === 'SIGN_UP_NOT_ALLOWED') {
                setUser(null)
                setLoginError('Unable to sign up with these credentials')
                setLoginState(LoginState.LoggedOut)
            }
        }).catch((err) => {
            setLoginState(LoginState.LoggedOut)
            setLoginError(err.message)
        })
    }

    const doLogout = () => {
        signOut().then(() => {
            setUser(null)
            setLoginState(LoginState.LoggedOut)
        })
    }

    return (
        <LoginContext.Provider value={{
            userName: user?.emails[0] || '',
            loginState,
            doLogin,
            doSignUp,
            doLogout,
            loginError: ''
        }}>
            {children}
        </LoginContext.Provider>
    )
}