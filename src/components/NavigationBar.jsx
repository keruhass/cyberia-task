import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/ComponentStyles/NavigationBar.scss'

import logo from '../media/images/logo.svg'

const NavigationBar = ({changePage, ...props}) => {
  return (
    <div {...props} className='navigationBar'>
        <img src={logo}/>
        <div className='navigationBar-links'>
            <Link to={'/agency'} onClick={() => localStorage.setItem('page', 'agency')}>Агенство</Link>
            <Link to={'/services'} onClick={() => localStorage.setItem('page', 'services')}>Услуги</Link>
            <Link to={'/'} onClick={() => localStorage.setItem('page', '')}>Кейсы</Link>
            <Link to={'/blog'} onClick={() => localStorage.setItem('page', 'blog')}>Блог</Link>
            <Link to={'/contacts'} onClick={() => localStorage.setItem('page', 'contacts')}>Контакты</Link>
        </div>
    </div>
  )
}

export default NavigationBar
