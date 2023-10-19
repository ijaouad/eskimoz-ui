import React, { ReactNode } from "react";
import PropTypes from 'prop-types';

import './../../styles/modules/button.css'
import './../../styles/state/button.css'


/**
 * All different kind of button options
 *
 * @type {Object}
*/

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  {string}    variant     - primary | secondary | danger | icon | link
 * @param  {string}    size        - large | small
 * @param  {boolean}   disabled    - true | false
 * @param  {Object}    icon        - SVG icon
 * @param  {boolean}   width       - full | fit
*/

const Button = ({ text, variant = 'primary', size, icon, disabled, width, ...props }) => {

    let buttonClass = `button button-${variant} width-${width} `

    if (variant == 'primary' || variant == 'secondary') {
        buttonClass += `button-${size}`
    }

    return (
        <button {...props} className={buttonClass} disabled={disabled}>
            {(icon && variant != 'danger') ? icon : null}
            {(variant != 'icon') && text}
        </button>
    )
}


Button.propTypes = {
    text: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'icon', 'link']),
    width: PropTypes.oneOf(['full', 'fit']),
    size: PropTypes.oneOf(['large', 'small']),
    disabled: PropTypes.bool,
    icon: PropTypes.node
};

export default Button