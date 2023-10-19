import React from "react";
import { Meta } from "@storybook/react"
import RadioDropdown from "../components/dropdown/radioDropdown";



const meta = {
    title: 'radioDropdown',
    component: RadioDropdown,
}

export default meta



export const radioDropdownn = (args) => <RadioDropdown {...args} />;
radioDropdownn.args = {};
