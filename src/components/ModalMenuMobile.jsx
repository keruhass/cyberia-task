import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/ComponentStyles/ModalMenuMobile.scss'

import cross from '../media/images/icons/cross.svg'

const ModalMenuMobile = ({buttonState, changePageInModal, ...props}) => {
  return (
    <div {...props} className='modalMenuMobile'>
        <img src={cross} onClick={() => buttonState(false)}/>
        <div className='modalMenuMobile-links'>
            <Link to={'/agency'} onClick={() => changePageInModal('Агенство')}>Агенство</Link>
            <Link to={'/services'} onClick={() => changePageInModal('Услуги')}>Услуги</Link>
            <Link to={'/'} onClick={() => changePageInModal('Кейсы')}>Кейсы</Link>
            <Link to={'/blog'} onClick={() => changePageInModal('Блог')}>Блог</Link>
            <Link to={'/contacts'} onClick={() => changePageInModal('Контакты')}>Контакты</Link>
        </div>
        <div className='modalMenuMobile-contacts'>
            <a style={{marginTop: '38px', fontSize: '18px'}}>Контакты:</a>
            <a style={{marginTop: '42px', fontSize: '16px'}}>+7 999 123 45 67</a>
            <a style={{marginTop: '19px', fontSize: '16px'}}>hello@cyberia.studio</a>
            <a style={{marginTop: '19px', fontSize: '16px'}}>ул.Ярных, д.35, оф.10</a>
        </div>
    </div>
  )
}

export default ModalMenuMobile
