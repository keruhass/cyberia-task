import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

import '../styles/ComponentStyles/PageInformation.scss'
import NavigationBarMobile from './NavigationBarMobile'

const PageInformation = ({...props}) => {

    const [viewPortWidth, setviewPortWidth] = useState(window.innerWidth) // Ширина вьюпорта

    const [currentPage, setCurrentPage] = useState(localStorage.getItem('page'))

    window.addEventListener('resize', () => {
      setviewPortWidth(window.innerWidth)
    })

    useEffect(() => {

      if (localStorage.getItem('page') === '') {
        setCurrentPage('Кейсы')
      }
      if (localStorage.getItem('page') === 'agency') {
        setCurrentPage('Агенство')
      }
      if (localStorage.getItem('page') === 'services') {
        setCurrentPage('Услуги')
      }
      if (localStorage.getItem('page') === 'blog') {
        setCurrentPage('Блог')
      }
      if (localStorage.getItem('page') === 'contacts') {
        setCurrentPage('Контакты')
      }

    }, [currentPage])

  return (
    <div {...props} className='pageInformation'>

        {viewPortWidth > 900
        ? <NavigationBar changePage={setCurrentPage}/>
        : <NavigationBarMobile changePage={setCurrentPage}/>
        }
        {/* <NavigationBar changePage={setCurrentPage}/> */}
        <div className='pageInformation-path'>
            <a className='pageInformation-path-first'>Главная /</a>
            <a className='pageInformation-path-second'>&nbsp;{currentPage}</a>
        </div>
        <a className='pageInformation-currentPage'>{currentPage}</a>
    </div>
  )
}

export default PageInformation
