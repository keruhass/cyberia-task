import React from 'react'

import '../styles/ComponentStyles/Footer.scss'

import logo from '../media/images/logo.svg'

const Footer = ({...props}) => {
  return (
    <div {...props} className='footer'>
        <div className='footer-content'>
            <div className='footer-content-main'>
                <img src={logo}/>
                <a>Веб-разработка и усиление IT-команд</a>
            </div>
            <div className='footer-content-information'>
                <a>+7 999 123 45 67</a>
                <a>Агентство</a>
                <a>Блог</a>
                <a>hello@cyberia.studio</a>
                <a>Услуги</a>
                <a>Контакты</a>
                <a>ул.Ярных, д.35, оф.10</a>
                <a>Кейсы</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
