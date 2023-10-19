import { Dropdown, Space } from 'antd';
import React, { useState } from 'react'

import './../../styles/modules/language-dropdown.css'



const LanguageDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeItems, setActiveItems] = useState([]);

    const [list, setList] = useState([
        { icon: <IconFR />, name: 'Français', onClick: () => { alert('Set Français Language') } },
        { icon: <IconUK />, name: 'English', onClick: () => { alert('Set Anglais Language') } },
        { icon: <IconIT />, name: 'Italiano', onClick: () => { alert('Set Espagnol Language') } },
    ]);

    const handleItemClick = (index) => {
        if (activeItems.includes(index)) {
            setActiveItems(activeItems.filter(itemIndex => itemIndex !== index));
        } else {
            setActiveItems([...activeItems, index]);
        }
    }

    const handleArrowButtonClick = (event) => {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    }

    return (
        <div>
            <div className="language-dropdown-container">

                {list.map((item, index) => {
                    const isActive = activeItems.includes(index);

                    if (index === 0) {
                        return (
                            <button
                                className={`language-dropdown-button ${isActive && 'active'}`}
                                type="button"
                                key={item.name}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className='language-dropdown-info'>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                                <button onClick={handleArrowButtonClick} className='language-dropdown-arrow'>
                                    <Arrow />
                                </button>
                            </button>
                        )
                    }

                    return (
                        <>
                            {showDropdown && (
                                <button
                                    className={`language-dropdown-button ${isActive && 'active'}`}
                                    type="button"
                                    key={item.name}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <div className='language-dropdown-info'>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </div>
                                </button>
                            )}

                        </>
                    )
                })}
            </div>
        </div>
    );
}


LanguageDropdown.propTypes = {}

export default LanguageDropdown;


function IconFR() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} viewBox="0 0 24 18" fill="none">
            <g id="Flags">
                <rect id="Mask" x={0.25} y={0.25} width={23.5} height={16.6429} rx={1.75} fill="white" stroke="#F5F5F5" strokeWidth={0.5} />
                <mask id="mask0_850_80275" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={18}>
                    <rect id="Mask_2" x={0.25} y={0.25} width={23.5} height={16.6429} rx={1.75} fill="white" stroke="white" strokeWidth={0.5} />
                </mask>
                <g mask="url(#mask0_850_80275)">
                    <rect id="Mask_3" x={16} width={8} height={17.1429} fill="#F44653" />
                    <path id="Rectangle 2" fillRule="evenodd" clipRule="evenodd" d="M0 17.1429H8V0H0V17.1429Z" fill="#1035BB" />
                </g>
            </g>
        </svg>
    )
}

function IconUK() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
            <rect y="0.285767" width="24" height="17.1429" rx="2" fill="white" />
            <mask id="mask0_850_80286" maskType="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="18">
                <rect y="0.285767" width="24" height="17.1429" rx="2" fill="white" />
            </mask>
            <g mask="url(#mask0_850_80286)">
                <rect y="0.285767" width="24" height="17.1429" fill="#0A17A7" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.72032 11.7144L-2.37744 17.1764L-1.09929 19.0713L9.14283 12.1629V18.5715H14.8571V12.1629L25.0992 19.0713L26.3774 17.1764L18.2796 11.7144H24V6.00009H18.2796L26.3774 0.538071L25.0992 -1.35687L14.8571 5.55153V-0.857058H9.14283V5.55153L-1.09929 -1.35687L-2.37744 0.538074L5.72032 6.00009H-2.67029e-05V11.7144H5.72032Z" fill="white" />
                <path d="M16.001 5.71336L26.857 -1.42853" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
                <path d="M17.1538 12.0265L26.8857 18.5861" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
                <path d="M6.86209 5.69476L-3.28906 -1.14648" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
                <path d="M7.9631 11.9471L-3.28906 19.4091" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 10.5715H10.2857V17.4286H13.7143V10.5715H24V7.14291H13.7143V0.285767H10.2857V7.14291H0V10.5715Z" fill="#E6273E" />
            </g>
        </svg>
    );
}

function IconIT() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
            <g id="Flags">
                <rect id="Mask" x="0.25" y="0.25" width="23.5" height="16.6429" rx="1.75" fill="white" stroke="#F5F5F5" strokeWidth="0.5" />
                <mask id="mask0_850_80275" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="18">
                    <rect id="Mask_2" x="0.25" y="0.25" width="23.5" height="16.6429" rx="1.75" fill="white" stroke="white" strokeWidth="0.5" />
                </mask>
                <g mask="url(#mask0_850_80275)">
                    <rect id="Mask_3" x="16" width="8" height="17.1429" fill="#F44653" />
                    <path id="Rectangle 2" fillRule="evenodd" clipRule="evenodd" d="M0 17.1429H8V0H0V17.1429Z" fill="#1BB65D" />
                </g>
            </g>
        </svg>
    );
}


function Arrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={5} viewBox="0 0 8 5" fill="none">
            <path d="M7.28572 1.07144L3.89286 4.46429L0.5 1.07144" stroke="#1C1D1E" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}




