import React from 'react'
import getImageUrl from './Util'

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export const Profile = () => {
  return (
    <>
    <div className='card'>
      <Avatar size={100}
      person={{name: "Juan Molina", imageId: "img1"}}
      /> {""}
    </div>
    <div className='card'>
      <Avatar size={80}
      person={{name: "Stella Restrepo", imageId: "img2"}}
      /> {""}
    </div>
    <div className='card'>
      <Avatar size={50}
      person={{name: "Natalia", imageId: "img3"}}
      /> {""}
    </div>
    </>
  )
}
