import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from './Button'


const meta : Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            defaultValue: 'primary'
        },
        size: {
            defaultValue: 'large'
        }
    }
}

export default meta


export const Primary = (args) => <Button {...args} />;
Primary.args = { children: 'Button' };