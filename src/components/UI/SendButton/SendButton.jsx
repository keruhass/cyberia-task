import React from 'react'

import cl from './SendButton.module.scss'

const SendButton = ({children, ...props}) => {
  return (
    <button {...props} className={cl.sendButton}>
        {children}
    </button>
  )
}

export default SendButton
