import React from 'react'

const user = {
    name: 'Rick',
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    imgSize: 120
}

export const MyProfile = () => {
  return (
    <>
    <h1>{user.name}</h1>
    <img 
    className='avatar'
    src={user.image}
    alt={'Photo of' + user.name}
    style={{
        width: user.imgSize,
        height: user.imgSize
    }}
    />
    </>
  )
}

