import React, { FormEvent } from 'react'

import './user-form.css'
import { Spinner } from '../spinner/spinner'
import { Button } from '../button/button'

export type UserFormProps = {
    kind: 'login' | 'signup',
    onSubmit: (name: string, email: string, age: number) => void
    errorMessage?: string
    showSpinner?: boolean
}

export const UserForm = ({ kind, onSubmit, errorMessage, showSpinner }: UserFormProps) => {

    return (
        <div className='login-form-container'>
            <form role="form" className='login-form' onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault()

                if (showSpinner) return;

                const { name, email, age } = Object.fromEntries(
                    new FormData(e.currentTarget).entries()
                ) as { name: string, email: string, age: string }

                onSubmit(name, email, parseInt(age))
            }}>
                <div className='login-message-dialog' role="alert" aria-expanded={!!errorMessage || !!showSpinner}>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    {showSpinner && <p className='status-message'>{kind === 'login' ? 'Logging In' : 'Signing Up'}</p>}
                </div>
                <label htmlFor="email">
                    Email (required)
                </label>
                <input disabled={showSpinner} name="email" id="email" type="email" required={true} />
                <label htmlFor="text">
                    Name (required)
                </label>
                <input disabled={showSpinner} name="name" id="name" type="text" required={true} />
                <label htmlFor="text">
                    Age (required)
                </label>
                <input disabled={showSpinner} name="age" id="age" type="number" required={true} />
                <div className="login-button-container">
                    {!showSpinner
                        ? <Button type="submit" name="Login">{kind === 'login' ? 'Login' : 'Sign Up'}</Button>
                        : <Spinner><Button disabled={true} type="submit" name="Login">Login</Button></Spinner>
                    }
                </div>
            </form>
        </div>
    )
}