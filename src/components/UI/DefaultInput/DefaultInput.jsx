import React from 'react'

import cl from './DefaultInput.module.scss'

const DefaultInput = ({placeholder, ...props}) => {
  return (
    <div {...props} className={cl.defaultInput}>
        <input placeholder={placeholder} required></input>
        <div><a>{placeholder}</a></div>
    </div>
  )
}

export default DefaultInput
