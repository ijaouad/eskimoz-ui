import React, { useState } from 'react'

import './../../styles/modules/switch-control.css'


/**
 * @param  {boolean}   options    - 
*/
const SwitchControl = ({ options, ...props }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className='switch-control'>
      <div className={`switch-control-item active`}>
        Label 1
      </div>
      <div className={`switch-control-item`}>
        Label 2
      </div>
    </div>
  )
}




export default SwitchControl