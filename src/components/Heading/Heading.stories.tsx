import React from 'react'
import { Meta } from '@storybook/react'
import { Heading } from './Heading'


const meta : Meta = {
    title: 'Heading',
    component: Heading,
    argTypes: {
        variant: {
            defaultValue: 'h1'
        }
    }
}

export default meta

export const Headings = (args) => <Heading {...args} />;
Headings.args = { children: 'Headings' };