import {React, useState} from 'react'
import axios from 'axios'

import '../styles/ComponentStyles/UserFormMobile.scss'

import mailbox from '../media/images/mailbox.svg'
import DefaultInput from './UI/DefaultInput/DefaultInput'
import DefaultInputMobile from './UI/DefaultInputMobile/DefaultInputMobile'
import DefaultTextAreaMobile from './UI/DefaultTextAreaMobile/DefaultTextAreaMobile'
import SendButton from './UI/SendButton/SendButton'

const UserFormMobile = () => {

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

  return (
    <form className='userFormMobile'>
        <div className='userFormMobile-title'>
            <img src={mailbox}/>
            <a>Расскажите<br/> о вашем проекте</a>
        </div>
        <div className='userFormMobile-inputs'>
            <DefaultInputMobile placeholder='Ваше имя*' onChange={e => setUserForm({...userForm, name: e.target.value})}/>
            <DefaultInputMobile placeholder='Email*' onChange={e => setUserForm({...userForm, email: e.target.value})}/>
            <DefaultInputMobile placeholder='Телефон*' onChange={e => setUserForm({...userForm, phone: e.target.value})}/>
            <DefaultTextAreaMobile placeholder='Сообщение*' onChange={e => setUserForm({...userForm, message: e.target.value})}/>
        </div>
        <SendButton style={{marginTop: '42px', marginBottom: '26px'}} >отправить</SendButton>
        <a className='userFormMobile-personalData'>
            Нажимая “Отправить”, Вы даете согласие<br/> на обработку персональных данных
        </a>
    </form>
  )
}

export default UserFormMobile
