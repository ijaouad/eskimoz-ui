import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Radio, Space } from 'antd'
import Text from "../text/text";

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

    const onChange = (e) => {
        // alert('radio checked ....' + e.target.value + '\n' + e.target.value === value);
        setValue(e.target.value);
    };

    return (
        <div className="radio-dropdown-container">
            <div className=''>
                <button className='radio-dropdown-button' onClick={() => setShowDropdown(!showDropdown)}>
                    <Text variant={'paragraph-small'}>Title</Text>
                    <Icon />
                </button>
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



function Icon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M7.28572 2.50021L3.89286 5.89307L0.5 2.50021" stroke="#1C1D1E" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}