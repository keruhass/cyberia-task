import React from 'react'

import cl from './DefaultButton.module.scss'

const DefaultButton = ({children, ...props}) => {
  return (
    <button {...props} className={cl.defaultButton}>
        {children}
    </button>
  )
}

export default DefaultButton
