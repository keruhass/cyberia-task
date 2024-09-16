import React from 'react'

import cl from './DefaultTextArea.module.scss'

const DefaultTextArea = ({placeholder, ...props}) => {
  return (
    <div {...props} className={cl.defaultInput}>
        <textarea required></textarea>
        <div><a>{placeholder}</a></div>
    </div>
  )
}

export default DefaultTextArea
