import React, { useState } from 'react'

import '../styles/PageStyles/ErrorPage.scss'
import PageInformation from '../components/PageInformation'

const ErrorPage = () => {

  const [viewPortWidth, setviewPortWidth] = useState(window.innerWidth) // Ширина вьпорта

  window.addEventListener('resize', () => {
    setviewPortWidth(window.innerWidth)
  })

  return (
    <div className='errorPage'>
        <PageInformation style={viewPortWidth > 900 ? {marginTop: '64px'} : {marginTop: '0px'}}/>
        <h1>Страница не найдена.</h1>
    </div>
  )
}

export default ErrorPage
