import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ReactComponent as Success } from '../icons/Success.svg';


const SuccessModal = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);

    return (
        <Modal
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        maskClosable={true}
        okText="Ок"
        closable={false}
        footer={false}
        wrapClassName='modal success'
      >

        <Success className='modal__icon' />

        <div className="modal__content">
          <p className="modal__content__title">Новый пароль отправлен!</p>
          <p className="modal__content__text">Проверьте эл. почту , мы отправили <br />вам новый пароль.</p>
        </div>

        <Button className="modal__button" onClick={() => {setIsModalVisible(false)}}>Ок</Button>

      </Modal>
    )
}

export default SuccessModal;