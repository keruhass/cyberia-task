import React from 'react'

import '../styles/ComponentStyles/ProjectCard.scss'

import icon from '../media/images/icons/arrow.svg'

import mobileIcon from '../media/images/icons/arrow-white.svg'

const ProjectCard = ({backgroundImage, title}) => {

  return (
    <div className='projectCard' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='projectCard-title'>
            <div>
                <img src={icon}/>
                <a>{title}</a>
            </div>
        </div>
        <div className='projectCard-title-mobile'>
          <img src={mobileIcon}/>
          <a>{title}</a>
        </div>
    </div>
  )
}

export default ProjectCard
