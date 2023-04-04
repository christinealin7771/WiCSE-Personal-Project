import React from 'react'
import ProjectItem from './ProjectItem'
// import proj1 from '../../images/proj1.jpg'
// import proj2 from '../../images/proj2.jpg'
import { ProjectList } from '../../data/ProjectList'

import './Projects.css'

const Projects = () => {
  return (
    <div className = "projects">
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {/* <ProjectItem name = "Social Media Website" image = {proj1}/>
        <ProjectItem name = "Classmate Finder" image = {proj2} /> */}
        {ProjectList.map((project, idx) => {
          return <ProjectItem id = {idx} name = {project.name} image = {project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects