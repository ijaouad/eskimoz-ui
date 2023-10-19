import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Radio, Space } from 'antd'

import { ButtonDropdown } from "./../button/button";

import './../../styles/modules/radio-dropdown.css'


const RadioDropdown = props => {

    const [value, setValue] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false)

    const options = [
        { name: 'Option 1', value: 'option-1' },
        { name: 'Option 2', value: 'option-2' },
        { name: 'Option 3', value: 'option-3' },
        { name: 'Option 4', value: 'option-4' },
        { name: 'Option 5', value: 'option-5' },
    ]
    
    const title = 'Open options'

    
    const onChange = (e) => {
        // alert('radio checked ....' + e.target.value + '\n' + e.target.value === value);
        setValue(e.target.value);
    };

    return (
        <div className="radio-dropdown-container">
            <div className=''>
                <ButtonDropdown text={title} onClick={() => setShowDropdown(!showDropdown)}/>
            </div>
           { showDropdown && <div className="radio-dropdown">
                <div className='radio-dropdown-options'>
                    <Radio.Group onChange={onChange} value={value} style={{ width: '100%' }}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            {options.map((option) => (
                                <Radio value={option.value} className={`dropdown-radio-item ${option.value == value && 'checked'}`} >
                                    {option.name}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </div>
            </div>}
        </div>
    )
}

RadioDropdown.propTypes = {}

export default RadioDropdown



