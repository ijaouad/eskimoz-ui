import React from "react";

import { Meta } from "@storybook/react"
import { PopupRed } from "../components/popup/popup";


const meta = {
    title: 'PopupRed',
    component: PopupRed,
}

export default meta



export const RedPopup = (args) => <PopupRed {...args} />;
RedPopup.args = {
    title: 'Are you sure?',
    details: 'By clicking on the `confirm` button, you will lose the information entered in the input fields.',
    icon: <Icon />,
    onCancel: () => { alert('canceled :(') },
    onConfirm: () => { alert('confirmed :D') }
};



function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 25 22" fill="none">
            <path d="M12.1113 12.2877V8.13216" stroke="#CD1F1F" stroke-width="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3653 2.30917L22.8753 17.2025C23.8642 18.9336 22.6142 21.0881 20.6208 21.0881H3.60085C1.6064 21.0881 0.356403 18.9336 1.3464 17.2025L9.8564 2.30917C10.8531 0.563611 13.3686 0.563611 14.3653 2.30917Z" stroke="#CD1F1F" stroke-width="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.1078 14.7767C11.6663 14.7767 11.3079 15.1351 11.3111 15.5767C11.3111 16.0183 11.6695 16.3767 12.111 16.3767C12.5526 16.3767 12.911 16.0183 12.911 15.5767C12.911 15.1351 12.5526 14.7767 12.1078 14.7767Z" fill="#CD1F1F" />
        </svg>
    )
}