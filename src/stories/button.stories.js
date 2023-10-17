import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button from '../components/button/button';

const meta = {
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
Primary.args = {
    children: 'Primary',
    icon: <Plus />
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
    children: 'Secondary',
    variant: 'secondary',
    icon: <Plus />
};

export const Danger = (args) => <Button {...args} />;
Danger.args = {
    children: 'Danger',
    variant: 'danger',
    icon: <Plus />,

};

export const Icon = (args) => <Button {...args} />;
Icon.args = {
    icon: <Plus />,
    variant: 'icon'
};

export const Link = (args) => <Button {...args} />;
Link.args = {
    children: 'Supprimer',
    variant: 'link',
    icon: <Delete />
};



function Plus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2.23804V11.7618" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.7621 7H2.23828" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function Delete() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 0.187481C2.97386 0.187481 2.75 0.411339 2.75 0.687481C2.75 0.963623 2.97386 1.18748 3.25 1.18748H6.75C7.02614 1.18748 7.25 0.963623 7.25 0.687481C7.25 0.411339 7.02614 0.187481 6.75 0.187481H3.25ZM0.416504 2.58329C0.416504 2.30715 0.640362 2.08329 0.916504 2.08329H9.08317C9.35931 2.08329 9.58317 2.30715 9.58317 2.58329C9.58317 2.85944 9.35931 3.08329 9.08317 3.08329H9V8.99997C9 9.9207 8.25406 10.6666 7.33333 10.6666H2.66667C1.74594 10.6666 1 9.9207 1 8.99997V3.08329H0.916504C0.640362 3.08329 0.416504 2.85944 0.416504 2.58329ZM2 3.08329H8V8.99997C8 9.36841 7.70177 9.66664 7.33333 9.66664H2.66667C2.29823 9.66664 2 9.36841 2 8.99997V3.08329ZM3.83301 4.41663C4.10915 4.41663 4.33301 4.64048 4.33301 4.91663V7.83329C4.33301 8.10943 4.10915 8.33329 3.83301 8.33329C3.55687 8.33329 3.33301 8.10943 3.33301 7.83329V4.91663C3.33301 4.64048 3.55687 4.41663 3.83301 4.41663ZM6.6665 4.91663C6.6665 4.64048 6.44265 4.41663 6.1665 4.41663C5.89036 4.41663 5.6665 4.64048 5.6665 4.91663V7.83329C5.6665 8.10943 5.89036 8.33329 6.1665 8.33329C6.44265 8.33329 6.6665 8.10943 6.6665 7.83329V4.91663Z" fill="currentColor" />
        </svg>
    )
}