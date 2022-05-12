import React, { useState } from 'react';
import { Button, Input, Checkbox } from 'antd';

const login = () => {
    return (
        <div className="loginForm__wrapper">
        <p className="loginForm__title">Восстановелние <br/> пароля</p>
        <p className="loginForm__title__subtitle">Введите в форме ниже телефон и e-mail, к которому был привязан аккаунт. Мы отправим вам на электронный адрес новый пароль.</p>
        
        <div className="loginForm__inputs__wrapper">
          <Input className='loginForm__input' placeholder="Номер телефона" />
          <Input.Password className='loginForm__input' placeholder="Пароль" />

          <div className="loginForm__rememberForgetPassword__wrapper">
            <Checkbox className='loginForm__rememberForgetPassword__remeber'>Запомнить меня</Checkbox>
            <a className='loginForm__rememberForgetPassword__forgoetPass'>Забыли пароль?</a>
          </div>
        </div>

        <div className="loginForm__button__wrapper">
          <Button className='loginForm__button primary'>Восстановить</Button>
        </div>

        <p className="loginForm__buttonFooterText">Вспомнили пароль? <a href="">Войти</a></p>
        
      </div>
    )
}

export default login;