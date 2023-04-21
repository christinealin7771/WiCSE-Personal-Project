import React from 'react'

import {useNavigate} from 'react-router-dom'

const ProjectItem = ({title, image, id}) => {
  const navigate = useNavigate()

  return (
    <div className='projectItem' onClick={() => {navigate("/WiCSE-Personal-Project/displayproject/" + id)}}>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h1>{title}</h1>
    </div>
  )
}

export default ProjectItem
