import React from 'react'
import { Switch as AntSwitch } from 'antd'

import './../../styles/modules/switch.css'

const Switch = ({ ...props }) => {
  return (
    <>
      {/* //custom switch
      <label className="switch-toggle">
        <input type="checkbox" />
        <span className="switch-control"></span>
      </label> */}
      <AntSwitch />
    </>
  )
}


export default Switch