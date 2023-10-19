import React from "react";
import { Meta } from "@storybook/react"
import LanguageDropdown from "../components/dropdown/languageDropdown";



const meta = {
    title: 'languageDropdown',
    component: LanguageDropdown,
}

export default meta



export const languageDropdownn = (args) => <LanguageDropdown {...args} />;
languageDropdownn.args = {};

