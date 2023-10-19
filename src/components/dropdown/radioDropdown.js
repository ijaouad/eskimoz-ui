import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Radio, Space } from 'antd'

import './../../styles/modules/radio-dropdown.css'


const RadioDropdown = props => {

    const [value, setValue] = useState(1);

    const options = [
        { name: 'Get', value: 'Get' },
        { name: 'It', value: 'It' },
        { name: 'Done', value: 'Done' },
        { name: 'Nerd', value: 'Nerd' },
    ]

    const onChange = (e) => {
        alert('radio checked ....' + e.target.value + '\n' + e.target.value === value);
        setValue(e.target.value);
    };

    return (
        <div className='radio-dropdown'>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    { options.map((option) => (
                        <Radio value={option.value} className={`dropdown-radio-item ${option.value == value && 'checked'}`} >{option.name}</Radio>
                    )) }
                </Space>
            </Radio.Group>
        </div>
    )
}

RadioDropdown.propTypes = {}

export default RadioDropdown