import React, { useState } from 'react';
import { Button, Input, Checkbox } from 'antd';

const login = () => {
    return (
        <div className="loginForm__wrapper">
        <p className="loginForm__title">Вход в кабинет</p>
        
        <div className="loginForm__inputs__wrapper">
          <Input className='loginForm__input' placeholder="Номер телефона" />
          <Input.Password className='loginForm__input' placeholder="Пароль" />

          <div className="loginForm__rememberForgetPassword__wrapper">
            <Checkbox className='loginForm__rememberForgetPassword__remeber'>Запомнить меня</Checkbox>
            <a className='loginForm__rememberForgetPassword__forgoetPass'>Забыли пароль?</a>
          </div>
        </div>

        <div className="loginForm__button__wrapper">
          <Button className='loginForm__button primary'>Войти</Button>
          <Button className='loginForm__button secondary'>Зарегистрироваться</Button>
        </div>
        
      </div>
    )
}

export default login;