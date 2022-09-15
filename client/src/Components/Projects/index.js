import React from 'react'
import ProjectItem from './ProjectItem'
import Img1 from '../../Images/Img-1.png'
import "../Projects/Projects.css"
import { projectList } from '../../Components/Projects/ProjectList'

const index = () => {
  return (
    <div className='projects' id='projects'>
        <h1 className='title'>MY PROJECTS</h1>
        <div className='projectList'>
            {projectList.map((project, idx) => {
                return <ProjectItem id={idx} name={project.name} image={project.image}/>
            })}

        </div>
    </div>
  )
}

export default index