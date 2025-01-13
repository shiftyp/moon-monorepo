import React from 'react'
import { ModalContainer, ModalContent } from "./modal";
import LoginFixtures from '../login-form/login-form.fixture'

export default {
    'Closed Modal': (
        <ModalContainer isOpen={false} onClose={() => console.log('onClose')}>
            <ModalContent heading="Basic Modal" id="basic-modal">
                Modal Content
            </ModalContent>
        </ModalContainer>
    ),
    'Basic Modal': (
        <ModalContainer isOpen={true} onClose={() => console.log('onClose')}>
            <ModalContent heading="Basic Modal" id="basic-modal">
                Modal Content
            </ModalContent>
        </ModalContainer>
    ),
    'Modal With Login': (
        <ModalContainer isOpen={true} onClose={() => console.log('onClose')}>
            <ModalContent heading="Login Modal" id="login-modal">
                {LoginFixtures["Basic Login"]}
            </ModalContent>
        </ModalContainer>
    ),
    'Modal With Spinner Login': (
        <ModalContainer isOpen={true} onClose={() => console.log('onClose')}>
            <ModalContent heading="Login Modal" id="login-modal">
                {LoginFixtures["Basic Spinner Login"]}
            </ModalContent>
        </ModalContainer>
    ),
    'Modal With Failed Login': (
        <ModalContainer isOpen={true} onClose={() => console.log('onClose')}>
            <ModalContent heading="Login Modal" id="login-modal">
                {LoginFixtures["Basic Failed Login"]}
            </ModalContent>
        </ModalContainer>
    )
}