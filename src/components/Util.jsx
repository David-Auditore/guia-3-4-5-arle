import React from 'react'

export function getImageUrl (person, size = "s") {
  return (
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2U-ph9IB1vinG_bVi_ATa7EjXPRVq4k8e2oYkQf4CUa40XxwoWELKLdvPM77E_3lI4A&usqp=CAU' +
    person.imageId + 
    size + 
    '.jpg'
  )
}

export default getImageUrl;