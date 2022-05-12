import { React, useState } from 'react';

import { Select } from 'antd';

import { ReactComponent as SelectMark } from '../icons/SelectMark.svg';
import { ReactComponent as SelectArrow } from '../icons/SelectArrow.svg';


const SelectOne = (props) => {

    debugger

    const [value, setValue] = useState(null);

    const { content, placeholder } = props;

    const { Option } = Select;


    const handleClick = ( selected ) => {

        if(selected === value) {
            setValue(null)
        } else {
            setValue(selected)
        }
    }

    debugger


    return (

                    <Select className='loginForm__input'
                            placeholder="Филиал"
                            dropdownClassName='selectOne__dropdown'
                            onSelect={handleClick}
                            value={value} >


                        {content.map(item => {
                            return (
                                <Option value={item.value} label={item.name} className="demo-option-label-item selectOne__item">
                                    <div className="selectOne__item__text">{item.name}</div>
                                    <div className="selectOne__item__icon"><SelectMark /></div>
                                </Option>
                            )
                        })}



                    </Select>

    )

}

export default SelectOne;