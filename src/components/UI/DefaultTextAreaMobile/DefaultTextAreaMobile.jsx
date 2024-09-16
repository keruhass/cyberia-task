import React from 'react'

import cl from './DefaultTextAreaMobile.module.scss'

const DefaultTextAreaMobile = ({...props}) => {
  return (
    <textarea {...props} className={cl.defaultTextAreaMobile}>
      
    </textarea>
  )
}

export default DefaultTextAreaMobile
