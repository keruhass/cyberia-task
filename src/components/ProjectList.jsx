import React, { useEffect, useState } from 'react'

import '../styles/ComponentStyles/ProjectList.scss'

import ProjectCard from './ProjectCard'

import GetProjects from '../API/GetProjects'

const ProjectList = ({categoryId, ...props}) => {

    const [projects, setProjects] = useState([])
    const [filtredProjects, setFiltredProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])

    useEffect(() => {
        setFiltredProjects([...projects].filter((item) => (item.categories[0].id === categoryId ? true : false)))
    }, [categoryId])

    async function fetchProjects() {
        const pr = await GetProjects.getAll()
        setProjects(pr.items)
        setFiltredProjects(pr.items)
    }
    

  return (
    <div {...props} className='projectList'>
        {filtredProjects.map(project =>
            <ProjectCard backgroundImage={project.image} title={project.title} key={project.id}/>
        )}
    </div>
  )
}

export default ProjectList
