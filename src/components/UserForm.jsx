import React, { useState } from 'react'

import axios from 'axios'

import '../styles/ComponentStyles/UserForm.scss'
import DefaultInput from './UI/DefaultInput/DefaultInput'
import DefaultTextArea from './UI/DefaultTextArea/DefaultTextArea'
import DefaultCheckbox from './UI/DefaultCheckbox/DefaultCheckbox'
import SendButton from './UI/SendButton/SendButton'

const UserForm = () => {

  const [userForm, setUserForm] = useState({
    name: '',
    email: '', 
    phone: '', 
    message: ''
  })

  const sendForm = (e) => {
    e.preventDefault()

    axios.post("https://api.test.cyberia.studio/api/v1/feedbacks", {
      name: userForm.name,
      email: userForm.email,
      phone: userForm.phone,
      message: userForm.message,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const [checkBoxState, setCheckBoxState] = useState(false)

  return (
    <form className='userForm'>
        <a>Расскажите<br/>о вашем проекте:</a>
        <div className='userForm-inputs'>
            <DefaultInput placeholder={'Ваше имя*'} onChange={e => setUserForm({...userForm, name: e.target.value})}/>
            <DefaultInput placeholder={'Email*'} onChange={e => setUserForm({...userForm, email: e.target.value})}/>
            <DefaultInput placeholder={'Телефон*'} onChange={e => setUserForm({...userForm, phone: e.target.value})}/>
        </div>
        <DefaultTextArea style={{marginTop: '40px'}} placeholder={'Сообщение*'} onChange={e => setUserForm({...userForm, message: e.target.value})}/>
        <div className='userForm-personalData'>
            <DefaultCheckbox setCheckBoxState={setCheckBoxState} />
            <a style={checkBoxState === true ? {color: 'white'} : {color: 'gray'}}>Согласие на обработку персональных данных</a>
        </div>
        <SendButton disabled={checkBoxState === true ? false : true} style={{margin: '66px auto 0 auto'}} onClick={sendForm}>Обсудить проект</SendButton>
    </form>
  )
}

export default UserForm
