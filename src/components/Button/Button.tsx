import React, { ReactNode } from "react";
import './../../styles/modules/button.css'
import './../../styles/state/button.css'

interface Props {
    children: ReactNode,
    variant?: 'primary' | 'secondary' | 'danger',
    size: 'large' | 'small',
    disabled: boolean,
    icon: boolean,
    dropdown: boolean
    /*
    Show Dropdown=true;
    Show Text=true;
    Text="Button text";*/
}


export const Button = ({ children, variant = 'primary', size, icon, dropdown, disabled, ...props }: Props) => {

    return (
        <button {...props} className={`button button-${variant} button-${size}`} disabled={disabled}>

            { dropdown ?
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 0.642822C6.5 0.36668 6.27614 0.142822 6 0.142822C5.72386 0.142822 5.5 0.36668 5.5 0.642822V5.5H0.643066C0.366924 5.5 0.143066 5.72386 0.143066 6C0.143066 6.27614 0.366924 6.5 0.643066 6.5H5.5V11.3571C5.5 11.6333 5.72386 11.8571 6 11.8571C6.27614 11.8571 6.5 11.6333 6.5 11.3571V6.5H11.3574C11.6335 6.5 11.8574 6.27614 11.8574 6C11.8574 5.72386 11.6335 5.5 11.3574 5.5H6.5V0.642822Z" fill="currentColor"/>
                </svg>
            : null }

            { children }

            { dropdown ?
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="4" viewBox="0 0 7 4" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 0.200524C0.341709 0.00526161 0.658291 0.00526161 0.853553 0.200524L3.5 2.84697L6.14645 0.200524C6.34171 0.00526161 6.65829 0.00526161 6.85355 0.200524C7.04882 0.395786 7.04882 0.712368 6.85355 0.907631L4.03804 3.72314C4.03803 3.72316 4.03801 3.72318 4.03799 3.7232C4.03797 3.72321 4.03795 3.72323 4.03793 3.72325C3.74082 4.02028 3.25918 4.02028 2.96207 3.72325L2.96201 3.7232L0.146447 0.907631C-0.0488155 0.712368 -0.0488155 0.395786 0.146447 0.200524Z" fill="currentColor" />
                </svg>
            : null }
        </button>
    )
}

/**
    Style="Primary";
    State="Default";
    Size="Big";
    Show Icon=true;
    Show Dropdown=true;
    Show Text=true;
    Text="Button text";
*/