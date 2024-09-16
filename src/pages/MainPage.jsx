import React, { useState } from 'react'

import '../styles/PageStyles/MainPage.scss'
import '../styles/BaseStyles/fonts.scss'

import ProjectList from '../components/ProjectList'
import CategoriesList from '../components/CategoriesList'
import UserForm from '../components/UserForm'
import Footer from '../components/Footer'
import PageInformation from '../components/PageInformation'
import UserFormMobile from '../components/UserFormMobile'

const MainPage = () => {

  const [viewPortWidth, setviewPortWidth] = useState(window.innerWidth) // Ширина вьпорта

  const [categoryId, setCategoryId] = useState()

  const getCategoryId = (id) => {
    setCategoryId(id)
  }

  window.addEventListener('resize', () => {
    setviewPortWidth(window.innerWidth)
  })

  return (
    <div className='MainPage'>
      <PageInformation style={viewPortWidth > 900 ? {marginTop: '64px'} : {marginTop: '0px'}}/>
      <CategoriesList style={viewPortWidth > 900 ? {marginTop: '65px'} : {marginTop: '47px'}} getCategoryId={getCategoryId}/>
      <ProjectList style={viewPortWidth > 900 ? {marginTop: '52px'} : {marginTop: '40px', marginBottom: '48px'}} categoryId={categoryId}/>
      {viewPortWidth > 900
      ? <UserForm style={{marginTop: '100px'}}/>
      : <UserFormMobile/>
      }
      <Footer style={viewPortWidth > 900 ? {marginTop: '100px'} : {marginTop: '0px'}}/> 
    </div>
  )
}

export default MainPage
