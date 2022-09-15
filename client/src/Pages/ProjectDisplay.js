import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { projectList } from '../Components/Projects/ProjectList';
import '../Components/Projects/ProjectsDisplay.css'

const ProjectDisplay = () => {

    const { id } =  useParams();
    const project = projectList[id]
  return (
    <div className='project'>
        <h1>{ project.name }</h1>
        <img src={project.image}></img>
        <p>
          <b>Skills:</b>{project.skills}
        </p>
        <FaGithub />
        </div>
  )
}

export default ProjectDisplay