import { Row, Col, Input, Checkbox, Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { } from '@ant-design/icons';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import PasswordRecovery from './components/PasswordRecovery';
import SuccessModal from './components/SuccessModal';


import { ReactComponent as Logo } from './icons/Logo.svg';
import { ReactComponent as Close } from './icons/Close.svg';

// const pageElements = {'login': {title: 'Вход в кабинет'}, inputs:[{name:'phone', placeholder: 'Номер телефона'}, {name:'password', placeholder: 'Пароль'} ]}

import Home from './img/Home.png';

function App() {
  return (
    <div className="App">
      <div className="loginForm">

        <header className="loginForm__header">

          <div className="loginForm__header__logo">
            <Logo />
          </div>

          <div className="loginForm__header__close">
            <Close />
          </div>

        </header>

        <div className="loginForm__left">
          <div className="loginForm__left__img__container">
            <img src={Home} alt="" className="loginForm__left__img" />
          </div>
        </div>

        <div className="container">
          <Row className='formRow'>
            <Col xl={{ offset: 14, span: 10 }} lg={{ offset: 14, span: 10 }} md={{ offset: 0, span: 24 }} className='loginForm__right' >

              {/* <Login /> */}

              <Register />

              {/* <PasswordRecovery /> */}



            </Col>
          </Row>

            <SuccessModal />

        </div>
      </div>
    </div>
  );
}

export default App;
