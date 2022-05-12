import React from 'react';
import { Button, Input, Checkbox } from 'antd';
import Select from './SelectOne';

const filial = [
    { name: 'ПЛ Петропавловск-Камчатский', value: 'Petropavlovsk-Kamchatskij' },
    { name: 'ПЛ Ижевск', value: 'Izhevsk' },
    { name: 'ПЛ Череповец', value: 'Cherepovec' },
    { name: 'ПЛ Ярославль', value: 'Yaroslavl' },
    { name: 'ПЛ Воронеж', value: 'Voronezh' },
  ]

const Register = () => {
    return (
        <div className="loginForm__wrapper">
        <p className="loginForm__title">Регистрация</p>
        <p className="loginForm__title__subtitle">Уже есть аккаунт? <a href="">Войти</a></p>
        
        <div className="loginForm__inputs__wrapper">
          <Input className='loginForm__input' placeholder="ФИО" />
          <Input className='loginForm__input' placeholder="Номер телефона" />
          <Input className='loginForm__input' placeholder="E-mail" />
          <Select content={filial} />
          <Input.Password className='loginForm__input' placeholder="Пароль" />


          <div className="loginForm__rememberForgetPassword__wrapper">
            <Checkbox className='loginForm__rememberForgetPassword__remeber'>Запомнить меня</Checkbox>
            <a className='loginForm__rememberForgetPassword__forgoetPass'>Забыли пароль?</a>
          </div>
        </div>

        <div className="loginForm__button__wrapper">
          <Button className='loginForm__button primary'>Зарегистрироваться</Button>
        </div>
        
      </div>
    )
}

export default Register;