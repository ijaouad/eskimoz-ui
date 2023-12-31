import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Radio, Space } from 'antd'

import { ButtonDropdown } from "./../button/button";

import './../../styles/modules/radio-dropdown.css'


/** 
 * Radio Dropdown
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected item
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
*/
const RadioDropdown = ({ options, label, width, onChange, ...props }) => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [value, setValue] = useState() // onlu for story book test

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    };

    return (
        <div className="radio-dropdown-container" style={{width: width && width}}>
            <div className=''>
                <ButtonDropdown text={label} onClick={() => setShowDropdown(!showDropdown)} open={showDropdown} />
            </div>
            {showDropdown && <div className="radio-dropdown">
                <div className='radio-dropdown-options'>
                    <Radio.Group onChange={handleChange} value={value && value} className="w-full">
                        <Space direction="vertical" className="w-full">
                            {options.map((option) => (
                                <Radio value={option.value} className={`dropdown-radio-item ${option.value == value && 'checked'}`} >
                                    {option.label}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </div>
            </div>}
        </div>
    )
}

RadioDropdown.propTypes = {
}

export default RadioDropdown



