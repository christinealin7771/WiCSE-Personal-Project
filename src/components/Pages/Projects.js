import React from 'react'

// import proj1 from '../../images/proj1.jpg'
import proj2 from '../../images/proj2.jpg'
import proj1 from '../../images/proj1.jpg'
import { ProjectList } from '../../data/ProjectList'

import ProjectItem from './ProjectItem.js'


import './Projects.css'

const Projects = () => {
  return (
    <div className = "projects">
      <h1>My Projects</h1>
      <div className='projectList'>

        {/* <ProjectItem title = "Twitter Website" image={proj1}/>
        <ProjectItem title = "Personal Website" image={proj2}/>
        <ProjectItem title = "Bob Website" image={proj1}/>
        <ProjectItem title = "Personal Website" image={proj1}/>
         */}
         
         {ProjectList.map((item, index) => {
            return <ProjectItem id = {index} title= {item.name} image= {item.image}/>
         })}
      </div>
      

      {/* <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name = "Social Media Website" image = {proj1}/>
        <ProjectItem name = "Classmate Finder" image = {proj2} />
        {ProjectList.map((project, idx) => {
          return <ProjectItem id = {idx} name = {project.name} image = {project.image}/>
        })}
      </div> */}
    </div>
  )
}

export default Projects