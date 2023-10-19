import React from 'react'
import { Switch as AntSwitch } from 'antd'
import PropTypes from 'prop-types'

import './../../styles/modules/switch.css'


/**
 * @param  props  - Initialy extands checkbox attributes
*/
const Switch = ({ ...props }) => {
  return (
    <>
      <label className="switch-toggle">
        <input type="checkbox" {...props}/>
        <span className="switch-control"></span>
      </label>
      {/* <AntSwitch /> */}
    </>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Switch