import React, { ReactNode } from "react";
import './../../styles/modules/heading.css'


interface Props {
    children: ReactNode,
    variant: '1' | '2' | '3' | '4' | '5' | '6',
}


export const Heading = ({ children, variant, ...props }: Props) => {

    return (
        <h1 {...props} className={`heading heading-${variant}`}>{children}</h1>
    )
}