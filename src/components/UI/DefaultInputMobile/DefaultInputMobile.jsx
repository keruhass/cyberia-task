import React from 'react'

import cl from './DefaultInputMobile.module.scss'

const DefaultInputMobile = ({...props}) => {
  return (
    <input {...props} className={cl.defaultInputMobile}>
      
    </input>
  )
}

export default DefaultInputMobile
