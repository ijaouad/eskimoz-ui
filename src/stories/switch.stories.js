import React from "react";
import { Meta } from "@storybook/react"
import Switch from "../components/switch/switch";



const meta = {
    title: 'Switch',
    component: Switch,
}

export default meta



export const SwitchToggle = (args) => <Switch {...args} />;
SwitchToggle.args = {};

