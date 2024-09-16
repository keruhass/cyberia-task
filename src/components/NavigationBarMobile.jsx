import React, { useState } from 'react'

import '../styles/ComponentStyles/NavigationBarMobile.scss'

import logo from '../media/images/logo.svg'
import burger from '../media/images/icons/burger.svg'
import ModalMenuMobile from './ModalMenuMobile'

const NavigationBarMobile = ({changePage}) => {

    const [menuButtonState, setMenuButtonState] = useState(false)

    const changePageInModal = (page) => {
        changePage(page)
        console.log(page)
    } 

  return (
    <div className='navigationBarMobile'>
    <img className='navigationBarMobile-logo' src={logo}/>
    <img className='navigationBarMobile-burgerMenuOpenButton'
        src={burger}
        onClick={() => menuButtonState === true ? setMenuButtonState(false) : setMenuButtonState(true)}
    />
    <ModalMenuMobile changePageInModal={changePageInModal} buttonState={setMenuButtonState} style={menuButtonState === true ? {display: 'block'} : {display: 'none'}}/>
    </div>
  )
}

export default NavigationBarMobile
