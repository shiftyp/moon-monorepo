import React from 'react'
import { LoginForm } from "./login-form";

export default {
    'Basic Login': (
        <LoginForm kind="login" onSubmit={(username, password) => {
            console.log('onSubmit:', username, password);
        }} />
    ),
    'Basic Failed Login': (
        <LoginForm
            kind="login"
            onSubmit={(username, password) => {
                console.log('onSubmit:', username, password);
            }}
            errorMessage={"Bad Username or Password"}
        />),
    'Basic Spinner Login': (
        <LoginForm
            kind="login"
            onSubmit={(username, password) => {
                console.log('onSubmit:', username, password);
            }}
            showSpinner={true}
        />
    ),
    'Basic SignUp': (
        <LoginForm kind="signup" onSubmit={(username, password) => {
            console.log('onSubmit:', username, password);
        }} />
    ),
    'Basic Failed SignUp': (
        <LoginForm
            kind="signup"
            onSubmit={(username, password) => {
                console.log('onSubmit:', username, password);
            }}
            errorMessage={"Bad Username or Password"}
        />),
    'Basic Spinner SignUp': (
        <LoginForm
            kind="signup"
            onSubmit={(username, password) => {
                console.log('onSubmit:', username, password);
            }}
            showSpinner={true}
        />
    ),
}