import React, { useEffect, useState } from 'react'

import cl from './DefaultCheckbox.module.scss'

const DefaultCheckbox = ({setCheckBoxState, ...props}) => {

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
      setCheckBoxState(isChecked)
    }, [isChecked])

  return (
    <div 
      {...props} 
      style={isChecked === true ? {border: '1.5px solid white'} : {border: '1.5px solid gray'}} 
      className={cl.defaultCheckbox} 
      onClick={() => isChecked === true ? setIsChecked(false) : setIsChecked(true)}
    >
      {isChecked &&
        <a>&#10003;</a>
      }
    </div>
  )
}

export default DefaultCheckbox
