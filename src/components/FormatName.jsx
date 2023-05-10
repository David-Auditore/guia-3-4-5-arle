import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'David',
    lastName: 'Molina'
};

export const FormatName = () => {
    if (user) {
        return <h1>Hola, {formatName(user)}!</h1>
    }
    return (
        <h1>Hola desconocido</h1>
  )
}
