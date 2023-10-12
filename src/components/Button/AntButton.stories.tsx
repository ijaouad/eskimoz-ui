import React from 'react'
import { Meta, Story } from '@storybook/react'
import { AntButton } from './AntButton'


const meta : Meta = {
    title: 'AntButton',
    component: AntButton
}

export default meta


export const AntPrimary = (args) => <AntButton {...args} />;
AntPrimary.args = { children: 'Button' };