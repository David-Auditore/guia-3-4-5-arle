import React from 'react'
import { AdminPanel } from './AdminPanel'
import { LoginForm } from './LoginForm'

export const ModuleContent = () => {
    let content;
        if(isLoggedIn) {
            content = <AdminPanel />
        } else {
        content = <LoginForm />
    }
    return (
        <>
        {content}
        </>
    )
}
