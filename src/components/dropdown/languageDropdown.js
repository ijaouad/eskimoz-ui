import { Dropdown, Space } from 'antd';
import React, { useState } from 'react'

import './../../styles/modules/language-dropdown.css'



const LanguageDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeItems, setActiveItems] = useState([]);

    const [list, setList] = useState([
        { icon: <Icon />, name: 'Français', onClick: () => { alert('Set Français Language') } },
        { icon: <Icon />, name: 'Anglais', onClick: () => { alert('Set Anglais Language') } },
        { icon: <Icon />, name: 'Espagnol', onClick: () => { alert('Set Espagnol Language') } },
        { icon: <Icon />, name: 'Allemand', onClick: () => { alert('Set Allemand Language') } }
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


function Icon() {
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

function Arrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={5} viewBox="0 0 8 5" fill="none">
            <path d="M7.28572 1.07144L3.89286 4.46429L0.5 1.07144" stroke="#1C1D1E" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}




